import React from 'react'
import signin from '../assets/images/signin.png'
import { GoHome } from "react-icons/go";
import Container from '../components/Container'
import { MdOutlineChevronRight } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router';

const Forget = () => {
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
               Forget password
            </h4>
          </div>
        </Container>
      </div>

      
      <div className="py-20 bg-[#F7F7F7]">
        <Container>
          <div className="max-w-130 mx-auto rounded-2 bg-white rounded-[10px] shadow-lg px-10 py-12">
            
            <h2 className='font-pop font-semibold text-hsize text-center text-[#1A1A1A] mb-8'>
              Forget Password
            </h2>

            <form className='flex flex-col gap-y-5'>
              
              <input
                type="email"
                placeholder='Email'
                className='w-full border border-gry rounded-md px-4 py-3.5 outline-none'/>

              

             
              <button className='bg-hgreen hover:bg-green-700 duration-300 text-white font-pop font-semibold py-4 rounded-full mt-2'>
                Verify email
              </button>

              
              <p className='text-center font-pop text-sm text-[#666666] mt-3'>
                Don’t have account?{" "}
                <Link to="/signin" className='text-[#1A1A1A] font-semibold cursor-pointer hover:text-hgreen duration-300'>
                  back to login
                </Link>
              </p>

            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Forget