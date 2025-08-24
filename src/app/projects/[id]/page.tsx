// src/app/projects/[id]/page.tsx

import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import Layout from "@/components/Layout";

// Ця функція генерує динамічні шляхи для статичної генерації
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Компонент сторінки деталей проєкту
export default async function ProjectDetails({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto p-8 text-white text-center">
          <h1 className="text-3xl font-bold">Проєкт не знайдено</h1>
          <p className="mt-4">
            Перейдіть на сторінку проєктів, щоб переглянути інші роботи.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mb-8">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
          >
            Демо
          </a>
        </div>
        <p className="text-lg mb-8 text-slate-300">{project.longDescription}</p>

        {project.detailedImages && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.detailedImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Скріншот проєкту ${project.title} ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
