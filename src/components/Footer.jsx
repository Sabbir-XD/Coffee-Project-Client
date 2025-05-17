import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo1.png"; // Adjust the path to your logo
import bgImg from "../assets/13.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-base-content p-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Brand Info */}
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <img className="w-12" src={logo} alt="Espresso Emporium Logo" />
                Espresso Emporium
              </h1>
              <p className="mb-6">
                Always ready to be your friend. Come & Contact with us to share your memorable moments, 
                to share with your best companion.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Get in Touch</h2>
                <p>+88 01533 333 333</p>
                <p>info@gmail.com</p>
                <p>72, Walt street, King Road, Dhaka</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 max-w-md">
              <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
              <form className="space-y-4">
                <div className="form-control">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="input input-bordered w-full bg-white  backdrop-blur-sm" 
                  />
                </div>
                <div className="form-control">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="input input-bordered w-full bg-white backdrop-blur-sm" 
                  />
                </div>
                <div className="form-control">
                  <textarea 
                    placeholder="Message" 
                    className="textarea textarea-bordered w-full h-24  bg-opacity-20 backdrop-blur-sm"
                  ></textarea>
                </div>
                <button type="submit" className="btn rounded-full border-gray-700 border-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="divider my-10"></div>

          {/* Social Links and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-primary transition-colors"><FaFacebook /></a>
              <a href="#" className="text-xl hover:text-primary transition-colors"><FaTwitter /></a>
              <a href="#" className="text-xl hover:text-primary transition-colors"><FaInstagram /></a>
              <a href="#" className="text-xl hover:text-primary transition-colors"><FaLinkedin /></a>
            </div>
            <div>
              <p>Copyright © Espresso Emporium | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;