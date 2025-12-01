import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const BookHotel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nic: "",
    contact: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(`Booking Confirmed for ${formData.name} at Hotel ID: ${id}`);

    setFormData({
      name: "",
      email: "",
      nic: "",
      contact: "",
      checkin: "",
      checkout: "",
      guests: 1,
    });
    
     setTimeout(() => navigate("/"), 1500);  
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-800">
        Book Your Hotel
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="nic"
          value={formData.nic}
          onChange={handleChange}
          placeholder="NIC Number"
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full border p-3 rounded"
          required
        />

        <div className="flex gap-4">
          <input
            type="date"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            className="w-1/2 border p-3 rounded"
            required
          />

          <input
            type="date"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            className="w-1/2 border p-3 rounded"
            required
          />
        </div>

        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          placeholder="Guests"
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded bg-[#FF6B35] text-white px-5 font-semibold hover:bg-[#FFD166] hover:text-[#1B263B] transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookHotel;
