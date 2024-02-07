import React from 'react';
import { useLocation } from 'react-router-dom';

const NewPostButtons = ({ handleSubmit }) => {
  const state = useLocation().state
  return (
    <div className="new-post__btns">
      {!state ? (
        <>
          <button className="new-post__btns--draft">Borrador</button>
          <button className="new-post__btns--publish" onClick={handleSubmit}>
            Publicar
          </button>
        </>
      ) : (
        <button className="new-post__btns--edit" onClick={handleSubmit}>
          Editar
        </button>
      )}
    </div>
  );
};

export default NewPostButtons;
