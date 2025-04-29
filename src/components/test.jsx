import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Fitness App!</h1>
      <p className="text-lg mb-6">
        Explore exercises, healthy recipes, and more to improve your wellness.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-50 p-6 rounded-[4px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer transition all duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold text-center mb-4">Exercises</h2>
          <p className="text-center mb-4">
            Find workout routines for different body parts.
          </p>
          <Link to="/workout" className="text-blue-500 hover:underline">
            View Exercises
          </Link>
        </div>

        <div className="bg-slate-50 p-6 rounded-[4px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer transition all duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold text-center mb-4">
            Healthy Recipes
          </h2>
          <p className="text-center mb-4">
            Explore nutritious and delicious recipes for a balanced diet.
          </p>
          <Link to="/meals" className="text-blue-500 hover:underline">
            View Recipes
          </Link>
        </div>

        <div className="bg-slate-50 p-6 rounded-[4px] shadow-[3px_2px_6px_2px_rgba(0,0,0,0.3)] cursor-pointer transition all duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold text-center mb-4">Comments</h2>
          <p className="text-center mb-4">
            Leave your comments and recommendations for others.
          </p>
          <Link to="/comments" className="text-blue-500 hover:underline">
            View Comments
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <p className="font-light text-gray-600">
          Start improving your health now with Fitness App!
        </p>
      </div>
    </div>
  );
}

export default Home;
