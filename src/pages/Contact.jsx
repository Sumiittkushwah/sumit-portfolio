
import React from "react";

import {
  ArrowUpRight,
  Mail,
  Download
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";

import "../css/Contact.css";

function Contact() {
  const email = "sumitkushwah010@gmail.com";

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <p className="contact-label">CONTACT</p>

        <h1 className="contact-title">
          Let's build something <span>meaningful.</span>
        </h1>

        <p className="contact-description">
          I'm currently looking for backend and full-stack
          internship opportunities. Whether you have an
          opportunity, a project, or simply want to connect,
          I'd love to hear from you.
        </p>

        <div className="contact-buttons">

          <a
            href={`mailto:${email}?subject=Portfolio%20Inquiry`}
            className="contact-btn primary-btn"
          >
            Email Me
            <ArrowUpRight size={17} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="contact-btn secondary-btn"
          >
            Download Resume
            <Download size={17} />
          </a>

        </div>

        <div className="contact-socials">

          {/* GITHUB */}
          <a
            href="https://github.com/Sumiittkushwah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/sumit-kushwah-154a80413/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>

          {/* EMAIL */}
          <a href={`mailto:${email}`}>
            <Mail />
            <span>{email}</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
