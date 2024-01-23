import {
  EVENT_LIST_QUERY,
  VIDEO_LIST_BY_CATEGORIES_QUERY,
} from '../../common/helpers/queries';
import { useQuery } from '@apollo/client';

export default function useVideosS() {
  const { data, loading, error } = useQuery(VIDEO_LIST_BY_CATEGORIES_QUERY, {
    onError: () => {},
  });
  return { data: data?.video_cagetories, loading };
}
