import portImg from "@/assets/hero-export-port.jpg";
import agriImg from "@/assets/hero-agri-field.jpg";
import machineryImg from "@/assets/hero-machinery.jpg";
import warehouseImg from "@/assets/hero-warehouse.jpg";
import equipmentImg from "@/assets/hero-equipment.jpg";
import steelBitumenImg from "@/assets/hero-steel-bitumen.jpg";

export type HeroSlide = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  image: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "export-import",
    index: "01",
    eyebrow: "Export & Import",
    title: "Global Export & Import of Agricultural Commodities",
    lead: "Rice, sugar, pulses, spices, oils and grains shipped FOB, CFR and CIF to buyers across the Middle East, Africa, Europe and South-East Asia — documented, inspected and delivered on schedule.",
    cta: "Request an Export Quote",
    image: portImg,
    alt: "Container ship loading export cargo at port",
  },
  {
    id: "agri-sourcing",
    index: "02",
    eyebrow: "Farm-Direct Sourcing",
    title: "Sourced Direct From Indian Farms and Mills",
    lead: "Season-long procurement from Punjab, Haryana, Gujarat, Andhra Pradesh and partner origins, with sortex cleaning, moisture control and pre-shipment inspection on every lot.",
    cta: "See Our Catalogue",
    image: agriImg,
    alt: "Agricultural field at harvest",
  },
  {
    id: "machinery",
    index: "03",
    eyebrow: "Heavy Machinery",
    title: "Import & Export of Heavy Machinery",
    lead: "Earthmovers, construction plant, material-handling and processing machinery sourced, inspected and shipped with complete customs, insurance and inland logistics support.",
    cta: "Enquire About Machinery",
    image: machineryImg,
    alt: "Heavy construction machinery ready for shipment",
  },
  {
    id: "equipment",
    index: "04",
    eyebrow: "Industrial Equipment",
    title: "Industrial Equipment & Spare Parts Supply",
    lead: "Plant equipment, spares and industrial consumables procured against your technical specification, with vendor verification and consolidated container shipments.",
    cta: "Send Your Requirement",
    image: equipmentImg,
    alt: "Industrial equipment in a manufacturing facility",
  },
  {
    id: "steel-bitumen",
    index: "05",
    eyebrow: "Steel & Bitumen",
    title: "Steel, Metals & Bitumen for Global Projects",
    lead: "TMT bars, HR/CR coils, plates, pipes and structural steel alongside penetration and viscosity grade bitumen, emulsions and membranes — shipped in drums, jumbo bags, bulk tankers and containers with mill test certificates and third-party inspection.",
    cta: "Enquire About Steel & Bitumen",
    image: steelBitumenImg,
    alt: "Steel coils and bitumen drums being loaded into a container at port",
  },
  {
    id: "logistics",
    index: "06",
    eyebrow: "Warehousing & Logistics",
    title: "End-to-End Trade Logistics and Documentation",
    lead: "Warehousing, custom packing and private-label branding, container stuffing, export documentation, LC handling and door-to-port delivery — one team, one point of contact.",
    cta: "Talk to Our Trade Desk",
    image: warehouseImg,
    alt: "Export warehouse with palletised cargo",
  },
];

export const tradeCapabilities = [
  {
    title: "Export",
    body: "Agricultural and food commodities, spices, seeds and processed foods exported in FCL and bulk consignments to global buyers.",
  },
  {
    title: "Import",
    body: "Heavy machinery, industrial equipment, spare parts and raw materials imported against buyer specification with full clearance support.",
  },
  {
    title: "Trading",
    body: "Back-to-back trading and origin-flexible sourcing across India, Thailand, Vietnam, Brazil and the Gulf.",
  },
];

export const tradeProcess = [
  { step: "01", title: "Enquiry & specification", body: "Share product, grade, quantity, packing and destination port." },
  { step: "02", title: "Offer & sample", body: "We issue an FOB/CFR/CIF offer with specification sheet and samples where required." },
  { step: "03", title: "Contract & inspection", body: "Sales contract, LC or agreed payment terms, plus third-party pre-shipment inspection." },
  { step: "04", title: "Packing & stuffing", body: "Custom or private-label packing, palletising and container stuffing under supervision." },
  { step: "05", title: "Documents & shipment", body: "B/L, invoice, packing list, phytosanitary, certificate of origin and fumigation as required." },
  { step: "06", title: "Delivery & support", body: "Tracking to destination port with post-shipment documentation and repeat-order planning." },
];

export const tradeStats = [
  { value: "40+", label: "Destination countries" },
  { value: "150+", label: "Products exported" },
  { value: "10+", label: "Years in global trade" },
  { value: "100%", label: "Documented shipments" },
];
