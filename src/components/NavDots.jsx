import { memo } from "react";

function NavDots({ sectionIds, activeSection, scrollToSection }) {
  return (
    <nav className="nav-dots">
      <ul>
        {sectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              data-tooltip={id === "hero" ? "HOME" : id.toUpperCase()}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default memo(NavDots);
