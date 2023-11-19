import { Blog } from "../../config/types";
import PostDetail from "./PostDetail/PostDetail.component";
import Card from "../../components/Card/Card.component";
import SocialEmbed from "../../components/SocialEmbed/SocialEmbed.component";

import "./BlogPost.styles.scss";

function BlogPost(blog: Blog) {
  return (
    <div className="BlogPost">
      <PostDetail postBy={blog.postBy} createdAd={blog.createdAd} />

      <Card
        pinned={blog.pinned}
        hot={blog.hot}
        title={blog.title}
        body={blog.body}
      >
        <SocialEmbed post={blog.post} />
      </Card>
    </div>
  );
}

export default BlogPost;
