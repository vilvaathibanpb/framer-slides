import React from "react";
import { motion } from "framer-motion";

const Text = ({children, color, ...props}) => {
  return (<motion.h1 {...props} className={`text-2xl my-5 ${color ? color : 'text-white'}`}>{children}</motion.h1>);
};


export default Text;