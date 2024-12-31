import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-blue-900 justify-between py-4 text-white'>
        <div className="logo mx-8">
            <span className='font-bold text-xl '>iTask</span>
        </div>
        <ul className="flex justify-between gap-10 mx-9">
             <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar