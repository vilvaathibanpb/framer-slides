import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useActiveCode
} from "@codesandbox/sandpack-react";
import { useAnimate, stagger } from "framer-motion";
import Title from "../components/SlideComponents/Title/Title";
import SlideLayout from "../components/SlideLayout/SlideLayout";
import Text from "../components/SlideComponents/Title/Text";
import Editor from "../components/SlideComponents/Editor";

const Slide11 = () => {
  return (
    <SlideLayout>
      <Title
        className="mb-40"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Basic Animation
      </Title>
      <SandpackProvider
        theme={"dark"}
        template="react"
        customSetup={{
          dependencies: {
            "framer-motion": "latest",
          },
        }}
        files={{
          "styles.css": `body {
            font-family: sans-serif;
            -webkit-font-smoothing: auto;
            -moz-font-smoothing: auto;
            -moz-osx-font-smoothing: grayscale;
            font-smoothing: auto;
            text-rendering: optimizeLegibility;
            font-smooth: always;
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
          }
          
          h1 {
            font-size: 1.5rem;
          }
          
          .title {
            font-size: 48px;
            color: #fff;
          }
          
          .App {
            text-align: center;
            display: flex;
            justify-content: space-between;
          }
          
          a{
            text-decoration: none;
            color: #212121;
          }
          
          .app {
            background: #209cee;
            height: 100vh;
            padding: 30px;
          }
          
          .todo-list {
            background: #e8e8e8;
            border-radius: 4px;
            max-width: 400px;
            padding: 5px;
            margin-top: 20px;
          }
          
          .todo {
            align-items: center;
            background: #fff;
            border-radius: 3px;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
            display: flex;
            font-size: 18px;
            justify-content: space-between;
            margin: 20px;
            padding: 3px 10px;
          }
          
          body {
            width: 100vw;
            height: 100vh;
            background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
            overflow: hidden;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .main-container{
            height: 200vh;
            padding: 20%;
          }
          
          nav {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 300px;
          }
          
          .background {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 300px;
            background: #fff;
          }
          
          button {
            outline: none;
            border: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            cursor: pointer;
            position: absolute;
            top: 18px;
            left: 15px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: transparent;
          }
          
          ul,
          li {
            margin: 0;
            padding: 0;
          }
          
          ul {
            padding: 25px;
            position: absolute;
            top: 100px;
            width: 230px;
          }
          
          li {
            list-style: none;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
          }
          
          .icon-placeholder {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            flex: 40px 0;
            margin-right: 20px;
          }
          
          .text-placeholder {
            border-radius: 5px;
            width: 200px;
            height: 20px;
            flex: 1;
          }
          
          .refresh {
            padding: 10px;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 10px;
            width: 20px;
            height: 20px;
            top: 10px;
            right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          `,
          "App.js": `import { motion } from "framer-motion";
import React from "react";

const Motion = () => {
  return (
    <h1 className="title App">
      Welcome to React Berlin
    </h1>
  );
};

export default Motion;`,
        }}
      >
        <SandpackLayout
          style={{ background: "black", border: 0 }}
          className="mt-20 flex justify-around bg-black"
        >
          <Editor />
          <SandpackPreview style={{height: "50vh",
        width: "30vw",}} />
        </SandpackLayout>
      </SandpackProvider>
    </SlideLayout>
  );
};

export default Slide11;
