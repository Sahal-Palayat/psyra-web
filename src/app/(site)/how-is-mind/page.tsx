import { Suspense } from "react";
import HowIsMindClient from "./how-is-mind-client";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HowIsMindClient />
    </Suspense>
  );
}
