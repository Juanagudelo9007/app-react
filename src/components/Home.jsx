import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Home() {
  const welcomeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      welcomeRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.7, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] font-sans">
      <div className="p-6 max-w-7xl mx-auto text-center">
        <p
          className="text-4xl sm:text-6xl md:text-6xl font-extrabold text-[#91918d]"
          ref={welcomeRef}
        >
          Welcome Back!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 text-slate-800 font-bold hover:underline">
            <h2>Notes</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/notes">
              Go Notes
            </Link>
          </div>

          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold text-black hover:underline">
            <h2>Calendar</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/calendar">
              Go Calendar
            </Link>
          </div>
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold hover:underline">
            <h2>Finance</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/finance">
              Go Finance
            </Link>
          </div>
          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold hover:underline">
            <h2>Contact</h2>
            <p>Take Notes, and save them</p>
            <Link className="text-sky-500 hover:underline" to="/contact">
              Go Contact
            </Link>
          </div>
          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold hover:underline">
            <h2>Reviews</h2>
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
