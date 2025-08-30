"use client";
import Link from "next/link";
import Logo from "./Logo";
import { waLink } from "@/lib/links";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <nav className="container-p flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#services" className="hover:text-gray-700">Our Services</Link>
          <Link href="#work" className="hover:text-gray-700">Case Studies</Link>
          <Link href="#about" className="hover:text-gray-700">About Us</Link>
          <Link href="#insights" className="hover:text-gray-700">Blog</Link>
          <Link href="#careers" className="hover:text-gray-700">Careers</Link>
        </div>
        <a href={waLink()} className="btn btn-primary">Get in Touch</a>
      </nav>
    </header>
  );
}
