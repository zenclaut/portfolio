import { memo } from "react";

function AboutSection() {
  return (
    <section id="about-me" className="fullscreen-section">
      <h2>ABOUT ME</h2>
      <div className="section-content">
        <div className="about-grid">
          <div className="about-section hobbies-section">
            <div className="about-header"><i className="fas fa-heart" /><h3>My Interests</h3></div>
            <div className="about-content">
              <div className="hobby-cards">
                <div className="hobby-card"><i className="fas fa-mountain" /><div className="hobby-info"><h4>Mountaineering</h4><p>I have been a mountaineer for 6 years</p></div></div>
                <div className="hobby-card"><i className="fas fa-gamepad" /><div className="hobby-info"><h4>Games</h4><p>Tabletop, Video Games and Game Design</p></div></div>
                <div className="hobby-card"><i className="fas fa-palette" /><div className="hobby-info"><h4>Art</h4><p>Music, drawing and writing.</p></div></div>
                <div className="hobby-card"><i className="fas fa-microphone" /><div className="hobby-info"><h4>Voice Acting</h4><p>In my spare time I work as a freelancer voice actor</p></div></div>
                <div className="hobby-card"><i className="fas fa-brain" /><div className="hobby-info"><h4>Psychology and Philosophy</h4><p>I make researches in various topics and used to make many podcasts</p></div></div>
              </div>
            </div>
          </div>
          <div className="about-section traits-section">
            <div className="about-header"><i className="fas fa-star" /><h3>My Traits</h3></div>
            <div className="about-content">
              <div className="traits-grid">
                <div className="trait-card"><i className="fas fa-lightbulb" /><span>Quick Learner</span></div>
                <div className="trait-card"><i className="fas fa-users" /><span>Team Player</span></div>
                <div className="trait-card"><i className="fas fa-flag" /><span>Goal-Oriented</span></div>
                <div className="trait-card"><i className="fas fa-chart-line" /><span>Self-Improving</span></div>
                <div className="trait-card"><i className="fas fa-comments" /><span>Good Communicator</span></div>
                <div className="trait-card"><i className="fas fa-search" /><span>Research Enthusiast</span></div>
                <div className="trait-card"><i className="fas fa-tasks" /><span>Responsible</span></div>
                <div className="trait-card"><i className="fas fa-clock" /><span>Time Management</span></div>
                <div className="trait-card"><i className="fas fa-puzzle-piece" /><span>Problem Solver</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
