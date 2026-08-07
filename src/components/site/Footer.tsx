import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-base border-t border-white/5 mt-24">
      <div className="container-ser py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <Logo size="md" />
          <p className="mt-6 text-sm leading-relaxed text-on-dark-soft">
            Luxury residential sales and leasing across Mumbai's most prestigious addresses — Lower
            Parel, Worli, Prabhadevi and Mahalaxmi.
          </p>
          <p className="mt-6 eyebrow">Trust · Transparency · Results</p>
        </div>

        <div>
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="ser-link text-sm text-on-dark-muted hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Direct</p>
          <ul className="space-y-3 text-sm text-on-dark-muted">
            <li>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
                aria-label={`Call ${SITE.phoneDisplay}`}
              >
                <Phone size={14} aria-hidden="true" /> {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SITE.phoneWhatsApp}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Sarah Elite Realtors"
              >
                <MessageCircle size={14} aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} aria-hidden="true" />
              {SITE.email === "Add here" ? (
                <span>{SITE.email}</span>
              ) : (
                <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors">
                  {SITE.email}
                </a>
              )}
            </li>
            <li>
              <a
                href={SITE.linkedin}
                className="flex items-center gap-2 hover:text-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarah Elite Realtors on LinkedIn"
              >
                <Linkedin size={14} aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 text-on-dark-soft">
              Social: {SITE.socialPlaceholder}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-ser py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-on-dark-soft">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-4 transition-colors"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
