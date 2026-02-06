import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const Navlinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tips",
      href: "/tips",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "About",
      href: "/about",
    },
  ];
  return (
    <>
      <div className="py-40">
        <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex">
          {Navlinks.map((link, idx) => (
            <Link
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="w-full relative group text-center py-3 text-lg text-neutral-500"
              href={link.href}
              key={link.name}
            >
              <span className="relative group-hover:text-neutral-400 text-neutral-500 z-20">
                {link.name}
              </span>
              {hovered === idx && (
                <motion.div
                  layoutId="hover"
                  className="absolute inset-0 rounded-full w-full h-full bg-black"
                ></motion.div>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
