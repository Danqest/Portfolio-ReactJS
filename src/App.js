import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter> */}
      <Header />
      <NavBar />
      <Intro />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
