import "./FooterStyles.css";
import { FaFacebook, FaHackerrank, FaHome,  FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">                                                    {/*  left portion of footer */}
          <div className="location">
             <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />     {/* for adding home icon */}

            <div>
              <p>Near Balaji Temple,Shivaji Chawk.</p>
              <p>Yavatmal.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9665725529
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              omkaryerawar@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
            <h4>About me</h4>
            <p>This is me Omkar Yerawar.Developer of this website.I enjoy discussing new projects and design challenges.</p>
            <div className="social">
              <a href="https://www.facebook.com/omkar.yerawar.3/about">
            <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" } }
              />
              </a>
              <a href="https://www.hackerrank.com/omkaryerawar?hr_r=1">
            <FaHackerrank
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>

              <a href="https://www.linkedin.com/in/omkar-yerawar-7abb14218/">
            <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
