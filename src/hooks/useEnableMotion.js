import { useEffect, useState } from "react";

/**
 * useEnableMotion() - determines whether animations should run
 * based on device type and screen size.
 */
export function useEnableMotion(exception) {
  const [enableMotion, setEnableMotion] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isAndroid = ua.includes("android");
      const isSmallScreen = window.innerWidth < 768;

      // Enable animations only if not Android phone and not small screen
      setEnableMotion((!isAndroid && !isSmallScreen) || exception);
    };

    checkDevice(); // check initially
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return enableMotion;
}
