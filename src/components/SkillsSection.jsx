import { memo } from "react";

function SkillsSection() {
  return (
    <section id="skills" className="fullscreen-section">
      <h2>SKILLS</h2>
      <div className="section-content">
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Language Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Turkish - Native</span>
              <span className="skill-tag">English - C1</span>
              <span className="skill-tag">Polish - A1</span>
              <span className="skill-tag">German - A1</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Front-end Technologies</h3>
            <div className="tech-grid">
              <div className="tech-item"><i className="fab fa-html5" /><span>HTML5</span></div>
              <div className="tech-item"><i className="fab fa-css3-alt" /><span>CSS3</span></div>
              <div className="tech-item"><i className="fab fa-js" /><span>JavaScript</span></div>
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" /><span>TypeScript</span></div>
              <div className="tech-item"><i className="fab fa-react" /><span>React.js</span></div>
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" /><span>Next.js</span></div>
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" /><span>Angular</span></div>
              <div className="tech-item"><i className="fab fa-bootstrap" /><span>Bootstrap</span></div>
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /><span>Figma</span></div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Back-end Technologies</h3>
            <div className="tech-grid">
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" /><span>C#</span></div>
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Core" /><span>.NET Core</span></div>
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL" /><span>SQL</span></div>
              <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /><span>Python</span></div>
            </div>
          </div>
        </div>
        <div className="working-section">
          <h3>Current Side Projects</h3>
          <div className="project-cards">
            <div className="project-card"><span className="project-chip">In Progress</span><h4>Finance App</h4><p>A personal finance tracker for budgeting, expenses, and monthly reports.</p></div>
            <div className="project-card"><span className="project-chip">In Progress</span><h4>Web Game</h4><p>A browser-based game focused on responsive UI and smooth user interaction.</p></div>
            <div className="project-card"><span className="project-chip">In Progress</span><h4>ML Project</h4><p>An ML experiment pipeline for image classification.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
