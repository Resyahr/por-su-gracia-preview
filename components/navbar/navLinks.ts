import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaPersonPraying } from "react-icons/fa6";
import { BsCalendarEventFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { IconProps } from "@radix-ui/react-icons/dist/types";

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

export const iconSize = 18;

const navLinks: NavLinkOrSocialLink[] = [
  /*     {
      href: "/",
      text: "Inicio",
      icon: House,
    }, */
  {
    href: "#aboutUs",
    text: "Sobre Nosotros",
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
  [
    {
      href: "#youtube",
      icon: FaYoutube,
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
