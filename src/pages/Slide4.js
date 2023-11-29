import React from "react";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import { motion } from "framer-motion";

const Slide4 = () => {
  return (
    <SlideLayout>
      <div className="flex items-center">
      <Title>What is Micro-Interaction</Title>
      <Title color="text-yellow-300"><motion.p className="ml-16 text-9xl font-extrabold" initial={{rotate: 0}} animate={{ rotate: 360, transition: { duration: 5, repeat: Infinity }}}>?</motion.p></Title>
      </div>
    </SlideLayout>
  );
};

export default Slide4;
