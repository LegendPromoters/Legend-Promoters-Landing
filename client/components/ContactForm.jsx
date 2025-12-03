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

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(formData.phone)) {
    alert("Phone number must be 10 digits and contain only numbers.");
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
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
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
      (error) => {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong.");
      }
    );
};

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-cover bg-center pt-20 pb-12"
      style={{
        backgroundImage:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/e8cb4cb7945a805e819b2a162e8d45f59ecbc0bc?width=2880')",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 mt-20">
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl lg:text-7xl font-bold leading-tight">
            Find Your Dream Property With Us!
            <span className="block">Contact us today for a free consultation</span>
          </h2>
        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white
           rounded-2xl p-8 sm:p-12 lg:p-16 space-y-8"
        >
          {/* Row 1: Full Name */}
          <div>
            <label className="block font-display text-lg sm:text-xl mb-3">
              Full Name <span className="text-primary_blue">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-6 py-4 border-2 border-grey rounded-xl font-display text-base placeholder-grey focus:outline-none focus:border-primary_blue transition"
              required
            />
          </div>

          {/* Row 2: Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-display text-lg sm:text-xl mb-3">
                Email Address <span className="text-primary_blue">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-6 py-4 border-2 border-grey rounded-xl font-display text-base placeholder-grey focus:outline-none focus:border-primary_blue transition"
                required
              />
            </div>
            <div>
              <label className="block font-display text-lg sm:text-xl mb-3">
                Phone Number <span className="text-primary_blue">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="XXXXX XXXXX"
                className="w-full px-6 py-4 border-2 border-grey rounded-xl font-display text-base placeholder-grey focus:outline-none focus:border-primary_blue transition"
                required
              />
            </div>
          </div>

          {/* Row 3: Location and Interest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-display text-lg sm:text-xl mb-3">
                Location/City <span className="text-primary_blue">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full px-6 py-4 border-2 border-grey rounded-xl font-display text-base placeholder-grey focus:outline-none focus:border-primary_blue transition"
                required
              />
            </div>
            <div>
              <label className="block font-display text-lg sm:text-xl mb-3">
                Interest <span className="text-primary_blue">*</span>
              </label>
              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-grey rounded-xl font-display text-base focus:outline-none focus:border-primary_blue transition appearance-none bg-white"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="renting">Renting</option>
                  <option value="investing">Investing</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-grey pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-display text-lg sm:text-xl mb-3">
              Message <span className="text-grey">(Optional)</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business and requirements"
              rows="6"
              className="w-full px-6 py-4 border-2 border-grey rounded-xl font-display text-base placeholder-grey focus:outline-none focus:border-primary_blue transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary_blue text-white font-display text-xl sm:text-2xl font-normal py-5 rounded-2xl hover:bg-opacity-90 transition duration-300"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
