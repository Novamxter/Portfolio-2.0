import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mt-6 self-center relative z-10">
      {/* GitHub */}
      <motion.a
        href="#"
        target="_blank"
        rel="noreferrer"
        whileHover={{
          y: -6,
          scale: 1.1,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white p-3 rounded-full shadow-md text-gray-800 flex items-center justify-center"
      >
        <FaGithub size={20} />
      </motion.a>

      <motion.a
        href="#"
        target="_blank"
        rel="noreferrer"
        whileHover={{
          y: -6,
          scale: 1.1,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white p-3 rounded-full shadow-md text-gray-800 flex items-center justify-center"
      >
        <FaLinkedin size={20} />
      </motion.a>
      {/* LinkedIn */}
      <motion.a
        href="#"
        target="_blank"
        rel="noreferrer"
        whileHover={{
          y: -6,
          scale: 1.1,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white p-3 rounded-full shadow-md text-gray-800 flex items-center justify-center"
      >
        <FaEnvelope size={20} />
      </motion.a>

      {/* Twitter */}
    </div>
  );
}
