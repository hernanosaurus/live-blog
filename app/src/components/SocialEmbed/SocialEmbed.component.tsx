import {
  InstagramEmbed,
  TwitterEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";
import { SocialPost } from "../../config/types";

import "./SocialEmbed.styles.scss";
import Spinner from "../Spinner/Spinner.component";

type PostProps = {
  post?: SocialPost;
};

function SocialEmbed({ post }: PostProps) {
  if (!post) return null;

  const { platform, url } = post;

  return (
    <div className={`SocialEmbed ${platform}`}>
      {platform === "twitter" && (
        <TwitterEmbed
          url={url}
          width="100%"
          embedPlaceholder={
            <div>
              <Spinner />
            </div>
          }
        />
      )}
      {platform === "instagram" && (
        <InstagramEmbed url={url} width={328} embedPlaceholder={<></>} />
      )}
      {platform === "youtube" && (
        <YouTubeEmbed url={url} width="100%" embedPlaceholder={<></>} />
      )}
    </div>
  );
}

export default SocialEmbed;
