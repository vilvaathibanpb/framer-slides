import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";

const Slide6 = () => {
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
          Life cycle of <br />
          Micro Interactions
        </Title>
        <div className="mt-20" />
        <Text initial={{ opacity: 0 }}>🔫 Trigger</Text>
        <Text initial={{ opacity: 0 }}>📢 Rules</Text>
        <Text initial={{ opacity: 0 }}>🗣 Feedback</Text>
        <Text initial={{ opacity: 0 }}>♾️ Mode or Loop</Text>
      </div>
      <div className="mt-20 ml-20" style={{ height: '70vh', width: '30vw'}}>
        <iframe
          className="h-1/2"
          src="https://codesandbox.io/embed/1v1mr0?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1"
          style={{
            border: 0,
            borderRadius: "4px",
            overflow: "hidden",
            height: "100%",
            width: "100%",

          }}
          title="Vilva30PostofAnimation-4"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6;
