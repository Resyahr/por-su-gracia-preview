"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TypographyP } from "../text/p";

const UnderConstructionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenModal", "true"); // Set flag in local storage
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogTitle className="text-lg font-bold">Sitio en Construcción 🚧</DialogTitle>
        <TypographyP className="text-gray-500">
          Esta página está bajo construcción y no representa la versión final del proyecto.
          Gracias por tu paciencia mientras seguimos trabajando.
        </TypographyP>
        <div className="mt-4 flex justify-end">
          <Button onClick={handleClose} className="bg-custom-primary text-white">
            Entendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UnderConstructionModal;