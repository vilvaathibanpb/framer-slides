import React from "react";
import { motion } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";

const Slide20 = () => {
  return (
    <SlideLayout>
      <Title
        animate={{ scale: [0.8, 1, 1.2, 0.9, 1.1, 1, 0.8] }}
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Live Demo
      </Title>
    </SlideLayout>
  );
};

export default Slide20;
