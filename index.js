import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MessageCircle, Github, Linkedin, Star, ExternalLink, Code2, Database, ShoppingBag, Globe2, Layers, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const projects = [
  {
    title: "Daniel Vianna Portfolio",
    url: "https://www.danielvianna.com/",
    tech: ["Webflow"],
    desc: "Developed a modern portfolio website with responsive layouts and smooth user experience.",
  },
  {
    title: "Beyond Tells",
    url: "https://www.beyondtells.com/",
    tech: ["Webflow"],
    desc: "Built and customized a modern business website focused on storytelling and clean UI.",
  },
  {
    title: "Growtoro",
    url: "https://growtoro.com/",
    tech: ["Webflow"],
    desc: "Contributed to a lead generation platform with responsive and conversion-focused design.",
  },
  {
    title: "Sleep Is A Skill",
    url: "https://sleepisaskill.com/",
    tech: ["Webflow"],
    desc: "Developed responsive Webflow pages for a wellness and coaching platform.",
  },
  {
    title: "Happyer",
    url: "https://happyer.io/",
    tech: ["Webflow", "Firebase"],
    desc: "Integrated Firebase functionalities with Webflow for dynamic user experiences.",
  },
  {
    title: "Epsy Health",
    url: "https://www.epsyhealth.com/",
    tech: ["Webflow"],
    desc: "Worked on responsive frontend development for a healthcare-focused platform.",
  },
  {
    title: "Live Bait",
    url: "https://livebait.com/",
    tech: ["Shopify"],
    desc: "Customized Shopify theme and storefront functionality for an eCommerce brand.",
  },
  {
    title: "Hot Sauce Zone",
    url: "https://hotsaucezone.com/",
    tech: ["Shopify"],
    desc: "Migrated WooCommerce store to Shopify and developed custom sections and collection pages.",
  },
  {
    title: "Sauce Brothers",
    url: "https://saucebrothers.co/",
    tech: ["Shopify"],
    desc: "Customized Shopify theme and implemented custom business functionality.",
  },
  {
    title: "Fello",
    url: "https://fello.com/",
    tech: ["Laravel"],
    desc: "Worked as part of the Laravel development team on backend systems and platform features.",
  },
  {
    title: "Sports App Demo",
    url: "https://sports.pixeltechnosol.com",
    tech: ["React JS"],
    desc: "Developed a sports application with modern responsive UI using React JS.",
  },
  {
    title: "Parasail Siesta",
    url: "https://www.parasailsiesta.com/",
    tech: ["WordPress", "ACF"],
    desc: "Built a fully customized WordPress theme with dynamic ACF content sections.",
  },
  {
    title: "Southern Gentlemen Fishing",
    url: "https://www.southerngentlemenfishing.com/",
    tech: ["WordPress", "ACF"],
    desc: "Created a custom WordPress website with tailored frontend experiences.",
  },
  {
    title: "Sea Burials",
    url: "https://www.seaburials.com/",
    tech: ["WordPress", "ACF"],
    desc: "Developed custom WordPress functionality and dynamic content management.",
  },
  {
    title: "Melinda's Foods",
    url: "https://melindas.com/",
    tech: ["WooCommerce"],
    desc: "Worked on WooCommerce customization and frontend enhancements.",
  },
];

const techGroups = [
  {
    title: "Backend",
    icon: Database,
    items: ["Laravel", "PHP", "CodeIgniter", "MySQL", "Firebase"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["React JS", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
  },
  {
    title: "Platforms",
    icon: ShoppingBag,
    items: ["Shopify", "Webflow", "WordPress", "WooCommerce"],
  },
  {
    title: "Tools",
    icon: Zap,
    items: ["Git", "GitHub", "API Integrations", "Zapier", "Mailgun", "Stripe"],
  },
];

const services = [
  "Laravel Web Development",
  "Shopify Store Development",
  "Shopify Theme Customization",
  "Webflow Development",
  "WordPress Development",
  "API Integrations",
  "Firebase Integration",
  "WooCommerce Development",
  "Custom Admin Dashboards",
  "Full Stack Web Applications",
];

const stats = [
  "10+ Years Experience",
  "International Client Projects",
  "Full Stack Development Expertise",
  "eCommerce & SaaS Solutions",
  "Responsive & Performance Focused Development",
];

const testimonials = [
  {
    quote: "Zahid delivered a clean, scalable solution with excellent communication and attention to detail.",
    name: "International Client",
    role: "Startup Founder",
  },
  {
    quote: "Professional Shopify work, fast turnaround, and strong technical problem-solving throughout the project.",
    name: "eCommerce Client",
    role: "Store Owner",
  },
  {
    quote: "A reliable full stack developer who understands backend systems, frontend quality, and business goals.",
    name: "Agency Partner",
    role: "Project Manager",
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{description}</p>}
    </motion.div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

export default function ZahidAliPortfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070A13] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[20%] h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#070A13]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-black text-white shadow-lg shadow-cyan-500/20">ZA</span>
            <span className="font-semibold tracking-wide text-white">Zahid Ali</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <Button asChild className="hidden rounded-full bg-white text-slate-950 hover:bg-cyan-100 md:inline-flex">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>
      </header>

      <section id="home" className="relative z-10 px-6 pb-20 pt-20 md:pb-28 md:pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for global projects
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Zahid Ali
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-4xl text-transparent md:text-6xl">
                Full Stack Laravel & Shopify Developer
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Building scalable web applications, Shopify stores, Webflow experiences, and custom business solutions for global brands.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              Experienced Full Stack Developer specializing in Laravel, Shopify, Webflow, WordPress, React, Firebase, and custom eCommerce solutions. Passionate about building scalable systems, modern interfaces, and high-performing digital products.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 text-slate-950 shadow-xl shadow-cyan-500/20 hover:opacity-90">
                <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-7 text-slate-200 hover:bg-white/10 hover:text-white">
                <a href="#resume"><Download className="mr-2 h-4 w-4" /> Download Resume</a>
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
                  <p><span className="text-violet-300">const</span> developer = <span className="text-cyan-300">&#123;</span></p>
                  <p className="pl-5"><span className="text-slate-500">name:</span> <span className="text-emerald-300">"Zahid Ali"</span>,</p>
                  <p className="pl-5"><span className="text-slate-500">role:</span> <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                  <p className="pl-5"><span className="text-slate-500">stack:</span> [<span className="text-emerald-300">"Laravel"</span>, <span className="text-emerald-300">"Shopify"</span>, <span className="text-emerald-300">"React"</span>],</p>
                  <p className="pl-5"><span className="text-slate-500">focus:</span> <span className="text-emerald-300">"Scalable digital products"</span>,</p>
                  <p><span className="text-cyan-300">&#125;</span>;</p>
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    {["SaaS", "Shopify", "Webflow", "Laravel"].map((item) => (
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
                {["Clean architecture", "Performance optimization", "Responsive design", "Scalable backend systems", "Conversion-focused frontend experiences", "Global business solutions"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {stats.map((stat) => (
                <motion.div key={stat} variants={fadeUp} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-xl backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">{stat}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Modern technologies for scalable product development."
            description="A practical stack covering backend architecture, eCommerce platforms, frontend experiences, integrations, and automation."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} variants={fadeUp}>
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.05] shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                    <CardContent className="p-6">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-5 text-xl font-bold text-white">{group.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => <Badge key={item}>{item}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Selected work across Webflow, Shopify, Laravel, React, and WordPress."
            description="A premium showcase of international client projects, eCommerce brands, healthcare platforms, SaaS systems, and business websites."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Card className="group h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.05] shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.26),transparent_32%)]" />
                    <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Project {String(index + 1).padStart(2, "0")}</p>
                      <p className="mt-1 text-lg font-bold text-white">{project.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-300">{project.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => <Badge key={item}>{item}</Badge>)}
                    </div>
                    <Button asChild variant="ghost" className="mt-6 rounded-full px-0 text-cyan-200 hover:bg-transparent hover:text-cyan-100">
                      <a href={project.url} target="_blank" rel="noreferrer">Visit Website <ExternalLink className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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

      <section className="relative z-10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by clients who value quality and delivery."
            description="Professional placeholder reviews designed for a strong portfolio layout. Replace with real client feedback when available."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div key={item.name} variants={fadeUp}>
                <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.05] shadow-xl backdrop-blur-xl">
                  <CardContent className="p-7">
                    <div className="mb-5 flex gap-1 text-yellow-300">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="text-base leading-8 text-slate-300">“{item.quote}”</p>
                    <div className="mt-7 border-t border-white/10 pt-5">
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-sm text-slate-400">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-8 text-center shadow-2xl backdrop-blur-xl md:p-14">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Let’s Build Something Amazing</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Available for freelance projects, long-term collaborations, Shopify development, Laravel backend systems, and Webflow projects.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full bg-emerald-400 px-6 text-slate-950 hover:bg-emerald-300">
                <a href="https://wa.me/923322905665" target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <a href="https://www.linkedin.com/in/zakeerio/" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <a href="https://github.com/" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <a href="https://www.fiverr.com/zakeerio" target="_blank" rel="noreferrer"><Globe2 className="mr-2 h-4 w-4" /> Fiverr</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <a href="mailto:za_keerio@yahoo.com"><Mail className="mr-2 h-4 w-4" /> Email</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="font-bold text-white">Zahid Ali</p>
            <p className="mt-1 text-sm text-slate-400">Built with Laravel, Shopify, Webflow, React, WordPress, and modern full stack expertise.</p>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Zahid Ali. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
