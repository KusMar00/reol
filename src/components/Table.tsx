import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useConfigurator } from "../contexts/Configurator";
import { useEffect, useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Plate: THREE.Mesh;
    Legs01Left: THREE.Mesh;
    Legs01Right: THREE.Mesh;
    Legs02Left: THREE.Mesh;
    Legs02Right: THREE.Mesh;
    Legs03Left: THREE.Mesh;
    Legs03Right: THREE.Mesh;
  };
  materials: {
    Plate: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
  };
};

const ANIMATION_SPEED = 12;

export function Table(props: GroupProps) {
  const { nodes, materials } = useGLTF("./medias/Table.gltf") as GLTFResult;
  const { legs, legsColor, tableWidth } = useConfigurator()!;

  const plate = useRef<THREE.Mesh>(null);
  const leftLegs = useRef<THREE.Mesh>(null);
  const rightLegs = useRef<THREE.Mesh>(null);

  useEffect(() => {
    materials.Metal.color = new THREE.Color(legsColor);
  }, [legsColor]);

  useFrame((_state, delta) => {
    const tableWidthScale = tableWidth / 100;
    const targetScale = new THREE.Vector3(tableWidthScale, 1, 1);

    plate.current!.scale.lerp(targetScale, delta * ANIMATION_SPEED);

    const targetLeftPosition = new THREE.Vector3(-1.5 * tableWidthScale, 0, 0);
    leftLegs.current!.position.lerp(
      targetLeftPosition,
      delta * ANIMATION_SPEED
    );

    const targetRightPosition = new THREE.Vector3(1.5 * tableWidthScale, 0, 0);
    rightLegs.current!.position.lerp(
      targetRightPosition,
      delta * ANIMATION_SPEED
    );
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plate.geometry}
        material={materials.Plate}
        ref={plate}
      />
      {legs === 0 && (
        <>
          <mesh
            geometry={nodes.Legs01Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            ref={leftLegs}
          />
          <mesh
            geometry={nodes.Legs01Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            ref={rightLegs}
          />
        </>
      )}
      {legs === 1 && (
        <>
          <mesh
            geometry={nodes.Legs02Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            ref={leftLegs}
          />
          <mesh
            geometry={nodes.Legs02Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            ref={rightLegs}
          />
        </>
      )}
      {legs === 2 && (
        <>
          <mesh
            geometry={nodes.Legs03Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            ref={leftLegs}
          />
          <mesh
            geometry={nodes.Legs03Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            ref={rightLegs}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("./medias/Table.gltf");
