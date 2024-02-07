import React from "react";
import imgPreview from "../../assets/images/imp-prev.jpg";
import "./posts.css";

const Posts = ({ title, img, category }) => {
  return (
    <article className="post" data-category={category}>
      <div className="post__img-container">
        {<img src={img ? img : imgPreview} alt="preview" className="post__img" />}
      </div>
      <div className="post__container">
        <h2 className="post__title">{title}</h2>
        <span className="post__btn">
          Leer más
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 19L19 6m0 0v12.48M19 6H6.52"
            ></path>
          </svg>
        </span>
      </div>
    </article>
  );
};

export default Posts;
