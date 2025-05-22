import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] font-sans">
      <div className="p-6 max-w-7xl mx-auto text-center">
        <p className="text-7xl font-extrabold text-white  animate-bounce">
          Welcome Back!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="bg-white/30 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-lg cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="">Notes</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/notes">
              Go Notes
            </Link>
          </div>

          <div className="bg-white/30 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="font-bold">Calendar</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/calendar">
              Go Calendar
            </Link>
          </div>
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="font-bold">Finance</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/finance">
              Go Finance
            </Link>
          </div>
          <div className="bg-white/30 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="font-bold">Contact</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/contact">
              Go Contact
            </Link>
          </div>
          <div className="bg-white/20 backdrop-blur-sm border border-white/30  p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="">Reviews</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/reviews">
              Go Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
