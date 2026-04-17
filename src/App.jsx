import PageHolder from './components/PageHolder/PageHolder'
import './App.css'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Abilities from './pages/Abilities/Abilities'
import Projects from './pages/Projects/Projects'
import SidebarNav from './components/SideBarNav/SideBarNav'
import Threads from './components/Threads'

function App() {

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1
      }}>
        <Threads
          color={[0.1843137254901961,0.19607843137254902,0.2980392156862745]}
          amplitude={1}
          distance={0}
          enableMouseInteraction={false}
        />
      </div >
      <div className="App" style={{ zIndex: 1 }}>
        <SidebarNav>
          <PageHolder sectionName="home" label="Inicio">
            <Home />
          </PageHolder>
          <PageHolder sectionName="about-me" label="Sobre mim">
            <AboutMe />
          </PageHolder>
          <PageHolder title='Habilidades técnicas' sectionName="abilities" label="Habilidades">
            <Abilities />
          </PageHolder>
          <PageHolder title='Projetos' sectionName="projects" label="Projetos">
            <Projects />
          </PageHolder>
        </SidebarNav>
      </div>
    </>
  )
}

export default App
