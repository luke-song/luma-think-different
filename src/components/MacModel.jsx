import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function MacModel({ glb, ...props }) {
  const [active, setActive] = useState(false);
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
        geometry={nodes.Mac_Tri_Baked_MacTriBaked_0.geometry}
        material={materials["Mac.Tri.Baked"]}
        position={[-0.3, 0.3, 0]}
        scale={0.00065}
      />
    </group>
  );
}

useGLTF.preload("/mac.glb");
