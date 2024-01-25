import { useEffect, useState } from 'react';
import { RANKING_LIST_QUERY } from '../../common/helpers/queries';
import { NetworkStatus, useQuery } from '@apollo/client';
import { Ranking_List_QueryQuery } from '../../__generated__/graphql';

interface RankingData {
  ranking: number;
  users_id: string;
  full_name?: string | null | undefined;
  nick_name?: string | null | undefined;
  avatar_url?: string | null | undefined;
}

export default function useRankingS() {
  const [data, setData] = useState<RankingData[] | undefined>(undefined);
  const [firstLoading, setFirstLoading] = useState(true);

  const { loading, error, refetch } = useQuery(RANKING_LIST_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted,
  });

  function onCompleted(data: Ranking_List_QueryQuery) {
    if (firstLoading) setFirstLoading(false);
    const newData = data.users?.map((item, index) => {
      return {
        ...item,
        ranking: item.users_games_points?.reduce(
          (acc, curr) => acc + curr.points,
          0,
        ),
      };
    });
    setData(
      newData.filter(r => r.ranking > 0).sort((a, b) => b.ranking - a.ranking),
    );
  }

  return {
    data: data,
    loading,
    refetch,
    isRefreshing: loading && !firstLoading,
  };
}
