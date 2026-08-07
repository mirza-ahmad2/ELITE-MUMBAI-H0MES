import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const inputCls =
  "w-full bg-transparent border-0 border-b border-white/15 focus:border-gold outline-none py-3 text-on-dark placeholder:text-soft text-sm transition-colors";

const selectCls =
  `${inputCls} appearance-none cursor-pointer pr-8 ` +
  "[&>option]:bg-charcoal [&>option]:text-warm " +
  "[&>option:checked]:bg-gold [&>option:checked]:text-[color:var(--base)] " +
  "[&>option:hover]:bg-gold/20";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-gold/40 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <Check className="mx-auto text-gold" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-2xl text-on-dark">Thank you</h3>
        <p className="mt-2 text-sm text-on-dark-soft max-w-md mx-auto">
          Sajid will personally reach out within one business day to schedule your consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-8" noValidate={false}>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="eyebrow block mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputCls}
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="eyebrow block mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className={inputCls}
            placeholder="+91"
          />
        </div>
        <div className="relative">
          <label className="eyebrow block mb-2" htmlFor="intent">
            Interest
          </label>
          <select id="intent" name="intent" required className={selectCls} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option>Buy</option>
            <option>Lease</option>
            <option>List a Property</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-0 bottom-3.5 text-gold"
            aria-hidden="true"
          />
        </div>
        <div className="relative">
          <label className="eyebrow block mb-2" htmlFor="market">
            Preferred Micro-market
          </label>
          <select id="market" name="market" className={selectCls} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option>Lower Parel</option>
            <option>Worli</option>
            <option>Prabhadevi</option>
            <option>Mahalaxmi</option>
            <option>Open</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-0 bottom-3.5 text-gold"
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        <label className="eyebrow block mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputCls} resize-none`}
          placeholder="Configuration, budget, timeline…"
        />
      </div>
      <button type="submit" className="btn-gold hover:btn-gold-hover group">
        Schedule a Consultation
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
