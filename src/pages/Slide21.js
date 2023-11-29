import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";

const Slide21 = () => {
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
      <div ref={scope} className="ml-52">
        <Title className="mb-40" initial={{ opacity: 0 }}>
          When not to use Micro interactions
        </Title>
        <div className="mt-20" />
        <Text initial={{ opacity: 0 }}>Reduced motion</Text>
        <Text initial={{ opacity: 0 }}>Accessibility</Text>
        <Text initial={{ opacity: 0 }}>Data/Battery</Text>
        <Text initial={{ opacity: 0 }}>Overuse</Text>
        <Text initial={{ opacity: 0 }}>CPU vs GPU</Text>
      </div>
    </SlideLayout>
  );
};

export default Slide21;
