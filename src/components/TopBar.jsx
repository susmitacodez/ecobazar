import React from 'react'
import Container from './Container'
import { PiMapPinThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className='border-b border-b-gry text-[rgba(102,102,102,1)] font-pop py-3.25 text-[15px] leading-[130%] cursor-pointer'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center font-[15px] gap-2'> <PiMapPinThin /> Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center'>Eng <FaAngleDown /></div>
                        <div className='flex items-center'>Usd <FaAngleDown /></div>
                        <div className='flex items-center relative after:w-[2px] after:h-[15px] after:bg-gry after:content-[""] after:top-[2px] after:left-[-15px] after:absolute'>
                            Sign in / Sign Up
                        </div>

                    </div>
                </div>
            </Container>
        </div>

    )
}

export default TopBar