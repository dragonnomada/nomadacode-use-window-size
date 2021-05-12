import React from "react";

import "./index.css";

import useWindowSize from "@nomadacode/use-window-size";

/* index.css
 * @import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
 * @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
 */

export default function App() {
  const [
    width,
    height,
    { screenType, isMobile, isTablet, isDesktop, isFullDesktop }
  ] = useWindowSize();

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundColor: {
          mobile: "hotpink",
          tablet: "cornflowerblue",
          desktop: "orange",
          fullDesktop: "purple"
        }[screenType]
      }}
    >
      <h1 className="text-4xl font-bold">{screenType}</h1>
      <h2 className="text-xl">
        {width}x{height}
      </h2>
      <div className="text-8xl">
        {isMobile && (
          <span>
            <i className="fas fa-mobile"></i>
          </span>
        )}
        {isTablet && (
          <span>
            <i className="fas fa-tablet-alt"></i>
          </span>
        )}
        {isDesktop && (
          <span>
            <i className="fas fa-desktop"></i>
          </span>
        )}
        {isFullDesktop && (
          <span>
            <i className="fas fa-tv"></i>
          </span>
        )}
      </div>
    </div>
  );
}