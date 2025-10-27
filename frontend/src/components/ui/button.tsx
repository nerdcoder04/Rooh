import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-[var(--transition-smooth)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-background hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        wellness: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]",
        accent: "bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-[var(--shadow-soft)]",
        soft: "bg-primary-soft text-primary hover:bg-primary/10",
        floating: "bg-background/80 backdrop-blur-xl border border-border/50 text-foreground hover:bg-background shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)]",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-[var(--radius-sm)] px-4 text-sm",
        lg: "h-12 rounded-[var(--radius-lg)] px-8 text-base",
        icon: "h-11 w-11",
        hero: "h-14 px-8 text-lg rounded-[var(--radius-lg)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
