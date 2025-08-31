// components/ProjectCard.tsx

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

export default function ProjectCard({
  id,
  title,
  shortDescription,
  image,
  technologies,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-teal-500 drop-shadow-[2px_2px_2px_black]">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/projects/${id}`}
            className="text-gray-400 hover:text-gray-200 font-semibold transition-colors duration-200"
          >
            Details
          </Link>
          <div className="flex gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
