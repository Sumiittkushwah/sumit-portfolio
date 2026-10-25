
import React from "react";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import "../css/Education.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">

        <div className="education-top">
          <span className="education-label">04 / MY EDUCATION</span>
          <span className="education-line"></span>
        </div>

        <div className="education-heading">
          <p>ACADEMIC BACKGROUND</p>
          <h1>My <span>Education.</span></h1>
          <p className="education-description">
            My academic journey and the foundation of my technical knowledge.
          </p>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={30} />
          </div>

          <div className="education-content">
            <span className="education-status">CURRENTLY PURSUING</span>

            <h2>Bachelor of Computer Applications (BCA)</h2>

            <h3>Uttam Group of Institutions</h3>

            <div className="education-details">
              <span>
                <BookOpen size={16} />
                5th Semester
              </span>

              <span>
                <Calendar size={16} />
                Currently Studying
              </span>

              <span>
                <MapPin size={16} />
                Uttar Pradesh, India
              </span>
            </div>

            <p>
              Learning programming, web development, databases and
              software development fundamentals while building practical
              projects.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
