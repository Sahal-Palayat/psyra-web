import { Suspense } from "react";
import HowIsMindClient from "./how-is-mind-client";


export const metadata = {
  title: "Mental Health Self Assessment | How Is Your Mind? | Psyra",
  description:
    "Take a simple mental health self-assessment to understand your emotional well-being. Answer guided questions and gain clarity on how your mind is feeling with Psyra.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HowIsMindClient />
    </Suspense>
  );
}
