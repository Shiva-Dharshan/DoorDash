// import { useState } from "react";
// import Booking from "./Booking";
// import {color, motion} from 'framer-motion'
// import {FaRegCheckCircle} from 'react-icons/fa'
// import {AiFillCloseCircle} from 'react-icons/ai'

// const services = () => {
//     const[text,setText]=useState("Book!")
//     const [book,setBook]=useState(true)
//     const [display,Setdisplay] =useState(true) 
//     const[num,Setnum]=useState("")
//     const[add,Setadd]=useState("")

//     const address=document.getElementsByClassName("address");
//     const number=document.getElementsByClassName("no-of-workers")
//     const handleclick=()=>{
//         Setdisplay(false)
        
//         setText("Book!")
//       }
//     const handleclose=()=>{
//         Setdisplay(true)
//       }
//       const handlecheck=(e)=>{
//         if(num!="" && add!="")
//         {
//             // setBook(false)
//             // setText("Booked!")
//             e.preventDefault();
//             setTimeout(()=>{
//                 setBook(false)
//                 setText("Booked!")
//             },1000)
//         }
//       }
//     return ( 
//         <>
//         <div className="section2">
//             {/* <div className="input_cont">
//                 <h2>Choose your location</h2>
//                 <select>
//                     <option>Chennai</option>
//                     <option>Coimbatore</option>
//                     <option>Erode</option>
//                     <option>Salem</option>
//                     <option>Trichy</option>
//                     <option>Tirupur</option>
//                 </select>
//             </div> */}
//             <div className="input-cont">
//                 <input type="text" placeholder="search"></input>
//             </div>

            
//             <div className="works" onClick={handleclick}>
//             <img src={'/images/service1.avif'}></img>
//             <p>Pet care taker</p>
//             </div>
//             <div className="works" onClick={handleclick}>
//             <img src={'/images/service2.avif'}></img>
//             <p>Plumbers</p>
//             </div>
//             <div className="works" onClick={handleclick}>
//             <img src={'/images/service3.jpg'}></img>
//             <p>Electrical workers</p>
//             </div>
//             <div className="works" onClick={handleclick}>
//             <img src={'/images/service4.jpg'}></img>
//             <p>Vehicle Mechanic</p>
//             </div>
//             <div className="works" onClick={handleclick}>
//             <img src={'/images/service5.avif'}></img>
//             <p>House Painter</p>
//             </div>
//             <div className="works" onClick={handleclick}>
//             <img src={'/images/service6.jpg'}></img>
//             <p>Farm workers</p>
//                 </div>
//             <div className="works" onClick={handleclick}>
//             <img src={'/images/service7.avif'}></img>
//             <p>Chef</p>
//             </div>
            
           
//             <div className="booking" style={{display:display? 'none':'block'}}>
//             <AiFillCloseCircle className='close' onClick={handleclose} />
//                 <h1>Fill the details</h1>
//                 <form>
//                     <input className="no-of-workers" type="number" value={num} onChange={(e)=>Setnum(e.target.value)} placeholder="Phone number for contact" required></input><br></br>
//                     <input className="address" type="text" value={add} onChange={(e)=>Setadd(e.target.value)} placeholder="Exact address" required></input><br></br>
//                     <div className="check">
//                     <motion.button className="bookbtn" onClick={handlecheck}
//                      type="submit"
//                      animate={book?{x:0}:{scale:1.2}} style={book?{color:"black"}:{color:'green'}}>
//                      {text}</motion.button> 
//                     </div>
//                 </form>
//             </div>
//         </div>
//         </>
//      )
// }
 
// export default services;

/*-----------------------------------------------------------------------*/
import React, { useState } from 'react';

const Services = () => {
  const [filterText, setFilterText] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [bookings, setBookings] = useState([]);

  const services = [
    { name: 'Pet care', imageUrl: '/images/service1.avif' },
    { name: 'Plumber', imageUrl: '/images/service2.avif' },
    { name: 'Electrician', imageUrl: '/images/service3.jpg'},
    { name: 'Mechanic', imageUrl: '/images/service4.jpg'},
    { name: 'Painter', imageUrl: '/images/service5.avif'},
    { name: 'Farmworker', imageUrl: '/images/service6.jpg'},
    { name: 'Chef', imageUrl: '/images/service7.avif'},
    // Add more services as needed
  ];
  
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBook = () => {
    if (!phoneNumber || !location) {
      alert("Please provide phone number and location.");
    } else {
      const newBooking = { name: selectedService.name, imageUrl: selectedService.imageUrl };
      setBookings([...bookings, newBooking]);
      alert(`Service "${selectedService.name}" is booked!`);
      setSelectedService(null);
      setPhoneNumber('');
      setLocation('');
    }
  };
  
  return (
    <div className="section2 container mx-auto px-4 py-8">
        <div className='searchcont'>
            <input
            type="text"
            placeholder="Search the service you want..."
            value={filterText}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
        </div>
          
      <div className="servicecont grid grid-cols-4 gap-8">
        <div className="col-span-3">  
          <div className="works grid grid-cols-3 gap-4">
            {services
              .filter(service => service.name.toLowerCase().includes(filterText.toLowerCase()))
              .map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-24 h-24 object-cover rounded-full mb-2 cursor-pointer"
                    onClick={() => handleServiceClick(service)}
                  />
                  <p className="text-center">{service.name}</p>
                </div>
              ))}
          </div>
        </div>
        
        <div className="bookings col-span-1">
          <h2 className="text-lg font-semibold mb-4">My Bookings</h2>
          <div>
            {bookings.map((booking, index) => (
              <div key={index} className="bookingsdata flex items-center mb-4">
                <img
                  src={booking.imageUrl}
                  alt={booking.name}
                  className="w-12 h-12 object-cover rounded-full mr-2"
                />
                <p>{booking.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="booking fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
           <h2 className="text-lg font-semibold mb-4">Book {selectedService.name}</h2>
          <div className="input-cont bg-white p-6 rounded-lg">
            <input
              type="number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <button onClick={handleBook} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Book!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

