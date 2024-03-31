import React from 'react'
import Image from 'next/image'
function StoreProfile() {
  return (
    <>
    <div className='flex justify-center mt-20'>
        <div className='store_profile shadow-lg shadow-slate-500 rounded-lg w-96'>
            <div className='store_logo flex flex-col items-center'>
                <img src="https://epeey.s3.us-east-2.amazonaws.com/eppey.png" className='w-20 h-20'/>
            </div>
            <div className='store_name my-5 text-center'>Epeey</div>
            <div className='mx-2 font-semibold'>Active Payment Method:
                <span className='ml-1'>Online,</span>
                <span className='ml-1'>Cash On</span>

            </div>
          <div className='store-localtion mx-2 font-semibold'>Store Address: Dhaka, Bangladesh</div>
          <div className='store-localtion mx-2 font-semibold'>Customer Support Number: +8805152...</div>
          <div className='store-localtion mx-2 font-semibold'>Support Mail: info@help</div>
        </div>

    </div>
    </>
  )
}

export default StoreProfile