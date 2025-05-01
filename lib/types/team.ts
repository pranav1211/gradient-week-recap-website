export interface TeamMember {
    id: number;
    name: string;
    role: string;
    year: string;
    imageUrl: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
    bio?: string;
  }
  
  export interface TeamSection {
    id: number;
    title: string;
    members: TeamMember[];
  }