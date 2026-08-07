import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Property } from "@/lib/properties";

export function PropertyCard({ p, index = 0 }: { p: Property; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="ser-card group relative overflow-hidden bg-charcoal border border-white/5"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.name} — ${p.configuration} in ${p.micromarket}, Mumbai`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-base/95 via-base/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="absolute top-5 left-5 flex gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase bg-base/70 backdrop-blur-sm border border-gold/30 text-gold px-3 py-1.5">
          {p.intent}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-on-dark-muted">
          <MapPin size={12} className="text-gold" aria-hidden="true" />
          {p.micromarket}
        </div>
        <h3 className="mt-2 font-serif text-2xl md:text-[26px] text-on-dark leading-tight">
          {p.name}
        </h3>
        <p className="mt-1 text-[13px] text-gold tracking-wide">{p.configuration}</p>
        <p className="mt-3 text-[13px] leading-relaxed text-on-dark-muted">{p.highlight}</p>

        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
        >
          Enquire
          <ArrowUpRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
