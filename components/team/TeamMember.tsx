import Image from 'next/image'
import { Github, Twitter, Linkedin } from 'lucide-react'

interface TeamMemberProps {
  name: string
  role: string
  year: string
  image: string
  github?: string
  twitter?: string
  linkedin?: string
}

export default function TeamMember({ name, role, year, image, github, twitter, linkedin }: TeamMemberProps) {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 text-center text-white hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 relative w-32 h-32 mx-auto">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-400 mb-2">{role}</p>
      <p className="text-gray-400 mb-4">{year}</p>
      <div className="flex justify-center space-x-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-[#6d2aa3] transition-colors duration-300">
            <Github size={20} />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#6d2aa3] transition-colors duration-300">
            <Twitter size={20} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#6d2aa3] transition-colors duration-300">
            <Linkedin size={20} />
          </a>
        )}
      </div>
    </div>
  )
}

