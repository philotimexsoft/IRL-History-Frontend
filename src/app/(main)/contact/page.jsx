"use client";

import { Mail, MapPin, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PerPageHeader from "@/Components/Common/PerPageHeader";
import CallToAction from "@/Components/Home/CallToAction";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      organization: e.target.organization.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowThankYou(true);
        e.target.reset();
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <>
      <PerPageHeader
        title="Contact the"
        description="Document, share, and explore the rich history of IRL streaming culture. Our platform lets you preserve important moments, connect with other enthusiasts, and contribute to a living archive of real-world streaming."
        bgVideo="vid2.mp4"
      />
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Let’s Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions, feedback, or just want to say hello? Fill out the
              form below and we’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                {
                  icon: <Phone className="text-[#2A65E4]" size={24} />,
                  title: "Phone",
                  text: "+91 7623919269",
                },
                {
                  icon: <Mail className="text-[#2A65E4]" size={24} />,
                  title: "Email",
                  text: "contact@philotimexsoft.com",
                },
                {
                  icon: <MapPin className="text-[#2A65E4]" size={24} />,
                  title: "Address",
                  text: "40, Vrajbhumik row-house, Surat, Gujarat, IND-394101",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  {item.icon}
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 border border-red-300">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm mb-2 font-medium">Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2A65E4] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-medium">
                  Organisation*
                </label>
                <input
                  type="text"
                  name="organization"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2A65E4] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-medium">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2A65E4] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-medium">
                  Message*
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#2A65E4] focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-block px-6 py-2 bg-[#2A65E4] hover:bg-[#1E4DC0] transition-all duration-300 text-base font-medium text-white shadow-md hover:shadow-[#2A65E4]/40 hover:-translate-y-0.5"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black p-8 border border-gray-300 max-w-md w-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Thank You!</h3>
                <button onClick={() => setShowThankYou(false)}>
                  <X size={20} />
                </button>
              </div>
              <p>
                Your message has been sent successfully. We’ll get back to you
                shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CallToAction />
    </>
  );
}
