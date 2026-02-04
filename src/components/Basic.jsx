import React from "react";
import { motion } from "motion/react";

const Basic = () => {
  return (
    <div>
      {/* 1. Basic Example  */}
      <motion.div
        initial={{
          x: 100,
        }}
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "anticipate",
        }}
        className="box"
      ></motion.div>

      <motion.div
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
        }}
        className="circle"
      ></motion.div>

      {/* 2. Use Keyframes  */}
      {/* <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          // ease: "anticipate",
        }}
        className="box"
      ></motion.div> */}

      {/* 3. Hover & Tab  */}
      {/* <motion.div
        whileHover={{
          backgroundColor: "blue",
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="box"
      ></motion.div>

      <motion.div
        drag
        whileDrag={{
          scale: 0.8,
        }}
        dragConstraints={{
          left: 0,
          top: 0,
          right: 1200,
          bottom: 500,
        }}
        dragDirectionLock="true"
        className="box"
      ></motion.div> */}
    </div>
  );
};

export default Basic;
