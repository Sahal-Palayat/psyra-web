"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Smily from "../../public/listening-music-emoji-illustration 1.png";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    setIsSubmitting(true);

    try {
      const url =
        "https://script.google.com/macros/s/AKfycbzBYz9jU0LnZlnN_t-L3cvdUh_Khl2JcnZG7friVcd8rHyG3laqgWBjdgiwoe7ue4acQQ/exec";

      const formData = new URLSearchParams();
      formData.append("Name", name);
      formData.append("Phone", phone);
      formData.append("Type", type);
      formData.append("Email", email);
      formData.append("Message", message);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await response.text();
      console.log("Response from Google Apps Script:", data);

   

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setType("");
    } catch (error) {
      console.error("Error submitting form:", error);
  
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-12 bg-[#9EE0D6] m-6 md:m-10  rounded-[10px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-4 md:px-12">
        <motion.h2
          className="text-[28px] md:text-[44px] font-bold mb-8 mx-auto text-[#FFFFFF] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.form
              className="space-y-12 md:space-y-4"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
              onSubmit={handleSubmit}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 * 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-300 bg-white placeholder:text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 * 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-300 bg-white placeholder:text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 * 0.2 }}
              >
                <input
                  type="tel"
                  placeholder="Your Phone (Optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-300 bg-white placeholder:text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3 * 0.2 }}
              >
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-300 bg-white placeholder:text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white p-3 rounded-md font-medium hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>

          <motion.div
            className="hidden md:inline-block flex items-center justify-center px-15"
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
              rotate: [-5, 5, -5],
            }}
          >
            <Image
              src={Smily || "/placeholder.svg"}
              alt="Contact"
              width={350}
              height={240}
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
