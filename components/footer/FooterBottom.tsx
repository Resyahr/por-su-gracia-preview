"use client";

import { TypographyP } from "@/components/text/p";
import ReusableCTAButton from "../reusable/CTAButton";

const FooterBottom = () => {
  return (
    <div className="border-t border-gray-600 mt-8 pt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <TypographyP className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Por su Gracia International Church. Todos
          los derechos reservados.
        </TypographyP>

        <ReusableCTAButton
          background=" bg-custom-primary text-white mt-4 md:mt-0 hover:bg-custom-accent transition"
          href="/get-involved"
          size="sm"
          text="Únete a nosotros"
        />
      </div>
    </div>
  );
};

export default FooterBottom;
