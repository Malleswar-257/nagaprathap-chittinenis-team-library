import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialButton = ({ platform, url, className }) => {
  const icons = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-button ${className}`}
    >
      {icons[platform]}
    </a>
  );
};

export default SocialButton;