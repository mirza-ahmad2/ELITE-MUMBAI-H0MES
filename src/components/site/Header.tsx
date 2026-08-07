import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-base/90 backdrop-blur-md border-b border-white/5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-ser flex items-center justify-between py-3 md:py-4">
        <Logo size="sm" />

        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="ser-link text-[12px] tracking-[0.22em] uppercase text-on-dark-muted hover:text-gold"
              activeProps={{ className: "!text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="ser-link text-[12px] tracking-[0.2em] uppercase text-on-dark-muted hover:text-gold flex items-center gap-2"
            aria-label={`Call ${SITE.phoneDisplay}`}
          >
            <Phone size={14} aria-hidden="true" /> {SITE.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-on-dark p-2 rounded-sm transition-colors hover:text-gold"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden border-t border-white/5 bg-base transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="container-ser py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.22em] uppercase text-on-dark-muted hover:text-gold transition-colors py-1"
              activeProps={{ className: "!text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="text-sm text-gold mt-2 flex items-center gap-2 py-1"
            aria-label={`Call ${SITE.phoneDisplay}`}
          >
            <Phone size={14} aria-hidden="true" /> {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
