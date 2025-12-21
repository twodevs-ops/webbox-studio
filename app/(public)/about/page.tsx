import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  teamMembers,
  aboutPageContent,
  technologies,
  techSectionTitle,
  comparisons,
} from "@/constants";
import { PageHeader } from "@/components/common";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <PageHeader
        title={aboutPageContent.hero.title}
        description={aboutPageContent.hero.description}
      />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="heading-lg text-primary mb-6">
                {aboutPageContent.story.title}
              </h2>
              {aboutPageContent.story.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-foreground/80 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center">
              <Image
                src="/placeholder.svg?key=team-story"
                alt="Our story"
                className="rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Partnership Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {aboutPageContent.partnership.title}
              </h3>
              <p className="text-foreground/80 mb-4">
                {aboutPageContent.partnership.description}
              </p>
              <p className="text-foreground/80">
                {aboutPageContent.partnership.details}
              </p>
            </div>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {aboutPageContent.whyTwo.title}
              </h3>
              <ul className="space-y-3 text-foreground/80">
                {aboutPageContent.whyTwo.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {aboutPageContent.mission.title}
              </h3>
              <p className="text-foreground/80">
                {aboutPageContent.mission.description}
              </p>
            </div>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {aboutPageContent.vision.title}
              </h3>
              <p className="text-foreground/80">
                {aboutPageContent.vision.description}
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-lg border text-center hover:shadow-lg transition bg-card"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="font-medium text-foreground/80 mb-2">
                    {member.role}
                  </p>
                  <p className="text-secondary font-semibold mb-6">
                    {member.experience} professional experience
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Enhanced */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-12 text-center">
            {techSectionTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-lg bg-white border hover:shadow-lg transition"
              >
                <p className="font-bold text-primary text-sm mb-1">
                  {tech.name}
                </p>
                <p className="text-xs text-foreground/60">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-12 text-center">
            {comparisons.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="font-bold text-lg text-primary mb-4">
                {comparisons.vsFreelancers.title}
              </h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                {comparisons.vsFreelancers.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-secondary">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="font-bold text-lg text-primary mb-4">
                {comparisons.vsAgencies.title}
              </h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                {comparisons.vsAgencies.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-secondary">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-primary-foreground">
            {aboutPageContent.cta.title}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {aboutPageContent.cta.description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href="/contact">{aboutPageContent.cta.buttonText}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
