import React from "react";
import { MotionWrapper } from "../../components/MotionWrapper";

export default function AcademicJourney() {
  const academics = [
    {
      year: "2024–2025",
      title: "Post Graduate Diploma in Computer Applications",
      place: "AISECT Computer Centre, Nurpur (HP)",
    },
    {
      year: "2021–2024",
      title: "Bachelor of Science in Mathematics",
      place: "Govt. Arya Degree College, Nurpur (HP) — Affiliated to HPU",
    },
    {
      year: "2014–2021",
      title: "Secondary & Higher Secondary (Science – PCM)",
      place: "Jawahar Navodaya Vidyalaya, Kangra (HP)",
    },
  ];

  // Parent container animation (controls stagger)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  // Each item animation
  const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex justify-between py-12 px-8 md:px-20">
      <div className="flex flex-col w-full">
        <MotionWrapper
          as="h2"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="section-heading"
        >
          Academic Journey
        </MotionWrapper>

        <MotionWrapper
          className="relative x-sm:min-w-[346px] m-auto lg:min-w-none"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {academics.map((itemData, index) => (
            <MotionWrapper
              key={index}
              variants={item}
              className="relative mb-12 ml-6"
            >
              {/* Animated Line */}
              <MotionWrapper
                as="span"
                exception={true}
                className="absolute left-[-30px] top-[4px] w-[2px] bg-[#58C6D7]"
                initial={{ height: 0 }}
                whileInView={{ height: "140%" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              {/* Circle */}
              <MotionWrapper
                as="span"
                className="absolute left-[-40px] top-[4px] flex items-center justify-center w-[20px] h-[20px] bg-[#58C6D7] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.5 }}
              />

              {/* Content */}
              <h3 className="text-[#58C6D7] text-xl font-logo">
                {itemData.year}
              </h3>
              <p className="font-semibold text-gray-800">{itemData.title}</p>
              <p className="text-gray-600">{itemData.place}</p>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:flex justify-center w-full max-w-[50%]">
        <MotionWrapper
          className="w-[80%] max-w-[400px] aspect-square overflow-hidden"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/academic.jpg`}
            alt="Academic Journey"
            className="w-full object-cover aspect-square rounded-3xl"
          />
        </MotionWrapper>
      </div>
    </div>
  );
}
