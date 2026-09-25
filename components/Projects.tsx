import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-emerald-400 font-medium mb-4">
            Featured Work
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Built for real-world use.
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            A selection of websites, applications, and software platforms
            designed and developed for real businesses and users.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-300"
            >
              {/* Screenshot */}
              <div className="relative h-72 overflow-hidden bg-[#111827]">
                {/* Browser Header */}
                <div className="absolute top-0 left-0 right-0 z-10 h-10 bg-black/70 backdrop-blur-sm border-b border-white/10 flex items-center px-4 gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>

                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top pt-10 transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <span className="text-gray-600 text-sm">
                    0{projects.indexOf(project) + 1}
                  </span>
                </div>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/5 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                  >
                    Visit Project
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}