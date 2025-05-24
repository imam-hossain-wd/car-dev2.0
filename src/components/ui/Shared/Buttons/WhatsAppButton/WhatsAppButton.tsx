// "use client";

// import { MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ButtonHTMLAttributes } from "react";

// // Utility function
// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// interface WhatsAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   className?: string;
//   size?: "sm" | "md" | "lg";
// }

// export function WhatsAppButton({
//   className = "",
//   size = "sm",
//   ...props
// }: WhatsAppButtonProps) {
//   const buttonSize: "sm" | "lg" | "default" = size === "md" ? "default" : size;

//   return (
//     <Button
//       asChild
//       size={buttonSize}
//       className={cn(
//         "min-w-[200px] gap-2 bg-[#25D366] hover:bg-[#128C7E]",
//         size === "sm" ? "py-2 text-sm" : size === "lg" ? "py-6 text-lg" : "py-4 text-base",
//         className
//       )}
//       {...props}
//     >
//       <a
//         href="https://wa.me/971568703512"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <MessageCircle className="h-6 w-6" />
//         <span>WhatsApp</span>
//       </a>
//     </Button>
//   );
// }

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface WhatsAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function WhatsAppButton({ className = "", ...props }: WhatsAppButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "sm:w-[160px] md:w-[160px] gap-2 bg-[#25D366] hover:bg-[#128C7E]",
        "py-2 text-sm md:py-4 md:text-base lg:py-6 lg:text-lg",
        className
      )}
      {...props}
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
  );
}

