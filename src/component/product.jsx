import React from 'react'
import led from '../assets/led.png'
import ringlight from '../assets/ringlight.png'
export const Product = () => {
  return (
    <section className='flex flex-col min-h-screen bg-pink-950   px-2 gap-5 lg:gap-10 w-full '>
<div className='flex h-full items-center  '> 
  <h2 className='text-white text-4xl font-bold'>Your One-Stop Destination for All Things Beauty.</h2>
</div>
<div className='flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center w-full'>
<div className='  '>
  <div className='11 flex gap-2 lg:gap-5 bg-amber-30 flex-col lg:flex-row w-full items-start h-full lg:h-[350px] '>
      <div className='flex lg:gap-5 gap-2 flex-row lg:flex-col'>
    <div className='111 w-[200px] h-[200px] flex-col flex items-center overflow-hidden rounded-2xl  bg-white text-black-700'>
    <img className='h-[calc(200px-64px)]' src='https://cybelebeautyshop.com/wp-content/uploads/2024/07/PHOTO-2024-06-28-12-38-56-300x300.jpg'></img>
    <h3 className='text-6xl font-bold flex justify-center h-16 items-center  '>Microph</h3>
    </div>
    <div className='111 w-[200px] h-[200px]  flex-col flex items-center overflow-hidden rounded-2xl  bg-white text-black-700 '>
    <img className='h-[calc(200px-64px)]' src='data:image/jpeg;base64,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'></img>
    <h3 className='text-6xl font-bold flex justify-center h-16 items-center  '>Camera</h3>
    </div>
 
      </div>
  <div className='flex h-full lg:h-[400px]  w-full  items-center'>
      <div className='111 w-full lg:w-[200px] h-[250px]  flex-col flex items-center overflow-hidden rounded-2xl  bg-white text-black-700 '>
      <img className='w-[calc(250px-64px)]' src='https://cybelebeautyshop.com/wp-content/uploads/2023/07/Tripod-stand.jpg'></img>
      <h3 className='text-6xl font-bold flex justify-center h-16 items-center  '>Tripod</h3>
      </div>
    </div>
    <div className='flex flex-row lg:flex-col gap-2 lg:gap-5'>
    <div className='111 w-[200px] h:[250px] lg:h-[200px]  flex-col flex items-center overflow-hidden rounded-2xl  bg-white text-black-700 '>
    <img className='w-[calc(250px-64px)]' src={led}></img>
    <h3 className='text-6xl font-bold flex justify-center h-16 items-center  '>Ledlight</h3>
    </div>
    <div className='111 w-[200px] h-[250px]  flex-col flex items-center overflow-hidden rounded-2xl  bg-white text-black-700 '> <img className='w-[calc(250px-64px)]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1AGtFxZE5xHPqMvQZnbhaI0_SAdoD3EIAw&s'></img>
    <h3 className='text-6xl font-bold flex justify-center h-16 items-center  '>Selfiesti</h3></div>

    </div>
  </div>
</div>
<div className=' h-[400px] w-full lg:w-[300px]  lg:mt-10 bg-white text-black-700 flex flex-col items-center  overflow-hidden rounded-2xl '>
<img className='h-[calc(400px-64px)]' src={ringlight}></img>
<h3 className='text-6xl font-bold flex justify-center h-16 items-center  '>Ringlight</h3>
</div>
      </div>
    </section>
  )
}
