import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import FooterColumn from "./FooterColumn";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#14213d] to-[#0b132b] text-gray-300">
      {/* top accent */}
      <div className="h-1 bg-orange-500" />

      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-orange-500 p-3 rounded-xl text-xl">🍳</div>
            <h2 className="text-2xl font-bold text-white">RasoiOnCall</h2>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
            Home-cooked happiness, just a call away. Book trusted home chefs for
            daily meals and special occasions — fresh, hygienic, and made with
            care.
          </p>

          <div className="flex gap-4">
            <SocialIcon>
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon>
              <FaXTwitter />
            </SocialIcon>
            <SocialIcon>
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
          </div>
        </div>

        {/* SERVICES */}
        <FooterColumn
          title="Services"
          links={["Party Chef", "Instant Cook", "Regular Cook", "Find Cooks"]}
        />

        {/* COMPANY */}
        <FooterColumn
          title="Company"
          links={["About Us", "Join as Chef", "Blog", "Careers"]}
        />

        {/* SUPPORT */}
        <FooterColumn
          title="Support"
          links={[
            "Help Center",
            "Contact Us",
            "Privacy Policy",
            "Terms of Service",
          ]}
        />
      </div>

      {/* bottom */}
      <div className="border-t border-white/10 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} RasoiOnCall. All rights reserved.
      </div>
    </footer>
  );
}
