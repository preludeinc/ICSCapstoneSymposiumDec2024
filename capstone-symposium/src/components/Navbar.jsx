import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { siteConfig } from "../config/site";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleNavToggle() {
      setWindowSize(window.innerWidth);
    }
    // Monitors window size and removes on cleanup
    window.addEventListener("resize", handleNavToggle);
    return () => window.removeEventListener("resize", handleNavToggle);
  }, []);

  const largerScreen = windowSize > 1024;

  return (
    <nav className="navbar fixed" position="sticky">
      {" "}
      {/* Displays logo on larger screen, smaller shows hamburger */}
      {largerScreen ? (
        <h6 className="navbar-title items-center fixed">
          <Snippet size-="lg">Camosun ICS Capstone</Snippet>
        </h6>
      ) : (
        <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
      )}
      <div className="flex-1 flex items-center justify-end">
        {largerScreen ? (
          <div className="justify-end items-center">
            {siteConfig.navItems.map((item) => {
              return (
                <Link key={item.href} href={item.href} className="navbar-link">
                  {item.label}
                </Link>
              );
            })}
          </div>
        ) : (
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
        )}
      </div>
    </nav>
  );
};

