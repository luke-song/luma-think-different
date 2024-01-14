// src/components/TypeItComponent.jsx
import React, { useState } from "react";
import TypeIt from "typeit-react";
import { useMediaQuery } from "react-responsive";

export default function TypeItComponent({ text }) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <TypeIt
      options={{ speed: 50 }}
      style={{
        fontSize: isMobile ? "14px" : "inherit",
        lineHeight: isMobile ? "1.0" : "normal",
        color: isHovered ? "white" : "grey", // Change color on hover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </TypeIt>
  );
}
