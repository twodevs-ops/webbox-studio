"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { PageHeader } from "@/components/common";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      name: "Amritsari Kulcha House",
      category: "restaurants",
      desc: "Restaurant website with online ordering",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?key=amritsa",
    },
    {
      name: "Shahi Designs Boutique",
      category: "retail",
      desc: "E-commerce boutique with product gallery",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      image: "/placeholder.svg?key=shahi",
    },
    {
      name: "Singh Dental Clinic",
      category: "healthcare",
      desc: "Medical practice with appointment booking",
      tech: ["React", "Firebase", "Tailwind"],
      image: "/placeholder.svg?key=singh",
    },
    {
      name: "Paradise Hotels",
      category: "hotels",
      desc: "Hotel booking system with management panel",
      tech: ["Next.js", "Python", "PostgreSQL"],
      image: "/placeholder.svg?key=paradise",
    },
    {
      name: "Divine Events Management",
      category: "events",
      desc: "Wedding venue showcase and booking",
      tech: ["React", "Node.js", "Stripe"],
      image: "/placeholder.svg?key=divine",
    },
    {
      name: "Learning Hub Academy",
      category: "education",
      desc: "Coaching center with course management",
      tech: ["Next.js", "MongoDB", "Node.js"],
      image: "/placeholder.svg?key=learning",
    },
    {
      name: "Wellness Spa & Salon",
      category: "retail",
      desc: "Salon services with online booking",
      tech: ["React", "Firebase", "Tailwind"],
      image: "/placeholder.svg?key=wellness",
    },
    {
      name: "Maharaja Manufacturing",
      category: "manufacturing",
      desc: "Industrial B2B website",
      tech: ["Next.js", "PostgreSQL", "Node.js"],
      image: "/placeholder.svg?key=maharaja",
    },
    {
      name: "Royal Palace Restaurant",
      category: "restaurants",
      desc: "Multi-location restaurant chain",
      tech: ["React", "Stripe", "MongoDB"],
      image: "/placeholder.svg?key=royal",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main>
      {/* Hero */}
      <PageHeader
        title="Our Recent Work"
        description="Websites that bring results for Amritsar businesses"
      />

      {/* Filter */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "all",
              "restaurants",
              "healthcare",
              "retail",
              "education",
              "hotels",
              "events",
              "manufacturing",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-border hover:bg-border/80"
                }`}
              >
                {cat.charAt(0).toUpperCase() +
                  cat.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden border hover:shadow-xl transition group"
              >
                <div className="h-40 bg-primary/10 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-6 bg-card">
                  <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded mb-3">
                    {project.category.replace(/([a-z])([A-Z])/g, "$1 $2")}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/5 text-primary px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <a href="#" target="_blank" rel="noreferrer">
                      View Live Site <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-primary-foreground">
            Ready to See Your Business Online?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
