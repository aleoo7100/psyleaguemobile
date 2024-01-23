import { EVENT_LIST_QUERY } from '../../common/helpers/queries';
import { useQuery } from '@apollo/client';

export default function useEventsS() {
  const { data, loading, error } = useQuery(EVENT_LIST_QUERY, {
    onError: () => {},
  });
  return { data: data?.events, loading };
}
