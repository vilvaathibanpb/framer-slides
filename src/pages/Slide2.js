import React from "react";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";
import Linkedin from "../components/icons/linkedin.jpg";

const Slide2 = () => {
  return (
    <SlideLayout>
      <Title>About Me</Title>
      <div className="flex items-center justify-center">
        <div className="mr-12">
          <Text>Senior Full Stack Engineer</Text>
          <Text>Omio, Berlin</Text>
          <Text>Platform Engineering</Text>
          <Text>Loves to Teach & Travel</Text>
        </div>
        <img className="h-1/2 w-1/3 .max-h-72" src={Linkedin} />
      </div>
    </SlideLayout>
  );
};

export default Slide2;
