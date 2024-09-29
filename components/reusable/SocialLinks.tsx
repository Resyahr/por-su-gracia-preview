"use client";

import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: FaYoutube,
  },
  {
    href: "https://instagram.com/por_sugracia28",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          aria-label={social.label}
          className="text-gray-300 hover:text-custom-primary transition p-2 rounded-full border border-white"
          target="_blank" // Opens in new tab
        >
          <social.icon size={24} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;