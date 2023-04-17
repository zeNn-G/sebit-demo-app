export interface Root {
  tumblelog: Tumblelog;
  "posts-start": number;
  "posts-total": number;
  "posts-type": boolean;
  posts: Post[];
}

export interface Tumblelog {
  title: string;
  description: string;
  name: string;
  timezone: string;
  cname: boolean;
  feeds: any[];
  uuid: string;
}

export interface Post {
  id: string;
  url: string;
  "url-with-slug": string;
  type: string;
  "date-gmt": string;
  date: string;
  bookmarklet: number;
  mobile: number;
  "feed-item": string;
  "from-feed-id": number;
  "unix-timestamp": number;
  format: string;
  "reblog-key": string;
  slug: string;
  "is-submission": boolean;
  "like-button": string;
  "reblog-button": string;
  "note-count": string;
  tumblelog: Tumblelog2;
  "quote-text"?: string;
  "quote-source"?: string;
  tags?: string[];
  "photo-caption"?: string;
  width?: number;
  height?: number;
  "photo-url-1280"?: string;
  "photo-url-500"?: string;
  "photo-url-400"?: string;
  "photo-url-250"?: string;
  "photo-url-100"?: string;
  "photo-url-75"?: string;
  photos?: any[];
  "link-text"?: string;
  "link-url"?: string;
  "link-description"?: string;
  "conversation-title": any;
  "conversation-text"?: string;
  conversation?: Conversation[];
  "reblogged-from-url"?: string;
  "reblogged-from-name"?: string;
  "reblogged-from-title"?: string;
  reblogged_from_avatar_url_512?: string;
  reblogged_from_avatar_url_128?: string;
  reblogged_from_avatar_url_96?: string;
  reblogged_from_avatar_url_64?: string;
  reblogged_from_avatar_url_48?: string;
  reblogged_from_avatar_url_40?: string;
  reblogged_from_avatar_url_30?: string;
  reblogged_from_avatar_url_24?: string;
  reblogged_from_avatar_url_16?: string;
  "reblogged-root-url"?: string;
  "reblogged-root-name"?: string;
  "reblogged-root-title"?: string;
  reblogged_root_avatar_url_512?: string;
  reblogged_root_avatar_url_128?: string;
  reblogged_root_avatar_url_96?: string;
  reblogged_root_avatar_url_64?: string;
  reblogged_root_avatar_url_48?: string;
  reblogged_root_avatar_url_40?: string;
  reblogged_root_avatar_url_30?: string;
  reblogged_root_avatar_url_24?: string;
  reblogged_root_avatar_url_16?: string;
  "id3-artist"?: string;
  "id3-album"?: string;
  "id3-year"?: string;
  "id3-track"?: string;
  "id3-title"?: string;
  "audio-caption"?: string;
  "audio-player"?: string;
  "audio-embed"?: string;
  "audio-plays"?: number;
  "regular-title"?: string;
  "regular-body"?: string;
}

export interface Tumblelog2 {
  title: string;
  name: string;
  cname: boolean;
  url: string;
  timezone: string;
  avatar_url_512: string;
  avatar_url_128: string;
  avatar_url_96: string;
  avatar_url_64: string;
  avatar_url_48: string;
  avatar_url_40: string;
  avatar_url_30: string;
  avatar_url_24: string;
  avatar_url_16: string;
}

export interface Conversation {
  name: string;
  label: string;
  phrase: string;
}
