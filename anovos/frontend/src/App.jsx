import React from 'react'
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import About from './components/About';
import Eyes from './components/Eyes';
import Projects from './components/Projects';
function App() {
  return (


<div className='w-full min-h-screen text-white bg-zinc-900'>
<Navbar />
<Landing />
<Marquee />
<About />
<Eyes />

<Projects />
</div>




  )
}

export default App