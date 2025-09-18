import React, { useEffect, useState } from "react";
// import HeroMob from "./HeroMob";
// import HeroDesktop from "./HeroDesktop";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount & window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-[#F7F8F2]">
      <h1>🚧 Site Under Maintenance 🚧</h1>
    </div>
  );
};

export default Hero;
