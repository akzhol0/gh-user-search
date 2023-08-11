import axios from "axios";
import { useState } from "react";
import FormGet from "../FormGet.jsx";
import MainText from "../MainText";
import PostList from "../PostList";
import "../../styles/global.css";
import { useContext } from "react";
import { ContextSave } from "../context/index.js";
import { useEffect } from "react";

function MainPage() {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const { savedData, setSavedData } = useContext(ContextSave);

  useEffect(() => {
    if (savedData) {
      setData(savedData);
    }
  }, []);

  async function getInfo(input) {
    setIsEmpty(false);
    let response;
    try {
      response = await axios.get(`https://api.github.com/search/users?q=${input}`);
      setData(response.data);
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
    } finally {
      setSavedData(response.data);
    }
  }

  return (
    <div className="wrapper">
      <MainText>Github Search</MainText>
      <FormGet getInfo={getInfo}></FormGet>
      <PostList
        isEmpty={isEmpty}
        errorMessage={errorMessage}
        data={savedData ? savedData : data}
      />
    </div>
  );
}

export default MainPage;
