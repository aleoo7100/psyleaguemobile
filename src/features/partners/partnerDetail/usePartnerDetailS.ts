import { useQuery } from '@apollo/client';
import { PARTNER_DETAIL_QUERY } from '../../../common/helpers/queries';

interface usePartnerDetailSProps {
  partners_id?: string;
  streamers_id?: string;
}

export default function usePartnerDetailS(props: usePartnerDetailSProps) {
  const { data, loading, error } = useQuery(PARTNER_DETAIL_QUERY, {
    variables: {
      partners_id: props.partners_id || '',
      streamers_id: props.streamers_id || '',
    },
  });

  const partner = data?.partners_by_pk;
  const streamer = data?.streamers_by_pk;
  const datatoRender = {
    name: partner?.name || streamer?.full_name,
    description: partner?.description || streamer?.description,
    imageUrl: partner?.logo_url || streamer?.photo_url,
    facebookUrl: partner?.facebook_url || streamer?.facebook_url,
    instagramUrl: partner?.instagram_url || streamer?.instagram_url,
    tiktokUrl: partner?.tiktok_url || streamer?.tiktok_url,
    twitchUrl: partner?.twitch_url || streamer?.twitch_url,
    websiteUrl: partner?.website_url || streamer?.website_url,
    youtubeUrl: partner?.youtube_url || streamer?.youtube_url,
  };

  return { data: datatoRender, loading };
}
