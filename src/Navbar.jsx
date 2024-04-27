import React from 'react';

const Navbar = ()=> {
  return (
    <nav className="bg-white p-4 flex items-center justify-between fixed w-full top-0 z-10">
      
      <div className="flex items-center">
        <img src="src/images/logo.png" alt="Logo" className="h-8 mr-2" />
      </div>
      
     
      <div className="flex items-center">
        <a href="#" className="text-gray-800 mr-12">Home</a>
        <a href="#" className="text-gray-800 mr-12">FlashCard</a>
        <a href="#" className="text-gray-800 mr-12">Contact</a>
        <a href="#" className="text-gray-800 mr-12">FAQ</a>
        
       
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
