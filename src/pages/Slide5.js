import React, { useEffect } from "react";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import { stagger, useAnimate, motion } from "framer-motion";
import Text from "../components/SlideComponents/Title/Text";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const Slide5 = () => {
  const text =
    "Micro-interactions are small, subtle, and often overlooked design elements that enhance user experience.";
  const textArray = text.split(" ");

  return (
    <SlideLayout>
      <div className="flex items-center flex-col">
        <Title >Micro-Interaction</Title>
        <Text
          variants={container}
          initial="hidden"
          animate="show"
        >
          {textArray.map((word, i) => (
            <motion.span variants={item} key={i}>{word}{" "}</motion.span>
          ))}
        </Text>
      </div>
    </SlideLayout>
  );
};

export default Slide5;
