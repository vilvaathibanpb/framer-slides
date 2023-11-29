import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";

const Slide10 = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "h1",
      { opacity: 1, y: 2, transition: { duration: 5 } },
      { delay: stagger(0.5) }
    );
  }, []);

  return (
    <SlideLayout>
      <div className="flex justify-around items-center">
      <div ref={scope}>
        <Title className="mb-40" initial={{ opacity: 0 }}>
          Three parts of Animation
        </Title>
        <div className="mt-20" />
        <Text initial={{ opacity: 0 }}>🚀 Starting state</Text>
        <Text initial={{ opacity: 0 }}>🏁 Target state</Text>
        <Text initial={{ opacity: 0 }}>💫 Transition rules</Text>
      </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10;
