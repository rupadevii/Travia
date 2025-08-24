import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="bg-[url('./assets/hero.jpg')] overflow-visible relative bg-cover bg-center min-h-screen">
        <Navbar />
        <MainSection />
      </div>
      <About />
      <Packages />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
