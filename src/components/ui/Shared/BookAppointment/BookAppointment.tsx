"use client"

import { AppointmentForm } from "@/components/Forms/AppointmentForm"
import { Button } from "@/components/ui/button"
// import {   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger, } from "../../drawer"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";


interface BookAppointmentButtonProps extends React.ComponentProps<typeof Button> {}

export function BookAppointmentButton({ ...props }: BookAppointmentButtonProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button {...props}>Book Appointment</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Book Your Service</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-8">
            <AppointmentForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}