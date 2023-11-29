import React from "react";
import { motion, useIsPresent } from "framer-motion";
import Twitter from "../icons/Twitter";

const SlideLayout = ({ children, background, color, pageTransition }) => {
  const isPresent = useIsPresent();
  return (
    <div
      className={`flex justify-center items-center flex-col ${
        background ? background : "bg-black"
      } ${color ? color : "text-white"}`}
    >
      {children}
      {!pageTransition ? <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      /> : pageTransition}
      <a className="fixed bottom-3 flex items-center text-2xl" href="https://twitter.com/vilvaathibanpb" target="_blank" rel="noreferrer"><span className="mr-2"><Twitter /></span><p>@vilvaathibanpb</p></a>
    </div>
  );
};

export default SlideLayout;
