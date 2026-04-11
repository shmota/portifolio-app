import PageHolder from './components/PageHolder'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <PageHolder sectionName="home">
        <Home />
      </PageHolder>
    </div>
  )
}

export default App
