import React from 'react';
import { FaPlus } from 'react-icons/fa';

const BottomComponent = () => {
  return (
    <div className=" text-blue font-semibold p-4  w-full flex items-center justify-between">
      <div className="flex items-center">
        <img src="src/images/sign.png" alt="Logo" className="h-28 mr-2" />
        
      </div>
      <div className="flex items-center mr-36">
        <FaPlus  style={{fontSize:'1.5rem'}}  className="text-blue font-bold text-lg mr-2" />
        <span  style={{fontSize:'1.5rem'}}  className="text-lg">Create FlashCards</span>
      </div>
    </div>
  );
};

export default BottomComponent;
