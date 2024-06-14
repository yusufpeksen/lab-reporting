import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomePage = () => {


  return (
      <div>
        <NavBar />
        <ul className='flex-col gap-4 items-center justify-center'>
            <Link to='/addlaborant'>
            <li className='text-center mb-5 bg-[#EEE7DA] p-5 rounded-[15px] text-3xl cursor-pointer'>
                Laborant Ekle
            </li>
            </Link>
            <Link to='/addreport'>
            <li className='text-center mb-5 bg-[#EEE7DA] p-5 rounded-[15px] text-3xl cursor-pointer'>
                Rapor Ekle
            </li>
            </Link>
            <Link to='/reports'>
            <li className='text-center mb-5 bg-[#EEE7DA] p-5 rounded-[15px] text-3xl cursor-pointer'>
                Raporlar
            </li>
            </Link>
            <Link to='/laborants'>
            <li className='text-center mb-5 bg-[#EEE7DA] p-5 rounded-[15px] text-3xl cursor-pointer'>
                Laborantlar
            </li>
            </Link>
            
        </ul>
    </div>
  )
}

export default HomePage