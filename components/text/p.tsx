import { ReactNode } from "react";

export function TypographyP({
  children,
  className,
}: {
  children: ReactNode | string;
  className?: string;
}) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
}
