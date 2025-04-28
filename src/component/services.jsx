import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdSettingsBackupRestore } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
export const Services = () => {
  return (
    <section className='w-full h-screen   flex gap-10 flex-col lg:flex-row  justify-center items-center bg-gradient-to-b from-pink-950 to-black ' >
   <div className='lg:w-1/2 w-full  text-shadow-2xs font-bold text-white text-shadow-pink-700 text-center text-5xl lg:text-7xl'><span className='text-pink-600'>We</span> Provide.</div>
   <div className='grid grid-cols-2 px-1 gap-5'>
    <div className='w-[200px] h-[200px] rounded-l-2xl shadow-lg shadow-pink-950 text-pink-700 text-center text-2xl flex justify-center flex-col items-center bg-black  '><div><CiDeliveryTruck size={100} /></div>
    <p>FAST DELEVERY</p>
    <p className='text-sm text-pink-950 '>We deliver everywhere in Nigeria</p></div>
    <div className='w-[200px] h-[200px] rounded-r-2xl text-pink-700 text-center text-2xl bg-black shadow-lg shadow-pink-950 flex justify-center flex-col items-center'><div><MdSettingsBackupRestore size={100} /></div>
    <p>IN-STORE-PICKUPS</p>
    <p className='text-sm text-pink-950 '>We offer pickups in Lagos</p>
    </div>
    <div className='w-[200px] h-[200px] rounded-l-2xl text-pink-700 text-center text-2xl bg-black shadow-lg shadow-pink-950 flex justify-center flex-col items-center' ><div><GrSecure size={100} /></div>
    <p>SECURE PAYMENT</p>
    <p className='text-sm text-pink-950 '>100% secure payment</p>
    </div>
    <div className='w-[200px] h-[200px] rounded-r-2xl text-pink-700 text-center text-2xl bg-black shadow-lg shadow-pink-950 flex justify-center flex-col items-center'>
      <div> <IoChatbubblesOutline size={100} /></div>
      <p>DEDICATED SUPPORT</p>
      <p className='text-sm text-pink-950 '>Available 8am-5pm</p>
    </div>
    
   </div>
    </section>
  )
}
