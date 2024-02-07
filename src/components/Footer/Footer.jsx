import React from "react";
import SocialLinks from "./SocialLinks";
import { emailIcon, linkedInIcon } from "../../assets/constants/constants";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <SocialLinks
          className="footer__link"
          href="https://www.linkedin.com/in/jonathan-sánchez-hernández-5500b5183/"
          icon={linkedInIcon}
          text="Jonathan Sánchez Hernández"
        />
        <SocialLinks
          className="footer__link"
          href="mailto:info@elmundodejonathan.es?subject=¡Hola!%20Tengo%20algo%20que%20decirte...&body=Mi%20nombre%20es..."
          icon={emailIcon}
          text="info@elmundodejonathan.es"
        />
      </div>
      <SocialLinks
        className="footer__author"
        href="https://www.linkedin.com/in/nacho-menendez-lopez/"
        text="Hecho por Nacho"
      />
    </footer>
  );
};

export default Footer;
