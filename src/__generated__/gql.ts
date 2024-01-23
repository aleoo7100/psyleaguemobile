/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query EVENT_LIST_QUERY {\n    events(order_by: { created_at: desc }) {\n      events_id\n      title\n      thumbnail_url\n      start_date\n      description\n      end_date\n      registration_url\n      created_at\n      updated_at\n    }\n  }\n": types.Event_List_QueryDocument,
    "\n  query EVENT_DETAIL_QUERY($events_id: String!) {\n    events_by_pk(events_id: $events_id) {\n      events_id\n      title\n      thumbnail_url\n      start_date\n      description\n      end_date\n      registration_url\n      created_at\n      updated_at\n      events_streamers {\n        streamer {\n          full_name\n          nick_name\n          photo_url\n          instagram_url\n          facebook_url\n          tiktok_url\n          twitch_url\n          youtube_url\n        }\n      }\n    }\n  }\n": types.Event_Detail_QueryDocument,
    "\n  query NEWS_LIST_QUERY {\n    news(order_by: { created_at: desc }) {\n      news_id\n      title\n      content\n      thumbnail_url\n      short_description\n      created_at\n      updated_at\n    }\n  }\n": types.News_List_QueryDocument,
    "\n  query NEWS_DETAIL_QUERY($news_id: String!) {\n    news_by_pk(news_id: $news_id) {\n      news_id\n      title\n      content\n      thumbnail_url\n      short_description\n      created_at\n      updated_at\n    }\n  }\n": types.News_Detail_QueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query EVENT_LIST_QUERY {\n    events(order_by: { created_at: desc }) {\n      events_id\n      title\n      thumbnail_url\n      start_date\n      description\n      end_date\n      registration_url\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  query EVENT_LIST_QUERY {\n    events(order_by: { created_at: desc }) {\n      events_id\n      title\n      thumbnail_url\n      start_date\n      description\n      end_date\n      registration_url\n      created_at\n      updated_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query EVENT_DETAIL_QUERY($events_id: String!) {\n    events_by_pk(events_id: $events_id) {\n      events_id\n      title\n      thumbnail_url\n      start_date\n      description\n      end_date\n      registration_url\n      created_at\n      updated_at\n      events_streamers {\n        streamer {\n          full_name\n          nick_name\n          photo_url\n          instagram_url\n          facebook_url\n          tiktok_url\n          twitch_url\n          youtube_url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EVENT_DETAIL_QUERY($events_id: String!) {\n    events_by_pk(events_id: $events_id) {\n      events_id\n      title\n      thumbnail_url\n      start_date\n      description\n      end_date\n      registration_url\n      created_at\n      updated_at\n      events_streamers {\n        streamer {\n          full_name\n          nick_name\n          photo_url\n          instagram_url\n          facebook_url\n          tiktok_url\n          twitch_url\n          youtube_url\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NEWS_LIST_QUERY {\n    news(order_by: { created_at: desc }) {\n      news_id\n      title\n      content\n      thumbnail_url\n      short_description\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  query NEWS_LIST_QUERY {\n    news(order_by: { created_at: desc }) {\n      news_id\n      title\n      content\n      thumbnail_url\n      short_description\n      created_at\n      updated_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NEWS_DETAIL_QUERY($news_id: String!) {\n    news_by_pk(news_id: $news_id) {\n      news_id\n      title\n      content\n      thumbnail_url\n      short_description\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  query NEWS_DETAIL_QUERY($news_id: String!) {\n    news_by_pk(news_id: $news_id) {\n      news_id\n      title\n      content\n      thumbnail_url\n      short_description\n      created_at\n      updated_at\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;