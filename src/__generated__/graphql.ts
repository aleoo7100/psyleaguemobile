/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamp: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
  created_at: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  end_date?: Maybe<Scalars['timestamp']['output']>;
  events_id: Scalars['String']['output'];
  /** An array relationship */
  events_streamers: Array<Events_Streamers>;
  registration_url?: Maybe<Scalars['String']['output']>;
  start_date: Scalars['timestamp']['output'];
  thumbnail_url: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  users_games_points: Array<Users_Games_Points>;
};


/** columns and relationships of "events" */
export type EventsEvents_StreamersArgs = {
  distinct_on?: InputMaybe<Array<Events_Streamers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Streamers_Order_By>>;
  where?: InputMaybe<Events_Streamers_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsUsers_Games_PointsArgs = {
  distinct_on?: InputMaybe<Array<Users_Games_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Games_Points_Order_By>>;
  where?: InputMaybe<Users_Games_Points_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Timestamp_Comparison_Exp>;
  events_id?: InputMaybe<String_Comparison_Exp>;
  events_streamers?: InputMaybe<Events_Streamers_Bool_Exp>;
  registration_url?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Timestamp_Comparison_Exp>;
  thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users_games_points?: InputMaybe<Users_Games_Points_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  events_id?: InputMaybe<Order_By>;
  events_streamers_aggregate?: InputMaybe<Events_Streamers_Aggregate_Order_By>;
  registration_url?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_games_points_aggregate?: InputMaybe<Users_Games_Points_Aggregate_Order_By>;
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EventsId = 'events_id',
  /** column name */
  RegistrationUrl = 'registration_url',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  events_id?: InputMaybe<Scalars['String']['input']>;
  registration_url?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "events_streamers" */
export type Events_Streamers = {
  __typename?: 'events_streamers';
  created_at: Scalars['timestamp']['output'];
  /** An object relationship */
  event: Events;
  events_id: Scalars['String']['output'];
  events_streamers_id: Scalars['String']['output'];
  /** An object relationship */
  streamer: Streamers;
  streamers_id: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};

/** order by aggregate values of table "events_streamers" */
export type Events_Streamers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Events_Streamers_Max_Order_By>;
  min?: InputMaybe<Events_Streamers_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "events_streamers". All fields are combined with a logical 'AND'. */
export type Events_Streamers_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Streamers_Bool_Exp>>;
  _not?: InputMaybe<Events_Streamers_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Streamers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  events_id?: InputMaybe<String_Comparison_Exp>;
  events_streamers_id?: InputMaybe<String_Comparison_Exp>;
  streamer?: InputMaybe<Streamers_Bool_Exp>;
  streamers_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** order by max() on columns of table "events_streamers" */
export type Events_Streamers_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  events_id?: InputMaybe<Order_By>;
  events_streamers_id?: InputMaybe<Order_By>;
  streamers_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "events_streamers" */
export type Events_Streamers_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  events_id?: InputMaybe<Order_By>;
  events_streamers_id?: InputMaybe<Order_By>;
  streamers_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "events_streamers". */
export type Events_Streamers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  events_id?: InputMaybe<Order_By>;
  events_streamers_id?: InputMaybe<Order_By>;
  streamer?: InputMaybe<Streamers_Order_By>;
  streamers_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "events_streamers" */
export enum Events_Streamers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventsId = 'events_id',
  /** column name */
  EventsStreamersId = 'events_streamers_id',
  /** column name */
  StreamersId = 'streamers_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "events_streamers" */
export type Events_Streamers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Streamers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Streamers_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  events_id?: InputMaybe<Scalars['String']['input']>;
  events_streamers_id?: InputMaybe<Scalars['String']['input']>;
  streamers_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "news" */
export type News = {
  __typename?: 'news';
  content: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  news_id: Scalars['String']['output'];
  short_description: Scalars['String']['output'];
  thumbnail_url: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};

/** Boolean expression to filter rows from the table "news". All fields are combined with a logical 'AND'. */
export type News_Bool_Exp = {
  _and?: InputMaybe<Array<News_Bool_Exp>>;
  _not?: InputMaybe<News_Bool_Exp>;
  _or?: InputMaybe<Array<News_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  news_id?: InputMaybe<String_Comparison_Exp>;
  short_description?: InputMaybe<String_Comparison_Exp>;
  thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "news". */
export type News_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  news_id?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "news" */
export enum News_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  NewsId = 'news_id',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "news" */
export type News_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: News_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type News_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  news_id?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "partners" */
export type Partners = {
  __typename?: 'partners';
  created_at: Scalars['timestamp']['output'];
  logo_url: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partners_id: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};

/** Boolean expression to filter rows from the table "partners". All fields are combined with a logical 'AND'. */
export type Partners_Bool_Exp = {
  _and?: InputMaybe<Array<Partners_Bool_Exp>>;
  _not?: InputMaybe<Partners_Bool_Exp>;
  _or?: InputMaybe<Array<Partners_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  logo_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  partners_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "partners". */
export type Partners_Order_By = {
  created_at?: InputMaybe<Order_By>;
  logo_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  partners_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "partners" */
export enum Partners_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name',
  /** column name */
  PartnersId = 'partners_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "partners" */
export type Partners_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Partners_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Partners_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  logo_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partners_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** An array relationship */
  events_streamers: Array<Events_Streamers>;
  /** fetch data from the table: "events_streamers" using primary key columns */
  events_streamers_by_pk?: Maybe<Events_Streamers>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "partners" */
  partners: Array<Partners>;
  /** fetch data from the table: "partners" using primary key columns */
  partners_by_pk?: Maybe<Partners>;
  /** fetch data from the table: "streamers" */
  streamers: Array<Streamers>;
  /** fetch data from the table: "streamers" using primary key columns */
  streamers_by_pk?: Maybe<Streamers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_games_points: Array<Users_Games_Points>;
  /** fetch data from the table: "users_games_points" using primary key columns */
  users_games_points_by_pk?: Maybe<Users_Games_Points>;
  /** fetch data from the table: "video_cagetories" */
  video_cagetories: Array<Video_Cagetories>;
  /** fetch data from the table: "video_cagetories" using primary key columns */
  video_cagetories_by_pk?: Maybe<Video_Cagetories>;
  /** An array relationship */
  video_categories_videos: Array<Video_Categories_Videos>;
  /** fetch data from the table: "video_categories_videos" using primary key columns */
  video_categories_videos_by_pk?: Maybe<Video_Categories_Videos>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  events_id: Scalars['String']['input'];
};


export type Query_RootEvents_StreamersArgs = {
  distinct_on?: InputMaybe<Array<Events_Streamers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Streamers_Order_By>>;
  where?: InputMaybe<Events_Streamers_Bool_Exp>;
};


export type Query_RootEvents_Streamers_By_PkArgs = {
  events_streamers_id: Scalars['String']['input'];
};


export type Query_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Query_RootNews_By_PkArgs = {
  news_id: Scalars['String']['input'];
};


export type Query_RootPartnersArgs = {
  distinct_on?: InputMaybe<Array<Partners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Partners_Order_By>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};


export type Query_RootPartners_By_PkArgs = {
  partners_id: Scalars['String']['input'];
};


export type Query_RootStreamersArgs = {
  distinct_on?: InputMaybe<Array<Streamers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Streamers_Order_By>>;
  where?: InputMaybe<Streamers_Bool_Exp>;
};


export type Query_RootStreamers_By_PkArgs = {
  streamers_id: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  users_id: Scalars['String']['input'];
};


export type Query_RootUsers_Games_PointsArgs = {
  distinct_on?: InputMaybe<Array<Users_Games_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Games_Points_Order_By>>;
  where?: InputMaybe<Users_Games_Points_Bool_Exp>;
};


export type Query_RootUsers_Games_Points_By_PkArgs = {
  users_games_points_id: Scalars['String']['input'];
};


export type Query_RootVideo_CagetoriesArgs = {
  distinct_on?: InputMaybe<Array<Video_Cagetories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Cagetories_Order_By>>;
  where?: InputMaybe<Video_Cagetories_Bool_Exp>;
};


export type Query_RootVideo_Cagetories_By_PkArgs = {
  videos_cagetories_id: Scalars['String']['input'];
};


export type Query_RootVideo_Categories_VideosArgs = {
  distinct_on?: InputMaybe<Array<Video_Categories_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Categories_Videos_Order_By>>;
  where?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
};


export type Query_RootVideo_Categories_Videos_By_PkArgs = {
  video_categories_videos_id: Scalars['String']['input'];
};


export type Query_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_By_PkArgs = {
  videos_id: Scalars['String']['input'];
};

/** columns and relationships of "streamers" */
export type Streamers = {
  __typename?: 'streamers';
  created_at: Scalars['timestamp']['output'];
  /** An array relationship */
  events_streamers: Array<Events_Streamers>;
  facebook_url?: Maybe<Scalars['String']['output']>;
  full_name: Scalars['String']['output'];
  instagram_url?: Maybe<Scalars['String']['output']>;
  nick_name: Scalars['String']['output'];
  photo_url?: Maybe<Scalars['String']['output']>;
  streamers_id: Scalars['String']['output'];
  tiktok_url?: Maybe<Scalars['String']['output']>;
  twitch_url?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  youtube_url?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "streamers" */
export type StreamersEvents_StreamersArgs = {
  distinct_on?: InputMaybe<Array<Events_Streamers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Streamers_Order_By>>;
  where?: InputMaybe<Events_Streamers_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "streamers". All fields are combined with a logical 'AND'. */
export type Streamers_Bool_Exp = {
  _and?: InputMaybe<Array<Streamers_Bool_Exp>>;
  _not?: InputMaybe<Streamers_Bool_Exp>;
  _or?: InputMaybe<Array<Streamers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  events_streamers?: InputMaybe<Events_Streamers_Bool_Exp>;
  facebook_url?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  instagram_url?: InputMaybe<String_Comparison_Exp>;
  nick_name?: InputMaybe<String_Comparison_Exp>;
  photo_url?: InputMaybe<String_Comparison_Exp>;
  streamers_id?: InputMaybe<String_Comparison_Exp>;
  tiktok_url?: InputMaybe<String_Comparison_Exp>;
  twitch_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  youtube_url?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "streamers". */
export type Streamers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  events_streamers_aggregate?: InputMaybe<Events_Streamers_Aggregate_Order_By>;
  facebook_url?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  instagram_url?: InputMaybe<Order_By>;
  nick_name?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  streamers_id?: InputMaybe<Order_By>;
  tiktok_url?: InputMaybe<Order_By>;
  twitch_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_url?: InputMaybe<Order_By>;
};

/** select columns of table "streamers" */
export enum Streamers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FacebookUrl = 'facebook_url',
  /** column name */
  FullName = 'full_name',
  /** column name */
  InstagramUrl = 'instagram_url',
  /** column name */
  NickName = 'nick_name',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  StreamersId = 'streamers_id',
  /** column name */
  TiktokUrl = 'tiktok_url',
  /** column name */
  TwitchUrl = 'twitch_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeUrl = 'youtube_url'
}

/** Streaming cursor of the table "streamers" */
export type Streamers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Streamers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Streamers_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  facebook_url?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  instagram_url?: InputMaybe<Scalars['String']['input']>;
  nick_name?: InputMaybe<Scalars['String']['input']>;
  photo_url?: InputMaybe<Scalars['String']['input']>;
  streamers_id?: InputMaybe<Scalars['String']['input']>;
  tiktok_url?: InputMaybe<Scalars['String']['input']>;
  twitch_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  youtube_url?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
  /** An array relationship */
  events_streamers: Array<Events_Streamers>;
  /** fetch data from the table: "events_streamers" using primary key columns */
  events_streamers_by_pk?: Maybe<Events_Streamers>;
  /** fetch data from the table in a streaming manner: "events_streamers" */
  events_streamers_stream: Array<Events_Streamers>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table in a streaming manner: "news" */
  news_stream: Array<News>;
  /** fetch data from the table: "partners" */
  partners: Array<Partners>;
  /** fetch data from the table: "partners" using primary key columns */
  partners_by_pk?: Maybe<Partners>;
  /** fetch data from the table in a streaming manner: "partners" */
  partners_stream: Array<Partners>;
  /** fetch data from the table: "streamers" */
  streamers: Array<Streamers>;
  /** fetch data from the table: "streamers" using primary key columns */
  streamers_by_pk?: Maybe<Streamers>;
  /** fetch data from the table in a streaming manner: "streamers" */
  streamers_stream: Array<Streamers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_games_points: Array<Users_Games_Points>;
  /** fetch data from the table: "users_games_points" using primary key columns */
  users_games_points_by_pk?: Maybe<Users_Games_Points>;
  /** fetch data from the table in a streaming manner: "users_games_points" */
  users_games_points_stream: Array<Users_Games_Points>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "video_cagetories" */
  video_cagetories: Array<Video_Cagetories>;
  /** fetch data from the table: "video_cagetories" using primary key columns */
  video_cagetories_by_pk?: Maybe<Video_Cagetories>;
  /** fetch data from the table in a streaming manner: "video_cagetories" */
  video_cagetories_stream: Array<Video_Cagetories>;
  /** An array relationship */
  video_categories_videos: Array<Video_Categories_Videos>;
  /** fetch data from the table: "video_categories_videos" using primary key columns */
  video_categories_videos_by_pk?: Maybe<Video_Categories_Videos>;
  /** fetch data from the table in a streaming manner: "video_categories_videos" */
  video_categories_videos_stream: Array<Video_Categories_Videos>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
  /** fetch data from the table in a streaming manner: "videos" */
  videos_stream: Array<Videos>;
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  events_id: Scalars['String']['input'];
};


export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_StreamersArgs = {
  distinct_on?: InputMaybe<Array<Events_Streamers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Streamers_Order_By>>;
  where?: InputMaybe<Events_Streamers_Bool_Exp>;
};


export type Subscription_RootEvents_Streamers_By_PkArgs = {
  events_streamers_id: Scalars['String']['input'];
};


export type Subscription_RootEvents_Streamers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Events_Streamers_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Streamers_Bool_Exp>;
};


export type Subscription_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootNews_By_PkArgs = {
  news_id: Scalars['String']['input'];
};


export type Subscription_RootNews_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<News_Stream_Cursor_Input>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootPartnersArgs = {
  distinct_on?: InputMaybe<Array<Partners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Partners_Order_By>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};


export type Subscription_RootPartners_By_PkArgs = {
  partners_id: Scalars['String']['input'];
};


export type Subscription_RootPartners_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Partners_Stream_Cursor_Input>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};


export type Subscription_RootStreamersArgs = {
  distinct_on?: InputMaybe<Array<Streamers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Streamers_Order_By>>;
  where?: InputMaybe<Streamers_Bool_Exp>;
};


export type Subscription_RootStreamers_By_PkArgs = {
  streamers_id: Scalars['String']['input'];
};


export type Subscription_RootStreamers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Streamers_Stream_Cursor_Input>>;
  where?: InputMaybe<Streamers_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  users_id: Scalars['String']['input'];
};


export type Subscription_RootUsers_Games_PointsArgs = {
  distinct_on?: InputMaybe<Array<Users_Games_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Games_Points_Order_By>>;
  where?: InputMaybe<Users_Games_Points_Bool_Exp>;
};


export type Subscription_RootUsers_Games_Points_By_PkArgs = {
  users_games_points_id: Scalars['String']['input'];
};


export type Subscription_RootUsers_Games_Points_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Games_Points_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Games_Points_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVideo_CagetoriesArgs = {
  distinct_on?: InputMaybe<Array<Video_Cagetories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Cagetories_Order_By>>;
  where?: InputMaybe<Video_Cagetories_Bool_Exp>;
};


export type Subscription_RootVideo_Cagetories_By_PkArgs = {
  videos_cagetories_id: Scalars['String']['input'];
};


export type Subscription_RootVideo_Cagetories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Video_Cagetories_Stream_Cursor_Input>>;
  where?: InputMaybe<Video_Cagetories_Bool_Exp>;
};


export type Subscription_RootVideo_Categories_VideosArgs = {
  distinct_on?: InputMaybe<Array<Video_Categories_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Categories_Videos_Order_By>>;
  where?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
};


export type Subscription_RootVideo_Categories_Videos_By_PkArgs = {
  video_categories_videos_id: Scalars['String']['input'];
};


export type Subscription_RootVideo_Categories_Videos_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Video_Categories_Videos_Stream_Cursor_Input>>;
  where?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
};


export type Subscription_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_By_PkArgs = {
  videos_id: Scalars['String']['input'];
};


export type Subscription_RootVideos_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Videos_Stream_Cursor_Input>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  country?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  fnite_server_region?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  instagram_username?: Maybe<Scalars['String']['output']>;
  nick_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_code?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  users_games_points: Array<Users_Games_Points>;
  users_id: Scalars['String']['output'];
};


/** columns and relationships of "users" */
export type UsersUsers_Games_PointsArgs = {
  distinct_on?: InputMaybe<Array<Users_Games_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Games_Points_Order_By>>;
  where?: InputMaybe<Users_Games_Points_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  fnite_server_region?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  instagram_username?: InputMaybe<String_Comparison_Exp>;
  nick_name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_code?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users_games_points?: InputMaybe<Users_Games_Points_Bool_Exp>;
  users_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "users_games_points" */
export type Users_Games_Points = {
  __typename?: 'users_games_points';
  created_at: Scalars['timestamp']['output'];
  /** An object relationship */
  event: Events;
  events_id: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user: Users;
  users_games_points_id: Scalars['String']['output'];
  users_id: Scalars['String']['output'];
};

/** order by aggregate values of table "users_games_points" */
export type Users_Games_Points_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Games_Points_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Games_Points_Max_Order_By>;
  min?: InputMaybe<Users_Games_Points_Min_Order_By>;
  stddev?: InputMaybe<Users_Games_Points_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Games_Points_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Games_Points_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Games_Points_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Games_Points_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Games_Points_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Games_Points_Variance_Order_By>;
};

/** order by avg() on columns of table "users_games_points" */
export type Users_Games_Points_Avg_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_games_points". All fields are combined with a logical 'AND'. */
export type Users_Games_Points_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Games_Points_Bool_Exp>>;
  _not?: InputMaybe<Users_Games_Points_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Games_Points_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  events_id?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  users_games_points_id?: InputMaybe<String_Comparison_Exp>;
  users_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "users_games_points" */
export type Users_Games_Points_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  events_id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_games_points_id?: InputMaybe<Order_By>;
  users_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "users_games_points" */
export type Users_Games_Points_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  events_id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_games_points_id?: InputMaybe<Order_By>;
  users_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "users_games_points". */
export type Users_Games_Points_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  events_id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  users_games_points_id?: InputMaybe<Order_By>;
  users_id?: InputMaybe<Order_By>;
};

/** select columns of table "users_games_points" */
export enum Users_Games_Points_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventsId = 'events_id',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsersGamesPointsId = 'users_games_points_id',
  /** column name */
  UsersId = 'users_id'
}

/** order by stddev() on columns of table "users_games_points" */
export type Users_Games_Points_Stddev_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "users_games_points" */
export type Users_Games_Points_Stddev_Pop_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "users_games_points" */
export type Users_Games_Points_Stddev_Samp_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users_games_points" */
export type Users_Games_Points_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Games_Points_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Games_Points_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  events_id?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  users_games_points_id?: InputMaybe<Scalars['String']['input']>;
  users_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "users_games_points" */
export type Users_Games_Points_Sum_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "users_games_points" */
export type Users_Games_Points_Var_Pop_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "users_games_points" */
export type Users_Games_Points_Var_Samp_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "users_games_points" */
export type Users_Games_Points_Variance_Order_By = {
  points?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  fnite_server_region?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  instagram_username?: InputMaybe<Order_By>;
  nick_name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_games_points_aggregate?: InputMaybe<Users_Games_Points_Aggregate_Order_By>;
  users_id?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FniteServerRegion = 'fnite_server_region',
  /** column name */
  FullName = 'full_name',
  /** column name */
  InstagramUsername = 'instagram_username',
  /** column name */
  NickName = 'nick_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneCode = 'phone_code',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsersId = 'users_id'
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fnite_server_region?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  instagram_username?: InputMaybe<Scalars['String']['input']>;
  nick_name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  users_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "video_cagetories" */
export type Video_Cagetories = {
  __typename?: 'video_cagetories';
  created_at: Scalars['timestamp']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  video_categories_videos: Array<Video_Categories_Videos>;
  videos_cagetories_id: Scalars['String']['output'];
};


/** columns and relationships of "video_cagetories" */
export type Video_CagetoriesVideo_Categories_VideosArgs = {
  distinct_on?: InputMaybe<Array<Video_Categories_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Categories_Videos_Order_By>>;
  where?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "video_cagetories". All fields are combined with a logical 'AND'. */
export type Video_Cagetories_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Cagetories_Bool_Exp>>;
  _not?: InputMaybe<Video_Cagetories_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Cagetories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  video_categories_videos?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
  videos_cagetories_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "video_cagetories". */
export type Video_Cagetories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_categories_videos_aggregate?: InputMaybe<Video_Categories_Videos_Aggregate_Order_By>;
  videos_cagetories_id?: InputMaybe<Order_By>;
};

/** select columns of table "video_cagetories" */
export enum Video_Cagetories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideosCagetoriesId = 'videos_cagetories_id'
}

/** Streaming cursor of the table "video_cagetories" */
export type Video_Cagetories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Video_Cagetories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Video_Cagetories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  videos_cagetories_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "video_categories_videos" */
export type Video_Categories_Videos = {
  __typename?: 'video_categories_videos';
  created_at: Scalars['timestamp']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  video: Videos;
  /** An object relationship */
  video_cagetory: Video_Cagetories;
  video_categories_videos_id: Scalars['String']['output'];
  videos_cagetories_id: Scalars['String']['output'];
  videos_id: Scalars['String']['output'];
};

/** order by aggregate values of table "video_categories_videos" */
export type Video_Categories_Videos_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Video_Categories_Videos_Max_Order_By>;
  min?: InputMaybe<Video_Categories_Videos_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "video_categories_videos". All fields are combined with a logical 'AND'. */
export type Video_Categories_Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Categories_Videos_Bool_Exp>>;
  _not?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Categories_Videos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_cagetory?: InputMaybe<Video_Cagetories_Bool_Exp>;
  video_categories_videos_id?: InputMaybe<String_Comparison_Exp>;
  videos_cagetories_id?: InputMaybe<String_Comparison_Exp>;
  videos_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "video_categories_videos" */
export type Video_Categories_Videos_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_categories_videos_id?: InputMaybe<Order_By>;
  videos_cagetories_id?: InputMaybe<Order_By>;
  videos_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "video_categories_videos" */
export type Video_Categories_Videos_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_categories_videos_id?: InputMaybe<Order_By>;
  videos_cagetories_id?: InputMaybe<Order_By>;
  videos_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "video_categories_videos". */
export type Video_Categories_Videos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_cagetory?: InputMaybe<Video_Cagetories_Order_By>;
  video_categories_videos_id?: InputMaybe<Order_By>;
  videos_cagetories_id?: InputMaybe<Order_By>;
  videos_id?: InputMaybe<Order_By>;
};

/** select columns of table "video_categories_videos" */
export enum Video_Categories_Videos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoCategoriesVideosId = 'video_categories_videos_id',
  /** column name */
  VideosCagetoriesId = 'videos_cagetories_id',
  /** column name */
  VideosId = 'videos_id'
}

/** Streaming cursor of the table "video_categories_videos" */
export type Video_Categories_Videos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Video_Categories_Videos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Video_Categories_Videos_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  video_categories_videos_id?: InputMaybe<Scalars['String']['input']>;
  videos_cagetories_id?: InputMaybe<Scalars['String']['input']>;
  videos_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  created_at: Scalars['timestamp']['output'];
  description: Scalars['String']['output'];
  thumbnail_url: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  video_categories_videos: Array<Video_Categories_Videos>;
  videos_id: Scalars['String']['output'];
  youtube_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "videos" */
export type VideosVideo_Categories_VideosArgs = {
  distinct_on?: InputMaybe<Array<Video_Categories_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Categories_Videos_Order_By>>;
  where?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Videos_Bool_Exp>>;
  _not?: InputMaybe<Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Videos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  video_categories_videos?: InputMaybe<Video_Categories_Videos_Bool_Exp>;
  videos_id?: InputMaybe<String_Comparison_Exp>;
  youtube_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "videos". */
export type Videos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_categories_videos_aggregate?: InputMaybe<Video_Categories_Videos_Aggregate_Order_By>;
  videos_id?: InputMaybe<Order_By>;
  youtube_id?: InputMaybe<Order_By>;
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideosId = 'videos_id',
  /** column name */
  YoutubeId = 'youtube_id'
}

/** Streaming cursor of the table "videos" */
export type Videos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Videos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Videos_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  videos_id?: InputMaybe<Scalars['String']['input']>;
  youtube_id?: InputMaybe<Scalars['String']['input']>;
};

export type Event_List_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Event_List_QueryQuery = { __typename?: 'query_root', events: Array<{ __typename?: 'events', events_id: string, title: string, thumbnail_url: string, start_date: any, description: string, end_date?: any | null, registration_url?: string | null, created_at: any, updated_at: any }> };

export type Event_Detail_QueryQueryVariables = Exact<{
  events_id: Scalars['String']['input'];
}>;


export type Event_Detail_QueryQuery = { __typename?: 'query_root', events_by_pk?: { __typename?: 'events', events_id: string, title: string, thumbnail_url: string, start_date: any, description: string, end_date?: any | null, registration_url?: string | null, created_at: any, updated_at: any, events_streamers: Array<{ __typename?: 'events_streamers', streamer: { __typename?: 'streamers', full_name: string, nick_name: string, photo_url?: string | null, instagram_url?: string | null, facebook_url?: string | null, tiktok_url?: string | null, twitch_url?: string | null, youtube_url?: string | null } }> } | null };

export type News_List_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type News_List_QueryQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', news_id: string, title: string, content: string, thumbnail_url: string, short_description: string, created_at: any, updated_at: any }> };

export type News_Detail_QueryQueryVariables = Exact<{
  news_id: Scalars['String']['input'];
}>;


export type News_Detail_QueryQuery = { __typename?: 'query_root', news_by_pk?: { __typename?: 'news', news_id: string, title: string, content: string, thumbnail_url: string, short_description: string, created_at: any, updated_at: any } | null };


export const Event_List_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EVENT_LIST_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_url"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"registration_url"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<Event_List_QueryQuery, Event_List_QueryQueryVariables>;
export const Event_Detail_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EVENT_DETAIL_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"events_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"events_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"events_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_url"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"registration_url"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"events_streamers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"streamer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"nick_name"}},{"kind":"Field","name":{"kind":"Name","value":"photo_url"}},{"kind":"Field","name":{"kind":"Name","value":"instagram_url"}},{"kind":"Field","name":{"kind":"Name","value":"facebook_url"}},{"kind":"Field","name":{"kind":"Name","value":"tiktok_url"}},{"kind":"Field","name":{"kind":"Name","value":"twitch_url"}},{"kind":"Field","name":{"kind":"Name","value":"youtube_url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Event_Detail_QueryQuery, Event_Detail_QueryQueryVariables>;
export const News_List_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NEWS_LIST_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_url"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<News_List_QueryQuery, News_List_QueryQueryVariables>;
export const News_Detail_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NEWS_DETAIL_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"news_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"news_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"news_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_url"}},{"kind":"Field","name":{"kind":"Name","value":"short_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<News_Detail_QueryQuery, News_Detail_QueryQueryVariables>;