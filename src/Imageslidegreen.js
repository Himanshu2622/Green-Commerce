import React, { useEffect, useState } from 'react';
import './Imageslidegreen.css';

function ImageSliderGreen() {
  const imgs = [
    { id: 1, value: '../images/1.jpg' },
    { id: 2, value: '../images/3.jpg' },
    { id: 3, value: '../images/4.jpg' },
    { id: 4, value: '../images/5.jpg' },
  ];
  const [val, setVal] = useState(0);

  const handleNext = () => {
    const index = val < imgs.length - 1 ? val + 1 : 0; // Loop back to the first image.
    setVal(index);
  };

  const handlePrev = () => {
    const index = val > 0 ? val - 1 : imgs.length - 1; // Loop back to the last image.
    setVal(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change image every 4 seconds (adjust the time as needed).

    return () => {
      clearInterval(interval);
    };
  }, [val]);

  return (
    <div className="main">
      {imgs[val].type === 'video/mp4' ? (
        <video className="slidevideo" autoPlay loop muted>
          <source src={imgs[val].value} type="video/mp4" />
        </video>
      ) : (
        <img className="slideimg" src={imgs[val].value} alt="Image" />
      )}
      <div className="slider-controls">
        <button onClick={handlePrev} className="prev-buttong">
          <img className="arrowg" src="../images/prev.png"/> 
        </button>
        <button onClick={handleNext} className="next-buttong">
        <img className="arrowg" src="../images/next.png"/>
        </button>
      </div>
    </div>
  );
}

export default ImageSliderGreen;