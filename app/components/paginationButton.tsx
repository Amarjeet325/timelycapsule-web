"use client"

// Utility function to conditionally join classNames
function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}

interface ButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
  variant?: "default" | "outline"
  size?: "default" | "sm"
  className?: string
}

const Button = ({ label, onClick, disabled, variant = "default", size = "default", className }: ButtonProps) => {
  const baseClasses = "rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-colors"

  const variantClasses = {
    default: "bg-emerald-700 hover:bg-emerald-500 text-white",
    outline: "border border-emerald-700 text-emerald-700 hover:bg-gray-100",
  }

  const sizeClasses = {
    default: "px-4 py-2",
    sm: "px-3 py-1",
  }

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button

