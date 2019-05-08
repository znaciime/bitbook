import React from "react";
import Post from "./Post";
import "../FloatingButton/floatingButtonCss.css";

const PostList = (props) => {

  return (
    <div className="post-list">
      {props.posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          userId={post.userId}
          type={post.type}
          content={
            post.type === "text"
              ? post.text
              : post.type === "image"
                ? post.imageUrl
                : post.videoUrl
          }
          handleDelete={props.handleDelete}
          fetchPosts={props.fetchPosts}
        />
      ))}
    </div>
  );
}

export default PostList;
