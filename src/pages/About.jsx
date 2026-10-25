
import React from "react";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Target
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import sumitImage from "../assets/profile.jpeg";
import "../css/About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* Section Header */}
        <div className="about-top">
          <span className="about-label">01 / ABOUT ME</span>
          <span className="about-line"></span>
        </div>

        <div className="about-main">

          {/* Profile Image */}
          <div className="about-image-wrapper">
            <img src={sumitImage} alt="Sumit Kushwah" />

            <div className="image-caption">
              <span className="status-dot"></span>
              Always learning, always building.
            </div>
          </div>

          {/* About Information */}
          <div className="about-info">

            <p className="about-small-title">
              GET TO KNOW ME
            </p>

            <h1>
              A little about <span>who I am.</span>
            </h1>

            <p className="about-description">
              Hey, I'm Sumit Kushwah — a BCA student and aspiring
              Full Stack Developer. I enjoy building modern web
              applications and turning ideas into useful digital products.
            </p>

            <p className="about-description">
              I work with React.js, JavaScript, Node.js, PHP and MySQL.
              I'm continuously learning, improving my skills and
              exploring new ways to solve real-world problems through code.
            </p>

            {/* Details */}
            <div className="about-details">

              <div className="detail-item">
                <GraduationCap />

                <div>
                  <span>EDUCATION</span>
                  <h3>Bachelor of Computer Applications</h3>
                </div>
              </div>

              <div className="detail-item">
                <Code2 />

                <div>
                  <span>FOCUS</span>
                  <h3>Full Stack Development</h3>
                </div>
              </div>

              <div className="detail-item">
                <Target />

                <div>
                  <span>CURRENT GOAL</span>
                  <h3>Looking for Internship Opportunities</h3>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="about-socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
