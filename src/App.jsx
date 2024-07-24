import React from 'react'
import { Saidbar } from './components/Saidbar/Saidbar'
import { Home } from './components/Home/Home'
import { Diagrama } from './components/Diagranma/Diagrama'



const App = () => {
  return (
    <header className='flex'>
      <div className="saidbar w-1/5">
        <Saidbar/>
      </div>
      <div className="home  bg-slate-200 w-4/5">
        <Home/>
        <Diagrama/>
      </div>

    </header>
  )
}

export default App