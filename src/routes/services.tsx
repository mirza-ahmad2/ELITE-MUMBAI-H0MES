import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, KeyRound, MessagesSquare, FileCheck2, ArrowUpRight } from "lucide-react";

import { Hero } from "@/components/site/Hero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { pageHead } from "@/lib/seo";

import heroImg from "@/assets/services-handshake.jpg";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services — Luxury Sales, Leasing & Advisory in Mumbai | Sarah Elite Realtors",
      description:
        "Residential sales, premium leasing, client advisory and end-to-end documentation for South Mumbai's luxury property market.",
      path: "/services",
    }),
  component: Services,
});

const pillars = [
  {
    icon: Home,
    eyebrow: "01",
    title: "Luxury Residential Sales",
    body: "Sourcing and closing premium residences across South Mumbai's landmark towers — from resale sky-homes to select new-launch inventory.",
    points: [
      "Off-market and pre-launch access",
      "Site visits arranged discreetly",
      "Price benchmarking across comparable towers",
    ],
  },
  {
    icon: KeyRound,
    eyebrow: "02",
    title: "Premium Leasing",
    body: "Fully furnished and semi-furnished lease options for corporate clients, HNI families and expatriates relocating to Mumbai.",
    points: [
      "Curated shortlist within 72 hours",
      "Corporate lease structuring",
      "Property handover and inventory checks",
    ],
  },
  {
    icon: MessagesSquare,
    eyebrow: "03",
    title: "Client Advisory & Negotiation",
    body: "Positioning, pricing and negotiation guided by ten years of first-hand deal data across Lower Parel, Worli, Prabhadevi and Mahalaxmi.",
    points: [
      "Buyer / seller side representation",
      "Rent and price negotiation strategy",
      "Timeline and market-cycle guidance",
    ],
  },
  {
    icon: FileCheck2,
    eyebrow: "04",
    title: "Documentation & Deal Closure",
    body: "In-house back-office expertise — agreements, MIS, coordination with legal and society — so nothing slips between offer and possession.",
    points: [
      "Agreement drafting and review coordination",
      "Registration, stamp duty and society NOCs",
      "Handover, move-in and post-closure support",
    ],
  },
];

function Services() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Professional consultation handshake — Sarah Elite Realtors services"
        eyebrow="Our Services"
        title="A consultancy, not a listing service."
        subtitle="Four disciplines, delivered personally — from first site visit to signed agreement."
        primaryCta={{ label: "Schedule a Consultation", to: "/contact" }}
        height="full"
      />

      <section className="py-24 md:py-32 bg-base">
        <div className="container-ser">
          <SectionTitle
            align="center"
            eyebrow="Capabilities"
            title={
              <>
                Front-office and back-office —
                <br />
                handled by one team.
              </>
            }
          />

          <div className="mt-20 space-y-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.06 }}
                  className="group border-t border-white/10 py-12 md:py-16 grid gap-8 md:grid-cols-12 items-start"
                >
                  <div className="md:col-span-1 flex md:justify-start">
                    <span className="eyebrow">{p.eyebrow}</span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[color:var(--base)] transition-colors duration-300">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-on-dark leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-on-dark-soft leading-relaxed">{p.body}</p>
                  </div>
                  <ul className="md:col-span-3 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm text-on-dark-muted flex gap-3">
                        <span className="text-gold" aria-hidden="true">
                          —
                        </span>{" "}
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
            <div className="border-t border-white/10" />
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-gold hover:btn-gold-hover group inline-flex">
              Schedule a Consultation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
