import { useState } from 'react';
import { Ranking_User_QueryQuery } from '../../../__generated__/graphql';
import { RANKING_USER_QUERY } from '../../../common/helpers/queries';
import { useQuery } from '@apollo/client';
import moment from 'moment';

interface UseRankingDetailProps {
  users_id: string;
}

interface RankingData {
  ranking: number;
  users_id: string;
  full_name?: string | null | undefined;
  nick_name?: string | null | undefined;
  avatar_url?: string | null | undefined;
  events: {
    events_id: string;
    title: string;
    points: number;
    date: string;
  }[];
}

export default function useRankingDetail({ users_id }: UseRankingDetailProps) {
  const [data, setData] = useState<RankingData | undefined>();
  const { loading, error } = useQuery(RANKING_USER_QUERY, {
    onCompleted,
    variables: { users_id },
  });

  function onCompleted(data: Ranking_User_QueryQuery) {
    const newData = {
      users_id: data.users_by_pk?.users_id || '',
      full_name: data.users_by_pk?.full_name || undefined,
      nick_name: data.users_by_pk?.nick_name || undefined,
      avatar_url: data.users_by_pk?.avatar_url || undefined,
      events:
        data.users_by_pk?.users_games_points.map(item => ({
          events_id: item.event.events_id,
          title: item.event.title,
          points: item.points,
          date: moment(item.event.start_date).format('DD/MM/YYYY'),
        })) || [],
      ranking:
        data.users_by_pk?.users_games_points.reduce(
          (acc, curr) => acc + curr.points,
          0,
        ) || 0,
    };
    setData(newData);
  }

  return { data, loading };
}
