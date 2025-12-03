import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show automatically on load
    setTimeout(() => setOpen(true), 400);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return alert("Invalid email.");

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) return alert("Invalid phone number.");

    emailjs
      .send(
        "service_3vnh285",
        "template_plqbeib",
        formData,
        "5TEAcxLK7OEAL0YpZ"
      )
      .then(() => {
        alert("Your enquiry has been sent!");
        setFormData({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    message: "",
  });
        setOpen(false);
      })
      .catch(() => alert("Oops! Something went wrong."));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">

      {/* Popup box */}
      <div
  className="
    bg-white shadow-2xl border border-grey
    px-10 py-6 
    w-[750px] max-w-[90%]
    h-[500px]  overflow-y-auto no-scrollbar           /* ← Adjust height as needed */
    rounded-3xl
    animate-slideDown
  "
>
        {/* Close Button */}
        <div className="flex justify-end mb-3">
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-line hover:text-black transition" />
          </button>
        </div>

        {/* Header */}
        <h2 className="font-display text-heading text-3xl font-bold text-center mb-10 leading-tight">
          Find Your Dream Property With Us!
          <span className="text-primary_blue block text-2xl font-normal">
            Contact us today for a free consultation
          </span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Full Name */}
          <div>
            <label className="block font-display text-0.5g mb-1">
              Full Name <span className="text-primary_blue">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-grey rounded-2xl focus:border-primary_blue"
              required
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-display text-0.5g mb-1">
                Email Address <span className="text-primary_blue">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-grey rounded-2xl focus:border-primary_blue"
                required
              />
            </div>

            <div>
              <label className="block font-display text-0.5g mb-1">
                Phone Number <span className="text-primary_blue">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-grey rounded-2xl focus:border-primary_blue"
                required
              />
            </div>
          </div>

          {/* Location + Interest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-display text-lg mb-1">
                Location/City <span className="text-primary_blue">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-grey rounded-2xl focus:border-primary_blue"
                required
              />
            </div>

            <div>
              <label className="block font-display text-lg mb-1">
                Interest <span className="text-primary_blue">*</span>
              </label>

              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-grey rounded-2xl appearance-none focus:border-primary_blue"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="renting">Renting</option>
                  <option value="investing">Investing</option>
                </select>

                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-grey w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-display text-lg mb-1">
              Message <span className="text-grey">(Optional)</span>
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-grey rounded-2xl resize-none focus:border-primary_blue"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary_blue text-white font-display text-2xl py-2 rounded-2xl hover:bg-opacity-90"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}