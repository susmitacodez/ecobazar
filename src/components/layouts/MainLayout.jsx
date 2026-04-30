import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import Searchbar from '../Searchbar'

const MainLayout = () => {
  return (
    <>
    <TopBar />
    <Searchbar/>
    <Outlet />
    </>
  )
}

export default MainLayout