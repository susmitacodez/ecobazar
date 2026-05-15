import React, { useState } from 'react'
import Container from './Container';
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router';

import {
  FaAppleAlt,
  FaFish,
  FaIceCream,
  FaBreadSlice,
} from "react-icons/fa";

import {
  GiMeat,
  GiMilkCarton,
  GiCookingPot,
} from "react-icons/gi";

import { IoWaterOutline } from "react-icons/io5";
import { TbCarrot } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const category = [
    {
      title: "Fresh Fruit",
      icon: <FaAppleAlt />,
    },
    {
      title: "Vegetables",
      icon: <TbCarrot />,
    },
    {
      title: "River Fish",
      icon: <FaFish />,
    },
    {
      title: "Chicken & Meat",
      icon: <GiMeat />,
    },
    {
      title: "Drink & Water",
      icon: <IoWaterOutline />,
    },
    {
      title: "Yogurt & Ice Cream",
      icon: <FaIceCream />,
    },
    {
      title: "Cake & Bread",
      icon: <FaBreadSlice />,
    },
    {
      title: "Butter & Cream",
      icon: <GiMilkCarton />,
    },
    {
      title: "Cooking",
      icon: <GiCookingPot />,
    },
  ];

  return (
    <>
      <div className='bg-[#1A1A1A] text-white'>
        <Container>

          <div className='flex items-center gap-x-8 relative'>

           
            <div className='flex items-center bg-[#333333]'>

              
              <div
                onClick={() => setOpenMenu(true)}
                className='bg-hgreen px-6 py-5 cursor-pointer'
              >
                <IoMdMenu className='text-hsize text-white' />
              </div>

              
              <div className='group min-w-58.5'>

                <Link
                  to="#"
                  className='flex items-center justify-between px-8 py-5 font-pop font-medium text-[16px] text-white'
                >
                  All Categories

                  <FaAngleDown className='text-[14px] duration-300 group-hover:rotate-180' />
                </Link>

              
                <div className='absolute top-full left-0 w-78.75 bg-white border border-[#999999] shadow-lg z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300'>

                  {category.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-x-4 px-6 py-4 hover:bg-hgreen group/item duration-300 cursor-pointer'
                    >

                      <span className='text-[22px] text-[#666666] group-hover/item:text-white duration-300'>
                        {item.icon}
                      </span>

                      <h2 className='font-pop font-normal text-[14px] text-[#1A1A1A] group-hover/item:text-white duration-300'>
                        {item.title}
                      </h2>

                    </div>
                  ))}

                </div>

              </div>

            </div>

    
            <div className="flex justify-between items-center w-full">

              <ul className='flex items-center gap-x-8 font-pop text-[16px] text-[#999999]'>

                <li>
                  <Link
                    to="#"
                    className='flex items-center gap-x-1 hover:text-white duration-300'
                  >
                    Home
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className='flex items-center gap-x-1 hover:text-white duration-300'
                  >
                    Shop
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className='flex items-center gap-x-1 hover:text-white duration-300'
                  >
                    Pages
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className='flex items-center gap-x-1 hover:text-white duration-300'
                  >
                    Blog
                    <FaAngleDown />
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className='hover:text-white duration-300'
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className='hover:text-white duration-300'
                  >
                    Contact Us
                  </Link>
                </li>
                
              </ul>

              <div>
                <Link
                  to="tel:01305359520"
                  className='flex items-center gap-2 font-pop text-[14px] font-medium text-white'
                >
                  <FiPhoneCall className='text-[20px]' />
                  01305-359520
                </Link>
              </div>

            </div>

          </div>

        </Container>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-75 bg-[#F5F5F5] z-999 transition-all duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex items-center justify-between px-6 py-6 border-b border-[#D9D9D9]'>

          <h2 className='font-pop font-semibold text-[14px] text-black'>
            Categories
          </h2>

          <button onClick={() => setOpenMenu(false)}>
            <FaTimes className='text-[14px] text-[#666666]' />
          </button>

        </div>

        <div className='py-6'>

          {category.map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-x-5 px-10 py-6 hover:bg-hgreen group duration-300 cursor-pointer'
            >

              <span className='text-[14px] text-[#8C8C8C] group-hover:text-white duration-300'>
                {item.icon}
              </span>

              <h2 className='font-pop font-medium text-[18px] text-[#999999] group-hover:text-white duration-300'>
                {item.title}
              </h2>

            </div>
          ))}

        </div>

      </div>

      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className='fixed inset-0 bg-black/40 z-998'
        />
      )}
    </>
  )
}

export default Navbar