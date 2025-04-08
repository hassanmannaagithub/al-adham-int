"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServicesContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-40 bg-[#ccc0a5]">
      <div className="text-center mt-4 md:mt-8">
        <h1 className="text-4xl md:text-super-title font-light text-center pt-2 md:pt-4 tracking-widest">
          OUR SERVICES
        </h1>
      </div>

      <div className="pt-12 md:pt-20 tracking-widest px-4 md:px-0">
        <div className="flex justify-center mb-1">
          <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#7b2a26]"></div>
        </div>
        <h2 className="text-xl md:text-4xl text-center uppercase font-medium text-[#222222]">
          CONCEPT DEVELOPMENT
        </h2>
        <h2 className="text-xl md:text-4xl text-center uppercase font-medium text-[#222222] mb-2 md:mb-4">
          & SCRIPTWRITING
        </h2>
        <h3 className="text-lg md:text-2xl text-center uppercase font-extrabold text-[#7b2a26] mb-2 md:mb-3">
          SCRIPTING
        </h3>
        <h4 className="text-lg md:text-2xl text-center font-extrabold uppercase mb-3 md:mb-6">
          WE OFFER:
        </h4>
        <div className="text-center space-y-1">
          <p className="text-[#222222] text-lg md:text-2xl">
            Story Ideation & Development
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Scriptwriting & Editing
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Series Bible & Character Development
          </p>
        </div>
        <div className="flex justify-center mt-10 md:mt-16">
          <div className="w-24 md:w-36 h-1 md:h-2 bg-[#7b2a26]"></div>
        </div>
      </div>

      <div className="pt-12 md:pt-20 tracking-widest bg-[#dcd3bf] px-4 md:px-0">
        <div className="flex justify-center mb-1 md:mb-2">
          <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#7b2a26]"></div>
        </div>
        <h2 className="text-xl md:text-4xl text-center uppercase font-medium text-[#222222] mb-2 md:mb-4">
          PRE-PRODUCTION PLANNING
        </h2>
        <h3 className="text-lg md:text-2xl text-center uppercase font-extrabold text-[#7b2a26] mb-2 md:mb-3">
          SETTING THE STAGE FOR SUCCESS
        </h3>
        <h4 className="text-lg md:text-2xl text-center font-extrabold uppercase mb-5 md:mb-10">
          OUR PRE-PRODUCTION SERVICES INCLUDE:
        </h4>
        <div className="text-center space-y-1 md:space-y-2">
          <p className="text-[#222222] text-lg md:text-2xl">
            Casting & Talent Acquisition
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Location Scouting & Set Design
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Budgeting & Scheduling
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Production Design & Costume Styling
          </p>
        </div>
        <div className="flex justify-center mt-10 md:mt-20">
          <div className="w-24 md:w-36 h-1 md:h-2 bg-[#7b2a26]"></div>
        </div>
      </div>

      <div className="pt-12 md:pt-28 tracking-widest px-4 md:px-0">
        <div className="flex justify-center mb-2 md:mb-6">
          <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#7b2a26]"></div>
        </div>
        <h2 className="text-xl md:text-4xl text-center uppercase font-medium text-[#222222] mb-2 md:mb-5">
          PRODUCTION & FILMING
        </h2>
        <h3 className="text-lg md:text-2xl text-center uppercase font-extrabold text-[#7b2a26] mb-2 md:mb-4">
          BRINGING STORIES TO LIFE
        </h3>
        <h4 className="text-lg md:text-2xl text-center font-extrabold uppercase mb-4 md:mb-8">
          OUR PRODUCTION SERVICES INCLUDE:
        </h4>
        <div className="text-center space-y-1">
          <p className="text-[#222222] text-lg md:text-2xl">
            Cinematic Filming & Directing
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            High-Quality Cinematography
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Production Management
          </p>
        </div>
        <div className="flex justify-center mt-10 md:mt-24">
          <div className="w-24 md:w-36 h-1 md:h-2 bg-[#7b2a26]"></div>
        </div>
      </div>

      <div className="relative pt-12 md:pt-24 pb-10 tracking-widest bg-[url('/services/services-bg.webp')] bg-cover bg-bottom px-4 md:px-0">
        <div className="absolute inset-0 bg-[#dcd3bf] opacity-70"></div>
        <div className="relative flex justify-center mb-2 md:mb-4">
          <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#7b2a26]"></div>
        </div>
        <h2 className="relative text-xl md:text-4xl text-center uppercase font-medium text-[#222222] mb-2 md:mb-4">
          POST-PRODUCTION MASTERY
        </h2>
        <h3 className="relative text-lg md:text-2xl text-center uppercase font-extrabold text-[#7b2a26] mb-2 md:mb-3">
          PERFECTION EVERY FRAME
        </h3>
        <h4 className="relative text-lg md:text-2xl text-center font-extrabold uppercase mb-5 md:mb-10">
          WE PROVIDE:
        </h4>
        <div className="relative text-center space-y-1">
          <p className="text-[#222222] text-lg md:text-2xl">
            Video Editing & Color Grading
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Sound Design & Music Scoring
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Visual Effects (VFX) & CGI
          </p>
          <p className="text-[#222222] text-lg md:text-2xl">
            Subtitling & Localization
          </p>
        </div>
        <div className="relative flex justify-center mt-8 md:mt-12">
          <div className="w-24 md:w-36 h-1 md:h-2 bg-[#7b2a26]"></div>
        </div>
      </div>
    </div>
  );
}
