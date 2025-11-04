import { useState } from "react";
import { motion } from "framer-motion";
import { MotionWrapper } from "../../components/MotionWrapper"
import { Link } from "react-router-dom"; // for navigation
import ShowAll from "./ShowAll";
import "./Work.css";

export default function Work({ showAll = false }) {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: 1,
      title: "FlixFusion",
      desc: "A sleek frontend clone of Netflix built using HTML, CSS, and JavaScript...",
      tech: ["HTML", "CSS", "JavaScript"],
      tags: ["#clone", "#frontend", "#netflix"],
    },
    {
      id: 2,
      title: "PortfolioX",
      desc: "A responsive portfolio template built with React and TailwindCSS...",
      tech: ["React", "Tailwind", "Framer Motion"],
      tags: ["#portfolio", "#design", "#frontend"],
    },
    {
      id: 3,
      title: "MusicWave",
      desc: "A Spotify-inspired music app with playlists, player controls...",
      tech: ["JavaScript", "HTML", "CSS"],
      tags: ["#music", "#frontend", "#spotify"],
    },
    {
      id: 4,
      title: "Taskify",
      desc: "A simple task manager with React hooks and localStorage integration.",
      tech: ["React", "CSS"],
      tags: ["#productivity", "#frontend"],
    },
    {
      id: 5,
      title: "API Explorer",
      desc: "Postman-style app to test APIs with Express backend.",
      tech: ["NodeJS", "Express", "MongoDB"],
      tags: ["#backend", "#api", "#express"],
    },
  ];

  // filter projects by tab
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((tag) =>
            tag.toLowerCase().includes(activeTab.toLowerCase())
          )
        );

  // home page → only 3 projects
  const projectsToShow = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      id="work"
      className={`px-6 bg-gradient-to-br from-[#C7EAFF] to-[#A2FFF0] ${showAll ? "pt-4 pb-8" : "py-10"}`}
    >
      <div className="flex justify-center">
        <MotionWrapper
          as="h2"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="section-heading mb-8"
        >
          Crafted with Code
        </MotionWrapper>
      </div>

      {/* Tabs only visible on /projects */}
      {showAll && (
        <div>
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {["All", "Latest", "Code", "Design", "Experiments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-sky-500 text-white"
                    : "bg-white/70 hover:bg-sky-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <ShowAll projects={filteredProjects} />
        </div>
      )}

      {/* Motion Grid Container */}
      {!showAll && (
        <MotionWrapper
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.slice(0, 3).map((project) => (
            <MotionWrapper
              key={project.id}
              variants={cardVariants}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-gradient-to-br from-[#229FAE] to-[#49556B] rounded-2xl text-white shadow-xl overflow-hidden flex flex-col"
            >
              <div className="bg-gray-300 flex items-center justify-center aspect-video font-bold text-xl">
                PROJECT GIF
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-teal-300">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-gray-200 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-3 border-b border-b-white/30 pb-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-teal-500 rounded-md text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-300">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700/60 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2 justify-end">
                  <button className="bg-sky-600 hover:bg-sky-500 px-3 py-1.5 rounded-lg text-xs font-semibold">
                    DEMO
                  </button>
                  <button className="bg-green-600 hover:bg-green-500 px-3 py-1.5 rounded-lg text-xs font-semibold">
                    CODE
                  </button>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      )}

      {/* View More link only on Home */}
      {!showAll && (
        <MotionWrapper
          variants={buttonVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mt-10"
        >
          <Link
            to="/projects"
            className="inline-block px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg shadow-md"
          >
            View All Projects →
          </Link>
        </MotionWrapper>
      )}
    </div>
  );
}
