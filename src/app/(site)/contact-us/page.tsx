import GetInTouch from "@/components/GetInTouch";
import React from "react";

export const metadata = {
  title: "Contact Us | Psyra",
  description:
    "Get in touch with Psyra for mental health support, therapy-related enquiries, or general questions. Our team is here to help you.",
     alternates: {
    canonical: "https://psyra.in/contact-us",
  },
};

const page = () => {
  return (
    <div>
      <GetInTouch />
    </div>
  );
};

export default page;
