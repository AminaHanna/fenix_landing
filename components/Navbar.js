"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-wider">FENIX AIR</h1>
      <nav className="hidden md:flex space-x-6">
        <Link href="#services" className="hover:text-yellow-400 transition">Services</Link>
        <Link href="#about" className="hover:text-yellow-400 transition">About</Link>
        <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
      </nav>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
        Book Now
      </button>
    </header>
  );
}
