"use client";

import clsx from "clsx";

export default function Button({
  children,
  variant = "outline",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-pink-500 text-white hover:opacity-90",
    outline:
      "border border-gray-400 text-gray-800 hover:bg-gray-100 hover:border-gray-600",
    ghost: "text-pink-600 hover:bg-pink-50 border border-transparent",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-lg",
    lg: "px-6 py-3 text-xl",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
