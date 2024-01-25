import { useState } from 'react';
import { EVENT_LIST_QUERY } from '../../common/helpers/queries';
import { useQuery } from '@apollo/client';

export default function useEventsS() {
  const [firstLoading, setFirstLoading] = useState(true);

  const { data, loading, error, refetch } = useQuery(EVENT_LIST_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => firstLoading && setFirstLoading(false),
  });

  return {
    data: data?.events,
    loading,
    refetch,
    isRefreshing: loading && !firstLoading,
  };
}
