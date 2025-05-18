
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'green';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variantStyles = {
    primary: "bg-modkicks-black text-modkicks-white hover:bg-black/90 shadow-md hover:shadow-lg transition-shadow",
    outline: "border-2 border-modkicks-black text-modkicks-black hover:bg-modkicks-black hover:text-modkicks-white hover:shadow-md transition-shadow",
    ghost: "text-modkicks-black hover:bg-modkicks-lightgray hover:shadow-sm transition-shadow",
    green: "bg-modkicks-green text-modkicks-black hover:bg-modkicks-green/90 shadow-md hover:shadow-lg shadow-modkicks-green/20 transition-shadow"
  };
  
  const sizeStyles = {
    sm: "h-8 rounded-lg px-3 text-xs",
    default: "h-10 rounded-lg px-4 py-2",
    lg: "h-12 rounded-lg px-8 text-base font-semibold",
    icon: "h-9 w-9 rounded-full"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
