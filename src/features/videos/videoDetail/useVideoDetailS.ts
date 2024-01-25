import { VIDEO_DETAIL } from '../../../common/helpers/queries';
import { useQuery } from '@apollo/client';

interface useVideoDetailSProps {
  videos_id: string;
}

export default function useVideoDetailS({ videos_id }: useVideoDetailSProps) {
  const { data, loading, error } = useQuery(VIDEO_DETAIL, {
    variables: { videos_id },
    onError: () => {},
  });
  return { data: data?.videos_by_pk, loading };
}
