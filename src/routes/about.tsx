import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Trophy, Lock, ImageIcon } from "lucide-react";

import { Hero } from "@/components/site/Hero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { pageHead } from "@/lib/seo";

import heroSkyline from "@/assets/hero-skyline.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Sajid Khan — Founder, Sarah Elite Realtors",
      description:
        "Sajid Khan brings 10+ years navigating Mumbai's luxury property market, spanning client-facing sales and back-office documentation.",
      path: "/about",
    }),
  component: About,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "Every recommendation is grounded in transactions we've closed, not marketing collateral.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "Clear pricing benchmarks, honest timelines and full visibility on documentation from day one.",
  },
  {
    icon: Trophy,
    title: "Results",
    body: "A quiet track record across Lower Parel, Worli, Prabhadevi and Mahalaxmi — measured in signed agreements.",
  },
  {
    icon: Lock,
    title: "Discretion",
    body: "Client identity, requirements and negotiations are protected. Nothing is broadcast, ever.",
  },
];

function About() {
  return (
    <>
      <Hero
        image={heroSkyline}
        imageAlt="Mumbai skyline — About Sarah Elite Realtors founder Sajid Khan"
        eyebrow="Founder"
        title="Sajid Khan."
        subtitle="Ten years inside Mumbai's most competitive residential market — front-office and back-office."
        primaryCta={{ label: "Schedule a Consultation", to: "/contact" }}
        height="full"
        overlay="linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.4) 40%, rgba(13,13,13,0.95) 100%)"
      />

      <section className="py-24 md:py-32 bg-base">
        <div className="container-ser grid gap-16 lg:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-charcoal flex flex-col items-center justify-center"
              role="img"
              aria-label="Founder portrait placeholder"
            >
              <div className="flex flex-col items-center gap-4 text-gold/70">
                <div className="h-24 w-24 border border-gold/30 flex items-center justify-center rounded-full">
                  <ImageIcon size={40} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <p className="eyebrow">Portrait Coming Soon</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-base to-transparent">
                <p className="eyebrow">Founder</p>
                <p className="mt-1 font-serif text-2xl text-on-dark">Sajid Khan</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-10">
            <SectionTitle
              eyebrow="The Story"
              title={<>A trust-first consultancy, built inside Mumbai's toughest market.</>}
            />
            <div className="space-y-6 text-on-dark-muted leading-relaxed text-base md:text-lg">
              <p>
                Sajid founded Sarah Elite Realtors after a decade navigating Mumbai's premium
                residential market from every angle — walking clients through site visits at World
                One and Indiabulls BLU, and personally closing agreements across Rustomjee Crown,
                Lodha Bellissimo and Prestige Jasdan Classic.
              </p>
              <p>
                What sets his practice apart is the rare combination of front-office and back-office
                fluency. Most Mumbai brokers do one or the other. Sajid does both: he can advise on
                the right 3 BHK sea-facing floor in Worli, and personally coordinate the agreement,
                stamp duty, society NOC and possession letter — without handing you off.
              </p>
              <p>
                The result is a consultancy that behaves like a private office. Small caseload.
                Personal mobile. Direct access. Every client, from corporate expatriates to Mumbai
                business families, gets the same discipline:{" "}
                <span className="text-gold">Trust, Transparency, Results.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {[
                { k: "10+", v: "Years in Mumbai luxury residential" },
                { k: "4", v: "Priority micro-markets" },
                { k: "10+", v: "Landmark developments covered" },
                { k: "100%", v: "Deals personally handled by Sajid" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-serif text-3xl md:text-4xl text-gold">{s.k}</p>
                  <p className="mt-2 text-sm text-on-dark-soft leading-relaxed">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container-ser">
          <SectionTitle
            align="center"
            eyebrow="Values"
            title="Four commitments, every engagement."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="ser-card group relative border border-white/10 p-8 bg-base/60"
                >
                  <div className="h-12 w-12 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[color:var(--base)] transition-colors duration-300">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-on-dark">{v.title}</h3>
                  <p className="mt-3 text-sm text-on-dark-soft leading-relaxed">{v.body}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-gold hover:btn-gold-hover">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
