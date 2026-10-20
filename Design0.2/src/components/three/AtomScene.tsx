"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const damp = THREE.MathUtils.damp;

function Nucleus({ reduced }: { reduced: boolean }) {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    const d = reduced ? 0 : Math.min(dt, 0.05);
    if (outer.current) {
      outer.current.rotation.x += d * 0.15;
      outer.current.rotation.y += d * 0.22;
    }
    if (inner.current) inner.current.rotation.y -= d * 0.4;
  });
  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color="#f47820" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color="#f47820" emissive="#f47820" emissiveIntensity={0.6} roughness={0.35} flatShading />
      </mesh>
      <pointLight color="#f8a05a" intensity={18} distance={8} />
    </group>
  );
}

function Electron({ radius, speed, tilt, phase, reduced }: { radius: number; speed: number; tilt: [number, number, number]; phase: number; reduced: boolean }) {
  const dot = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!dot.current) return;
    const a = phase + state.clock.elapsedTime * speed * (reduced ? 0 : 1);
    dot.current.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0);
  });
  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 8, 220]} />
        <meshBasicMaterial color="#f2f0ec" transparent opacity={0.28} />
      </mesh>
      <mesh ref={dot}>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshBasicMaterial color="#fbc08d" />
      </mesh>
    </group>
  );
}

function Starfield({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    // Deterministic pseudo-random so renders are stable.
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + rand() * 9;
      const th = rand() * Math.PI * 2;
      const ph = Math.acos(2 * rand() - 1);
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th);
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      arr[i * 3 + 2] = r * Math.cos(ph);
    }
    return arr;
  }, [count]);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += Math.min(dt, 0.05) * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#b3aca4" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Rig({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (!group.current) return;
    const d = Math.min(dt, 0.05);
    group.current.rotation.y = damp(group.current.rotation.y, THREE.MathUtils.clamp(state.pointer.x, -1, 1) * 0.45, 2.5, d);
    group.current.rotation.x = damp(group.current.rotation.x, -THREE.MathUtils.clamp(state.pointer.y, -1, 1) * 0.3, 2.5, d);
  });
  return (
    <group ref={group}>
      <Nucleus reduced={reduced} />
      <Electron radius={2.3} speed={0.9} tilt={[1.2, 0.2, 0]} phase={0} reduced={reduced} />
      <Electron radius={2.8} speed={0.65} tilt={[0.3, 1.1, 0.4]} phase={2} reduced={reduced} />
      <Electron radius={3.3} speed={0.5} tilt={[-0.6, -0.5, 0.9]} phase={4} reduced={reduced} />
      <Starfield />
    </group>
  );
}

export default function AtomScene({ active = true, reduced = false }: { active?: boolean; reduced?: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      eventSource={typeof document !== "undefined" ? document.documentElement : undefined}
      eventPrefix="client"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 9], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <Rig reduced={reduced} />
    </Canvas>
  );
}
