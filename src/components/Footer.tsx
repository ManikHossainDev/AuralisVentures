import Link from "next/link";
import Image from "next/image";
import logo from "@asset/allPhoto/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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
    "Complain",
  ],
  Information: [
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
    "info.auralisventures@gmail.com",
  ],
};

const socialIcons = [FaFacebookF, FaTwitter, FaInstagram];

const Footer = () => {
  return (
    <footer className="">
      <div className="xl:container mx-auto xl:px-0 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo}
                alt="Auralis Ventures Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-sm font-semibold text-[#1c1c1c] tracking-wide">
                AURALIS VENTURES
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                KA-244, Kuril, Jamuna Future Park, GB-001 Southeast ground
                floor, Vatara, Dhaka-1229
              </p>
              <p className="text-xs text-gray-500">
                info.auralisventures@gmail.com
              </p>
            </div>

            <form className="flex items-center gap-2 mb-4 max-w-xs">
              <input
                type="email"
                placeholder="Your email Address"
                className="flex-1 min-w-0 text-xs px-3 py-2.5 rounded-md border border-gray-200 bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="shrink-0 text-xs font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-2.5 rounded-md"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-2">
              {socialIcons.map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-emerald-500 hover:border-emerald-500 transition-colors"
                >
                  <Icon size={12} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-sm font-semibold text-[#1c1c1c] mb-4">
                {heading}
              </div>
              <ul className="space-y-2.5">
                {links.map((l, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-xs text-gray-500 hover:text-emerald-600 transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-5">
          <p className="text-xs text-gray-400 text-center">
            &copy; Auralis Ventures
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;