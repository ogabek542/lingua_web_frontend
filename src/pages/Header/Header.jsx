import React from 'react'
import LinguaPhoto from "../../assets/linguaPhoto.png";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='container border-1 border-red-600 flex items-center justify-between rounded-2xl px-2 py-1  bg-white/20 backdrop-blur  sticky'>
        {/* LEFT SIDE DIV */}
      <div className='flex items-center  gap-[100px]'>
      {/* logo vs title */}
      <div className='flex items-center justify-between '>
        <img className='w-[35px] h-[35px] object-cover' src={LinguaPhoto} alt="logo_image" />
        <a href="#"> <p className='font-bold uppercase text-[#083473]'>World Translate Service</p></a>
      </div>
      {/* screens types  */}
      <div className='flex items-center justify-between gap-2'>
        <div className='cursor-pointer  flex items-center justify-between gap-1 bg-transparent  hover:bg-gray-100 rounded-3xl py-2 px-3  text-gray-700 hover:text-black'>
            <button className='text-[13px] cursor-pointer   transition-colors duration-200 capitalize'> Services</button>
            <FaAngleDown className='size-[12px] cursor-pointer '/>
        </div>
        <div className='flex items-center justify-center '>
            <button className='cursor-pointer p-1 px-3 rounded-3xl bg-transparent text-gray-700 hover:bg-gray-100 transition-colors duration-200 hover:text-black capitalize'>Solutions</button>
        </div>
        <div className='flex items-center justify-center '>
            <button className='cursor-pointer p-1 px-3 rounded-3xl bg-transparent text-gray-700 hover:bg-gray-100 transition-colors duration-200 hover:text-black capitalize'>Resources</button>
        </div>
        <div className='flex items-center justify-center '>
            <button className='cursor-pointer p-1 px-3 rounded-3xl bg-transparent text-gray-700 hover:bg-gray-100 transition-colors duration-200 hover:text-black capitalize'>Company</button>
        </div>
      </div>

      </div>
      {/* order button */}
      <div className='flex items-center justify-between'>
        <div className='p-[8px] px-4 w-[50px]'></div>
        <div className='p-[8px] px-4 w-[50px]'></div>
      <div className='flex items-center justify-between g-1 '>
        <button className='cursor-pointer p-[9px] px-4 rounded-3xl bg-[#083473] font-[500] text-white hover:bg-[#083450] transition-colors duration-200  capitalize'>Order Now</button>
      </div>
      </div>
    </div>
  )
}

export default Header
