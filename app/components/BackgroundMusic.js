'use client';
import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  const videoId = 'T8rcGhngbuA';
  // Put an mp3 file at /public/music/bg.mp3 for best mobile support
  const mp3Path = '/music/bg.mp3';
  const [hasMP3, setHasMP3] = useState(false);

  // Check if mp3 file exists
  useEffect(() => {
    fetch(mp3Path, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          setHasMP3(true);
        }
      })
      .catch(() => setHasMP3(false));
  }, []);

  // Auto-start audio on first user interaction
  useEffect(() => {
    if (!hasMP3) return;

    const autoStart = () => {
      if (!hasStarted.current && audioRef.current) {
        hasStarted.current = true;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
          })
          .catch(err => {
            console.log('Audio play failed:', err);
            hasStarted.current = false;
          });
      }
    };

    const events = ['click', 'touchstart', 'touchend', 'scroll', 'keydown', 'mousemove'];
    events.forEach(e => document.addEventListener(e, autoStart, { passive: true }));

    return () => {
      events.forEach(e => document.removeEventListener(e, autoStart));
    };
  }, [hasMP3]);

  const toggleMusic = () => {
    if (hasMP3 && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true));
        hasStarted.current = true;
      }
    }
    setShowPrompt(false);
  };

  // If no MP3, show a visible cute YouTube mini player
  if (!hasMP3) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,240,245,0.95), rgba(255,228,225,0.95))',
          borderRadius: '16px',
          padding: '8px',
          boxShadow: '0 4px 20px rgba(219,112,147,0.25)',
          border: '1px solid rgba(255,182,193,0.5)',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ fontSize: '11px', textAlign: 'center', color: '#db7093', marginBottom: '4px', fontWeight: '500' }}>
            🎵 กดเล่นเพลง
          </div>
          <iframe
            width="200"
            height="40"
            src={`https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}&controls=1&showinfo=0&modestbranding=1`}
            title="Background Music"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{ borderRadius: '8px', display: 'block' }}
          ></iframe>
        </div>
      </div>
    );
  }

  // If MP3 exists, use the audio element (best mobile support)
  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
      <audio ref={audioRef} loop preload="auto">
        <source src={mp3Path} type="audio/mpeg" />
      </audio>

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
          🎵 แตะเพื่อเปิดเพลง
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
