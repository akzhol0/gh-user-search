import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const Post = ({ item, number }) => {
  return (
    <div className="post">
      <div className="left-block">
        <img src={item.avatar_url} width={65} height={65} />
        <div className="stats">
          <strong>{number}. {item.login}</strong>
          <small>ID in GitHub: {item.id}</small>
        </div>
      </div>
      <div className="right-block">
        <Link to={`/user/${item.login}`}>
          <MyButton className="btn-get">INFO</MyButton>
        </Link>
        <a href={item.html_url} target="_blank">
          <MyButton className="btn-gh"></MyButton>
        </a>
      </div>
    </div>
  );
};

export default Post;
