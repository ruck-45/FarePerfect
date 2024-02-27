import React from 'react'
import { Link } from 'react-router-dom'


type cardsProps = {
  photo: string,
  des:string,
  
  
}

const AllProduct = (props:cardsProps) => {
  return (
    <div className='flex flex-col items-center justify-between  h-[25rem] w-[25rem] bg-gray-100 hover:bg-yellow-400  p-5'>
    <div className='w-auto h-auto  p-[2rem]  hover:scale-110 transition duration-900 ease-in-out'>
        <img className='w-[25rem] h[25rem]' src={props.photo} />
    </div>
    <div className='text-center text-2xl font-bold font-serif py-[1rem]  hover:text-blue-700'>
        <h2>
          <Link to='/'>{props.des}</Link>
        </h2>
    </div>
    
    </div>
  )
}

export default AllProduct