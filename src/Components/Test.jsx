import { useEffect, useRef } from 'react';
import autotyper from 'autotyper';

function Test() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const example = Object.create(autotyper);
    const element = typewriterRef.current;
    const options = {
      text: 'Hello World.',
      loop: true, // Enable looping
      interval: [100, 200], // Interval between each keystroke (min, max) in milliseconds
      loopInterval: 1000, // Interval between each loop in milliseconds
    };

    example.init(element, options);

    return () => {
      example.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <h1 className="app" ref={typewriterRef}>
        i just want to test if this is working
      </h1>
    </div>
  );
}

export default Test;
