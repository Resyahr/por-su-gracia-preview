"use client";
import MobileMenu from "./MobileMenu";
import { IoLogoYoutube } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import ReusableCTAButton from "../reusable/CTAButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenutoggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      setIsMenuOpen(false);
    };

    const handleNavShadow = () => {
      const height = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (height > viewportHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleNavShadow();

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", handleResize);
    }

    window.addEventListener("scroll", handleNavShadow);

    return () => {
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
            ? "shadow-md backdrop-blur-2xl backdrop-filter bg-custom-text-muted/60"
            : "shadow-none bg-transparent"
        } ${
          isMenuOpen ? "shadow-none" : "shadow-md"
        } transition-all duration-500`}
      >
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex gap-2 items-center justify-between transition-opacity duration-300">
            <Logo isScrolled={isScrolled} />
          </div>

          <div className="flex gap-5 justify-between items-center">
            {/* Reusable CTA Buttons */}
            <div className="hidden md:flex gap-4 items-center justify-center">
              <ReusableCTAButton
                href="/donations"
                text="Donar"
                icon={<FaHeart color="white" />}
                background="bg-custom-primary"
              />
              <ReusableCTAButton
                href="/live"
                text="Transmisión"
                icon={<IoLogoYoutube color="white" />}
                background="bg-custom-accent"
              />
            </div>

            {/* Mobile Menu Icon */}
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
