'use client';
import { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  if (!images || images.length === 0) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>No images found in /img folder.</div>;
  }

  return (
    <div className="slider-container" style={{ width: '100%' }}>
      <div className="slider-wrapper">
        <div 
          className="slider-track" 
          style={{ 
            transform: `translateX(-${current * 100}%)`,
            display: 'flex',
            height: '100%',
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {images.map((img, index) => (
            <div 
              key={index} 
              style={{ 
                minWidth: '100%', 
                height: '100%', 
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: '#fff0f5'
              }}
            >
              <img 
                src={img} 
                alt={`Valentine Slide ${index + 1}`} 
                style={{ 
                  maxWidth: '90%',  /* Reduced image size relative to container */
                  maxHeight: '90%', /* Reduced image size relative to container */
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain', /* contain instead of cover to show full image */
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }} 
              />
            </div>
          ))}
        </div>
        
        <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>
        <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        {images.map((_, index) => (
          <span 
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              height: '12px',
              width: '12px',
              backgroundColor: current === index ? 'var(--highlight)' : '#ccc',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
