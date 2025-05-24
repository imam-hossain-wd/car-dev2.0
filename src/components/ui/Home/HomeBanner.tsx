import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookAppointmentButton } from "@/components/ui/Shared/Buttons/BookAppointmentButton/BookAppointmentButton";
import { CallNowButton } from "../Shared/Buttons/CallNowButton/CallNowButton";
import { WhatsAppButton } from "../Shared/Buttons/WhatsAppButton/WhatsAppButton";

export default function HomeBanner() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[500px] w-full">
        <Image
          src="https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg?t=st=1746810342~exp=1746813942~hmac=5bd2a5975287822551c021b566dbf724b8739999523d5d9326727c80f725e280&w=900"
          alt="24CarServiceDubai - Professional Car Service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content - Centered */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Best Car Service in Dubai
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Your On-Demand Car Savior Anywhere, Anytime! 24/7 Emergency Services
            </p>

            {/* Responsive Button Group */}
            {/* <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="w-full min-w-[200px] gap-2 bg-green-600 py-6 text-lg hover:bg-green-700 sm:w-auto"
              >
                <a href="tel:+971568703512">
                  <Phone className="h-6 w-6" />
                  <span>Call Now</span>
                </a>
              </Button>
              
              <Button
                asChild
                className="w-full min-w-[200px] gap-2 bg-[#25D366] py-6 text-lg hover:bg-[#128C7E] sm:w-auto"
              >
                <a
                  href="https://wa.me/971568703512"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp</span>
                </a>
              </Button>
              
              <BookAppointmentButton
                className="w-full min-w-[200px] py-6 text-lg sm:w-auto"
                size="lg"
              />
            </div> */}

            <div className="flex gap-5 mt-5 container mx-auto">
              <CallNowButton className="sm:w-auto" />
              <BookAppointmentButton className="sm:w-auto" />
              <WhatsAppButton className="sm:w-auto" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
