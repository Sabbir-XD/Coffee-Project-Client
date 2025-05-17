import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";
import { CiCoffeeCup } from "react-icons/ci";
import backgroundImg from "../assets/1.png";
import Banner from "../components/Banner";

const Home = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  return (
    <div>
      {/* Banner Section */}
      <Banner />
      {/* Coffee Cards Section */}
      <div className="relative overflow-hidden p-10 md:p-25">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Our Popular Products</h1>
          <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-4"></div>
          <Link to="/add-coffee" className="z-10">
            <button className="btn border-2 border-gray-600 bg-[#D2B48C] text-lg text-white font-bold">
              Add Coffee <CiCoffeeCup color="black" size={20} />
            </button>
          </Link>
        </div>

         {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={backgroundImg} 
          alt="Background" 
          className="w-full h-full object-contain bg-cover opacity-70 "
        />
        
      </div>
        <div className="grid md:grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              setCoffees={setCoffees}
              coffees={coffees}
              coffee={coffee}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
