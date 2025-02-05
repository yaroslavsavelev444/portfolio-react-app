import React from "react";
import "./FooterBar.css";
import { Mail, Github, Send } from "lucide-react";
const FooterBar = () => {
  const telegramLink = process.env.REACT_APP_TELEGRAM;
  const githubLink = process.env.REACT_APP_GITHUB;
  const emailLink = `mailto:${process.env.REACT_APP_EMAIL}`;

  return (
    <footer className="footer">
      <div className="social-links">
        {/* Telegram */}
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="icon telegram"
        >
          <Send size={24} />
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <Github size={24} />
        </a>
        <a href={emailLink} className="icon email">
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
};

export default FooterBar;
