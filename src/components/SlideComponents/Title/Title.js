import React from "react";
import { motion } from "framer-motion";

const Title = ({children, color, ...props}) => {
  return (<motion.h1 {...props} className={`text-8xl my-5 ${color ? color : 'text-white'}`}>{children}</motion.h1>);
};


export default Title;