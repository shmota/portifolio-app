import PageHolder from './components/PageHolder/PageHolder'
import './App.scss'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Abilities from './pages/Abilities/Abilities'
import Projects from './pages/Projects/Projects'
import SidebarNav from './components/SideBarNav/SideBarNav'
import Threads from './components/BackgroundBit/Threads'
import { useState, useEffect, useRef } from 'react'

function App() {

  const [activeIndex, setActiveIndex] = useState(null);
  const sectionsRef = useRef([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (sectionsRef.current.length === 0) return;

    setSections(
      sectionsRef.current.map((el) => ({
        id: el.id,
        label: el.dataset.label
      }))
    );

    const observer = new IntersectionObserver(
      (entries) => {

        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return

        if (visible.target.id !== activeIndex && visible.isIntersecting) {

          const index = sectionsRef.current.indexOf(visible.target);
          setActiveIndex(index);
        }

      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1
      }
    );

    sectionsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pages = [
    { id: 'home', label: 'Inicio', component: <Home /> },
    { id: 'about-me', label: 'Sobre mim', component: <AboutMe /> },
    { id: 'abilities', label: 'Habilidades', component: <Abilities /> },
    { id: 'projects', label: 'Projetos', component: <Projects /> }
  ];

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1
      }}>
        <Threads
          color={[0.1843137254901961, 0.19607843137254902, 0.2980392156862745]}
          amplitude={1}
          distance={0}
          enableMouseInteraction={false}
        />
      </div >
      <div className="App" style={{ zIndex: 1 }}>
        <SidebarNav sections={sections} activeIndex={activeIndex} />
        {pages.map((page, index) => (
          <PageHolder
            key={page.id}
            sectionName={page.id}
            label={page.label}
            innerRef={(el) => (sectionsRef.current[index] = el)}
          >
            {page.component}
          </PageHolder>
        ))}
      </div>
    </>
  )
}

export default App
