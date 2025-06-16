// import { cn } from "@/lib/utils";
// import { ButtonHTMLAttributes, ReactNode } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
// }

// export function Button({ className, children, ...props }: ButtonProps) {
//   return (
//     <button
//       {...props}
//       className={cn(
//         "text-sm font-semibold transition-all duration-200",
//         className
//       )}
//     >
//       {children}
//     </button>
//   );
// }

// components/ui/button.tsx
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "orange";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const base = "text-sm font-semibold transition-all duration-200 px-6 py-2 rounded-full";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-800",
    orange: "bg-[#FF6B00] text-white hover:bg-[#e65f00]",
    outline: "border border-[#0057B8] text-[#0057B8] hover:bg-[#e6f0fa]",
  };

  return (
    <button
      {...props}
      className={cn(base, variants[variant], className)}
    />
  );
}


