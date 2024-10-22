import { Link } from "@nextui-org/link";
import { siteConfig } from "../config/site";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar fixed" position="sticky">
      <Hamburger toggled={isOpen} size={35} toggle={setOpen} />
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

