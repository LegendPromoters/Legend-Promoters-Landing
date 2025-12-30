import { useState } from "react";
import { ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    emailjs
      .send(
        "service_3vnh285",
        "template_plqbeib",
        formData,
        "5TEAcxLK7OEAL0YpZ"
      )
      .then(
        () => {
          alert("Your enquiry has been sent!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            interest: "",
            message: "",
          });
        },
        () => {
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-cover bg-center py-28"
      style={{
        backgroundImage:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/e8cb4cb7945a805e819b2a162e8d45f59ecbc0bc?width=2880')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
            <span className="text-primary_blue font-semibold">
              Find Your Dream
            </span>{" "}
            Property
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/80 font-light">
            Schedule a private consultation with our property experts
          </p>

          <div className="mt-8 h-[2px] w-40 mx-auto bg-gradient-to-r from-transparent via-primary_blue to-transparent" />
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/90 rounded-3xl p-10 sm:p-14 lg:p-16 space-y-10 shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs uppercase tracking-widest mb-3 text-heading">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-xl border border-line bg-white focus:outline-none focus:ring-2 focus:ring-primary_blue transition"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-3 text-heading">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border border-line bg-white focus:outline-none focus:ring-2 focus:ring-primary_blue transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-3 text-heading">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border border-line bg-white focus:outline-none focus:ring-2 focus:ring-primary_blue transition"
                placeholder="XXXXXXXXXX"
                required
              />
            </div>
          </div>

          {/* Location & Interest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-3 text-heading">
                Location / City *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border border-line bg-white focus:outline-none focus:ring-2 focus:ring-primary_blue transition"
                placeholder="Your city"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-3 text-heading">
                Interest *
              </label>
              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-line bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary_blue transition"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="renting">Renting</option>
                  <option value="investing">Investing</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-heading pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-widest mb-3 text-heading">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-6 py-4 rounded-xl border border-line bg-white focus:outline-none focus:ring-2 focus:ring-primary_blue transition resize-none"
              placeholder="Tell us your requirements"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-5 rounded-xl text-white uppercase tracking-widest font-semibold
                       bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227]
                       shadow-[0_15px_40px_rgba(212,175,55,0.45)]
                       hover:opacity-90 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}