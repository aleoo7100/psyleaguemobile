import { gql } from '../../__generated__';

export const EVENT_LIST_QUERY = gql(`
  query EVENT_LIST_QUERY {
    events(order_by: { created_at: desc }) {
      events_id
      title
      thumbnail_url
      start_date
      description
      end_date
      registration_url
      created_at
      updated_at
    }
  }
`);

export const EVENT_DETAIL_QUERY = gql(`
  query EVENT_DETAIL_QUERY($events_id: String!) {
    events_by_pk(events_id: $events_id) {
      events_id
      title
      thumbnail_url
      start_date
      description
      end_date
      registration_url
      created_at
      updated_at
      events_streamers {
        streamer {
          full_name
          nick_name
          photo_url
          instagram_url
          facebook_url
          tiktok_url
          twitch_url
          youtube_url
        }
      }
    }
  }
`);

export const NEWS_LIST_QUERY = gql(`
  query NEWS_LIST_QUERY {
    news(order_by: { created_at: desc }) {
      news_id
      title
      content
      thumbnail_url
      short_description
      created_at
      updated_at
    }
  }
`);

export const NEWS_DETAIL_QUERY = gql(`
  query NEWS_DETAIL_QUERY($news_id: String!) {
    news_by_pk(news_id: $news_id) {
      news_id
      title
      content
      thumbnail_url
      short_description
      created_at
      updated_at
    }
  }
`);

// export const VIDEO_DETAIL = gql(`
//   query VIDEO_DETAIL($videos_id: String!) {
//     videos_by_pk(videos_id: $videos_id) {
//       videos_id
//       title
//       description
//       thumbnail_urlå
//       youtube_id
//       created_at
//       updated_at
//     }
//   }
// `);
