import React from "react";
import { FaGlobeAsia, FaHotel, FaRobot } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black mb-4">
          About <span className="text-amber-800">TourEase</span>
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Welcome to{" "}
          <span className="font-semibold text-amber-800">TourEase</span> — your
          AI-powered travel companion. We simplify travel planning by providing
          intelligent destination insights, hotel recommendations, and
          personalized trip plans — all designed to make your journey
          unforgettable.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <FaGlobeAsia className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Discover Destinations
            </h3>
            <p className="text-gray-600 text-sm">
              Explore stunning locations around the world with our curated
              travel guides.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <FaHotel className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Find Best Hotels
            </h3>
            <p className="text-gray-600 text-sm">
              Get AI recommendations for top-rated hotels and stays that fit
              your budget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <FaRobot className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Smart Trip Planner
            </h3>
            <p className="text-gray-600 text-sm">
              Let our AI generate personalized trip plans based on your
              preferences.
            </p>
          </div>
        </div>

        <p className="mt-12 text-gray-700 italic">
          “Travel smarter, not harder — experience the world with TourEase.”
        </p>
      </div>
    </section>
  );
};

export default About;
