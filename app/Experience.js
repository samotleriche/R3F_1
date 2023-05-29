import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import CustomObject from "./CustomObject";
import {
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  MeshDistortMaterial,
  PointMaterial,
} from "@react-three/drei";
import { useControls } from "leva";

const Experience = () => {
  const { position } = useControls({});

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
        <mesh ref={sphereRef} position={[-1, -1, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="red" wireframe={false} />
        </mesh>
        <TransformControls object={sphereRef} />
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={5}
          axisColors={["red", "red", "red"]}
          scale={60}
          fixed={true}
        >
          <mesh ref={box} position={[-4, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="blue" wireframe={false} />
            <Html
              wrapperClass="label"
              position={[1, 2, 0]}
              occlude={[box, sphereRef]}
              center
            >
              <h1>This is a box 🐝</h1>
            </Html>
          </mesh>
        </PivotControls>
        {/* <TransformControls object={box} /> */}
      </group>
      <mesh position={[0, -3, 0]} scale={20} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        {/* <meshStandardMaterial
          color="purple"
          side={THREE.DoubleSide}
          wireframe={false}
        /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.75}
          color={"purple"}
        />
      </mesh>
      <CustomObject />

      <Float speed={5}>
        <Text position={[0, 1, -2]} font="./bangers.woff">
          Troika Test
          <meshNormalMaterial side={THREE.DoubleSide} />
        </Text>
      </Float>
      <mesh position={[-1, 3, 0]}>
        <boxGeometry />
        <MeshWobbleMaterial color={"purple"} speed={5} factor={2} />
      </mesh>
      <mesh position={[2, 4, 0]}>
        <boxGeometry />
        <MeshDistortMaterial />
      </mesh>
      <points>
        <PointMaterial
          vertexColors
          size={1}
          sizeAttenuation={false}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export default Experience;
