
import { useEffect, useRef } from 'react';

interface ParticleNetworkOptions {
  particleColor: string;
  background: string | null;
  interactive: boolean;
  speed: 'fast' | 'slow' | 'none';
  density: 'high' | 'low' | number;
}

declare class ParticleNetwork {
  constructor(element: HTMLElement, options: ParticleNetworkOptions);
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const options = {
      particleColor: '#666',
      background: null,
      interactive: true,
      speed: 'fast' as const,
      density: 'high' as const
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/JulianLaval/canvas-particle-network/particle-network.min.js';
    script.onload = () => {
      new (window as any).ParticleNetwork(canvasRef.current, options);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom right, #1a1f2c, #2d364c)' }}
    />
  );
}
