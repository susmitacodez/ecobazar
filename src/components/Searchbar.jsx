import React from 'react'
import Container from './Container'
import logo from '../assets/images/logo.png'
const Searchbar = () => {
  return (
   <>
 <Container>
 <div className='flex justify-between py-[27.5px]'>
    <div>
        <img src={logo} alt="" />
    </div>
    <div>
        <input className='border-b border-amber-500' type="text" placeholder='search' /> 
    </div>
    <div>kk</div>
   </div>
 </Container>
   </>
  )
}

export default Searchbar