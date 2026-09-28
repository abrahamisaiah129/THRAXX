import { ButtonHTMLAttributes, forwardRef } from "react";

/**
 * Button
 *
 * Expected inputs (props):
 * - variant?: "primary" | "secondary" | "ghost" | "danger" | "success"
 *     Visual style. Defaults to "primary" (solid blue).
 * - size?: "sm" | "md" | "lg"
 *     Controls padding + font size. Defaults to "md".
 * - isLoading?: boolean
 *     When true, shows a spinner before the children and disables the button.
 * - className?: string
 *     Extra classes merged in last, so they can override defaults.
 *     If it contains "rounded", the built-in "rounded-xl" is skipped
 *     (pass your own rounding instead).
 * - disabled?: boolean
 *     Standard HTML disabled state; also forced true while isLoading.
 * - children: ReactNode
 *     Button label/content.
 * - ...props
 *     Any other native <button> attributes (onClick, type, aria-*, etc.)
 *     are passed straight through.
 *
 * Example:
 *   <Button variant="danger" size="sm" onClick={handleDelete}>
 *     Delete
 *   </Button>
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-4";

    const variants = {
      primary:
        "border border-blue-600 dark:border-slate-200 bg-blue-600 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-700 dark:hover:bg-slate-100 hover:border-blue-700 dark:hover:border-slate-300 focus:ring-blue-100 dark:focus:ring-blue-900/50",
      secondary:
        "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 focus:ring-slate-100 dark:focus:ring-slate-800",
      ghost:
        "bg-transparent text-slate-600 dark:text-slate-300 border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:ring-slate-100 dark:focus:ring-slate-800",
      danger:
        "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white hover:border-red-600 focus:ring-red-100 dark:focus:ring-red-900/50",
      success:
        "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-900/50 hover:bg-green-600 hover:text-white hover:border-green-600 focus:ring-green-100 dark:focus:ring-green-900/50",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2.5 text-sm",
      lg: "px-6 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${className.includes("rounded") ? "" : "rounded-xl"} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
