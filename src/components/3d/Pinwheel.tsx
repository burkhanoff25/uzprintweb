"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { useTheme } from 'next-themes';

const CMY_COLORS = ['#00AEEF', '#EC008C', '#FFC20E'];

export function Pinwheel() {
  const { resolvedTheme } = useTheme();
  
  // 4-rang (Key/Black) dark rejimda oqish/och kulrang bo'lishi kerak
  const kColor = resolvedTheme === 'dark' ? '#d4d4d8' : '#2B2B2B';
  const CMYK_COLORS = [...CMY_COLORS, kColor];

  const groupRef = useRef<THREE.Group>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const centerRef = useRef<THREE.Mesh>(null);
  
  // Parallax on mouse move
  useFrame((state) => {
    if (groupRef.current) {
      const targetRotationY = (state.pointer.x * Math.PI) / 8;
      const targetRotationX = (state.pointer.y * Math.PI) / 8;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      
      // Constant slow rotation
      groupRef.current.rotation.z -= 0.005;
    }
  });

  useEffect(() => {
    // Animate petals
    meshesRef.current.forEach((mesh, index) => {
      if (!mesh) return;
      const angle = (index * Math.PI) / 2;
      
      // Initial state
      mesh.position.set(Math.cos(angle) * 5, Math.sin(angle) * 5, -5);
      mesh.scale.set(0, 0, 0);
      mesh.rotation.z = angle;

      gsap.to(mesh.position, {
        x: Math.cos(angle) * 0.8,
        y: Math.sin(angle) * 0.8,
        z: 0,
        duration: 2,
        delay: index * 0.2,
        ease: "power3.out"
      });
      
      gsap.to(mesh.scale, {
        x: 1, y: 1, z: 1,
        duration: 2,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    // Animate center cap
    if (centerRef.current) {
      centerRef.current.scale.set(0, 0, 0);
      centerRef.current.position.set(0, 0, -2);
      
      gsap.to(centerRef.current.scale, {
        x: 1, y: 1, z: 1,
        duration: 1,
        delay: 1.5,
        ease: "back.out(1.7)"
      });
      
      gsap.to(centerRef.current.position, {
        z: 0.1,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
      });
    }
  }, []);

  // Create petal geometry
  const petalGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.5, 0, 1, 0.5, 1, 1);
    shape.bezierCurveTo(0.5, 1, 0, 0.5, 0, 0);
    
    const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.02, bevelThickness: 0.02 };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    return geometry;
  }, []);

  return (
    <group ref={groupRef} scale={1.5}>
      {CMYK_COLORS.map((color, index) => {
        return (
          <mesh
            key={index}
            ref={(el) => {
              if (el) meshesRef.current[index] = el;
            }}
            geometry={petalGeometry}
          >
            <meshStandardMaterial 
              color={color} 
              roughness={0.2} 
              metalness={0.1}
              transparent
              opacity={0.9}
            />
          </mesh>
        );
      })}
      
      {/* Center Cap */}
      <mesh ref={centerRef}>
        <cylinderGeometry args={[0.2, 0.2, 0.25, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.5} />
      </mesh>
    </group>
  );
}
