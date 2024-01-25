import { useState } from 'react';
import { VIDEO_LIST_BY_CATEGORIES_QUERY } from '../../common/helpers/queries';
import { useQuery } from '@apollo/client';

export default function useVideosS() {
  const [firstLoading, setFirstLoading] = useState(true);

  const { data, loading, error, refetch } = useQuery(
    VIDEO_LIST_BY_CATEGORIES_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: () => firstLoading && setFirstLoading(false),
    },
  );

  return {
    data: data?.video_cagetories,
    loading,
    refetch,
    isRefreshing: loading && !firstLoading,
  };
}
