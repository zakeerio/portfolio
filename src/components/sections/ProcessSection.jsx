import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { processSteps } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/animations";
import { SectionHeader } from "../common/SectionHeader";

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How I Work"
          title="A clear process from first call to launch."
          description="Simple communication, realistic scope, visible progress, and support after delivery."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-5">
          {processSteps.map((item) => (
            <motion.div key={item.step} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.step}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              <div className="mt-5 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-sm leading-6 text-slate-300">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
