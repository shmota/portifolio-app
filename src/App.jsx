import PageHolder from './components/PageHolder/PageHolder'
import './App.scss'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Abilities from './pages/Abilities/Abilities'
import Projects from './pages/Projects/Projects'
import NavBar from './components/NavBar/NavBar'
import Threads from './components/BackgroundBit/Threads'
import { useState, useEffect, useRef, useMemo } from 'react'
import ExpNEducation from './pages/ExpNEducation/ExpNEducation'

function App() {

  
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);
  const [sections, setSections] = useState([]);
  
  const threadsColor = useMemo(() => [0.4470588235294118,0.4823529411764706,0.9176470588235294], []);

  useEffect(() => {
    if (sectionsRef.current.length === 0) return;

    setSections(sectionsRef.current.map((el) => ({ id: el.id, label: el.dataset.label })));

    const observer = new IntersectionObserver((entries) => {

      const visible = entries.filter(e => e.intersectionRatio > 0).filter(e => e.isIntersecting)[0];

      if (!visible) return

      if (visible.target.id !== activeIndex) {

        const index = sectionsRef.current.indexOf(visible.target);

        setActiveIndex(index);

      }
    }, 
    {
      threshold: [0.5, 0.6],
      rootMargin: '0px 20% 0px 20%'
    });

    sectionsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  const pages = [
    { id: 'home', label: 'Inicio', labelIsTitle: false, component: <Home /> },
    { id: 'about-me', label: 'Sobre mim', labelIsTitle: false, component: <AboutMe /> },
    { id: 'abilities', label: 'Habilidades', labelIsTitle: true, component: <Abilities /> },
    { id: 'education', label: 'Experiência & Educação', labelIsTitle: true, component: <ExpNEducation /> },
    { id: 'projects', label: 'Projetos', labelIsTitle: true, component: <Projects /> }
  ];

  return (
    <>
      <div className={`threads-bg ${activeIndex === 0 ? 'enabled' : 'disabled'}`}>
        <Threads
          color={threadsColor}
          amplitude={1}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>
      <div className={`bg-blur ${activeIndex === 0 ? '' : 'disabled'}`}/>
      <div className="App">
        <NavBar sections={sections} activeIndex={activeIndex} />
        {pages.map((page, index) => (
          <PageHolder
            key={page.id}
            sectionName={page.id}
            label={page.label}
            innerRef={(el) => (sectionsRef.current[index] = el)}
            labelIsTitle={page.labelIsTitle}
          >
            {page.component}
          </PageHolder>
        ))}
      </div>
    </>
  )
}

export default App