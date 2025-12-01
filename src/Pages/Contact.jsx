import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Your message has been sent! 🎉");

    // Reset fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">
      {/* Left side */}
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold mb-4 text-amber-800">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Reach out to us for any travel queries or quick assistance. <br />
          We’ll respond as soon as possible!
        </p>
        <div className="space-y-2">
          <p className="flex items-center gap-3">
            <FaPhone className="text-blue-600" /> +92 3348525661
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" /> mansoorkhaksar22@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" /> Peshawar, Pakistan
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-md"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-md"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-md"
          ></textarea>

          <button
            type="submit"
            className="bg-[#FF6B35] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FFD166] hover:text-[#1B263B] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
