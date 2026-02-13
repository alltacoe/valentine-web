'use client';
import { useEffect, useState } from 'react';

/* Inline SVG Orange Cat - walking with animated legs */
const CatSVG = () => (
  <svg width="100" height="70" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Tail */}
    <path d="M25,65 Q5,30 15,15 Q20,10 25,20 Q30,35 40,55" fill="#E88A2A" stroke="#D07520" strokeWidth="1">
      <animateTransform attributeName="transform" type="rotate" values="-5 35 60;10 35 60;-5 35 60" dur="1.5s" repeatCount="indefinite"/>
    </path>
    {/* Body */}
    <ellipse cx="100" cy="75" rx="55" ry="30" fill="#F5A623"/>
    <ellipse cx="105" cy="85" rx="35" ry="15" fill="#FDE8C9"/>
    {/* Body stripes */}
    <path d="M75,55 Q80,70 75,85" fill="none" stroke="#D4841F" strokeWidth="3" strokeLinecap="round"/>
    <path d="M90,52 Q95,67 90,82" fill="none" stroke="#D4841F" strokeWidth="3" strokeLinecap="round"/>
    <path d="M105,50 Q110,65 105,80" fill="none" stroke="#D4841F" strokeWidth="3" strokeLinecap="round"/>
    <path d="M120,52 Q125,67 120,82" fill="none" stroke="#D4841F" strokeWidth="3" strokeLinecap="round"/>
    {/* Back legs with walking animation */}
    <rect x="55" y="95" width="14" height="30" rx="5" fill="#F5A623">
      <animateTransform attributeName="transform" type="rotate" values="15 62 95;-15 62 95;15 62 95" dur="0.5s" repeatCount="indefinite"/>
    </rect>
    <rect x="72" y="95" width="14" height="30" rx="5" fill="#E8991F">
      <animateTransform attributeName="transform" type="rotate" values="-15 79 95;15 79 95;-15 79 95" dur="0.5s" repeatCount="indefinite"/>
    </rect>
    {/* Front legs with walking animation */}
    <rect x="120" y="95" width="14" height="30" rx="5" fill="#F5A623">
      <animateTransform attributeName="transform" type="rotate" values="-15 127 95;15 127 95;-15 127 95" dur="0.5s" repeatCount="indefinite"/>
    </rect>
    <rect x="137" y="95" width="14" height="30" rx="5" fill="#E8991F">
      <animateTransform attributeName="transform" type="rotate" values="15 144 95;-15 144 95;15 144 95" dur="0.5s" repeatCount="indefinite"/>
    </rect>
    {/* Paws */}
    <ellipse cx="62" cy="127" rx="9" ry="5" fill="#FCCFA0"/>
    <ellipse cx="79" cy="127" rx="9" ry="5" fill="#FCCFA0"/>
    <ellipse cx="127" cy="127" rx="9" ry="5" fill="#FCCFA0"/>
    <ellipse cx="144" cy="127" rx="9" ry="5" fill="#FCCFA0"/>
    {/* Head */}
    <ellipse cx="155" cy="55" rx="30" ry="28" fill="#F5A623"/>
    {/* Ears */}
    <polygon points="132,30 138,5 148,28" fill="#F5A623" stroke="#D07520" strokeWidth="1"/>
    <polygon points="136,28 140,12 146,27" fill="#FFB8B8"/>
    <polygon points="162,28 172,5 178,30" fill="#F5A623" stroke="#D07520" strokeWidth="1"/>
    <polygon points="165,27 172,12 175,28" fill="#FFB8B8"/>
    {/* Eyebrow markings */}
    <path d="M140,45 Q145,42 150,44" fill="none" stroke="#D4841F" strokeWidth="2" strokeLinecap="round"/>
    <path d="M160,44 Q165,42 170,45" fill="none" stroke="#D4841F" strokeWidth="2" strokeLinecap="round"/>
    {/* Eyes */}
    <ellipse cx="147" cy="50" rx="5" ry="6" fill="#4CAF50"/>
    <ellipse cx="165" cy="50" rx="5" ry="6" fill="#4CAF50"/>
    <ellipse cx="147" cy="50" rx="2.5" ry="5" fill="#1B5E20"/>
    <ellipse cx="165" cy="50" rx="2.5" ry="5" fill="#1B5E20"/>
    {/* Eye shine */}
    <circle cx="149" cy="48" r="1.5" fill="white"/>
    <circle cx="167" cy="48" r="1.5" fill="white"/>
    {/* Nose */}
    <path d="M154,58 L152,61 L158,61 Z" fill="#FF8A80"/>
    {/* Mouth */}
    <path d="M155,61 Q155,65 152,67" fill="none" stroke="#A0522D" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M155,61 Q155,65 158,67" fill="none" stroke="#A0522D" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Whiskers */}
    <line x1="125" y1="56" x2="143" y2="58" stroke="#888" strokeWidth="0.8"/>
    <line x1="125" y1="62" x2="143" y2="62" stroke="#888" strokeWidth="0.8"/>
    <line x1="125" y1="68" x2="143" y2="65" stroke="#888" strokeWidth="0.8"/>
    <line x1="170" y1="58" x2="190" y2="56" stroke="#888" strokeWidth="0.8"/>
    <line x1="170" y1="62" x2="190" y2="62" stroke="#888" strokeWidth="0.8"/>
    <line x1="170" y1="65" x2="190" y2="68" stroke="#888" strokeWidth="0.8"/>
    {/* Cheeks */}
    <circle cx="143" cy="62" r="5" fill="#FFD0C0" opacity="0.4"/>
    <circle cx="168" cy="62" r="5" fill="#FFD0C0" opacity="0.4"/>
  </svg>
);

/* Inline SVG Butterfly */
const ButterflySVG = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="28" rx="22" ry="18" fill="#F48FB1" opacity="0.85">
      <animateTransform attributeName="transform" type="rotate" values="0 40 40;-30 40 40;0 40 40" dur="0.4s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="52" cy="28" rx="22" ry="18" fill="#F48FB1" opacity="0.85">
      <animateTransform attributeName="transform" type="rotate" values="0 40 40;30 40 40;0 40 40" dur="0.4s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="30" cy="48" rx="16" ry="13" fill="#CE93D8" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" values="0 40 40;-25 40 40;0 40 40" dur="0.4s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="50" cy="48" rx="16" ry="13" fill="#CE93D8" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" values="0 40 40;25 40 40;0 40 40" dur="0.4s" repeatCount="indefinite"/>
    </ellipse>
    <circle cx="28" cy="26" r="6" fill="#E91E63" opacity="0.3"/>
    <circle cx="52" cy="26" r="6" fill="#E91E63" opacity="0.3"/>
    <circle cx="30" cy="47" r="4" fill="#9C27B0" opacity="0.3"/>
    <circle cx="50" cy="47" r="4" fill="#9C27B0" opacity="0.3"/>
    <ellipse cx="40" cy="40" rx="3" ry="18" fill="#5D4037"/>
    <path d="M40,22 Q35,10 30,8" fill="none" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M40,22 Q45,10 50,8" fill="none" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="30" cy="8" r="2" fill="#5D4037"/>
    <circle cx="50" cy="8" r="2" fill="#5D4037"/>
  </svg>
);

const SunflowerField = () => {
  const [sunflowers, setSunflowers] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const count = isMobile ? 60 : 120;
    const arr = [];
    for (let i = 0; i < count; i++) {
      const stemH = isMobile ? (20 + Math.random() * 35) : (40 + Math.random() * 90);
      const headSize = isMobile ? (16 + Math.random() * 14) : (28 + Math.random() * 30);
      arr.push({
        id: i,
        left: Math.random() * 100,
        stemH,
        headSize,
        delay: Math.random() * 5,
        dur: 3 + Math.random() * 3,
        scale: 0.45 + Math.random() * 0.55,
      });
    }
    arr.sort((a, b) => a.scale - b.scale);
    setSunflowers(arr);
  }, [isMobile]);

  const fieldHeight = isMobile ? 100 : 250;

  return (
    <div style={{
      position: 'absolute',
      bottom: 0, left: 0,
      width: '100%', 
      height: `${fieldHeight}px`,
      pointerEvents: 'none',
      zIndex: 5,
    }}>
      {/* Sunflowers */}
      {sunflowers.map((f) => (
        <div key={f.id} style={{
          position: 'absolute',
          bottom: '0px',
          left: `${f.left}%`,
          zIndex: Math.floor(f.scale * 10),
          fontSize: `${f.headSize}px`,
          textAlign: 'center',
          transformOrigin: 'bottom center',
          animation: `sway ${f.dur}s ease-in-out ${-f.delay}s infinite alternate`,
        }}>
          <div style={{ lineHeight: 1 }}>🌻</div>
          <div style={{
            width: isMobile ? '3px' : '4px',
            height: `${f.stemH}px`,
            background: 'linear-gradient(to bottom, #66bb6a, #43a047)',
            margin: '-4px auto 0',
            borderRadius: '2px',
          }}></div>
        </div>
      ))}


      {/* Cat + Butterfly Chase */}
      <div className="chase-scene" style={{
        bottom: isMobile ? '2px' : '5px',
      }}>
        <div className="butterfly-anim">
          <div style={{ transform: isMobile ? 'scale(0.6)' : 'scale(1)' }}>
            <ButterflySVG />
          </div>
        </div>
        <div className="cat-anim">
          <div style={{ transform: isMobile ? 'scale(0.55)' : 'scale(1)', transformOrigin: 'bottom left' }}>
            <CatSVG />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes sway {
          0% { transform: rotate(-6deg); }
          100% { transform: rotate(6deg); }
        }


        .chase-scene {
          position: absolute;
          left: -220px;
          width: 180px;
          height: 90px;
          z-index: 12;
          animation: roamCat 28s linear infinite;
        }

        @keyframes roamCat {
          0%   { left: -220px; transform: scaleX(1); }
          40%  { left: 65%;    transform: scaleX(1); }
          45%  { left: 65%;    transform: scaleX(1); }
          50%  { left: 65%;    transform: scaleX(-1); }
          90%  { left: -220px; transform: scaleX(-1); }
          95%  { left: -220px; transform: scaleX(-1); }
          100% { left: -220px; transform: scaleX(1); }
        }

        .cat-anim {
          position: absolute;
          bottom: 0;
          left: 0;
          animation: catWalk 0.6s infinite ease-in-out;
        }

        @keyframes catWalk {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .butterfly-anim {
          position: absolute;
          top: -20px;
          right: -5px;
          z-index: 20;
          animation: butterflyDance 3s ease-in-out infinite;
        }

        @keyframes butterflyDance {
          0%   { transform: translate(0, 0) rotate(0deg); }
          20%  { transform: translate(10px, -18px) rotate(8deg); }
          40%  { transform: translate(-8px, -28px) rotate(-5deg); }
          60%  { transform: translate(18px, -12px) rotate(10deg); }
          80%  { transform: translate(-5px, -22px) rotate(-8deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @media (max-width: 768px) {
          .chase-scene {
            width: 100px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default SunflowerField;
