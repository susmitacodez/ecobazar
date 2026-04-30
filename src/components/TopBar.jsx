import React, { useState, useRef, useEffect } from 'react'
import Container from './Container'
import { PiMapPinThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

const TopBar = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  // 👉 outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className='border-b border-b-gry text-[rgba(102,102,102,1)] font-pop py-3.25 text-[15px] leading-[130%]'>
      <Container>
        <div className='flex justify-between items-center'>

          <div className='flex items-center gap-2'>
            <PiMapPinThin />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>

          <div className='flex items-center gap-5'>

            <div 
              ref={dropdownRef}
              className='flex items-center relative cursor-pointer'
              onClick={() => setOpen(!open)}
            >
              Eng <FaAngleDown className='ml-1' />

              {open && (
                <div className='absolute top-8 left-0 bg-white shadow-md p-2 rounded z-50'>
                  <ul>
                    <li className='hover:text-purple-500 cursor-pointer'>Bn</li>
                    <li className='hover:text-purple-500 cursor-pointer'>CH</li>
                  </ul>
                </div>
              )}
            </div>

            <div className='flex items-center cursor-pointer'>
              USD <FaAngleDown className='ml-1' />
            </div>

             <div className='flex items-center relative after:w-0.5 after:h-3.75 after:bg-gry after:content-[""] after:top-0.5 after:left-3.75 after:absolute'>
                            Sign in / Sign Up
                        </div>

          </div>

        </div>
      </Container>
    </div>
  )
}

export default TopBar
