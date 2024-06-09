import React from "react";
import "./Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <section id="footer">
        <footer>
          <div className="txtss">
            <div className="h3">
              <h3>Qodirov Abbos</h3>
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and <br /> Web Applications that leads to the success
                of the overall product
              </p>
            </div>

            <div className="social">
              <h3>SOCIAL</h3>
              <a
                href="https://www.instagram.com/p/C4RrOkJNnG3/"
                target="_blank"
              >
                <span>
                  <AiOutlineInstagram />
                </span>
              </a>
              <a href="https://t.me/insta_abboskadirov04" target="_blank">
                <span>
                  <FaTelegramPlane />
                </span>
              </a>
              <a href="https://uz.linkedin.com/" target="_blank">
                <span>
                  <AiFillLinkedin />
                </span>
              </a>
              <a href="https://github.com/abbos772/" target="_blank">
                <span>
                  <AiFillGithub />
                </span>
              </a>
            </div>
          </div>

          <div className="lime"></div>
          <p id="copyright">
            © Copyright 2024. Made by{" "}
            <a href="https://t.me/insta_abboskadirov04" target="_blank">
              Qodirov Abbos
            </a>
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
