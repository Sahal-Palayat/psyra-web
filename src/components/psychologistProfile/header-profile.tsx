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
       <div className="pb-2 md:pb-6 lg:pb-12 flex items-end gap-2 md:gap-4">
  {/* Therapist Image with Gradient Border */}
  <div className="relative rounded-xl p-[2px] bg-gradient-to-br from-[#00BEA5]/40 via-[#7DD3C0]/30 to-transparent shadow-xl">
    <div
      className="
        w-24 h-32          
        md:w-32 md:h-40     
        lg:w-40 lg:h-52
        rounded-xl  
        overflow-hidden
        bg-[#BFE9F7]
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
