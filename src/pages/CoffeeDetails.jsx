import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import {
  FaCalendarAlt,
  FaUser,
  FaBell,
  FaBolt,
  FaStar,
  FaArrowLeft,
  FaDollarSign,
} from "react-icons/fa";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100 py-12 px-4 relative">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors shadow-md"
      >
        <FaArrowLeft />
        <span>Back to home</span>
      </Link>

      {/* Sunflower Header */}
      <div className="max-w-2xl mx-auto text-center mb-12 relative">
        <h1 className="text-5xl font-bold text-amber-900 mb-4 z-10 relative">
          {coffee.name}
        </h1>
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-20 h-20 bg-amber-700 rounded-full"></div>
          </div>
        </div>
        <p className="text-amber-800 italic">"Sip the sunshine in every cup"</p>
      </div>

      {/* Coffee Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-amber-300">
        <div className="md:flex">
          {/* Image Section with Sunflower Accent */}
          <div className="md:w-1/2 relative">
            <img
              src={coffee.photo}
              alt={coffee.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-md">
              <div className="w-12 h-12 bg-amber-700 rounded-full"></div>
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8 bg-gradient-to-b from-amber-50 to-[#D2B48C]">
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCalendarAlt className="w-5 h-5 text-amber-700 mr-2" />
                <span className="font-semibold text-amber-900">Category:</span>
                <span className="ml-2 text-amber-800">{coffee.category}</span>
              </div>

              <div className="flex items-center">
                <FaUser className="w-5 h-5 text-amber-700 mr-2" />
                <span className="font-semibold text-amber-900">Barista:</span>
                <span className="ml-2 text-amber-800">{coffee.barista}</span>
              </div>

              <div className="flex items-center">
                <FaBell className="w-5 h-5 text-amber-700 mr-2" />
                <span className="font-semibold text-amber-900">Supplier:</span>
                <span className="ml-2 text-amber-800">{coffee.supplier}</span>
              </div>

              <div className="flex items-center">
                <FaDollarSign className="w-5 h-5 text-amber-700 mr-2" />
                <span className="font-semibold text-amber-900">Price:</span>
                <span className="ml-2 text-amber-800">${coffee.price}</span>
              </div>

              <div className="pt-4 border-t border-amber-200">
                <h3 className="text-xl font-bold text-amber-900 mb-2 flex items-center">
                  <FaBolt className="w-5 h-5 text-yellow-500 mr-2" />
                  Coffee Details
                </h3>
                <p className="text-amber-800 italic">{coffee.details}</p>
              </div>
            </div>

            {/* Sunflower Rating */}
            <div className="mt-8 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-7 h-7 ${
                    i < 3 ? "text-yellow-500" : "text-amber-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sunflowers */}
      <div className="hidden md:block">
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-8 h-8 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default CoffeeDetails;