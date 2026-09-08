"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { Pinwheel } from './Pinwheel';

export default function HeroCanvas() {
  return (
    <div className="w-full h-full z-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00AEEF" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Pinwheel />
        </Float>
      </Canvas>
    </div>
  );
}
