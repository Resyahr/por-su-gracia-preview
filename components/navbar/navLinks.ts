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
  href: string;
  text: string;
  icon: React.ComponentType<IconProps>; // The icon is a React component
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
    href: "#aboutUs",
    text: "Nosotros",
    icon: IoPeople,
  },
  {
    href: "#services",
    text: "Servicios",
    icon: FaPersonPraying,
  },
  {
    href: "#events",
    text: "Eventos",
    icon: BsCalendarEventFill,
  },
  {
    href: "#contact",
    text: "Contacto",
    icon: MdContactPhone,
  },
  {
    href: "#donation",
    text: "Donaciones",
    icon: FaHeart,
  },
  {
    href: "#live",
    text: "En vivo",
    icon: IoLogoYoutube
  },
  [
    {
      href: "#youtube",
      icon: IoLogoYoutube,
    },
    {
      href: "#facebook",
      icon: FaFacebookSquare,
    },
    {
      href: "Instagram",
      icon: AiFillInstagram,
    },
  ],
];

export default navLinks;
