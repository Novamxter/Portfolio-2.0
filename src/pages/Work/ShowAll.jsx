import React from "react";

export default function ShowAll({ projects }) {
  return (
    <>
      <section id="projects" className="max-w-5xl m-auto space-y-15">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              className={`bg-gradient-to-br from-[#229FAE] to-[#49556B] rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row gap-6 ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
              {/* Project GIF */}
              <div className="bg-gray-300 rounded-2xl flex items-center justify-center text-xl font-bold w-full md:w-1/2 aspect-video">
                PROJECT GIF
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <h2 className="text-2xl text-teal-300 font-logo">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-200">{project.desc}</p>

                  {/* Tech tags */}
                  <div className="flex gap-2 mt-3 border-b pb-2 border-b-white">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-teal-500 rounded-md text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Hashtags */}
                  <div className="flex gap-2 mt-2 text-xs text-gray-300">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/60 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images + Buttons */}
                <div className={`mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  <div className="bg-gray-400 rounded-sm flex items-center justify-center w-full sm:w-1/2 h-32">
                    Images
                  </div>
                  <div className="flex gap-2 justify-center sm:justify-end">
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-semibold">
                      VIEW
                    </button>
                    <button className="bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg text-sm font-semibold">
                      DEMO
                    </button>
                    <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-sm font-semibold">
                      CODE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
