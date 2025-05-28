import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1670179694048-5e4a1dcad9b6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] font-sans">
      <div className="p-6 max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-6xl font-extrabold text-[#e8e8e8]"
        >
          Welcome Back!
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 text-white font-bold hover:underline">
            <h2>Notes</h2>
            <p>Take Notes, and save them</p>
            <Link to="/notes">Go Notes</Link>
          </div>

          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold text-white hover:underline">
            <h2>Calendar</h2>
            <p>Take Notes, and save them</p>
            <Link to="/calendar">Go Calendar</Link>
          </div>
          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold hover:underline text-white">
            <h2>Finance</h2>
            <p>Take Notes, and save them</p>
            <Link to="/finance">Go Finance</Link>
          </div>
          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold hover:underline text-white">
            <h2>Contact</h2>
            <p>Take Notes, and save them</p>
            <Link to="/contact">Go Contact</Link>
          </div>
          <div className="bg-white/0 backdrop-blur-sm border border-white/30 p-6 rounded-[10px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer mt-4 hover:scale-110 transition-all duration-500 font-bold hover:underline text-white">
            <h2>Reviews</h2>
            <p>Take Notes, and save them</p>
            <Link to="/reviews">Go Reviews</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
