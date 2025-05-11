// "use client"

// import { Phone, MessageCircle, NotebookPen } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { BookAppointmentButton } from "../Shared/BookAppointment/BookAppointment"

// export function FloatingButtons() {
//   return (
//     <>
//       {/* Desktop Layout */}
//       <div className="fixed right-8 top-[50%] z-50 hidden flex-col items-end gap-4 md:flex">
//         <div className="flex flex-col gap-3">
//           <Button
//             asChild
//             className="h-12 w-12 rounded-full bg-green-600 p-0 hover:bg-green-700"
//           >
//             <a href="tel:+971568703512">
//             <NotebookPen className="mt-2 h-6 w-6 text-white" />
//               <span className="sr-only"></span>
//             </a>
//           </Button>
//           <Button
//             asChild
//             className="h-12 w-12 rounded-full bg-green-600 p-0 hover:bg-green-700"
//           >
//             <a href="tel:+971568703512">
//               <Phone className="h-5 w-5" />
//               <span className="sr-only">Call Now</span>
//             </a>
//           </Button>
//           <Button
//             asChild
//             className="h-12 w-12 rounded-full bg-[#25D366] p-0 hover:bg-[#128C7E]"
//           >
//             <a 
//               href="https://wa.me/971568703512" 
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               <MessageCircle className="h-5 w-5" />
//               <span className="sr-only">WhatsApp</span>
//             </a>
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 md:hidden">
//         <Button 
//           asChild
//           className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
//         >
//           <a href="tel:+971568703512">
//             <Phone className="h-5 w-5" /> 
//             <span>Call Now</span>
//           </a>
//         </Button>
//         <BookAppointmentButton
//           className="flex-1 "
//           size="sm"
//         />
//         <Button 
//           asChild
//           className="flex-1 gap-2 bg-[#25D366] hover:bg-[#128C7E]"
//         >
//           <a 
//             href="https://wa.me/971568703512" 
//             target="_blank" 
//             rel="noopener noreferrer"
//           >
//             <MessageCircle className="h-5 w-5" /> 
//             <span>WhatsApp</span>
//           </a>
//         </Button>
//       </div>
//     </>
//   )
// }

"use client"

import { Phone, MessageCircle, NotebookPen, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookAppointmentButton } from "../Shared/BookAppointment/BookAppointment"
import { useEffect, useState } from "react"

export function FloatingButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Desktop Layout */}
      <div className="fixed right-8 top-[50%] z-50 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
        {/* Scroll to Top Button - Only shows when scrolled down */}
        {shojwScrollButton && (
          <Button
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full bg-primary/80 p-0 backdrop-blur-sm hover:bg-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}

        <div className="flex flex-col gap-3">
          <Button
            asChild
            className="h-12 w-12 rounded-full bg-green-600 p-0 hover:bg-green-700"
          >
            <a href="tel:+971568703512">
              <NotebookPen className="h-5 w-5" />
              <span className="sr-only">Book Appointment</span>
            </a>
          </Button>
          <Button
            asChild
            className="h-12 w-12 rounded-full bg-green-600 p-0 hover:bg-green-700"
          >
            <a href="tel:+971568703512">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Call Now</span>
            </a>
          </Button>
          <Button
            asChild
            className="h-12 w-12 rounded-full bg-[#25D366] p-0 hover:bg-[#128C7E]"
          >
            <a 
              href="https://wa.me/971568703512" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 md:hidden">
        <Button 
          asChild
          className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
        >
          <a href="tel:+971568703512">
            <Phone className="h-5 w-5" /> 
            <span>Call Now</span>
          </a>
        </Button>
        <BookAppointmentButton
          className="flex-1"
          size="sm"
        />
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
            <span>WhatsApp</span>
          </a>
        </Button>
      </div>
    </>
  )
}