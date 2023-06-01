import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-80%,0)" },
    config: { duration: 3000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <h1>
       <div key={key}>
        <animated.div style={scrolling} className="text-xl text-white">{text}</animated.div>);
      </div>
    </h1>
   
  );
};

export default TextScroller;
