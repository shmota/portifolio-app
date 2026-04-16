import PageHolder from './components/PageHolder/PageHolder'
import './App.css'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Abilities from './pages/Abilities/Abilities'

function App() {

  return (
    <div className="App">
      <PageHolder sectionName="home">
        <Home />
        <AboutMe />
      </PageHolder>
      <PageHolder sectionName="abilities" title='Habilidades técnicas'>
        <Abilities />
      </PageHolder>
    </div>
  )
}

export default App
