import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-4 transition-all ${
            error
              ? "border-red-300 dark:border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
              : "border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-600/10"
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm font-medium text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
