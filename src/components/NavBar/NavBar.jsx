import { useState } from 'react';
import './NavBar.scss';
import { MdOutlineArrowForward } from 'react-icons/md';

export default function NavBar({ sections = [{ id: '', label: '' }], activeIndex =  0}) {

  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(prev => !prev);
  };

  return (
    <div className="nav-bar">
      <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <MdOutlineArrowForward className='menu-toggle-icon' alt="Menu" />
        <a className='menu-active-section'>{sections[activeIndex]?.label}</a>
      </div>
      <div className={`menu ${isActive ? 'active' : ''}`}>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={index === activeIndex ? 'active' : ''}
            onClick={toggleMenu}
          >
            {section.label}
          </a>
        ))}
      </div>
    </div>
  );
}