import React from "react";

const SocialLinks = ({ className, href, icon, text }) => {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default SocialLinks;
