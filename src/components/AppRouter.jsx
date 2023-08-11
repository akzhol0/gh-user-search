import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route path="/user/:name" element={<UserPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
