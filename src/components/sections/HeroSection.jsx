import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { fadeUp, stagger } from "../../lib/animations";

const heroSkills = ["Laravel", "WordPress", "Shopify", "Webflow", "SaaS"];
const calendlyUrl = "https://calendly.com/zakeerio25/30min?back=1&month=2026-05";

export function HeroSection() {
  return (
    <section id="home" className="relative z-10 px-6 pb-20 pt-20 md:pb-28 md:pt-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for global projects
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Zahid Ali
            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-4xl text-transparent md:text-6xl">
              Laravel, Shopify, Webflow & WordPress Developer
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I build reliable websites, eCommerce stores, custom dashboards, and full stack web applications for businesses that need clean execution.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            With 10+ years of experience across Laravel, Shopify, Webflow, WordPress, React, Firebase, and custom integrations, I help agencies, startups, SaaS teams, and eCommerce brands launch and improve digital products.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-slate-950 shadow-xl shadow-cyan-500/20 hover:opacity-90">
              <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="inline-flex items-center justify-center gap-2 rounded-full border-white/15 bg-white/5 px-7 py-3 text-white hover:bg-white/10 hover:text-white">
              <a href="#contact">Hire Me</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-slate-200 hover:bg-white/10 hover:text-white">
              <a href={calendlyUrl} target="_blank" rel="noreferrer"><CalendarDays className="mr-2 h-4 w-4" /> Book a Call</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
          <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
            <CardContent className="p-0">
              <div className="border-b border-white/10 bg-white/[0.04] px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-slate-400">portfolio.tsx</span>
                </div>
              </div>
              <div className="space-y-4 p-6 font-mono text-sm text-slate-300 md:p-8">
                <p><span className="text-violet-300">const</span> developer = <span className="text-cyan-300">{`{`}</span></p>
                <p className="pl-5"><span className="text-slate-500">name:</span> <span className="text-emerald-300">"Zahid Ali"</span>,</p>
                <p className="pl-5"><span className="text-slate-500">role:</span> <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                <p className="pl-5"><span className="text-slate-500">stack:</span> [<span className="text-emerald-300">"Laravel"</span>, <span className="text-emerald-300">"Shopify"</span>, <span className="text-emerald-300">"React"</span>],</p>
                <p className="pl-5"><span className="text-slate-500">focus:</span> <span className="text-emerald-300">"Scalable digital products"</span>,</p>
                <p><span className="text-cyan-300">{`}`}</span>;</p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  {heroSkills.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                      <p className="text-sm font-semibold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
