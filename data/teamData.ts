// Data types for team members
export interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
  }
  
  // Data for team members
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'MOUMEN ALMALLA',
      position: 'CEO, Founder, Director And Producer',
      image: '/api/placeholder/370/370'
    },
    {
      id: 2,
      name: 'SARIA HALLAK',
      position: 'Head Of Legal And Business Affairs',
      image: '/api/placeholder/370/370'
    },
    {
      id: 3,
      name: 'AHMAD ALMALLA',
      position: 'Creative Producer And Head Of Content',
      image: '/api/placeholder/370/370'
    },
    {
      id: 4,
      name: 'RUBA ALMALLA',
      position: 'Creative Producer And Head Of Communications',
      image: '/api/placeholder/370/370'
    },
    {
      id: 5,
      name: 'YAMEN ABD ALNOUR',
      position: 'Director and content strategist',
      image: '/api/placeholder/370/370'
    }
  ];