"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import * as THREE from "three";

export default function Home() {
  return (
    <main>
      <Canvas
        // orthographic
        flat
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.CineonToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
        }}
      >
        <OrbitControls />
        <Experience />
      </Canvas>
    </main>
  );
}
