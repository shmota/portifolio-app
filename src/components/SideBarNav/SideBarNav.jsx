import './SidebarNav.css';
import { Children } from 'react';

export default function SidebarNav({ children }) {

  const sections = Children.map(children, (child) => ({
    id: child.props.sectionName,
    label: child.props.label || child.props.sectionName
  }));

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="sidebar-nav">
        {sections.map((section) => (
          <div
            key={section.id}
            className="nav-item"
            onClick={() => scrollToSection(section.id)}
          >
            <span className="dot" />
            <span className="label">{section.label}</span>
          </div>
        ))}
      </div>

      {children}
    </>
  );
}