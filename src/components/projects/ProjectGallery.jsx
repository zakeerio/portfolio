import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp, stagger } from "../../lib/animations";
import { Badge } from "../common/Badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

function getScreenshotUrl(url) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900`;
}

export function ProjectGallery({ projects }) {
  const [selected, setSelected] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.flatMap((project) => project.tech))).sort()];
  const filtered = selected === "All" ? projects : projects.filter((project) => project.tech.includes(selected));

  return (
    <div data-selected={selected}>
      <div className="mb-3 flex items-center justify-between">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${selected === category ? "bg-cyan-400 text-slate-900" : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.06]"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-sm text-slate-400">Showing <span className="font-semibold text-white">{filtered.length}</span> projects - <span className="font-medium text-white">{selected}</span></div>
      </div>

      <motion.div key={selected} variants={stagger} initial="hidden" animate="visible" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.div key={project.title} variants={fadeUp}>
            <Card className="group h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.05] shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
                <img
                  src={project.image || getScreenshotUrl(project.url)}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.26),transparent_32%)]" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Project {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-lg font-bold text-white">{project.title}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                {project.role && <p className="mt-2 text-sm font-semibold text-cyan-300">{project.role}</p>}
                <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-300">{project.desc}</p>
                {project.outcome && (
                  <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-white">Value: </span>{project.outcome}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <Badge key={item}>{item}</Badge>)}</div>
                <Button asChild variant="ghost" className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-2 text-cyan-200 hover:bg-transparent hover:text-cyan-100">
                  <a href={project.url} target="_blank" rel="noreferrer">Visit Website <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
