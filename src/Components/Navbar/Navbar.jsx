import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // prevent background scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md shadow-md border-b border-white/10"
            : "bg-black/40 backdrop-blur-sm border-b border-white/10"
        }`}
      >
        <div className="flex justify-between items-center text-white px-6 py-4 md:px-20">
          <span className="text-2xl font-extrabold tracking-wide cursor-pointer">
            Portfolio
          </span>

          <ul className="hidden md:flex gap-8 font-semibold">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item}`}>
                <li className="relative group cursor-pointer">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
                </li>
              </a>
            ))}
          </ul>

          <button
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((s) => !s)}
          >
            {menuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-45 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        {/* actual overlay color */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* SIDE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-hidden={!menuOpen}
      >
        {/* Use a solid background. If your Tailwind doesn't support bg-NN you can use inline style fallback (shown below) */}
        <div
          className="h-full text-white shadow-2xl p-6"
          style={{ backgroundColor: "rgba(10,10,10,0.96)" }}
        >
          <button
            className="absolute top-4 right-4"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <RiCloseLine size={28} />
          </button>

          <ul className="mt-16 flex flex-col gap-6 text-center font-semibold">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                <li className="py-2 hover:text-blue-400 transition">{item}</li>
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
