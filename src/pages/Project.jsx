
import React from "react";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "../css/Project.css";

const projects = [
  {
    title: "TaskFlow",
    category: "MOBILE APPLICATION",
    description:
      "A productivity and task management application built with React Native. Users can add, edit, delete, search and organize tasks with priorities and due dates.",
    tech: ["React Native", "Expo", "AsyncStorage"],
    status: "COMPLETED",
    type: "mobile",
    downloadLink:
      "/application-219c65c2-970f-4cc5-90cf-c6309f71d6e3.apk",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "PVC Panel E-Commerce",
    category: "WEB DEVELOPMENT",
    description:
      "A modern and responsive PVC panel website featuring product categories, attractive product showcases and a clean user interface.",
    tech: ["React.js", "JavaScript", "CSS"],
    status: "COMPLETED",
    type: "web",
    downloadLink: "",
    githubLink: "",
    liveLink: "https://wall-pvc.vercel.app/",
  },
  {
    title: "ChatSphere",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A real-time chat application designed to connect users through instant messaging with a modern interface.",
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
    status: "IN PROGRESS",
    type: "web",
    downloadLink: "",
    githubLink: "",
    liveLink: "",
  },
];

function Project() {
  return (
    <section id="projects" className="project-section">
      <div className="project-container">

        <div className="project-heading">
          <p className="project-label">MY WORK</p>

          <h2 className="project-title">
            Featured <span>Projects.</span>
          </h2>

          <p className="project-description">
            Some of the projects I have built and am currently working on.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="project-top">
                <div className="project-icon">
                  <Code2 size={25} />
                </div>

                <span
                  className={`project-status ${
                    project.status === "COMPLETED"
                      ? "completed"
                      : "in-progress"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3 className="project-name">
                {project.title}
              </h3>

              <p className="project-text">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-actions">

                {project.type === "mobile" && project.downloadLink && (
                  <a
                    href={project.downloadLink}
                    className="project-action-btn download-btn"
                    download="TaskFlow.apk"
                  >
                    <Download size={16} />
                    Download APK
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="project-action-btn download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    View Project
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="project-action-btn github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={16} />
                    View Code
                    <ArrowUpRight size={15} />
                  </a>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;
