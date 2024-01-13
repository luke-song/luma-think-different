import LeonSans from "@nindaff/leonsans";
import { useMediaQuery } from "react-responsive";
import React, { useRef, useEffect } from "react";
import { TweenMax, Power4 } from "gsap";

export default function Quote() {
  const canvasRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 405px)" });

  useEffect(() => {
    const sw = isMobile ? 400 : 1800;
    const sh = isMobile ? 800 : 800;
    const pixelRatio = 2;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + "px";
    canvas.style.height = sh + "px";
    ctx.scale(pixelRatio, pixelRatio);

    const lines = [
      "Embrace now, trust in connectivity.",
      "Embrace now, trust in connectivity.",
      "Embrace now, trust in connectivity.",
      "Embrace now, trust in connectivity.",
      "Embrace now, trust in connectivity.",
      "Embrace now, trust in connectivity.",
      "Embrace now, trust in connectivity.",
      "Embrace now, trust in connectivity.",
    ];

    const leons = lines.map(
      (line, index) =>
        new LeonSans({
          text: line,
          color: ["#000000"],
          size: isMobile ? 20 : 80,
          weight: 400,
        })
    );

    const animate = (t) => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, sw, sh);

      leons.forEach((leon, index) => {
        const x = (sw - leon.rect.w) / 2;
        const y = index * 100;
        leon.position(x, y);
        leon.draw(ctx);
      });
    };

    animate();

    leons.forEach((leon, index) => {
      let i,
        total = leon.drawing.length;
      for (i = 0; i < total; i++) {
        TweenMax.fromTo(
          leon.drawing[i],
          0.8,
          {
            value: 0,
          },
          {
            delay: i * 0.5,
            value: 1,
            ease: Power4.easeOut,
          }
        );
      }
    });
  }, []);

  return <canvas ref={canvasRef} />;
}
