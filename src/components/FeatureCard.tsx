import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-border/50">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-primary">{description}</p>
      </div>
    </Card>
  );
};
