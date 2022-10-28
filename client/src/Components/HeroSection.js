import React, { useState } from 'react'

function HeroSection() {
  const [original_url,setOriginalUrl]=useState("")
  return (
    <main className='bg-transparent mt-28'>
      <div className="self-center align-center text-center">
      <h1
      className="text-5xl font-sans tracking-wide">
        The Best Url Shortener in the World. <span className='font-bold'>Period.</span>
      </h1>
      <div className="relative">
        <input
          class="mt-14 shadow appearance-none border border-black rounded-lg w-1/3 py-3 px-3 text-gray-700 mb-3 leading-wide focus:outline-none focus:shadow-outline text-2xl"
          id="original_Input"
          type="text"
          placeholder="Original Url"
          value={original_url}
          onChange={(e)=>setOriginalUrl(e.target.value)}
        />
        <button
        class="relative inline-flex items-center justify-center mb-2 mr-2 ml-10 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 px-10 group-hover:bg-opacity-0">
        <span class="relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Convert
        </span>
</button>
      </div>

      </div>
    </main>
  )
}


export default HeroSection