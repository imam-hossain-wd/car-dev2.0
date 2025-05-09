import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookAppointmentButton } from "@/components/ui/Shared/BookAppointment/BookAppointment"


export default function Home() {
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
        
        {/* Hero Content */}
        <div className="container relative z-10 flex h-full flex-col justify-end pb-16 text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Best Car Service in Dubai
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">
            Your On-Demand Car Savior Anywhere, Anytime! 24/7 Emergency Services
          </p>

          <div className="w-full flex">
        <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </Button>
            <Button className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E]">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </Button>
            <BookAppointmentButton />
        </div>
        </div>

     
      </div>

      {/* Fixed CTA Buttons */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-8 md:left-8">
        <div className="flex flex-col-reverse gap-4 md:flex-col">
          {/* Desktop Layout */}
          <div className="hidden items-center gap-4 md:flex">
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </Button>
            <Button className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E]">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </Button>
            <BookAppointmentButton />
          </div>

          {/* Mobile Layout */}
          <div className="flex w-full items-center justify-between gap-4 md:hidden">
            <Button className="flex-1 gap-2 bg-green-600 hover:bg-green-700">
              <Phone className="h-5 w-5" />
            </Button>
            <Button className="flex-1 gap-2 bg-[#25D366] hover:bg-[#128C7E]">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>

          {/* Book Appointment Button (Common for all screens) */}
          <BookAppointmentButton
          //@ts-ignore 
            className="w-full md:w-auto" 
            size="lg"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="container py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          {/* Add your content here */}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold">Our Services</h2>
          {/* Add services content here */}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold">Our Products</h2>
          {/* Add products content here */}
        </section>
      </div>
    </div>
  )
}