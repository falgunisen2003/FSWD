// import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <img
    src="\public\mita.jpg" 
    alt="Logo"
    className="h-15 w-15"
        />

          
        </div>

        

        {/* Sign Up and Login Buttons */}
        {/* <div className="flex space-x-4">
       
          <a
            href="#"
            className="bg-transparent flex border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-lg"
          >
             <img
    src="\public\logo1 2.png" 
    alt="Logo"
    className="h-10 w-10"
       />
            Sign up
            
          </a>
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Log in
          </a> */}

<div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-white text-sm hover:text-purple-400">
            <img
              src="public\logo1 2.png" // Replace with your icon (optional)
              alt="icon"
              className="h-15 width-15"
            />
            <span>Sign up</span>
          </button>
          <span className="text-gray-500">|</span>
          <button className="text-white border border-white rounded-lg px-4 py-1 text-sm hover:bg-purple-600">
            Log In
          </button>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
