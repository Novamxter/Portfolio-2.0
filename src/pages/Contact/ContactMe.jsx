import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faPhone as Phone,
  faEnvelope as Mail,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowDownTrayIcon as Download } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-3 x-sm:p-6"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8 }}
      // viewport={{ once: true, amount: 0.1 }}
    >
      {/* Heading */}
      <motion.h2
        // initial={{ y: 40, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.6, delay: 0.2 }}
        // viewport={{ once: true, amount: 0.1 }}
        className="section-heading"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Section */}
      <motion.div
        className="w-full max-w-5xl bg-white/40 rounded-2xl shadow-lg grid md:grid-cols-2 gap-3 p-3 x-sm:gap-6 x-sm:p-6 md:p-10 backdrop-blur overflow-hidden relative"
        // initial={{ scale: 0.95, opacity: 0 }}
        // whileInView={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true, amount: 0.1 }}
      >
        {/* Background Image */}
        <div className="absolute top-0 left-0 z-[-1] w-full h-full">
          <motion.img
            src="/images/Ocean.jpg"
            alt="Contact-bg"
            className="object-cover w-full h-full"
            // initial={{ scale: 1.1, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // transition={{ duration: 1.2, ease: "easeOut" }}
            // viewport={{ once: true, amount: 0.1 }}
          />
        </div>

        {/* Left Section */}
        <motion.div
          className="space-y-3 x-sm:space-y-6"
          // initial={{ x: -50, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.7 }}
          // viewport={{ once: true, amount: 0.1 }}
        >
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.2940382402923!2d76.146!3d32.299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4c1f6a9d!2sNurpur!5e0!3m2!1sen!2sin!4v1638532846505"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>

          {/* Email & Phone */}
          <motion.div
            className="bg-cyan-400/90 text-white rounded-xl p-6 shadow-md space-y-4"
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            // viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <Icon icon={Mail} className="w-6 h-6" />
              <p className="text-sm md:text-base">
                <span className="font-semibold">Email:</span>{" "}
                mehrakmohit968@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon={Phone} className="w-6 h-6" />
              <p className="text-sm md:text-base">
                <span className="font-semibold">Phone:</span> +91 8894109815
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="bg-white rounded-xl p-6 md:p-10 shadow-md"
          // initial={{ x: 50, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.7 }}
          // viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-center mb-6 text-[#235C84]">
            Have a Question ?
          </h3>
          <form className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Name"
              className="contact-input"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="contact-input"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.textarea
              placeholder="Message"
              rows="4"
              className="contact-input"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.textarea>
            <button
              type="submit"
              className="bg-gradient-to-br from-[#87DFD9] to-[#0A4E5E] text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Download CV Button */}
      <motion.a
        href="/Resume_10-09-2025.pdf"
        download
        className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
        // initial={{ opacity: 0, y: 20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        // viewport={{ once: true, amount: 0.1 }}
      >
        <Download className="w-5 h-5" />
        Download CV
      </motion.a>
    </motion.div>
  );
}
