import { Rocket } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

const MotionHooks = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#343434", "#00193b", "#05291c"];
  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });

  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-neutral-200" />,
      title: "Generate ultra realistic images in seconds",
      description:
        "With our state of the art AI, you can generate ultra realistic images with no time at all.",
      content: (
        <div>
          <img
            src="https://imgs.search.brave.com/S71txX8fmml8LWdCO-6lXBvM_8XPNZPzJOJiexXcfQA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vdGN6LU0v/TUFFcklfdGN6LU0v/MS90bC9jYW52YS1w/aG90by1vZi1hLWJs/dWUtc3BvcnRzLWNh/ci1NQUVySV90Y3ot/TS5qcGc"
            alt="car"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <Rocket className="h-8 w-8 text-neutral-200" />,
      title: "Designed for speed and performance",
      description:
        "Generate stunning visuals in real time with optimized rendering and lightning-fast processing.",
      content: (
        <div>
          <img
            src="https://imgs.search.brave.com/aWeaIhCHohyPcph2olmWDbWSMbMxcJzZFHZiEwWu8WM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vVml0WFkv/TUFFU1hBVml0WFkv/MS90bC9jYW52YS1s/dXh1cnktY2FyLW9u/LXJvYWQtTUFFU1hB/Vml0WFkuanBn"
            alt="car"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <Rocket className="h-8 w-8 text-neutral-200" />,
      title: "Creative freedom without limits",
      description:
        "Explore endless design possibilities with tools that adapt to your ideas and creative workflow.",
      content: (
        <div>
          <img
            src="https://imgs.search.brave.com/kN3dHj1xs0g7fmHalHkeFVtBaJ1gCsrGPclopK8Qt74/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgxL2Ji/LzBmLzgxYmIwZmUy/ZTM4YWQ3NTRmYTMy/ZTI0NjUyYThhZDJl/LmpwZw"
            alt="car"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
  ];

  return (
    <motion.div
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      ref={containerRef}
      className="flex items-center justify-center min-h-screen bg-neutral-900"
    >
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-10">
        {features.map((feature, idx) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={ref} className="grid grid-cols-2 items-center gap-20 py-40">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold">{feature.title}</h2>
        <p className="text-neutral-400 text-lg">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

export default MotionHooks;
