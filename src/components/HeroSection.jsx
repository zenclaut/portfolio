import { memo } from "react";

function HeroSection({ heroRef }) {
  const resumeUrl = `${import.meta.env.BASE_URL}HakanTurhan-Resume.pdf`;
  const profileImageUrl = `${import.meta.env.BASE_URL}pp.jpg`;

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-bg-gradient" />
      <div className="hero-bg-blobs" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
        <span className="hero-blob hero-blob-4" />
        <span className="hero-blob hero-blob-5" />
      </div>
      <div className="hero-bg-grain" />
      <div className="hero-content">
        <div className="hero-profile">
          <div className="hero-image">
            <img src={profileImageUrl} alt="Hakan Turhan" decoding="async" fetchPriority="high" />
          </div>
          <h1>Hakan Turhan</h1>
          <p className="hero-title">Software Engineer</p>
        </div>
        <div className="hero-text">
          <p>
            Welcome to my portfolio! I build clean and efficient software while caring about the artistic side of
            digital experiences.
          </p>
        </div>
        <div className="hero-social">
          <a href="mailto:ahmedhakanturhan@gmail.com" className="social-link"><i className="fas fa-envelope" /></a>
          <a href="https://www.linkedin.com/in/turhanhakan/" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-linkedin" /></a>
          <a href="https://github.com/zenclaut" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-github" /></a>
        </div>
        <a href={resumeUrl} target="_blank" rel="noreferrer" className="download-resume" download>
          <i className="fas fa-download" /> Download Resume
        </a>
      </div>
    </section>
  );
}

export default memo(HeroSection);
