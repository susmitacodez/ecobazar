import React from 'react'
import Container from './Container';
import { FaAngleDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router';
import { FiPhoneCall } from "react-icons/fi";


const Navbar = () => {
  return (
    <>
       <div className='bg-[#1A1A1A] text-white'>
        <Container>

          <div className='flex items-center justify-between gap-x-8'>

              <div className='flex items-center bg-[#333333]'>
                <div className='bg-[#00B207] px-6 py-5'>
                  <IoMdMenu className='text-[32px] text-white' />
                </div>
                <Link
                  to="#"
                  className='flex items-center gap-x-16 px-8 py-5 font-pop font-medium text-[16px] text-white'
                >
                  All Categories
                  <FaAngleDown className='text-[14px]' />
                </Link>

              </div>

              <ul className='flex items-center gap-x-8 font-pop text-[16px] text-[#999999]'>

                <li>
                  <Link to="#" className='flex items-center gap-x-1 hover:text-[#ffffff] duration-300'>
                    Home
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link to="#" className='flex items-center gap-x-1 hover:text-[#ffffff] duration-300'>
                    Shop
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link to="#" className='flex items-center gap-x-1 hover:text-[#ffffff] duration-300'>
                    Pages
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link to="#" className='flex items-center gap-x-1 hover:text-[#ffffff] duration-300'>
                    Blog
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-[#ffffff] duration-300'>
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-[#ffffff] duration-300'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            <div>

              <Link
                to="tel:01305359520"
                className='flex gap-2 font-pop text-[14px] leading-[150%] font-medium items-center text-white'
              >
                <FiPhoneCall className='text-[20px]' />
                01305-359520
              </Link>
            </div>

          </div>

        </Container>
      </div>
    </>
  )
}

export default Navbar