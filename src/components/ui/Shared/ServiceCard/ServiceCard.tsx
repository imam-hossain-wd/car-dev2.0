// components/service-card.tsx
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

export function ServiceCard({
  title,
  description,
  icon,
  image,
  features,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="mb-4 text-gray-600">{description}</p>

        <div className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Learn More
          </Button>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
}