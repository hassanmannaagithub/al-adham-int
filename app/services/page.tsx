'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ServicesPage() {
  // State to track if page has loaded (for animations)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-40 pb-40 bg-[#ccc0a5]">
      {/* Main heading */}
      <div className="text-center mt-8">
        <h1 className="text-super-title md:text-super-title font-light text-center pt-4 tracking-widest">OUR SERVICES</h1>
      </div>

      {/* Service 1: Concept Development */}
      <div className="pt-20 tracking-widest">
        <div className="flex justify-center mb-1">
          <div className="w-7 h-7 rounded-full bg-[#7b2a26]"></div>
        </div>
        <h2 className="text-2xl md:text-4xl text-center uppercase font-bold text-[#222222]">
          CONCEPT DEVELOPMENT
        </h2>
        <h2 className="text-2xl md:text-4xl text-center uppercase font-bold text-[#222222] mb-4">
          & SCRIPTWRITING
        </h2>
        <h3 className="text-2xl text-center uppercase font-extrabold text-[#7b2a26] mb-3">
          SCRIPTING
        </h3>
        <h4 className="text-2xl text-center font-extrabold uppercase mb-6">
          WE OFFER:
        </h4>
        <div className="text-center space-y-1">
          <p className="text-[#222222] text-2xl">Story Ideation & Development</p>
          <p className="text-[#222222] text-2xl">Scriptwriting & Editing</p>
          <p className="text-[#222222] text-2xl">Series Bible & Character Development</p>
        </div>
        <div className="flex justify-center mt-16">
          <div className="w-36 h-3 bg-[#7b2a26]"></div>
        </div>
      </div>

      {/* Service 2: Pre-Production Planning - Full width background */}
      <div className="w-full bg-[#dcd3bf] pt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-[#7b2a26]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl text-center uppercase font-bold text-[#222222] mb-6">
            PRE-PRODUCTION PLANNING
          </h2>
          <h3 className="text-xl text-center uppercase font-medium text-[#7b2a26] mb-4">
            SETTING THE STAGE FOR SUCCESS
          </h3>
          <h4 className="text-lg text-center uppercase mb-5">
            OUR PRE-PRODUCTION SERVICES INCLUDE:
          </h4>
          <div className="text-center space-y-2">
            <p className="text-[#222222] text-lg">Casting & Talent Acquisition</p>
            <p className="text-[#222222] text-lg">Location Scouting & Set Design</p>
            <p className="text-[#222222] text-lg">Budgeting & Scheduling</p>
            <p className="text-[#222222] text-lg">Production Design & Costume Styling</p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-[#7b2a26]"></div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="flex justify-center mb-2">
          <div className="w-3 h-3 rounded-full bg-[#7b2a26]"></div>
        </div>
        <h2 className="text-2xl md:text-3xl text-center uppercase font-bold text-[#222222] mb-6">
          PRODUCTION & FILMING
        </h2>
        <h3 className="text-xl text-center uppercase font-medium text-[#7b2a26] mb-4">
          BRINGING STORIES TO LIFE
        </h3>
        <h4 className="text-lg text-center uppercase mb-5">
          OUR PRODUCTION SERVICES INCLUDE:
        </h4>
        <div className="text-center space-y-2">
          <p className="text-[#222222] text-lg">Cinematic Filming & Directing</p>
          <p className="text-[#222222] text-lg">High-Quality Cinematography</p>
          <p className="text-[#222222] text-lg">Production Management</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-[#7b2a26]"></div>
        </div>
      </div>

      {/* Service 4: Post-Production Mastery */}
      <div className="bg-[#dcd3bf] pt-16">
        <div className="flex justify-center mb-2">
          <div className="w-5 h-5 rounded-full bg-[#7b2a26]"></div>
        </div>
        <h2 className="text-2xl md:text-3xl text-center uppercase font-bold text-[#222222] mb-6">
          POST-PRODUCTION MASTERY
        </h2>
        <h3 className="text-xl text-center uppercase font-medium text-[#7b2a26] mb-4">
          PERFECTION EVERY FRAME
        </h3>
        <h4 className="text-lg text-center uppercase mb-5">
          WE PROVIDE:
        </h4>
        <div className="text-center space-y-2">
          <p className="text-[#222222] text-lg">Video Editing & Color Grading</p>
          <p className="text-[#222222] text-lg">Sound Design & Music Scoring</p>
          <p className="text-[#222222] text-lg">Visual Effects (VFX) & CGI</p>
          <p className="text-[#222222] text-lg">Subtitling & Localization</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-[#7b2a26]"></div>
        </div>
      </div>
    </div>
  );
}
