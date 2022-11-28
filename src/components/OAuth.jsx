import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function OAuth() {
  return (
   <>
   <button className="flex items-center justify-center w-full bg-red-700
    text-white px-7 py-3 uppercase hover:bg-red-800 active:bg-red-900
    hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-lg">
   <FcGoogle className='bg-white rounded-full mr-2 w-7 h-7' />
    Continue with Google</button></>
  )
}
