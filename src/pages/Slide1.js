import React from "react";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import SubTitle from "../components/SlideComponents/Title/SubTitle";

const Slide1 = () => {
    const files = {}
  return (
    <SlideLayout>
      <Title>Micro Interactions</Title>
      <SubTitle>Elevate UX with Framer Motion</SubTitle>
    </SlideLayout>
  );
};

export default Slide1;
