"use client"

import { AppointmentForm } from "@/components/Forms/AppointmentForm"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ButtonHTMLAttributes } from "react"

// Utility function for joining class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

interface BookAppointmentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;  // Optional className
  size?: "sm" | "md" | "lg";  // size as "sm", "md", or "lg"
}

export function BookAppointmentButton({
  className = "",  // Default to an empty string if className is undefined
  size = "sm",  // Default to "sm" if size is not passed
  ...props
}: BookAppointmentButtonProps) {
  // Map "md" to "default" for the Button component
  const buttonSize: "sm" | "lg" | "default" = size === "md" ? "default" : size;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "whitespace-nowrap bg-primary hover:bg-primary/90",
            size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : "text-base",
            className  // Now always a string
          )}
          size={buttonSize}  // Pass the mapped size (which will be either "sm", "lg", or "default")
          {...props}  // Spread the remaining props (now correctly typed)
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
            <AppointmentForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
