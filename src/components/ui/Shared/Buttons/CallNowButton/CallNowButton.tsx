

// import { Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ButtonHTMLAttributes } from "react";

// // Utility function
// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// interface CallNowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   className?: string;
//   size?: "sm" | "md" | "lg";
// }

// export function CallNowButton({
//   className = "",
//   size = "sm",
//   ...props
// }: CallNowButtonProps) {
//   const buttonSize: "sm" | "lg" | "default" = size === "md" ? "default" : size;

//   return (
//     <Button
//       asChild
//       size={buttonSize}
//       className={cn(
//         "min-w-[200px] gap-2 bg-green-600 hover:bg-green-700",
//         size === "sm" ? "py-2 text-sm" : size === "lg" ? "py-6 text-lg" : "py-4 text-base",
//         className
//       )}
//       {...props}
//     >
//       <a href="tel:+971568703512">
//         <Phone className="h-6 w-6" />
//         <span>Call Now</span>
//       </a>
//     </Button>
//   );
// }

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface CallNowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function CallNowButton({ className = "", ...props }: CallNowButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "sm:w-[160px] md:w-[160px] gap-2 bg-green-600 hover:bg-green-700",
        "py-2 text-sm md:py-4 md:text-base lg:py-6 lg:text-lg",
        className
      )}
      {...props}
    >
      <a href="tel:+971568703512">
        <Phone className="h-6 w-6" />
        <span>Call Now</span>
      </a>
    </Button>
  );
}

