import "./App.css";
import TypeIt from "typeit-react";
import { useInView } from "react-intersection-observer";
import React, { useRef, useState } from "react"; //useReducer, useMemo
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Fisheye,
  CameraControls,
  PerspectiveCamera,
  Environment,
  useGLTF,
} from "@react-three/drei";

export default function App() {
  const { ref: sectionRef, inView: sectionInView } = useInView();
  const { ref: section1Ref, inView: section1InView } = useInView();
  const { ref: section2Ref, inView: section2InView } = useInView();
  const { ref: section3Ref, inView: section3InView } = useInView();
  const { ref: section4Ref, inView: section4InView } = useInView();
  const { ref: section5Ref, inView: section5InView } = useInView();
  const { ref: section6Ref, inView: section6InView } = useInView();

  return (
    <div className="container">
      <section ref={sectionRef} className="">
        <div className="fade-in-out">
          Once upon a time, one college student dropped out.
        </div>
        <button
          className="scroll-down-button"
          onClick={() =>
            section1Ref.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section>

      <section ref={section1Ref}>
        <Canvas flat>
          {/* <Fisheye zoom={0}> */}
          {/* <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} /> */}
          <ambientLight intensity={Math.PI / 2} />
          <directionalLight position={[0, 0, 5]} color="white" />
          <pointLight position={[10, 10, 10]} />
          <RotatingBox />
          <Environment preset="city" background blur={1} />
          <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
          {/* </Fisheye> */}
        </Canvas>
      </section>

      <section ref={section2Ref}>
        <p>
          {section2InView && (
            <TypeIt options={{ speed: 50 }}>
              Dropping in, he met calligraphy.
            </TypeIt>
          )}
        </p>
      </section>

      <section ref={section3Ref}>
        <p>
          {section3InView && (
            <TypeIt options={{ speed: 50 }}>“Hello World!”</TypeIt>
          )}
        </p>
      </section>

      <section ref={section4Ref}>
        <p>
          {section4InView && (
            <TypeIt options={{ speed: 50 }}>
              The mac would have never had multiple typefaces or proportionally
              spaced fonts.
            </TypeIt>
          )}
        </p>
      </section>

      <section ref={section4Ref}>
        <p>
          {section4InView && (
            <TypeIt options={{ speed: 50 }}>
              And Since the Windows just copied the Mac, it's likely that no
              personal computer would have them.
            </TypeIt>
          )}
        </p>
      </section>

      <section ref={section5Ref}>
        <p>
          {section5InView && (
            <TypeIt options={{ speed: 50 }}>
              You can’t connect the dots looking forward; you can only connect
              them looking backwards. So you have to trust that the dots will
              somehow connect in your future. You have to trust in something —
              your gut, destiny, life, karma, whatever.
            </TypeIt>
          )}
        </p>
      </section>

      <section ref={section6Ref}>
        {section6InView && <p>Sorry. Will be Ready Soon</p>}
      </section>
    </div>
  );
}

function RotatingBox() {
  const [active, setActive] = useState(false);

  // const { nodes, materials } = useGLTF("/model.glb");

  const ref = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh ref={ref} onClick={() => setActive(!active)} scale={active ? 1.5 : 1}>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial color="white" />
    </mesh>
  );
}
