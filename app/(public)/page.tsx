import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  pricingPlans,
  process,
  reasons,
  services,
  testimonials,
  heroSection,
  sectionTitles,
  pricingSection,
  ctaSection,
} from "@/constants";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32 bg-linear-to-b from-primary/5 to-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-balance mb-6 text-primary">
                {heroSection.title}
              </h1>
              <p className="text-lg text-foreground/80 mb-8 text-balance">
                {heroSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href={heroSection.buttons.primary.href}>
                    {heroSection.buttons.primary.text}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary bg-transparent"
                >
                  <Link href={heroSection.buttons.secondary.href}>
                    {heroSection.buttons.secondary.text}
                  </Link>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4 text-sm">
                {heroSection.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="font-bold text-primary">{stat.value}</p>
                    <p className="text-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-lg h-96 flex items-center justify-center">
                <Image
                  src={heroSection.image.src}
                  alt={heroSection.image.alt}
                  className="rounded-lg"
                  width={600}
                  height={284}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            {sectionTitles.services}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg border hover:shadow-lg transition bg-card"
                >
                  <Icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            {sectionTitles.whyChooseUs}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border hover:shadow-lg transition bg-card"
              >
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            {sectionTitles.pricing}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 border hover:shadow-lg bg-card transition ${
                  plan.popular
                    ? "border-secondary shadow-xl scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {pricingSection.labels.mostPopular}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <p className="text-sm text-foreground/70 mb-6">
                  {pricingSection.labels.perfectFor} {plan.perfect}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-secondary hover:bg-secondary/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  <Link href="/contact">
                    {pricingSection.labels.getStarted}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-primary/5 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              {pricingSection.paymentOptions.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">
                  {pricingSection.paymentOptions.methods.title}
                </h4>
                <p className="text-sm text-foreground/70">
                  {pricingSection.paymentOptions.methods.description}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">
                  {pricingSection.paymentOptions.schedule.title}
                </h4>
                <p className="text-sm text-foreground/70">
                  {pricingSection.paymentOptions.schedule.description}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">
                  {pricingSection.paymentOptions.offer.title}
                </h4>
                <p className="text-sm text-foreground/70">
                  {pricingSection.paymentOptions.offer.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            {sectionTitles.process}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {process.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block flex-1 h-1 bg-border"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            {sectionTitles.testimonials}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-semibold text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/70">
                  {testimonial.business}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-primary-foreground">
            {ctaSection.title}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {ctaSection.description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href={ctaSection.buttonHref}>
              {ctaSection.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
