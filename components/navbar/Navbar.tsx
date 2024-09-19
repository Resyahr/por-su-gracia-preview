"use client";
import MobileMenu from "./MobileMenu";

import { IoLogoYoutube } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenutoggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleCloseMenu = () => {
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

    if (isMenuOpen) {
      document.body.addEventListener("click", handleCloseMenu);
    }

    window.addEventListener("resize", handleCloseMenu);
    window.addEventListener("scroll", handleNavShadow);

    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
      window.removeEventListener("resize", handleCloseMenu);
      window.removeEventListener("scroll", handleNavShadow);
    };
  }, []);

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
        } ${
          isMenuOpen ? "shadow-none" : "shadow-md"
        } transition-all duration-500`}
      >
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex gap-2 items-center justify-between transition-opacity duration-300">
            <span
              className={`${
                isScrolled ? "w-12 h-12" : "w-16 h-16"
              } transition-all duration-300 bg-custom-primary rounded-full`}
            ></span>
            <span
              className={`${
                isScrolled ? "text-custom-primary" : "text-white"
              } text-lg font-bold tracking-tighter`}
            >
              Por su gracia
            </span>
          </div>

          <div className="flex gap-5 justify-between items-center  ">
            {/*  <DesktopLinks isScrolled={isScrolled} /> */}
            {/* Here the cta buttons */}
            <div className="hidden md:flex gap-4 itemce justify-center">
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
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />
    </>
  );
};

export default Navbar;
