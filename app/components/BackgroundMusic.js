'use client';
import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const hasStarted = useRef(false);

  const videoId = 'T8rcGhngbuA';

  useEffect(() => {
    // Start music on ANY user interaction with the page
    const autoStart = () => {
      if (!hasStarted.current) {
        hasStarted.current = true;
        setIsPlaying(true);
        setShowPrompt(false);
      }
    };

    // Listen on multiple events
    document.addEventListener('click', autoStart);
    document.addEventListener('touchstart', autoStart);
    document.addEventListener('scroll', autoStart);
    document.addEventListener('keydown', autoStart);
    document.addEventListener('mousemove', autoStart);

    return () => {
      document.removeEventListener('click', autoStart);
      document.removeEventListener('touchstart', autoStart);
      document.removeEventListener('scroll', autoStart);
      document.removeEventListener('keydown', autoStart);
      document.removeEventListener('mousemove', autoStart);
    };
  }, []);

  const toggleMusic = (e) => {
    e.stopPropagation();
    hasStarted.current = true;
    setIsPlaying(prev => !prev);
    setShowPrompt(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
      {/* Hidden Youtube Player */}
      {isPlaying && (
        <iframe
          width="1"
          height="1"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0`}
          title="Background Music"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        ></iframe>
      )}

      {/* Floating Control Button */}
      <button
        onClick={toggleMusic}
        style={{
          background: isPlaying 
            ? 'linear-gradient(135deg, rgba(255,182,193,0.9), rgba(255,255,255,0.9))' 
            : 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(219,112,147,0.3)',
          transition: 'all 0.3s ease',
          animation: isPlaying ? 'pulse 2s infinite' : (showPrompt ? 'attention 1.5s infinite' : 'none'),
        }}
        aria-label={isPlaying ? "Stop Music" : "Play Music"}
      >
        {isPlaying ? (
          <span style={{ fontSize: '24px' }}>🔊</span>
        ) : (
          <span style={{ fontSize: '24px' }}>🔇</span>
        )}
      </button>

      {showPrompt && !isPlaying && (
        <div style={{
          position: 'absolute',
          left: '60px',
          top: '5px',
          background: 'linear-gradient(135deg, #fff, #ffe4e1)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(219,112,147,0.2)',
          pointerEvents: 'none',
          animation: 'fadeInBounce 0.5s ease-out',
          border: '1px solid rgba(255,182,193,0.5)',
        }}>
          🎵 แตะที่หน้าจอเพื่อเปิดเพลง
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(219, 112, 147, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 12px rgba(219, 112, 147, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(219, 112, 147, 0); }
        }
        @keyframes attention {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); box-shadow: 0 0 20px rgba(219,112,147,0.5); }
        }
        @keyframes fadeInBounce {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundMusic;
