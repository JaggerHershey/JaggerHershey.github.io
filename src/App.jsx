import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Experience from "./components/Experience"
import ToolCarousel from "./components/ToolCarousel"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
      <div class="max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        <Experience />
        <Education />
        <ToolCarousel />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
