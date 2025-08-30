"use client";
import Layout from "@/components/Layout";
import { Mail, Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

function PhoneLink() {
  const handleCall = () => {
    const confirmCall = window.confirm("Ви хочете подзвонити прямо зараз?");
    if (confirmCall) {
      window.location.href = "tel:+380679852981";
    }
  };

  return (
    <button
      onClick={handleCall}
      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors underline"
    >
      <Phone className="w-5 h-5" />
      +38 (067) 985-29-81
    </button>
  );
}

export default function Contacts() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold mb-8 text-teal-500">Contacts</h1>
        <p className="text-lg mb-6 text-slate-300">
          You can contact me in any convenient way 👇
        </p>

        <div className="flex flex-col gap-4 items-start">
          {/* Телефон */}
          <PhoneLink />

          {/* Email */}
          <a
            href="mailto:nadiiabrykwork@gmail.com"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors underline"
          >
            <Mail className="w-5 h-5" />
            nadiiabrykwork@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nadiia-b-34b22a284/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors underline"
          >
            <SiLinkedin className="w-5 h-5" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nbryk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors underline"
          >
            <SiGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </Layout>
  );
}
