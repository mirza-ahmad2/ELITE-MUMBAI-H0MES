import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Linkedin } from "lucide-react";

import { Hero } from "@/components/site/Hero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { pageHead } from "@/lib/seo";
import { SITE } from "@/lib/site";
import contactBg from "@/assets/contact-bg.jpg";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact — Schedule a Consultation | Sarah Elite Realtors",
      description:
        "Speak directly with Sajid Khan. Buy, lease or list a luxury residence in Lower Parel, Worli, Prabhadevi or Mahalaxmi.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Hero
        image={contactBg}
        imageAlt="South Mumbai evening skyline — contact Sarah Elite Realtors"
        eyebrow="Let's Talk"
        title={
          <>
            Let's Find Your <em className="not-italic text-gold font-normal">Address.</em>
          </>
        }
        subtitle="A one-to-one conversation about your requirement — buy, lease or list."
        height="full"
        overlay="linear-gradient(180deg, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.55) 40%, rgba(13,13,13,0.95) 100%)"
      />

      <section className="py-24 md:py-32 bg-base">
        <div className="container-ser grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-on-dark max-w-lg">
              Share a few details. Sajid will reach out personally.
            </h2>
            <div className="gold-line mt-8 max-w-xs" />
            <div className="mt-12">
              <EnquiryForm />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <div className="ser-card border border-white/10 p-8 md:p-10 bg-charcoal">
              <p className="eyebrow">Direct</p>
              <h3 className="mt-4 font-serif text-2xl text-on-dark">Speak with Sajid</h3>
              <p className="mt-3 text-sm text-on-dark-soft leading-relaxed">
                Prefer a call or WhatsApp instead? Reach out directly — every enquiry is handled
                personally.
              </p>

              <ul className="mt-8 space-y-5 text-sm">
                <li>
                  <a href={`tel:${SITE.phoneTel}`} className="flex items-start gap-4 group">
                    <span className="h-10 w-10 shrink-0 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[color:var(--base)] transition-colors duration-300">
                      <Phone size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block eyebrow">Phone</span>
                      <span className="block mt-1 text-on-dark group-hover:text-gold transition-colors">
                        {SITE.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${SITE.phoneWhatsApp}`}
                    className="flex items-start gap-4 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="h-10 w-10 shrink-0 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[color:var(--base)] transition-colors duration-300">
                      <MessageCircle size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block eyebrow">WhatsApp</span>
                      <span className="block mt-1 text-on-dark group-hover:text-gold transition-colors">
                        Chat with Sajid
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <span className="h-10 w-10 shrink-0 border border-gold/40 flex items-center justify-center text-gold">
                      <Mail size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block eyebrow">Email</span>
                      <span className="block mt-1 text-on-dark">{SITE.email}</span>
                    </span>
                  </div>
                </li>
                <li>
                  <a
                    href={SITE.linkedin}
                    className="flex items-start gap-4 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="h-10 w-10 shrink-0 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[color:var(--base)] transition-colors duration-300">
                      <Linkedin size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block eyebrow">LinkedIn</span>
                      <span className="block mt-1 text-on-dark group-hover:text-gold transition-colors">
                        Sarah Elite Realtors
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <span className="h-10 w-10 shrink-0 border border-gold/40 flex items-center justify-center text-gold">
                      <MapPin size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block eyebrow">Coverage</span>
                      <span className="block mt-1 text-on-dark">
                        Lower Parel · Worli · Prabhadevi · Mahalaxmi
                      </span>
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="eyebrow">Consultation Hours</p>
                <p className="mt-3 text-sm text-on-dark-muted leading-relaxed">
                  Monday to Saturday · 10:00 – 20:00 IST
                  <br />
                  By appointment on Sundays.
                </p>
                <p className="mt-4 text-sm text-on-dark-soft">
                  Other socials: {SITE.socialPlaceholder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
