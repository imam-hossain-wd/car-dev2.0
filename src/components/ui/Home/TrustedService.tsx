import Image from "next/image";
import { CheckCircle2, ShieldCheck, Wrench, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrustedService() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://img.freepik.com/free-photo/mechanic-man-uniform-holding-wrenches-auto-service-center-smiling-camera_496169-1000.jpg?t=st=1746875957~exp=1746879557~hmac=e38a8a718281435b7f985692e92bd36f91dbbdfecf814e46a1d851d650f05d67&w=996"
              alt="Trusted Car Service in Dubai"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">Certified Technicians</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Why Choose Our{" "}
              <span className="text-primary">Trusted Service</span>
            </h2>
            <p className="text-lg text-gray-600">
              With over 15 years of experience in Dubai’s automotive industry,
              we provide unmatched expertise and care for your vehicle.
            </p>

            {/* Features List */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
                  title: "100% Satisfaction",
                  desc: "Guaranteed quality service every time",
                },
                {
                  icon: <Wrench className="h-6 w-6 text-blue-500" />,
                  title: "Advanced Tools",
                  desc: "State-of-the-art diagnostic equipment",
                },
                {
                  icon: <Clock className="h-6 w-6 text-orange-500" />,
                  title: "Quick Service",
                  desc: "Most repairs completed same day",
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 text-purple-500" />,
                  title: "Warranty",
                  desc: "12-month warranty on all services",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-2">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10,000+", label: "Happy Clients" },
                { value: "24/7", label: "Emergency Service" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-primary/20 bg-primary/5 px-6 py-3 text-center"
                >
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button className="mt-6 h-12 px-8 text-lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
