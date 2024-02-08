import { EVENT_DETAIL_QUERY } from '../../../common/helpers/queries';
import { useQuery } from '@apollo/client';

interface UseEventsSProps {
  events_id: string;
}

export default function useEventDetailS(props: UseEventsSProps) {
  const { data, loading, error } = useQuery(EVENT_DETAIL_QUERY, {
    variables: {
      events_id: props.events_id,
    },
  });
  return { data: data?.events_by_pk, loading };
}
