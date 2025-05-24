// import Image from "next/image";
// import { CheckCircle2, ShieldCheck, Wrench, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function TrustedService() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Image Section */}
//           <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl">
//             <Image
//               src="https://img.freepik.com/free-photo/mechanic-man-uniform-holding-wrenches-auto-service-center-smiling-camera_496169-1000.jpg?t=st=1746875957~exp=1746879557~hmac=e38a8a718281435b7f985692e92bd36f91dbbdfecf814e46a1d851d650f05d67&w=996"
//               alt="Trusted Car Service in Dubai"
//               fill
//               className="object-cover"
//               quality={100}
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
//               <div className="flex items-center gap-2">
//                 <ShieldCheck className="h-8 w-8 text-green-400" />
//                 <span className="text-xl font-bold">Certified Technicians</span>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
//               Why Choose Our{" "}
//               <span className="text-primary">Trusted Service</span>
//             </h2>
//             <p className="text-lg text-gray-600">
//               With over 15 years of experience in Dubai’s automotive industry,
//               we provide unmatched expertise and care for your vehicle.
//             </p>

//             {/* Features List */}
//             <div className="grid gap-4 sm:grid-cols-2">
//               {[
//                 {
//                   icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
//                   title: "100% Satisfaction",
//                   desc: "Guaranteed quality service every time",
//                 },
//                 {
//                   icon: <Wrench className="h-6 w-6 text-blue-500" />,
//                   title: "Advanced Tools",
//                   desc: "State-of-the-art diagnostic equipment",
//                 },
//                 {
//                   icon: <Clock className="h-6 w-6 text-orange-500" />,
//                   title: "Quick Service",
//                   desc: "Most repairs completed same day",
//                 },
//                 {
//                   icon: <ShieldCheck className="h-6 w-6 text-purple-500" />,
//                   title: "Warranty",
//                   desc: "12-month warranty on all services",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="mt-1 rounded-full bg-primary/10 p-2">
//                       {feature.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold">{feature.title}</h3>
//                       <p className="text-gray-600">{feature.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               {[
//                 { value: "15+", label: "Years Experience" },
//                 { value: "10,000+", label: "Happy Clients" },
//                 { value: "24/7", label: "Emergency Service" },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="rounded-lg border border-primary/20 bg-primary/5 px-6 py-3 text-center"
//                 >
//                   <p className="text-2xl font-bold text-primary">
//                     {stat.value}
//                   </p>
//                   <p className="text-sm text-gray-600">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             <Button className="mt-6 h-12 px-8 text-lg">
//               Explore Our Services
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { 
  BadgeCheck, Zap, Clock, DollarSign, 
  MessageCircle, Shield, Leaf, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrustedService() {
  return (
    <section className="py-16 md:py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Animated header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-600 bg-green-100 rounded-full animate-pulse">
            Dubai's Preferred Choice
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-primary">
            Why Dubai Trusts <br/>
            <span className="text-primary">24 Car Service</span>
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* 3D Card with Parallax Effect */}
          <div className="relative group h-[500px] perspective-1000">
            <div className="relative h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-12">
              <div className="absolute inset-0 -mt-5 lg:-mt-20 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 backface-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/mechanic-man-uniform-holding-wrenches-auto-service-center-smiling-camera_496169-1000.jpg?t=st=1746875957~exp=1746879557~hmac=e38a8a718281435b7f985692e92bd36f91dbbdfecf814e46a1d851d650f05d67&w=996"
                  alt="Luxury car service in Dubai"
                  fill
                  className=" opacity-70 w-[300px] h-[300px]"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <div className="space-y-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-500/20">
                        <BadgeCheck className="h-6 w-6 text-green-400" />
                      </div>
                      <span className="text-xl font-bold">Dubai's Most Trusted</span>
                    </div>
                    <h3 className="text-3xl font-bold">Premium Car Care <br/>Redefined</h3>
                    <div className="flex flex-wrap gap-4">
                      {["10,000+ Cars Repaired", "4.9 ★ Google Rating", "98% Retention"].map((stat, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Feature Grid */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              With 15+ years perfecting automotive excellence in Dubai, we combine cutting-edge technology with artisan craftsmanship for your luxury vehicle.
            </p>

            {/* Hexagonal Grid Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <BadgeCheck className="h-6 w-6" />, title: "Certified Technicians", color: "text-green-500" },
                { icon: <Zap className="h-6 w-6" />, title: "On-Demand Service", color: "text-yellow-500" },
                { icon: <Clock className="h-6 w-6" />, title: "24/7 Availability", color: "text-blue-500" },
                { icon: <DollarSign className="h-6 w-6" />, title: "Transparent Pricing", color: "text-emerald-500" },
                { icon: <MessageCircle className="h-6 w-6" />, title: "Free Consultation", color: "text-purple-500" },
                { icon: <Shield className="h-6 w-6" />, title: "Guaranteed Repairs", color: "text-red-500" },
                { icon: <Leaf className="h-6 w-6" />, title: "Eco-Friendly", color: "text-teal-500" },
                { icon: <Leaf className="h-6 w-6" />, title: "Hassle-Free Booking", color: "text-teal-500" },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="p-2 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/20 group border border-primary"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${feature.color}/10 group-hover:bg-primary/10 transition-colors`}>
                      <div className={feature.color}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-md font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "15+", label: "Years", decoration: "🏆" },
                { value: "10k+", label: "Clients", decoration: "🚗" },
                { value: "24/7", label: "Support", decoration: "⏱️" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 text-center hover:shadow-lg transition-all border border-primary"
                >
                  <p className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
                    {stat.value} <span className="text-xl">{stat.decoration}</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Glowing CTA */}
            <Button className="mt-8 h-14 px-8 text-lg font-medium rounded-xl bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group">
              Explore Premium Services
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}