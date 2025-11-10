import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default:
    "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700",
  destructive:
    "px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700",
  outline:
    "px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100",
};

export function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(buttonVariants[variant], className)}
      {...props}
    />
  );
}
