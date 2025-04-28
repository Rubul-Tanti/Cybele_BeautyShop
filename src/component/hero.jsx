import React from 'react'

export const Hero = () => {
  return (
    <section className='w-full h-full min-h-screen lg:flex-row flex flex-col bg-gradient-to-b  from-black to-pink-950 '>
      <div className='lg:w-1/2 w-full h-full p-2  '>
      <div className='flex flex-col justify-start  gap-10 mt-10 h-full'>
        <h1 className=' lg:text-6xl text-3xl text-white '>Fresh Glam <span className='text-pink-600'>Alert:</span> Discover Our Newest <span className='text-pink-600'>Beauty</span> Essentials<span className='text-pink-600'>!</span></h1>
      <p className='text-sm text-gray-500 '>Step into a world of beauty with our latest arrivals! From skincare to makeup must-haves, explore the newest products designed to make you shine brighter than ever.</p>
      <div className='flex gap-2  mt-2 '>
      <button className='bg-black font-semibold border duration-300 ease-in cursor-pointer text-pink-700 hover:bg-pink-800 hover:text-black px-5  py-1 shadow-sm shadow-pink-600 rounded-full'>Get started</button>
        <button className='bg-white transition duration-300 ease-in hover:text-pink-600 hover:bg-black cursor-pointer  text-black px-5 py-2 font-bold rounded-full'>Learn more</button>
      </div>
      </div>
      </div>

<div className='lg:w-1/2 w-full lg:p-2 p-5 overflow-hidden flex '>
<div className='flex flex-col w-1/2'> 
<div className='h-1/2 w-full'>
<div className='  p-2 h-full flex justify-end items-end w-full'>
<div className='w-[150px] h-[150px] rounded-xl relative overflow-hidden bg-black '>
  <img src='https://cybelebeautyshop.com/wp-content/uploads/2024/07/PHOTO-2024-02-21-10-06-59.jpg' className='w-full h-full ' ></img>

</div>
</div>

</div>
<div className='h-1/2 w-full flex p-2 justify-end'>

<div className='w-[200px] overflow-hidden h-[200px] relative rounded-xl bg-black '>
  <img src='https://cybelebeautyshop.com/wp-content/uploads/2022/06/A21A7AC6-3259-4670-AB0F-617B35442EBD-300x300.jpeg' className='w-full h-full  '></img>
 
</div>

</div>
</div>
<div className='w-1/2 h-full justify-between flex items-center  '>
  <div  className='rounded-2xl h-[400px] mb-10 w-[250px] flex flex-col overflow-hidden bg-black '>
<img src='https://cybelebeautyshop.com/wp-content/uploads/2023/11/IMG_1267.jpg' className='w-full'></img>
<div className='h-full font-semibold w-full text-center text-9xl bg-pink-700'>
  <div className='leading-24'>RINGLIGHT</div>
  <div className='text-7xl font-semibold'>light</div>
</div>

  </div>
</div>

</div>
    </section>
  )
}
