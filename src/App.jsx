import { Header } from "./components/Header"
import { Home } from "./components/Sections/HomeSection"
import { About } from "./components/Sections/AboutSection"
import { Stacks } from "./components/Sections/StacksSection"
import { Projects } from "./components/Sections/ProjectsSection"
import { Footer } from "./components/Footer"


import './styles/index.css'
 
export const App = () => {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Stacks/>
      <Projects/>
      <Footer/>
    </>
  )
}


