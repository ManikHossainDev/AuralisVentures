import Link from "next/link";
import Image from "next/image";
import logo from "@asset/allPhoto/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa";

const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

const footerLinks = {
  "Quick links": [
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
  ],

  "Customer Service": [
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    "Complaints & Support",
  ],

  Information: [
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    socialIcons,
  ],
};

const titleStyle: React.CSSProperties = {
  fontFamily: "Monda",
  fontWeight: 700,
  fontStyle: "normal",
  letterSpacing: "0%",
};

const paraStyle: React.CSSProperties = {
  fontFamily: "Monda",
  fontWeight: 400,
  fontStyle: "normal",
  letterSpacing: "0%",
};

const Footer = () => {
  return (
    <footer className="border-t border-[#E5E5E5]">
      <div className="xl:container mx-auto xl:px-2 px-2 py-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-10 mb-5">

          {/* Brand */}
          <div className="lg:max-w-[290px] shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo}
                alt="Auralis Ventures Logo"
                width={500}
                height={500}
                className="object-contain w-[91px] h-[56px]"
              />
            </div>

            <div className="space-y-2 mb-4">
              <p
                className="text-gray-500 text-[12px] lg:text-[16px]"
                style={paraStyle}
              >
                KA-244, Kuril, Jamuna Future Park, GB-001 Southeast ground
                floor, Vatara, Dhaka-1229
              </p>

              <p className="text-gray-500" style={paraStyle}>
                info.auralisventures@gmail.com
              </p>
            </div>

            <form className="flex items-center gap-2 mb-4 max-w-xs">
              <input
                type="email"
                placeholder="Your email Address"
                style={paraStyle}
                className="flex-1 min-w-0 px-3 py-2.5 rounded-md border border-gray-200 bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />

              <button
                type="submit"
                style={paraStyle}
                className="shrink-0 font-medium text-white bg-[#00BBA7] hover:bg-emerald-600 transition-colors px-4 py-2.5 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="shrink-0">

              <div
                className="text-[#1c1c1c] mb-4 text-[16px] lg:text-[24px]"
                style={titleStyle}
              >
                {heading}
              </div>

              <ul className="space-y-2.5">
                {links.map((item, i) => (
                  <li key={i}>

                    {/* Social Icons */}
                    {Array.isArray(item) ? (
                      <div className="flex items-center gap-2">
                        {item.map((Icon, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="w-7 h-7 md:h-10 md:w-10 flex items-center justify-center rounded-full border border-[#00BBA7] text-[#00BBA7] hover:text-emerald-500 hover:border-emerald-500 transition-colors"
                          >
                            <Icon size={20} />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      /* Normal Links */
                      <Link
                        href="#"
                        style={paraStyle}
                        className="text-gray-500 hover:text-emerald-600 text-[12px] lg:text-[16px] transition-colors"
                      >
                        {item}
                      </Link>
                    )}

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E5E5E5] pt-5">
          <p
            className="text-gray-400 text-center"
            style={paraStyle}
          >
            &copy; Auralis Ventures
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;