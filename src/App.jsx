import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div className='min-h-full bg-gray-900 relative'>
      <header className='fixed top-0 left-0 w-full z-50 bg-amber-700 h-16'>
        <nav className='flex items-center justify-between px-6 lg:px-6'>
          <div className='flex lg:px-1'> 
            <a href="" className='m-1.5 p-1.5'>
              <span className="sr-only">Your Company</span>
              <img src="/05.jpg" alt="" className="h-8 w-auto" />
            </a>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a className='text-sm/6 font-semibold text-white' href="#">Home</a>
            <a className='text-sm/6 font-semibold text-white' href="#">sobre</a>
            <a className='text-sm/6 font-semibold text-white' href="#">Cortes</a>
            <a className='text-sm/6 font-semibold text-white' href="#">Contato</a>
          </div>
        </nav> 
        {/* Final do nav */}
      
      </header>

      <main className='pt-16'>
        <div className=''>

        </div>
        <div className=''>

        </div>
        <div className=''>

        </div>
      </main>
    </div>
   
  )
}

export default App
