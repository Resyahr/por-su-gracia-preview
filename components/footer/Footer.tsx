"use client";

import { TypographyP } from "@/components/text/p";
import ReusableCTAButton from "@/components/reusable/CTAButton"; // Import the reusable CTAButton
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TypographyH4 } from "../text/h4";

// Social media data array
const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: FaYoutube,
  },
  {
    href: "https://instagram.com/por_sugracia28",
    label: "Instagram",
    icon: FaInstagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-20">
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
            <Link href={"mailto:john@example.com"}>
              Email: contacto@porsugracia.com
            </Link>
          </TypographyP>
          <TypographyP className="text-gray-400">
            <Link
              href={"https://wa.me/15551234567"}
              className="flex gap-2 items-center justify-start"
            >
              Whatsapp: <FaWhatsapp /> 15551234567
            </Link>
          </TypographyP>
        </div>

        {/* Center Section: Links */}
        <div className="flex flex-col md:justify-self-center">
          <TypographyH4 className=" text-custom-primary mb-4">
            Enlaces
          </TypographyH4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about-us"
                className="hover:text-white transition-colors"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contáctanos
              </Link>
            </li>
            <li>
              <Link
                href="/donations"
                className="hover:text-white transition-colors"
              >
                Donar
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Links */}
        <div>
          <TypographyH4 className="text-xl font-bold text-custom-primary mb-4">
            Síguenos
          </TypographyH4>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <Link
                target="_blank"
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-300 hover:text-custom-primary transition p-2 rounded-full border border-white"
              >
                <social.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <TypographyP className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Por su Gracia International Church.
            Todos los derechos reservados.
          </TypographyP>

          {/* Reusable CTAButton with link to Get Involved page */}
          <ReusableCTAButton
            href="/get-involved"
            text="Únete a nosotros"
            background="bg-custom-primary hover:bg-custom-accent"
            size="sm"
          />
        </div>
      </div>
    </footer>
  );
}