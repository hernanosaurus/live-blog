import { BlogPosts } from "./data/data";
import BlogPost from "./features/BlogPost/BlogPost.component";

import "./App.scss";

function App() {
  console.log(BlogPosts);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {BlogPosts.map((blog) => (
        <BlogPost key={blog.id} {...blog} />
      ))}
    </div>
  );
}

export default App;
