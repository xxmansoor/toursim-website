import React from "react";
import EffialTower from "../assets/images/Effial-Tower.jpg";
import Japan from "../assets/images/japan.jpg";
import UAE from "../assets/images/UAE.jpg";
import Rome from "../assets/images/Rome.jpg";
import NewYork from "../assets/images/New-York.jpg";
import Istanbul from "../assets/images/Istanbul.jpg";

const Destinations = () => {
  const destinations = [
    {
      name: "Paris, France",
      image: EffialTower,
      desc: "The city of lights — perfect for romance and art lovers.",
    },
    {
      name: "Tokyo, Japan",
      image: Japan,
      desc: "A blend of tradition and technology with endless discoveries.",
    },
    {
      name: "New York, USA",
      image: NewYork,
      desc: "The city that never sleeps — full of energy and culture.",
    },
    {
      name: "Rome, Italy",
      image: Rome,
      desc: "Walk through ancient history and taste authentic Italian cuisine.",
    },
    {
      name: "Dubai, UAE",
      image: UAE,
      desc: "A luxury destination with futuristic architecture and desert adventures.",
    },
    {
      name: "Istanbul, Turkey",
      image: Istanbul,
      desc: "Where East meets West — rich culture and breathtaking views.",
    },
  ];

  return (
    <div className="p-10 text-center bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-amber-800">
        🌍 Popular Destinations
      </h2>
      <p className="text-gray-600 mb-8">
        Discover some of the most beautiful and loved travel destinations around
        the world.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">
                {dest.name}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
