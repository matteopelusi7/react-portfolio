import React from 'react'
import About from './About'
import Contact from './Contact'
import Jumbo from './Jumbo'
import Portfolio from './Portfolio'
import Skills from './Skills'

const Main = () => {
  return (
    <div>
      <Jumbo />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  )
}

export default Main