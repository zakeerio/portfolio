import { motion } from "framer-motion";
import { techGroups } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/animations";
import { Badge } from "../common/Badge";
import { SectionHeader } from "../common/SectionHeader";
import { Card, CardContent } from "../ui/card";

export function TechStackSection() {
  return (
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
  );
}
