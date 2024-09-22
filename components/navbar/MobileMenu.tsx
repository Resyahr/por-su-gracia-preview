"use client";

import Link from "next/link";
import navLinks from "./navLinks";
import { RiCloseFill } from "react-icons/ri";
import Logo from "../Logo";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
  isScrolled: boolean;
}) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleAccordionClick = (event: React.MouseEvent) => {
    // Detenemos la propagación del evento para que no cierre el menú
    event.stopPropagation();
  };

  return (
    <div
      className={`fixed top-0 transition-all duration-300 z-50 w-full md:w-2/5 lg:w-3/6 ${
        isMenuOpen ? "right-0 h-full" : "-right-full h-0"
      } backdrop-blur-3xl shadow-md bg-black/35`}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-2 items-center justify-center">
          <Logo />
        </div>
        <span onClick={() => setIsMenuOpen(false)}>
          <RiCloseFill size={40} color="white" />
        </span>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {navLinks.map((link, index) => {
          if (!Array.isArray(link)) {
            const { href, text, icon: Icon, subLinks } = link;

            // Si el link contiene subLinks, lo hacemos un Accordion
            if (subLinks && subLinks.length > 0) {
              return (
                <AccordionItem value={text} key={index} className="px-4 py-2 md:px-12 w-full ≈">
                  <AccordionTrigger onClick={handleAccordionClick}>
                    <div className="flex items-center gap-4 text-sm md:text-lg font-bold text-white">
                      <Icon fontSize={20} className="text-white" />
                      {text}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 ">
                    {subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href!}
                        className="block text-white text-sm  hover:bg-custom-primary hover:text-white"
                        onClick={handleLinkClick}
                      >
                        {subLink.text}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              );
            }

            // Si no tiene subLinks, renderizamos el link normal sin icono de Accordion
            return (
              <div key={href} className="px-4 py-2 md:px-12 w-full  hover:bg-custom-primary hover:text-white">
                <Link
                  href={href!}
                  className="flex justify-start items-center w-full text-sm md:text-lg font-bold text-white"
                  onClick={handleLinkClick}
                >
                  <Icon fontSize={20} className="mr-2 text-white" /> {/* Color corregido */}
                  {text}
                </Link>
              </div>
            );
          } else {
            // Para los links de redes sociales (sin accordion)
            return (
              <div
                key={`social-icons-${index}`}
                className="flex gap-4 items-center justify-center mt-6"
              >
                {link.map(({ href, icon: Icon }) => (
                  <Link key={href} href={href} onClick={handleLinkClick}>
                    <Icon
                      fontSize={30}
                      className="hover:text-custom-primary transition duration-300"
                      color={
                        href.includes("youtube")
                          ? "red"
                          : href.includes("facebook")
                          ? "blue"
                          : "pink"
                      }
                    />
                  </Link>
                ))}
              </div>
            );
          }
        })}
      </Accordion>
    </div>
  );
};

export default MobileMenu;