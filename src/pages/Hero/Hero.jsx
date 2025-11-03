import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaReact,
  FaNode,
  FaProjectDiagram
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiFigma, SiLeetcode } from "react-icons/si";
import SocialIcons from "../../components/Icons";

export default function Hero() {
  const skillRows = [
    [
      { label: "React", icon: <FaReact /> },
      { label: "Tailwind", icon: <SiTailwindcss /> },
    ],
    [
      { label: "Redux", icon: <SiRedux /> },
      { label: "Node.js", icon: <FaNode /> },
      { label: "Figma", icon: <SiFigma /> },
    ],
    [
      { label: "Extra 1", icon: <FaReact /> },
      { label: "Extra 2", icon: <FaNode /> },
    ],
  ];

  const highlights = [
    { icon: <SiLeetcode className="text-orange-500 text-xl" size={20} />, label: "Problem Solving" },
    { icon: <FaGithub className="text-gray-800 text-xl" size={20} />, label: "Active on GitHub" },
    { icon: <FaProjectDiagram className="text-blue-600 text-xl" size={20} />, label: "Building Projects" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-14 overflow-hidden ">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* ---------- LEFT: Reviews / badges (visible on lg) ---------- */}
        <div className="hidden lg:flex flex-col items-start gap-6">
          {/* Rating box */}
          <motion.div
            // initial={{ opacity: 0, x: -30 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-4 shadow-md"
          >
            <div className="flex flex-col items-end">
              <p className="text-2xl font-bold text-gray-800">2+ Years</p>
              <p className="text-gray-500">Coding Experience</p>
            </div>
          </motion.div>

          {/* Short testimonial */}
          <motion.blockquote
            // initial={{ opacity: 0, x: -30 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-xl p-4 shadow-md text-gray-600"
          >
            “Passionate about crafting clean, scalable, and user-friendly web applications.”
            <div className="mt-3 text-sm text-gray-400">— Driven by Curiosity </div>
          </motion.blockquote>

          {/* Client badges / logos */}
          <motion.div
            // initial={{ opacity: 0, x: -30 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <div className="text-sm text-gray-500 mb-1">Highlights</div>
            <div className="flex gap-3 flex-wrap">
              {highlights.map((c, i) => (
                <div
                  key={i}
                  className="bg-gray-100 text-nowrap text-gray-700 px-3 py-2 rounded-md text-sm shadow-sm flex items-center gap-2"
                >
                  {c.label}
                  {c.icon}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---------- CENTER: Title, Tagline, Image, CTAs ---------- */}
        <div className="col-span-1 flex flex-col items-center text-center">
          {/* Tagline / small intro */}
          <motion.p
            // initial={{ opacity: 0, y: -20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="text-gray-600 mb-3"
          >
            👋 Hello — my name is{" "}
            <span className="font-semibold">Mohit Kumar</span>
          </motion.p>

          {/* Big stacked title */}
          <div className="leading-0.5">
            <motion.h1
              // initial={{ opacity: 0, y: -30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-nowrap"
            >
              Frontend Developer
            </motion.h1>

            <motion.h2
              // initial={{ opacity: 0, y: -10 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.7, delay: 0.08 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent text-nowrap"
              style={{ WebkitTextStroke: "1px rgba(0,0,0,0.85)" }}
            >
              & MERN Stack Enthusiast
            </motion.h2>
          </div>

          {/* Center image with decorative circle behind */}
          <motion.div
            // initial={{ opacity: 0, scale: 0.9 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mt-8"
          >
            {/* decorative oversized circle */}

            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl mx-auto">
              <img
                src="#"
                alt="Mohit's Pic"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* CTA buttons (below image) */}
          <motion.div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex gap-4"
          >
            <a
              href="#portfolio"
              className="px-5 py-3 rounded-full bg-black text-white font-medium border border-black hover:bg-white hover:text-black shadow-md"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-full bg-white text-black font-medium border border-black hover:bg-black hover:text-white shadow-md"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* ---------- RIGHT: Skill tags + social icons ---------- */}
        <div className="hidden lg:flex flex-col items-end gap-6 relative">
          {/* Skill tags in rows */}
          <div className="flex flex-col gap-4 items-center ">
            {skillRows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-4">
                {row.map((s, idx) => (
                  <motion.div
                    // key={s.label}
                    // initial={{ opacity: 0, x: 20 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 0.45, delay: 0.08 * idx }}
                    // whileHover={{
                    //   scale: 1.06,
                    //   boxShadow: "0 10px 25px rgba(79,70,229,0.16)",
                    // }}
                    className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
                  >
                    <div className="text-xl text-indigo-600">{s.icon}</div>
                    <div className="text-sm font-medium text-gray-800">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          <SocialIcons />
        </div>
      </div>

      {/* subtle background floating shapes for depth */}
      {/* <motion.div
        className="absolute left-10 top-10 w-36 h-36 rounded-full bg-indigo-50 blur-2xl opacity-70"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-14 bottom-14 w-52 h-52 rounded-full bg-pink-50 blur-3xl opacity-60"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      /> */}
    </section>
  );
}

