import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

import { Hero } from "@/components/site/Hero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { properties } from "@/lib/properties";
import { pageHead } from "@/lib/seo";

import heroImg from "@/assets/property-interior-1.jpg";

export const Route = createFileRoute("/properties")({
  head: () =>
    pageHead({
      title:
        "Properties — Luxury Apartments for Sale & Lease in South Mumbai | Sarah Elite Realtors",
      description:
        "Featured 2, 3 and 4 BHK luxury residences for sale and lease across Lower Parel, Worli, Prabhadevi and Mahalaxmi.",
      path: "/properties",
    }),
  component: Properties,
});

const markets = ["All", "Lower Parel", "Worli", "Prabhadevi", "Mahalaxmi"] as const;
const configs = ["All", "2 BHK", "3 BHK", "4 BHK"] as const;

function Properties() {
  const [market, setMarket] = useState<(typeof markets)[number]>("All");
  const [config, setConfig] = useState<(typeof configs)[number]>("All");

  const list = properties.filter((p) => {
    const mOk = market === "All" || p.micromarket === market;
    const cOk = config === "All" || p.configuration.includes(config.replace(" BHK", ""));
    return mOk && cOk;
  });

  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Luxury apartment interior in South Mumbai"
        eyebrow="Curated Portfolio"
        title="Featured Residences."
        subtitle="A discreet selection of premium 2, 3 and 4 BHK homes across South Mumbai's most prestigious micro-markets."
        primaryCta={{ label: "Schedule a Consultation", to: "/contact" }}
        height="full"
      />

      <section className="py-20 md:py-28 bg-base">
        <div className="container-ser">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
            <SectionTitle
              eyebrow="Portfolio"
              title={
                <>
                  Buy or lease across
                  <br />
                  South Mumbai.
                </>
              }
              intro="Every listing below is personally vetted. Configuration, furnishing status, amenities and parking are confirmed before we share the address."
            />
            <div className="flex flex-wrap gap-3" role="group" aria-label="Property filters">
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter by micro-market"
              >
                {markets.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMarket(m)}
                    aria-pressed={market === m}
                    className={`text-[11px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                      market === m
                        ? "bg-gold text-[color:var(--base)] border-gold"
                        : "border-white/15 text-on-dark-muted hover:border-gold hover:text-gold"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter by configuration"
              >
                {configs.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setConfig(c)}
                    aria-pressed={config === c}
                    className={`text-[11px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                      config === c
                        ? "bg-gold text-[color:var(--base)] border-gold"
                        : "border-white/15 text-on-dark-muted hover:border-gold hover:text-gold"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <PropertyCard key={p.id} p={p} index={i} />
            ))}
          </motion.div>

          {list.length === 0 && (
            <p className="text-center text-on-dark-soft py-20">
              No listings match. Please adjust filters or contact us.
            </p>
          )}
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="container-ser text-center max-w-2xl">
          <p className="eyebrow">Own a Home in South Mumbai?</p>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl text-on-dark">
            List with a consultant who{" "}
            <em className="not-italic text-gold font-normal">knows your market.</em>
          </h2>
          <div className="mt-10">
            <Link to="/contact" className="btn-gold hover:btn-gold-hover">
              List Your Property
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
