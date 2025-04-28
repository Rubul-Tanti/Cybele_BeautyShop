import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsSnapchat, BsYoutube } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
export const Socialmedia = () => {
  return (
    <div className=' bg-gradient-to-tl w-full from-black h-full bg-pink-950 to-pink-950 flex gap-5 p-5 flex-col'>
      <h1 className='text-5xl text-shadow-2xs text-shadow-pink-500 text-pink-400  '>Contact us.</h1>
      <div className='flex flex-row flex-wrap justify-start space-x-10'>
      <div>
        <div className='flex flex-col  h-24 items-center flex-wrap wrap-anywhere w-full lg:w-24'>
          <FaInstagram size={50} className='text-9xl text-pink-700'/>
          <p className='text-pink-700 text-sm'>Instagram.</p>
          </div>
      </div>
      <div>
        <div className='flex flex-col h-24 items-center  lg:w-24'>
          <FaTiktok size={50} className='text-9xl text-white text-shadow-2xs text-shadow-pink-800'/>
          <p className='text-white text-sm'>Tik Tok.</p>
          </div>
      </div>
      <div>
        <div className='flex flex-col h-24 items-center w-full lg:w-24'>
          <FaWhatsapp size={50} className='text-9xl text-green-400'/>
          <p className='text-green-400 text-sm'>Whatsapp.</p>
          </div>
      </div>
      <div>
        <div className='flex flex-col h-24 items-center w-full lg:w-24'>
          <BsSnapchat size={50} className='text-9xl text-yellow-400'/>
          <p className='text-yellow-400 text-sm'>Snapchat.</p>
          </div>
      </div>
      <div>
        <div className='flex flex-col h-24 items-center w-full lg:w-24'>
          <SlSocialYoutube size={50} className='text-9xl text-red-700'/>
          <p className='text-red-700 text-sm'>Youtube.</p>
          </div>
      </div>
      </div>
    </div>
  )
}
