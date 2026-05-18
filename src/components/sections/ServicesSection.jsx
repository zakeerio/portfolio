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
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
              <Layers className="mb-4 h-6 w-6 text-cyan-300" />
              <h3 className="text-lg font-semibold leading-6 text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
