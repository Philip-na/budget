import { motion } from "motion/react";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return (
    <span style={{ display: "inline-block", overflow: "hidden" }}>
      <motion.p className={`${className}`} variants={item} key={text}>
        {text}
      </motion.p>
    </span>
  );
};

export {
    AnimatedText
}