import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/common";

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <PageHeader
        title="Transparent Pricing"
        description="No hidden costs, no surprises. Choose the plan that fits your needs. All plans include free support."
      />

      {/* Pricing Plans */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                name: "BASIC",
                price: "₹15,000",
                features: [
                  "5-7 pages",
                  "Mobile responsive",
                  "Contact form",
                  "WhatsApp integration",
                  "Google Maps",
                  "SSL certificate",
                  "Fast loading (<3s)",
                  "Source code access",
                  "Full website ownership",
                  "3 months support",
                  "Free 3 revisions",
                  "30min training session",
                ],
              },
              {
                name: "STANDARD",
                price: "₹25,000",
                popular: true,
                features: [
                  "10-15 pages",
                  "Admin panel",
                  "SEO optimization",
                  "Email setup",
                  "Portfolio gallery",
                  "Social integration",
                  "Google Analytics",
                  "Search Console setup",
                  "Domain setup help",
                  "6 months support",
                  "Free 3 revisions",
                  "30min training session",
                ],
              },
              {
                name: "PREMIUM",
                price: "Starting ₹40,000",
                features: [
                  "E-commerce ready",
                  "Payment gateway",
                  "Customer database",
                  "Advanced SEO",
                  "Analytics dashboard",
                  "Custom features",
                  "Performance optimization",
                  "Monthly reports",
                  "Priority support",
                  "1 year support",
                  "Unlimited revisions (6mo)",
                  "1 hour training session",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 border hover:shadow-lg transition bg-card ${
                  plan.popular
                    ? "border-secondary shadow-xl scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-secondary shrink-0" />
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
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="bg-primary/5 p-8 rounded-lg mb-16">
            <h2 className="heading-lg text-primary mb-8">
              Not Included Add-ons (Available)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Logo Design", price: "₹3,000 - ₹8,000" },
                { name: "Content Writing", price: "₹500/page" },
                { name: "Professional Photography", price: "₹5,000 - ₹15,000" },
                { name: "Ongoing Maintenance", price: "₹500 - ₹2,000/month" },
                { name: "Digital Marketing", price: "₹5,000+/month" },
                { name: "Website Redesign", price: "Custom quote" },
              ].map((addon, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 hover:shadow-lg transition bg-card rounded border"
                >
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-secondary font-bold text-sm">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white p-8 rounded-lg border mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Flexible Payment Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">
                  Payment Methods We Accept
                </h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ UPI (PhonePe, Google Pay, Paytm)</li>
                  <li>✓ Bank Transfer (NEFT/IMPS)</li>
                  <li>✓ Cash (for local clients)</li>
                  <li>✓ Cheque</li>
                  <li>✓ Card Payments</li>
                  <li>✓ EMI options available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">
                  Payment Schedule
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Standard (30-40-30)</p>
                    <p className="text-sm text-foreground/70">
                      30% advance, 40% mid-project, 30% on launch
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Full Upfront</p>
                    <p className="text-sm text-foreground/70">
                      Get 5% discount on total cost
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">GST Invoice</p>
                    <p className="text-sm text-foreground/70">
                      Provided for all transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-primary/5 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Serving Punjab
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="font-bold text-lg text-primary mb-2">
                  Primary Service Area
                </p>
                <p className="text-foreground/70">
                  Amritsar - Personal meetings & on-site support
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-primary mb-2">
                  Extended Service Area
                </p>
                <p className="text-foreground/70">
                  Jalandhar, Ludhiana, Chandigarh, Rest of Punjab
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-primary mb-2">
                  Communication
                </p>
                <p className="text-foreground/70">
                  English, Hindi, Punjabi - Specify preferred language
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white p-8 rounded-lg border">
            <h2 className="heading-lg text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                {
                  q: "How long does it take to build a website?",
                  a: "Typically 2-3 weeks from contract signing to launch. Basic packages: 2 weeks. Standard: 2-3 weeks. Premium: 3-4 weeks. Timeline depends on content availability and revision rounds.",
                },
                {
                  q: "Do I need to provide content and images?",
                  a: "Yes, you should provide business description, service details, team photos, and product images. We can help structure it. Professional content writing available as add-on (₹500/page).",
                },
                {
                  q: "Will my website work on mobile phones?",
                  a: "Every website we build is 100% mobile-responsive. It will work perfectly on phones, tablets, and desktops. We test on all major devices.",
                },
                {
                  q: "Can I update the website myself?",
                  a: "Yes! Standard and Premium packages include admin panel for easy updates. We provide 30-minute training session. Basic package requires developer updates (free during support period).",
                },
                {
                  q: "What if I need changes after launch?",
                  a: "Free support included (3-6-12 months depending on package) covers bug fixes and minor tweaks. Major changes quoted separately. Typical revision: ₹500-₹2,000.",
                },
                {
                  q: "Do you provide hosting and domain?",
                  a: "We assist with domain purchase (₹500-₹800/year) and recommend hosting (₹200-₹500/month). We handle complete setup. Or we can host for you at ₹3,000-₹5,000/year all-inclusive.",
                },
                {
                  q: "Will my website appear on Google?",
                  a: "Yes! We submit to Google Search Console and implement basic SEO (meta tags, proper structure, sitemap). Ranking depends on competition and content. Advanced SEO available as add-on (₹5,000-₹15,000/month).",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "UPI, bank transfer, cash (local), cheque, and cards. Payment split: 30% advance, 40% on design approval, 30% on launch. EMI available for Premium packages.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-6 hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-primary mb-3">{item.q}</h4>
                  <p className="text-foreground/70 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-primary-foreground">
            Still have questions?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get in touch with us for a free consultation. Same-day response
            guaranteed!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
