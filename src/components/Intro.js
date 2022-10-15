import React, { useState, useEffect } from "react";
import "../App.css";
import { Navigate, useNavigate } from "react-router-dom";
import About from "./pages/About";

const Intro = () => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
    done: false,
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.done === false) {
        if (fadeProp.nextFlag === true) {
          if (fadeProp.fade === "fade-in") {
            setFadeProp({
              fade: "fade-out",
              text: "Welcome To My Portfolio",
              nextFlag: false,
              done: true,
            });
          } else {
            setFadeProp({
              fade: "fade-in",
              text: "Welcome To My Portfolio",
              nextFlag: true,
              done: false,
            });
          }
        } else {
          if (fadeProp.fade === "fade-in") {
            setFadeProp({
              fade: "fade-out",
              text: "Hello",
              nextFlag: true,
              done: false,
            });
          } else {
            setFadeProp({
              fade: "fade-in",
              text: "Hello",
              nextFlag: false,
              done: false,
            });
          }
        }
      } else {
        setFadeProp({
          fade: "fade-out",
          text: "Welcome To My Portfolio",
          nextFlag: false,
          done: true,
          transition: true,
        });
      }
    }, 2250);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <div>
      <h1 className={fadeProp.fade}>{fadeProp.text}</h1>
      {/* {fadeProp.transition ? <Navigate to="/main" /> : fadeProp.transition} */}
    </div>
  );
};

export default Intro;
