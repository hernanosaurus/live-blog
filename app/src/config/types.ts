export type IconProps = {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
};

export type SocialPlatform = "twitter" | "instagram" | "youtube" | undefined;

export type SocialPost = {
  platform: SocialPlatform;
  url: string;
};

export type PostBy = {
  name: string;
  avatar: string;
};

export type Blog = {
  id: string;
  pinned?: boolean;
  hot?: boolean;
  title: React.ReactNode | string;
  body: string[];
  post?: {
    platform: SocialPlatform;
    url: string;
    content?: string;
  };
  postBy?: PostBy;
  createdAd?: {
    date: string;
    time: string;
  };
};
