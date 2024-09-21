"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/text/p"; // Assuming you have a custom Typography component
import { BsPinMap } from "react-icons/bs";


const AddressSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="flex items-center">
            <BsPinMap className="w-8 h-8 text-custom-primary mr-4" />
            <CardTitle className="text-2xl text-custom-primary">Dónde encontrarnos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <TypographyP className="text-lg text-gray-600 mb-4">
                Calle Ficticia 123, <br />
                01067 Dresden, Alemania
              </TypographyP>

              <TypographyP className="text-lg text-gray-600">
                <strong>Servicios Matutinos:</strong> <br />
                De Lunes a Viernes de 9:00 a 12:00
              </TypographyP>
              <TypographyP className="text-lg text-gray-600 mt-4">
                <strong>Servicios Vespertinos:</strong> <br />
                Todos los Domingos de 18:00 a 20:00
              </TypographyP>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full lg:w-1/2">
              <iframe
                className="w-full h-[300px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4781146274983!2d13.737262915516965!3d51.05040737956039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf8caa6b5b85%3A0xe5be097007c8a648!2sDresden!5e0!3m2!1sen!2sde!4v1630916189985!5m2!1sen!2sde"
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AddressSection;