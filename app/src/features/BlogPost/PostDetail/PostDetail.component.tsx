import { PostBy } from "../../../config/types";

import "./PostDetail.styles.scss";

type PostDetailProps = {
  postBy?: PostBy;
  createdAd?: {
    date: string;
    time: string;
  };
};

function PostDetail({ postBy, createdAd }: PostDetailProps) {
  return (
    <div className="PostDetails">
      {createdAd && (
        <div className="CreatedAt">
          <p style={{ fontWeight: 600 }}>{createdAd.date}</p>
          <p>{createdAd.time}</p>
        </div>
      )}
      {postBy && <img src={postBy.avatar} alt={postBy.name} />}
    </div>
  );
}

export default PostDetail;
