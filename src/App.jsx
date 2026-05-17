import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MessageCircle, Github, Linkedin, Star, ExternalLink, Code2, Database, ShoppingBag, Globe2, Layers, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

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
  {
    title: "NDIT Solutions",
    url: "https://www.nditsolutions.com/",
    tech: ["Webflow"],
    desc: "Webflow website — built, managed and supported end-to-end for the client.",
  },
  {
    title: "The BioHealth Company",
    url: "https://www.thebiohealthcompany.com/",
    tech: ["Shopify", "Webflow", "Udesly"],
    desc: "Shopify build from Webflow using Udesly with custom apps, admin API integrations, and editable pages for multiple products.",
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
    project: "Figma to Webflow Dev - Pixel Perfect",
    quote: "I highly recommend this freelance Webflow developer! Their exceptional expertise and attention to detail resulted in a stunning website that surpassed my expectations.",
    client: "Webflow teacher",
    date: "Nov 2022",
    amount: "$416.67",
    rate: "$20.00 /hr",
    hours: "21 hours",
    tags: ["Committed to Quality", "Detail Oriented"],
    rating: 5.0,
  },
  {
    project: "Webflow support",
    quote: "Zahid helped me with a webflow website. Really valuable help. Would recommend him.",
    client: "Private Client",
    date: "Nov 5, 2022 - Nov 24, 2022",
    amount: "$100.00",
    rate: "$40.00 /hr",
    hours: "3 hours",
    tags: [],
    rating: 5.0,
  },
  {
    project: "Javascript / Firebase - UX Project",
    quote: "Focused execution on this project. Many thanks, Zahid!",
    client: "Private Client",
    date: "Sep 7, 2022 - Oct 6, 2022",
    amount: "$20.00",
    rate: "Fixed price",
    hours: null,
    tags: [],
    rating: 5.0,
  },
  {
    project: "Integrate Firebase Project with Webflow Page",
    quote: "Zahid did a great job with my project integrating Firebase and Webflow!",
    client: "Private Client",
    date: "Sep 28, 2022 - Oct 5, 2022",
    amount: "$766.67",
    rate: "$50.00 /hr",
    hours: "15 hours",
    tags: ["Committed to Quality"],
    rating: 5.0,
  },
  {
    project: "Javascript / Firebase - Ongoing",
    quote: "It's been a pleasure working with Zahid and his talented family for several months. Hopefully we can continue to do business in the future. [Highly recommended]",
    client: "Private Client",
    date: "Aug 23, 2022 - Aug 29, 2022",
    amount: "$15.00",
    rate: "Fixed price",
    hours: null,
    tags: ["Collaborative", "Committed to Quality"],
    rating: 5.0,
  },
  {
    project: "Fix script (mobile slider nav)",
    quote: "Once again we are very happy with Zahid's work. Hope we will get new opportunities to work with him soon!",
    client: "Private Client",
    date: "Sep 24, 2019",
    amount: "$15.00",
    rate: "Fixed price",
    hours: null,
    tags: ["Committed to Quality", "Collaborative"],
    rating: 5.0,
  },
  {
    project: "Show an element if a specific slide is active - Webflow site",
    quote: "Zahid understood the job description very well and was quickly able to find a solution. Zahid is a great developer we can only recommend.",
    client: "Private Client",
    date: "Sep 21, 2019",
    amount: "$10.00",
    rate: "Fixed price",
    hours: null,
    tags: ["Clear Communicator", "Solution Oriented"],
    rating: 5.0,
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

export default function App() {
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
          <Button asChild className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 hover:bg-cyan-100">
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
              <Button asChild size="lg" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 text-slate-950 shadow-xl shadow-cyan-500/20 hover:opacity-90">
                <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="inline-flex items-center justify-center gap-2 rounded-full border-white/15 bg-white/5 px-7 py-3 text-white hover:bg-white/10 hover:text-white">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-slate-200 hover:bg-white/10 hover:text-white">
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
                  <p><span className="text-violet-300">const</span> developer = <span className="text-cyan-300">{`{`}</span></p>
                  <p className="pl-5"><span className="text-slate-500">name:</span> <span className="text-emerald-300">"Zahid Ali"</span>,</p>
                  <p className="pl-5"><span className="text-slate-500">role:</span> <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                  <p className="pl-5"><span className="text-slate-500">stack:</span> [<span className="text-emerald-300">"Laravel"</span>, <span className="text-emerald-300">"Shopify"</span>, <span className="text-emerald-300">"React"</span>],</p>
                  <p className="pl-5"><span className="text-slate-500">focus:</span> <span className="text-emerald-300">"Scalable digital products"</span>,</p>
                  <p><span className="text-cyan-300">{`}`}</span>;</p>
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
          <ProjectGallery projects={projects} />
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
          {/* Featured review + slider */}
          <div className="mx-auto max-w-5xl">
            {/* compute top review: highest rating, then highest amount (if numeric) */}
            {(() => {
              const top = testimonials.slice().sort((a, b) => {
                if (b.rating !== a.rating) return b.rating - a.rating;
                const numA = parseFloat(String(a.amount || '').replace(/[^0-9\.]/g, '')) || 0;
                const numB = parseFloat(String(b.amount || '').replace(/[^0-9\.]/g, '')) || 0;
                return numB - numA;
              })[0];
              return (
                <motion.div variants={fadeUp} className="mb-8">
                  <Card className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-cyan-300 font-semibold">Featured review</div>
                          <div className="mt-2 text-xl font-bold text-white">{top.project}</div>
                          <div className="mt-2 text-sm text-slate-400">{top.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-3 py-1 text-sm font-semibold text-slate-200">{top.rating.toFixed(1)} ★</div>
                        </div>
                      </div>
                      <p className="mt-6 text-lg leading-8 text-slate-300">“{top.quote}”</p>
                      <div className="mt-6 text-sm text-slate-400">{top.tags && top.tags.join(' • ')}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })()}

            {/* Slider */}
            <Slider testimonials={testimonials} />
          </div>
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

function Slider({ testimonials }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((s) => (s + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const prev = () => setActive((s) => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((s) => (s + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
      <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-white/[0.03] flex items-center justify-center text-lg font-bold text-slate-200">{String(t.rating.toFixed(0))}</div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-white">{t.project}</div>
              <div className="text-sm text-slate-400">{t.date}</div>
            </div>
            <div className="mt-3 mb-4 text-yellow-300">{Array.from({ length: Math.round(t.rating) }).map((_, i) => <Star key={i} className="inline-block h-4 w-4" />)}</div>
            <p className="text-lg text-slate-300">“{t.quote}”</p>
            <div className="mt-4 text-sm text-slate-400">{t.tags && t.tags.join(' • ')}</div>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={prev} aria-label="Previous" className="rounded-full bg-white/[0.04] px-3 py-2 hover:bg-white/[0.06]">‹</button>
          <button onClick={next} aria-label="Next" className="rounded-full bg-white/[0.04] px-3 py-2 hover:bg-white/[0.06]">›</button>
        </div>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-2 w-8 rounded-full ${i === active ? 'bg-cyan-400' : 'bg-white/[0.06]'}`} aria-label={`Go to review ${i + 1}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectGallery({ projects }) {
  const [selected, setSelected] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.flatMap(p => p.tech))).sort()];

  const filtered = selected === 'All' ? projects : projects.filter(p => p.tech.includes(selected));

  return (
    <div data-selected={selected}>
      <div className="mb-3 flex items-center justify-between">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelected(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${selected === cat ? 'bg-cyan-400 text-slate-900' : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.06]'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="text-sm text-slate-400">Showing <span className="font-semibold text-white">{filtered.length}</span> projects — <span className="font-medium text-white">{selected}</span></div>
      </div>

      <motion.div key={selected} variants={stagger} initial="hidden" animate="visible" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.div key={project.title} variants={fadeUp}>
            <Card className="group h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.05] shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.26),transparent_32%)]" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Project {String(index + 1).padStart(2, '0')}</p>
                  <p className="mt-1 text-lg font-bold text-white">{project.title}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-300">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <Badge key={item}>{item}</Badge>)}</div>
                <Button asChild variant="ghost" className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-2 text-cyan-200 hover:bg-transparent hover:text-cyan-100">
                  <a href={project.url} target="_blank" rel="noreferrer">Visit Website <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
