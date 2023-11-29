import React from "react";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { motion } from "framer-motion";

const Slide8 = () => {
  return (
    <SlideLayout>
      <div className="flex items-center">
      <Title>What is Framer Motion</Title>
      </div>
      <motion.div className="overflow-hidden" initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 10 }}>

      <CodeMirror className="mt-20" theme={"dark"} value={"npm i framer-motion        "}  editable={false} style={{ fontSize: '30px' }} extensions={[javascript({ jsx: true })]} />
      </motion.div>
    </SlideLayout>
  );
};

export default Slide8;
