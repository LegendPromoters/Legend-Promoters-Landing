import { Twitter, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark_bg text-white ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-18">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4c68dee27fa9c72aaa3053cad748c1275bbc38d7?width=294"
            alt="Legend Promoters"
            className="h-12 w-auto"
          />

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            <button
              onClick={() => scrollToSection("about")}
              className="font-sans text-base font-normal hover:opacity-80 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-sans text-base font-normal hover:opacity-80 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="font-sans text-base font-normal hover:opacity-80 transition"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans text-base font-normal hover:opacity-80 transition"
            >
              Contact
            </button>
          </nav>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 md:gap-8">
              <a
                href="https://www.instagram.com/legendpromotersrealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582329906882"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@legendpromoterss"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Contact Details */}
<div className="flex flex-col md:flex-row md:gap-12 gap-2 text-center md:text-left mt-4">
  
  {/* Email */}
  <a
    href="mailto:Legendpromoters25@gmail.com"
    className="flex items-center gap-2 justify-center md:justify-start hover:opacity-80 transition"
  >
    <Mail className="w-5 h-5" />
    <span className="text-white text-opacity-80 font-sans text-sm">
      Legendpromoters25@gmail.com
    </span>
  </a>

  {/* Phone */}
  <a
    href="tel:+917200094061"
    className="flex items-center gap-2 justify-center md:justify-start hover:opacity-80 transition"
  >
    <Phone className="w-5 h-5" />
    <span className="text-white text-opacity-80 font-sans text-sm">
      +91 7200094061
    </span>
  </a>

</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-white text-opacity-70 font-sans text-sm">
              © 2025 All rights reserved.
            </div>
            <div className="text-center md:text-right">
              <p className="text-white text-opacity-70 font-sans text-sm">
                Legend Promoters - Real Estate Excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blue Bar */}
      <div className="bg-primary_blue py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-sans text-sm">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}