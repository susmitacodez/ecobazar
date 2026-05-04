import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import Container from './Container'
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {

  const [selectedHome, setSelectedHome] = useState("Home");

  const navItems = [
    { name: "Home" },
    { name: "Shop" },
    { name: "Pages" },
    { name: "Blog" },
    { name: "About Us" },
    { name: "Contact Us" },
  ];

  const dropdownMenu = [
    "Eco",
    "bazar",
    "green",
    "Chilli",
    "red chili",
  ];

  return (
    <>
      <section className='bg-[#333333]'>
        <Container>
          <div className='flex justify-between py-5.5'>
            
            <div>
              <ul className='flex gap-13 text-[#999999] font-pop font-medium text-[14px]'>

                {navItems.map((item, index) => (
                  <li 
                    key={index} 
                    className='relative group cursor-pointer'
                  >
                    
                    <div className='flex items-center gap-2 hover:text-white'>
                      
                      {item.name === "Home" ? selectedHome : item.name}
                      <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
                    </div>

                    {item.name === "Home" && (
                      <ul className='absolute top-full left-0 mt-2 w-37.5 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        
                        {dropdownMenu.map((menu, i) => (
                          <li 
                            key={i}
                            onClick={() => setSelectedHome(menu)}
                            className='px-4 py-2 hover:bg-gray-100'
                          >
                            {menu}
                          </li>
                        ))}

                      </ul>
                    )}

                  </li>
                ))}

              </ul>
            </div>

            <div className='flex items-center gap-2 text-[#FFFFFF]'>
              <FiPhoneCall className='w-5'/>
              <p className='font-pop font-medium text-[14px]'>(880) 13053-59520</p>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}

export default Navbar