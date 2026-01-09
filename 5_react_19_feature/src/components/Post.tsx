import React from "react";

const Post = () => {
  // Simulate slow rendering
  const start = Date.now();
  while (Date.now() - start < 100) {}
  
  const posts = Array.from({ length: 10 }, (_, index) => `Post ${index + 1}`);

  return (
    <div>
      {posts.map((post) => (
        <div key={post}>{post}</div>
      ))}
    </div>
  );
};

export default Post;
