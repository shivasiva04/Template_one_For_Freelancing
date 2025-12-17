// 1. Add Scan, BrainCircuit, TrendingUp to the imports
import { Zap, Dna, Flame, Activity, ArrowUpRight, Smile, Infinity, Scan, BrainCircuit, TrendingUp, Check, X, Smartphone, Moon, ArrowRight, Plus, User, Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const CLOUDINARY_CONFIG = {
  CLOUD_NAME: "db8d2qnta", 
  BASE_URL: "https://res.cloudinary.com/db8d2qnta/image/upload/f_auto,q_auto/", 
};

export const BRAND = {
  name: "OLYMPUS",
};

export const NAV_LINKS = [
  { label: "Protocols", href: "#protocols" },
  { label: "Process", href: "#process" },
  { label: "Performance", href: "#performance" },
  { label: "Therapies", href: "#therapies" },
  { label: "Membership", href: "#membership" },
];

export const HERO_CONTENT = {
  tagline: "Redefine Your Limits", 
  tagIcon: Zap,
  headline: {
    start: "Precision Health",
    highlight: "for Peak Human \nPerformance.", 
  },
  subtext: "Unlock your body's full potential with medically supervised hormone therapy and longevity protocols. Science-backed care for those who refuse to slow down.",
  ctaPrimary: "Start Your Journey",
  ctaSecondary: "View Plans",
};

export const STATS = [
  { value: "5,000+", description: "Clients optimizing their health worldwide." },
  { value: "100%", description: "Clinician-led protocols & safety monitoring." }
];

export const ASSETS = {
  bgImage: `${CLOUDINARY_CONFIG.BASE_URL}project-three-image1`,
};

export const SERVICES_CONTENT = {
  sectionTitle: "Our Expertise",
  headline: "Precision Protocols.",
  description: "Three pillars of human optimization, engineered to work in synergy.",
  
  cards: [
    {
      id: "hormone",
      title: "Hormone Health",
      subtitle: "TRT & HRT Therapies",
      description: "Reclaim your vitality with medically supervised hormone optimization tailored to your biomarkers.",
      icon: Activity, 
      gradient: "from-blue-900/40 to-cyan-900/10", 
    },
    {
      id: "weight",
      title: "Metabolic Reset",
      subtitle: "Medical Weight Loss",
      description: "Shed fat and preserve lean muscle using cutting-edge GLP-1 agonists and metabolic programming.",
      icon: Flame, 
      gradient: "from-orange-900/40 to-red-900/10",
    },
    {
      id: "longevity",
      title: "Longevity",
      subtitle: "Cellular Repair",
      description: "Extend your healthspan with peptide therapies and anti-aging protocols to slow decline.",
      icon: Infinity, 
      gradient: "from-purple-900/40 to-indigo-900/10",
    }
  ]
};

// --- NEW PROCESS SECTION DATA ---
export const PROCESS_CONTENT = {
  sectionTitle: "The Blueprint",
  headline: "Precision",
  highlight: "Execution",
  steps: [
    {
      id: "01",
      title: "Biometric Audit",
      description: "We begin with a comprehensive analysis of your genetic markers and metabolic baseline.",
      icon: Scan,
    },
    {
      id: "02",
      title: "Synthesize Data",
      description: "Your data is modeled into a custom performance architecture unique to your physiology.",
      icon: BrainCircuit,
    },
    {
      id: "03",
      title: "Active Protocol",
      description: "Deployment of the training and nutrition stimulus. Precision execution is required.",
      icon: Activity,
    },
    {
      id: "04",
      title: "Adaptive Scaling",
      description: "Real-time feedback loops optimize the program as your biology adapts and evolves.",
      icon: TrendingUp,
    },
  ]
};




export const TECH_CONTENT = {
  sectionTitle: "The Interface",
  headline: " biological",
  highlight: "Intelligence",
  description: "Your physiology, decoded in real-time. Track biomarkers, manage protocols, and communicate with your clinical team instantly.",
  
  features: [
    {
      title: "Live Biometrics",
      desc: "Syncs with Oura, Whoop, and Apple Health.",
      icon: Activity
    },
    {
      title: "Protocol Management",
      desc: "Daily dosage reminders and nutrition tracking.",
      icon: Smartphone
    }
  ],

  // Mock Data for the "Phone Screen"
  appScreen: {
    user: "Alex Mercer",
    score: 92,
    scoreLabel: "Optimization Score",
    stats: [
      { label: "Free T", value: "680", unit: "ng/dL", trend: "+12%" },
      { label: "Sleep", value: "7.5", unit: "hrs", trend: "+5%" },
      { label: "HRV", value: "42", unit: "ms", trend: "+3%" },
    ]
  }
};


export const MEMBERSHIP_CONTENT = {
  sectionTitle: "Join the Elite",
  headline: "Unlock Human",
  highlight: "Potential",
  description: "Select the protocol that fits your physiology and performance goals.",
  
  // Toggle Labels
  cycles: {
    monthly: "Monthly",
    yearly: "Yearly (Save 20%)"
  },

  plans: [
    {
      id: "essential",
      name: "Essential",
      price: { monthly: "$199", yearly: "$159" },
      description: "Foundational hormone optimization and quarterly bloodwork analysis.",
      features: [
        "Comprehensive Blood Panel",
        "MD Consultation (Quarterly)",
        "TRT/HRT Prescription",
        "Digital Health Dashboard"
      ],
      notIncluded: ["Nutrition Programming", "Peptide Therapy"],
      cta: "Get Started",
      popular: false
    },
    {
      id: "performance",
      name: "Performance",
      price: { monthly: "$349", yearly: "$279" },
      description: "Full-stack optimization including peptides and metabolic tuning.",
      features: [
        "Everything in Essential",
        "Peptide Therapy Access",
        "Nutrition & Macro Planning",
        "24/7 Care Team Chat",
        "Advanced Biomarker Tracking"
      ],
      notIncluded: [],
      cta: "Start Performance",
      popular: true // This will trigger the glowing effect
    },
    {
      id: "elite",
      name: "Elite",
      price: { monthly: "$899", yearly: "$719" },
      description: "Concierge medicine with genomic analysis and longevity protocols.",
      features: [
        "Everything in Performance",
        "Full Genome Sequencing",
        "Longevity Protocol (Rapamycin)",
        "Weekly Clinician Check-ins",
        "Priority Lab Scheduling",
        "Wearable Data Integration"
      ],
      notIncluded: [],
      cta: "Apply for Elite",
      popular: false
    }
  ]
};


export const AUTHORITY_CONTENT = {
  sectionTitle: "The Authority",
  headline: "Engineered by",
  highlight: "Experts",
  
  // ZONE 1: THE TEAM
  team: [
    {
      id: "01",
      name: "Dr. Elena Vance",
      role: "Chief Medical Officer",
      credentials: "MD, PhD (Endocrinology)",
      specialty: "Hormone Optimization",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
      signature: "Elena V." 
    },
    {
      id: "02",
      name: "Dr. Marcus Thorne",
      role: "Head of Performance",
      credentials: "DPT, CSCS",
      specialty: "Biomechanics & Recovery",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
      signature: "M. Thorne"
    },
    {
      id: "03",
      name: "Sarah Lin",
      role: "Nutrigenomics Lead",
      credentials: "RD, MSc (Genetics)",
      specialty: "Metabolic Programming",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop",
      signature: "S. Lin"
    },
    {
      id: "04",
      name: "James Cole",
      role: "Longevity Researcher",
      credentials: "PhD (Cellular Biology)",
      specialty: "Peptide Therapies",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      signature: "J. Cole"
    }
  ],

  // ZONE 2: RESULTS CAROUSEL
  resultsHeadline: "Clinical",
  resultsHighlight: "Outcomes",
  results: [
    {
      id: "CASE-892",
      metric: "Total Testosterone",
      change: "+145%",
      timeframe: "4 Months",
      note: "Subject reported 2x energy levels and improved cognitive clarity.",
      graph: [30, 45, 60, 85, 95] // Mock data for mini-graph
    },
    {
      id: "CASE-741",
      metric: "Deep Sleep Duration",
      change: "+52 min",
      timeframe: "6 Weeks",
      note: "Optimization of circadian rhythm via peptide protocol.",
      graph: [20, 35, 40, 45, 60]
    },
    {
      id: "CASE-922",
      metric: "Body Fat Mass",
      change: "-18 lbs",
      timeframe: "3 Months",
      note: "Metabolic reset using GLP-1 agonists and macro planning.",
      graph: [80, 70, 60, 50, 40] 
    },
    {
      id: "CASE-104",
      metric: "VO2 Max",
      change: "+12%",
      timeframe: "5 Months",
      note: "Cardiovascular efficiency improved significantly.",
      graph: [40, 42, 45, 48, 52]
    }
  ]
};


// Footer

export const FOOTER_CONTENT = {
  brand: {
    logo: "CORE",
    highlight: "SYSTEMS",
    description: "Architecting the future of human performance through precision data and biological optimization.",
  },
  links: [
    {
      title: "Platform",
      items: [
        { label: "Biometric Audit", href: "#" },
        { label: "Performance Architecture", href: "#" },
        { label: "Adaptive Protocols", href: "#" },
        { label: "Neural Integration", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Research", href: "#" },
        { label: "Methodology", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  socials: [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "Github" },
  ],
  newsletter: {
    title: "Intelligence Briefing",
    placeholder: "Enter email for updates",
    button: "Subscribe",
  },
  copyright: `© ${new Date().getFullYear()} CORE SYSTEMS. All rights reserved.`,
};