import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl font-bold text-gray-300">Nadiia Bryk</h1>
      <nav className="space-x-4 text-gray-300">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}
