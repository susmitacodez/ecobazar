import React, { useState } from 'react'
import signin from '../assets/images/signin.png'
import { GoHome } from "react-icons/go";
import Container from '../components/Container'
import { MdOutlineChevronRight } from "react-icons/md";
import { IoEyeOutline,
  IoEyeOffOutline
} 
 
from "react-icons/io5";
import { Link } from 'react-router';
import axios from 'axios';

import { toast } from 'react-toastify';

const Registration = () => {

  const [regData, setRegData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  })

  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setRegData({
      ...regData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleClick = async (e) => {
  e.preventDefault()

  setErrorMsg("")
  setSuccessMsg("")

  try {
    const res = await axios.post(
      "http://localhost:5000/registration",
      regData
    )

    const { success, message } = res.data

    if (!success) {
      setErrorMsg(message)
      setSuccessMsg("")
      toast.error(message)
    } else {
      setSuccessMsg(message)
      setErrorMsg("")
      toast.success(message)

      setRegData({
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
      })
    }
  } catch (error) {
    setErrorMsg("Server error")
    toast.error("Server error")
  }
}

  return (
    <div>
      <div className="relative w-full">
        <img
          src={signin}
          alt="signin"
          className="w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
        <Container>
          <div className="flex items-center absolute top-1/2 -translate-y-1/2 gap-x-3 z-10">
            <GoHome className='text-[24px] text-[#808080]' />
            <MdOutlineChevronRight className='text-base text-[#808080]' />
            <h3 className='font-pop text-base text-[#999999]'>
              Account
            </h3>
            <MdOutlineChevronRight className='text-[12px] text-[#808080]' />
            <h4 className='font-pop text-[12px] text-hgreen'>
              Create Account
            </h4>
          </div>
        </Container>
      </div>
      <div className="py-15">

        <Container>

          <div className="max-w-130 mx-auto rounded-[10px]  border border-[#F2F2F2] shadow-[0px_0px_56px_rgba(0,38,3,0.08)] px-10 py-12">

            <h2 className='font-pop font-semibold text-hsize text-center text-[#1A1A1A] mb-6'>
              Create Account
            </h2>

            <form className='flex flex-col gap-y-3'>
              {errorMsg && (
                <p className='bg-red-500 text-white text-center py-2 rounded'>
                  {errorMsg}
                </p>
              )}

              {successMsg && (
                <p className='bg-green-500 text-white text-center py-2 rounded'>
                  {successMsg}
                </p>
              )}
              <input
                name="email"
                value={regData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full border border-gry text-[#999999] rounded-md px-3 py-3.5 outline-none" />
              <div className="relative">
                <input
                  name="password"
                  value={regData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border text-[#999999] border-gry rounded-md px-4 py-3.5 outline-none pr-10"/>

                {showPassword ? (
                  <IoEyeOutline
                    onClick={() => setShowPassword(false)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[20px] cursor-pointer text-[#1A1A1A]" />
                ) : (
                  <IoEyeOffOutline
                    onClick={() => setShowPassword(true)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[20px] cursor-pointer text-[#1A1A1A]"/>
                )}
              </div>
              <div className="relative">
                <input
                  name="confirmPassword"
                  value={regData.confirmPassword}
                  onChange={handleChange}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full border text-[#999999] border-gry rounded-md px-4 py-3.5 outline-none pr-10"/>

                {showConfirmPassword ? (
                  <IoEyeOutline
                    onClick={() => setShowConfirmPassword(false)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[20px] cursor-pointer text-[#1A1A1A]"/>
                ) : (
                  <IoEyeOffOutline
                    onClick={() => setShowConfirmPassword(true)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[20px] cursor-pointer text-[#1A1A1A]"/>
                )}
              </div>
              <label className="flex items-center gap-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={regData.terms}
                  onChange={handleChange} />
                <span className='font-pop text-sm text-[#666666]'>
                  Accept all terms & Conditions
                </span>
              </label>
              <button
                type="button"
                onClick={handleClick}
                className='bg-hgreen hover:bg-green-700 duration-300 text-white font-pop font-semibold py-3 rounded-full mt-2' >
                Create Account
              </button>
              <p className='text-center font-pop text-[12px] text-[#666666] mt-3'>
                Already have account?{" "}
                <Link
                  to="/signin"
                  className='text-[#1A1A1A] underline font-semibold hover:text-hgreen duration-300'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}
export default Registration