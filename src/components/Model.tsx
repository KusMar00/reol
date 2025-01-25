import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const Model = () => {
  const { nodes } = useGLTF("medias/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
    }
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text position={[0, 0, -1]} fontSize={0.5}>
        Hello, World!
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
