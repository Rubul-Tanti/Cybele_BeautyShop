import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from 'react';
export const Faq = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  return (
 <div className='flex  bg-gradient-to-br p-10 gap-5 flex-col transition-all duration-300 ease-out bg-black text-white'>
  <h1 className='text-3xl font-bold'>FREQUENTLY ASKED QUESTIONS</h1>
  <div className='flex flex-col gap-5 w-full    justify-center '>
  <button onClick={() => setShow1(!show1)} className=' outline-0 overflow-hidden cursor-pointer mt-2 flex justify-start gap-10  flex-row w-full'>{
  <FaPlus className={`transition-all duration-300  ease-linear ${!show1 ? "rotate-0" : "rotate-45"}`} size={25}/>}
    <div className='gird h-max  grid-rows-2 '>
    <h5 className='text-start'>HOW LONG DOES DELIVERY TAKE AFTER PAYMENT ?</h5> 
    <p className={`text-start transition-all duration-500 text-gray-400 ease-out ${show1 ? "translate-y-2  h-24 lg:h-16 opacity-100" : " -translate-y-0 h-0 opacity-0  "}`}>DELIVERY IN LAGOS 24/48 HOURS AFTER PAYMENT IS CONFIRMED
OUTSIDE LAGOOS
2−3 WORKING DAYS</p>
    </div>
  </button>
 </div>
  <div className='flex flex-col gap-5 w-full  h-max justify-center '>
  <button onClick={() => setShow2(!show2)} className='overflow-hidden outline-0 cursor-pointer mt-2 flex justify-start gap-10  flex-row w-full'>{
  <FaPlus className={`transition-all duration-300  ease-linear ${!show2 ? "rotate-0" : "rotate-45"}`} size={25}/>}
    <div className='gird grid-rows-2 '>
    <h5 className='text-start'>
    Do YOU HAVE A WALK IN STORE ?</h5> 
    <p className={`text-start transition-all duration-500 text-gray-400 ease-in ${show2 ? "translate-y-2 lg:h-16 h-24 opacity-100" : " h-0 translate-y-0 opacity-0"}`}>Yes we do
Please visit our store at
SHOP B32 RIVERS 2 plaza trade fair complex Lagos
</p>
    </div>
  </button>
 </div>
  <div className='flex flex-col gap-5 w-full justify-center '>
  <button onClick={() => setShow3(!show3)} className=' outline-0 overflow-hidden cursor-pointer mt-2 flex justify-start gap-10  flex-row w-full'>{
  <FaPlus className={`transition-all duration-300  ease-linear ${!show3 ? "rotate-0" : "rotate-45"}`} size={25}/>}
    <div className='gird grid-rows-2 '>
    <h5 className='text-start'>WHERE IS YOUR ABUJA PICK UP LOCATION AND HOW LONG DOES DELIVERY TAKE WITHIN ABUJA ?</h5> 
    <p className={`text-start transition-all duration-500 text-gray-400 ease-out ${show3 ? "translate-y-2 h-24 opacity-100" : "h-0 translate-y-0 opacity-0"}`}>C4 ELECTRONICS WUSE MARKET (THE 3rd PLAZA AFTER ZENITH BANK
      DELIVERY TAKES 24/48 hours within Abuja if item isn’t sold out there)</p>
    </div>
  </button>
 </div>

 
 </div> )
}
