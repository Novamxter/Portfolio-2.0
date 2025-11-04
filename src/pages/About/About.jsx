import React from "react";
import { MotionWrapper } from "../../components/MotionWrapper";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#E6F3FF] py-16 px-8 md:px-20 grid md:grid-cols-2 gap-10 overflow-hidden"
    >
      {/* Left Card - Bio Data */}
      <MotionWrapper
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="border border-dashed border-[#2FABB0] p-6 rounded-lg flex flex-col items-center"
      >
        {/* Image Placeholder */}
        <MotionWrapper
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-46 h-46 bg-[#8FD3C5] rounded-2xl shadow-[8px_8px_0px_0px_#2FABB0] mb-6"
        ></MotionWrapper>

        <MotionWrapper
          as="h2"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-xl font-bold mb-6 font-logo"
        >
          BIO-DATA
        </MotionWrapper>

        {/* Info List */}
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full space-y-2 text-sm font-inter"
        >
          <div className="flex justify-between border-b pb-1">
            <span className="bg-[#8FD3C5] px-2 py-0.5 rounded font-semibold">
              Age :
            </span>
            <span>21 Years</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="bg-[#8FD3C5] px-2 py-0.5 rounded font-semibold">
              Residence :
            </span>
            <span>India</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="bg-[#8FD3C5] px-2 py-0.5 rounded font-semibold">
              Location :
            </span>
            <span>Nurpur, HP</span>
          </div>
          <div className="flex justify-between border-b pb-1">
            <span className="bg-[#8FD3C5] px-2 py-0.5 rounded font-semibold">
              Role :
            </span>
            <span>Freelancer</span>
          </div>
        </MotionWrapper>
      </MotionWrapper>

      {/* Right Card - About */}
      <MotionWrapper
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="border border-dashed border-[#2FABB0] p-6 rounded-lg"
      >
        <MotionWrapper
          as="h2"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="section-heading"
        >
          Behind The Code
        </MotionWrapper>
        <MotionWrapper
          as="p"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-gray-800 leading-relaxed mb-4"
        >
          Hi, I’m Mohit — a frontend developer with a creative eye and clean
          code.
          <br />I build responsive, user-first websites using HTML, CSS,
          JavaScript, and tools like Figma, VS Code, Acode, Git, and GitHub.
        </MotionWrapper>
        <MotionWrapper
          as="p"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-gray-800 leading-relaxed mb-4"
        >
          After completing my PGDCA, I now work as a freelancer, exploring the
          backend with MongoDB, Node.js, and Express as I grow into a full-stack
          developer.
        </MotionWrapper>
        <MotionWrapper
          as="p"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-gray-800 leading-relaxed"
        >
          Outside of coding, I enjoy sketching and diving into web design
          trends, always blending logic with creativity. <br />✨ Let’s create
          something impactful together.
        </MotionWrapper>
      </MotionWrapper>
    </section>
  );
}
