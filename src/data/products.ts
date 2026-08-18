import riceImg from "@/assets/cat-rice.jpg";
import sugarImg from "@/assets/cat-sugar.jpg";
import pulsesImg from "@/assets/cat-pulses.jpg";
import grainsImg from "@/assets/cat-grains.jpg";
import spicesImg from "@/assets/cat-spices.jpg";
import seedsImg from "@/assets/cat-seeds-nuts.jpg";

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  categoryId: string;
  categoryLabel: string;
  image: string;
  description: string;
  specs: Spec[];
  packing: string[];
  applications: string[];
};

type ItemInput = {
  name: string;
  description?: string;
  specs?: Spec[];
  origin?: string;
};

type CategoryInput = {
  id: string;
  label: string;
  blurb: string;
  intro: string;
  image: string;
  origin: string;
  packing: string[];
  applications: string[];
  baseSpecs: Spec[];
  highlights: string[];
  items: ItemInput[];
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[%&/]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const categoryInputs: CategoryInput[] = [
  {
    id: "rice",
    label: "Rice",
    blurb: "Basmati and non-basmati varieties for retail packing and bulk export.",
    intro:
      "Tricore Ventures supplies the full spectrum of Indian and South-East Asian rice — long-grain aromatic basmati, parboiled sella, steam and raw white grades, plus broken rice for industrial buyers. Every lot is sortex-cleaned, moisture-controlled and shipped against agreed specification.",
    image: riceImg,
    origin: "India (Haryana, Punjab, Uttar Pradesh, Andhra Pradesh) · Pakistan · Thailand · Vietnam",
    packing: [
      "1 kg / 5 kg / 10 kg consumer packs",
      "25 kg / 50 kg PP or jute bags",
      "Non-woven and BOPP printed bags (buyer branding)",
      "1000 kg jumbo bags",
      "20 ft & 40 ft FCL container loads",
    ],
    applications: [
      "Retail and private-label packing",
      "HORECA and institutional catering",
      "Food processing and ready-meal plants",
      "Government and bulk tender supply",
    ],
    baseSpecs: [
      { label: "Moisture", value: "12–14% max" },
      { label: "Purity", value: "95% min (sortex cleaned)" },
      { label: "Broken", value: "As per agreed grade" },
      { label: "Damaged / discoloured", value: "1% max" },
      { label: "Foreign matter", value: "0.1% max" },
      { label: "Shelf life", value: "24 months in cool, dry storage" },
    ],
    highlights: [
      "Sortex and colour-sorted lots",
      "Aroma and grain-length verified per shipment",
      "Pre-shipment inspection by third-party agencies on request",
    ],
    items: [
      { name: "1121 Sella Basmati Rice", description: "Extra-long parboiled basmati with average grain length of 8.30–8.40 mm, golden-free creamy tone and excellent elongation after cooking." },
      { name: "1121 Golden Basmati Rice", description: "Steam-parboiled 1121 basmati with a rich golden colour, firm texture and non-sticky separate grains after cooking." },
      { name: "1121 Steam Rice", description: "Steamed 1121 basmati that retains natural aroma with a clean white appearance, ideal for biryani and pilaf preparations." },
      { name: "Basmati Brown Rice", description: "Unpolished basmati with the bran layer intact — higher fibre content and a nutty flavour, favoured by health-food brands." },
      { name: "Pusa Sella Basmati Rice", description: "Parboiled Pusa basmati offering strong yield, consistent grain size and economical pricing for volume buyers." },
      { name: "Sugandha Rice", description: "Aromatic long-grain rice with basmati-like fragrance at a competitive commercial price point." },
      { name: "1509 Sella Basmati Rice", description: "Early-maturing basmati variety, parboiled, with slender grains and quick cooking behaviour." },
      { name: "Sharbati Rice", description: "Medium-to-long grain rice with a soft texture and pleasant aroma; a popular everyday table rice." },
      { name: "PR11 Sella Rice", description: "Parboiled non-basmati long grain, high-yield and firm after cooking — a staple for institutional supply." },
      { name: "Swarna Rice", description: "Medium-grain non-basmati white rice widely consumed across South Asia and Africa." },
      { name: "IR 64 Sella Rice", description: "Parboiled IR 64 long grain, hard texture and low breakage — a leading export grade for African and Middle-East markets." },
      { name: "Sona Masuri Rice", description: "Lightweight, aromatic short-grain rice from South India, prized for daily meals and idli/dosa preparations." },
      { name: "Andhra Korutla Rice", description: "Regional South Indian raw rice with soft cooking characteristics and traditional flavour." },
      { name: "Matta Rice", description: "Kerala red parboiled rice with a coarse texture, earthy taste and high nutritional value." },
      { name: "100% Broken Rice", description: "Fully broken kernels used by breweries, snack manufacturers, starch plants and feed producers." },
      { name: "Super Kernel Basmati Rice", description: "Premium Pakistani-origin basmati with exceptionally long, slender kernels and strong natural aroma." },
      { name: "386 Pak Premium Rice", description: "Pakistani long-grain non-basmati with excellent whiteness and consistent milling quality." },
      { name: "IRRI-6, 5% Broken Rice", description: "Long-grain white rice with 5% broken content — a widely traded commodity grade." },
      { name: "IRRI-9, 5% Broken Rice", description: "Firm-textured long-grain white rice at 5% broken, suitable for volume distribution." },
      { name: "IRRI-6, 25% Broken Rice", description: "Economy grade long-grain white rice at 25% broken for high-volume institutional buyers." },
      { name: "Thai Jasmine Rice", description: "Fragrant Thai long-grain rice with a soft, slightly sticky texture and floral aroma." },
      { name: "Thai Hom Mali Rice", description: "Premium certified Thai Hom Mali jasmine rice, the benchmark for aromatic soft-cooking rice." },
      { name: "Thai Rice 5%", description: "Thai white long-grain rice at 5% broken, milled and polished to export standard." },
      { name: "Vietnam Rice", description: "Vietnamese white long-grain rice available in 5%, 15% and 25% broken specifications." },
    ],
  },
  {
    id: "sugar",
    label: "Sugar",
    blurb: "Refined and raw sugar grades from Indian and international mills.",
    intro:
      "We supply refined, raw and mill-white sugar direct from Indian, Brazilian and Gulf refineries. Specifications are confirmed on ICUMSA value, polarisation and moisture, with SGS or equivalent inspection available at load port.",
    image: sugarImg,
    origin: "India · Brazil · UAE (Al Khaleej, Dubai)",
    packing: [
      "1 kg / 2 kg retail sachets and packs",
      "25 kg / 50 kg PP bags",
      "1000 kg / 1250 kg jumbo bags",
      "Bulk vessel and container shipments",
    ],
    applications: [
      "Beverage and soft-drink bottling",
      "Bakery, confectionery and dairy",
      "Retail and wholesale distribution",
      "Industrial food processing",
    ],
    baseSpecs: [
      { label: "Polarisation", value: "99.80% min (refined grades)" },
      { label: "Moisture", value: "0.04–0.08% max" },
      { label: "Ash content", value: "0.04% max" },
      { label: "Solubility", value: "100% dry & free flowing" },
      { label: "Granulation", value: "Fine / medium as required" },
      { label: "Inspection", value: "SGS / Intertek at load port on request" },
    ],
    highlights: [
      "Refinery-direct allocations",
      "CIF / FOB / CFR terms on major ports",
      "Documentation supported for LC and TT payment",
    ],
    items: [
      { name: "Sugar ICUMSA 45", description: "Sparkling white refined sugar, ICUMSA 45 RBU, the premium grade for beverages, dairy and retail packing." },
      { name: "Raw Sugar", description: "Golden-brown raw cane sugar for refineries and industrial processing, typically ICUMSA 600–1200." },
      { name: "Sugar ICUMSA 100/150", description: "Mill-white crystal sugar for bakery, confectionery and general industrial use." },
      { name: "Sugar India / Brazil", description: "Origin-flexible refined and raw sugar sourced from Indian and Brazilian mills based on price and shipment window." },
      { name: "Renuka Sugar", description: "Branded Indian refined white sugar with consistent crystal size and mill certification." },
      { name: "Al Khaleej Sugar", description: "Dubai-refined ICUMSA 45 white sugar with global brand acceptance and fast Gulf shipment." },
    ],
  },
  {
    id: "pulses",
    label: "Pulses & Beans",
    blurb: "Whole and split pulses, lentils and beans in machine-cleaned grades.",
    intro:
      "Our pulses programme covers lentils, grams, dals and beans in whole, split, polished and unpolished forms. Every lot is machine-cleaned, gravity-separated and sortex-graded so buyers receive uniform colour and size.",
    image: pulsesImg,
    origin: "India · Myanmar · Canada · Australia (origin-flexible)",
    packing: [
      "500 g / 1 kg consumer packs",
      "25 kg / 50 kg PP or jute bags",
      "1000 kg jumbo bags",
      "Container-stuffed FCL shipments",
    ],
    applications: [
      "Retail and private-label packing",
      "Dal milling and food processing",
      "Canning and ready-to-eat manufacturing",
      "Institutional and relief supply",
    ],
    baseSpecs: [
      { label: "Moisture", value: "12% max" },
      { label: "Purity", value: "99% min" },
      { label: "Foreign matter", value: "0.5% max" },
      { label: "Damaged / split", value: "2% max (whole grades)" },
      { label: "Processing", value: "Machine cleaned, gravity separated, sortex" },
      { label: "Shelf life", value: "12–18 months" },
    ],
    highlights: [
      "Double-sortex options for premium buyers",
      "Fumigation and phytosanitary certification",
      "Custom polish and grade on request",
    ],
    items: [
      { name: "Red Split Lentil", description: "Football-shaped red masoor split, deep orange colour, quick cooking and widely used in soups and dals." },
      { name: "Red Masoor Whole", description: "Whole brown-skinned masoor lentil with a red core, machine cleaned and uniformly sized." },
      { name: "Masoor Whole", description: "Whole lentils graded by sieve size, suitable for milling into split lentil or direct retail." },
      { name: "Green Lentils", description: "Large and small green lentils with firm texture that holds shape after cooking — favoured in salads and stews." },
      { name: "Green Moong Lentils", description: "Whole green mung beans, high in protein, used for sprouting, dal and flour milling." },
      { name: "Moong Chilka", description: "Split green mung with skin retained, offering higher fibre and a traditional texture." },
      { name: "Mung Dal", description: "Skinless split yellow mung dal, easy to digest and quick cooking." },
      { name: "Toor Dal (Unpolished)", description: "Unpolished split pigeon pea with natural colour and no oil or water polishing — a clean-label favourite." },
      { name: "Urad Dal Split", description: "Split black gram with skin removed, essential for South Indian batters and North Indian dals." },
      { name: "Urad Gotta", description: "Whole skinless white urad, used for vada, papad and traditional preparations." },
      { name: "Urad Whole", description: "Whole black gram with skin intact, the base for dal makhani and fermented batters." },
      { name: "Chana Dal", description: "Split desi chickpea, golden yellow, with uniform size and low broken content." },
      { name: "Split Chick Peas (Chana Dal)", description: "Machine-split chickpea grade for milling, besan flour production and food service." },
      { name: "Chick Peas", description: "Whole chickpeas available in desi and kabuli types across 6 mm to 12 mm calibrations." },
      { name: "Chick Peas (Black Gram)", description: "Small dark desi chana with a robust nutty flavour, popular for roasting and dal." },
      { name: "White Kabuli Chana", description: "Large creamy-white kabuli chickpeas sorted by calibre (42/44, 58/60, 70/80 count)." },
      { name: "Black Eye Beans", description: "Cream-coloured cowpeas with the signature black eye, machine cleaned and sortex graded." },
      { name: "Broad Bean", description: "Flat, large fava beans supplied whole or split for canning and traditional cuisines." },
      { name: "Light Speckled Kidney Beans", description: "Pinto-style speckled beans with a creamy texture, widely used in canned and prepared foods." },
      { name: "Purple Speckled Kidney Bean", description: "Deep purple mottled kidney beans with firm skin and excellent cooking retention." },
      { name: "White Kidney Bean", description: "Cannellini-type white kidney beans, large and smooth, for soups and canning." },
      { name: "Red Kidney Beans", description: "Dark red rajma beans with rich flavour, sorted for uniform size and colour." },
      { name: "Black Beans", description: "Small black turtle beans with dense texture, popular in Latin American cuisine." },
      { name: "White Pea Bean", description: "Navy beans with a mild flavour, the standard for baked-bean canning lines." },
      { name: "Yellow Peas", description: "Whole yellow field peas for milling, snack processing and feed formulation." },
      { name: "Yellow Split Peas", description: "Split and dehulled yellow peas, quick cooking with high protein content." },
      { name: "Green Peas", description: "Whole dried green peas used for snacks, roasting and traditional dishes." },
      { name: "Black Mapte", description: "Myanmar-origin black matpe (urad) beans, prized for consistent size and dark skin." },
    ],
  },
  {
    id: "grains",
    label: "Grains & Feed",
    blurb: "Food grains, coarse cereals and animal feed ingredients.",
    intro:
      "Food grains and feed ingredients supplied at milling, human-consumption and feed grades. We arrange bulk and containerised movement with weight and quality certification at load port.",
    image: grainsImg,
    origin: "India · Ukraine · Brazil · Argentina (origin-flexible)",
    packing: [
      "50 kg PP bags",
      "1000 kg jumbo bags",
      "Bulk in container liners",
      "Break-bulk vessel shipments",
    ],
    applications: [
      "Flour and feed milling",
      "Starch, ethanol and oil extraction",
      "Poultry, cattle and aqua feed",
      "Food processing and brewing",
    ],
    baseSpecs: [
      { label: "Moisture", value: "12–14% max" },
      { label: "Foreign matter", value: "1–2% max" },
      { label: "Damaged grain", value: "2% max" },
      { label: "Aflatoxin", value: "Within destination limits" },
      { label: "Test weight", value: "Grade dependent" },
      { label: "Certification", value: "Phytosanitary, fumigation, weight & quality" },
    ],
    highlights: [
      "Human-consumption and feed grades",
      "GMO and non-GMO declarations where applicable",
      "Bulk vessel chartering support",
    ],
    items: [
      { name: "Wheat", description: "Milling and feed wheat supplied on protein, gluten and test-weight specification." },
      { name: "Maize Yellow / White", description: "Yellow and white corn for feed, starch and human consumption, aflatoxin controlled." },
      { name: "Soybeans", description: "Whole soybeans for crushing and food use, supplied on oil and protein content." },
      { name: "Soyabean Meal", description: "High-protein solvent-extracted soybean meal (46/48% protein) for compound feed." },
      { name: "Barley", description: "Feed and malting barley graded on moisture, test weight and germination." },
      { name: "Sorghum (Jowar)", description: "White and red sorghum for food, feed and brewing applications." },
      { name: "Niger Seed", description: "Small black oilseed used in bird feed mixes and oil extraction." },
      { name: "Bird Feed", description: "Blended bird feed mixes and single-ingredient seeds packed to buyer formulation." },
    ],
  },
  {
    id: "spices",
    label: "Spices",
    blurb: "Whole and ground spices sorted to export-grade specification.",
    intro:
      "Indian whole and ground spices cleaned, graded and packed under hygienic conditions. Volatile-oil content, colour value and pungency are documented per lot so buyers can match their existing blends.",
    image: spicesImg,
    origin: "India (Kerala, Rajasthan, Gujarat, Andhra Pradesh, Tamil Nadu) · Sri Lanka · China",
    packing: [
      "100 g / 250 g / 500 g retail packs",
      "10 kg / 25 kg / 50 kg PP and jute bags",
      "Vacuum and food-grade lined cartons",
      "Container FCL and LCL shipments",
    ],
    applications: [
      "Spice blending and masala manufacturing",
      "Oleoresin and essential-oil extraction",
      "Retail and private-label packing",
      "Food service and ready-meal production",
    ],
    baseSpecs: [
      { label: "Moisture", value: "10–12% max" },
      { label: "Purity", value: "99% min, machine cleaned" },
      { label: "Foreign matter", value: "0.5% max" },
      { label: "Cleaning", value: "Steam sterilised / sortex on request" },
      { label: "Testing", value: "Pesticide residue & heavy metals on request" },
      { label: "Shelf life", value: "12–24 months" },
    ],
    highlights: [
      "Export-grade sorting and grading",
      "Steam sterilisation available",
      "Lab reports issued with every consignment",
    ],
    items: [
      { name: "Black Pepper", description: "Malabar and Tellicherry black pepper graded by bulk density (500/550/570 g/l) with strong piperine content." },
      { name: "Cumin Seed", description: "Indian cumin (jeera) at 99% and 99.5% purity, machine cleaned with high volatile oil." },
      { name: "Black Cumin", description: "Nigella / kalonji seed with dark uniform colour and characteristic aroma." },
      { name: "Coriander Seeds", description: "Eagle and Scooter coriander seed, split and whole, sorted for colour and size." },
      { name: "Fenugreek Seed", description: "Golden methi seed with consistent size, used whole, ground or for sprouting." },
      { name: "Fennel Seed", description: "Green fennel (saunf) with sweet aroma, available in Lucknowi and Gujarat grades." },
      { name: "Cloves", description: "Whole dried clove buds with high eugenol content, hand sorted for stems." },
      { name: "Cinnamon / Cassia", description: "Cinnamon quills and cassia bark supplied in cut, whole and broken forms." },
      { name: "Green Cardamom", description: "Bold green cardamom graded 6 mm to 8 mm, rich aroma and bright colour." },
      { name: "Black Cardamom", description: "Smoke-dried large cardamom with a deep, resinous flavour for savoury blends." },
      { name: "Dry Ginger", description: "Sun-dried whole ginger, unbleached, with high oleoresin content." },
      { name: "Dry Ginger (Chinese)", description: "Chinese-origin dried ginger, uniformly sized and competitively priced for volume buyers." },
      { name: "Turmeric Finger", description: "Polished turmeric fingers graded on curcumin content (2–5%) from Erode, Salem and Nizamabad." },
      { name: "Red Chilli Powder", description: "Ground red chilli supplied on ASTA colour value and Scoville heat to buyer requirement." },
      { name: "Tamarind", description: "Seedless and with-seed tamarind pulp and slabs, natural sourness, block or loose packed." },
      { name: "Bay Leaf", description: "Whole dried tej patta leaves, hand sorted for size and freedom from stems." },
      { name: "Ajwain Seed", description: "Carom seed with sharp thymol aroma, cleaned to 99% purity." },
      { name: "Galangal Roots", description: "Dried galangal root, sliced or whole, for South-East Asian culinary and extraction use." },
    ],
  },
  {
    id: "seeds-nuts",
    label: "Seeds & Nuts",
    blurb: "Oilseeds, edible seeds, nuts and dried fruits.",
    intro:
      "Oilseeds, edible seeds, tree nuts and dried fruit sourced from established processing clusters. Products are supplied hulled or natural, raw or blanched, and calibrated by count and size.",
    image: seedsImg,
    origin: "India · Afghanistan · Iran · USA · Vietnam (origin-flexible)",
    packing: [
      "250 g / 500 g / 1 kg retail packs",
      "10 kg / 25 kg / 50 kg bags and cartons",
      "Vacuum packs for kernels",
      "Container FCL shipments",
    ],
    applications: [
      "Bakery, confectionery and snack manufacture",
      "Oil crushing and extraction",
      "Retail and gift packing",
      "Ingredient supply to food processors",
    ],
    baseSpecs: [
      { label: "Moisture", value: "6–8% max" },
      { label: "Purity", value: "99–99.95% (grade dependent)" },
      { label: "Admixture", value: "0.5% max" },
      { label: "Oil content", value: "As per variety (oilseeds)" },
      { label: "Aflatoxin", value: "Within destination limits" },
      { label: "Shelf life", value: "12 months in cool, dry storage" },
    ],
    highlights: [
      "Hulled, natural, raw and blanched options",
      "Calibrated by count / size for nuts",
      "Metal detection and X-ray screening on request",
    ],
    items: [
      { name: "Sesame Seed (Natural / Hulled)", description: "Natural and mechanically hulled sesame at 99% to 99.95% purity, low FFA and high oil content." },
      { name: "Natural Sesame Seed", description: "Unhulled white and mixed sesame seed for bakery topping and oil extraction." },
      { name: "Sunflower Seed", description: "Confectionery and oil-grade sunflower seed, in-shell or kernel, sorted by size." },
      { name: "Mustard Seed", description: "Yellow and black mustard seed with high oil content for condiment and crushing use." },
      { name: "Soya Seed", description: "Food-grade soybean seed for sprouting, soy milk and tofu manufacture." },
      { name: "Pumpkin Seed (Snow White)", description: "Snow-white pumpkin seeds, in-shell, graded by size for snacking and roasting." },
      { name: "Peanut", description: "Bold and Java peanuts in shell, sorted by count per ounce and aflatoxin tested." },
      { name: "Peanut Kernels (Various)", description: "Groundnut kernels in Bold 38/42, 40/50, 50/60 and Java 45/55, 60/70, 70/80 counts." },
      { name: "Blanched Peanut", description: "Skin-removed blanched peanut kernels, whole or split, for confectionery and butter." },
      { name: "Almonds (Kernel)", description: "Shelled almond kernels — Californian, Australian and Indian origins in NP and Independence varieties." },
      { name: "Almonds (Inshell)", description: "In-shell almonds with clean, unbroken shells, graded by size for retail and gifting." },
      { name: "Cashew Nut", description: "Cashew kernels in W180, W240, W320 and broken grades, vacuum packed." },
      { name: "Walnut (Kernel)", description: "Light-halves and quarter walnut kernels graded on colour and breakage." },
      { name: "Walnut (Inshell)", description: "In-shell walnuts, thin and hard shell varieties, sized 28 mm and above." },
      { name: "Pistachio", description: "Roasted, salted and raw pistachios, naturally opened, graded by count per ounce." },
      { name: "Chestnut", description: "Dried and fresh chestnuts, calibrated and sorted for size and soundness." },
      { name: "Dates", description: "Whole and pitted dates in premium and industrial grades, retail and bulk packed." },
      { name: "Raisins", description: "Golden, green and black raisins, sun-dried and machine cleaned, sorted for stems." },
    ],
  },
];

export type ProductCategory = {
  id: string;
  label: string;
  blurb: string;
  intro: string;
  image: string;
  origin: string;
  packing: string[];
  applications: string[];
  highlights: string[];
  items: string[];
  products: Product[];
};

export const productCategories: ProductCategory[] = categoryInputs.map((cat) => {
  const products: Product[] = cat.items.map((item) => ({
    slug: slugify(item.name),
    name: item.name,
    categoryId: cat.id,
    categoryLabel: cat.label,
    image: cat.image,
    description:
      item.description ??
      `${item.name} sourced and supplied by Tricore Ventures to agreed export specification.`,
    specs: [
      { label: "Origin", value: item.origin ?? cat.origin },
      ...(item.specs ?? []),
      ...cat.baseSpecs,
      { label: "Packing", value: "As per buyer requirement" },
      { label: "Minimum order", value: "One 20 ft FCL (negotiable)" },
      { label: "Trade terms", value: "FOB / CFR / CIF — major world ports" },
    ],
    packing: cat.packing,
    applications: cat.applications,
  }));

  return {
    id: cat.id,
    label: cat.label,
    blurb: cat.blurb,
    intro: cat.intro,
    image: cat.image,
    origin: cat.origin,
    packing: cat.packing,
    applications: cat.applications,
    highlights: cat.highlights,
    items: cat.items.map((i) => i.name),
    products,
  };
});

export const allProducts: Product[] = productCategories.flatMap((c) => c.products);

export const getCategory = (id: string) => productCategories.find((c) => c.id === id);

export const getProduct = (slug: string) => allProducts.find((p) => p.slug === slug);

/** Headline product range printed in the company catalogue. */
export const headlineRange = [
  "Rice",
  "Wheat",
  "Maize / Corn",
  "Soybeans",
  "Sugar",
  "Toor Dal",
  "Masoor Dal",
  "Moong Dal",
  "Urad Dal",
  "Chana Dal",
  "Almonds",
  "Peanuts",
  "Sesame Seeds",
  "Spices",
  "Pulses & Beans",
];

export const productSegments = [
  "Food & beverage commodities",
  "Agriculture & grains",
  "Pulses, beans & seeds",
  "Spices and allied products",
];
