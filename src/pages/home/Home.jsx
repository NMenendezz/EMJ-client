import React, { useEffect, useState } from "react";
import Post from "../../components/Main/Posts";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./home.css";

const apiUrl = process.env.REACT_APP_API_URL;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = useLocation().search;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${apiUrl}/posts/${category}`)
          .then((res) => setPosts(res.data));
        setLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/error404");
        setLoading(false);
      }
    };
    fetchData();
  }, [category, navigate]);

  const reversedPosts = [...posts].reverse();

  if (loading) {
    return (
      <main className="main">
        <p>Cargando...</p>
      </main>
    );
  }

  if (reversedPosts.length === 0) {
    return (
      <main className="main">
        <p>No hay publicaciones en esta categoría.</p>
      </main>
    );
  }

  return (
    <main className="main">
      <section className="main__posts">
        {reversedPosts.map((post) => {
          return (
            <Link
              to={`/post/${post._id}`}
              className="main__post"
              key={post._id}
            >
              <Post
                key={post._id}
                title={post.title}
                img={post.img}
                content={post.content}
                category={post.category}
              />
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
