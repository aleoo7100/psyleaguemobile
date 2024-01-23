import { useQuery } from '@apollo/client';
import { NEWS_LIST_QUERY } from '../../common/helpers/queries';

export default function useNewsS() {
  const { data, loading, error } = useQuery(NEWS_LIST_QUERY, {
    onError: () => {},
  });
  return { data: data?.news, loading };
}
