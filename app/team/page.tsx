'use client';

import Header from '@/components/Header';
import TeamMember from '@/components/TeamMember';
import { teamMembers } from '@/data/teamData';

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header showProductions={false} />
      
      {/* Team Section with Beige Background */}
      <section className="bg-[#e7e2cf] py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">OUR TEAM</h1>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-span-1">
                <TeamMember 
                  name={member.name}
                  position={member.position}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}