
import React from "react";

import {
  ArrowUpRight,
  Terminal,
  Code2,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "../css/Hero.css";

function Hero() {
  const skills = [
    "React.js",
    "Express",
    "Node.js",
    "PHP",
    "MySQL",
  ];

  return (
    <section id="home" className="hero-section">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            OPEN TO WORK
          </div>

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Sumit <span>Kushwah</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications.
            I enjoy turning ideas into real-world digital experiences
            using React, JavaScript, Node.js, PHP and MySQL.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              Explore Projects
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            {/* GITHUB */}
            <a
              href="https://github.com/Sumiittkushwah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              title="GitHub"
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/sumit-kushwah-154a80413/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* RIGHT TERMINAL */}
        <div className="hero-terminal">

          <div className="terminal-header">

            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>sumit@portfolio:~</p>

            <Terminal size={18} />

          </div>

          <div className="terminal-body">

            <p className="terminal-command">
              <span>➜</span> whoami
            </p>

            <h3>Sumit Kushwah</h3>

            <p className="terminal-muted">
              Full Stack Developer
            </p>

            <div className="terminal-divider"></div>

            <p className="terminal-command">
              <span>➜</span> tech-stack --list
            </p>

            <div className="terminal-code">
              <p className="skills-line">

                <span className="code-purple">const</span>
                <span> skills = [</span>

                {skills.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <span className="skill-item">
                      "{skill}"
                    </span>

                    {index !== skills.length - 1 && (
                      <span>, </span>
                    )}
                  </React.Fragment>
                ))}

                <span>];</span>

              </p>
            </div>

            <div className="terminal-divider"></div>

            <p className="terminal-command">
              <span>➜</span> current_status
            </p>

            <div className="terminal-status">
              <span className="status-dot"></span>
              OPEN TO WORK
            </div>

            <div className="terminal-footer">
              <Code2 size={16} />
              <span>Building something awesome</span>
              <Sparkles size={16} />
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM SCROLL */}
      <div className="hero-bottom-text">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;
