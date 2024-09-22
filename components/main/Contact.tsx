"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Debes ingresar un correo electrónico válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export function ContactForm() {
  // Initialize React Hook Form with Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values: ", values);
    // You can replace this with actual submission logic (e.g., API call)
  }

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-custom-primary text-center">
              Contáctanos
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row gap-8">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre completo"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Por favor ingresa tu nombre completo.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tuemail@ejemplo.com"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Te contactaremos a través de este correo.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escribe tu mensaje aquí..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Por favor ingresa los detalles de tu consulta.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-custom-primary text-white"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </Form>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full lg:w-1/2">
              <iframe
                className="w-full h-[300px] lg:h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4781146274983!2d13.737262915516965!3d51.05040737956039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf8caa6b5b85%3A0xe5be097007c8a648!2sDresden!5e0!3m2!1sen!2sde!4v1630916189985!5m2!1sen!2sde"
                loading="lazy"
                allowFullScreen
                title="Church Location Map"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}