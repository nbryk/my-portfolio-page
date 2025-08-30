import Layout from "@/components/Layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        {/* Привітання */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
          Hi, I&apos;m <span className="text-teal-400">Nadiia</span>
        </h1>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-200">
          Frontend / Fullstack Developer
        </h2>

        {/* Короткий опис */}
        <p className="mt-4 max-w-2xl text-gray-400 text-lg">
          I build responsive, user-friendly web applications using{" "}
          <span className="text-sky-400 font-medium">React</span>,{" "}
          <span className="text-sky-400 font-medium">Next.js</span> and{" "}
          <span className="text-sky-400 font-medium">TypeScript</span>.
          Passionate about clean code, great UI/UX, and continuous learning.
        </p>

        {/* Кнопки */}
        <div className="flex gap-4 mt-8">
          <Link
            href="/projects"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contacts"
            className="px-6 py-3 border border-teal-500 text-teal-400 rounded-lg hover:bg-teal-500 hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>

        {/* Технології */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-gray-400">
          <span className="text-xl hover:text-white transition">⚛️ React</span>
          <span className="text-xl hover:text-white transition">▲ Next.js</span>
          <span className="text-xl hover:text-white transition">
            🟦 TypeScript
          </span>
          <span className="text-xl hover:text-white transition">
            🎨 TailwindCSS
          </span>
          <span className="text-xl hover:text-white transition">
            🖥️ Node.js
          </span>
        </div>
      </section>

      {/* <h1 className="text-2xl font-bold">Hello from Home!</h1>
      <h1>Ласкаво просимо!</h1>
      <p>Це головна сторінка мого портфоліо.</p> */}
    </Layout>
  );
}
