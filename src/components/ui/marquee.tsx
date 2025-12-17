import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row",
        className
      )} 
      {...props}
    >
      <div 
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "right" && "animate-marquee-reverse"
        )}
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}