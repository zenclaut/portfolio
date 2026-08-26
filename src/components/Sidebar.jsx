import { memo } from "react";

function Sidebar({ sidebarVisible, t }) {
  const resumeUrl = `${import.meta.env.BASE_URL}HakanTurhan-Resume.pdf`;
  const profileImageUrl = `${import.meta.env.BASE_URL}pp.jpg`;

  return (
    <aside className={`fixed left-0 top-0 h-screen w-full md:w-[300px] z-50 overflow-y-auto overflow-x-hidden text-white flex flex-col items-center justify-between py-8 px-6 transition-all duration-500 ease-in-out ${sidebarVisible ? "translate-x-0 opacity-100 hidden md:flex" : "-translate-x-full opacity-0 hidden md:flex"} bg-gradient-to-b from-[#03251f] to-[#0a5e52]`}>
      <div className="sidebar-bg-gradient absolute inset-0 z-0 pointer-events-none" />
      <div className="sidebar-bg-glow absolute inset-0 z-0 pointer-events-none opacity-60" aria-hidden="true">
        <span className="sidebar-blob sidebar-blob-1" />
        <span className="sidebar-blob sidebar-blob-2" />
        <span className="sidebar-blob sidebar-blob-3" />
        <span className="sidebar-blob sidebar-blob-4" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center w-full mt-2">
        <div className="w-[130px] h-[130px] rounded-full overflow-hidden mb-5 border-[3px] border-white/20 shadow-xl">
          <img src={profileImageUrl} alt="Hakan Turhan" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold mb-1 tracking-wide">Hakan Turhan</h1>
        <p className="text-sm text-gray-300 font-medium mb-1">{t?.role || "Software Engineer"}</p>
        <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">{t?.location || "Poland"}</p>
        
        <a 
          href={resumeUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 hover:border-white/60 px-6 py-2.5 rounded-xl font-semibold tracking-wide transition-all duration-300 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,230,194,0.25)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer" 
          download
        >
          <i className="fas fa-download text-sm" /> {t?.downloadResume || "Download Resume"}
        </a>
      </div>
      
      <div className="relative z-10 w-full mt-auto pt-6">
        <h2 className="text-xs text-white/70 tracking-[0.25em] font-bold mb-3 uppercase text-center md:text-left">
          {t?.contact || "CONTACT"}
        </h2>
        <div className="flex flex-col gap-2.5">
          <a 
            href="mailto:ahmedhakanturhan@gmail.com" 
            className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 hover:border-white/30 text-white shadow-sm hover:shadow-md transition-all duration-300 no-underline cursor-pointer"
            title="Email"
          >
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:border-white group-hover:text-primary transition-all duration-300 shrink-0">
              <i className="fas fa-envelope text-sm transition-colors duration-300" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] text-white/60 font-medium tracking-wider uppercase">Email</span>
              <span className="text-xs font-semibold text-white truncate group-hover:text-emerald-200 transition-colors">
                ahmedhakanturhan@gmail.com
              </span>
            </div>
            <i className="fas fa-arrow-right text-[10px] text-white/40 group-hover:text-emerald-200 group-hover:translate-x-0.5 transition-all duration-300 pr-1" />
          </a>

          <a 
            href="https://www.linkedin.com/in/turhanhakan" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 hover:border-white/30 text-white shadow-sm hover:shadow-md transition-all duration-300 no-underline cursor-pointer"
            title="LinkedIn Profile"
          >
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:border-white group-hover:text-primary transition-all duration-300 shrink-0">
              <i className="fab fa-linkedin text-base transition-colors duration-300" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] text-white/60 font-medium tracking-wider uppercase">LinkedIn</span>
              <span className="text-xs font-semibold text-white truncate group-hover:text-emerald-200 transition-colors">
                in/turhanhakan
              </span>
            </div>
            <i className="fas fa-external-link-alt text-[10px] text-white/40 group-hover:text-emerald-200 group-hover:translate-x-0.5 transition-all duration-300 pr-1" />
          </a>

          <a 
            href="https://github.com/zenclaut" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 hover:border-white/30 text-white shadow-sm hover:shadow-md transition-all duration-300 no-underline cursor-pointer"
            title="GitHub Profile"
          >
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:border-white group-hover:text-primary transition-all duration-300 shrink-0">
              <i className="fab fa-github text-base transition-colors duration-300" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] text-white/60 font-medium tracking-wider uppercase">GitHub</span>
              <span className="text-xs font-semibold text-white truncate group-hover:text-emerald-200 transition-colors">
                zenclaut
              </span>
            </div>
            <i className="fas fa-external-link-alt text-[10px] text-white/40 group-hover:text-emerald-200 group-hover:translate-x-0.5 transition-all duration-300 pr-1" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
