import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    desc: "Responsive, clean, and accessible websites",
    icon: "💻",
  },
  {
    title: "UI Building with Figma",
    desc: "Translating designs into functional layouts",
    icon: "💡",
  },
  {
    title: "JavaScript Interactivity",
    desc: "Dynamic features, animations, and DOM handling",
    icon: "</>",
  },
  {
    title: "Version Control (Git)",
    desc: "Organized project workflow with Git & GitHub",
    icon: "🔗",
  },
];

export default function WhatIDo() {
  return (
    <section
      id="services"
      className="py-16 flex justify-center items-center px-8 min-h-[100vh] md:px-16"
    >
      <div className="max-w-6xl text-center">
        {/* Heading */}
        <motion.div
          // initial={{ y: 40, opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.6, delay: 0.2 }}
          // viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <h2 className="section-heading mb-2">What I Do</h2>
          <p className="text-gray-600 mb-10">
            Some of the key things I build and focus on while developing.
          </p>
        </motion.div>
        {/* <div className="flex flex-col items-center justify-center gap-2"></div> */}

        {/* Cards with animation */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.1 }}
          // variants={{
          //   hidden: { opacity: 0 },
          //   visible: {
          //     opacity: 1,
          //     transition: {
          //       staggerChildren: 0.2,
          //     },
          //   },
          // }}
        >
          {skills.map((skill, index) => (
            <motion.div
              // key={index}
              // variants={{
              //   hidden: { opacity: 0, y: 50 },
              //   visible: { opacity: 1, y: 0 },
              // }}
              // transition={{ duration: 0.6 }}
              // whileHover={{
              //   scale: 1.05,
              //   transition: { duration: 0.2 },
              // }}
              className="relative bg-gradient-to-br from-[#D1EAFF] to-[#8BCAFF] p-6 shadow hover:shadow-lg transition rounded-bl-[64px] rounded-tr-[64px] rounded-tl-[40px] cursor-default"
            >
              <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.desc}</p>
              <div className="text-4xl">{skill.icon}</div>
              <div className="absolute right-[-22px] bottom-[-22px] h-5 w-5 bg-[#8BCAFF] rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
