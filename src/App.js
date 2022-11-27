import React, { useEffect, useState } from "react";

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

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
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
