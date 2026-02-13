import ImageSlider from './components/ImageSlider';
import BackgroundMusic from './components/BackgroundMusic';
import SunflowerField from './components/SunflowerField';

export default function Home() {
  // Array of images from the public/img folder
  const images = [
    '/img/S__60940291_0.jpg',
    '/img/S__60940292_0.jpg',
    '/img/S__60940293_0.jpg',
    '/img/S__60940294_0.jpg',
    '/img/S__60940295_0.jpg',
    '/img/S__60940296_0.jpg',
    '/img/S__60940297_0.jpg',
    '/img/S__60940298_0.jpg',
    '/img/S__60940299.jpg',
  ];

  return (
    <main>
      <BackgroundMusic />
      
      {/* Section 1: Hero */}
      <div className="pastel-section bg-gradient-1">
        <div className="content-box floating-element">
          <h1 style={{ fontSize: '3rem', margin: '0' }}>Happy Valentine's Day</h1>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#888' }}>My Love & My Everything</p>
          <div style={{ fontSize: '4rem', marginTop: '1rem' }} className="heart-icon">❤️</div>
        </div>
        <SunflowerField />
      </div>

      {/* Section 2: Message */}
      <section className="pastel-section bg-gradient-2">
        <div className="content-box">
          <h2>To My Special Someone</h2>
          <p>
            Every moment with you is a treasure. I wanted to create something special to celebrate our love and the beautiful memories we've shared.
          </p>
          <p>
            You bring so much color into my world, simply by being you.
          </p>
          <p style={{ fontWeight: 'bold', color: 'var(--highlight)' }}>I love you more than words can say.</p>
        
          <h2>ถึงคนพิเศษของเค้า</h2>
          <p>
            ขอบคุณนะที่อยู่ข้างๆ กันมาตลอด ตั้งใจทำเว็บนี้ให้เป็นของขวัญเล็กๆ น้อยๆ เอาไว้เก็บความทรงจำดีๆ ของเราสองคน
          </p>
          <p>
             เธอทำให้โลกของเค้าสดใสขึ้นเยอะเลย แค่เธอเป็นตัวเองแบบนี้แหละ น่ารักที่สุดแล้ว
          </p>
          <p style={{ fontWeight: 'bold', color: 'var(--highlight)' }}>รักเธอนะ รักมากๆ เลย ❤️</p>
        </div>
      </section>



      {/* Section 3: Gallery Intro */}
      <div className="pastel-section bg-gradient-3" style={{ minHeight: '40vh' }}>
        <div className="content-box" style={{ padding: '2rem' }}>
          <h2>Our Memories</h2>
          <p style={{ marginBottom: 0 }}>Capturing our beautiful moments together</p>
        </div>
      </div>

      {/* Section 4: Slider */}
      <section className="pastel-section bg-gradient-2" style={{ flexDirection: 'column' }}>
        <h3 style={{ marginBottom: '2rem' }}>A Collection of Us</h3>
        <ImageSlider images={images} />
        <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.9rem' }}>Swipe to see more</p>
      </section>


      {/* Section 5: Closing */}
      <div className="pastel-section bg-gradient-4" style={{ minHeight: '60vh' }}>
        <div className="content-box floating-element">
          <h2>Forever & Always</h2>
          <div style={{ fontSize: '3rem' }}>💑</div>
        </div>
        <SunflowerField />
      </div>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', background: 'var(--background)', color: 'var(--foreground)' }}>
        <p style={{fontSize: '0.8rem', opacity: 0.7}}>Made with ❤️ for you | Valentine's Day 2026</p>
      </footer>
    </main>
  );
}
