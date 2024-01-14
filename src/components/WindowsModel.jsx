import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function WindowsModel({ glb, ...props }) {
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
        geometry={nodes.defaultMaterial.geometry}
        material={materials.default_1001}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        ref={meshRef}
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.default_1005}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        ref={meshRef}
        geometry={nodes.defaultMaterial_2.geometry}
        material={materials.default_1002}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        ref={meshRef}
        geometry={nodes.defaultMaterial_3.geometry}
        material={materials.default_1004}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        ref={meshRef}
        geometry={nodes.defaultMaterial_4.geometry}
        material={materials.default_1003}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        ref={meshRef}
        geometry={nodes.defaultMaterial_5.geometry}
        material={materials.default_1006}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        ref={meshRef}
        geometry={nodes.defaultMaterial_6.geometry}
        material={materials.default_1007}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      />
    </group>
  );
}
