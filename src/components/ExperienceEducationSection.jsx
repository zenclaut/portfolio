import { memo } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ExperienceEducationSection({
  activeTab,
  handleTabClick,
  workItems,
  educationItems,
  activeTimeline,
  setActiveTimeline,
  t,
}) {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="experience-education" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 bg-background dark:bg-[#0b131c] flex flex-col justify-center transition-colors duration-300"
    >
      <div className={`flex justify-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center bg-white dark:bg-slate-800 p-1.5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-md">
          <button 
            type="button"
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer ${
              activeTab === "experience" 
                ? "bg-primary text-white shadow-sm" 
                : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:bg-gray-50 dark:hover:bg-slate-700/50"
            }`} 
            onClick={() => handleTabClick("experience")}
          >
            {t?.workExperience || "WORK EXPERIENCE"}
          </button>
          
          <div className="w-[1px] h-5 bg-gray-200 dark:bg-slate-700 mx-1" aria-hidden="true" />
          
          <button 
            type="button"
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer ${
              activeTab === "education" 
                ? "bg-primary text-white shadow-sm" 
                : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:bg-gray-50 dark:hover:bg-slate-700/50"
            }`} 
            onClick={() => handleTabClick("education")}
          >
            {t?.education || "EDUCATION"}
          </button>
        </div>
      </div>

      <div className="max-w-[1000px] w-full mx-auto">
        <div className={activeTab === "experience" ? "block" : "hidden"} id="experience-content">
          <div className="relative pl-6 md:pl-8 border-l-2 border-primary/20 dark:border-secondary/30 space-y-8">
            {workItems.map((item, index) => {
              const isActive = activeTimeline === index;
              return (
                <div 
                  key={item.title + index} 
                  className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-[31px] md:-left-[39px] top-5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-primary dark:border-secondary shadow-sm" />
                  <div className={`bg-white dark:bg-slate-800 rounded-xl border transition-all duration-300 overflow-hidden ${isActive ? 'border-primary dark:border-secondary shadow-md' : 'border-gray-100 dark:border-slate-700/80 hover:border-primary/50 dark:hover:border-secondary/50 shadow-sm hover:shadow-md'}`}>
                    <div 
                      className={`p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-2 transition-colors ${isActive ? 'bg-primary/5 dark:bg-secondary/10' : 'hover:bg-gray-50 dark:hover:bg-slate-700/40'}`} 
                      onClick={() => setActiveTimeline((prev) => (prev === index ? null : index))}
                    >
                      <h3 className={`text-lg font-bold ${isActive ? 'text-primary dark:text-secondary' : 'text-gray-800 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-secondary'}`}>{item.title}</h3>
                      <span className={`text-sm font-medium px-3 py-1 rounded-lg whitespace-nowrap self-start md:self-auto ${isActive ? 'bg-primary text-white shadow-sm' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300'}`}>{item.date}</span>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out ${isActive ? 'max-h-[800px] opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 px-5 overflow-hidden'}`}>
                      <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-secondary dark:text-secondary font-semibold hover:text-primary dark:hover:text-white mb-4 transition-colors">
                        {item.company} <i className="fas fa-arrow-up-right-from-square text-xs" />
                      </a>
                      <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed prose prose-sm dark:prose-invert prose-a:text-primary dark:prose-a:text-secondary" dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={activeTab === "education" ? "block space-y-6" : "hidden"} id="education-content">
          {educationItems.map((item, index) => (
            <div 
              key={item.title + index} 
              className={`bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-secondary/40 transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-secondary transition-colors">{item.title}</h3>
                <span className="text-sm font-medium px-3 py-1 rounded-lg bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary whitespace-nowrap self-start md:self-auto">{item.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">{item.field}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-secondary dark:text-secondary hover:text-primary dark:hover:text-white font-medium transition-colors">
                {item.school} <i className="fas fa-arrow-up-right-from-square text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ExperienceEducationSection);
