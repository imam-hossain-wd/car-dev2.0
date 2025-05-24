// // "use client"

// // import { AppointmentForm } from "@/components/Forms/AppointmentForm"
// // import { Button } from "@/components/ui/button"
// // import {
// //   Drawer,
// //   DrawerContent,
// //   DrawerHeader,
// //   DrawerTitle,
// //   DrawerTrigger,
// // } from "@/components/ui/drawer"
// // import { ButtonHTMLAttributes } from "react"

// // // Utility function for joining class names
// // function cn(...classes: string[]) {
// //   return classes.filter(Boolean).join(" ")
// // }

// // interface BookAppointmentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
// //   className?: string;  // Optional className
// //   size?: "sm" | "md" | "lg";  // size as "sm", "md", or "lg"
// // }

// // export function BookAppointmentButton({
// //   className = "",  
// //   size = "sm",  
// //   ...props
// // }: BookAppointmentButtonProps) {

// //   const buttonSize: "sm" | "lg" | "default" = size === "md" ? "default" : size;

// //   return (
// //     <Drawer>
// //       <DrawerTrigger asChild>
// //         <Button
// //           className={cn(
// //             "whitespace-nowrap bg-primary hover:bg-primary/90",
// //             size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : "text-base",
// //             className 
// //           )}
// //           size={buttonSize} 
// //           {...props}  
// //         >
// //           Book Appointment
// //         </Button>
// //       </DrawerTrigger>
// //       <DrawerContent className="h-[85%]">
// //         <div className="mx-auto w-full max-w-2xl">
// //           <DrawerHeader>
// //             <DrawerTitle className="text-2xl">Book Your Service</DrawerTitle>
// //           </DrawerHeader>
// //           <div className="p-4 pb-8">
// //             <AppointmentForm />
// //           </div>
// //         </div>
// //       </DrawerContent>
// //     </Drawer>
// //   )
// // }

// "use client";

// import { AppointmentForm } from "@/components/Forms/AppointmentForm";
// import { Button } from "@/components/ui/button";
// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { NotebookPen } from "lucide-react";
// import { ButtonHTMLAttributes } from "react";

// // Utility function for joining class names
// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// interface BookAppointmentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   className?: string;
//   size?: "sm" | "md" | "lg";
// }

// export function BookAppointmentButton({
//   className = "",
//   size = "sm",
//   ...props
// }: BookAppointmentButtonProps) {
//   const buttonSize: "sm" | "lg" | "default" = size === "md" ? "default" : size;

//   const sizeStyles =
//     size === "sm"
//       ? "py-2 text-sm"
//       : size === "lg"
//       ? "py-6 text-lg"
//       : "py-4 text-base";

//   return (
//     <Drawer>
//       <DrawerTrigger asChild>
//         <Button
//           size={buttonSize}
//           className={cn(
//             // Matched styles from CallNowButton
//             " min-w-[180px] h-9 gap-2 bg-green-600 hover:bg-green-700 sm:w-auto",
//             sizeStyles,
//             className
//           )}
//           {...props}
//         >
        //   <NotebookPen className="h-6 w-6" />
        // <span>Book Appointment</span>
//         </Button>
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
//   );
// }


     

"use client";

import { AppointmentForm } from "@/components/Forms/AppointmentForm";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NotebookPen } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface BookAppointmentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function BookAppointmentButton({
  className = "",
  ...props
}: BookAppointmentButtonProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "sm:w-[160px] md:w-[200px] gap-2 bg-green-600 hover:bg-green-700",
            "py-2 text-sm md:py-4 md:text-base lg:py-6 lg:text-lg",
            className
          )}
          {...props}
        >
         <NotebookPen className="h-6 w-6" />
        <span>Book Appointment</span>
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
  );
}

  





