import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "green" | "amber" | "red" | "gray";
  showDot?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "gray", showDot = false, children, ...props }, ref) => {
    const variants = {
      blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50",
      green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900/50",
      amber: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/50",
      red: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50",
      gray: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    };

    const dotColors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      amber: "bg-amber-500",
      red: "bg-red-500",
      gray: "bg-slate-400",
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}
        {...props}
      >
        {showDot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
