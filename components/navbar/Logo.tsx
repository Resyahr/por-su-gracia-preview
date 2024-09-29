import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  className,
  isScrolled,
}: {
  className?: string;
  isScrolled?: boolean;
}) => {
  return (
   
      <Link href="/" className="flex gap-2 justify-center items-center">
      <Image
        src={logo}
        alt="Logo"
        className={`${
          isScrolled ? "w-12 h-12" : "w-16 h-16"
        } transition-all duration-300 rounded-full ${className}`}
      />
      <span
        className={`${
          isScrolled ? "text-custom-logo" : "text-white"
        } text-lg font-extrabold tracking-wide hidden md:block`}
      >
        Por su gracia <br /> International Church
      </span>
    </Link>

  );
};

export default Logo;
