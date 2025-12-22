import Faq from "@/components/Faq";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <>
      <div className="pt-22 pb-16 mb-10 relative bg-teal-600 text-white rounded-lg m-2">
        <Services />
      </div>
      <Faq />
    </>
  );
};

export default page;
