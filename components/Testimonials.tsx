"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      text: "Excellent service from Example Business. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Professional and reliable. Great work!",
      rating: 5,
    },
    {
      name: "Mike Williams",
      text: "Best service in Example Region. Will use again!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            What Our Customers Say
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg touch-manipulation"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="font-semibold">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

