import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  height?: "full" | "tall" | "short";
  overlay?: string;
  priority?: boolean;
  imageAlt?: string;
};

export function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  height = "tall",
  overlay = "linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.35) 40%, rgba(13,13,13,0.9) 100%)",
  priority,
  imageAlt = "Sarah Elite Realtors — luxury residential Mumbai",
}: Props) {
  const h =
    height === "full"
      ? "min-h-[100svh] h-[100svh]"
      : height === "tall"
        ? "min-h-[86svh]"
        : "min-h-[62svh]";

  return (
    <section
      className={`relative ${h} w-full overflow-hidden flex items-center justify-center`}
      aria-label="Page hero"
    >
      <img
        src={image}
        alt={imageAlt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[ser-kenburns_18s_ease-out_forwards]"
      />
      <div className="absolute inset-0" style={{ background: overlay }} aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="container-ser relative z-10 text-center pt-24 pb-16">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-on-dark max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-on-dark-muted max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta && (
              <Link to={primaryCta.to} className="btn-gold hover:btn-gold-hover group">
                {primaryCta.label}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="btn-ghost-gold hover:bg-gold hover:text-[color:var(--base)]"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
