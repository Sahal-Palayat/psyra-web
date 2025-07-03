"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SurveyModal from "@/components/Survey/SurveyModal";
import { useState } from "react";
import Clound from "../../../public/cloud.jpeg";
import Image from "next/image";

export default function SurveyHome() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      //   style={{ backgroundImage: "url('/greenbgs.jpg')" }}
    >
      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="mb-32">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-8">
                Your mental wellness journey begins here.
              </h1>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                At Psyra, we believe in the power of understanding. Take our
                brief survey to help us create a more supportive mental health
                environment for everyone.
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
            {/* <div>
              <Image
                src={Clound}
                alt="Cloud Image"
                width={60}
                height={30}
                // className="w-full h-auto object-cover"
              />
            </div> */}
          </section>

          {/* Features Section */}
          <section className="grid md:grid-cols-3 gap-12 mb-32">
            <div className="space-y-4">
              <div className="h-0.5 w-12 bg-primary-500 mb-6"></div>
              <h3 className="text-xl font-medium text-gray-900">
                Confidential
              </h3>
              <p className="text-gray-600">
                Your responses are completely anonymous and secure.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-0.5 w-12 bg-primary-500 mb-6"></div>
              <h3 className="text-xl font-medium text-gray-900">Quick</h3>
              <p className="text-gray-600">
                The survey takes only 5-7 minutes to complete.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-0.5 w-12 bg-primary-500 mb-6"></div>
              <h3 className="text-xl font-medium text-gray-900">Impactful</h3>
              <p className="text-gray-600">
                Your input directly shapes our mental health initiatives.
              </p>
            </div>
          </section>

          {/* Quote Section */}
          <section className="mb-32">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                Mental health is not a destination, but a process. It is about
                how you drive, not where you are going.
              </p>
              <div className="h-0.5 w-12 bg-primary-500 mx-auto"></div>
            </div>
          </section>

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
      {/* Minimal Footer */}
      <footer className="bg-white px-6 py-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Psyra
            </div>
            <div className="text-sm text-gray-500">
              Your mental wellness partner
            </div>
          </div>
        </div>
      </footer>
      <SurveyModal
        isOpen={isOpen}
        onClose={handleClose}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
