import { Link } from "@nextui-org/link";
import { siteConfig } from "../config/site";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar fixed w-full h-64" position="sticky">
      <div className="flex items-center w-full h-full">
        <Hamburger toggled={isOpen} size={35} toggle={setOpen} />
        <h1 className="text-2xl md:ml-4 pt-4 md:text-3xl">Camosun Capstone</h1>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="nav-mobile-container top-0">
            <ul className="grid gap-2">
              {siteConfig.navItems.map((item) => {
                return (
                  <li key={item.href} className="nav-mobile-links">
                    <Link href={item.href} className="nav-mobile-link">
                      <span className="flex gap-1 text-2xl text-semibold pr-1">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

