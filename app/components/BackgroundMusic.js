'use client';
import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);
  const hasStarted = useRef(false);
  const containerRef = useRef(null);

  const videoId = 'T8rcGhngbuA';

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    // Load the API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const createPlayer = () => {
    if (playerRef.current) return;
    
    playerRef.current = new window.YT.Player('yt-player', {
      height: '1',
      width: '1',
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: videoId,
        playsinline: 1, // Important for iOS!
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: () => {
          setPlayerReady(true);
        },
        onStateChange: (event) => {
          // YT.PlayerState.ENDED = 0
          if (event.data === 0) {
            // Loop: replay when ended
            playerRef.current.playVideo();
          }
        },
      },
    });
  };

  // Auto-start on first user interaction
  useEffect(() => {
    const autoStart = () => {
      if (!hasStarted.current && playerRef.current) {
        hasStarted.current = true;
        try {
          playerRef.current.playVideo();
          setIsPlaying(true);
          setShowPrompt(false);
        } catch (e) {
          console.log('Autoplay blocked:', e);
        }
      }
    };

    const events = ['click', 'touchstart', 'touchend', 'scroll', 'keydown'];
    events.forEach(e => document.addEventListener(e, autoStart, { passive: true }));

    return () => {
      events.forEach(e => document.removeEventListener(e, autoStart));
    };
  }, [playerReady]);

  const toggleMusic = (e) => {
    e.stopPropagation();
    
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
      hasStarted.current = true;
    }
    setShowPrompt(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
      {/* Hidden YouTube Player Container */}
      <div 
        ref={containerRef}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        <div id="yt-player"></div>
      </div>

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
