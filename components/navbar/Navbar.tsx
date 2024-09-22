"use client";
import MobileMenu from "./MobileMenu";

import { IoLogoYoutube } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

import { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import Logo from "../Logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Creamos un ref para referenciar el MobileMenu
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenutoggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si el clic fue fuera del MobileMenu, cerramos el menú
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      setIsMenuOpen(false);
    };

    const handleNavShadow = () => {
      const height = window.scrollY;

      if (height > 360) {
        setIsScrolled(true);
        console.log("Set border");
      } else {
        setIsScrolled(false);
      }
    };

    // Solo agregamos los event listeners cuando el menú está abierto
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", handleResize);
    }

    window.addEventListener("scroll", handleNavShadow);

    return () => {
      // Removemos los event listeners cuando el componente se desmonta o el menú se cierra
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleNavShadow);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed z-50 top-0 left-0 right-0 w-full ${
          isScrolled
            ? "shadow-md backdrop-blur-2xl backdrop-filter bg-white/80"
            : "shadow-none bg-transparent"
        } ${isMenuOpen ? "shadow-none" : "shadow-md"} transition-all duration-500`}
      >
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex gap-2 items-center justify-between transition-opacity duration-300">
            <Logo isScrolled={isScrolled} />
          </div>

          <div className="flex gap-5 justify-between items-center">
            {/*  <DesktopLinks isScrolled={isScrolled} /> */}
            {/* Here the cta buttons */}
            <div className="hidden md:flex gap-4 items-center justify-center">
              <Button className="flex gap-2 bg-custom-primary" size={"sm"}>
                <span> Donar </span> <FaHeart color="white" />
              </Button>
              <Button className="flex gap-2 bg-custom-red" size={"sm"}>
                <span className="text-white"> Transmisión </span>{" "}
                <IoLogoYoutube color="white" />
              </Button>
            </div>

            <div>
              {isMenuOpen ? (
                <RiCloseFill
                  size={30}
                  color={`${isScrolled ? "gray" : "white"}`}
                  onClick={handleMenutoggle}
                />
              ) : (
                <RiMenu4Fill
                  size={30}
                  color={`${isScrolled ? "gray" : "white"}`}
                  onClick={handleMenutoggle}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Añadimos el ref al MobileMenu */}
      <div ref={menuRef}>
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isScrolled={isScrolled}
        />
      </div>
    </>
  );
};

export default Navbar;