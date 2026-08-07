import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Hero } from "@/components/site/Hero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { properties } from "@/lib/properties";
import { pageHead } from "@/lib/seo";

import heroSkyline from "@/assets/hero-skyline.jpg";
import interior from "@/assets/property-interior-1.jpg";
import worli from "@/assets/micromarket-worli.jpg";
import lowerParel from "@/assets/micromarket-lowerparel.jpg";
import prabhadevi from "@/assets/micromarket-prabhadevi.jpg";
import mahalaxmi from "@/assets/micromarket-mahalaxmi.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Sarah Elite Realtors — Luxury Homes in Lower Parel, Worli, Prabhadevi & Mahalaxmi",
      description:
        "Guiding you to the right property. Luxury residential sales and leasing across South Mumbai's most prestigious addresses.",
      path: "/",
    }),
  component: Home,
});

const marketList = [
  {
    name: "Lower Parel",
    tagline: "Mumbai's new skyline district — flagship towers, business-district access.",
    image: lowerParel,
  },
  {
    name: "Worli",
    tagline: "Sea-facing legacy addresses along the Bandra-Worli Sea Link corridor.",
    image: worli,
  },
  {
    name: "Prabhadevi",
    tagline: "Quiet luxury, sky bungalows and panoramic Arabian Sea views.",
    image: prabhadevi,
  },
  {
    name: "Mahalaxmi",
    tagline: "Old-money elegance — racecourse-facing residences and heritage streets.",
    image: mahalaxmi,
  },
];

const featured = properties.filter((p) =>
  ["world-one", "indiabulls-blu", "the-auro", "allura", "marquise", "minerva"].includes(p.id),
);

function Home() {
  return (
    <>
      <Hero
        priority
        height="full"
        image={heroSkyline}
        imageAlt="Aerial view of Mumbai skyline at sunset — Sarah Elite Realtors"
        eyebrow="Sarah Elite Realtors · Mumbai"
        title={
          <>
            Guiding You to <em className="not-italic text-gold font-normal">the Right</em> Property.
          </>
        }
        subtitle="Luxury residential sales and leasing across Mumbai's most prestigious addresses — Lower Parel, Worli, Prabhadevi and Mahalaxmi."
        primaryCta={{ label: "Schedule a Consultation", to: "/contact" }}
        secondaryCta={{ label: "View Properties", to: "/properties" }}
      />

      <section className="relative py-24 md:py-32 bg-base">
        <div className="container-ser">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.32em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center font-serif text-3xl md:text-5xl lg:text-6xl text-gold"
            role="heading"
            aria-level={2}
          >
            Trust <span className="mx-4 text-warm/30">|</span>
            Transparency <span className="mx-4 text-warm/30">|</span>
            Results
          </motion.p>
          <div className="gold-line mt-14 max-w-md mx-auto" />
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-charcoal">
        <div className="container-ser">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <SectionTitle
              eyebrow="Featured Residences"
              title={
                <>
                  A curated shortlist of
                  <br />
                  Mumbai's finest addresses.
                </>
              }
            />
            <Link
              to="/properties"
              className="text-[12px] tracking-[0.22em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold inline-flex items-center gap-2 transition-colors"
            >
              View all <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-base">
        <div className="container-ser grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1"
          >
            <img
              src={interior}
              alt="Luxury interior overlooking Mumbai skyline"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
            />
          </motion.div>
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Why Sarah Elite"
              title={<>A decade inside Mumbai's most competitive market.</>}
              intro="Founded by Sajid Khan, Sarah Elite Realtors brings ten years of first-hand experience across South Mumbai's luxury residential market — from initial site visits to signed agreements. Every engagement is handled personally: no call centres, no volume-first pitches, no shortcuts."
            />
            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                { k: "10+", v: "Years in luxury residential Mumbai" },
                { k: "4", v: "Premier micro-markets, deeply covered" },
                { k: "10+", v: "Active landmark developments" },
                { k: "1:1", v: "Every client works directly with Sajid" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-serif text-3xl md:text-4xl text-gold">{s.k}</p>
                  <p className="mt-2 text-sm text-on-dark-soft leading-relaxed">{s.v}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-[12px] tracking-[0.24em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              About Sajid <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-charcoal">
        <div className="container-ser">
          <SectionTitle
            align="center"
            eyebrow="Micro-markets"
            title={
              <>
                Four addresses.
                <br />
                Four distinct South Mumbai stories.
              </>
            }
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {marketList.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={m.image}
                  alt={`${m.name}, South Mumbai — luxury residential micro-market`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-serif text-2xl text-on-dark">{m.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-on-dark-muted">{m.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 bg-base overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,var(--gold)_0%,transparent_60%)] blur-3xl opacity-20" />
        </div>
        <div className="container-ser relative text-center max-w-3xl">
          <p className="eyebrow">Schedule a Consultation</p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] text-on-dark">
            Let's find your <em className="not-italic text-gold font-normal">address.</em>
          </h2>
          <p className="mt-6 text-on-dark-soft text-lg leading-relaxed">
            A discreet, one-to-one conversation about your requirement — buy, lease, or list.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold hover:btn-gold-hover group">
              Schedule a Consultation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/contact"
              className="btn-ghost-gold hover:bg-gold hover:text-[color:var(--base)]"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
