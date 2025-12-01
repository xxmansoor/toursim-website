import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // 🔹 slower speed (default is 1)
    }
  }, []);

  return (
    <section className="relative text-white text-center py-20 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/travel.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold">Explore the World with AI</h2>
        <p className="mt-4 text-lg">
          Discover destinations and plan your trips intelligently.
        </p>
        <button
          onClick={() => navigate("/ai-planner")}
          className="mt-6 bg-[#FF6B35] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FFD166] hover:text-[#1B263B] transition"
        >
          Plan My Trip with AI
        </button>
      </div>
    </section>
  );
};

export default Hero;
