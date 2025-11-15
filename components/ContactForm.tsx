"use client";

import { useState, useEffect } from "react";
import { PhoneIcon, EnvelopeIcon, UserIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceNeeded: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ensure client-side only rendering to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // ZERO SETUP: FormSubmit - No signup required, just uses email address
      // Works automatically if {{EMAIL_ADDRESS}} is configured
      const emailAddress = "{{EMAIL_ADDRESS}}";
      
      // Check if email is configured (not a placeholder)
      if (emailAddress === "{{EMAIL_ADDRESS}}" || !emailAddress || emailAddress.includes("{{")) {
        // Template mode - simulate submission for preview
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", phone: "", email: "", serviceNeeded: "", message: "" });
          setIsSubmitting(false);
        }, 3000);
        return;
      }

      // FormSubmit - Zero setup, no API keys needed
      const formEndpoint = `https://formsubmit.co/${encodeURIComponent(emailAddress)}`;

      // Submit to FormSubmit
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.serviceNeeded,
          message: formData.message,
          _subject: `Quote Request: ${formData.serviceNeeded} - ${formData.name}`,
          _template: "table",
          _captcha: "false", // Optional: set to "true" to enable reCAPTCHA
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", serviceNeeded: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Don't render until mounted to prevent hydration errors
  if (!isMounted) {
    return (
      <section className="py-12 md:py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-48 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-full mb-6"></div>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg animate-pulse">
              <div className="h-6 bg-gray-600 rounded w-32 mb-6"></div>
              <div className="space-y-4">
                <div className="h-12 bg-gray-600 rounded"></div>
                <div className="h-12 bg-gray-600 rounded"></div>
                <div className="h-12 bg-gray-600 rounded"></div>
                <div className="h-32 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className={`transition-opacity duration-600 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Ready to get started? Contact us today for a free quote or to discuss your project.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a
                    href={`tel:0418 793 898`}
                    className="text-primary hover:text-primary-dark transition-colors text-lg"
                  >
                    {"0418 793 898"}
                  </a>
                  <p className="text-gray-400 text-sm mt-1">24/7 Emergency Service</p>
                </div>
              </div>

              {("{{EMAIL_ADDRESS}}" !== "{{EMAIL_ADDRESS}}") && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:{{EMAIL_ADDRESS}}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {"{{EMAIL_ADDRESS}}"}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Service Area</h3>
                  <p className="text-gray-300">{"Toowoomba & Darling Downs"}</p>
                  <p className="text-gray-400 text-sm mt-1">{"15/19 Wylie St, Toowoomba QLD 4350"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-gray-700 p-4 sm:p-6 md:p-8 rounded-lg transition-opacity duration-600 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Call now for a free quote!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="w-full pl-10 pr-4 py-3.5 sm:py-3 text-base bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone *
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    className="w-full pl-10 pr-4 py-3.5 sm:py-3 text-base bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                    className="w-full pl-10 pr-4 py-3.5 sm:py-3 text-base bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Needed *
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 sm:py-3 text-base bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value={"Plumbing & Gas Fitting"}>{"Plumbing & Gas Fitting"}</option>
                  <option value={"Hot Water System Installations"}>{"Hot Water System Installations"}</option>
                  <option value={"Emergency Leak Repairs"}>{"Emergency Leak Repairs"}</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 sm:py-3 text-base bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none touch-manipulation"
                  placeholder="Tell us about your project..."
                />
              </div>

              {error && (
                <div className="px-4 py-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
                  {error}
                </div>
              )}
              {submitted && (
                <div className="px-4 py-3 bg-green-900/50 border border-green-700 rounded-lg text-green-200 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <button
                type="submit"
                disabled={submitted || isSubmitting}
                className="w-full px-6 py-3.5 sm:py-3 bg-primary hover:bg-primary-dark active:bg-primary-dark disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold text-base transition-all active:scale-95 touch-manipulation min-h-[48px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

