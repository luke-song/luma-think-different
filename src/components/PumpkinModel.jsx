import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function PumpkinModel({ glb, ...props }) {
  const [isHovered, setIsHovered] = useState(true);
  const groupRef = useRef();
  const meshRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.01;
  });

  const { nodes, materials } = useGLTF(glb);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
      />
    </group>
  );
}
useGLTF.preload("/pumpkin.glb");
