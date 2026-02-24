import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div className='min-h-full bg-gray-900'>
      <header className='absolute inset-0 top-0 z-50 bg-amber-700'>
        <nav className='flex items-center justify-between px-6 lg:px-6'>
          <div className='flex lg:px-1'> 
            <a href="" className='m-1.5 p-1.5'>
              <span className="sr-only">Your Company</span>
              <img src="/05.jpg" alt="" className="h-8 w-auto" />
            </a>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a className='text-sm/6 font-semibold text-black' href="">Home</a>
            <a className='text-sm/6 font-semibold text-black' href="">sobre</a>
            <a className='text-sm/6 font-semibold text-black' href="">Cortes</a>
            <a className='text-sm/6 font-semibold text-black' href="">Contato</a>
          </div>
        </nav> 
        {/* Final do nav */}
      
      </header>
    </div>
   
  )
}

export default App
