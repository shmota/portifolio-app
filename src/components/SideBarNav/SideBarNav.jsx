import './SidebarNav.scss';

export default function SidebarNav({ sections = [{ id: '', label: ''}], activeIndex = 0 }) {
  return (
    <nav className="sidebar">
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={index === activeIndex ? 'active' : ''}
        >
          {section.label}
        </a>
      ))}
    </nav>  
  );
}