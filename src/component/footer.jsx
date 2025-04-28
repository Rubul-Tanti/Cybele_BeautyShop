import React from 'react'
import footerlogo from'../assets/footerlogo.png'
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
export const Footer = () => {
  return (
    <div  className='bg-gradient-to-b gap-2 grid grid-rows-2 lg:grid-cols-2 p-2 items-start justify-start lg:justify-center lg:items-center from-black to-pink-950 
    h-full
    lg:h-screen'>
      <div className=''>
        <img className='w-50' src={footerlogo}/>
        <p className='text-gray-400'>Cybele Beauty Shop is one of Nigerians Leading cosmetics brand, we not only stock our extremely amazing products, we deal on both local and international cosmetics brands to satisfy all our customers needs</p>
        <p className='text-gray-400 h-16 items-center flex gap-3'>
       <CiHome size={50}/> Shop B32, Upstairs Rivers Trade Fair Complex, Lagos State, Nigeria</p>
      </div>
      <div className='grid grid-5 gap-2 justify-start lg:justify-end  text-gray-400'>
        <div></div>
        <div className='flex gap-3'><IoCallOutline size={25}/>08112761777</div>
        <div>
08023848790
</div>
        <div className='flex gap-3'><CiMail size={25}/>
        info@cybelebeautyshop.com</div>
        <div className='flex gap-3'><CiMail size={25}/>
        https://cybelebeautyshop.com</div>
      </div>
      
    </div>
  )
}
