import { memo } from "react";
import ParticleCanvas from "./ParticleCanvas";

function HeroSection({ heroRef, t }) {
  const resumeUrl = `${import.meta.env.BASE_URL}HakanTurhan-Resume.pdf`;
  const profileImageUrl = `${import.meta.env.BASE_URL}pp.jpg`;

  return (
    <section 
      id="hero" 
      className="hero-section relative h-screen w-screen bg-[#000] flex items-center justify-center text-center text-white overflow-hidden isolate" 
      ref={heroRef}
    >
      <div className="hero-bg-gradient absolute inset-0 z-0 pointer-events-none" />
      <div className="hero-bg-blobs absolute inset-0 z-0 pointer-events-none opacity-80" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
        <span className="hero-blob hero-blob-4" />
        <span className="hero-blob hero-blob-5" />
      </div>
      <ParticleCanvas />
      <div className="hero-bg-grain absolute inset-0 z-0 pointer-events-none opacity-10" />
      
      <div className="hero-content relative z-10 max-w-[800px] p-6 sm:p-8 opacity-0 animate-[fadeIn_1.5s_ease-out_1s_forwards]">
        <div className="hero-profile">
          <div className="w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mx-auto mb-6 sm:mb-8 border-4 border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.2)] opacity-0 animate-[profileReveal_1.5s_ease-out_1.5s_forwards]">
            <img src={profileImageUrl} alt="Hakan Turhan profile photo" decoding="async" fetchPriority="high" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-3 sm:mb-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.8s_forwards] drop-shadow-md tracking-tight">{t?.name || "Hakan Turhan"}</h1>
          <p className="text-xl sm:text-2xl mb-6 sm:mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_1s_forwards] text-secondary font-medium">{t?.role || "Software Engineer"}</p>
        </div>
        
        <div className="text-lg sm:text-xl leading-relaxed mb-10 sm:mb-12 opacity-0 animate-[slideUp_0.8s_ease-out_1.2s_forwards] max-w-[54ch] mx-auto text-white/90 font-light">
          <p>{t?.bio || "Crafting scalable, modern software solutions with clean code, elegant architecture, and seamless user experiences."}</p>
        </div>
        
        <div className="flex justify-center gap-7 sm:gap-8 mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_1.4s_forwards]">
          <a 
            href="mailto:ahmedhakanturhan@gmail.com" 
            className="text-white text-2xl sm:text-[1.8rem] opacity-80 hover:opacity-100 hover:text-secondary hover:-translate-y-[3px] transition-all duration-300"
            aria-label="Send email"
          >
            <i className="fas fa-envelope" />
          </a>
          <a 
            href="https://www.linkedin.com/in/turhanhakan/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-2xl sm:text-[1.8rem] opacity-80 hover:opacity-100 hover:text-secondary hover:-translate-y-[3px] transition-all duration-300"
            aria-label="Visit LinkedIn profile"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a 
            href="https://github.com/zenclaut" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-2xl sm:text-[1.8rem] opacity-80 hover:opacity-100 hover:text-secondary hover:-translate-y-[3px] transition-all duration-300"
            aria-label="Visit GitHub profile"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        
        <div className="flex items-center justify-center">
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="download-resume inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 hover:border-white/60 px-7 sm:px-8 py-3.5 rounded-xl font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,230,194,0.25)] cursor-pointer" 
            download
          >
            <i className="fas fa-download text-sm" /> {t?.downloadResume || "Download Resume"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
