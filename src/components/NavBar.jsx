import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='text-3xl bg-[#EEE7DA] p-5 rounded-md absolute left-10 top-10'>
        <Link to={'/'}>ANASAYFA</Link>
    </div>
  )
}

export default NavBar