import React from "react";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";
import Linkedin from "../components/icons/linkedin.jpg";

const Slide22 = () => {
  return (
    <SlideLayout>
      <Title>Thank You</Title>
      <div className="flex items-center justify-center">
        <div className="mr-12">
          <Text>You all were wonderful audience</Text>
          <Text></Text>
          <Text>Connect with me:</Text>
          <Text><b className="text-5xl">Vilva Athiban</b> (All Platforms)</Text>
        </div>
        <img className="h-1/2 w-1/3 .max-h-72" src={Linkedin} />
      </div>
    </SlideLayout>
  );
};

export default Slide22;
