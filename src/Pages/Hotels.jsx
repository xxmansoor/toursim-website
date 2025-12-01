import React from "react";
import { Form, Link } from "react-router-dom";
import burj from "../assets/images/burj.jpg"
import marina from "../assets/images/marina.jpg"
import serena from "../assets/images/serena.jpg"
import shangrila  from "../assets/images/shangrila.jpg"
import HotelDeParis  from "../assets/images/Hotel-de-Paris.jpg"
import LuxusHunza from "../assets/images/Luxus-Hunza.jpg"
const Hotels = () => {
  const hotels = [
    { id: 1, name: "Burj Al Arab", location: "Dubai, UAE", price: 8000, image:burj},
    { id: 2, name: "Marina Bay Sands", location: "Singapore", price: 9500, image:marina},
    { id: 3, name: "Serena Hotel", location: "Islamabad, Pakistan", price: 7000, image:serena},
    { id: 4, name: "Shangrila Resort", location: "Skardu, Pakistan", price: 23000, image:shangrila},
    { id: 5, name: "Hotel de Paris", location: "Monte Carlo", price: 15000, image:HotelDeParis},
    { id: 6, name: "Luxus Hunza", location: "Hunza,Pakistan", price: 18000, image:LuxusHunza},
  ];

  return (
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-800">Available Hotels</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{hotel.name}</h3>
              <p className="text-gray-600">📍 {hotel.location}</p>
              <p className="text-blue-600 font-bold mt-2">PKR {hotel.price}/night</p>
              <Link
                to={`/hotels/${hotel.id}`}
                className="inline-block mt-4 bg-[#FF6B35] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FFD166] hover:text-[#1B263B] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
