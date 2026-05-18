import { motion } from "framer-motion";
import { proofItems } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/animations";

export function ProofStripSection() {
  return (
    <section className="relative z-10 px-6 py-8 lg:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl"
      >
        <motion.p variants={fadeUp} className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Trusted across modern web platforms
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-3">
          {proofItems.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
