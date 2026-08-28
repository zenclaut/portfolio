import { memo } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function SkillsSection({ t }) {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 bg-background dark:bg-[#0b131c] flex flex-col justify-center transition-colors duration-300"
    >
      <h2 className={`text-4xl md:text-5xl font-bold text-center text-primary dark:text-secondary tracking-tight mb-16 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-primary dark:after:bg-secondary after:rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {t?.title || "SKILLS"}
      </h2>
      <div className={`max-w-[1200px] w-full mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/80 p-4 sm:p-6 md:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white dark:bg-slate-800/80 rounded-xl p-5 md:p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-secondary/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-6 border-b border-gray-100 dark:border-slate-700 pb-3">
              {t?.languageSkills || "Language Skills"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(t?.languages || ['Turkish - Native', 'English - C1', 'Polish - A1 (Learning)', 'German - A1']).map(lang => (
                <span key={lang} className="px-3.5 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-50 dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600/60 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white hover:border-primary dark:hover:border-secondary transition-colors duration-300">{lang}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800/80 rounded-xl p-5 md:p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-secondary/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-6 border-b border-gray-100 dark:border-slate-700 pb-3">
              {t?.frontend || "Front-end Technologies"}
            </h3>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: "fab fa-html5", name: "HTML5" },
                { icon: "fab fa-css3-alt", name: "CSS3" },
                { icon: "fab fa-js", name: "JavaScript" },
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
                { icon: "fab fa-react", name: "React.js" },
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", name: "Angular" },
                { icon: "fab fa-bootstrap", name: "Bootstrap" },
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                  {tech.icon ? (
                    <i className={`${tech.icon} text-2xl md:text-3xl text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300`} />
                  ) : (
                    <img src={tech.img} alt={tech.name} className="w-7 h-7 md:w-8 md:h-8 grayscale group-hover:grayscale-0 dark:brightness-90 transition-all duration-300" />
                  )}
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800/80 rounded-xl p-5 md:p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-secondary/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-6 border-b border-gray-100 dark:border-slate-700 pb-3">
              {t?.backend || "Back-end Technologies"}
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", name: "C#" },
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", name: ".NET Core" },
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", name: "SQL" },
                { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-100 dark:border-slate-700/60 hover:border-primary/30 dark:hover:border-secondary/40 hover:bg-gray-50 dark:hover:bg-slate-700/40 transition-all duration-300 group cursor-default">
                  <img src={tech.img} alt={tech.name} className="w-7 h-7 md:w-8 md:h-8 mb-2 grayscale group-hover:grayscale-0 dark:brightness-90 transition-all duration-300" />
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white dark:bg-slate-800/90 border border-gray-100 dark:border-slate-700/70 rounded-xl p-4 sm:p-6 shadow-sm hover:border-primary/30 dark:hover:border-secondary/40 hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary mb-6">
            {t?.sideProjects || "Current Side Projects"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* 0. YouTube Studio Downloader */}
            <a
              href="https://github.com/zenclaut/youtube-downloader"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-center min-h-[140px] p-4 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-[#dbe1e8] dark:border-slate-700/80 relative overflow-hidden group hover:shadow-xl hover:border-[#005e52]/30 dark:hover:border-secondary/50 transition-all duration-300 no-underline"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="px-2.5 py-1 rounded-md text-[0.72rem] font-semibold text-secondary dark:text-secondary bg-[#009688]/10 dark:bg-secondary/20 border border-[#009688]/25 dark:border-secondary/30 whitespace-nowrap">
                  {t?.projects?.youtubeDownloader?.status || "Completed · Aug 2026"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-medium text-secondary dark:text-secondary bg-[#009688]/10 dark:bg-secondary/15 border border-[#009688]/20 dark:border-secondary/25 px-2 py-1 rounded-md transition-all duration-300 group-hover:bg-secondary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-white group-hover:border-secondary group-hover:shadow-md">
                  youtube-downloader <i className="fas fa-external-link-alt text-[10px]" />
                </span>
              </div>
              <h4 className="text-primary dark:text-secondary text-base font-semibold m-0 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                {t?.projects?.youtubeDownloader?.title || "YouTube Studio Downloader"}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-[0.82rem] leading-relaxed m-0 mt-1">
                {t?.projects?.youtubeDownloader?.desc || "Dual-engine (Serverless + Turbo FFmpeg) Chrome extension for downloading YouTube MP4 & MP3 directly on page."}
              </p>
            </a>

{/* 1. Face Mask Classification */}
            <a
              href="https://zenclaut.github.io/face-mask-ai/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-center min-h-[140px] p-4 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-[#dbe1e8] dark:border-slate-700/80 relative overflow-hidden group hover:shadow-xl hover:border-[#005e52]/30 dark:hover:border-secondary/50 transition-all duration-300 no-underline"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="px-2.5 py-1 rounded-md text-[0.72rem] font-semibold text-secondary dark:text-secondary bg-[#009688]/10 dark:bg-secondary/20 border border-[#009688]/25 dark:border-secondary/30 whitespace-nowrap">
                  {t?.projects?.mlProject?.status || "Completed · May 2026"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-medium text-secondary dark:text-secondary bg-[#009688]/10 dark:bg-secondary/15 border border-[#009688]/20 dark:border-secondary/25 px-2 py-1 rounded-md transition-all duration-300 group-hover:bg-secondary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-white group-hover:border-secondary group-hover:shadow-md">
                  face-mask-ai <i className="fas fa-external-link-alt text-[10px]" />
                </span>
              </div>
              <h4 className="text-primary dark:text-secondary text-base font-semibold m-0 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                {t?.projects?.mlProject?.title || "Face Mask Classification"}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-[0.82rem] leading-relaxed m-0 mt-1">
                {t?.projects?.mlProject?.desc || "A ResNet-based deep transfer learning pipeline with 4-class classification engineered for high-accuracy real-time mask compliance."}
              </p>
            </a>

            {/* 2. Finance App */}
            <a
              href="https://finappy.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-center min-h-[140px] p-4 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-[#dbe1e8] dark:border-slate-700/80 relative overflow-hidden group hover:shadow-xl hover:border-[#005e52]/30 dark:hover:border-secondary/50 transition-all duration-300 no-underline"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="px-2.5 py-1 rounded-md text-[0.72rem] font-semibold text-secondary dark:text-secondary bg-[#009688]/10 dark:bg-secondary/20 border border-[#009688]/25 dark:border-secondary/30 whitespace-nowrap">
                  {t?.completed || "Completed · Aug 2026"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-medium text-secondary dark:text-secondary bg-[#009688]/10 dark:bg-secondary/15 border border-[#009688]/20 dark:border-secondary/25 px-2 py-1 rounded-md transition-all duration-300 group-hover:bg-secondary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-white group-hover:border-secondary group-hover:shadow-md">
                  finappy.vercel.app <i className="fas fa-external-link-alt text-[10px]" />
                </span>
              </div>
              <h4 className="text-primary dark:text-secondary text-base font-semibold m-0 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                {t?.projects?.financeApp?.title || "Finance App"}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-[0.82rem] leading-relaxed m-0 mt-1">
                {t?.projects?.financeApp?.desc || "A personal finance tracker for budgeting, expenses, and monthly reports."}
              </p>
            </a>

            {/* 3. Web Game */}
            <div className="flex flex-col justify-center min-h-[140px] p-4 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-[#dbe1e8] dark:border-slate-700/80 relative overflow-hidden group hover:shadow-xl hover:border-[#005e52]/30 dark:hover:border-secondary/50 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="px-2.5 py-1 rounded-md text-[0.72rem] font-semibold text-primary dark:text-secondary bg-[#005e52]/10 dark:bg-secondary/20 border border-[#005e52]/20 dark:border-secondary/30 whitespace-nowrap">
                  {t?.inProgress || "In Progress"}
                </span>
              </div>
              <h4 className="text-primary dark:text-secondary text-base font-semibold m-0 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                {t?.projects?.webGame?.title || "Web Game"}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-[0.82rem] leading-relaxed m-0 mt-1">
                {t?.projects?.webGame?.desc || "A browser-based game focused on responsive UI and smooth user interaction."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
