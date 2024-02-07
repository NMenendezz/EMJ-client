import React, { useContext, useEffect, useState } from "react";
import EditorQuill from "./EditorQuill";
import CategorySelection from "./CategorySelection";
import NewPostButtons from "./NewPostButtons";
import { AuthContext } from "../../context/authContext";
import "./newPost.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  toastSuccess,
  toastError,
} from "../../assets/notifications/toastNotifications";

const apiUrl = process.env.REACT_APP_API_URL;

const NewPost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const extractTitleFromContent = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    const firstH1 = div.querySelector("h1");
    return firstH1 ? firstH1.innerText : "";
  };

  const extractImageFromContent = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    const imgElement = div.querySelector("img");
    return imgElement ? imgElement.getAttribute("src") : "";
  };

  useEffect(() => {
    if (location.state) {
      const { post } = location.state;
      setTitle(post.title);
      setImg(post.img);
      setContent(post.content);
      setCategory(post.category);
    }
  }, [location.state]);

  useEffect(() => {
    if (content) {
      setTitle(extractTitleFromContent(content));
      setImg(extractImageFromContent(content));
    }
  }, [content]);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title ) {
      toastError("Debes elegir un título");
      return;
    }

    let categoryId = category; // Initialize categoryId with the selected category

    const data = {
      id: location.state?.post?._id,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      title,
      img,
      content,
      category: categoryId,
    };

    try {
      if (location.state && currentUser.firstname === location.state.post.firstname) {
        // Update existing post
        await axios.patch(`${apiUrl}/posts/update/${location.state.post._id}`, data, {
          headers: { authorization: "Bearer " + currentUser.accessToken },
        });
      } else {
        // Create a new post
        await axios.post(`${apiUrl}/posts/new_post`, data, {
          headers: { authorization: "Bearer " + currentUser.accessToken },
        });
      }
      toastSuccess("Post publicado con éxito!");
      navigate("/");
    } catch (err) {
      toastError("Ha ocurrido un error");
      console.log(err);
    }
  };

  return (
    <main className="main">
      <section className="new-post">
        <EditorQuill content={content} setContent={setContent} />
        <aside className="new-post__aside">
          <CategorySelection category={category} setCategory={setCategory} />
          <NewPostButtons handleSubmit={handleSubmit} />
        </aside>
      </section>
    </main>
  );
};

export default NewPost;
