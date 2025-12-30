export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 md:py-28 lg:py-36 
                 bg-gradient-to-b from-[#fefcf7] via-[#f8f5ee] to-[#f1ebe0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* ================= TEXT CONTENT ================= */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light">
              <span className="font-semibold text-[#D4AF37]">About</span>{" "}
              <span className="text-[#1a1a1a]">Us</span>
            </h2>

            <p className="font-display text-lg sm:text-xl lg:text-2xl leading-relaxed text-[#4a4a4a] max-w-xl">
              We are a premium real estate service provider committed to
              excellence, integrity, and client satisfaction. Our approach is
              rooted in collaboration and trust, helping clients achieve their
              goals in buying, selling, and renting exceptional properties.
            </p>

            {/* Luxury Gold Divider */}
            <div className="h-[3px] w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-4 rounded-full shadow-lg" />
          </div>

          {/* ================= IMAGE COMPOSITION ================= */}
          <div className="relative h-[460px] sm:h-[500px] lg:h-full">
            <div className="grid grid-rows-2 grid-cols-2 gap-6 h-full">

              {/* Top centered image */}
              <div className="col-span-2 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4b74b2c0a95f5528694d0419fb4322ff8d8fd500?width=990"
                  alt="Luxury property exterior"
                  className="h-52 sm:h-60 w-full max-w-lg object-cover rounded-3xl
                             shadow-[0_35px_80px_rgba(0,0,0,0.15)]
                             border border-[rgba(212,175,55,0.35)]
                             transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Bottom left */}
              <div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fa9ffd95abdf83f0a3087375ef93d628be4fc2be?width=990"
                  alt="Luxury interior design"
                  className="w-full h-48 sm:h-56 object-cover rounded-3xl
                             shadow-[0_30px_70px_rgba(0,0,0,0.12)]
                             border border-[rgba(212,175,55,0.25)]
                             transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Bottom right */}
              <div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3450f124dc4626e430cee26c18d4a1db7c64ba75?width=432"
                  alt="Premium property view"
                  className="w-full h-48 sm:h-56 object-cover rounded-3xl
                             shadow-[0_30px_70px_rgba(0,0,0,0.12)]
                             border border-[rgba(212,175,55,0.25)]
                             transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}