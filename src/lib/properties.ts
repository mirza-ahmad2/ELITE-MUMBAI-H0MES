import interior from "@/assets/property-interior-1.jpg";
import tower from "@/assets/property-tower-1.jpg";
import terrace from "@/assets/property-terrace.jpg";
import kitchen from "@/assets/property-kitchen.jpg";
import bedroom from "@/assets/property-bedroom.jpg";
import lobby from "@/assets/property-lobby.jpg";

export type Property = {
  id: string;
  name: string;
  micromarket: "Lower Parel" | "Worli" | "Prabhadevi" | "Mahalaxmi";
  configuration: string;
  intent: "Sale" | "Lease" | "Sale & Lease";
  highlight: string;
  image: string;
};

export const properties: Property[] = [
  {
    id: "world-one",
    name: "World One",
    micromarket: "Lower Parel",
    configuration: "3 & 4 BHK",
    intent: "Sale & Lease",
    highlight: "Iconic tower residence · Fully furnished · Two car parks",
    image: tower,
  },
  {
    id: "indiabulls-blu",
    name: "Indiabulls BLU",
    micromarket: "Worli",
    configuration: "3 & 4 BHK",
    intent: "Sale & Lease",
    highlight: "Sea-facing · Semi-furnished · Podium amenities",
    image: interior,
  },
  {
    id: "rustomjee-crown",
    name: "Rustomjee Crown",
    micromarket: "Prabhadevi",
    configuration: "4 BHK",
    intent: "Sale",
    highlight: "Sky bungalows · Panoramic Arabian Sea view",
    image: terrace,
  },
  {
    id: "minerva",
    name: "Minerva",
    micromarket: "Mahalaxmi",
    configuration: "3 & 4 BHK",
    intent: "Sale & Lease",
    highlight: "Racecourse view · Fully furnished · Concierge",
    image: bedroom,
  },
  {
    id: "prestige-jasdan",
    name: "Prestige Jasdan Classic",
    micromarket: "Mahalaxmi",
    configuration: "3 BHK",
    intent: "Lease",
    highlight: "Boutique tower · Fully furnished · Private lift",
    image: kitchen,
  },
  {
    id: "lodha-bellissimo",
    name: "Lodha Bellissimo",
    micromarket: "Mahalaxmi",
    configuration: "3 & 4 BHK",
    intent: "Sale & Lease",
    highlight: "Legacy address · Clubhouse · Two car parks",
    image: lobby,
  },
  {
    id: "the-auro",
    name: "The Auro",
    micromarket: "Worli",
    configuration: "2 & 3 BHK",
    intent: "Sale & Lease",
    highlight: "Boutique high-rise · Semi-furnished · Skyline view",
    image: interior,
  },
  {
    id: "marquise",
    name: "Marquise",
    micromarket: "Prabhadevi",
    configuration: "3 & 4 BHK",
    intent: "Sale",
    highlight: "Ultra-luxury residence · Private deck · Two car parks",
    image: terrace,
  },
  {
    id: "allura",
    name: "Allura",
    micromarket: "Lower Parel",
    configuration: "2 & 3 BHK",
    intent: "Lease",
    highlight: "Contemporary tower · Fully furnished · Business-district access",
    image: bedroom,
  },
  {
    id: "krypton-terrace",
    name: "Krypton Terrace",
    micromarket: "Lower Parel",
    configuration: "2 & 3 BHK",
    intent: "Sale & Lease",
    highlight: "Terrace apartments · Semi-furnished · Skyline view",
    image: kitchen,
  },
];
