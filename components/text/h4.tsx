import { ReactNode } from "react";

export function TypographyH4({
  children,
  className,
}: {
  children: ReactNode | string;
  className?: string;
}) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
      {children}
    </h4>
  )
}