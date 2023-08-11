import React from "react";
import Post from "./Post";

const PostList = ({ data, errorMessage, isLoaded, isEmpty }) => {
  return (
    <div className="posts-wrapper">
      <div className="posts-container">
        {errorMessage ? (
          <p className="text">{errorMessage}</p>
        ) : data.items ? (
          data.items.map((item, index) => (
            <Post number={index + 1} key={item.id} item={item} isLoaded={isLoaded} />
          ))
        ) : isEmpty ? (
          <p className="text">Empty</p>
        ) : 
          <p className="text">Loading...</p>
        }
      </div>
    </div>
  );
};

export default PostList;
