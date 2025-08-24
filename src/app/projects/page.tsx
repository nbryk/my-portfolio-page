import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">My projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              shortDescription={project.shortDescription}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
