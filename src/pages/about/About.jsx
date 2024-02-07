import React from "react";
import image from "../../assets/images/jonathan-img.png"
import "./about.css"

const AboutMe = () => {
  return (
    <main className="main">
      <article className="about__article">
        <h2 className="about__title">¿Quién soy?</h2>
        <br />
        <div className="about__img-container">
        <img src={image} alt="Jonathan Sanchez" className="about__img" />
        </div>
        <br />
        <p className="about__p">
          ¡Buenas! Soy Jonathan Sánchez, periodista, con conocimiento integral
          del desarrollo de material informativo. Mi formación académica me ha
          permitido adquirir una gran capacidad de redacción, así como una
          perspectiva general de todas las áreas del ámbito de la comunicación.
        </p>
        <br />
        <p className="about__p">
          En mi experiencia profesional he potenciado el trabajo en equipo e
          implicación en diversas tareas. Mi labor periodística se ha centrado
          en la gestión y creación de contenidos web, búsqueda de información,
          organización y gestión de redes sociales, y preparación de dosieres
          para entrevistas y reuniones. Por lo que sé que es redactar notas de
          prensa, noticias e informar de manera inmediata y veraz para
          proporcionar información sobre hechos que conciernen a todos. Por
          supuesto, también soy consciente de que la comunicación evoluciona y
          es fundamental estar actualizado, por eso, voy a cursar un Máster en
          Innovación en Periodismo.
        </p>
        <br />
        <p className="about__p">
          Este camino me ha enriquecido tanto profesional como personalmente con
          una actitud proactiva y ganas de aprender. He logrado una capacidad de
          adaptación a cualquier tipo de situación, mejorar mis aptitudes
          sociales y ejercer mi profesión con fuerza y determinación. Por esta
          razón, mi objetivo es buscar nuevos retos que puedan aportarme grandes
          metas y logros para mi crecimiento.
        </p>
        <br />
      </article>
    </main>
  );
};

export default AboutMe;
