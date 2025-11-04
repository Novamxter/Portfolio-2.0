import React from "react";
import { MotionWrapper } from "./MotionWrapper";

export default function SkillTag({ s, idx, img = false }) {
  return (
    <MotionWrapper
      key={s.name}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.08 * idx }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 10px 25px rgba(79,70,229,0.16)",
      }}
      className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
    >
      {img ? (
        <img
          src={s.icon}
          alt={s.name}
          className="h-7 w-7 object-contain"
          loading="lazy"
        />
      ) : (
        <div className="text-xl text-indigo-600">{s.icon}</div>
      )}
      <div className="text-sm font-medium text-gray-800">{s.name}</div>
    </MotionWrapper>
  );
}
