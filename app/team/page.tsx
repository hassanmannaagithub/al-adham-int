'use client';

import Header from '@/components/Header';
import TeamMember from '@/components/TeamMember';
import { teamMembers } from '@/data/teamData';

export default function TeamPage() {
  // Split team members into top row (2) and bottom row (3)
  const topRowMembers = teamMembers.slice(0, 2);
  const bottomRowMembers = teamMembers.slice(2, 5);

  return (
    <main className="min-h-screen">
      <Header showProductions={false} />
      
      {/* Team Section with Beige Background */}
      <section className="bg-[#dfd9ca] py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h1 className="text-4xl md:text-4xl font-light text-center mb-20">OUR TEAM</h1>
          
          {/* Custom Team Layout */}
          <div className="flex flex-col space-y-16">
            {/* Top Row - 2 Members */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 lg:gap-24">
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
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-8 lg:gap-16">
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
    </main>
  );
}