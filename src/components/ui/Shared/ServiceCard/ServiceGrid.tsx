// components/ServicesGrid.tsx
'use client'
import { Service } from "@/types";
import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = ({ services }: { services: any[] }) => {
    
  return (
    <div className="sm:w-[90%] lg:w-[95%] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
      {services.map((service, index:number) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};