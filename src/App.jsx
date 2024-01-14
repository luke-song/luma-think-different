import "./App.css";
import TypeIt from "typeit-react";
import { useInView } from "react-intersection-observer";
import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Pumpkin from "./components/Pumpkin";
import Mac from "./components/Mac";
import Windows from "./components/Windows";
import Nostalgia from "./components/nostalgia";
import Quote from "./components/Quote";
import TypeItComponent from "./components/typingAnimation";

export default function App() {
  const section1Ref = useRef();
  const { ref: section2Ref, inView: section2InView } = useInView({
    threshold: 0.5,
  });
  const { ref: section3Ref, inView: section3InView } = useInView({
    threshold: 0.5,
  });
  const { ref: section4Ref, inView: section4InView } = useInView();

  const renderInView = (inView, Component) => inView && <Component />;

  return (
    <div className="container">
      <section ref={section1Ref} className="intro-section">
        <div className="fade-in-first">You can’t connect</div>
        <div className="fade-in-second">the dots looking forward</div>
        <div className="bouncing-circle">
          <div className="inner-circle"></div>
        </div>
      </section>

      <section ref={section2Ref} className="three-section">
        {renderInView(section2InView, () => (
          <>
            <div className="fade-in row">
              <div>
                <p className="padding-left">
                  If you try to predict your future you will fail
                </p>
              </div>
              <div className="centered pumpkin">
                <Pumpkin glb="/pumpkin.glb" />
              </div>
            </div>
            <div className="fade-in row mobile-order">
              <div className="centered pumpkin">
                <Pumpkin glb="/pumpkin.glb" />
              </div>
              <div>
                <p className="padding-right">
                  because it never goes the way you want.
                </p>
              </div>
            </div>
          </>
        ))}
      </section>

      <section ref={section3Ref} id="section3">
        {renderInView(section3InView, Quote)}
      </section>

      <section
        id="section4"
        ref={section4Ref}
        className="fade-in"
        style={{ backgroundColor: "var(--Black)", position: "relative" }}
      >
        <Mac glb="/mac.glb" />

        <Windows glb="/windows.glb" />
      </section>
      <section>
        {section4InView && (
          <>
            <div>
              <TypeItComponent
                text="You can't connect the dots looking forward; you can only connect
            them looking backwards. So you have to trust that the dots will
            somehow connect in your future."
              />
            </div>

            <Nostalgia />
          </>
        )}
      </section>
    </div>
  );
}
