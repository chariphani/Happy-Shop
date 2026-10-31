import React from 'react';
import './Place.css';

const Place = () => {
  return (
    <div className="place">
      <div className="content">
        {/* Celebration animation using iframe (no install) */}
        <iframe
          src="https://lottie.host/?file=95e8759f-23ae-4e6e-9d64-bb8779c3503b/8VW0E1J8L3.json&autoplay=1&loop=0"
          title="celebration"
          className="celebration-animation"
          frameBorder="0"
        ></iframe>

        <h1 className="congrats-text">🎉 Congrats! Payment Successful 🎉</h1>
      </div>
    </div>
  );
};

export default Place;
