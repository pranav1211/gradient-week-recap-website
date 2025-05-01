'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  className?: string;
}

export function TeamSection({ title, members, className }: TeamSectionProps) {
  return (
    <section className={cn('w-full', className)}>
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center max-w-sm p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="relative w-48 h-48 mb-6 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-purple-400 mb-4">{member.role}</p>
            <p className="text-gray-400 leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}