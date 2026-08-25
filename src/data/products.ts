import riceImg from "@/assets/cat-rice.jpg";
import sugarImg from "@/assets/cat-sugar.jpg";
import pulsesImg from "@/assets/cat-pulses.jpg";
import grainsImg from "@/assets/cat-grains.jpg";
import spicesImg from "@/assets/cat-spices.jpg";
import seedsImg from "@/assets/cat-seeds-nuts.jpg";
import oilImg from "@/assets/cat-oil.jpg";
import oilseedsImg from "@/assets/cat-oilseeds.jpg";
import feedImg from "@/assets/cat-animalfeed.jpg";
import flourImg from "@/assets/cat-wheatflour.jpg";
import milkImg from "@/assets/cat-milkpowder.jpg";
import cannedImg from "@/assets/cat-cannedfood.jpg";
import freshImg from "@/assets/cat-freshproduce.jpg";
import machineryImg from "@/assets/hero-machinery.jpg";
import equipmentImg from "@/assets/hero-equipment.jpg";
import floursImg from "@/assets/cat-flours.jpg";
import jaggeryImg from "@/assets/cat-jaggery.jpg";
import teaCoffeeImg from "@/assets/cat-tea-coffee.jpg";
import herbalImg from "@/assets/cat-herbal.jpg";
import frozenImg from "@/assets/cat-frozen.jpg";
import saltImg from "@/assets/cat-salt.jpg";

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
  {
    id: "edible-oils",
    label: "Edible Oils",
    blurb: "Refined and crude edible oils in bulk, flexitank and consumer packs.",
    intro:
      "Refined sunflower, soybean, palm, mustard, groundnut, coconut and rice-bran oils supplied in consumer bottles, jerry cans, drums, flexitanks and ISO tanks. Every parcel is shipped against agreed FFA, moisture and colour parameters with load-port inspection available.",
    image: oilImg,
    origin: "India · Ukraine · Russia · Malaysia · Indonesia · Argentina",
    packing: [
      "500 ml / 1 L / 2 L / 5 L PET bottles",
      "5 L / 20 L jerry cans",
      "190 kg steel drums & IBC totes",
      "24 MT flexitanks and ISO tanks",
    ],
    applications: [
      "Retail and private-label bottling",
      "HORECA and institutional frying",
      "Food processing and bakery",
      "Soap, oleochemical and industrial use",
    ],
    baseSpecs: [
      { label: "Free fatty acid", value: "0.1% max (refined grades)" },
      { label: "Moisture & impurities", value: "0.1% max" },
      { label: "Colour", value: "As per Lovibond agreed value" },
      { label: "Peroxide value", value: "2 meq/kg max" },
      { label: "Inspection", value: "SGS / Intertek at load port on request" },
      { label: "Shelf life", value: "12–18 months in sealed packing" },
    ],
    highlights: [
      "Bulk, flexitank and retail bottling options",
      "Private-label artwork and labelling supported",
      "Halal and health certificates issued per shipment",
    ],
    items: [
      { name: "Refined Sunflower Oil", description: "Light, neutral-tasting refined sunflower oil with high smoke point — the leading retail cooking oil for Middle-East and African markets." },
      { name: "Crude Sunflower Oil", description: "Unrefined sunflower oil supplied in bulk to refineries, priced on FFA and moisture." },
      { name: "Refined Soybean Oil", description: "Refined, bleached and deodorised soybean oil for retail packing and industrial frying." },
      { name: "RBD Palm Oil", description: "Refined bleached deodorised palm oil supplied in bulk and drums for frying and food manufacture." },
      { name: "RBD Palm Olein CP8 / CP10", description: "Fractionated palm olein with clear cold-point grades for continuous frying operations." },
      { name: "Mustard Oil", description: "Kachi Ghani cold-pressed mustard oil with pungent aroma, popular in South-Asian retail." },
      { name: "Groundnut Oil", description: "Filtered and refined peanut oil with a nutty character, suited to premium retail lines." },
      { name: "Coconut Oil", description: "Edible and cosmetic-grade coconut oil, refined or virgin cold-pressed." },
      { name: "Rice Bran Oil", description: "Heart-healthy rice bran oil with high oryzanol content and excellent frying stability." },
      { name: "Sesame Oil", description: "Cold-pressed and roasted sesame oil for culinary and ayurvedic applications." },
      { name: "Corn Oil", description: "Refined maize oil with a light colour and neutral flavour for retail and processing." },
      { name: "Olive Oil", description: "Extra virgin, virgin and pomace olive oil sourced from Mediterranean mills." },
      { name: "Vanaspati / Ghee", description: "Hydrogenated vegetable fat and pure dairy ghee in tins, pouches and bulk cartons." },
    ],
  },
  {
    id: "oil-seeds",
    label: "Oil Seeds",
    blurb: "Crushing-grade seeds for oil mills and extraction plants.",
    intro:
      "Crushing-grade oilseeds supplied to mills and extraction plants on oil content, moisture and admixture. Lots are machine cleaned, gravity separated and shipped in bags or bulk.",
    image: oilseedsImg,
    origin: "India · Sudan · Nigeria · Ukraine · Brazil",
    packing: ["25 kg / 50 kg PP bags", "1000 kg jumbo bags", "Bulk vessel and container loads"],
    applications: [
      "Oil crushing and solvent extraction",
      "Animal feed and de-oiled cake",
      "Bakery, snack and confectionery use",
      "Industrial and cosmetic processing",
    ],
    baseSpecs: [
      { label: "Oil content", value: "As per variety, tested per lot" },
      { label: "Moisture", value: "8% max" },
      { label: "Admixture", value: "1% max" },
      { label: "FFA", value: "2% max" },
      { label: "Cleaning", value: "Machine cleaned & gravity separated" },
      { label: "Shelf life", value: "12 months in dry storage" },
    ],
    highlights: [
      "Oil content certified per consignment",
      "Bulk and bagged loading options",
      "Fumigation and phytosanitary certification",
    ],
    items: [
      { name: "Sesame Seed (Crushing Grade)", description: "Natural sesame with 48–52% oil content for crushing and tahini manufacture." },
      { name: "Soybean Seed", description: "Non-GMO and conventional soybean for crushing, meal and food processing." },
      { name: "Groundnut (Oil Grade)", description: "Oil-grade groundnut kernels with 45–48% oil, aflatoxin tested." },
      { name: "Mustard / Rapeseed", description: "Yellow and black mustard seed with 38–42% oil content for expeller crushing." },
      { name: "Sunflower Seed (Oil Grade)", description: "Black oil-type sunflower seed with 40–44% oil for crushing plants." },
      { name: "Castor Seed", description: "Industrial castor seed with 46–50% oil, the base for castor oil and derivatives." },
      { name: "Niger Seed", description: "Small black niger seed used for oil extraction and bird-feed blends." },
      { name: "Linseed / Flax Seed", description: "Brown and golden flaxseed with high omega-3 content, food and industrial grades." },
      { name: "Cotton Seed", description: "Delinted cotton seed for oil extraction and cattle feed use." },
      { name: "Copra / Dried Coconut", description: "Sun-dried and kiln-dried copra for coconut oil crushing." },
    ],
  },
  {
    id: "animal-feeds",
    label: "Animal Feeds",
    blurb: "Feed grains, meals, cakes and compound feed for livestock.",
    intro:
      "Feed-grade grains, oilcakes, meals and by-products supplied to feed mills, poultry integrators and dairy operations, tested for protein, fibre and aflatoxin before dispatch.",
    image: feedImg,
    origin: "India · Argentina · Brazil · Ukraine",
    packing: ["50 kg PP bags", "1000 kg jumbo bags", "Bulk container and vessel loads"],
    applications: [
      "Poultry and layer feed",
      "Cattle and dairy feed",
      "Aquaculture feed",
      "Pet food and compound feed manufacture",
    ],
    baseSpecs: [
      { label: "Protein", value: "As per grade, certified per lot" },
      { label: "Moisture", value: "12% max" },
      { label: "Fibre", value: "Grade dependent" },
      { label: "Aflatoxin", value: "Within destination limits" },
      { label: "Sand / silica", value: "2% max" },
      { label: "Certification", value: "Phytosanitary & fumigation issued" },
    ],
    highlights: [
      "Protein and aflatoxin tested per consignment",
      "Bulk and bagged shipment flexibility",
      "Regular contract supply available",
    ],
    items: [
      { name: "Yellow Maize (Feed Grade)", description: "Feed-grade yellow corn with high starch and energy value for poultry and cattle rations." },
      { name: "Soybean Meal", description: "Solvent-extracted soybean meal at 46–48% protein — the benchmark protein source in compound feed." },
      { name: "De-oiled Rice Bran", description: "DORB with balanced fibre and protein, widely used in cattle and aqua feed." },
      { name: "Rice Bran (Full Fat)", description: "Full-fat rice bran offering energy and oil content for dairy and poultry feed." },
      { name: "Wheat Bran", description: "Coarse wheat bran, a palatable fibre source for cattle and ruminant feed." },
      { name: "Groundnut Cake / Meal", description: "Expeller and solvent groundnut cake at 40–45% protein for livestock feed." },
      { name: "Mustard Cake", description: "Mustard oilcake used as cattle feed and organic fertiliser." },
      { name: "Cotton Seed Cake", description: "Protein-rich cotton seed cake for dairy cattle rations." },
      { name: "Guar Korma / Churi", description: "Guar meal by-products at 40–50% protein for cattle and aqua feed." },
      { name: "Alfalfa / Rhodes Grass Hay", description: "Baled forage hay for dairy, camel and equine feeding programmes." },
      { name: "Broken Rice (Feed)", description: "Feed-grade broken rice supplying carbohydrate energy in compound feed." },
      { name: "Fish Meal", description: "High-protein fish meal for aqua and poultry feed, supplied on protein and TVBN specs." },
    ],
  },
  {
    id: "wheat-flour",
    label: "Wheat & Flour",
    blurb: "Milling wheat, atta, maida, semolina and bakery flours.",
    intro:
      "Milling wheat and finished flour products from Indian and international mills — chakki atta, refined maida, semolina and bakery-grade flours packed for retail and industrial buyers.",
    image: flourImg,
    origin: "India · Russia · Ukraine · Turkey · UAE mills",
    packing: [
      "1 kg / 5 kg / 10 kg consumer packs",
      "25 kg / 50 kg PP and paper bags",
      "Bulk tanker and jumbo bag loads",
    ],
    applications: [
      "Retail and private-label packing",
      "Bakery, biscuit and pasta manufacture",
      "HORECA and institutional supply",
      "Food-service distribution",
    ],
    baseSpecs: [
      { label: "Protein", value: "10.5–13% (grade dependent)" },
      { label: "Moisture", value: "13.5% max" },
      { label: "Ash content", value: "0.5–1.2% by grade" },
      { label: "Gluten", value: "26–30% wet gluten" },
      { label: "Falling number", value: "250 sec min" },
      { label: "Shelf life", value: "6–9 months" },
    ],
    highlights: [
      "Private-label bag printing available",
      "Mill certificates with every lot",
      "Consistent baking performance across shipments",
    ],
    items: [
      { name: "Milling Wheat", description: "Bread-grade milling wheat supplied on protein, hectolitre weight and falling number." },
      { name: "Whole Wheat Atta", description: "Stone-ground chakki atta retaining bran and germ for soft, high-fibre flatbreads." },
      { name: "Refined Flour (Maida)", description: "Finely milled refined wheat flour for bakery, pastry, noodles and confectionery." },
      { name: "Semolina (Sooji / Rava)", description: "Coarse and fine semolina from durum and soft wheat, for pasta, halwa and upma." },
      { name: "Durum Wheat Semolina", description: "High-protein durum semolina, the standard base for premium pasta production." },
      { name: "Bakery / Bread Flour", description: "High-gluten bread flour giving strong dough structure and volume." },
      { name: "Wheat Bran (Food Grade)", description: "Edible wheat bran for high-fibre cereals, breads and health foods." },
      { name: "Corn Flour / Starch", description: "Fine maize starch for thickening, confectionery and industrial applications." },
    ],
  },
  {
    id: "milk-powder",
    label: "Dairy & Milk Powder",
    blurb: "Skimmed, whole and specialty dairy powders for food industry buyers.",
    intro:
      "Dairy powders and ingredients sourced from audited plants — full cream, skimmed, whey and dairy whitener grades supplied in 25 kg bags with full microbiological certification.",
    image: milkImg,
    origin: "India · New Zealand · EU · Poland · Argentina",
    packing: [
      "400 g / 900 g retail tins & pouches",
      "25 kg multi-wall paper bags with inner liner",
      "Palletised container loads",
    ],
    applications: [
      "Beverage and reconstituted milk",
      "Bakery, chocolate and confectionery",
      "Ice cream and dairy processing",
      "Nutritional and infant formula bases",
    ],
    baseSpecs: [
      { label: "Fat content", value: "As per grade (0.5% – 28%)" },
      { label: "Protein", value: "34% min (SMP)" },
      { label: "Moisture", value: "4% max" },
      { label: "Solubility index", value: "1.0 ml max" },
      { label: "Microbiology", value: "Salmonella & E. coli absent" },
      { label: "Shelf life", value: "18–24 months" },
    ],
    highlights: [
      "Plant COA and health certificate per lot",
      "Halal certification available",
      "Temperature-controlled shipping on request",
    ],
    items: [
      { name: "Skimmed Milk Powder (SMP)", description: "Low-fat spray-dried milk powder at 34% min protein for beverages, bakery and confectionery." },
      { name: "Full Cream Milk Powder (FCMP)", description: "Whole milk powder at 26–28% fat, delivering a rich creamy profile in reconstituted milk." },
      { name: "Instant Milk Powder", description: "Agglomerated powder that dissolves rapidly in cold water — ideal for retail packing." },
      { name: "Dairy Whitener", description: "Sweetened dairy whitener for tea and coffee applications in retail and HORECA." },
      { name: "Whey Powder", description: "Sweet whey powder used in bakery, feed and nutritional formulations." },
      { name: "Butter & Ghee", description: "Unsalted butter blocks and pure dairy ghee in tins and bulk packing." },
      { name: "Condensed Milk", description: "Sweetened condensed milk in cans and bulk drums for dessert and beverage manufacture." },
      { name: "Cheese & Paneer", description: "Processed cheese blocks, mozzarella and frozen paneer for food-service buyers." },
    ],
  },
  {
    id: "canned-foods",
    label: "Canned Foods",
    blurb: "Canned vegetables, fruits, fish and ready-to-eat preparations.",
    intro:
      "Canned and preserved foods for retail chains, food banks and food-service distributors, produced in HACCP-certified plants with private-label artwork supported.",
    image: cannedImg,
    origin: "India · China · Thailand · Turkey · Italy",
    packing: [
      "400 g / 800 g / 2.5 kg / 3 kg tins",
      "Standard export cartons, palletised",
      "20 ft & 40 ft FCL container loads",
    ],
    applications: [
      "Retail and supermarket chains",
      "Food banks and relief agencies",
      "Restaurants and catering",
      "Food-service distribution",
    ],
    baseSpecs: [
      { label: "Production", value: "HACCP / ISO 22000 certified plants" },
      { label: "Net weight", value: "As per label declaration" },
      { label: "Shelf life", value: "24–36 months from production" },
      { label: "Labelling", value: "Private label and multilingual supported" },
      { label: "Preservatives", value: "Within destination regulations" },
      { label: "Inspection", value: "Pre-shipment inspection on request" },
    ],
    highlights: [
      "Private-label and custom pack sizes",
      "Long ambient shelf life",
      "Documentation for GCC, EU and African imports",
    ],
    items: [
      { name: "Tomato Paste", description: "Double-concentrated tomato paste at 28–30% brix in tins and aseptic drums." },
      { name: "Canned Baked Beans", description: "Beans in tomato sauce, a high-volume retail and food-bank staple." },
      { name: "Canned Chickpeas", description: "Ready-to-use cooked chickpeas in brine for hummus, salads and catering." },
      { name: "Canned Sweet Corn", description: "Whole-kernel sweet corn in brine, crisp texture and consistent grain size." },
      { name: "Canned Green Peas", description: "Tender green peas in brine, sorted for size and colour." },
      { name: "Canned Mushrooms", description: "Whole and sliced button mushrooms in brine for pizza and catering use." },
      { name: "Canned Pineapple", description: "Pineapple slices, chunks and tidbits in syrup or natural juice." },
      { name: "Canned Fruit Cocktail", description: "Mixed fruit in light syrup for dessert and food-service applications." },
      { name: "Canned Tuna", description: "Tuna chunks and flakes in oil, brine or water, in retail and catering tins." },
      { name: "Canned Sardines / Mackerel", description: "Sardines and mackerel in tomato sauce or oil — a core African and Middle-East line." },
      { name: "Canned Coconut Milk", description: "Coconut milk and cream at 17–19% fat for curries and beverages." },
      { name: "Pickles & Preserves", description: "Mango, lime and mixed pickles plus jams and preserves in jars and bulk packs." },
    ],
  },
  {
    id: "fresh-produce",
    label: "Fruits & Vegetables",
    blurb: "Export-grade fresh fruits and vegetables in ventilated and reefer loads.",
    intro:
      "Fresh produce sourced from certified farms and packhouses, graded, pre-cooled and shipped in ventilated or refrigerated containers with full phytosanitary documentation.",
    image: freshImg,
    origin: "India (Maharashtra, Gujarat, Nashik, Andhra Pradesh)",
    packing: [
      "5 kg / 10 kg corrugated cartons",
      "10 kg / 25 kg mesh bags (onion, potato)",
      "Ventilated and reefer container loads",
    ],
    applications: [
      "Supermarket and wholesale distribution",
      "Wet market and re-export trade",
      "Food processing and pulping",
      "HORECA supply",
    ],
    baseSpecs: [
      { label: "Grade", value: "Export grade, size calibrated" },
      { label: "Pre-cooling", value: "Applied for perishable lines" },
      { label: "Temperature", value: "Maintained per commodity in transit" },
      { label: "Certification", value: "Phytosanitary & residue reports" },
      { label: "Transit", value: "Reefer or ventilated container" },
      { label: "Inspection", value: "Packhouse inspection before loading" },
    ],
    highlights: [
      "Farm-to-port cold chain maintained",
      "Residue and phytosanitary compliance",
      "Air and sea freight options",
    ],
    items: [
      { name: "Fresh Onion", description: "Red and pink Nashik onions, 40–70 mm calibrated, mesh bagged for bulk export." },
      { name: "Fresh Potato", description: "Table and processing-grade potatoes, washed and graded by size." },
      { name: "Fresh Garlic", description: "White and pink garlic bulbs, 4.5–6.5 cm, cured and cleaned for long transit." },
      { name: "Fresh Ginger", description: "Plump, low-fibre fresh ginger rhizomes packed in ventilated cartons." },
      { name: "Green Chilli", description: "Firm green chillies pre-cooled and shipped in reefer for premium markets." },
      { name: "Fresh Mango", description: "Alphonso, Kesar and Banganapalli mangoes, hot-water treated for export markets." },
      { name: "Fresh Banana", description: "Cavendish bananas at export maturity, shipped in temperature-controlled reefers." },
      { name: "Fresh Grapes", description: "Thompson seedless and coloured grapes packed with SO2 pads for extended shelf life." },
      { name: "Fresh Pomegranate", description: "Bhagwa pomegranates with deep red arils, graded by count per box." },
      { name: "Tomato & Okra", description: "Firm tomatoes and tender okra in ventilated cartons for regional export." },
      { name: "Drumstick & Curry Leaf", description: "Fresh moringa drumsticks and curry leaves for ethnic markets, air-freighted." },
      { name: "Frozen Vegetables", description: "IQF peas, mixed vegetables and okra for year-round food-service supply." },
    ],
  },
  {
    id: "flours-atta",
    label: "Flours & Atta",
    blurb: "Chakki atta, besan, multigrain and specialty milled flours for retail and industry.",
    intro:
      "A complete milled-flour programme led by chakki-fresh whole wheat atta, plus besan, rice flour, millet flours, sattu and specialty blends. All grades are milled from cleaned grain, packed in food-grade laminates and shipped to FSSAI export norms with buyer branding available.",
    image: floursImg,
    origin: "India (Punjab, Haryana, Madhya Pradesh, Gujarat mills)",
    packing: [
      "500 g / 1 kg / 5 kg / 10 kg consumer packs",
      "25 kg / 50 kg PP, paper and laminate bags",
      "Buyer-branded BOPP printed packs",
      "20 ft & 40 ft FCL container loads",
    ],
    applications: [
      "Retail and private-label packing",
      "Flatbread, bakery and snack manufacture",
      "HORECA and institutional catering",
      "Ethnic and diaspora grocery trade",
    ],
    baseSpecs: [
      { label: "Moisture", value: "13.5% max" },
      { label: "Granulation", value: "Chakki / fine as per grade" },
      { label: "Foreign matter", value: "Nil (sieved & magnet separated)" },
      { label: "Additives", value: "No maida mix, no preservatives (atta grades)" },
      { label: "Certification", value: "FSSAI · Halal · export health certificate" },
      { label: "Shelf life", value: "6 months from milling" },
    ],
    highlights: [
      "Chakki-fresh milling with dispatch within days of grinding",
      "Private-label printing and multi-language packaging",
      "Nitrogen-flush and laminate options for long transit",
    ],
    items: [
      { name: "Whole Wheat Atta (Chakki Fresh)", description: "Stone-ground chakki atta with bran and germ retained — soft, puffing rotis and high fibre. Retail packs and 25/50 kg bulk export." },
      { name: "Sharbati Wheat Atta", description: "Premium MP Sharbati atta with a naturally sweet taste, golden tone and superior dough softness." },
      { name: "Multigrain Atta", description: "Blend of wheat, soya, oats, ragi, jowar and bajra for high-protein, low-GI flatbreads." },
      { name: "Whole Wheat Bran Atta (High Fibre)", description: "Extra-bran atta for diabetic and health-food ranges, milled coarse for slow digestion." },
      { name: "Maida (Refined Wheat Flour)", description: "Fine refined flour for breads, naan, pastry, noodles and confectionery." },
      { name: "Sooji / Rava (Semolina)", description: "Coarse and fine semolina for upma, halwa, idli and coating applications." },
      { name: "Besan (Gram Flour)", description: "Chana dal flour, bright yellow and finely milled, essential for pakora, sweets and batters." },
      { name: "Sattu Flour", description: "Roasted gram and barley flour used for high-protein drinks and traditional foods." },
      { name: "Rice Flour", description: "Fine white rice flour for idli, dosa, noodles, gluten-free baking and snacks." },
      { name: "Ragi (Finger Millet) Flour", description: "Calcium-rich ragi flour for porridge, rotis and infant nutrition ranges." },
      { name: "Jowar (Sorghum) Flour", description: "Naturally gluten-free jowar flour for flatbreads and health-food formulations." },
      { name: "Bajra (Pearl Millet) Flour", description: "Iron-rich bajra flour with an earthy taste, popular in winter flatbreads." },
      { name: "Maize / Corn Flour (Makki Atta)", description: "Yellow maize flour for makki roti, tortillas, snacks and bakery blends." },
      { name: "Corn Starch", description: "Refined maize starch for thickening, confectionery, textile and industrial use." },
      { name: "Barley (Jau) Flour", description: "Whole barley flour for health mixes, beverages and traditional preparations." },
      { name: "Soya Flour", description: "Defatted and full-fat soya flour at 48–52% protein for bakery and nutrition products." },
      { name: "Buckwheat (Kuttu) Flour", description: "Gluten-free kuttu flour supplied for fasting foods and health-food channels." },
      { name: "Water Chestnut (Singhara) Flour", description: "Traditional singhara flour used in fasting recipes and gluten-free cooking." },
      { name: "Coconut Flour", description: "High-fibre, gluten-free coconut flour for keto and bakery applications." },
      { name: "Idli / Dosa Batter Mix", description: "Pre-blended rice and urad mix for ready idli and dosa batter preparation." },
      { name: "Poha (Flattened Rice)", description: "Thick and thin poha flakes for breakfast foods and snack manufacture." },
      { name: "Vermicelli & Pasta", description: "Roasted vermicelli, macaroni and pasta shapes from durum and refined flour." },
      { name: "Papad & Wafers", description: "Urad, moong and rice papad plus fryums in cartons for retail and HORECA." },
      { name: "Bread Improver & Bakery Premix", description: "Bakery premixes and improvers supplied alongside flour programmes." },
    ],
  },
  {
    id: "jaggery-sweeteners",
    label: "Jaggery & Sweeteners",
    blurb: "Jaggery, honey, molasses and natural sweetener grades for food industry buyers.",
    intro:
      "Natural sweeteners from Indian cane and palm belts — jaggery blocks, cubes and powder, multi-flower honey, khandsari and molasses — supplied with lab analysis on moisture, sucrose and residue levels.",
    image: jaggeryImg,
    origin: "India (Uttar Pradesh, Maharashtra, Kolhapur, Tamil Nadu)",
    packing: [
      "250 g / 500 g / 1 kg retail packs & jars",
      "5 kg / 10 kg / 30 kg cartons and tins",
      "25 kg / 50 kg bags · 200 kg drums (liquid)",
    ],
    applications: [
      "Retail and health-food ranges",
      "Bakery, confectionery and beverage manufacture",
      "Ayurvedic and nutraceutical formulation",
      "Distillery and industrial fermentation (molasses)",
    ],
    baseSpecs: [
      { label: "Moisture", value: "As per grade (jaggery 5–8% max)" },
      { label: "Sucrose", value: "Declared per lot analysis" },
      { label: "Additives", value: "Chemical-free / natural grades available" },
      { label: "Residue", value: "Pesticide residue report on request" },
      { label: "Certification", value: "FSSAI · Organic (NPOP/NOP) on request" },
      { label: "Shelf life", value: "12 months in cool, dry storage" },
    ],
    highlights: [
      "Chemical-free and organic-certified jaggery available",
      "Lab analysis and residue reports per shipment",
      "Retail branding and jar packing supported",
    ],
    items: [
      { name: "Jaggery Blocks (Gur)", description: "Traditional cane jaggery blocks with rich caramel flavour, chemical-free grades available." },
      { name: "Jaggery Cubes", description: "Uniform cubes for retail and HORECA convenience, carton packed." },
      { name: "Jaggery Powder", description: "Free-flowing granulated jaggery, an easy sugar replacement for beverages and bakery." },
      { name: "Organic Jaggery", description: "NPOP/NOP certified organic jaggery for premium health-food and export brands." },
      { name: "Palm Jaggery", description: "Dark palm jaggery with a distinct mineral-rich flavour, popular in South Indian sweets." },
      { name: "Khandsari Sugar", description: "Unrefined, minimally processed sulphur-free sugar with natural colour." },
      { name: "Natural Honey (Multiflora)", description: "Filtered multi-flower honey tested for moisture, HMF and antibiotic residue." },
      { name: "Organic / Forest Honey", description: "Wild-harvested and organic-certified honey grades for premium retail lines." },
      { name: "Cane Molasses", description: "Blackstrap molasses in drums and flexi-tanks for distillery, feed and food use." },
      { name: "Liquid Glucose & Syrup", description: "Food-grade glucose syrup and sugar syrups in drums for confectionery and beverages." },
      { name: "Stevia & Natural Sweetener", description: "Stevia leaf extract and blended natural sweeteners for zero-sugar formulations." },
      { name: "Date Paste & Syrup", description: "Date-based sweeteners for bakery, energy bars and dairy applications." },
    ],
  },
  {
    id: "tea-coffee",
    label: "Tea & Coffee",
    blurb: "Assam, Nilgiri and Darjeeling teas plus Arabica and Robusta coffee.",
    intro:
      "Tea and coffee sourced through auction and estate-direct channels — CTC and orthodox black teas, green and herbal blends, plus washed Arabica and cherry Robusta coffee in green bean, roasted and instant forms.",
    image: teaCoffeeImg,
    origin: "India (Assam, Nilgiri, Darjeeling, Coorg, Chikmagalur) · Vietnam · Sri Lanka",
    packing: [
      "100 g / 250 g / 500 g / 1 kg retail packs",
      "20 kg / 30 kg / 50 kg paper sacks & tea chests",
      "60 kg jute bags (green coffee)",
    ],
    applications: [
      "Retail and private-label blending",
      "HORECA, café and vending supply",
      "Instant tea/coffee and RTD manufacture",
      "Re-export and blending houses",
    ],
    baseSpecs: [
      { label: "Grade", value: "As per catalogue / cup profile" },
      { label: "Moisture", value: "5–8% max" },
      { label: "Liquor / cup score", value: "Sample approval before shipment" },
      { label: "Residue", value: "Pesticide residue within EU MRL on request" },
      { label: "Certification", value: "Tea Board / Coffee Board registered supply" },
      { label: "Shelf life", value: "18–24 months" },
    ],
    highlights: [
      "Pre-shipment samples and cupping approval",
      "Blending to buyer cup profile",
      "Tea Board and Coffee Board documentation",
    ],
    items: [
      { name: "Assam CTC Tea", description: "Strong, malty CTC granules with brisk liquor — the workhorse grade for milk tea markets." },
      { name: "Assam Orthodox Tea", description: "Long-leaf orthodox Assam with bright colour and full body for premium blends." },
      { name: "Darjeeling Tea", description: "First and second flush Darjeeling with muscatel character for specialty retail." },
      { name: "Nilgiri Tea", description: "Fragrant, brisk South Indian tea that stays clear when iced — favoured for RTD." },
      { name: "Green Tea", description: "Whole-leaf and sencha-style green tea, plus tea bag cut for retail packing." },
      { name: "Masala Chai Blend", description: "Black tea blended with cardamom, ginger, clove and cinnamon for spiced chai." },
      { name: "Herbal & Lemongrass Tea", description: "Caffeine-free herbal infusions including lemongrass, tulsi and chamomile blends." },
      { name: "Tea Bag Dust & Fannings", description: "Fine dust and fannings grades for tea bag and vending applications." },
      { name: "Arabica Green Coffee Beans", description: "Washed and natural Arabica from Coorg and Chikmagalur estates, screen 15/17." },
      { name: "Robusta Green Coffee Beans", description: "Cherry and parchment Robusta with strong body and crema for espresso blends." },
      { name: "Roasted Coffee Beans", description: "Medium and dark roast beans, roast-to-order with valve-pack options." },
      { name: "Ground Coffee & Filter Blend", description: "Coffee-chicory filter blends and ground coffee for retail and café supply." },
      { name: "Instant Coffee Powder", description: "Spray-dried and agglomerated instant coffee in bulk and retail packing." },
      { name: "Coffee Husk & Chicory", description: "Roasted chicory and coffee husk for blending and beverage manufacture." },
    ],
  },
  {
    id: "herbal-ayurvedic",
    label: "Herbal & Ayurvedic",
    blurb: "Herbal powders, extracts and botanicals for nutraceutical and cosmetic buyers.",
    intro:
      "Dried botanicals, herbal powders and standardised extracts sourced from cultivated and wild-harvested belts. Every consignment ships with a certificate of analysis covering assay, heavy metals and microbiology.",
    image: herbalImg,
    origin: "India (Rajasthan, Madhya Pradesh, Gujarat, Kerala)",
    packing: [
      "1 kg / 5 kg foil laminate pouches",
      "20 kg / 25 kg HDPE drums and paper bags",
      "Palletised container loads",
    ],
    applications: [
      "Nutraceutical and supplement manufacture",
      "Ayurvedic and herbal formulation",
      "Cosmetic and personal-care industry",
      "Herbal tea and functional beverages",
    ],
    baseSpecs: [
      { label: "Assay", value: "Standardised on active marker where applicable" },
      { label: "Moisture", value: "8–10% max" },
      { label: "Mesh size", value: "60 / 80 / 100 mesh as required" },
      { label: "Heavy metals", value: "Within permissible limits (COA supplied)" },
      { label: "Microbiology", value: "Total plate count & pathogen tested" },
      { label: "Certification", value: "FSSAI · Organic · GMP plant options" },
    ],
    highlights: [
      "Steam-sterilised and organic-certified options",
      "Full COA with heavy metal and micro reports",
      "Custom mesh, extract ratio and private label",
    ],
    items: [
      { name: "Psyllium Husk (Isabgol)", description: "99% pure psyllium husk and powder — a leading Indian fibre export for digestive health." },
      { name: "Moringa Leaf Powder", description: "Shade-dried moringa leaf powder rich in vitamins, for supplements and beverages." },
      { name: "Ashwagandha Root & Extract", description: "Withania somnifera roots and withanolide-standardised extracts for adaptogen products." },
      { name: "Turmeric Extract (Curcumin)", description: "95% curcuminoid extract for nutraceutical and functional food formulations." },
      { name: "Amla (Indian Gooseberry)", description: "Dried amla pieces, powder and extract high in natural vitamin C." },
      { name: "Neem Leaf & Powder", description: "Dried neem leaf and powder for cosmetic, agricultural and herbal applications." },
      { name: "Tulsi (Holy Basil)", description: "Dried tulsi leaf and powder for herbal teas and immunity formulations." },
      { name: "Brahmi & Shatavari", description: "Traditional Ayurvedic herbs supplied whole or powdered for formulation houses." },
      { name: "Aloe Vera Powder & Gel", description: "Spray-dried aloe powder and gel concentrate for cosmetics and beverages." },
      { name: "Henna (Mehndi) Powder", description: "Triple-sifted Rajasthan henna powder with high lawsone content for cosmetic use." },
      { name: "Senna Leaves & Pods", description: "Graded senna leaves and pods for herbal laxative and pharma applications." },
      { name: "Guar Gum Powder", description: "Food and industrial grade guar gum for thickening, textile and oilfield use." },
      { name: "Stevia Leaves", description: "Dried stevia leaves and leaf powder for natural sweetener production." },
      { name: "Herbal Essential Oils", description: "Steam-distilled oils including eucalyptus, lemongrass, mint and neem oil." },
      { name: "Dehydrated Onion & Garlic", description: "Dehydrated flakes, granules and powder with low moisture for seasoning blends." },
      { name: "Dehydrated Vegetable Powders", description: "Spray and drum-dried tomato, beetroot, spinach and moringa powders." },
    ],
  },
  {
    id: "frozen-seafood",
    label: "Frozen Foods & Seafood",
    blurb: "IQF vegetables, frozen seafood and halal frozen meat in reefer loads.",
    intro:
      "Frozen and chilled programmes handled through approved processing plants — IQF fruits and vegetables, block and IQF seafood, and halal-certified frozen buffalo meat and poultry, all shipped in temperature-logged reefer containers with veterinary and health certification. Supplied strictly within Indian and destination-country export regulations.",
    image: frozenImg,
    origin: "India (Andhra Pradesh, Gujarat, Kerala, Maharashtra approved plants)",
    packing: [
      "500 g / 1 kg retail printed pouches",
      "10 kg master cartons with inner liners",
      "Palletised 20 ft / 40 ft reefer container loads",
    ],
    applications: [
      "Retail frozen aisle and private label",
      "HORECA, QSR and catering supply",
      "Further processing and ready meals",
      "Institutional and ship-chandling supply",
    ],
    baseSpecs: [
      { label: "Process", value: "IQF / block frozen, blast frozen at −35 °C" },
      { label: "Storage", value: "−18 °C or below throughout transit" },
      { label: "Glazing", value: "As per buyer specification (seafood)" },
      { label: "Microbiology", value: "Pathogen tested, plant COA per lot" },
      { label: "Certification", value: "EIA / APEDA · Halal · veterinary health certificate" },
      { label: "Shelf life", value: "18–24 months at −18 °C" },
    ],
    highlights: [
      "Export-approved and HACCP-certified plants only",
      "Halal slaughter certification for meat lines",
      "Temperature data-logger in every reefer",
    ],
    items: [
      { name: "Frozen Vannamei Shrimp", description: "HOSO, HLSO, PD and PUD vannamei shrimp graded by count, IQF or block frozen." },
      { name: "Frozen Black Tiger Prawn", description: "Premium black tiger prawns in retail and bulk grades for HORECA buyers." },
      { name: "Frozen Fish Fillets", description: "Skinless boneless fillets of ribbonfish, tilapia, pangasius and reef fish." },
      { name: "Frozen Whole Fish", description: "Whole round mackerel, sardine, pomfret and croaker in block-frozen cartons." },
      { name: "Frozen Cuttlefish & Squid", description: "Whole cleaned squid, tubes, rings and cuttlefish fillets, IQF packed." },
      { name: "Frozen Crab & Crab Meat", description: "Crab cuts and pasteurised crab meat for food-service and processing." },
      { name: "Dried Fish & Fishmeal", description: "Sun-dried fish and protein fishmeal for food and aquafeed markets." },
      { name: "Halal Frozen Buffalo Meat", description: "Boneless deglanded buffalo meat from APEDA-registered halal abattoirs, cut to buyer spec." },
      { name: "Halal Frozen Poultry", description: "Whole chicken, griller cuts and boneless poultry from halal-certified plants." },
      { name: "Frozen Peas & Corn", description: "IQF green peas and sweet corn kernels graded by sieve size." },
      { name: "Frozen Okra & Mixed Vegetables", description: "IQF cut okra, mixed vegetables and Indian vegetable blends for ethnic retail." },
      { name: "Frozen Mango Pulp & Fruit", description: "Alphonso and Totapuri mango pulp, IQF mango chunks and tropical fruit blends." },
      { name: "Frozen Paratha & Snacks", description: "Frozen parathas, samosas and Indian snacks for retail and QSR channels." },
      { name: "Frozen French Fries & Potato", description: "Coated and plain fries, wedges and hash browns in food-service cartons." },
    ],
  },
  {
    id: "salt-minerals",
    label: "Salt & Minerals",
    blurb: "Edible and industrial salt plus agro-minerals in bulk and retail packing.",
    intro:
      "Solar and vacuum-evaporated salt from Gujarat and Rajasthan works, in edible, industrial and de-icing grades, together with agro-minerals and soil conditioners loaded in bags, jumbo bags or bulk vessels.",
    image: saltImg,
    origin: "India (Gujarat — Kandla, Mundra, Rajasthan mines)",
    packing: [
      "500 g / 1 kg retail pouches",
      "25 kg / 50 kg PP bags · 1000 kg jumbo bags",
      "Bulk vessel and container shipments",
    ],
    applications: [
      "Food processing and retail table salt",
      "Chlor-alkali and chemical industry",
      "Water treatment and de-icing",
      "Agriculture, feed and soil conditioning",
    ],
    baseSpecs: [
      { label: "NaCl content", value: "97–99.7% by grade (dry basis)" },
      { label: "Moisture", value: "0.5–3% max by grade" },
      { label: "Insolubles", value: "0.1–0.5% max" },
      { label: "Iodine", value: "30 ppm at production (iodised grades)" },
      { label: "Granulation", value: "Powder / crystal / coarse as required" },
      { label: "Inspection", value: "SGS or Geo-Chem analysis at load port" },
    ],
    highlights: [
      "Edible, industrial and de-icing specifications",
      "Bulk vessel and jumbo bag loading experience",
      "Third-party analysis with every shipment",
    ],
    items: [
      { name: "Refined Iodised Table Salt", description: "Free-flowing iodised salt at 99.5% NaCl min for retail and food processing." },
      { name: "Industrial Salt", description: "Solar-washed industrial salt for chlor-alkali, textile and chemical plants." },
      { name: "Crude / Raw Sea Salt", description: "Solar-evaporated crude salt in bulk for refining and industrial use." },
      { name: "Rock Salt (Sendha Namak)", description: "Pink Himalayan-type rock salt in crystals, granules and powder for food and spa use." },
      { name: "Black Salt (Kala Namak)", description: "Traditional black salt with sulphurous aroma for chaat masala and seasoning blends." },
      { name: "Low Sodium Salt", description: "Potassium-blended low sodium salt for health-focused retail brands." },
      { name: "De-icing Salt", description: "Coarse de-icing salt for winter road maintenance, bulk and jumbo bag supply." },
      { name: "Gypsum (Agricultural)", description: "Natural and mineral gypsum for soil conditioning and cement applications." },
      { name: "Bentonite Clay", description: "Sodium and calcium bentonite for foundry, drilling and feed binder use." },
      { name: "Dolomite & Limestone Powder", description: "Ground dolomite and limestone for agriculture, glass and construction industries." },
      { name: "Mineral Mixture (Feed Grade)", description: "Chelated mineral mixtures for cattle and poultry nutrition programmes." },
      { name: "Bio-Fertilisers & Soil Conditioners", description: "Organic manure, vermicompost and bio-fertiliser blends for agri buyers." },
    ],
  },
  {
    id: "heavy-machinery",
    label: "Heavy Machinery",
    blurb: "New and refurbished earthmoving, construction and farm machinery.",
    intro:
      "Sourcing, inspection and export of heavy machinery — earthmoving, construction, material-handling and agricultural equipment — with pre-shipment inspection, lashing and RoRo or flat-rack shipping arranged end to end.",
    image: machineryImg,
    origin: "India · Japan · Korea · China · Europe (new & used)",
    packing: [
      "RoRo vessel shipment",
      "Flat-rack and open-top containers",
      "Break-bulk for oversized units",
      "Dismantling and crating where required",
    ],
    applications: [
      "Infrastructure and road projects",
      "Mining and quarrying",
      "Ports, yards and material handling",
      "Farm mechanisation programmes",
    ],
    baseSpecs: [
      { label: "Condition", value: "New or inspected used, hours certified" },
      { label: "Inspection", value: "Third-party pre-shipment inspection" },
      { label: "Documentation", value: "Invoice, packing list, BL, COO" },
      { label: "Shipping", value: "RoRo / flat-rack / break-bulk" },
      { label: "Spares", value: "Spare-part packages on request" },
      { label: "Trade terms", value: "FOB / CFR / CIF / DAP" },
    ],
    highlights: [
      "Machine history and hour-meter verification",
      "Load-port lashing and securing supervised",
      "Spares and service support coordinated",
    ],
    items: [
      { name: "Excavators", description: "Crawler and wheeled excavators from 2 to 45 tonne, new and low-hour used units, inspected before shipment." },
      { name: "Backhoe Loaders", description: "Versatile backhoe loaders for site excavation, loading and utility work." },
      { name: "Wheel Loaders", description: "Front-end wheel loaders from 1.5 to 5 m³ bucket capacity for bulk material handling." },
      { name: "Bulldozers", description: "Crawler dozers for land clearing, levelling and heavy push work." },
      { name: "Motor Graders", description: "Motor graders for road formation, levelling and maintenance contracts." },
      { name: "Road Rollers & Compactors", description: "Vibratory soil and tandem asphalt rollers for road and embankment compaction." },
      { name: "Tower & Mobile Cranes", description: "Tower, truck-mounted and crawler cranes matched to project lifting capacity." },
      { name: "Forklifts & Telehandlers", description: "Diesel and electric forklifts plus telescopic handlers for yards and warehouses." },
      { name: "Concrete Batching Plants", description: "Stationary and mobile batching plants with mixers, silos and control systems." },
      { name: "Transit Mixers & Pumps", description: "Truck-mounted transit mixers and concrete boom / line pumps." },
      { name: "Crushing & Screening Plants", description: "Jaw, cone and impact crushers with screening units for aggregate production." },
      { name: "Tractors", description: "25–90 HP agricultural tractors with 2WD and 4WD options for farm and haulage use." },
      { name: "Combine Harvesters", description: "Self-propelled harvesters for wheat, paddy and maize, with header options." },
      { name: "Farm Implements", description: "Rotavators, ploughs, seed drills, balers and threshers for mechanised farming." },
      { name: "Tippers & Dump Trucks", description: "Rigid tippers and articulated dump trucks for site and mine haulage." },
    ],
  },
  {
    id: "industrial-equipment",
    label: "Industrial Equipment",
    blurb: "Power, processing and workshop equipment sourced for global projects.",
    intro:
      "Industrial equipment and spares procured against buyer technical specification — power generation, pumping, food-processing lines, workshop tools and safety gear — with factory inspection and consolidated export packing.",
    image: equipmentImg,
    origin: "India · China · Europe · Turkey · UAE",
    packing: [
      "Export-grade wooden crates and pallets",
      "Fumigated ISPM-15 packing",
      "Consolidated LCL and FCL shipments",
    ],
    applications: [
      "Manufacturing and processing plants",
      "Construction and infrastructure sites",
      "Agro-processing and food factories",
      "Utilities, mining and marine",
    ],
    baseSpecs: [
      { label: "Specification", value: "Built to buyer technical datasheet" },
      { label: "Standards", value: "ISO / CE / IEC compliant options" },
      { label: "Inspection", value: "Factory acceptance test on request" },
      { label: "Warranty", value: "Manufacturer warranty passed through" },
      { label: "Documentation", value: "Manuals, test certificates, spares list" },
      { label: "Trade terms", value: "FOB / CFR / CIF / DAP" },
    ],
    highlights: [
      "Technical evaluation against buyer specification",
      "Consolidated multi-vendor shipments",
      "Commissioning and spares support coordinated",
    ],
    items: [
      { name: "Diesel Generator Sets", description: "Silent and open-type gensets from 10 kVA to 2000 kVA with AMF panels and spares." },
      { name: "Industrial Pumps", description: "Centrifugal, submersible and dewatering pumps for water, irrigation and process duty." },
      { name: "Air Compressors", description: "Screw and reciprocating compressors with dryers and receivers for workshop and plant use." },
      { name: "Electric Motors & Gearboxes", description: "TEFC induction motors and geared units across standard frames and ratings." },
      { name: "Transformers & Switchgear", description: "Distribution transformers, panels and switchgear built to IEC standards." },
      { name: "Solar Modules & Inverters", description: "PV modules, inverters, mounting structures and balance-of-system for solar projects." },
      { name: "Rice & Flour Milling Plants", description: "Complete rice milling, flour milling and grading lines with installation support." },
      { name: "Oil Expellers & Refinery Units", description: "Seed crushing expellers and edible-oil refining plants for agro-processing investors." },
      { name: "Packaging & Filling Machines", description: "Form-fill-seal, bagging, bottling and labelling machines for food and FMCG plants." },
      { name: "Cold Storage Equipment", description: "Refrigeration units, cold rooms and blast freezers for perishable supply chains." },
      { name: "Welding & Workshop Tools", description: "Welding machines, power tools, lathes and workshop consumables." },
      { name: "Safety & PPE Supplies", description: "Helmets, gloves, boots, harnesses and site safety equipment in bulk cartons." },
      { name: "Pipes, Valves & Fittings", description: "MS, GI, HDPE and stainless pipes with valves and fittings to project BOQ." },
      { name: "Construction Materials", description: "Cement, TMT steel bars, scaffolding and formwork supplied for project requirements." },
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
