"use client";

import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  designation: string;
  imageUrl: string;
}

const ProfileHeader = ({ name, designation, imageUrl }: ProfileHeaderProps) => {
  return (
    <div
      className="relative h-64 md:h-80 lg:h-[360px] rounded-b-3xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: "url('/images/bg-ocean.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Frosted overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-md md:max-w-2xl lg:max-w-6xl px-4 h-full flex items-end pt-6 md:pt-10">
        <div className="pb-4 md:pb-10 lg:pb-12 flex items-end gap-3 md:gap-4">
          {/* Therapist Image */}
          <div
            className="
  w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 
  rounded-xl 
  overflow-hidden 
  border-4 border-white 
  shadow-xl 
  bg-[#BFE9F7]  /* soft brand background */
  flex items-center justify-center
"
          >
            <Image
              src={imageUrl}
              alt={name}
              width={300}
              height={300}
              priority={true}
              className="object-cover object-top w-full h-full scale-110"
            />
          </div>

          {/* Name + Designation */}
          <div className="text-white pb-1 md:pb-2 flex-1">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">
              {name}
            </h1>

            <p className="text-base md:text-xl text-white/90 drop-shadow mt-1">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
