
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-3",
  lg: "h-12 w-12 border-4",
};

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  return (
    <div
      className={cn(
        "animate-spin-slow rounded-full border-t-transparent border-primary",
        sizeClasses[size],
        className
      )}
    />
  );
};

export default LoadingSpinner;
