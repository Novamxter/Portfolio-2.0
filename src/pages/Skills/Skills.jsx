import React from "react";
import { MotionWrapper } from "../../components/MotionWrapper";
import { skillsData } from "./SkillsData";
import SkillTag from "../../components/SkillTag";

export default function Skills() {
  const { frontend, backend, tools } = skillsData;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-12 px-4 md:px-12 lg:px-20">
      <MotionWrapper
        as="h2"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
        className="section-heading"
      >
        Skills
      </MotionWrapper>

      {/* ---------- DESKTOP VIEW (≥640px) ---------- */}
      <div className="hidden sm:grid gap-8 m-auto sm:max-w-[712px] md:max-w-none md:gap-3 mlg:gap-8 md:grid-cols-2">
        {/* Frontend */}
        <MotionWrapper
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="md:row-span-2 flex flex-col md:justify-self-end md:place-self-center lg:max-w-[420px]"
        >
          <h3 className="text-xl font-semibold mb-1">FrontEnd</h3>
          <div className="rounded-tl-[10px] rounded-tr-[60px] rounded-bl-[60px] px-6 py-8 bg-gradient-to-r from-teal-200 to-cyan-200 shadow-lg">
            <div className="flex gap-3 mlg:gap-5 flex-wrap justify-center">
              {frontend.map((skill, i) => (
                <MotionWrapper
                  key={skill.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  style={{ "--skill-card-color": skill.color }}
                  className="skill-card"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2 aspect-square"
                    loading="lazy"
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {skill.name}
                  </span>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Backend */}
        <MotionWrapper
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:max-w-[420px]"
        >
          <h3 className="text-xl font-semibold mb-1 text-right">BackEnd</h3>
          <div className="rounded-tr-[10px] rounded-tl-[60px] rounded-br-[60px] p-6 bg-gradient-to-r from-cyan-200 to-blue-200 shadow-lg">
            <div className="flex gap-3 mlg:gap-5 flex-wrap justify-center">
              {backend.map((skill, i) => (
                <MotionWrapper
                  key={skill.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ "--skill-card-color": skill.color }}
                  className="skill-card"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                    loading="lazy"
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {skill.name}
                  </span>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Tools */}
        <MotionWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:max-w-[420px]"
        >
          <h3 className="text-xl font-semibold mb-1 md:hidden">Tools</h3>
          <div className="rounded-br-[10px] rounded-tr-[60px] rounded-bl-[60px] p-6 bg-gradient-to-r from-blue-200 to-indigo-200 shadow-lg">
            <div className="flex gap-3 mlg:gap-5 flex-wrap justify-center">
              {tools.map((tool, i) => (
                <MotionWrapper
                  key={tool.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="skill-card"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                    loading="lazy"
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {tool.name}
                  </span>
                </MotionWrapper>
              ))}
            </div>
          </div>
          <h3 className="hidden text-xl font-semibold mt-1 text-right md:block">
            Tools
          </h3>
        </MotionWrapper>
      </div>

      {/* ---------- MOBILE VIEW (<640px) ---------- */}
      <div className="hidden sm:grid gap-8 m-auto sm:max-w-[712px] md:max-w-none md:gap-3 mlg:gap-8 md:grid-cols-2">
        {/* Frontend, Backend, Tools existing code here (your animated cards) */}
        {/* Keep your old MotionWrapper skill cards code for sm and above */}
      </div>

      {/* 📱 Mobile View (Below 640px) */}
      <div className="flex flex-col gap-6 sm:hidden">
        {/* Frontend */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {frontend.map((skill, i) => (
              <SkillTag key={skill.name} s={skill} idx={i} img={true} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Backend</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {backend.map((skill, i) => (
              <SkillTag key={skill.name} s={skill} idx={i} img={true} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <SkillTag key={tool.name} s={tool} idx={i} img={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
