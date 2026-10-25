
import React from "react";

import {
  Code2,
  Globe,
  Database,
  Wrench,
  Smartphone,
  Server
} from "lucide-react";

import "../css/Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Globe />,
    skills: ["HTML", "CSS", "JavaScript", "React.js"]
  },
  {
    title: "Backend Development",
    icon: <Server />,
    skills: ["Node.js", "PHP", "REST APIs"]
  },
  {
    title: "Database",
    icon: <Database />,
    skills: ["MySQL", "MongoDB (Learning)"]
  },
  {
    title: "Programming",
    icon: <Code2 />,
    skills: ["Python", "Java"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone />,
    skills: ["React Native", "Expo"]
  },
  {
    title: "Tools",
    icon: <Wrench />,
    skills: ["Git", "GitHub", "VS Code"]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* SECTION HEADER */}
        <div className="skills-top">
          <span className="skills-label">
            02 / MY SKILLS
          </span>

          <span className="skills-line"></span>
        </div>

        {/* HEADING */}
        <div className="skills-heading">

          <p>WHAT I WORK WITH</p>

          <h1>
            My Technical <span>Skills.</span>
          </h1>

          <p className="skills-description">
            Technologies and tools I use to build digital experiences
            and continuously improve my development skills.
          </p>

        </div>

        {/* SKILLS GRID */}
        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <div className="skill-card" key={group.title}>

              {/* CARD HEADER */}
              <div className="skill-card-top">

                <span className="skill-icon">
                  {group.icon}
                </span>

                <span className="skill-number">
                  0{index + 1}
                </span>

              </div>

              {/* SKILL TITLE */}
              <h3>{group.title}</h3>

              {/* SKILL TAGS */}
              <div className="skill-tags">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
