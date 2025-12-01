import React from "react";
import { useParams, Link } from "react-router-dom";
import burj from "../assets/images/burj.jpg"
import marina from "../assets/images/marina.jpg"
import serena from "../assets/images/serena.jpg"
import shangrila  from "../assets/images/shangrila.jpg"
import HotelDeParis  from "../assets/images/Hotel-de-Paris.jpg"
import LuxusHunza from "../assets/images/Luxus-Hunza.jpg"
const HotelDetails = () => {
  const { id } = useParams();
  const hotels = [
    { id: 1, name: "Burj Al Arab", location: "Dubai, UAE", price: 8000, desc: "A luxury hotel with modern rooms and city view.", image:burj},
    { id: 2, name: "Marina Bay Sands", location: "Singapore", price: 9500, desc: "Comfortable stay with ocean views and great food.", image:marina},
    { id: 3, name: "Serena Hotel", location: "Islamabad, Pakistan", price: 7000, desc: "Enjoy the mountain breeze and cozy environment.", image:serena},
    { id: 4, name: "Shangrila Resort", location: "Skardu, Pakistan", price: 7000, desc: "Beautiful lake views surrounded by mountains and nature.", image:shangrila},
    { id: 5, name: "Hotel de Paris", location: "Monte Carlo", price: 7000, desc: "Elegant rooms with classic luxury and sea views.", image:HotelDeParis},
    { id: 6, name: "Luxus Hunza", location: "Hunza,Pakistan", price: 7000, desc: "", image:LuxusHunza},
  ];

  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) return <p className="p-10 text-center">Hotel not found.</p>;

  return (
    <div className="p-10">
      <img  src={hotel.image} alt={hotel.name} className="rounded-lg shadow-md mb-6 mx-auto w-120 h-80 object-cover"/>
      <h2 className="text-lg font-semibold text-[#1B263B]">{hotel.name}</h2>
      <p className="text-gray-600 mt-2">📍 {hotel.location}</p>
      <p className="text-blue-600 font-bold mt-2">PKR {hotel.price}/night</p>
      <p className="text-[#415A77] text-sm mt-2">{hotel.desc}</p>

      <Link
        to={`/book/${hotel.id}`}
        className="inline-block mt-6 bg-[#FF6B35] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FFD166] hover:text-[#1B263B] transition"
      >
        Book Now
      </Link>
    </div>
  );
};

export default HotelDetails;
