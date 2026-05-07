import { memo } from "react";

function Sidebar({ sidebarVisible }) {
  const resumeUrl = `${import.meta.env.BASE_URL}HakanTurhan-Resume.pdf`;
  const profileImageUrl = `${import.meta.env.BASE_URL}pp.jpg`;

  return (
    <aside className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
      <div className="sidebar-bg-gradient" />
      <div className="sidebar-bg-glow" aria-hidden="true">
        <span className="sidebar-blob sidebar-blob-1" />
        <span className="sidebar-blob sidebar-blob-2" />
        <span className="sidebar-blob sidebar-blob-3" />
        <span className="sidebar-blob sidebar-blob-4" />
      </div>
      <div className="profile-container">
        <div className="profile-image"><img src={profileImageUrl} alt="Hakan Turhan" loading="lazy" decoding="async" /></div>
        <h1>Hakan Turhan</h1>
        <p className="title">Software Engineer</p>
        <p>Turkiye</p>
        <a href={resumeUrl} target="_blank" rel="noreferrer" className="download-resume" download>
          <i className="fas fa-download" /> Download Resume
        </a>
      </div>
      <div className="sidebar-section contact-section">
        <h2>CONTACT</h2>
        <div className="contact-info">
          <a href="mailto:ahmedhakanturhan@gmail.com"><i className="fas fa-envelope" /> ahmedhakanturhan@gmail.com</a>
          <a href="https://www.linkedin.com/in/turhanhakan" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /> LinkedIn</a>
          <a href="https://github.com/zenclaut" target="_blank" rel="noreferrer"><i className="fab fa-github" /> GitHub</a>
        </div>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
