import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Model from "./WindowsModel";

export default function Windows({ glb, geometry, material }) {
  return (
    <Canvas style={{ width: "100vh", height: "50vh" }}>
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight position={[0, 0, 5]} color="white" />
      <pointLight position={[10, 10, 10]} />
      <Model glb={glb} geometry={geometry} material={material} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
    </Canvas>
  );
}
