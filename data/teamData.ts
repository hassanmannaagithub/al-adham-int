// Data types for team members
export interface TeamMember {
  id: number;
  name: string;
  position: string[];
  image: string;
}
 
// Data for team members
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'MOUMEN ALMALLA',
    position: ['CEO, Founder,', 'Director And Producer'],
    image: '/person-1.png'
  },
  {
    id: 2,
    name: 'SARIA HALLAK',
    position: ['Head Of Legal', 'And Business Affairs'],
    image: '/person-2.png'
  },
  {
    id: 3,
    name: 'AHMAD ALMALLA',
    position: ['Creative Producer', 'And Head Of Content'],
    image: '/person-3.png'
  },
  {
    id: 4,
    name: 'RUBA ALMALLA',
    position: ['Creative Producer', 'And Head Of', 'Communications'],
    image: '/person-4.png'
  },
  {
    id: 5,
    name: 'YAMEN ABD ALNOUR',
    position: ['Director And', 'Content Strategist'],
    image: '/person-5.png'
  }
]; 