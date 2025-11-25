import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Best online counseling",
};

export default function AboutUs() {
  return (
    <>
      <div className="text-center mb-8 pb-10 pt-28 bg-[#00BEA5]">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white leading-tight mb-8">
          Why Psyra!!
        </h1>
      </div>
      <section
        id="about"
        className="py-8 px-3 md:px-6 m-8 md:py-8 md:px-10 md:m-10 relative overflow-hidden rounded-3xl"
        aria-labelledby="about-title"
      >
        <div className="container mx-auto md:px-4">
          {/* 2-column on md+, single column on mobile */}
          <div className="md:flex md:items-start md:gap-8">
            {/* LEFT: copy and structure preserved, SSR-friendly */}
            <div className="max-w-3xl md:pr-2">
              <div>
                <h2
                  id="about-title"
                  className="text-2xl md:text-2xl lg:text-4xl font-bold text-teal-600 leading-tight mb-8"
                >
                  {" When the world doesn't "}
                  <br /> understand your silence Psyra does.
                </h2>
              </div>

              <div>
                <p className="text-gray-600 text-lg md:text-xl mb-4">
                  {
                    " Behind every smile, there are battles no one sees. Sleepless nights, racing thoughts, a weight you can't explain. You don't need someone else telling you to 'be strong' or 'move on'.   What you need... is a space that finally feels safe. That's why Psyra exists-not as a clinic, nor as an app, but as a sanctuary for your mind."
                  }
                </p>
                <p className="text-gray-600 text-lg md:text-xl mb-10">
                      {`At Psyra, you will find listeners, not judges-therapists who meet you where you are,
                        offering a refuge of privacy where your story remains yours alone.
                        You will experience support that adapts to your life, with no rigid systems-only what truly works for you.
                        Here, care comes without shame, because seeking help should never feel like weakness.
                        Psyra is not just about therapy; it is about giving your mind the home it has been searching for.
                        Because you deserve more than just surviving-you deserve peace.`}
                </p>
              </div>
            </div>

            {/* RIGHT: static image (no animations), desktop only */}
            <div className="hidden md:block md:flex-1">
              <div className="relative w-full h-[290px] lg:h-[390px] xl:h-[390px] overflow-hidden rounded-2xl mt-24">
                <img
                  src="/woman-relaxing-chair-home.png"
                  alt="Illustration representing supportive mental health therapy"
                  className="absolute inset-0 h-full w-full object-cover -scale-x-100"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
