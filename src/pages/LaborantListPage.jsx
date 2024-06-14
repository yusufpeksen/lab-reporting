import React from 'react'
import NavBar from '../components/NavBar'
import LaborantsList from '../features/laborant/LaborantsList'

const LaborantListPage = () => {
  return (
    <div>
        <NavBar />
        <LaborantsList />
    </div>
  )
}

export default LaborantListPage