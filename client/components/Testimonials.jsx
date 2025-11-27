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
      title: " Madurai",
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
      className="bg-grey bg-opacity-50 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            What Our Users Say
          </h2>
          <div className="text-primary_blue text-6xl sm:text-8xl font-normal mb-4 font-serif">
            ❝
          </div>
          {/* <p className="text-heading text-lg sm:text-xl max-w-2xl mx-auto">
            Healthcare institutions worldwide rely on HELYXON's innovative
            medical technology
          </p> */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 sm:p-8 rounded-lg ${
                testimonial.featured
                  ? "bg-primary_blue text-white"
                  : "bg-white border border-black border-opacity-40"
              }`}
            >
              {/* Quote */}
              <p
                className={`font-sans text-sm sm:text-base leading-relaxed mb-6 ${
                  testimonial.featured ? "text-white" : "text-black"
                }`}
              >
                {testimonial.quote}
              </p>

              {/* Author */}
              <div>
                <p
                  className={`font-bold text-sm sm:text-base ${
                    testimonial.featured ? "text-white" : "text-black"
                  }`}
                >
                  {testimonial.author}
                </p>
                <p
                  className={`text-xs sm:text-sm ${
                    testimonial.featured
                      ? "text-white text-opacity-90"
                      : "text-black text-opacity-70"
                  }`}
                >
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
