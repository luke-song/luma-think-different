import "./App.css";
import TypeIt from "typeit-react";
import { useInView } from "react-intersection-observer";
import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Pumpkin from "./components/Pumpkin";
import Nostalgia from "./components/nostalgia";
import Quote from "./components/Quote";

export default function App() {
  const section1Ref = useRef();
  const { ref: section2Ref, inView: section2InView } = useInView();
  const { ref: section3Ref, inView: section3InView } = useInView();
  const { ref: section4Ref, inView: section4InView } = useInView();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const TypeItComponent = ({ text }) => (
    <TypeIt
      options={{ speed: 50 }}
      style={{
        fontSize: isMobile ? "14px" : "inherit",
        lineHeight: isMobile ? "1.0" : "normal", // Adjust the line heights as needed
      }}
    >
      {text}
    </TypeIt>
  );

  const renderInView = (inView, Component) => inView && <Component />;

  return (
    <div className="container">
      <section ref={section1Ref} className="intro-section">
        <div className="fade-in-out">
          You can’t connect the dots looking forward
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
      ></section>
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
