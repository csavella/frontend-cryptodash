import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button className="go-to-top" title="scroll">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          marginBottom: 1.5 + "em",
        }}
      />
    </button>
  );
};

export default ScrollToTop;
