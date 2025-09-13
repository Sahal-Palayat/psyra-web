"use client"

import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        animated:
          "bg-white text-teal-800 border border-gray-300 hover:bg-gray-100 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        bookNow: "px-6 py-2 text-[12px] font-bold rounded-[50px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function AnimatedButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof animatedButtonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  const lightSweepVariants = {
    animate: {
      x: ["0%", "100%"],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      },
    },
  }

  if (variant === "animated") {
    return (
      <Comp data-slot="animated-button" className={cn(animatedButtonVariants({ variant, size, className }))} {...props}>
        {children}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
          initial={{ x: "-100%" }}
          animate="animate"
          variants={lightSweepVariants}
        />
      </Comp>
    )
  }

  return (
    <Comp data-slot="animated-button" className={cn(animatedButtonVariants({ variant, size, className }))} {...props}>
      {children}
    </Comp>
  )
}

export { AnimatedButton, animatedButtonVariants }
