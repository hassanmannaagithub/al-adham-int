'use client';

import TeamMember from '@/components/TeamMember';
import { teamMembers } from '@/data/teamData';

export default function TeamPage() {
  // Split team members into rows for large screens to maintain original layout
  const topRowMembers = teamMembers.slice(0, 2);
  const bottomRowMembers = teamMembers.slice(2);
  
  return (
    <div className="min-h-screen bg-[#dfd9ca]">
      {/* Team Section with Beige Background */}
      <section className="py-48">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-24 max-w-screen-2xl">
          {/* Section Title */}
          <h1 className="text-super-title md:text-super-title font-light text-center mb-16 md:mb-24 lg:mb-32 pt-3">
            OUR TEAM
          </h1>
          
          {/* Small and Medium screens: Grid layout (1 or 2 per row) */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex justify-center ${
                  teamMembers.length % 2 !== 0 &&
                  index === teamMembers.length - 1 &&
                  "md:col-span-2"
                }`}
              >
                <TeamMember
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  imageSize="medium"
                />
              </div>
            ))}
          </div>
          
          {/* Large screens: Original layout (2 top, 3 bottom) */}
          <div className="hidden lg:flex lg:flex-col lg:space-y-16 xl:space-y-28">
            {/* Top Row - 2 Members */}
            <div className="flex flex-row justify-center lg:gap-16 xl:gap-24 2xl:gap-32">
              {topRowMembers.map((member) => (
                <div key={member.id} className="flex justify-center">
                  <TeamMember
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    imageSize="large"
                  />
                </div>
              ))}
            </div>
            
            {/* Bottom Row - 3 Members */}
            <div className="flex flex-row justify-center lg:gap-12 xl:gap-16 2xl:gap-24">
              {bottomRowMembers.map((member) => (
                <div key={member.id} className="flex justify-center">
                  <TeamMember
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    imageSize="large"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}