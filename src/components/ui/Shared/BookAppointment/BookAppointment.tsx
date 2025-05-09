// "use client"

// import { AppointmentForm } from "@/components/Forms/AppointmentForm"
// import { Button } from "@/components/ui/button"
// // import {   Drawer,
// //   DrawerContent,
// //   DrawerHeader,
// //   DrawerTitle,
// //   DrawerTrigger, } from "../../drawer"
// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";


// interface BookAppointmentButtonProps extends React.ComponentProps<typeof Button> {}

// export function BookAppointmentButton({ ...props }: BookAppointmentButtonProps) {
//   return (
//     <Drawer>
//       <DrawerTrigger asChild>
//         <Button {...props}>Book Appointment</Button>
//       </DrawerTrigger>
//       <DrawerContent className="h-[85%]">
//         <div className="mx-auto w-full max-w-2xl">
//           <DrawerHeader>
//             <DrawerTitle className="text-2xl">Book Your Service</DrawerTitle>
//           </DrawerHeader>
//           <div className="p-4 pb-8">
//             <AppointmentForm />
//           </div>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   )
// }



// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ButtonProps } from "react-day-picker"

interface BookAppointmentButtonProps extends ButtonProps {}
//@ts-ignore
export function BookAppointmentButton({ className, size, ...props }: BookAppointmentButtonProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "whitespace-nowrap bg-primary hover:bg-primary/90",
            size === "sm" ? "text-xs" : "text-sm",
            className
          )}
          size={size}
          {...props}
        >
          Book Appointment
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Book Your Service</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-8">
            {/* Your appointment form goes here */}
            <p className="text-muted-foreground">Appointment form will appear here</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}