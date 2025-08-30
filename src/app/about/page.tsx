import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-teal-400 drop-shadow-lg">
          About me
        </h1>
        <p className="mb-4 text-base leading-loose text-gray-300">
          Hi! My name is Nadiia, and I&apos;m a{" "}
          <span className="text-teal-400 font-medium">
            front-end/full-stack developer
          </span>{" "}
          specializing in creating responsive and interactive web interfaces.
        </p>
        <p className="mb-4 text-base leading-loose text-gray-300">
          My journey into IT is a story of passion and persistence. I&apos;m
          proud to have made the switch, as becoming a developer has been a
          long-held dream that I&apos;ve finally achieved. It&apos;s a story
          that includes years of self-discovery, diligent study, and the
          successful completion of the Mate Academy program.
        </p>
        <p className="mb-4 text-base leading-loose text-gray-300">
          Today, I have experience as a Junior-level developer, but I believe
          this is just the beginning. In my projects, I use:
        </p>
        <ul className="flex flex-wrap gap-3 mb-6">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "HTML",
            "CSS",
            "TailwindCSS",
            "Git",
            "Figma",
            "API Integration",
          ].map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-slate-600 text-gray-200 rounded-full text-sm shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="bg-slate-700/50 rounded-lg p-4">
          <p className="mb-4 text-base leading-loose text-gray-300">
            I believe that age and gender are not barriers to professional
            growth, but rather sources of unique experience. My previous
            background and ability to overcome challenges allow me to adapt
            quickly to new tasks. I easily dive into component logic, enjoy
            working in a team, and value open, non-toxic communication.
          </p>
          <p className="mb-4 text-base leading-loose text-gray-300">
            I am looking for a team where I can not only apply my knowledge but
            also grow as a professional. If you are looking for a genuine,
            dedicated, and persistent developer, I am the one you are looking
            for.
          </p>
        </div>
      </div>
    </Layout>
  );
}
