import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { faqs } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/animations";
import { SectionHeader } from "../common/SectionHeader";

export function FaqSection() {
  return (
    <section className="relative z-10 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions clients usually ask before we start."
          description="A quick overview of how I work, what I build, and how projects can be structured."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
          {faqs.map((item) => (
            <motion.div key={item.question} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur-xl">
              <div className="flex gap-4">
                <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                <div>
                  <h3 className="text-lg font-bold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
