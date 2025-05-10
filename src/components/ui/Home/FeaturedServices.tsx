import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Droplet,
  Fan,
  Battery,
  Settings,
  CheckCircle2,
} from "lucide-react";

export function FeaturedServices() {
  const services = [
    {
      title: "Car AC Repair",
      description:
        "Professional AC diagnosis and repair to keep you cool in Dubai&apos;s heat",
      icon: <Fan className="h-8 w-8 text-blue-500" />,
      image:
        "https://www.24carservicedubai.com/_next/image?url=https%3A%2F%2Fi.ibb.co%2F3M1rWfR%2Fcar-bettery-repair-replace.pnghttps%3A%2F%2Fi.ibb.co%2FD4qgrX2%2Fcar-bettery-repair-replace.webp&w=640&q=75",
      features: ["Gas refill", "Compressor repair", "Cooling system check"],
    },
    {
      title: "Battery Replacement",
      description: "Premium quality batteries with 2-year warranty",
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      image: "/images/battery-service.jpg",
      features: ["Free installation", "Battery testing", "Electrical check"],
    },
    {
      title: "Oil Change Service",
      description: "Full synthetic oil changes with genuine filters",
      icon: <Droplet className="h-8 w-8 text-green-500" />,
      image: "/images/oil-change.jpg",
      features: ["Engine flush", "Oil filter replacement", "Fluid top-up"],
    },
    {
      title: "Brake Service",
      description: "Complete brake inspection and repair",
      icon: <Droplet className="h-8 w-8 text-red-500" />,
      image: "/images/brake-service.jpg",
      features: ["Pad replacement", "Rotor resurfacing", "Brake fluid change"],
    },
    {
      title: "Engine Diagnostic",
      description: "Advanced computer diagnostics for all makes",
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      image: "/images/engine-check.jpg",
      features: [
        "Fault code reading",
        "Performance tuning",
        "Full system scan",
      ],
    },
    {
      title: "Full Car Service",
      description: "Comprehensive 50-point vehicle inspection",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      image: "/images/full-service.jpg",
      features: ["Oil change", "Brake check", "Electrical inspection"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            Featured <span className="text-primary">Car Repair</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional automotive solutions tailored for Dubai&apos;s climate and
            driving conditions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/car-repairman-wearing-white-uniform-standing-holding-wrench-that-is-essential-tool-mechanic_1150-16588.jpg?ga=GA1.1.1132165469.1746879320&semt=ais_hybrid&w=740 "
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white p-2 shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-4 text-gray-600">{service.description}</p>

                <div className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
