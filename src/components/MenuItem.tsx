import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[var(--shadow-hover)] border-border/50"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-base text-primary">{name}</h3>
            <span className="text-primary font-bold whitespace-nowrap ml-2">{price} ₺</span>
          </div>
          <p className="text-xs text-primary/80 line-clamp-2">{description}</p>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="text-2xl font-bold text-primary mb-4">{name}</DialogTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={image}
              alt={name}
              className="w-full h-64 md:h-full object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-primary mb-4">{description}</p>
              </div>
              <div className="text-3xl font-bold text-primary">{price} ₺</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
