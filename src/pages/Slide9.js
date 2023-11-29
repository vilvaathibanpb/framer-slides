import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";

const Slide9 = () => {
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
        <Title className="mb-40" initial={{ opacity: 0 }}>How it works internally?</Title>
        <div className="mt-20" />
        <Text initial={{ opacity: 0 }}>
        When we create an animation with framer motion:
        </Text>
        <div className="mt-20" />
        <Text initial={{ opacity: 0 }}>1. Create motion values (MV) internally</Text>
        <Text initial={{ opacity: 0 }}>2. Track current value & velocity in MV</Text>
        <Text initial={{ opacity: 0 }}>3. Use MV to calculate the next step of the animation</Text>
        <Text initial={{ opacity: 0 }}>4. These happen outside the React render cycle</Text>
      </div>
    </SlideLayout>
  );
};

export default Slide9;
