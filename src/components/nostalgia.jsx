import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";

export default function Nostalgia() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 100); // Increase scroll position every 100ms

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#131316"]} />
      <ScrollControls damping={2} pages={6}>
        <Items />
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `${scrollPosition}vh`,
              right: "20vw",
              fontSize: "25em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            Mac
          </h1>
          <h1
            style={{
              position: "absolute",
              top: `${scrollPosition + 80}vh`,
              left: "10vw",
            }}
          >
            Iphone
          </h1>
          <h1
            style={{
              position: "absolute",
              top: `${scrollPosition + 160}vh`,
              right: "10vw",
            }}
          >
            Ipad
          </h1>
          <h1
            style={{
              position: "absolute",
              top: `${scrollPosition + 250}vh`,
              left: "10vw",
            }}
          >
            Remembering Steve Jobs
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

function Item({ url, scale, ...props }) {
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered ? 1 : 0,
      4,
      delta
    );
  });
  return (
    <group {...props}>
      <Image
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={scale}
        url={url}
      />
    </group>
  );
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item url="/1.jpeg" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="/2.jpeg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item
        url="/3.jpeg"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        url="/4.jpeg"
        scale={[w / 5, w / 5, 1]}
        position={[w / 4, -h * 1.2, 0]}
      />
      <Item
        url="/5.jpeg"
        scale={[w / 5, w / 5, 1]}
        position={[w / 10, -h * 1.75, 0]}
      />
      <Item
        url="/6.jpeg"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url="/7.jpeg"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 2.6, 0]}
      />
      <Item
        url="/8.jpeg"
        scale={[w / 2, w / 2, 1]}
        position={[w / 4, -h * 3.1, 0]}
      />
      <Item
        url="/12.jpeg"
        scale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
    </Scroll>
  );
}
