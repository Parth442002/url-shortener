import React from 'react'

import HeroSection from "../src/Components/HeroSection"
import Navbar from "../src/Components/Navbar"

function index() {
  return (
    <main className="h-full w-full flex-1">
      <Navbar fixed={true}/>
      <HeroSection/>
    </main>
  )
}

export default index
