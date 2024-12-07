import React from "react";
import Typewriter from "react-typewriter-effect";

function Script() {
  return (
    <div id="app">
      <Typewriter
        text={[
          "A simple yet powerful native javascript",
          "A simple yet powerful native JS plugin for a cool typewriter effect and ",
          "A simple yet powerful native JS plugin for a cool typewriter effect and only 5kb Gzipped!",
        ]}
        cursorColor="black"
        multiTextLoop={true}
        multiTextDelay={1000}
        typeSpeed={75}
        deleteSpeed={50}
        startDelay={2500}
        textStyle={{
          fontFamily: "monospace",
          fontSize: "2rem",
        }}
      />
    </div>
  );
}

export default Script;
