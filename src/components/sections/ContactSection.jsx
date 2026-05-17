import { Github, Globe2, Linkedin, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-8 text-center shadow-2xl backdrop-blur-xl md:p-14">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Let’s Build Something Amazing</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Available for freelance projects, long-term collaborations, Shopify development, Laravel backend systems, and Webflow projects.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2 text-slate-950 hover:bg-emerald-300">
              <a href="https://wa.me/923322905665" target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
            </Button>
            <Button asChild variant="outline" className="inline-flex items-center gap-2 rounded-full border-white/15 bg-white/5 px-6 py-2 text-white hover:bg-white/10 hover:text-white">
              <a href="https://www.linkedin.com/in/zakeerio/" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
            </Button>
            <Button asChild variant="outline" className="inline-flex items-center gap-2 rounded-full border-white/15 bg-white/5 px-6 py-2 text-white hover:bg-white/10 hover:text-white">
              <a href="https://www.upwork.com/freelancers/zahidali50" target="_blank" rel="noreferrer"><Globe2 className="mr-2 h-4 w-4" /> Upwork</a>
            </Button>
            <Button asChild variant="outline" className="inline-flex items-center gap-2 rounded-full border-white/15 bg-white/5 px-6 py-2 text-white hover:bg-white/10 hover:text-white">
              <a href="https://github.com/zakeerio" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
            </Button>
            <Button asChild variant="outline" className="inline-flex items-center gap-2 rounded-full border-white/15 bg-white/5 px-6 py-2 text-white hover:bg-white/10 hover:text-white">
              <a href="https://www.fiverr.com/zakeerio" target="_blank" rel="noreferrer"><Globe2 className="mr-2 h-4 w-4" /> Fiverr</a>
            </Button>
            <Button asChild variant="outline" className="inline-flex items-center gap-2 rounded-full border-white/15 bg-white/5 px-6 py-2 text-white hover:bg-white/10 hover:text-white">
              <a href="mailto:za_keerio@yahoo.com"><Mail className="mr-2 h-4 w-4" /> Email</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
