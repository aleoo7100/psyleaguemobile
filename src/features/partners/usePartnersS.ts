import { PARTNERS_STREAMERS_QUERY } from '../../common/helpers/queries';
import { useQuery } from '@apollo/client';

export default function usePartnersS() {
  const { data, loading, error } = useQuery(PARTNERS_STREAMERS_QUERY, {
    onError: () => {},
  });
  return { data: data, loading };
}
