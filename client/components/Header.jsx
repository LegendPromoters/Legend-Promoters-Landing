import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0b0b0b] to-[#1a1a1a]/90 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4c68dee27fa9c72aaa3053cad748c1275bbc38d7?width=294"
              alt="Legend Promoters"
              className="h-12 w-auto"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-12">
            {["home", "about", "services", "testimonials"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-display text-sm uppercase tracking-wide text-white hover:text-[gold] transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CONTACT CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-7 py-3 rounded-full border border-[gold] text-[gold] font-display text-sm uppercase tracking-wide hover:bg-[gold] hover:text-black transition-all duration-300"
          >
            Contact Us
          </button>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-[gold]"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-6 right-6 text-[gold]"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          {["home", "about", "services", "testimonials", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-3xl font-display uppercase text-white hover:text-[gold] transition-all duration-300"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}