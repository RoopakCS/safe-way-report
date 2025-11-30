/* eslint-disable react/no-unknown-property */
'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  cardImage?: string;
}

export default function Lanyard({ 
  position = [0, 0, 30], 
  gravity = [0, -40, 0], 
  fov = 20, 
  transparent = true,
  cardImage 
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 3, 5]} intensity={0.8} />
        <pointLight position={[0, 4, 8]} intensity={1.5} color="#FFD700" />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} cardImage={cardImage} />
        </Physics>
        <Environment blur={0.5} preset="city">
          <Lightformer
            intensity={1.5}
            color="#FFD700"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={2}
            color="#FFA500"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={2}
            color="#FFD700"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false, cardImage }: { maxSpeed?: number; minSpeed?: number; isMobile: boolean; cardImage?: string }) {
  const band = useRef<any>(),
    fixed = useRef<any>(),
    j1 = useRef<any>(),
    j2 = useRef<any>(),
    j3 = useRef<any>(),
    card = useRef<any>(),
    frameCount = useRef(0);

  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();

  const segmentProps = { 
    type: 'dynamic' as const, 
    canSleep: true, 
    colliders: false, 
    angularDamping: 4, 
    linearDamping: 4 
  };

  // Create card geometry - rectangular aspect ratio (wider than tall)
  const [cardGeometry] = useState(() => {
    // Make it rectangular: width 2.4, height 1.6 (3:2 aspect ratio)
    const geometry = new THREE.PlaneGeometry(2.4, 1.6);
    return geometry;
  });

  // Load card texture - useTexture must be called unconditionally
  // Create a fallback texture first
  const [fallbackTexture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(canvas);
  });

  // Always call useTexture hook (React hooks must be called unconditionally)
  // useTexture from drei handles errors internally, but we provide a fallback source
  const textureSource = cardImage || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
  
  // useTexture must be called unconditionally - drei will handle loading errors
  let cardTexture: THREE.Texture;
  try {
    // Always call the hook - it must be unconditional
    cardTexture = useTexture(textureSource);
  } catch {
    // If useTexture throws (shouldn't happen, but just in case), use fallback
    cardTexture = fallbackTexture;
  }

  // Create stylish lanyard texture with pattern and glow effect
  const [lanyardTexture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    
    // Create a sophisticated gradient with multiple stops
    const gradient = ctx.createLinearGradient(0, 0, 0, 128);
    gradient.addColorStop(0, '#FFD700'); // Bright gold
    gradient.addColorStop(0.25, '#FFA500'); // Orange gold
    gradient.addColorStop(0.5, '#FFD700'); // Bright gold
    gradient.addColorStop(0.75, '#FF8C00'); // Darker orange
    gradient.addColorStop(1, '#FFD700'); // Bright gold
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    
    // Add a subtle pattern/stripe effect
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 128; i += 8) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(128, i);
      ctx.stroke();
    }
    
    // Add a subtle glow effect in the center
    const glowGradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    glowGradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)');
    glowGradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, 128, 128);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return texture;
  });

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );

  // Reference for tube geometry
  const tubeGeometryRef = useRef<THREE.TubeGeometry | null>(null);

  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  // Create joints - these connect the lanyard segments
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  // Ensure fixed point stays fixed and initialize positions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (fixed.current) {
        fixed.current.setType('fixed');
        fixed.current.setTranslation({ x: 0, y: 0, z: 0 });
      }
      if (j1.current) j1.current.setTranslation({ x: 0.5, y: 0, z: 0 });
      if (j2.current) j2.current.setTranslation({ x: 1, y: 0, z: 0 });
      if (j3.current) j3.current.setTranslation({ x: 1.5, y: 0, z: 0 });
      if (card.current) card.current.setTranslation({ x: 2, y: 0, z: 0 });
      
      // Initialize tube geometry
      if (band.current && curve) {
        const segments = isMobile ? 16 : 32;
        const radius = 0.06;
        const radialSegments = 4; // Rectangular cross-section
        tubeGeometryRef.current = new THREE.TubeGeometry(
          curve,
          segments,
          radius,
          radialSegments,
          false
        );
        band.current.geometry = tubeGeometryRef.current;
      }
    }, 200);
    return () => {
      clearTimeout(timer);
      if (tubeGeometryRef.current) {
        tubeGeometryRef.current.dispose();
      }
    };
  }, [curve, isMobile]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      // Get current card position to maintain z depth
      const cardPos = card.current.translation();
      const currentZ = cardPos.z;
      
      // Project pointer to a plane at the card's current z depth
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      
      // Calculate intersection with plane at card's z position
      const t = (currentZ - state.camera.position.z) / dir.z;
      vec.copy(state.camera.position).add(dir.multiplyScalar(t));
      
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      const offset = dragged as THREE.Vector3;
      
      // Apply offset and constrain positions
      const targetX = vec.x - offset.x;
      const targetY = Math.max(-3, Math.min(3, vec.y - offset.y)); // Constrain y to prevent falling too far
      const targetZ = currentZ; // Keep z at current depth
      
      card.current.setNextKinematicTranslation({ 
        x: targetX, 
        y: targetY, 
        z: targetZ
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      if (j3.current && j2.current && j1.current) {
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation());

        // Update tube geometry to follow the curve (update every frame for smooth movement)
        if (band.current) {
          frameCount.current++;
          // Update geometry every frame for smooth following
          const segments = isMobile ? 16 : 32;
          const radius = 0.06; // Width of the rectangular strap
          const radialSegments = 4; // Rectangular cross-section (4 sides = flat rectangle)
          
          // Dispose old geometry if it exists
          if (tubeGeometryRef.current) {
            tubeGeometryRef.current.dispose();
          }
          
          // Create new tube geometry following the curve
          tubeGeometryRef.current = new THREE.TubeGeometry(
            curve,
            segments,
            radius,
            radialSegments,
            false
          );
          
          // Update the mesh geometry
          band.current.geometry = tubeGeometryRef.current;
        }

        if (card.current) {
          ang.copy(card.current.angvel());
          rot.copy(card.current.rotation());
          card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
        }
      }
    }
  });

  curve.curveType = 'chordal';
  if (cardTexture) {
    cardTexture.wrapS = cardTexture.wrapT = THREE.RepeatWrapping;
  }

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" position={[0, 0, 0]}>
          <BallCollider args={[0.05]} />
        </RigidBody>
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[1.2, 0.8, 0.01]} />
          <group
            scale={1.8}
            position={[0, -0.8, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              if (e.target.releasePointerCapture) {
                e.target.releasePointerCapture(e.pointerId);
              }
              drag(false);
            }}
            onPointerDown={(e: any) => {
              if (e.target.setPointerCapture) {
                e.target.setPointerCapture(e.pointerId);
              }
              // Calculate offset from card center to click point
              const clickPoint = new THREE.Vector3().copy(e.point);
              const translation = card.current?.translation();
              if (translation) {
                const cardPos = new THREE.Vector3(translation.x, translation.y, translation.z);
                const offset = new THREE.Vector3().subVectors(clickPoint, cardPos);
                drag(offset);
              }
            }}
          >
            <mesh geometry={cardGeometry}>
              <meshPhysicalMaterial
                map={cardTexture}
                map-anisotropy={16}
                clearcoat={isMobile ? 0.5 : 1}
                clearcoatRoughness={0.1}
                roughness={0.3}
                metalness={0.2}
                side={THREE.DoubleSide}
                emissive={new THREE.Color(0x000000)}
                emissiveIntensity={0}
              />
            </mesh>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshStandardMaterial
          map={lanyardTexture}
          color="#FFD700"
          metalness={0.7}
          roughness={0.2}
          side={THREE.DoubleSide}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>
    </>
  );
}
