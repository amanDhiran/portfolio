import Link from "next/link";
import { FileDown } from 'lucide-react';

const navLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky mx-auto max-w-3xl flex-col px-8 top-0 z-50 bg-background/75 md:py-6 py-4 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          {navLinks.map((nav, id) => (
            <li key={id} className="text-[#ffffff8b] transition-colors hover:text-foreground">
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <a href="/resume.pdf" download={"Aman Dhiran Resume.pdf"}>
        <button className="px-3 flex gap-2 py-2 items-center hover:text-[#A374FF] transition-colors"><FileDown />Resume</button>
        </a>
      </nav>
    </header>
  );
}