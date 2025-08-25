"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data_content";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b
     border-gray-100 z-50 ">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-extrabold tracking-tight">
          Balance<span className="text-primary">Yoga</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Contact Today
          </a>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container flex flex-col py-4 gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-primary text-white px-4 py-2 rounded-full w-max font-semibold">
              Contact Today
            </a>
          </div>
        </div>
      )}
    </header>
  );
}