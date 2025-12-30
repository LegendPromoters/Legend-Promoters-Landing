export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Legend Promoters made the entire land-buying process smooth and transparent. Highly trustworthy!",
      author: "Arun Kumar",
      title: "Coimbatore",
      featured: false,
    },
    {
      id: 2,
      quote:
        "I found the perfect villa within my budget. Excellent service and very professional guidance.",
      author: "Divya Lakshmi",
      title: "Madurai",
      featured: false,
    },
    {
      id: 3,
      quote:
        "Great layouts, clear documents, and friendly staff. I’m happy with my investment.",
      author: "Praveen Raj",
      title: "Chennai",
      featured: false,
    },
    {
      id: 4,
      quote:
        "They explained every detail patiently. I felt completely confident buying my first plot.",
      author: "Meena Subramani",
      title: "Trichy",
      featured: false,
    },
    {
      id: 5,
      quote:
        "Legend Promoters offers premium locations at reasonable prices. A genuine real estate company.",
      author: "Suresh Kannan",
      title: "Salem",
      featured: false,
    },
    {
      id: 6,
      quote:
        "My family is so happy with our new villa. Quality construction and timely handover.",
      author: "Gayathri Narayanan",
      title: "Tirunelveli",
      featured: false,
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-[#f8f7f4] to-[#f2eee7] py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-[#1a1a1a] text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
            What Our Clients Say
          </h2>
          <div className="text-[#D4AF37] text-6xl sm:text-8xl font-serif mb-4">
            ❝
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`
                p-6 sm:p-8 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                transition transform hover:scale-105
                ${testimonial.featured ? "bg-[#D4AF37] text-white" : "bg-white border border-black border-opacity-10"}
              `}
            >
              {/* Quote */}
              <p className={`font-display text-base sm:text-lg leading-relaxed mb-6 ${testimonial.featured ? "text-white" : "text-[#4a4a4a]"}`}>
                {testimonial.quote}
              </p>

              {/* Author */}
              <div>
                <p className={`font-semibold text-sm sm:text-base ${testimonial.featured ? "text-white" : "text-[#1a1a1a]"}`}>
                  {testimonial.author}
                </p>
                <p className={`text-xs sm:text-sm ${testimonial.featured ? "text-white text-opacity-90" : "text-[#4a4a4a] text-opacity-70"}`}>
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}