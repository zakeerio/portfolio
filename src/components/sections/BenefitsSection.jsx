import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { benefits } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/animations";
import { SectionHeader } from "../common/SectionHeader";

export function BenefitsSection() {
  return (
    <section className="relative z-10 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What You Get"
          title="Development support that is practical, clear, and built to last."
          description="The goal is not just to finish tasks. It is to ship work that helps your business move with confidence."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div key={item.title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-sm font-bold text-cyan-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
