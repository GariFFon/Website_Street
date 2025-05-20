
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'black' | 'green';
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
    primary: "bg-black text-white hover:bg-black/90 shadow-md hover:shadow-lg transition-shadow",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white hover:shadow-md transition-shadow",
    ghost: "text-black hover:bg-gray-100 hover:shadow-sm transition-shadow",
    black: "bg-white text-black shadow-md hover:shadow-xl shadow-white/20 transition-shadow",
    green: "bg-white text-black font-bold hover:bg-green-500 hover:text-white shadow-md hover:shadow-xl transition-all"
  };
  
  const sizeStyles = {
    sm: "h-8 rounded-lg px-3 text-xs",
    default: "h-10 rounded-lg px-4 py-2",
    lg: "h-14 rounded-lg px-8 py-3 text-base font-semibold",
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
