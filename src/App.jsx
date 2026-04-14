import PageHolder from './components/PageHolder'
import './App.css'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'

function App() {

  return (
    <div className="App">
      <PageHolder sectionName="home">
        <Home />
        <AboutMe />
      </PageHolder>
    </div>
  )
}

export default App
