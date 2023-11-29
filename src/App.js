import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes, AnimatedRoutes } from "./pages/routes";

function App() {
  const [slide, setSlide] = React.useState(1);
  const slideCount = routes.length - 1;
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "F1") {
      slide > 1 ? setSlide(slide - 1) : setSlide(1);
    }
    if (event.key === "F2") {
      slide < slideCount ? setSlide(slide + 1) : setSlide(slideCount);
    }
  };

  useEffect(() => {
    navigate(`/slide-${slide}`);
  }, [slide, navigate]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="bg-black flex justify-center items-center h-screen w-screen font-sans">
      <AnimatedRoutes />
    </div>
  );
}
export default App;
