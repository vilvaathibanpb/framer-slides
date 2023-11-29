import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";

const Slide7 = () => {
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
        <Title className="mb-40" initial={{ opacity: 0 }}>
          Roles in UX
        </Title>
        <div className="mt-20" />
        <Text initial={{ opacity: 0 }}>
          Feedback
        </Text>
        <Text initial={{ opacity: 0 }}>User Engagement</Text>
        <Text initial={{ opacity: 0 }}>Enhancing Usability</Text>
        <Text initial={{ opacity: 0 }}>Emotional Connection</Text>
        <Text initial={{ opacity: 0 }}>Branding</Text>
        <Text initial={{ opacity: 0 }}>Mobile Responsiveness</Text>
      </div>
    </SlideLayout>
  );
};

export default Slide7;
