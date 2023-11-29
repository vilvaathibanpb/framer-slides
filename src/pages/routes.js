// All photos by Matt Perry https://citizenofnowhe.re
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";
import Slide10 from "./Slide10";
import Slide20 from "./Slide20";
import Slide21 from "./Slide21";
import Slide22 from "./Slide22";
import Slide11 from "./Slide11";
import Slide12 from "./Slide12";
import Slide13 from "./Slide13";
import Slide14 from "./Slide14";
import Slide15 from "./Slide15";
import Slide16 from "./Slide16";

export const routes = [
  {
    path: "/",
    element: <Slide1 />,
  },
  {
    path: "/slide-1",
    element: <Slide1 />,
  },
  {
    path: "/slide-2",
    element: <Slide2 />,
  },
  {
    path: "/slide-3",
    element: <Slide3 />,
  },
  {
    path: "/slide-4",
    element: <Slide4 />,
  },
  {
    path: "/slide-5",
    element: <Slide5 />,
  },
  {
    path: "/slide-6",
    element: <Slide6 />,
  },
  {
    path: "/slide-7",
    element: <Slide7 />,
  },
  {
    path: "/slide-8",
    element: <Slide8 />,
  },
  {
    path: "/slide-9",
    element: <Slide9 />,
  },
  {
    path: "/slide-10",
    element: <Slide10 />,
  },
  {
    path: "/slide-11",
    element: <Slide11 />,
  },
  {
    path: "/slide-12",
    element: <Slide12 />,
  },
  {
    path: "/slide-13",
    element: <Slide13 />,
  },
  {
    path: "/slide-14",
    element: <Slide14 />,
  },
  {
    path: "/slide-15",
    element: <Slide15 />,
  },
  {
    path: "/slide-16",
    element: <Slide16 />,
  },
  {
    path: "/slide-17",
    element: <Slide20 />,
  },
  {
    path: "/slide-18",
    element: <Slide21 />,
  },
  {
    path: "/slide-19",
    element: <Slide22 />,
  },
];

export function AnimatedRoutes () {
  const element = useRoutes(routes);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
