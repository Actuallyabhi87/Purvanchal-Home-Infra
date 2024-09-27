"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NavbarSection from "../components/NavbarSection";

const ChildComponent = () => {
  return (
    <div>
      {/* <h1>This component appears after scrolling 500px!</h1> */}
      <Navbar />
    </div>
  );
};

const ParentComponent = () => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowChild(true);
      } else {
        setShowChild(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <h1>Scroll down 500px to reveal the child component</h1> */}
      <NavbarSection />
      {showChild && <ChildComponent />}
    </div>
  );
};

export default ParentComponent;
