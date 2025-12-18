import React from "react";
import { Video, Users, Clock, BookOpen, Target, Calendar, Check } from "lucide-react";

const HowSpaceWorks = () => {
  const steps = [
    {
      number: "01",
      title: "21-Day Journey",
      description: "A structured 21-day journey that helps you grow step by step",
      icon: Calendar,
      color: "from-teal-600 to-teal-700",
      bgColor: "bg-teal-600",
    },
    
    {
      number: "02",
      title: "Live Sessions",
      description: "A live expert session every morning",
      icon: Users,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500",
    },
    {
      number: "03",
      title: "Personal Check-in",
      description: "1:1 personal check-in every day",
      icon: Clock,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
    },
    {
      number: "04",
      title: "Tools & Journaling",
      description: "Journaling, mood tracking, and reflection tools to guide your progress",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      number: "05",
      title: "Daily Habits",
      description: "Small daily habits and exercises designed to build real change",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
    },{
      number: "06",
      title: "Daily Guided Lessons",
      description: "Daily morning and evening lessons unlocked inside SPACE",
      icon: Video,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
    },
   
  ];

  return (
    <section className="w-full mb-10 px-2">
      <div className="bg-white/95 rounded-3xl shadow-xl border border-teal-50 px-5 py-6 md:px-8 md:py-8">
        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-teal-700 mb-2">
          HOW SPACE WORKS
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-6 md:mb-8 leading-snug">
          Your daily journey inside SPACE
        </h2>

        {/* Desktop - Horizontal Stepper */}
        <div className="hidden md:block">
          <div className="relative pb-8">
            {/* Horizontal Connector Line */}
            <div className="absolute top-8 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-teal-600 opacity-40" />

            {/* Steps Icons */}
            <div className="flex justify-between items-start relative px-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 max-w-[150px]"
                  >
                    {/* Step Icon */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-white transition-all hover:scale-110 mb-3`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Step Number */}
                    <span
                      className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1`}
                    >
                      {step.number}
                    </span>
                    {/* Step Title */}
                    <h3 className="text-sm font-semibold text-teal-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    {/* Step Description */}
                    <p className="text-xs text-teal-700/80 text-center leading-relaxed px-1">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile - Vertical Stepper */}
        <div className="md:hidden">
          <div className="relative pl-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              const nextStep = !isLast ? steps[index + 1] : null;

              return (
                <div key={index} className="relative flex items-start pb-8">
                  {/* Left side - Icon and Connector */}
                  <div className="flex flex-col items-center mr-4 relative">
                    {/* Step Icon */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md border-2 border-white`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {/* Connector Line with gradient */}
                    {!isLast && nextStep && (
                      <div
                        className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 rounded-full"
                        style={{
                          height: "calc(100% - 0.5rem)",
                          background: `linear-gradient(to bottom, ${step.bgColor}, ${nextStep.bgColor})`,
                        }}
                      />
                    )}
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-sm font-semibold text-teal-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-teal-700/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSpaceWorks;
