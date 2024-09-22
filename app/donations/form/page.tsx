"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SubHero } from "@/components/reusable/SubHero";

// Define form schema with Zod
const donationSchema = z.object({
  customAmount: z
    .number()
    .min(1, { message: "El monto debe ser mayor que 1" })
    .refine((value) => value >= 1, "El monto debe ser mayor que 1"),
});

export default function DonationsForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const form = useForm({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      customAmount: 10, // Default custom donation amount
    },
  });

  // Handle form submission for custom amount
  const onSubmit = (data: { customAmount: number }) => {
    console.log("Custom donation amount:", data.customAmount);
    // Here you would integrate with your payment processor (PayPal, Stripe, etc.)
  };

  return (
    <>
    <SubHero title="Donar" />
    <section className="py-12 bg-custom-background-light text-center px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-custom-primary font-semibold mb-8">
          Haz una Donación
        </h2>
        <p className="text-custom-text-muted text-lg mb-8">
          Tu generosidad ayuda a que nuestra iglesia siga creciendo y llevando el mensaje de Dios a más personas.
        </p>

        {/* Predefined Donation Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[10, 50, 100].map((amount) => (
            <Card
              key={amount}
              className={`cursor-pointer hover:shadow-md transition-transform transform hover:scale-105 ${
                selectedAmount === amount ? "ring ring-custom-primary" : ""
              }`}
              onClick={() => setSelectedAmount(amount)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold">${amount}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-custom-text-muted">
                  Donar ${amount} para apoyar nuestra iglesia.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Donation Amount Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="customAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad Personalizada</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Introduce una cantidad"
                      {...field}
                      className="text-center"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-custom-primary text-white mt-4"
            >
              Donar {selectedAmount ? `$${selectedAmount}` : "la cantidad personalizada"}
            </Button>
          </form>
        </Form>

        <p className="text-custom-text-muted mt-6">
          Todas las donaciones son seguras y van directamente al desarrollo de nuestra comunidad.
        </p>
      </div>
    </section>
    </>
  );
}