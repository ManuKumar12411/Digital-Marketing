import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
