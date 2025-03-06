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
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h1 className="text-4xl md:text-4xl font-light text-center mb-20">OUR TEAM</h1>
          
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
                />
              </div>
            ))}
          </div>
          
          {/* Large screens: Original layout (2 top, 3 bottom) */}
          <div className="hidden lg:flex lg:flex-col space-y-16">
            {/* Top Row - 2 Members */}
            <div className="flex flex-row justify-center gap-24">
              {topRowMembers.map((member) => (
                <div key={member.id} className="flex justify-center">
                  <TeamMember
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                </div>
              ))}
            </div>
            
            {/* Bottom Row - 3 Members */}
            <div className="flex flex-row justify-center gap-16">
              {bottomRowMembers.map((member) => (
                <div key={member.id} className="flex justify-center">
                  <TeamMember
                    name={member.name}
                    position={member.position}
                    image={member.image}
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