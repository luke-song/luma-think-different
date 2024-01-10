import "./App.css";
import TypeIt from "typeit-react";
import { useInView } from "react-intersection-observer";
import React, { useRef, useState } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Mac from "./components/Mac";
import Windows from "./components/Windows";
import HelloWorld from "./components/HelloWorld";

export default function App() {
  const section1Ref = useRef();
  const { ref: section2Ref, inView: section2InView } = useInView();
  const { ref: section3Ref, inView: section3InView } = useInView();
  const { ref: section4Ref, inView: section4InView } = useInView();
  const { ref: section5Ref, inView: section5InView } = useInView();
  const { ref: section6Ref, inView: section6InView } = useInView();

  const [isScrollDownButtonHovered, setScrollDownButtonHovered] =
    useState(false);

  const TypeItComponent = ({ text }) => (
    <TypeIt options={{ speed: 50 }}>{text}</TypeIt>
  );

  const renderInView = (inView, Component) => inView && <Component />;

  return (
    <div className="container">
      <section className="intro-section">
        <div className="fade-in-out">
          Once upon a time, one college student dropped out.
        </div>
        <button
          className="scroll-down-button"
          onMouseEnter={() => setScrollDownButtonHovered(true)}
          onMouseLeave={() => setScrollDownButtonHovered(false)}
          onClick={() =>
            section1Ref.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            color={isScrollDownButtonHovered ? "black" : "white"}
            size="3x"
          />
        </button>
      </section>

      <section ref={section1Ref} id="3d-section">
        Something
      </section>

      <section ref={section2Ref}>
        <p>
          {section2InView && (
            <div className="fade-in">
              Dropping in, he discovered calligraphy.
            </div>
          )}
        </p>
      </section>

      <section ref={section3Ref}>
        {renderInView(section3InView, HelloWorld)}
      </section>
      <section ref={section4Ref}>
        <div className="fade-in">
          <div>
            {renderInView(section4InView, () => (
              <TypeItComponent text="The mac would have never had multiple typefaces or proportionally spaced fonts." />
            ))}
          </div>
          <div className="centered">
            {renderInView(section4InView, () => (
              <Mac glb="/mac.glb" />
            ))}
          </div>
        </div>
      </section>

      <section ref={section5Ref}>
        <div className="fade-in">
          <div>
            {renderInView(section5InView, () => (
              <TypeItComponent text="And Since the Windows just copied the Mac, it's likely that no personal computer would have them." />
            ))}
          </div>
          <div className="centered">
            {renderInView(section5InView, () => (
              <Windows glb="/windows.glb" />
            ))}
          </div>
        </div>
      </section>

      <section
        id="section6"
        ref={section6Ref}
        className="fade-in"
        style={{ backgroundColor: "white", position: "relative" }}
      >
        <div>
          {section6InView && (
            <div className="fade-in" style={{ color: "black" }}>
              You can’t connect the dots looking forward; you can only connect
              them looking backwards. So you have to trust that the dots will
              somehow connect in your future. You have to trust in something —
              your gut, destiny, life, karma, whatever.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
