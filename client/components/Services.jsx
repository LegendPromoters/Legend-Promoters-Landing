export default function Services() {
  const services = [
    {
      number: "01",
      title: "Smart Property Search",
      description:
        "We find properties that match your budget, location preference, and investment goals—ensuring a smooth experience from visit to registration.",
    },
    {
      number: "02",
      title: "Hassle-Free Property Management",
      description:
        "We manage tenants, rent follow-ups, agreements, and periodic inspections—giving complete peace of mind for both homeowners and tenants.",
    },
    {
      number: "03",
      title: "Expert Investment Guidance",
      description:
        "We provide insights on appreciation zones, legal verification, and project recommendations—helping you invest smartly with confidence.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#FAF8F4] py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Title */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-6 mx-auto md:mx-0" />
          <h2 className="font-display text-[#1a1a1a] text-4xl sm:text-5xl lg:text-6xl font-light">
            Complete Real Estate
            <span className="block font-semibold text-[#D4AF37] mt-2">
              Solutions
            </span>
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-8 sm:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                transition
                hover:shadow-[0_30px_80px_rgba(212,175,55,0.18)]
              "
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-10 mb-6">
                <div className="flex items-start gap-6">
                  <span className="font-display text-[#D4AF37] text-3xl sm:text-4xl font-medium flex-shrink-0">
                    {service.number}
                  </span>
                  <h3 className="font-display text-[#1a1a1a] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#4a4a4a] font-display text-base leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}