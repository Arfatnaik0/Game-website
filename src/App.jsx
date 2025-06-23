import './index.css'
import Hero from './components/hero'
import About from './components/about'

function App() {

  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden' >
      <Hero/>
      <About/>
    </main>
    </>
  )
}

export default App
