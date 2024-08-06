// import './App.css'
import { Command } from './components/Command'
import { Nav } from './components/Nav'
import { IFParticles } from './components/Particles'
import { ToastContainer, toast } from 'react-toastify'
import { Welcome } from './components/Welcome'
import { About } from './components/About'
import 'react-vertical-timeline-component/style.min.css'
import { useEffect, useState } from 'react'
import { Projects } from './components/Projects'

function App() {
  const VISIT_NAME = "number_of_visit"
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    const count = localStorage.getItem(VISIT_NAME)
    setVisitCount(Number(count || 1) + 1)
  }, [])

  useEffect(() => {
    if (visitCount) {
      localStorage.setItem(VISIT_NAME, visitCount.toString())
    }
    if (visitCount > 1) {
      toast.info(<span>Welcome back!<br />You have visited this site {visitCount} times.</span>)
    }
  }, [visitCount])

  return (
    <div className="App w-screen overflow-hidden ">
      <IFParticles />
      <Nav />
      <Welcome />
      <About />
      <Command />
      {/* <Projects /> */}
      <ToastContainer
        position="bottom-center"
        theme="dark"
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        autoClose={1500}
      />
    </div>
  )
}

export default App
