import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F0F0F] text-white relative overflow-hidden">
      
      {/* ================= GOLD TOP DIVIDER ================= */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center gap-14">

          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4c68dee27fa9c72aaa3053cad748c1275bbc38d7?width=294"
            alt="Legend Promoters"
            className="h-14 w-auto"
          />

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-14">
            {["about", "services", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm uppercase tracking-widest text-white/80 
                           hover:text-[#D4AF37] transition"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social & Contact */}
          <div className="flex flex-col items-center gap-10">

            {/* Social Icons */}
            <div className="flex gap-10">
              {[
                {
                  href: "https://www.instagram.com/legendpromoterss/?igsh=MTB4djBiMmJqdG96aQ%3D%3D#",
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.facebook.com/profile.php?id=61582329906882",
                  Icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://www.youtube.com/@legendpromoterss",
                  Icon: Youtube,
                  label: "YouTube",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-full border border-[#D4AF37]/40
                             hover:bg-[#D4AF37] transition"
                >
                  <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition" />
                </a>
              ))}
            </div>

            {/* Contact Details */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 text-sm text-white/75">
              <a
                href="mailto:Legendpromoters25@gmail.com"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                Legendpromoters25@gmail.com
              </a>

              <a
                href="tel:+917200094061"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                +91 72000 94061
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2025 Legend Promoters. All rights reserved.</p>
          <p className="tracking-wide">Legend Promoters - Real Estate Excellence</p>
        </div>
      </div>

      {/* ================= GOLD ACCENT STRIP ================= */}
      <div className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] py-3">
        <p className="text-center text-black text-sm tracking-widest font-medium">
          TRUSTED LAND DEVELOPERS & PROMOTERS
        </p>
      </div>
    </footer>
  );
}