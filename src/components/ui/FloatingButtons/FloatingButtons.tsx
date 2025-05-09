"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookAppointmentButton } from "../Shared/BookAppointment/BookAppointment"


export function FloatingButtons() {
  return (
    <>
      {/* Desktop Layout */}
      <div className="fixed bottom-8 left-8 z-50 hidden flex-col gap-4 md:flex">
        {/* <Button 
          asChild
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
        >
          <a href="tel:+971568703512">
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </Button> */}
        {/* <Button 
          asChild
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E]"
        >
          <a 
            href="https://wa.me/971568703512" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </Button> */}
      </div>

      {/* Mobile Layout */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 md:hidden">
        <Button 
          asChild
          className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
        >
          <a href="tel:+971568703512">
            <Phone className="h-5 w-5" />
          </a>
        </Button>
        <BookAppointmentButton className="flex-1" size="sm" />
        <Button 
          asChild
          className="flex-1 gap-2 bg-[#25D366] hover:bg-[#128C7E]"
        >
          <a 
            href="https://wa.me/971568703512" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </>
  )
}