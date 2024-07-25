import React, { useState } from 'react'
import { Icons } from '../assets/Icons/Icons'

const StartupDis = () => {

    const comments=[
        "As a dedicated UI/UX designer, I specialize in creating seamless and intuitive interfaces that enhance user experiences. With a passion for problem-solving and a keen eye for detail, I strive to design solutions that are both functional and visually appealing."
        
    ]

    const handleEdit = (edu) => {
        setIsEdditing(true);
        

    }

    const handleAdd = (edu) => {
        
    }
    const [comment, setComment] = useState(["As a dedicated UI/UX designer, I specialize in creating seamless and intuitive interfaces that enhance user experiences. With a passion for problem-solving and a keen eye for detail, I strive to design solutions that are both functional and visually appealing."]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEdditing, setIsEdditing] = useState(false);

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
                    <button className='bg-red-500 text-white py-2 px-2  hover:bg-red-600 rounded-full  text-sm my-auto'
                    onClick={() => {setIsAdding(true)}}>
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
            {comments.map((data)=>{
                return(
                    <div>
                        <div className='flex justify-between  mx-4  text-gray-500 px-4 py-2 mx-0 '>
                            
                            <div className='my-auto w-4/5 '>
                                {data}
                            </div>
                            
                            <div className='flex justify-center gap-4 my-auto mx-auto w-1/5'>
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
        {isAdding && 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg md:w-1/2">
        <div>
            <input className='border-2 border-gray-300 px-4 py-2 rounded-md my-4 w-full'></input>
        </div>

         <div>
             <button onClick={() => setIsAdding(false)}
             className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
         </div>
       </div>
     </div>}
     {isEdditing && 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg md:w-1/2">
        <div>
            <input className='border-2 border-gray-300 px-4 py-2 rounded-md my-4 w-full'></input>
        </div>

         <div>
             <button onClick={() => setIsEdditing(false)}
             className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
         </div>
       </div>
     </div>}
      
    </div>
  )
}

export default StartupDis
