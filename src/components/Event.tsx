// "use client";
// import React, { useState, useEffect } from "react";
// import EventDesktop from "../components/EventDesk";
// import EventMobile from "../components/EventMob";

// const Event = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     handleResize(); // Run on mount
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return isMobile ? <EventMobile /> : <EventDesktop />;
// };

// export default Event;
