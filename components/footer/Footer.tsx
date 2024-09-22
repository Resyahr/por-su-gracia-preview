"use client";

import { TypographyP } from "@/components/text/p";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-custom-background-dark text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Left Section: Church Info */}
        <div>
          <h3 className="text-2xl font-bold text-custom-primary mb-4">
            Por su Gracia International Church
          </h3>
          <TypographyP className="text-gray-400 mb-4">
            Calle Ficticia 123, 01067 Dresden, Alemania
          </TypographyP>
          <TypographyP className="text-gray-400">
            Email: contacto@porsugracia.com
          </TypographyP>
        </div>

        {/* Center Section: Links */}
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-custom-primary mb-4">Enlaces</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contáctanos
              </a>
            </li>
            <li>
              <a href="#donation" className="hover:text-white transition-colors">
                Donar
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Links */}
        <div>
          <h4 className="text-xl font-bold text-custom-primary mb-4">Síguenos</h4>
          <div className="flex gap-6">
            <Link
              href="https://facebook.com"
              className="text-gray-300 hover:text-custom-primary transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-300 hover:text-custom-primary transition"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-300 hover:text-custom-primary transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <TypographyP className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Por su Gracia International Church. Todos los derechos reservados.
          </TypographyP>

          <Button className="bg-custom-primary text-white mt-4 md:mt-0 hover:bg-custom-accent transition" size="sm">
            Únete a nosotros
          </Button>
        </div>
      </div>
    </footer>
  );
}