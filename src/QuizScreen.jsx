import React, { useState, useEffect } from 'react';
import FlipBox from './flip';
import { FaUndo, FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';

const QuizScreen = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return parseInt(localStorage.getItem('activeTab')) || 1;
  });

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  return (
    <>
      <div style={{ fontSize: '2em', fontFamily: 'Montserrat' }} className="text-blue-900 font-bold mt-20 ml-5">Relations and Functions ( Mathematics )</div>
      <div style={{ fontSize: '1.2em' }} className='text-black font-semibold mt-10 flex flex-col items-center justify-center'>
        {/* Tab buttons */}
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map(tabIndex => (
            <div
              key={tabIndex}
              className={`cursor-pointer text-gray-800 mr-12 ${activeTab === tabIndex ? 'text-blue-800 border-b-2 border-blue-800' : ''}`}
              onClick={() => handleTabClick(tabIndex)}
            >
              {tabIndex === 1 ? 'Study' : tabIndex === 2 ? 'Quiz' : tabIndex === 3 ? 'Test' : tabIndex === 4 ? 'Game' : 'Other'}
            </div>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 1 && (
          <div >
           <FlipBox gradientFrom="from-red-400" gradientTo="to-blue-600" />
          </div>
        )}
        {[2, 3, 4, 5].map(tabIndex => (
          <div key={tabIndex} >
            {activeTab === tabIndex && (
              <FlipBox frontContent={<div className="text-2xl font-bold">{`Tab ${tabIndex} Content`}</div>} backContent={<p>This is the content for Tab {tabIndex}.</p>} />
            )}
          </div>
        ))}
        <div className="flex items-center mt-10">
          <FaUndo className="text-gray-500 text-lg mr-4 cursor-pointer" /> {/* Reset icon */}
          <FaArrowLeft className="text-gray-500 text-lg mr-4 ml-9 cursor-pointer" /> {/* Left arrow icon */} 1/10
          <FaArrowRight className="text-gray-500 text-lg mr-9 ml-4 cursor-pointer" /> {/* Right arrow icon */}
          <FaExpand className="text-gray-500 text-lg mr-4 cursor-pointer" /> {/* Full screen icon */}
        </div>
      </div>
    </>
  );
};

export default QuizScreen;
