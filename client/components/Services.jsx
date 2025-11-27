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
    <section id="services" className="bg-light_grey py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-display text-heading text-4xl sm:text-5xl lg:text-6xl font-normal">
            Complete Real Estate
            <span className="block font-bold text-primary_blue">Solutions</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-6">
                <div className="flex items-start gap-6">
                  <span className="font-display text-heading text-3xl sm:text-4xl font-normal flex-shrink-0">
                    {service.number}
                  </span>
                  <h3 className="font-display text-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-body_text font-display text-base leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Divider */}
              {index < services.length - 1 && (
                <hr className="my-10 border-line border-opacity-50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
