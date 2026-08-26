import { memo } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function AboutSection({ t }) {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="about-me" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 bg-background dark:bg-[#0b131c] flex flex-col justify-center transition-colors duration-300"
    >
      <h2 className={`text-4xl md:text-5xl font-bold text-center text-primary dark:text-secondary tracking-tight mb-16 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-primary dark:after:bg-secondary after:rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {t?.title || "ABOUT ME"}
      </h2>
      <div className={`max-w-[1200px] w-full mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/80 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-slate-700">

          <div className="group bg-white dark:bg-slate-800">
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-6 border-b border-white/20 flex items-center gap-3">
              <i className="fas fa-heart text-2xl" />
              <h3 className="text-2xl font-semibold m-0">{t?.myInterests || "My Interests"}</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-4">
                {(t?.interests || [
                  { icon: "fa-mountain", title: "Mountaineering", desc: "I have been a mountaineer and scout for 6 years" },
                  { icon: "fa-gamepad", title: "Games", desc: "Tabletop, Video Games and Game Design" },
                  { icon: "fa-palette", title: "Art", desc: "I make music, do drawings and write poems. Also I have written 4 books" },
                  { icon: "fa-microphone", title: "Voice Acting", desc: "In my spare time I work as a freelancer voice actor" },
                  { icon: "fa-brain", title: "Psychology and Philosophy", desc: "I make researches in various topics and used to make many podcasts about them" },
                ]).map((hobby, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 dark:border-slate-700/60 bg-white dark:bg-slate-800/80 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white hover:shadow-lg transition-all duration-300 group/item">
                    <div className="bg-primary/10 dark:bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors duration-300">
                      <i className={`fas ${hobby.icon} text-primary dark:text-secondary group-hover/item:text-white text-xl`} />
                    </div>
                    <div>
                      <h4 className="text-primary dark:text-secondary font-semibold text-lg mb-1 group-hover/item:text-white transition-colors duration-300">{hobby.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover/item:text-white/90 transition-colors duration-300">{hobby.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-slate-800">
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-6 border-b border-white/20 flex items-center gap-3">
              <i className="fas fa-star text-2xl" />
              <h3 className="text-2xl font-semibold m-0">{t?.myTraits || "My Traits"}</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                {(t?.traits || [
                  { icon: "fa-lightbulb", text: "Quick Learner" },
                  { icon: "fa-users", text: "Team Player" },
                  { icon: "fa-flag", text: "Goal-Oriented" },
                  { icon: "fa-chart-line", text: "Self-Improving" },
                  { icon: "fa-comments", text: "Good Communicator" },
                  { icon: "fa-search", text: "Research Enthusiast" },
                  { icon: "fa-tasks", text: "Responsible" },
                  { icon: "fa-clock", text: "Time Management" },
                  { icon: "fa-puzzle-piece", text: "Problem Solver" },
                  { icon: "fa-sync-alt", text: "Adaptable" },
                ]).map((trait, i) => (
                  <div key={i} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-slate-700/60 bg-white dark:bg-slate-800/80 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white hover:shadow-lg transition-all duration-300 group/trait">
                    <i className={`fas ${trait.icon} text-3xl text-primary dark:text-secondary group-hover/trait:text-white transition-colors duration-300`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center group-hover/trait:text-white transition-colors duration-300">{trait.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
