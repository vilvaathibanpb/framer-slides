import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";

const Slide3 = () => {
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
      <div ref={scope}>
        <Title className="mb-40" initial={{ opacity: 0 }}>Agenda</Title>
        <Text className="mt-20" initial={{ opacity: 0 }}>
          Micro Interactions & their structure (theory)
        </Text>
        <Text initial={{ opacity: 0 }}>Framer-motion & APIs</Text>
        <Text initial={{ opacity: 0 }}>Live Demo</Text>
        <Text initial={{ opacity: 0 }}>Where to use/not use</Text>
        <Text initial={{ opacity: 0 }}>Q/A</Text>
      </div>
    </SlideLayout>
  );
};

export default Slide3;
