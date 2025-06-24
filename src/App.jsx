import './index.css'
import Hero from './components/hero'
import About from './components/about'
import Navbar from './components/Navbar'
import Features from './components/features'
import Footer from './components/footer'

function App() {

  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden' >
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Footer/>
    </main>
    </>
  )
}

export default App
