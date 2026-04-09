import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

type Variant = "fade-up" | "fade-left" | "fade-right" | "tilt" | "scale" | "card";

const configs: Record<Variant, { y?: [string, string]; x?: [string, string]; rotateX?: [number, number]; rotateY?: [number, number]; scale?: [number, number]; opacity?: [number, number] }> = {
  "fade-up": { y: ["80px", "0px"], opacity: [0, 1] },
  "fade-left": { x: ["-100px", "0px"], opacity: [0, 1], rotateY: [8, 0] },
  "fade-right": { x: ["100px", "0px"], opacity: [0, 1], rotateY: [-8, 0] },
  "tilt": { rotateX: [12, 0], y: ["60px", "0px"], opacity: [0, 1], scale: [0.92, 1] },
  "scale": { scale: [0.8, 1], opacity: [0, 1], rotateX: [6, 0] },
  "card": { y: ["40px", "0px"], opacity: [0, 1], rotateX: [4, 0], scale: [0.96, 1] },
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, variant = "fade-up", className = "", delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });

  const cfg = configs[variant];
  const y = useTransform(scrollYProgress, [0, 1], cfg.y || ["0px", "0px"]);
  const x = useTransform(scrollYProgress, [0, 1], cfg.x || ["0px", "0px"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], cfg.rotateX || [0, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], cfg.rotateY || [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], cfg.scale || [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], cfg.opacity || [1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, x, rotateX, rotateY, scale, opacity, perspective: 1200, transformStyle: "preserve-3d" }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
