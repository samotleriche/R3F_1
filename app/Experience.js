import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import CustomObject from "./CustomObject";
import { TransformControls } from "@react-three/drei";

const Experience = () => {
  const box = React.useRef();
  const groupRef = React.useRef();

  const sphereRef = React.useRef();

  useFrame((state, delta) => {
    // Rotate the box
    // box.current.rotation.y += delta;
    // groupRef.current.rotation.y -= delta;
    // const angle = state.clock.getElapsedTime();
    // state.camera.position.x = Math.cos(angle) * 15;
    // state.camera.position.z = Math.sin(angle) * 15;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <directionalLight position={[2, 2, 2]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh ref={sphereRef} position={[-1, 0, 0]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="red" wireframe={false} />
        </mesh>
        <TransformControls object={sphereRef} />
        <mesh ref={box} position={[-4, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="blue" wireframe={false} />
        </mesh>
      </group>
      <mesh position={[0, -2, 0]} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial
          color="purple"
          side={THREE.DoubleSide}
          wireframe={false}
        />
      </mesh>
      <CustomObject />
    </group>
  );
};

export default Experience;
