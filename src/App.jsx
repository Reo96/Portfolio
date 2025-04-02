import './App.css'
import NavBar from './components/navBar.jsx';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/> 
      <Footer/>
    </>
  )
}

export default App
