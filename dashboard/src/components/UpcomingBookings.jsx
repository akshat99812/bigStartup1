import React, { useState } from 'react';
import img from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import { useNavigate } from 'react-router-dom';
import CancelBookings from './CancelBookings';

export const UpcomingBookings = () => {

    const data = [
        {   
            id:1,
            rating:5,
            imgUrl:img2,
            bookingId:123456,
            validity:true,
            name:"Rekha Sahu",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"ongoing",
        },
        {   id:2,
            rating:4.5,
            validity:true,
            imgUrl:img3,
            bookingId:1245456,
            name:"Akshat Patel",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"cancelled",
        },
        {
            id:3,
            rating:4.5,
            validity:true,
            imgUrl:img3,
            bookingId:1245456,
            name:"Akshat Patel",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"confirmed",
        },
      
        ]

    const navigate = useNavigate();
    const onClickHandler=(someId)=>{
        navigate(`${someId}?validity=true`);
    }

    const [pop,setPop]=useState(false);
    const [popUpData,setPopUpData]=useState({});

    const popupHandler=(someId)=>{
        setPopUpData(data[someId-1]);
        setPop(true);
    }

    const closePopUp=()=>{
        setPop(false);
    }

  return (
    <div>
        {data.map((data, index) => (
        <div className='border rounded-2xl my-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6">
          <div className='flex gap-10 mx-10'>
              <div>
                  <img src={img} className="w-12 h-12 rounded-full"></img>
              </div>
              <div className='my-auto text-bold text-xl'>
                  {data.name}
              </div>
              <div className="flex gap-2" >
                  <div className='my-auto'>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0009 21.5867L20.1884 24.7242C21.1384 25.2992 22.3009 24.4492 22.0509 23.3742L20.6759 17.4742L25.2634 13.4992C26.1009 12.7742 25.6509 11.3992 24.5509 11.3117L18.5134 10.7992L16.1509 5.22422C15.7259 4.21172 14.2759 4.21172 13.8509 5.22422L11.4884 10.7867L5.45088 11.2992C4.35088 11.3867 3.90088 12.7617 4.73838 13.4867L9.32588 17.4617L7.95088 23.3617C7.70088 24.4367 8.86338 25.2867 9.81338 24.7117L15.0009 21.5867Z" fill="#FC1C00"/>
                  </svg>
  
                  </div>
                  <div className='my-auto text-bold text-xl'>
                      {data.rating}
                  </div>
                  <div className=' my-auto text-gray-500'>
                      Rating
                  </div>
              </div>
          </div>
          <div className='grid grid-cols-2'>
              <div>
                  <button className='px-16 py-4 border border-red-500 text-red-600 rounded-full text-xl' onClick={() => popupHandler(data.id)}>
                      View Details 
                  </button>
              </div>
              <div>
                  <button className='px-16 text-xl bg-red-500 text-white py-4 border border-red-500 rounded-full'>
                      Join Session
                  </button>
              </div>
          </div>
        </div>
        <hr></hr>
        <div className='grid md:grid-cols-4 grid-cols-2 mx-10 my-8' >
          <div className='flex'>
              <div>
                  <img src={img2} className="w-12 h-12 rounded-full"></img>
              </div>
              <div>
                  <div className='text-bold mx-2'>
                      Booking ID
                  </div>
                  <div className='text-gray-500 mx-2'>
                      {data.bookingId}
                  </div>
              </div>
          </div>
          <div className='flex'>
              <div>
                  <img src={img3} className="w-12 h-12 rounded-full"></img>
              </div>
              <div>
                  <div className='text-bold mx-2'>
                      Consultation Category
                  </div>
                  <div className='text-gray-500 mx-2'>
                      Startup consultation
                  </div>
              </div>
          </div>
          <div className='flex'>
              <div>
                  <img src={img4} className="w-14 h-12 rounded-full"></img>
              </div>
              <div>
                  <div className='text-bold  mx-2'>
                      Session Time & date
                  </div>
                  <div className='text-gray-500 mx-2'>
                       {data.date}
                  </div>
              </div>
          </div>
          <div className='flex'>
              <div>
                  <img src={img5} className="w-12 h-12 rounded-full"></img>
              </div>
              <div>
                  <div className='text-bold mx-2'>
                      Booking Status
                  </div>
                  <div className={`mx-2 ${
                    data.status == 'ongoing' ? 'text-yellow-600 bg-yellow-200 rounded-full text-center mt-2' :
                    data.status == 'cancelled' ? 'text-red-600 bg-red-200 rounded-full text-center mt-2' :
                    data.status == 'confirmed' ? 'text-purple-600 bg-purple-200 rounded-full text-center mt-2' :
                    'text-gray-500'
                    }`}>
                    {data.status}
                    </div>

              </div>
          </div>
          
        </div>
      </div>
    ))}
     {pop &&
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       <div className="bg-white p-6 rounded-lg md:w-3/4">
        <CancelBookings/>
        <div className='mt-2 '>
            <button onClick={() => closePopUp()} 
            className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
        </div>
      </div>
    </div>}

    </div>
    
    
  )
}


