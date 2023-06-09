import { useEffect, useRef, useMemo, React } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CustomObject = () => {
  const geomRef = useRef();
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
  });

  const verticesCount = 10 * 3;

  const positions = useMemo(() => {
    console.log("running use Memo");
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 6;
    }

    return positions;
  }, []);

  useEffect(() => {
    console.log("running use effect");
    geomRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh ref={meshRef} position={[6, 0, 0]}>
      <bufferGeometry ref={geomRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial side={THREE.DoubleSide} color="red" />
    </mesh>
  );
};

export default CustomObject;
