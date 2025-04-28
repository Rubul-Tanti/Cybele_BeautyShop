import React from 'react'
import shoplogo from"../assets/footerlogo.png"
export const Nav = () => {
  return(
    <nav className='w-full flex flex-row sticky top-0 z-10 h-20 bg-black justify-between'>
      <div className=' lg:[90px] lg:pt-5 w-24  flex  justify-center items-center h-full'>
        <img className='lg:w-full w-20'  src={shoplogo}/>
     </div>
      <div className='  flex text-gray-600  text-sm lg:gap-5 gap-2  transition duration-75 justify-between font-[roboto] h-full items-center'> 
        <a href='#home' className='hover:text-pink-300 '>Home</a>
        <a href='#popularproducts' className='  hover:text-pink-300'>Popular</a>
        <a href='#services' className='hover:text-pink-300'>Services</a>
        <a href='#contact' className='hover:text-pink-300 '>Contack</a>
      </div>
   <div className='p-2 h-full flex justify-center items-center'>
    <button className='bg-black font-bold border cursor-pointer text-pink-700 hover:bg-pink-800 hover:text-black px-5 duration-300 ease-in py-1 shadow-sm shadow-pink-600 rounded-md'>Visit</button>
   </div>
      </nav>

  )
}
