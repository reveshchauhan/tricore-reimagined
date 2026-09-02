import civilImg from "@/assets/service-civil.jpg";
import solarImg from "@/assets/service-solar.jpg";
import itImg from "@/assets/service-it.jpg";
import tradeImg from "@/assets/service-trade.jpg";
import contractImg from "@/assets/service-contract.jpg";
import tradingImg from "@/assets/service-trading.jpg";

export type Service = {
  slug: string;
  index: string;
  eyebrow: string;
  name: string;
  heroTitle: string;
  heroLead: string;
  cta: string;
  summary: string;
  image: string;
  overview: string;
  capabilities: string[];
};

export const services: Service[] = [

  {
    slug: "import-export",
    index: "01",
    eyebrow: "Import & Export",
    name: "Import-Export Services",
    heroTitle: "Global Trade Solutions Connecting Markets Worldwide",
    heroLead:
      "Seamless import and export services with expertise in logistics, customs clearance and international trade regulations to expand your business globally.",
    cta: "Contact Us",
    summary:
      "Streamlined import-export solutions with logistics expertise, customs clearance and international trade management.",
    image: tradeImg,
    overview:
      "We connect global buyers with quality Indian produce and industrial goods — handling sourcing, inspection, documentation and shipment so every consignment lands as promised.",
    capabilities: [
      "Global sourcing and dependable procurement",
      "Export documentation and customs clearance",
      "Container booking, freight and logistics",
      "Pre-shipment inspection and quality checks",
      "Packing and labelling to buyer specification",
      "End-to-end trade support and coordination",
    ],
  },

  {
    slug: "trading",
    index: "02",
    eyebrow: "Trading Activities",
    name: "Trading Activities",
    heroTitle: "Strategic Trading Solutions For Business Growth",
    heroLead:
      "Comprehensive trading services in commodities, industrial supplies and equipment with competitive pricing, quality assurance and timely delivery.",
    cta: "Get Started",
    summary:
      "Comprehensive trading in commodities, industrial supplies and equipment with competitive pricing and quality assurance.",
    image: tradingImg,
    overview:
      "Our trading desk works on transparent commercials and verified supply lines across agricultural commodities, industrial raw materials and equipment.",
    capabilities: [
      "Agricultural commodity trading",
      "Industrial raw materials and supplies",
      "Equipment sourcing and supply",
      "Competitive, transparent pricing",
      "Quality assurance before dispatch",
      "Reliable delivery scheduling",
    ],
  },

  /*{
    slug: "civil-construction",
    index: "03",
    eyebrow: "Civil Construction",
    name: "Civil Construction",
    heroTitle: "Building Strong Foundations With Expert Civil Construction",
    heroLead:
      "With 10+ years of experience, we deliver durable, high-quality construction solutions for residential and commercial projects — on time and with complete reliability.",
    cta: "Get a Quote",
    summary:
      "Comprehensive civil construction services for infrastructure development, building projects and structural engineering with full quality assurance.",
    image: civilImg,
    overview:
      "From ground works to structural completion, our civil teams handle planning, execution and handover with disciplined site management. Every project runs on documented method statements, verified materials and transparent progress reporting.",
    capabilities: [
      "Residential and commercial building construction",
      "Infrastructure and road works",
      "RCC structures, foundations and earthworks",
      "Site supervision and project management",
      "Quality control, testing and documentation",
      "Renovation, retrofitting and finishing works",
    ],
  },
  {
    slug: "solar-plant-systems",
    index: "04",
    eyebrow: "Solar Energy Solutions",
    name: "Solar Plant Systems",
    heroTitle: "Power Your Future With Advanced Solar Technology",
    heroLead:
      "We deliver customised solar plant services that reduce energy costs, boost efficiency and support long-term sustainable growth for your business.",
    cta: "Explore Solutions",
    summary:
      "Design and installation of efficient, renewable solar plant systems to power your business and cut energy costs sustainably.",
    image: solarImg,
    overview:
      "We size, engineer and commission rooftop and ground-mounted solar plants matched to your load profile and payback expectations, then keep them performing with structured operations and maintenance.",
    capabilities: [
      "Feasibility studies and load analysis",
      "Rooftop and ground-mounted plant design",
      "EPC execution and grid synchronisation",
      "Net-metering and approvals support",
      "Performance monitoring dashboards",
      "Preventive operations and maintenance",
    ],
  },
  {
    slug: "it-support",
    index: "05",
    eyebrow: "IT Tech Support",
    name: "IT Support Services",
    heroTitle: "Reliable IT Solutions For Your Digital Success",
    heroLead:
      "Comprehensive IT support including network management, cybersecurity, cloud solutions and 24/7 technical assistance to keep your business running smoothly.",
    cta: "Learn More",
    summary:
      "Reliable IT support, cybersecurity, cloud solutions and round-the-clock technical assistance for smooth business operations.",
    image: itImg,
    overview:
      "We act as an extension of your team — securing endpoints, maintaining networks and resolving incidents against clear response targets, so technology stops being a bottleneck.",
    capabilities: [
      "Managed IT and helpdesk support",
      "Network design, setup and monitoring",
      "Cybersecurity assessment and hardening",
      "Cloud migration and workspace management",
      "Backup, recovery and business continuity",
      "24/7 incident response",
    ],
  },*/
  
  /*{
    slug: "work-contract",
    index: "06",
    eyebrow: "Contract Services",
    name: "Work Contract Services",
    heroTitle: "Professional Workforce Management Solutions",
    heroLead:
      "Expert contract staffing and workforce management providing skilled professionals for your projects with flexibility, efficiency and complete compliance.",
    cta: "Hire Now",
    summary:
      "Professional workforce management and contract staffing solutions providing skilled professionals for your projects.",
    image: contractImg,
    overview:
      "We mobilise vetted skilled and semi-skilled manpower with statutory compliance handled end to end, so your project keeps pace without administrative overhead.",
    capabilities: [
      "Skilled and semi-skilled manpower supply",
      "Site-based workforce supervision",
      "Statutory and labour-law compliance",
      "Payroll and attendance administration",
      "Safety induction and training",
      "Flexible short and long-term contracts",
    ],
  }*/
  
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
