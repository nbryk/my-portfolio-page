// src/app/projects/[id]/page.tsx

import { projectsData } from "@/data/projectsData";
import Layout from "@/components/Layout";
import SwiperCarousel from "@/components/SwiperCarousel";
import React from "react";

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
  const awaitedParams = await params;
  const project = projectsData.find((p) => p.id === awaitedParams.id);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto p-8 text-white text-center">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="mt-4">Go to the projects page to see other works.</p>
        </div>
      </Layout>
    );
  }

  // const lines = project.longDescription.split("\n");

  return (
    <Layout>
      <div className="container mx-auto p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {project.detailedImages && project.detailedImages.length > 0 && (
          <SwiperCarousel
            images={project.detailedImages}
            projectTitle={project.title}
          />
        )}

        <div className="flex flex-wrap gap-2 mb-8 mt-8">
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

        <p
          className="text-lg mb-8 text-slate-300"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {project.longDescription}
        </p>

        {/* {project.detailedImages && project.detailedImages.length > 0 && (
          <SwiperCarousel
            images={project.detailedImages}
            projectTitle={project.title}
          />
        )} */}
      </div>
    </Layout>
  );
}
