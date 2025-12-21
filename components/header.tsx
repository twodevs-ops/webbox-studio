"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { navItems, headerContent, contactInfo } from "@/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container-custom flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-40 h-40 flex items-center justify-center">
              <Image
                src={headerContent.logo.src}
                alt={headerContent.logo.alt}
                className="rounded-lg"
                width={headerContent.logo.width}
                height={headerContent.logo.height}
                objectFit="cover"
                draggable={false}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium hover:bg-accent/10 rounded-md transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${contactInfo.whatsapp.displayNumber}`}
              className="inline-flex items-center gap-1 text-sm hover:text-primary transition"
            >
              <Phone className="w-4 h-4" />
              <span>{headerContent.cta.call.text}</span>
            </a>
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href={headerContent.cta.quote.href}>
                {headerContent.cta.quote.text}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-accent/10 rounded-md transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden border-t bg-background p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 hover:bg-accent/10 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild className="w-full bg-secondary">
                <Link href={headerContent.cta.quote.href}>
                  {headerContent.cta.quote.text}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* Floating Buttons - Enhanced for mobile focus on WhatsApp */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <a
          href={contactInfo.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 font-bold text-xs"
          title={headerContent.floatingButtons.whatsapp.title}
        >
          <div className="text-center">
            <MessageCircle className="w-6 h-6 mx-auto mb-1" />
            <span>{headerContent.floatingButtons.whatsapp.text}</span>
          </div>
        </a>
        <a
          href={`tel:${contactInfo.whatsapp.displayNumber}`}
          className="md:hidden w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110"
          title={headerContent.floatingButtons.phone.title}
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default Header;
