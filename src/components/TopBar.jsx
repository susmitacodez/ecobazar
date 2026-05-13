import React, { useState, useRef, useEffect } from 'react'
import Container from './Container'
import { PiMapPinThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';

const TopBar = () => {

  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState("Eng")

  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [currency, setCurrency] = useState("USD")

  const dropdownRef = useRef(null)
  const currencyRef = useRef(null)

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false)
      }

      if (
        currencyRef.current &&
        !currencyRef.current.contains(e.target)
      ) {
        setCurrencyOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [])

 
  const handleSelect = (value) => {
    setLang(value)
    setOpen(false)
  }

  
  const handleCurrency = (value) => {
    setCurrency(value)
    setCurrencyOpen(false)
  }

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
              className='relative cursor-pointer select-none'
              onClick={() => setOpen(!open)}
            >

              <div className='flex items-center'>

                {lang}

                <FaAngleDown
                  className={`ml-1 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />

              </div>

           
              {open && (
                <div className='absolute top-8 left-0 bg-white shadow-md text-center  rounded z-50 min-w-11.25'>

                  <ul className='space-y-1'>

                    <li
                      onClick={() => handleSelect("Bn")}
                      className='hover:bg-gray-200 cursor-pointer  py-1 rounded'
                    >
                      Bng
                    </li>

                    <li
                      onClick={() => handleSelect("Eng")}
                      className='hover:bg-gray-200 cursor-pointer py-1 rounded'
                    >
                      Eng
                    </li>

                  </ul>

                </div>
              )}

            </div>

            <div
              ref={currencyRef}
              className='relative cursor-pointer select-none'
              onClick={() => setCurrencyOpen(!currencyOpen)}
            >

              <div className='flex items-center'>

                {currency}

                <FaAngleDown
                  className={`ml-1 transition-transform duration-300 ${
                    currencyOpen ? "rotate-180" : ""
                  }`}
                />

              </div>
              {currencyOpen && (
                <div className='absolute top-8 left-0 bg-white shadow-md text-center rounded z-50 min-w-11.25'>

                  <ul className='space-y-1'>

                    <li
                      onClick={() => handleCurrency("USD")}
                      className='hover:bg-gray-200 cursor-pointer py-1 rounded'
                    >
                      USD
                    </li>

                    <li
                      onClick={() => handleCurrency("BDT")}
                      className='hover:bg-gray-200 cursor-pointer py-1 rounded'
                    >
                      BDT
                    </li>

                    <li
                      onClick={() => handleCurrency("EUR")}
                      className='hover:bg-gray-200 cursor-pointer py-1 rounded'>
                      EUR
                    </li>

                  </ul>

                </div>
              )}

            </div>

            <Link to="/signin" className='flex items-center relative after:w-0.5 after:h-3.75 after:bg-gry after:content-[""] after:top-0.5 after:left-[-10px] after:absolute'>
              Sign in / Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar