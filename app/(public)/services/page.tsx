import { Button } from "@/components/ui/button";
import Link from "next/link";
import { servicesPageContent } from "@/constants";
import { PageHeader } from "@/components/common";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <PageHeader
        title={servicesPageContent.hero.title}
        description={servicesPageContent.hero.description}
      />

      {/* Services Grid */}
      <section className="py-16 md:pb-24 md:pt-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesPageContent.services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-lg border hover:shadow-lg transition bg-card"
                >
                  <Icon className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-bold text-secondary mb-4">
                    Starting {service.starting}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-primary">
            {servicesPageContent.addOns.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPageContent.addOns.services.map((addon, idx) => (
              <div
                key={idx}
                className="p-6 hover:shadow-lg transition bg-card rounded-lg border"
              >
                <h3 className="font-semibold mb-2">{addon.title}</h3>
                <p className="text-secondary font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-primary-foreground">
            {servicesPageContent.cta.title}
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href={servicesPageContent.cta.buttonHref}>
              {servicesPageContent.cta.buttonText}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
