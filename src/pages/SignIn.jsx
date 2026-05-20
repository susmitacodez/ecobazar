import React from 'react'
import signin from '../assets/images/signin.png'
import { GoHome } from "react-icons/go";
import Container from '../components/Container'
import { MdOutlineChevronRight } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router';

const SignIn = () => {
  return (
    <div>
      <div className="relative w-full">
        <img
          src={signin}
          alt="signin"
          className="w-full  object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>

        <Container>
          <div className="flex items-center absolute top-1/2 transform -translate-y-1/2 gap-x-3 z-10">
            <GoHome className='text-[24px] text-[#808080]' />
            <MdOutlineChevronRight className='text-base text-[#808080]' />

            <h3 className='font-pop font-normal text-base leading-[150%] text-[#999999]'>
              Account
            </h3>

            <MdOutlineChevronRight className='text-base text-[#808080]' />

            <h4 className='font-pop font-normal text-base leading-[150%] text-hgreen'>
              Sign In
            </h4>
          </div>
        </Container>
      </div>

      
      <div className="py-20">
        <Container>
          <div className="max-w-130 mx-auto rounded-2 rounded-[10px] bg-[#FFFFFF] border border-[#F2F2F2] shadow-[0px_0px_56px_rgba(0,38,3,0.08)] px-10 py-12">
            
            <h2 className='font-pop font-semibold text-[24px] text-center text-[#1A1A1A] mb-6'>
              Sign In
            </h2>

            <form className='flex flex-col gap-y-3'>
              
              <input
                type="email"
                placeholder='Email'
                className='w-full border border-gry rounded-md px-4 py-3 outline-none'/>

              
              <div className='relative'>
                <input 
                type="password"
                placeholder='Password'
                className='w-full border border-gry rounded-md px-4 py-3 outline-none' />
                <IoEyeOutline className='absolute top-6.25 right-2.5 text-[#1A1A1A] -translate-y-1/2 text-[20px] cursor-pointer' /> 

              </div>
              <div className='flex items-center justify-between'>
                <label className='flex items-center gap-x-2 cursor-pointer'>
                  <input type="checkbox" />
                  <span className='font-pop text-sm text-[#666666]'>
                    Remember me
                  </span>
                </label>

                <Link to="/forget"
                  href="#"
                  className='font-pop text-sm text-[#666666] hover:text-hgreen duration-300'>
                  Forgot Password?
                </Link>
              </div>

             
              <button className='bg-hgreen text-[12px] hover:bg-green-700 duration-300 text-white font-pop font-semibold py-3 rounded-full mt-2'>
                Login
              </button>

              
              <p className='text-center font-pop text-sm text-[#666666] mt-3'>
                Don’t have account?{" "}
                <Link to="/registration" className='text-[#1A1A1A] underline font-semibold cursor-pointer hover:text-hgreen hover:underline duration-300'>
                  Register
                </Link>
              </p>

            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SignIn