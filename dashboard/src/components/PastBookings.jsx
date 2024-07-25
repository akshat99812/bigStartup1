import React from 'react';
import img from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.jpeg";
import { useNavigate } from 'react-router-dom';
import Review from './Review';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const PastBooking = () => {

    const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
        try {
            const requestBody = {
                "gender": "male",
                "experience": 2,
                "user_slug": "hellti",
                "verification_status": true,
                "description": "none",
                "limit":10,
                "page":1,
                "reply":"done it",
                "price":500,
                "order_id":"heomt",
                "seeker_id": "jellpino",
                "slot": {
                    "date": "2024-07-30T00:00:00Z", 
                "start_time": "2024-07-30T10:47:00Z",
                    "duration": 60
                },
                "pricing_id": "jf;lajisgj",
                "comment":"Did it by mistake",
                "cancelled_by":"seeker",
                "confirmed_by":"consultant",

                "session_category": "startup",
                "consultant_id": "c848fc9e-3bcb-437b-9912-8b3e2d38ffbc",
                //7d70baf6-955e-470e-967f-5909f7f36479,
                "session_id":"f0b76c51-8854-481e-a14d-521c5be2ac49"
            };

            // const response = await fetch('http://localhost:3000/api/consultationService/pastBookings', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(requestBody),
            // });

            const getPastBookings = async (requestBody) => {
                try {
                    const response = await axios.post('http://localhost:3000/api/consultationService/pastBookings', requestBody, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    setBookings(response.data);
                } catch (error) {
                    console.error('Error fetching past bookings:', error);
                    setError(error);
                }
            };

            getPastBookings(requestBody);

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (response.status === 204) {
                console.log('Received a 204 No Content response');
                setError('No content received');
                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Response body:', result);

            if (result.message === "Bookings Found") {
                setBookings(result.getAllBookings);
            } else {
                setError('No bookings found');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error fetching data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const data = [
        {   id:1,
            rating:5,
            imgUrl:img2,
            validity:false,
            bookingId:123456,
            name:"Rekha Sahu",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"Completed",
        },
        {   
            id:2,
            rating:4.5,
            imgUrl:img3,
            validity:false,
            bookingId:1245456,
            name:"Akshat Patel",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"Not Completed",
        },
        {   
            id:3,
            rating:4.5,
            imgUrl:img3,
            validity:false,
            bookingId:1245456,
            name:"Akshat Patel",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"Completed",
        },
      
        ]
        const navigate = useNavigate();
        const onClickHandler=(someId)=>{
            navigate(`${someId}?validity=false`);
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
        {/* {data.map((data, index) => (
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
          <div className='grid grid-cols-1 '>
              <div className='flex justify-center'>
                  <button className='px-16 py-4 border border-red-500 bg-red-500 text-white rounded-full text-xl' onClick={() => popupHandler(data.id)}>
                      Review Bookings
                  </button>
              </div>
             
          </div>
        </div>
        <hr></hr>
        <div className='grid grid-cols-4 mx-10 my-8' >
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
                    data.status == 'Completed' ? 'text-green-600 bg-green-200 rounded-full text-center mt-2' :
                    data.status == 'Not Completed' ? 'text-red-600 bg-red-200 rounded-full text-center mt-2 px-2' :
                    'text-gray-500'
                    }`}>
                    {data.status}
                    </div>

              </div>
          </div>
          
        </div>
      </div>
      
    ))} */}
    {bookings.map((booking) => (
                    <li key={booking.id}>
                        <p>Seeker ID: {booking.seeker_id}</p>
                        <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                        <p>Start Time: {new Date(booking.start_time).toLocaleTimeString()}</p>
                        <p>Duration: {booking.duration} minutes</p>
                        <p>Payment Status: {booking.paymentStatus}</p>
                        <p>Booking Status: {booking.booking_status}</p>
                        <p>Category: {booking.category}</p>
                        <p>Consultant ID: {booking.consultantId}</p>
                    </li>
                ))}
     {pop &&
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       <div className="bg-white p-6 rounded-lg md:w-3/4">
        <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div>
                        <img src={img6} className='w-12 h-12 rounded-full'></img>
                    </div>
                    <div>
                        <div>
                        Rekha Sahu
                        </div>
                        <div>
                        May 10 at 7:00 AM
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <button className='px-6 py-3 bg-white border border-red-500 text-red-500 rounded-lg'
                        onClick={() => closePopUp()}>Cancel</button>
                    </div>
                    <div>
                        <button className='px-6 py-3 bg-red-500 text-white rounded-lg'>Submit</button>
                    </div>

                </div>
        </div>
        <div className='my-2'>
            <hr></hr>
        </div>
        <div>
            <Review/>
        </div>
      </div>
    </div>}
    </div>
    
    
  )
}


