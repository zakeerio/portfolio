import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, stagger } from "../../lib/animations";
import { PlatformBadge } from "../common/PlatformBadge";

export function TestimonialsSlider({ testimonials }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(id);
  }, [testimonials.length]);

  const prev = () => setActive((current) => (current - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((current) => (current + 1) % testimonials.length);
  const testimonial = testimonials[active];

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
      <div className="flex min-h-[320px] flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl">
        <motion.div variants={fadeUp} className="flex h-full flex-col justify-between gap-6">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-white/[0.03] flex items-center justify-center text-lg font-bold text-slate-200">{String(testimonial.rating.toFixed(0))}</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <PlatformBadge platform={testimonial.platform} />
                  <div className="mt-2 text-lg font-semibold text-white">{testimonial.project}</div>
                </div>
                <div className="text-sm text-slate-400">{testimonial.date}</div>
              </div>
              <div className="mt-3 mb-4 text-yellow-300">{Array.from({ length: Math.round(testimonial.rating) }).map((_, index) => <Star key={index} className="inline-block h-4 w-4" />)}</div>
              <p className="min-h-[96px] text-lg text-slate-300">“{testimonial.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{testimonial.tags && testimonial.tags.join(" • ")}</div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous" className="rounded-full bg-white/[0.04] px-3 py-2 hover:bg-white/[0.06]">‹</button>
            <button onClick={next} aria-label="Next" className="rounded-full bg-white/[0.04] px-3 py-2 hover:bg-white/[0.06]">›</button>
          </div>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setActive(index)} className={`h-2 w-8 rounded-full ${index === active ? "bg-cyan-400" : "bg-white/[0.06]"}`} aria-label={`Go to review ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
