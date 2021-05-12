import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isFullDesktop, setIsFullDesktop] = useState(false);
  const [screenType, setScreenType] = useState("unknown");

  useEffect(() => {
    let screenType = "unknown";
    if (width >= 360 && width < 768) screenType = "mobile";
    else if (width >= 768 && width < 1024) screenType = "tablet";
    else if (width >= 1024 && width < 1366) screenType = "desktop";
    else if (width >= 1366) screenType = "fullDesktop";
    setIsMobile(screenType === "mobile");
    setIsTablet(screenType === "tablet");
    setIsDesktop(screenType === "desktop");
    setIsFullDesktop(screenType === "fullDesktop");
    setScreenType(screenType);
  }, [width]);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const handler = () => {
      // console.log("Screen Size", window.innerWidth, window.innerHeight);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return [
    width,
    height,
    {
      screenType,
      isMobile,
      isTablet,
      isDesktop,
      isFullDesktop
    }
  ];
}