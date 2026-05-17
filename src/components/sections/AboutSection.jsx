import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { stats } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/animations";
import { SectionHeader } from "../common/SectionHeader";

const strengths = [
  "Clean architecture",
  "Performance optimization",
  "Responsive design",
  "Scalable backend systems",
  "Conversion-focused frontend experiences",
  "Global business solutions",
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Me"
          title="Senior developer mindset with business-focused execution."
          description="I build fast, scalable, and conversion-focused digital products for startups, agencies, SaaS companies, Shopify businesses, and international clients."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl md:p-10"
          >
            <p className="text-lg leading-9 text-slate-300">
              I am a Full Stack Developer with over 10 years of experience building scalable applications, eCommerce platforms, SaaS products, and modern websites for businesses worldwide.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-300">
              My expertise includes Laravel, Shopify, Webflow, WordPress, React JS, Firebase, WooCommerce, API integrations, and custom backend systems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
            {stats.map((stat) => (
              <motion.div key={stat} variants={fadeUp} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-xl backdrop-blur-xl">
                <p className="text-lg font-semibold text-white">{stat}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
