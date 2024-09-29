import { IoLogoYoutube } from "react-icons/io5";

import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaPersonPraying } from "react-icons/fa6";
import { BsCalendarEventFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { FaHouse } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


interface NavLink {
  href?: string;
  text: string;
  icon: React.ComponentType<IconProps>; // The icon is a React component
  subLinks?: NavLink[]; // Sub-links for nested navigation
}

interface SocialLink {
  href: string;
  icon: React.ComponentType<IconProps>;
}

// Union type: either a NavLink or an array of SocialLink
type NavLinkOrSocialLink = NavLink | SocialLink[];

export const iconSize = 20;

const navLinks: NavLinkOrSocialLink[] = [
  {
    href: "/",
    text: "Inicio",
    icon: FaHouse,
  },
  {
    text: "Nosotros",
    icon: IoPeople,
    subLinks: [
      {
        href: "/about-us",
        text: "Nuestra Historia",
        icon: IoPeople,
      },
      {
        href: "/about-us#team",
        text: "Nuestro Equipo",
        icon: IoPeople,
      },
    ],
  },
  {
    text: "Servicios",
    icon: FaPersonPraying,
    subLinks: [
      {
        href: "/services#worship",
        text: "Adoración",
        icon: FaPersonPraying,
      },
      {
        href: "/services#prayer",
        text: "Oración",
        icon: FaPersonPraying,
      },
      {
        href: "/services#events",
        text: "Eventos",
        icon: BsCalendarEventFill,
      },
    ],
  },
  {
    href: "/contact",
    text: "Contacto",
    icon: MdContactPhone,
  },
  {
    href: "/donations",
    text: "Donaciones",
    icon: FaHeart,
  },
  {
    href: "/live",
    text: "En vivo",
    icon: IoLogoYoutube,
  },
];

export default navLinks;