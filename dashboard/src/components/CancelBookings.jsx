import React from 'react'
import { Icons } from '../assets/Icons/Icons'
import img6  from '../assets/img/img6.jpeg'

const CancelBookings = () => {
  return (
    <div className=''>
      
      <div className='bg-gray-100 border-2 rounded-lg'>
        <div className='  p-2 flex justify-between'>
            <div className='flex gap-2'>
                <div className='my-auto text-xl font-bold'>
                Consultation Booking Details
                </div>
                <div>
                    <Icons.Tick/>  
                </div>

            </div>
            <div>
                <div className='flex gap-x-2'>
                    <div className=''>
                        <button className='border border-red-500 text-red-500 rounded-full py-2 px-4 bg-white'>Confirm Booking</button>
                    </div>
                    <div>
                        <button className='border border-red-500 text-white rounded-full py-2 px-4 bg-red-500'>Starts in 2 days</button>
                    </div>
                    <div>
                        <button className='border border-red-500 text-red-500 rounded-full py-2 px-4 bg-white'>Cancel Booking</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='mx-2 text-gray-500'>
            Your consultation session is scheduled. Below are the details of your booking
        </div>
        <div className='mx-2 text-gray-500'>
         We have sent you an E-mail with the details.
        </div>
        <div>
            <div className='my-3 text-xl font-bold mx-2'>
                Booking Details
            </div>
            <div className='mx-2 grid grid-cols-2 gap-4'>
                <div className=''>
                    <div className='text-gray-500'>
                    Your booking ID
                    </div>
                    <div>
                    165JK587

                    </div>
                    <div className='text-gray-500'>
                    Consultation Fee
                    </div>
                    <div>
                    ₹1000

                    </div>

                </div>
                <div className='mt-2'>
                    <div className='text-gray-500'>
                    Your booking status
                    </div>
                    <div>
                    Booking Confirmed

                    </div>
                    <div className='text-gray-500'>
                    Consultant Name
                    </div>
                    <div>
                    Riddhima Sen

                    </div>

                </div>
            </div>
            <div className='bg-white border px-2'>
                    <div className='flex justify-left my-4'>
                        <div>
                            <img src={img6} className='w-12 h-12 mx-2 rounded-full'></img>
                        </div>
                        <div>
                            <div>
                                Rekha Sahu
                            </div>
                            <div>
                                5 stars
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='text-gray-500 w-3/4 mx-2 my-3'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor turpis sed diam mattis sodales nec ac ante. Sed accumsan eleifend tortor, non tempus libero varius ullamcorper. Vivamus commodo nisl et libero tempus convallis. Sed vitae mi imperdiet, viverra ante at, scelerisque est.
                        </div>

                    </div>
                    <div className='grid grid-cols-2 ml-2 mr-44 gap-10'>
                        <div className='flex gap-2'>
                            <div>
                                <Icons.Cal/>
                            </div>
                            <div className='my-auto'>
                                On 24 June,2024
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                            <Icons.Cal2/>
                            </div>
                            <div className='my-auto'>
                              For Startup Consultation
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <Icons.Cal3/>
                            </div>
                            <div className='my-auto'>
                                Wed at 7:00-8:00 AM
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <Icons.Cal4/>
                            </div>
                            <div className='my-auto'>
                                Session Time : 1 Hour
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default CancelBookings
