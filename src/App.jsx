import { useCallback, useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import ExperienceEducationSection from "./components/ExperienceEducationSection";
import HeroSection from "./components/HeroSection";
import NavDots from "./components/NavDots";
import Sidebar from "./components/Sidebar";
import SkillsSection from "./components/SkillsSection";
import { educationItems, sectionIds, workItems } from "./data/portfolioData";

export default function App() {
  const heroRef = useRef(null);
  const isAutoScrollingRef = useRef(false);
  const lastScrollActionRef = useRef(0);
  const [activeTab, setActiveTab] = useState("experience");
  const [activeTimeline, setActiveTimeline] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollTickingRef = useRef(false);
  const prevSidebarVisibleRef = useRef(false);
  const prevActiveSectionRef = useRef("hero");

  useEffect(() => {
    const onScroll = () => {
      if (scrollTickingRef.current) return;
      scrollTickingRef.current = true;

      window.requestAnimationFrame(() => {
        const allSections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
        const heroHeight = heroRef.current?.offsetHeight || 0;
        const nextSidebarVisible = window.scrollY > heroHeight * 0.5;
        if (nextSidebarVisible !== prevSidebarVisibleRef.current) {
          prevSidebarVisibleRef.current = nextSidebarVisible;
          setSidebarVisible(nextSidebarVisible);
        }

        const viewportMiddle = window.scrollY + window.innerHeight / 2;
        let current = "hero";
        for (const section of allSections) {
          const rect = section.getBoundingClientRect();
          const top = window.scrollY + rect.top;
          const bottom = top + rect.height;
          if (viewportMiddle >= top && viewportMiddle < bottom) {
            current = section.id;
            break;
          }
        }

        if (current !== prevActiveSectionRef.current) {
          prevActiveSectionRef.current = current;
          setActiveSection(current);
        }

        scrollTickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollDelay = 420;

    const getSections = () => sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const getCurrentSectionIndex = (sections) => {
      const viewportMiddle = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < sections.length; i += 1) {
        const rect = sections[i].getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const bottom = top + rect.height;
        if (viewportMiddle >= top && viewportMiddle < bottom) return i;
      }
      return 0;
    };

    const smoothScrollTo = (section) => {
      if (!section || isAutoScrollingRef.current) return;
      isAutoScrollingRef.current = true;
      section.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, scrollDelay);
    };

    const onWheel = (event) => {
      event.preventDefault();
      const sections = getSections();
      if (!sections.length) return;
      if (isAutoScrollingRef.current) return;
      const now = Date.now();
      if (now - lastScrollActionRef.current < scrollDelay) return;
      lastScrollActionRef.current = now;

      const currentIndex = getCurrentSectionIndex(sections);
      if (event.deltaY > 0 && currentIndex < sections.length - 1) {
        smoothScrollTo(sections[currentIndex + 1]);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        smoothScrollTo(sections[currentIndex - 1]);
      }
    };

    const onKeyDown = (event) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      const sections = getSections();
      if (!sections.length) return;

      const now = Date.now();
      if (now - lastScrollActionRef.current < scrollDelay) return;
      lastScrollActionRef.current = now;

      const currentIndex = getCurrentSectionIndex(sections);
      if (event.key === "ArrowDown" && currentIndex < sections.length - 1) {
        event.preventDefault();
        smoothScrollTo(sections[currentIndex + 1]);
      } else if (event.key === "ArrowUp" && currentIndex > 0) {
        event.preventDefault();
        smoothScrollTo(sections[currentIndex - 1]);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleTabClick = useCallback((tab) => {
    if (tab === activeTab) {
      setActiveTab(tab === "experience" ? "education" : "experience");
      return;
    }
    setActiveTab(tab);
  }, [activeTab]);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroSection heroRef={heroRef} />

      <div id="main-content" className="layout">
        <NavDots sectionIds={sectionIds} activeSection={activeSection} scrollToSection={scrollToSection} />
        <Sidebar sidebarVisible={sidebarVisible} />

        <main className="main-content" style={{ marginLeft: sidebarVisible ? "var(--sidebar-width)" : "0" }}>
          <ExperienceEducationSection
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            workItems={workItems}
            educationItems={educationItems}
            activeTimeline={activeTimeline}
            setActiveTimeline={setActiveTimeline}
          />
          <SkillsSection />
          <AboutSection />
        </main>
      </div>
    </>
  );
}
