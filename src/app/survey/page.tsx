"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SurveyModal from "@/components/Survey/SurveyModal";
import { useState } from "react";
import { Background } from "@/components/anonymous/background";

export default function SurveyHome() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Background>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        //   style={{ backgroundImage: "url('/greenbgs.jpg')" }}
      >
        {/* Main Content */}
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}

            {/* CTA Section */}
            <section className="bg-gray-50 rounded-3xl p-12 md:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Ready to make a difference?
                </h2>
                <p className="text-gray-600 mb-10">
                  Your voice matters in building a mentally healthier community.
                  Start the survey now.
                </p>
                <Link href="/survey/questions">
                  <Button
                    className="bg-[#00989D] hover:bg-primary-600 text-white rounded-full px-8 py-6 text-base font-normal"
                    size="lg"
                  >
                    Begin Survey
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </main>

        <SurveyModal
          isOpen={isOpen}
          onClose={handleClose}
          setIsOpen={setIsOpen}
        />
      </div>
    </Background>
  );
}
