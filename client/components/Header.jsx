export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white rounded-b-3xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4c68dee27fa9c72aaa3053cad748c1275bbc38d7?width=294"
              alt="Legend Promoters"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary_blue font-display text-base font-normal hover:opacity-70 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary_blue font-display text-base font-normal hover:opacity-70 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary_blue font-display text-base font-normal hover:opacity-70 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-primary_blue font-display text-base font-normal hover:opacity-70 transition"
            >
              Testimonials
            </button>
          </nav>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="
              hidden md:block 
              text-primary_blue 
              font-display 
              text-base 
              font-normal 
              border border-primary_blue 
              rounded-3xl 
              px-6 
              py-2 
              bg-white
              hover:opacity-70
              transition
            "
          >
            Contact Us
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-primary_blue">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
}
