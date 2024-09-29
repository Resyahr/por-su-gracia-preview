import Link from "next/link";
import { Button } from "../ui/button";

const ReusableCTAButton = ({
  href,
  text,
  icon,
  background,
  size,
}: {
  href: string;
  text: string;
  icon?: React.ReactNode;
  background: string;
  size?: "sm" | "default" | "lg" | "icon" | null | undefined
}) => {
  return (
    <Button asChild className={`flex gap-2 ${background}`} size={size}>
      <Link href={href} className="text-white flex items-center">
        {text} {icon}
      </Link>
    </Button>
  );
};

export default ReusableCTAButton;
