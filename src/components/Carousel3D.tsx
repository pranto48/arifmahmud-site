
import React, { useEffect, useRef } from 'react';

interface Carousel3DProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const Carousel3D: React.FC<Carousel3DProps> = ({ images }) => {
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const spinContainerRef = useRef<HTMLDivElement>(null);
  const radiusRef = useRef(240); // Use ref to maintain radius state

  // Configuration
  const autoRotate = true;
  const rotateSpeed = -60;
  const imgWidth = 120;
  const imgHeight = 170;

  useEffect(() => {
    const odrag = dragContainerRef.current;
    const ospin = spinContainerRef.current;
    
    if (!odrag || !ospin) return;

    const aImg = ospin.getElementsByTagName('img');
    const aEle = [...aImg];

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Initialize carousel
    const init = (delayTime?: number) => {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radiusRef.current}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime ? `${delayTime}s` : `${(aEle.length - i) / 4}s`;
      }
    };

    // Apply transform
    let tX = 0, tY = 10;
    const applyTransform = (obj: HTMLElement) => {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    const playSpin = (yes: boolean) => {
      ospin.style.animationPlayState = yes ? 'running' : 'paused';
    };

    // Auto spin
    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    // Mouse/touch events
    let sX: number, sY: number, desX = 0, desY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      clearInterval((odrag as any).timer);
      sX = e.clientX;
      sY = e.clientY;

      const handlePointerMove = (e: PointerEvent) => {
        const nX = e.clientX;
        const nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
      };

      const handlePointerUp = () => {
        (odrag as any).timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval((odrag as any).timer);
            playSpin(true);
          }
        }, 17);
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
      };

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Use deltaY for better cross-browser compatibility
      const delta = e.deltaY > 0 ? -20 : 20;
      radiusRef.current = Math.max(100, Math.min(400, radiusRef.current + delta));
      
      // Re-initialize with new radius
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radiusRef.current}px)`;
        aEle[i].style.transition = "transform 0.1s";
      }
    };

    // Add event listeners
    odrag.addEventListener('pointerdown', handlePointerDown);
    odrag.addEventListener('wheel', handleWheel, { passive: false });

    // Initialize after delay
    setTimeout(() => init(), 1000);

    return () => {
      odrag.removeEventListener('pointerdown', handlePointerDown);
      odrag.removeEventListener('wheel', handleWheel);
      clearInterval((odrag as any).timer);
    };
  }, [images]);

  return (
    <div className="w-full h-[600px] relative overflow-hidden bg-black rounded-lg">
      <style>
        {`
          @keyframes spin {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
          @keyframes spinRevert {
            from { transform: rotateY(360deg); }
            to { transform: rotateY(0deg); }
          }
        `}
      </style>
      
      <div 
        ref={dragContainerRef}
        className="relative flex m-auto h-full"
        style={{ 
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-10deg)'
        }}
      >
        <div 
          ref={spinContainerRef}
          className="relative flex m-auto"
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="absolute left-0 top-0 w-full h-full object-cover cursor-pointer transition-all duration-300"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 0 8px #fff',
                filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.3))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px #fffd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 8px #fff';
              }}
            />
          ))}
          
          <p 
            className="absolute text-white font-serif text-xl"
            style={{
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotateX(90deg)',
              fontFamily: 'serif'
            }}
          >
            Arif Gallery
          </p>
        </div>
        
        <div 
          className="absolute bg-gradient-radial from-white/20 to-transparent rounded-full"
          style={{
            width: '720px',
            height: '720px',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotateX(90deg)',
            background: 'radial-gradient(center center, farthest-side, rgba(255,255,255,0.2), transparent)'
          }}
        />
      </div>
    </div>
  );
};

export default Carousel3D;
