import React from "react";
import AIPlanner from "../Pages/AIPlanner"

import Hero from "../components/Hero";
import paris from "../assets/images/paris.jpg";
import tokyo from "../assets/images/tokyo.jpg";
import dubai from "../assets/images/dubai.jpg";
import lahore from "../assets/images/lahore.jpg";
import Skardu from "../assets/images/Skardu.jpg";
import murree from "../assets/images/murree.jpg";
const Home = () => {
  return (
    <>
      <Hero />
      <section className="p-10 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-6 text-amber-800">
          🌍 Popular Destinations
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Paris, France",
              img: paris,
              desc: "The city of love, lights, and timeless beauty.",
            },
            {
              name: "Tokyo, Japan",
              img: tokyo,
              desc: "A perfect mix of tradition and futuristic charm.",
            },
            {
              name: "Dubai, UAE",
              img: dubai,
              desc: "Luxury, innovation, and desert adventures await.",
            },
            {
              name: "Lahore",
              img: lahore,
              desc: "The cultural heart of Pakistan — rich in food, art, and Mughal architecture.",
            },
            {
              name: "Skardu",
              img: Skardu,
              desc: "Gateway to K2 — a paradise for trekkers and nature enthusiasts.",
            },
            {
              name: "Murree",
              img: murree,
              desc: "A peaceful hill station with pine forests, snowfall, and scenic views.",
            },
          ].map((dest, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#1B263B]">
                  {dest.name}
                </h4>
                <p className="text-[#415A77] text-sm mt-2">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <AIPlanner/>
        </div>
 </section>
    </>
  );
};

export default Home;
