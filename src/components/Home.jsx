import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1950&q=80')]">
      <div className="p-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mt-6">Welcome!</h1>
        <p>some text here</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="bg-white/30 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-lg cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="font-bold">Notes</h2>
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
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-[4px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="font-bold">Finance</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/finance">
              Go Finance
            </Link>
          </div>
          <div className="bg-white/30 backdrop-blur-sm border border-white/30 p-6 rounded-[4px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
            <h2 className="font-bold">Contact</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/contact">
              Go Contact
            </Link>
          </div>
          <div className="bg-white/20 backdrop-blur-sm border border-white/30  p-6 rounded-[4px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500">
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
