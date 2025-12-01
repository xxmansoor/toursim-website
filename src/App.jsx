import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import Hotels from "./Pages/Hotels"
import HotelDetails from "./Pages/HotelDetails";
import BookHotel from "./Pages/BookHotel";
import AIPlanner from "./Pages/AIPlanner";
function App() {
  return (
    <>
     <Toaster position="top-center" />
    <Router>
      <Header />
      <main>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/book/:id" element={<BookHotel />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-planner" element={<AIPlanner />} />
        </Routes> 
      </main>
     <Footer />
    </Router>
    </>
  );
}

export default App;


