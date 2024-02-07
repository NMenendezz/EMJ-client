import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/es";
import avatar from "../../assets/images/avatar.svg";
import "./post.css";
import { AuthContext } from "../../context/authContext";

const apiUrl = process.env.REACT_APP_API_URL;

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  dayjs.locale("es");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${apiUrl}/posts/post/${id}`)
          .then((res) => setPost(res.data));
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          navigate("/error404");
        } else {
          console.error(err);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [id, navigate]);

  const handleEdit = (e) => {
    navigate(`/update_post/${id}`, { state: { post } });
  };

  if (loading) {
    return (
      <main className="main">
        <p>Cargando...</p>
      </main>
    );
  }

  if (!post) {
    return navigate("/error404");
  }

  return (
    <main className="main">
      <div className="author__information">
        <img src={avatar} alt="avatar icon" className="author__avatar" />
        <div className="author__data">
          <span className="author__name">
            {post.firstname} {post.lastname}
          </span>
          <span className="author__date">
            {dayjs(post.createdAt).format("DD [de] MMMM, YYYY")}
          </span>
        </div>
      </div>
      <article
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="single-post"
      ></article>
      {currentUser && (
        <button className="edit-button" onClick={handleEdit}>
          Editar
        </button>
      )}
    </main>
  );
};

export default Post;
