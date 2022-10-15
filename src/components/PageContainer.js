import React, { useState } from "react";
import Welcome1 from "./_Welcome1";
import Welcome2 from "./Welcome2";
import NavTabs from "./NavTabs";
import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Welcome1");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Welcome1") {
      return <Welcome1 />;
    }
    if (currentPage === "Welcome2") {
      return <Welcome2 />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
