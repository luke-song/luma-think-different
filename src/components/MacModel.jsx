import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export default function MacModel({ glb, ...props }) {
  const [active, setActive] = useState(false);
  const groupRef = useRef();
  const meshRef = useRef();
  // Inside your component
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  // Use a smaller scale for small screens
  const scale = isSmallScreen ? 0.0004 : 0.00065;

  useFrame(() => {
    if (!isSmallScreen) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const { nodes, materials } = useGLTF(glb);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.Mac_Tri_Baked_MacTriBaked_0.geometry}
        material={materials["Mac.Tri.Baked"]}
        position={[-0.3, 0.3, 0]}
        scale={scale}
      />
    </group>
  );
}

useGLTF.preload("/mac.glb");
