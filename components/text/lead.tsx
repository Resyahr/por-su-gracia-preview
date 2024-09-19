import { ReactNode } from "react";

export function TypographyLead({
  children,
  className,
}: {
  children: ReactNode | string;
  className?: string;
}) {
  return (
    <p className={`text-xl text-muted-foreground ${className}`}>{children}</p>
  );
}
