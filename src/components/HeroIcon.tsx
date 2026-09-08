"use client";

import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function HeroIcon() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [25, -25]);
  const rotateY = useTransform(x, [-200, 200], [-25, 25]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }
        }}
        className="relative w-full h-full max-w-[400px] max-h-[400px] md:max-w-[500px] md:max-h-[500px] flex items-center justify-center"
      >
        <img 
          src="/uzprint icon.png" 
          alt="UZPRINT 3D Icon" 
          className="w-4/5 h-4/5 object-contain drop-shadow-[0_20px_50px_rgba(236,0,140,0.3)] transition-all duration-300"
        />
        
        {/* Glow effect that floats above the image to create depth */}
        <motion.div 
          style={{ translateZ: 50 }}
          className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-30 blur-2xl mix-blend-overlay pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
