import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useActiveCode,
} from "@codesandbox/sandpack-react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";
import Editor from "../components/SlideComponents/Editor";

const Slide17 = () => {
  return (
    <SlideLayout>
      <iframe
        src="https://codesandbox.io/embed/dok1jg?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1"
        style={{
          width: "100vw",
          height: "100vh",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="Sample Animation"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </SlideLayout>
  );
};

export default Slide17;
