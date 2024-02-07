import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
/* import Register from "./pages/register/Register"; */
import { AuthContextProvider } from "./context/authContext";
import NewPost from "./pages/newPost/NewPost";
import Post from "./pages/post/Post";
import { ToastContainer } from "react-toastify";
import Error404 from "./pages/error404/Error404";
import AboutMe from "./pages/about/About";

const App = () => {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/new_post" element={<NewPost />} />
          <Route path="/update_post/:id" element={<NewPost />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
