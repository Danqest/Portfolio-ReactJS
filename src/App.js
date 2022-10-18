import React, { useEffect, useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Fade,
  batch,
  MoveOut,
  FadeIn,
} from "react-scroll-motion";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import About from "./components/pages/About";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [currentPage, setCurrentPage] = useState("Intro");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Intro") {
      return <Intro />;
    }
    if (currentPage === "About") {
      return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(50, 25), Fade(), MoveOut(0, -200))}>
            <Intro />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <div className="section-1">
            <Animator
              animation={batch(Sticky(50, 25), Fade(), MoveOut(0, -200))}
            >
              <Component1 />
            </Animator>
          </div>
        </ScrollPage>

        <ScrollPage page={2}>
          <div className="section-2">
            <Animator
              animation={batch(Sticky(50, 25), Fade(), MoveOut(0, -200))}
            >
              <Component2 />
            </Animator>
          </div>
        </ScrollPage>

        <ScrollPage page={3}>
          <div className="section-3">
            <Animator animation={batch(Sticky(50, 25), FadeIn())}>
              <Component3 />
            </Animator>
            <Animator animation={batch(Sticky(50, 87.5), FadeIn())}>
              <Footer />
            </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;
