// import Image from "next/image";
// import { BookAppointmentButton } from "@/components/ui/Shared/Buttons/BookAppointmentButton/BookAppointmentButton";
// import { CallNowButton } from "../Shared/Buttons/CallNowButton/CallNowButton";
// import { WhatsAppButton } from "../Shared/Buttons/WhatsAppButton/WhatsAppButton";

// export default function HomeBanner() {
//   return (
//     <div className="relative">
//       {/* Hero Image */}
//       <div className="relative h-[70vh] min-h-[500px] w-full">
//         <Image
//           src="https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg?t=st=1746810342~exp=1746813942~hmac=5bd2a5975287822551c021b566dbf724b8739999523d5d9326727c80f725e280&w=900"
//           alt="24CarServiceDubai - Professional Car Service"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Hero Content - Centered */}
//         <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
//           <div className="mx-auto max-w-3xl px-4">
//             <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
//               Best Car Service in Dubai
//             </h1>
//             <p className="mt-4 text-lg sm:text-xl">
//               Your On-Demand Car Savior Anywhere, Anytime! 24/7 Emergency Services
//             </p>

//             <div className="flex gap-5 mt-5 container mx-auto">
//               <CallNowButton className="sm:w-auto" />
//               <BookAppointmentButton className="sm:w-auto" />
//               <WhatsAppButton className="sm:w-auto" />
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { BookAppointmentButton } from "@/components/ui/Shared/Buttons/BookAppointmentButton/BookAppointmentButton";
import { CallNowButton } from "../Shared/Buttons/CallNowButton/CallNowButton";
import { WhatsAppButton } from "../Shared/Buttons/WhatsAppButton/WhatsAppButton";
import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";

export default function HomeBanner() {
  return (
    <div className="relative overflow-hidden">
      {/* Glassmorphism Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-800 backdrop-blur-sm  z-0" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] animate-grid-move" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[80vh] flex items-center">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex mt-5 items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20"
              >
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-white">24/7 Emergency Services</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-white leading-tight mb-6"
              >
                Your Car, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Our Care</span> <br />
                Anytime. Anywhere in Dubai.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                On-demand mobile car repair & service at your doorstep — with transparent pricing and premium quality parts.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <CallNowButton className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-1" />
                <BookAppointmentButton className="px-8 py-4 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 shadow-lg shadow-white/20 hover:shadow-white/30 transition-all transform hover:-translate-y-1" />
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-500/20">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-white font-medium">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-500/20">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-white font-medium">Fast On-Site Repairs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-500/20">
                    <Shield className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-white font-medium">Service Guarantee</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[400px] rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <Image
                src="https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg?t=st=1746810342~exp=1746813942~hmac=5bd2a5975287822551c021b566dbf724b8739999523d5d9326727c80f725e280&w=900"
                alt="Professional car service in Dubai"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-6 right-6"
              >
                <WhatsAppButton className="p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-yellow-400/20 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-blue-400/20 blur-xl"
      />
    </div>
  );
}
