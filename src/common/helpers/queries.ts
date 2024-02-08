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
      html_content
      short_description
      created_at
      updated_at
    }
  }
`);

export const VIDEO_LIST_BY_CATEGORIES_QUERY = gql(`
  query VIDEO_LIST_BY_CATEGORIES_QUERY {
    video_cagetories(order_by: { created_at: desc }) {
      videos_cagetories_id
      name
      created_at
      updated_at
      video_categories_videos(order_by: { created_at: desc }) {
        video_categories_videos_id
        video{
          videos_id
          title
          description
          thumbnail_url
          created_at
          updated_at
        }
      }
    }
  }
`);

export const VIDEO_DETAIL = gql(`
  query VIDEO_DETAIL($videos_id: String!) {
    videos_by_pk(videos_id: $videos_id) {
      videos_id
      title
      description
      thumbnail_url
      youtube_id
      created_at
      updated_at
    }
  }
`);

export const RANKING_LIST_QUERY = gql(`
  query RANKING_LIST_QUERY {
    users {
      users_id
      full_name
      nick_name
      users_games_points{
        points
      }
      avatar_url
    }
  }
`);

export const PARTNERS_STREAMERS_QUERY = gql(`
  query PARTNERS_STREAMERS_QUERY {
    partners {
      partners_id
      name
      logo_url
      created_at
      updated_at
    }
    streamers {
      streamers_id
      full_name
      nick_name
      photo_url
      instagram_url
      facebook_url
      tiktok_url
      twitch_url
      youtube_url
      created_at
      updated_at
    }
  }
`);

export const PARTNER_DETAIL_QUERY = gql(`
  query PARTNER_DETAIL_QUERY($partners_id: String!, $streamers_id: String!) {
    partners_by_pk(partners_id: $partners_id) {
      partners_id
      name
      logo_url
      created_at
      updated_at
      facebook_url
      instagram_url
      tiktok_url
      twitch_url
      website_url
      youtube_url
      description
    }
    streamers_by_pk(streamers_id: $streamers_id) {
      streamers_id
      full_name
      nick_name
      photo_url
      instagram_url
      facebook_url
      tiktok_url
      twitch_url
      youtube_url
      created_at
      updated_at
      website_url
      description
    }
  }
`);

export const RANKING_USER_QUERY = gql(`
  query RANKING_USER_QUERY($users_id: String!) {
    users_by_pk(users_id: $users_id) {
      users_id
      full_name
      nick_name
      avatar_url
      users_games_points {
        points
        event {
          events_id
          title
          start_date
        }
      }
    }
  }
`);

export const GET_MY_PROFILE_QUERY = gql(`
  query GET_MY_PROFILE_QUERY($email: String!) {
    users(where: {email: {_eq: $email}}) {
      users_id
      full_name
      nick_name
      email
      avatar_url
      country
      email
      fnite_server_region
      instagram_username
      phone
      phone_code
      created_at
      updated_at
      users_games_points {
        points
        event {
          events_id
          title
          start_date
        }
      }
    }
  }
`);
