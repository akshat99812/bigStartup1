import React from 'react'
import { Icons } from '../assets/Icons/Icons'

const StratupSessionPrices = () => {

    const sessionData = [
        {
            id:1,
            time:"30",
            price:"500",
        },
        {
            id:2,
            time:"45",
            price:"1000",
        },
    ]
  return (
    <div  className='mx-4 my-4 '>
        <div className='my-4 mx-4'>
            Session Prices
        </div>
        <div className='border-2 rounded-lg'>
            <div className='flex justify-between mx-4  text-gray-500 bg-gray-100 px-4 py-2 mx-0 '>
                <div className='my-auto'>
                    Session Time
                </div>
                <div className='my-auto'>
                    Session Price
                </div>
                <div>
                    <button className='bg-red-500 text-white py-2 px-2  hover:bg-red-600 rounded-full  text-sm my-auto'>
                        <div className='flex gap-2'>
                            <div className='my-auto'>
                                Add
                            </div>
                            <div className='my-auto'>
                                <Icons.Add/>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
            {sessionData.map((data)=>{
                return(
                    <div>
                        <div className='grid grid-cols-3  mx-4  text-gray-500 px-4 py-2 mx-0 '>

                            <div className='my-auto '>
                                {data.time} Minutes Session
                            </div>
                            <div className='my-auto mx-auto'>
                                Rs. {data.price}
                            </div>
                            
                            <div className='flex gap-4 my-auto mx-auto'>
                            <button 
                                className='px-2 py-2 border rounded-full drop-shadow-lg'
                                onClick={() => handleEdit(edu)}
                            >
                                <Icons.Pen/>
                            </button>
                            <button className='px-2 py-2 border rounded-full drop-shadow-lg' onClick={() => handleDelete(edu.id)}>
                                <Icons.Trash/>
                            </button>
                            </div>
                         </div> 

                    </div> 
                )
            })}
            
        </div>
      
    </div>
  )
}

export default StratupSessionPrices
