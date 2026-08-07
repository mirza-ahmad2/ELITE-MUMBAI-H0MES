import { SITE } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
};

export function pageHead({
  title,
  description,
  path,
  keywords = SITE.keywords,
  image = "/og-image.jpg",
}: PageSeo) {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  const absoluteImage = image.startsWith("http") ? image : `${SITE.url}${image}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0D0D0D" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: absoluteImage },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: absoluteImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
