"use client";
import { useRef } from 'react';
import TextPressure from "../components/TextPressure/TextPressure";
import VariableProximity from "../components/VariableProximity/VariableProximity";

export default function About() {
  const containerRef = useRef(null);

  return (
    <>
      <div className="relative ">
        <TextPressure
          text="I'm Diaz"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <div>
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"I'm Diaz, 18, an Information Technology student at Universitas Gadjah Mada in Yogyakarta. My journey began with a strong interest in design and documentation, but my curiosity has since led me to a profound fascination with software engineering. Beyond my academic requirements, I am dedicated to exploring this field, constantly seeking new knowledge and practical experiences. My goal is to apply my problem-solving skills and creative approach to develop robust and user-centric software."}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </div>
    </>
  );
}
