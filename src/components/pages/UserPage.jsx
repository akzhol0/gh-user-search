import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../UI/button/MyButton";

const UserPage = () => {
  const { name } = useParams();
  const [dataUser, setDataUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo(name) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${name}`
        );
        setDataUser(response.data);
      } catch (e) {
        console.error(e);
        setErrorMessage(e.message);
      }
    }
    getInfo(name);
  }, []);

  return errorMessage ? (
    <div className="wrapper-user">
      <h1 className="text-user">{errorMessage}</h1>
    </div>
  ) : dataUser ? (
    <div className="wrapper-user">
      <div className="user-post-container">
        <div className="user-com">
          <div className="ava">
            <img src={dataUser.avatar_url} width={300} height={300} />
          </div>
          <div className="stats-wrapper">
            <h1>{dataUser.login}</h1>
            <div className="stats-user">
              <p>Followers: {dataUser.followers}</p>
              <p>Followings: {dataUser.following}</p>
            </div>
            <p>Email: {dataUser.email}</p>
            <p>Created at: {dataUser.created_at}</p>
            <p>Name: {dataUser.name}</p>
            <p>ID in GitHub: {dataUser.id}</p>
            <p>Location: {dataUser.location}</p>
            <p>All repositorius: {dataUser.public_repos}</p>
            <p>Twitter username: {dataUser.twitter_username}</p>
            <p>Last seen at: {dataUser.updated_at}</p>
          </div>
        </div>
        <div className="other">
          <MyButton onClick={() => navigate(-1)}>Go back.</MyButton>
        </div>
      </div>
    </div>
  ) : (
    <div className="wrapper-user">
      <h1 className="text-user">Loading...</h1>
    </div>
  );
};

export default UserPage;
