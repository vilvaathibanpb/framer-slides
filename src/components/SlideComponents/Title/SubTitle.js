import React from "react";
import { motion } from "framer-motion";

const SubTitle = ({children, color, ...props}) => {
  return (<motion.h1 {...props} className={`text-5xl my-5 ${color ? color : 'text-white'}`}>{children}</motion.h1>);
};


export default SubTitle;