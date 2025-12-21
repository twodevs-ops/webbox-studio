/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { contactPageContent, contactInfo, contactFAQ } from "@/constants";
import { PageHeader } from "@/components/common";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    type: "general",
    service: "website",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = contactPageContent.form.validation.nameRequired;
    }
    if (!formData.phone.trim()) {
      errors.phone = contactPageContent.form.validation.phoneRequired;
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      errors.phone = contactPageContent.form.validation.phoneInvalid;
    }
    if (!formData.email.trim()) {
      errors.email = contactPageContent.form.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = contactPageContent.form.validation.emailInvalid;
    }
    if (!formData.message.trim()) {
      errors.message = contactPageContent.form.validation.messageRequired;
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({
        name: "",
        phone: "",
        email: "",
        business: "",
        type: "general",
        service: "website",
        message: "",
      });
    } catch (err) {
      setError(contactPageContent.form.messages.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <PageHeader
        title={contactPageContent.hero.title}
        description={contactPageContent.hero.description}
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <Phone className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  {contactPageContent.contactCards.phone.title}
                </h3>
                <a
                  href={`tel:${contactInfo.phone.link}`}
                  className="text-primary hover:underline"
                >
                  {contactInfo.phone.display}
                </a>
              </div>

              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <Mail className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  {contactPageContent.contactCards.email.title}
                </h3>
                <a
                  href={`mailto:${contactInfo.email.hello}`}
                  className="text-primary hover:underline"
                >
                  {contactInfo.email.hello}
                </a>
              </div>

              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <MapPin className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  {contactPageContent.contactCards.location.title}
                </h3>
                <p className="text-foreground/70">
                  {contactInfo.location.full}
                </p>
              </div>

              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <Clock className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  {contactPageContent.contactCards.hours.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {contactInfo.officeHours.weekdays}
                  <br />
                  {contactInfo.officeHours.weekend}
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={contactInfo.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full justify-center font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  {contactPageContent.cta.whatsapp}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {contactPageContent.form.title}
                </h2>
                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{contactPageContent.form.messages.success}</span>
                  </div>
                )}
                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder={contactPageContent.form.placeholders.name}
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.name}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-600 text-sm mt-1">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder={contactPageContent.form.placeholders.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.phone}
                      />
                      {fieldErrors.phone && (
                        <p className="text-red-600 text-sm mt-1">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder={contactPageContent.form.placeholders.email}
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.email}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-600 text-sm mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                    <Input
                      type="text"
                      name="business"
                      placeholder={
                        contactPageContent.form.placeholders.business
                      }
                      value={formData.business}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {contactPageContent.form.types.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {contactPageContent.form.services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder={contactPageContent.form.placeholders.message}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      aria-invalid={!!fieldErrors.message}
                    />
                    {fieldErrors.message && (
                      <p className="text-red-600 text-sm mt-1">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    {loading
                      ? contactPageContent.form.submitButton.loading
                      : contactPageContent.form.submitButton.default}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 rounded-lg border overflow-hidden bg-primary/5">
            <iframe
              width="100%"
              height="100%"
              title="Amritsar, Punjab"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.3656206644344!2d74.87919!3d31.633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919038e66666667%3A0x1234567890abc!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-12 text-center">
            Quick Questions?
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {contactFAQ.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 hover:shadow-lg transition bg-card rounded-lg border"
                >
                  <p className="font-semibold text-primary mb-2">
                    {item.question}
                  </p>
                  <p className="text-foreground/70 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
