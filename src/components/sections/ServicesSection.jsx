import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { services } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/animations";
import { SectionHeader } from "../common/SectionHeader";

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Development services built for growth."
          description="From custom Laravel platforms to Shopify stores, Webflow builds, WordPress systems, and third-party integrations."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <motion.div key={service} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
              <Layers className="mb-4 h-6 w-6 text-cyan-300" />
              <p className="font-semibold leading-6 text-white">{service}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
