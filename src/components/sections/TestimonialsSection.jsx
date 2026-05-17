import { motion } from "framer-motion";
import { testimonials } from "../../data/portfolio";
import { fadeUp } from "../../lib/animations";
import { PlatformBadge } from "../common/PlatformBadge";
import { SectionHeader } from "../common/SectionHeader";
import { Card, CardContent } from "../ui/card";
import { TestimonialsSlider } from "../testimonials/TestimonialsSlider";

function getFeaturedTestimonial(items) {
  return items.slice().sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;

    const numA = parseFloat(String(a.amount || "").replace(/[^0-9.]/g, "")) || 0;
    const numB = parseFloat(String(b.amount || "").replace(/[^0-9.]/g, "")) || 0;

    return numB - numA;
  })[0];
}

export function TestimonialsSection() {
  const top = getFeaturedTestimonial(testimonials);

  return (
    <section className="relative z-10 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by clients who value quality and delivery."
          description="Verified client feedback from freelance platforms including Upwork and Fiverr."
        />
        <div className="mx-auto max-w-5xl">
          <motion.div variants={fadeUp} className="mb-8">
            <Card className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-sm text-cyan-300 font-semibold">Featured review</div>
                      <PlatformBadge platform={top.platform} />
                    </div>
                    <div className="mt-2 text-xl font-bold text-white">{top.project}</div>
                    <div className="mt-2 text-sm text-slate-400">{top.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-3 py-1 text-sm font-semibold text-slate-200">{top.rating.toFixed(1)} ★</div>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-300">“{top.quote}”</p>
                <div className="mt-6 text-sm text-slate-400">{top.tags && top.tags.join(" • ")}</div>
              </CardContent>
            </Card>
          </motion.div>

          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
