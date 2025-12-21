"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Calendar, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/common";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setMessage({
        type: "success",
        text: "Thanks for subscribing! Check your email.",
      });
      setEmail("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to subscribe. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const articles = [
    {
      title: "Why Every Restaurant Needs a Website in 2025",
      excerpt:
        "Learn how a professional website can transform your restaurant business and attract more customers online.",
      author: "CodeKraft Team",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      category: "Business",
      slug: "restaurant-website-2025",
    },
    {
      title: "How to Choose the Right Web Developer in Amritsar",
      excerpt:
        "A comprehensive guide to finding the perfect web development partner for your business needs.",
      author: "Amandeep Kochhar",
      date: "Nov 10, 2024",
      readTime: "7 min read",
      category: "Guide",
      slug: "choose-web-developer",
    },
    {
      title: "Website vs Social Media: What's Better for Your Business?",
      excerpt:
        "Discover why having both a website and social media presence is crucial for business growth.",
      author: "CodeKraft Team",
      date: "Nov 5, 2024",
      readTime: "6 min read",
      category: "Strategy",
      slug: "website-vs-social-media",
    },
    {
      title: "5 Signs Your Business Needs a Website Redesign",
      excerpt:
        "Is your website outdated? Here are the key indicators that it's time for a professional redesign.",
      author: "CodeKraft Team",
      date: "Oct 28, 2024",
      readTime: "4 min read",
      category: "Business",
      slug: "website-redesign-signs",
    },
    {
      title: "Local SEO Tips for Amritsar Businesses",
      excerpt:
        "Master local search optimization and get found by customers in Amritsar searching for your services.",
      author: "Amandeep Kochhar",
      date: "Oct 20, 2024",
      readTime: "8 min read",
      category: "SEO",
      slug: "local-seo-amritsar",
    },
    {
      title: "E-commerce Success: Getting Started with Online Sales",
      excerpt:
        "A beginner's guide to launching your online store and starting to sell products on the web.",
      author: "CodeKraft Team",
      date: "Oct 15, 2024",
      readTime: "7 min read",
      category: "E-commerce",
      slug: "ecommerce-getting-started",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <PageHeader
        title="Blog & Resources"
        description="Tips, guides, and insights for growing your business online"
      />

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <article
                key={idx}
                className="rounded-lg border overflow-hidden hover:shadow-lg transition bg-card flex flex-col"
              >
                <div className="h-40 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?key=blog-featured"
                    alt={article.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-foreground/60 mb-4">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Link href={`/blog/${article.slug}`}>
                      Read Article <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="heading-lg text-primary mb-4">Stay Updated</h2>
            <p className="text-foreground/80">
              Get tips and insights delivered to your inbox
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="flex-1 bg-white"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-secondary hover:bg-secondary/90"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            {message && (
              <div
                className={`p-3 rounded-lg flex items-start gap-2 ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <span className="text-sm">{message.text}</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
