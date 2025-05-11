import Image from "next/image";
import { Button } from "@/components/ui/button";
import {  Users, Shield, Award, Clock } from "lucide-react";
import { images } from "@/utiils/assets";

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-full min-h-[400px]">
            <div className="absolute -left-8 -top-8 z-0 h-full w-full rounded-2xl bg-primary/10"></div>
            <div className="relative z-10 h-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={images.whoweare}
                alt="24CarServiceDubai Team"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center gap-2">
                  <Users className="h-8 w-8 text-green-400" />
                  <span className="text-xl font-bold">Since 2010</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 ">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-primary">Who We Are</span> - Your Trusted Car Care Partner
            </h2>
            <p className="text-lg text-gray-600">
              24CarServiceDubai is a premier automotive service center with over a decade of 
              experience serving Dubai’s drivers. Our team of certified technicians delivers 
              exceptional car care with honesty and expertise.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Expert Team",
                  description: "ASE-certified technicians with 10+ years experience"
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  title: "Reliable Service",
                  description: "12-month warranty on all repairs and services"
                },
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: "Award Winning",
                  description: "Recognized as Dubai's best auto service center 2023"
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  title: "Quick Turnaround",
                  description: "90% of repairs completed within 24 hours"
                }
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 p-2">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="rounded-xl bg-primary/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
              <p className="text-gray-700">
  &ldquo;To provide unparalleled 24/7 on-demand car services throughout Dubai with 
  immediate, reliable, and professional assistance that keeps our customers 
  moving safely on the road.&rdquo;
</p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="h-12 px-8 text-lg">
                Meet Our Team
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/10">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}