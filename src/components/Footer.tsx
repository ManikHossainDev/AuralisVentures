/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import logo from "@asset/allPhoto/Logo.png";

const footerLinks = {
  App: ["Features", "Baby Journey", "How It Works", "Pricing"],
  Support: ["Help Center", "Contact Us", "Community", "Blog"],
  Legal: ["Privacy Policy", "Terms Of Service", "Cookie Policy", "GDPR"],
};

const  Footer = () => {
  return (
    <footer>
      <div className="xl:container bg-[#253832] mx-auto px-5 sm:px-8 py-12 rounded-2xl text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="w-20 h-20 rounded-xl bg-[#f5e6c8] flex items-center justify-center mb-4 overflow-hidden">
              <Image
                src={logo}
                alt="Together Baby Logo"
                width={80}
                height={80}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <p className="text-[#a0b5a8] text-sm leading-relaxed max-w-[200px]">
              Your All-In-One Companion For Tracking Your Baby's Daily Activities, Milestones, And Development.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-sm font-medium text-white mb-4">{heading}</div>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-[#a0b5a8] hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="text-xs text-[#7a9488]">
            © 2025 Together Baby App. Made With 💚 For Parents Everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;