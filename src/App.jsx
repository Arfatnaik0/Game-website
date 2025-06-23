import './index.css'
import Hero from './components/hero'
import About from './components/about'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden' >
      <Navbar/>
      <Hero/>
      <About/>
    </main>
    </>
  )
}

export default App
