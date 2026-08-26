import { memo, useEffect, useRef, useState } from "react";

function NavDots({
  sectionIds,
  activeSection,
  scrollToSection,
  t,
  isDarkMode,
  onThemeToggle,
  currentLang,
  onLanguageChange,
}) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getNavLabel = (id) => {
    if (id === "hero") return t?.hero || "HOME";
    if (id === "experience-education") return t?.experience || "EXPERIENCE";
    if (id === "skills") return t?.skills || "SKILLS";
    if (id === "about-me") return t?.about || "ABOUT ME";
    return id;
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "tr", label: "Türkçe" },
    { code: "pl", label: "Polski" },
  ];

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4" aria-label="Quick controls and navigation">
      {/* Top: Theme Toggle Circle */}
      <div className="relative group flex items-center justify-end">
        <span className="absolute right-10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 bg-gray-900 dark:bg-slate-800 text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-transparent dark:border-slate-700 shadow-md tracking-wider whitespace-nowrap transition-all duration-300 pointer-events-none uppercase">
          {isDarkMode 
            ? (currentLang === "tr" ? "Aydınlık Mod" : currentLang === "pl" ? "Jasny motyw" : "Light Mode")
            : (currentLang === "tr" ? "Karanlık Mod" : currentLang === "pl" ? "Ciemny motyw" : "Dark Mode")
          }
        </span>
        <button
          type="button"
          onClick={onThemeToggle}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700 shadow-md backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <i
            className={`fas ${
              isDarkMode ? "fa-sun" : "fa-moon"
            } text-xs text-secondary dark:text-secondary transition-transform duration-300 group-hover:rotate-45`}
          />
        </button>
      </div>

      <div className="w-4 h-[1px] bg-gray-300 dark:bg-slate-700" aria-hidden="true" />

      {/* Middle: Navigation Dots */}
      <ul className="flex flex-col gap-3.5 list-none m-0 p-0 items-center">
        {sectionIds.map((id) => (
          <li key={id} className="relative group flex items-center justify-end">
            <span className="absolute right-8 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 bg-gray-900 dark:bg-slate-800 text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-transparent dark:border-slate-700 shadow-md tracking-wider whitespace-nowrap transition-all duration-300 pointer-events-none uppercase">
              {getNavLabel(id)}
            </span>
            <a
              href={`#${id}`}
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSection === id 
                  ? "bg-primary dark:bg-secondary scale-125 shadow-[0_0_8px_rgba(0,150,136,0.7)]" 
                  : "bg-primary/30 dark:bg-secondary/30 hover:bg-primary dark:hover:bg-secondary hover:scale-125"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              aria-label={`Scroll to ${getNavLabel(id)}`}
              aria-current={activeSection === id ? "true" : undefined}
            />
          </li>
        ))}
      </ul>

      <div className="w-4 h-[1px] bg-gray-300 dark:bg-slate-700" aria-hidden="true" />

      {/* Bottom: Language Switcher Circle */}
      <div className="relative group flex items-center justify-end" ref={langMenuRef}>
        {!langMenuOpen && (
          <span className="absolute right-10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 bg-gray-900 dark:bg-slate-800 text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-transparent dark:border-slate-700 shadow-md tracking-wider whitespace-nowrap transition-all duration-300 pointer-events-none uppercase">
            {currentLang === "tr" ? "Dil Değiştir" : currentLang === "pl" ? "Zmień język" : "Language"}
          </span>
        )}
        <button
          type="button"
          onClick={() => setLangMenuOpen((prev) => !prev)}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700 shadow-md backdrop-blur-md text-[11px] font-bold text-secondary dark:text-secondary uppercase tracking-tighter hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Change language"
          aria-expanded={langMenuOpen}
        >
          {currentLang}
        </button>

        {langMenuOpen && (
          <div className="absolute right-10 py-1.5 w-28 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700/80 backdrop-blur-lg animate-[fadeIn_0.2s_ease-out] z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  onLanguageChange(lang.code);
                  setLangMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-1.5 text-left text-xs transition-colors cursor-pointer ${
                  currentLang === lang.code
                    ? "bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                }`}
              >
                <span>{lang.label}</span>
                {currentLang === lang.code && (
                  <i className="fas fa-check text-[10px] text-primary dark:text-secondary" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(NavDots);
