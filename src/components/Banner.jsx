import React from "react";
import {
  FaCoffee,
  FaHeart,
  FaSnowflake,
  FaMugHot,
  FaChevronRight,
} from "react-icons/fa";

const Banner = () => {
  const backgroundImage = "url('https://i.ibb.co/kgQw6yPb/3.png')";

  return (
    <div
      className="relative min-h-screen flex items-center p-8 overflow-hidden"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Content container with grid layout */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
         {/* Left side - Main content (6 columns) */}
        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 lg:mt-0"></div>
       
        {/* Right side - 6 columns for additional content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <h1 className="text-2xl md:text-2xl text-white font-bold mb-6">
            Would you like a Cup of <span className="">Delicious Coffee?</span>
          </h1>

          <div className="text-md md:text-md mb-8 space-y-4 text-white">
            <p className="flex items-center justify-center lg:justify-start gap-2">
              It's coffee time - Sip &
              Snow - Relaxation in every day! Get the nostalgia back!! Your
              companion of every moment!!! Enjoy the beautiful moments and make
              them memorable.
            </p>
          </div>

          <button className="btn bg-[#E3B577] rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto lg:mx-0">
            Learn More <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-20 text-amber-300">
          <FaCoffee size={50} />
        </div>
        <div className="absolute bottom-20 right-30 text-amber-200">
          <FaMugHot size={60} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
