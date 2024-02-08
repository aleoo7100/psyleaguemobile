import { NEWS_DETAIL_QUERY } from '../../../common/helpers/queries';
import { useQuery } from '@apollo/client';

interface UseNewDetailSProps {
  news_id: string;
}

export default function useNewDetailS(props: UseNewDetailSProps) {
  const { data, loading, error } = useQuery(NEWS_DETAIL_QUERY, {
    variables: {
      news_id: props.news_id,
    },
  });
  return { data: data?.news_by_pk, loading };
}
