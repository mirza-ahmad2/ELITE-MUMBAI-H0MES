import { Link } from "@tanstack/react-router";

type Props = {
  /** Compact for header; larger for footer */
  size?: "sm" | "md" | "lg";
  /** Wrap in home link */
  link?: boolean;
  className?: string;
};

const sizes = {
  sm: "h-10 w-auto sm:h-11",
  md: "h-12 w-auto sm:h-14",
  lg: "h-16 w-auto sm:h-20",
} as const;

export function Logo({ size = "sm", link = true, className = "" }: Props) {
  const img = (
    <img
      src="/logo.png"
      alt="Sarah Elite Realtors"
      width={157}
      height={168}
      className={`${sizes[size]} object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03] ${className}`}
      decoding="async"
    />
  );

  if (!link) return img;

  return (
    <Link
      to="/"
      className="group inline-flex items-center shrink-0 focus-visible:outline-none"
      aria-label="Sarah Elite Realtors — Home"
    >
      {img}
    </Link>
  );
}
