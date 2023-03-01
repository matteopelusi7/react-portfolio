import React from 'react'
import About from './About'
import Jumbo from './Jumbo'
import Portfolio from './Portfolio'

const Main = () => {
  return (
    <div className='container'>
      <Jumbo />
      <About />
      <Portfolio />
    </div>
  )
}

export default Main