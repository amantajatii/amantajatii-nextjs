// components/TypewriterText.jsx
"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterText({
  strings = ["Hello", "World"],
  className = "",
  wrapperClassName = "text-5xl md:text-7xl font-extrabold tracking-tight leading-none",
  cursorClassName = "text-5xl md:text-7xl",
  pauseFor = 1500,
  delay = 150
}) {
  return (
    <div className={className}>
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop: true,
          wrapperClassName,
          cursorClassName,
          pauseFor, 
          delay, 
        }}
      />
    </div>
  );
}
