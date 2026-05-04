import React from 'react'
import Container from './Container'
import logo from '../assets/images/logo.png'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";

const Searchbar = () => {
  return (
    <Container>
      <div className='flex justify-between items-center py-[27.5px]'>

        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="w-full max-w-[40%] mx-auto">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            
            <div className="flex items-center grow px-3 gap-2">
              <FiSearch className="text-[#1A1A1A0]" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-[#808080] font-pop font-normal text-[15px] leading-5.25"
              />
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-[#FFFFFF] font-pop px-6 py-3.5 font-medium">
              Search
            </button>
          </div>
        </div>

          <div className="flex items-center gap-6 text-gray-700">
      <div className="text-[34px] cursor-pointer text-[#1A1A1A]">
        <GoHeart />
      </div>

      <div className="w-px h-8 bg-gray-300"></div>

      <div className="flex items-center gap-3 cursor-pointer">

        <div className="relative">
          <SlHandbag className="text-[34px] text-[#1A1A1A]" />

      
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        <div>
          <p className="text-[#4D4D4D] font-pop font-normal text-[11px]">Shopping cart:</p>
          <p className="font-semibold text-[#1A1A1A] font-pop">$57.00</p>
        </div>

      </div>
    </div>

      </div>
    </Container>
  )
}

export default Searchbar