import Link from "next/link";
import navLinks from "./navLinks";
import { RiCloseFill } from "react-icons/ri";
import Logo from "../Logo";
import { TypographyP } from "../text/p";
import { TypographyH4 } from "../text/h4";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  isScrolled,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
  isScrolled: boolean;
}) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    console.log(isMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 transition-all duration-300 z-50 w-full md:w-2/5 lg:w-3/6 ${
        isMenuOpen ? "right-0 h-full" : "-right-full h-0"
      } backdrop-blur-3xl shadow-md bg-black/35`}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-2 items-center justify-center">
          <Logo />
        </div>
        <span onClick={() => setIsMenuOpen(false)}>
          <RiCloseFill size={40} color="white" />
        </span>
      </div>

      <ul
        className={`flex flex-col items-center justify-center py-4${
          isScrolled && "divide-black"
        }`}
      >
        {navLinks.map((link, index) => {
          if (!Array.isArray(link)) {
            // For regular nav links
            const { href, text, icon: Icon } = link;
            return (
              <Link
                key={href}
                href={href}
                className={`flex justify-start items-center px-4 py-4 md:px-12 w-full text-sm md:text-lg hover:bg-custom-primary hover:text-white font-bold text-white`}
              >
                <li
                  key={href}
                  className="flex justify-start w-2/4 items-center gap-4"
                  onClick={handleLinkClick}
                >
                  <Icon fontSize={20} />
                  {text}
                </li>
              </Link>
            );
          } else {
            // For social media icons
            return (
              <div>
                <TypographyH4 className="text-white/70">
                  {" "}
                  Síguenos
                </TypographyH4>
                <li
                  key={`social-icons-${index}`}
                  className={`flex gap-4 items-center justify-around p-4 w-full`}
                >
                  {link.map(({ href, icon: Icon }) => (
                    <Link key={href} href={href} onClick={handleLinkClick}>
                      <Icon
                        fontSize={30}
                        color={
                          href.includes("youtube")
                            ? "red"
                            : href.includes("facebook")
                            ? "blue"
                            : "pink"
                        }
                      />
                    </Link>
                  ))}
                </li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
