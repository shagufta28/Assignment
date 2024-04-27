import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaVolumeUp, FaLightbulb } from 'react-icons/fa';

const FlipBox = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="flip-box-front" onClick={handleClick}>
        <div style={{ width: '40em', height: '15em',  background: 'linear-gradient(to bottom, #23338b, #5175b9)', borderRadius:'2rem' }} className='mt-9 rounded-md flex flex-col items-center justify-center'>
          <div className="flex items-start justify-between w-full">
            <div>
              <FaLightbulb className="text-white text-4xl mb-20 ml-10" /> {/* Bulb icon */}
            </div>
            <div>
              <FaVolumeUp className="text-white text-4xl mb-20 mr-10" /> {/* Sound icon */}
            </div>
          </div>
          <span className="mb-28 text-white text-3xl">9x+2x+16x-2x</span>
        </div>
      </div>
      <div className="flip-box-back" onClick={handleClick}>
        <div style={{ width: '40em', height: '15em',  background: 'linear-gradient(to bottom, #444b67, #1c3e83)', borderRadius:'2rem'}} className='mt-9 rounded-md flex flex-col items-center justify-center'>
        <div className="flex items-start justify-between w-full">
            <div>
              <FaLightbulb className="text-white text-4xl mb-20 ml-10" /> {/* Bulb icon */}
            </div>
            <div>
              <FaVolumeUp className="text-white text-4xl mb-20 mr-10" /> {/* Sound icon */}
            </div>
          </div>
          <span className="mb-28 text-white text-3xl"> 5x-9x = ?</span>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default FlipBox;
