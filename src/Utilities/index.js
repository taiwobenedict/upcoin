
import React, { useState, useEffect } from "react";
import "./index.css";

// Hero
export function Hero({
  children,
  centerContent = false,
  transparent = false,
  container,
  className,
}) {
  return (
    <div className="hero">
      <div className={`overlay ${transparent && "transparent"}`}></div>
      <div
        className={`container d-flex align-items-center min-vh-100 w-100 ${
          centerContent && "justify-content-center"
        } ${className} pt pb-5`}
      >
        <div
          style={{ maxWidth: `${container ? `${container}px` : "initial"}` }}
          className="w-100 h-100"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Button
export function Button({ children, type, color, className }) {
  return (
    <button className={`btn btn-${type}-${color} ${className}`}>
      {children}
    </button>
  );
}

// Section Divider
export function Section({
  children,
  mt,
  className,
  name,
  expand = false,
  center,
  container,
}) {
  return (
    <div
      id={`${name}`}
      className={`${className} py-5 w-100 h-100`}
      style={{ marginTop: `${mt}px` }}
    >
      <div className={`container ${expand ? "container-expand" : ""} h-100`}>
        <div
          style={{ maxWidth: `${container ? `${container}px` : "initial"}` }}
          className={`${center && "mx-auto"} h-100`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}


// Scrolling Animation
export function ScrollStyledElement({ offset, children, style }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Function to check if an element is in the viewport
    function isInViewport(element, offset) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return rect.top >= 0 - offset && rect.bottom <= windowHeight + offset;
    }

    // Function to handle scroll events
    function handleScroll() {
      const element = document.querySelector(".styled-element");
      if (isInViewport(element, offset)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

    // Initial check on component mount
    handleScroll();

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div className={`styled-element ${isActive ? style : ""}`}>
      {children}
    </div>
  );
}


