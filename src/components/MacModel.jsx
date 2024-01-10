import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function MacModel({ glb, ...props }) {
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(true);
  const groupRef = useRef();
  const meshRef = useRef();

  useFrame(() => {
    if (isHovered) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const { nodes, materials } = useGLTF(glb);

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      onPointerOver={() => setIsHovered(false)}
      onPointerOut={() => setIsHovered(true)}
    >
      <mesh
        ref={meshRef}
        geometry={nodes.Mac_Tri_Baked_MacTriBaked_0.geometry}
        material={materials["Mac.Tri.Baked"]}
        position={[-0.222, 0, 0]}
        scale={active ? 0.0011 : 0.001}
        onClick={() => setActive(!active)}
      />
    </group>
  );
}

useGLTF.preload("/mac.glb");
