export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center pt-20"
      style={{
        backgroundImage:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/178690d132bcfa846f40c091f292f3cb60244d4e?width=3302')",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Subtitle */}
          <p className="font-display text-white text-lg sm:text-xl font-normal tracking-widest uppercase mb-6">
            exclusive real estate platform
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Experience Real Estate Excellence with
            <span className="block font-bold">Legend Promoters</span>
          </h1>

          {/* Description */}
          <p className="font-display text-white text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Find premium residential and investment properties with transparent
            guidance, zero stress, and complete end-to-end assistance—designed
            around your goals.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white font-display text-2xl sm:text-3xl font-normal px-8 sm:px-12 py-4 rounded-2xl hover:bg-white hover:text-primary_blue transition duration-300 mb-8"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
