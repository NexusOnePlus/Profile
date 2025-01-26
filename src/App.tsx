import { Outlet } from 'react-router'
import { Link } from "react-router";

import './App.css'
function App() {

  return (
    <div className='bg-linear-120 w-full min-h-screen from-red-400 to-indigo-500 text-white m-0 p-[20px] '>
      <div className='h-[calc(100vh-40px)] grid place-items-start rounded-3xl bg-black'>
        <div className='h-11 w-full rounded-t-3xl'>
          <header>
            <nav className='flex justify-center  gap-11 text-[18px] font-bold p-10'>
              <Link to='/' >Home</Link>
              <Link to='/docs' >Docs</Link>
              <Link to='/about' >About</Link>
            </nav>
          </header>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
