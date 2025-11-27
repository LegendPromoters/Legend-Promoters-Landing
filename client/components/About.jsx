export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-heading text-4xl sm:text-5xl lg:text-6xl font-normal">
              <span className="font-bold text-primary_blue">About</span> Us
            </h2>

            <p className="font-display text-heading text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight">
              We are a real estate service provider that prioritizes client
              satisfaction by providing the best service and prioritizing
              cooperation to achieve common goals in buying and selling and
              renting property.
            </p>

            {/* <p className="text-body_text font-display text-base leading-relaxed">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.
            </p> */}
          </div>

          {/* Images Grid */}
          <div className="relative h-96 md:h-96 lg:h-full">
  <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full">

    {/* ⭐ Top center image (spans both columns) */}
    <div className="col-span-2 flex justify-center row-start-1">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4b74b2c0a95f5528694d0419fb4322ff8d8fd500?width=990"
        alt="Property showcase 1"
        className="h-40 md:h-48 object-cover rounded-lg max-w-md w-full"
      />
    </div>

    {/* Bottom left image */}
    <div className="col-start-1 row-start-2">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/fa9ffd95abdf83f0a3087375ef93d628be4fc2be?width=990"
        alt="Property showcase 2"
        className="w-full h-40 md:h-48 object-cover rounded-lg"
      />
    </div>

    {/* Bottom right image */}
    <div className="col-start-2 row-start-2">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3450f124dc4626e430cee26c18d4a1db7c64ba75?width=432"
        alt="Property showcase 3"
        className="w-full h-40 md:h-48 object-cover rounded-lg"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
