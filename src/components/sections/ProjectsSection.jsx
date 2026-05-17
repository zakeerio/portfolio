import { projects } from "../../data/portfolio";
import { ProjectGallery } from "../projects/ProjectGallery";
import { SectionHeader } from "../common/SectionHeader";

export function ProjectsSection() {
  return (
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
  );
}
