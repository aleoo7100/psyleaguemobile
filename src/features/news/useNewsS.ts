import { useQuery } from '@apollo/client';
import { NEWS_LIST_QUERY } from '../../common/helpers/queries';
import { useState } from 'react';

export default function useNewsS() {
  const [firstLoading, setFirstLoading] = useState(true);

  const { data, loading, error, refetch } = useQuery(NEWS_LIST_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => firstLoading && setFirstLoading(false),
  });

  return {
    data: data?.news,
    loading,
    refetch,
    isRefreshing: loading && !firstLoading,
  };
}
