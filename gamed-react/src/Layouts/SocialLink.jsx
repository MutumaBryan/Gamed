import React from "react";
import googleIcon from "../assets/images/google.svg";
import figmaIcon from "../assets/images/figma.svg";
import youtubeIcon from "../assets/images/youtube.svg";
import instagramIcon from "../assets/images/instagram.svg";
import "../styles/SocialLink.css";

const socialLinks = [
  {
    name: "Google",
    icon: googleIcon,
    url: "https://www.google.com",
  },

  {
    name: "Figma",
    icon: figmaIcon,
    url: "https://www.figma.com",
  },

  {
    name: "YouTube",
    icon: youtubeIcon,
    url: "https://www.youtube.com",
  },

  {
    name: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com",
  },

  {
    name: "Google",
    icon: googleIcon,
    url: "https://www.google.com",
  },
];

const SocialLink = () => {
  return (
    <div className="social-navbar">
      <h2 className="social-heading">
        Companies where our <span className="header-line">learners work</span>
      </h2>
      <div className="link-conatiner">
        <nav className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="social-link"
            >
              <img src={link.icon} alt={link.name} className="w-6 h-6" />
              <span className="social-name">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SocialLink;
