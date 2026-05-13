import React from 'react'
import signin from '../assets/images/signin.png'
import { GoHome } from "react-icons/go";
import Container from '../components/Container'
import { MdOutlineChevronRight } from "react-icons/md";

const SignIn = () => {
  return (
    <div className="relative w-full">
      <img
        src={signin}
        alt="signin"
        className="w-full"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>


      <Container>
        <div className="flex items-center absolute top-1/2  transform -translate-y-1/2  gap-x-3">
            <GoHome className='text-[24px] text-[#808080]'/>
            <MdOutlineChevronRight className='text-base text-[#808080]'/>
            <h3 className='font-pop font-normal text-base leading-[150%] text-[#999999]'>Account</h3>
             <MdOutlineChevronRight className='text-base text-[#808080]'/>
            <h4 className='font-pop font-normal text-base leading-[150%] text-hgreen'>Login</h4>
        </div>
      </Container>
    </div>
  )
}

export default SignIn