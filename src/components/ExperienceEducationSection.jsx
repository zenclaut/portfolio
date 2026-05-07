import { memo } from "react";

function ExperienceEducationSection({
  activeTab,
  handleTabClick,
  workItems,
  educationItems,
  activeTimeline,
  setActiveTimeline,
}) {
  return (
    <section id="experience-education" className="fullscreen-section">
      <div className="tabs">
        <button className={`tab-button ${activeTab === "experience" ? "active" : ""}`} onClick={() => handleTabClick("experience")}>
          WORK EXPERIENCE
        </button>
        <button className={`tab-button ${activeTab === "education" ? "active" : ""}`} onClick={() => handleTabClick("education")}>
          EDUCATION
        </button>
      </div>
      <div className="section-content">
        <div className={`tab-pane ${activeTab === "experience" ? "active" : ""}`} id="experience-content">
          <div className="timeline">
            {workItems.map((item, index) => (
              <div key={item.title + index} className={`timeline-item ${activeTimeline === index ? "active" : ""}`}>
                <div className="timeline-header" onClick={() => setActiveTimeline((prev) => (prev === index ? null : index))}>
                  <h3>{item.title}</h3>
                  <span className="date">{item.date}</span>
                </div>
                <div className="timeline-content">
                  <a href={item.link} target="_blank" rel="noreferrer" className="company">{item.company}</a>
                  <p className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`tab-pane ${activeTab === "education" ? "active" : ""}`} id="education-content">
          {educationItems.map((item) => (
            <div key={item.title} className="education-item">
              <div className="education-header">
                <h3>{item.title}</h3>
                <span className="date">{item.date}</span>
              </div>
              <p className="field">{item.field}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="school">{item.school}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ExperienceEducationSection);
