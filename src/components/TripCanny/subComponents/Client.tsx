import React from 'react'

import pic from '../assets/lllll.png'

const Client = () => {
  return (
    <div className=' bg-gray-100 text-black flex flex-col px-[5rem] items-center justify-center md:justify-start md:items-start h-auto md:h-[20rem] w-[73rem]'>
        <div className='text-4xl font-serif text-black text-start p-4'>
            <h1>What Clients Say?</h1>
        </div>

        <div className='flex flex-col md:flex-row  item center justify-between p-4'>
            <div className='border-black rounded-full w-[8rem] h-[8rem]'>
               <img src={pic} alt=''/>
            </div>
            <div className='flex flex-col  justify-between items-center p-8'>
               <div className='text-2xl font-serif '>
                  <h2>Jhon Due</h2>
               </div>
               <div  className='text-2xl font-serif '>
                   <h2>12/02/19</h2>
               </div>
            </div>
            
        </div>

        <div className='text-thin  font-sans  px-[21rem] md:p-[1rem] '>
                <h3>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.</h3>
            </div>
    </div>
  )
}

export default Client