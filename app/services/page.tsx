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
    <div className="min-h-screen pt-16 pb-16 bg-[#d8cab0]">
      <div className={`container mx-auto px-4 md:px-8 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main heading */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-5xl md:text-6xl text-[#222222] font-bold uppercase">OUR SERVICES</h1>
        </div>

        {/* Service 1: Concept Development */}
        <div className="mb-16">
          <div className="flex justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-[#7b2a26]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl text-center uppercase font-bold text-[#222222] mb-1">
            CONCEPT DEVELOPMENT
          </h2>
          <h2 className="text-2xl md:text-3xl text-center uppercase font-bold text-[#222222] mb-6">
            & SCRIPTWRITING
          </h2>
          <h3 className="text-xl text-center uppercase font-medium text-[#7b2a26] mb-4">
            SCRIPTING
          </h3>
          <h4 className="text-lg text-center uppercase mb-5">
            WE OFFER:
          </h4>
          <div className="text-center space-y-2">
            <p className="text-[#222222] text-lg">Story Ideation & Development</p>
            <p className="text-[#222222] text-lg">Scriptwriting & Editing</p>
            <p className="text-[#222222] text-lg">Series Bible & Character Development</p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-[#7b2a26]"></div>
          </div>
        </div>

        {/* Service 2: Pre-Production Planning */}
        <div className="mb-16">
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

        {/* Service 3: Production & Filming */}
        <div className="mb-16">
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
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-[#7b2a26]"></div>
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
    </div>
  );
}
