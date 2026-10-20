import type { Dict } from "./de";

export const en: Dict = {
  money: {
    yearly: "€399",
    monthly: "€33",
    lost: "€10,000 to €20,000",
  },

  meta: {
    titleDefault: "medIQ lab: study system and community for medical school",
    titleTemplate: "%s · medIQ lab",
    description:
      "Study community for medical students in Germany and across the EU: workshops on study strategies and resilience, weekly live events and study sheets.",
    ogTitle: "medIQ lab: study community for medical students",
    ogDescription:
      "Study system and community for medical students in Germany and abroad: workshops, video series, study sheets and weekly live events on Skool.",
  },

  common: {
    join: "Secure your spot",
    toHome: "Go to homepage",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNav: "Main navigation",
    skip: "Skip to content",
    language: "Language",
    spots: "Only {spots} spots left",
  },

  nav: {
    methode: "Method",
    programm: "Programme",
    team: "Team",
    ueber: "About us",
    faq: "FAQ",
    kontakt: "Contact",
  },

  mobileBar: { programm: "Programme" },

  footer: {
    tagline: "master your exams. become a physician.",
    blurb: "The learning ecosystem for medical students. Study smarter, pass with confidence, and avoid expensive detours.",
    pages: "Pages",
    start: "Get started",
    joinCommunity: "Join the community →",
    programmPreise: "Programme & pricing",
    legal: "Legal",
    impressum: "Legal notice",
    datenschutz: "Privacy policy",
    rights: "© 2026 medIQ lab. All rights reserved.",
    disclaimer: "medIQ lab is not a substitute for official university teaching. Results vary from person to person.",
  },

  hero: {
    eyebrow: "For medical students in Germany & abroad",
    title: "Study smarter.\nPass with confidence.\n*No lost years.*",
    lead: "Study methods grounded in learning research, a clear exam strategy, our own AI study app and a community that has your back. So that an expensive repeat year never gets in your way, whether you study in Germany or abroad.",
    ctaMethod: "How the method works",
    note: "For medical students in Germany & across the EU · {yearly} per year, everything included · join via Skool",
    cardTitle: "Method instead of\nrote memorisation",
    cardBody: "Active recall & spaced repetition, grounded in learning science.",
  },

  problemTeaser: {
    eyebrow: "The problem",
    title: "It's not because you *study too little.*",
    lead: "Most people don't fail for lack of effort, but for lack of a *system.*",
    pains: [
      { lead: "Buried under the sheer volume", rest: ", and nobody shows you what's actually examined." },
      { lead: "Read, highlight, forget again", rest: ". Effort without a system simply evaporates." },
      { lead: "One failed attempt has consequences", rest: ": a resit, more pressure, and at worst a repeat year, which can easily cost {lost} at private and foreign universities." },
    ],
    quote: "Not a talent problem. A *method problem.*",
    cta: "Why this happens",
  },

  methodTeaser: {
    eyebrow: "The four pillars",
    title: "Study smarter, not harder",
    subtitle: "Your success in med school rests on four pillars: learning system, exam strategy, stress & resilience and network. Not motivational quotes: a system that carries you through your degree.",
    cta: "See the full method",
  },

  pillars: [
    {
      title: "Learning system",
      sub: "Pillar 1",
      short: "A personal learning system that fits your everyday life: clear structures, planned recovery, regular reflection.",
      body: "A sustainable learning system is the foundation of long-term success. It's not just about what you learn, but how you structure, plan and adapt your learning to new challenges. We help you build a system that fits your daily life: clear study structures, scheduled recovery phases and regular reflection, so your workload stays effective and healthy in the long run.",
      items: ["Learning strategy workshops", "Video series on strategies & study apps", "Live study-plan sessions", "Semester planner"],
    },
    {
      title: "Exam strategy",
      sub: "Pillar 2",
      short: "A structured exam roadmap with realistic milestones, targeted revision and simulation before it counts.",
      body: "Successful exam preparation starts long before exam day. A clear strategy helps you prioritise the material, keep the overview and recall knowledge reliably at the right moment. Together we build your exam roadmap with realistic milestones, plan revision deliberately and keep adjusting the strategy to where you stand.",
      items: ["Exam roadmap & past-paper logic", "Oral exam simulation", "Live quiz, e.g. anatomy", "Exam guide"],
    },
    {
      title: "Stress & resilience",
      sub: "Pillar 3",
      short: "Study efficiently without putting your mental health at risk: handling exam anxiety, active breaks, mindset tools.",
      body: "Huge amounts of material in little time, fear of failure, often far from family and familiar surroundings, and the feeling of never having done enough. We teach methods that let you study efficiently without endangering your mental health: handle exam anxiety and setbacks resiliently, anchor active breaks and mindset tools in your routine. No short-term grind, but staying healthy and motivated all the way to your licence. Our workshops don't replace psychological or medical treatment. If anxiety keeps blocking you, contact the psychological counselling service at your university or your student services organisation.",
      items: ["Stress & resilience workshop", "Stress & resilience video series", "Coaching for exam anxiety", "Active breaks & mindset tools"],
    },
    {
      title: "Network",
      sub: "Pillar 4",
      short: "A community of medical students in Germany and at EU universities that pushes each other, shares knowledge and passes on tips from senior years.",
      body: "Which specialty suits me? Where do you find good clinical placements or a good place for the final practical year? Without contacts, good advice is often down to luck, and studying abroad without an established circle adds extra hurdles. We build a community of medical students in Germany and at EU universities that pushes, motivates and shares knowledge: in study sessions, exchange groups and with proven tips from senior students.",
      items: ["Study Together, every week", "Community Café, every week", "Guest lectures by doctors", "High-yield hour & Q&As"],
    },
  ],

  cost: {
    eyebrow: "What's at stake",
    line1: "A repeat year at a private or foreign university can easily cost",
    value1: "{lost}.",
    line2: "One year of medIQ lab:",
    value2: "{yearly}.",
    text: "The question isn't whether you can afford medIQ lab, but whether you can afford a lost year.",
  },

  offer: {
    eyebrow: "How to get in",
    title: "One price, everything included",
    subtitle: "No tiers, no upsells: one annual membership with community, workshops, video series, weekly live events, downloads and the AI study app.",
    plan: "Annual membership",
    badge: "All inclusive",
    blurb: "Community and all workshops, a whole year, one price.",
    perYear: "/ year",
    perMonth: "That is around {monthly} per month.",
    included: [
      "Access to the community on Skool",
      "Workshop series, about twice per semester",
      "Video series on study strategies, resilience & finances",
      "Study Together & Community Café, every week",
      "Guest lectures by doctors & exam simulation",
      "Semester planner, study sheets & exam guide",
      "Our own AI study app",
    ],
    details: "See all details",
    note: "Sign-up & payment securely via Skool · no hidden costs",
  },

  faqTeaser: {
    eyebrow: "Before you decide",
    title: "The most common questions",
    items: [
      {
        q: "Is the price really worth it?",
        a: "Do the honest maths: one lost semester costs months of rent and living expenses, and at private or foreign universities a repeat year can easily cost {lost}. Measured against that, {yearly} a year pays for itself if it saves you a single lost semester.",
      },
      {
        q: "Do you guarantee I'll pass?",
        a: "No, and anyone who promises that isn't to be trusted. Passing is up to you. We provide a study system built on well-researched learning principles and a community that helps you stick with it.",
      },
      {
        q: "I study in Germany, does this fit?",
        a: "Yes, absolutely. medIQ lab is built for medical students in Germany and across the EU. The methods work regardless of location or curriculum, and you use workshops, live events, downloads and the AI study app online.",
      },
      {
        q: "How do sign-up and payment work?",
        a: "Fully and securely via Skool. You click a button, land in the medIQ lab community and complete the annual membership there. This website doesn't process any payments.",
      },
    ],
    all: "All questions & answers",
  },

  cta: {
    eyebrow: "medIQ lab",
    title: "Study smarter from today, *not harder.*",
    subtitle: "Every semester you secure now is time and money you don't lose. Join the medIQ lab community and build your learning system with workshops, weekly live events and study sheets.",
    note: "Sign-up & payment securely via Skool · {yearly} per year, everything included · no hidden costs",
    secondary: "Programme & pricing",
  },

  video: {
    caption: "Understand it in 90 seconds",
    play: "Play introduction video",
    alt: "Faith and Hannah introduce medIQ lab",
    unsupported: "Your browser can't play this video.",
    min: "min",
  },

  chat: {
    name: "medIQ lab assistant",
    status: "Automated chat, replies instantly",
    open: "Open medIQ lab assistant",
    close: "Close chat",
    teaser: "Is medIQ lab right for you? Ask me, I'll help you in under a minute. 👋",
    cta: {
      methode: "How the method works",
      methode2: "See the method",
      programm: "Programme & pricing",
      programm2: "See the programme",
      kontakt: "Go to contact page",
    },
    options: {
      fear: "Anxious about my next exam",
      method: "I study a lot, nothing sticks",
      cost: "Avoid a repeat year",
      price: "What does it cost?",
      priceExact: "What exactly does it cost?",
      who: "Who is it for?",
      fit: "Is it right for me?",
      contact: "I'd rather ask a real person",
      restart: "Start over",
    },
    nodes: {
      start: ["Hey 👋 In under a minute I'll show you whether medIQ lab is right for you.", "What describes you best right now?"],
      fear: [
        "I know that feeling, and it's almost never a knowledge problem.",
        "At medIQ lab you get exam strategy, past-paper logic and concrete tools against the pressure, so you walk in calmer.",
      ],
      method: [
        "Then it's almost always the method, not the effort.",
        "With active recall and spaced repetition you retain the material longer, instead of reading it three times and forgetting it again.",
      ],
      cost: [
        "Understandable, that's the most expensive way to lose time.",
        "A repeat year at a private or foreign university can easily cost {lost}. One year of medIQ lab: {yearly}, and it's designed to save you exactly that.",
      ],
      price: [
        "One price, everything included:",
        "{yearly} per year, that is around {monthly} a month. Community and all workshops are included.",
        "Plus: video series, weekly live events, guest lectures by doctors, exam simulations, downloads and the AI study app.",
        "Sign-up runs securely via Skool.",
      ],
      who: [
        "For medical students in Germany and across the EU, at public or private universities, from the first semester to final exams.",
        "If you study a lot and still feel it's not enough: this is for you.",
      ],
      contact: ["Of course. Just write to us via the contact page, we answer honestly and without sales pressure."],
    },
  },

  pageMethode: {
    title: "Study method for medical school: the 4 pillars",
    description:
      "How medIQ lab brings retrieval practice and spaced repetition into medical school: learning system, exam strategy, stress & resilience and network.",
    intro: {
      eyebrow: "The method",
      title: "A method with a foundation, *not gut feeling.*",
      lead: "medIQ lab isn't a collection of motivational quotes. It's built on how learning works and how to apply that consistently in medical school.",
      ctaProgramm: "See the programme",
    },
    problem: {
      eyebrow: "Sound familiar?",
      title: "It's not because you study too little.",
      lead: "Most medical students work hard, but rarely with a system that truly carries them. That's exactly where medIQ lab comes in.",
      imageAlt: "Focused student at a laptop",
      pains: [
        { title: "Buried under the sheer volume", body: "Thousands of pages, hundreds of lectures, and nobody shows you what's actually exam-relevant." },
        { title: "Studying without a system", body: "You read, highlight, read again, and forget it all by exam day. Effort without method evaporates." },
        { title: "Exam anxiety & blackouts", body: "You actually know the material, but under pressure it's suddenly gone." },
        { title: "Looming resits", body: "One failed attempt and the whole semester wobbles. And the fear follows you into every study session." },
        { title: "Lost semesters & lost time", body: "Every lost semester means more rent, more living costs, a later start to your career." },
        { title: "High tuition fees abroad", body: "At private and foreign universities a repeat year can easily cost {lost}, on top of everything else." },
      ],
      quote: "This isn't a talent problem. It's a *method problem*.",
      quoteSub: "And methods can be learned, faster than you think.",
    },
    principles: {
      eyebrow: "The four pillars",
      title: "Your success in med school rests on four pillars.",
      lead: "Learning system, exam strategy, stress & resilience and network. They form the foundation of lasting success, and we help you improve each one deliberately. That's the difference between studying harder and studying smarter.",
      research: "The learning strategy workshops draw on studies of retrieval practice ([Roediger & Karpicke 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x); [Karpicke & Roediger 2008](https://doi.org/10.1126/science.1152408)) and a meta-analysis of spaced learning ([Cepeda et al. 2006](https://doi.org/10.1037/0033-2909.132.3.354)).",
    },
    practice: {
      eyebrow: "In practice",
      title: "From principle to everyday studying",
      subtitle: "Principles alone don't pass exams. At medIQ lab they become concrete tools you apply from day one.",
      cta: "See everything included",
      items: [
        { title: "Anki, flashcards & AI study app", body: "Active recall and spaced repetition made concrete: cards that truly test the material, ready-made study sheets and our AI study app that supports your reviewing all the way to finals." },
        { title: "Personal study plans & weekly structure", body: "Principles become a plan: a weekly structure that holds up alongside clinic and part-time jobs, instead of good intentions that collapse after two weeks." },
        { title: "Past-paper analysis & oral exam simulation", body: "Recognise exam patterns, derive the focus areas and rehearse the oral exam under realistic conditions, so you don't go in blind." },
        { title: "Tools for your mind", body: "You meet exam anxiety, pressure and procrastination with methods that work when it counts, not with “pull yourself together”." },
      ],
    },
    cta: {
      eyebrow: "Ready?",
      title: "Start studying with *method* today.",
      subtitle: "The principles are half the battle, the other half is putting them into practice with a system and a community. That's exactly what medIQ lab is for.",
      secondary: "Programme & pricing",
    },
  },

  pageProgramm: {
    title: "Programme and price of the membership",
    description:
      "Live workshops about twice a semester, weekly Study Together and Community Café, oral exam simulations and study sheets in one annual membership.",
    intro: {
      eyebrow: "The programme",
      title: "Your complete system, *from learning system to final exams.*",
      lead: "One membership, everything included: workshop series, video series, weekly live events like Study Together and Community Café, guest lectures by doctors, oral exam simulations, downloads and our own AI study app. For medical students in Germany and across the EU, private or public.",
      ctaMethod: "See the method first",
    },
    vsl: {
      eyebrow: "90 seconds well spent",
      title: "Faith and Hannah introduce medIQ lab",
      subtitle: "In a minute and a half you'll learn who's behind medIQ lab, what awaits you in the community and why we do this. Straight from the founders.",
      ctaAbout: "More about us",
    },
    modules: {
      eyebrow: "What you get",
      title: "Everything inside the membership",
      lead: "This is how the four pillars become concrete: workshop series, video series, weekly live events and ready-made downloads, plus our own AI study app. All in one price.",
      imgHeart: "Anatomical heart model",
      imgMicroscope: "Microscope in a lab",
      appTitle: "Plus: our own AI study app",
      appBody: "Quiz yourself, review, structure: the medIQ lab AI study app accompanies you between events and is included in the membership.",
      note: "All dates, recordings and materials are in the members' area, directly in the medIQ lab community on Skool.",
    },
    formats: [
      {
        title: "Workshop series",
        sub: "About twice per semester, live",
        items: ["2 to 3 workshops on learning strategies", "Workshop on stress & resilience", "Workshop on finances, insurance & more"],
      },
      {
        title: "Video series",
        sub: "Complementing every workshop",
        items: ["Learning strategies, study apps & optimising your studies", "Stress & resilience", "Finances, insurance & more"],
      },
      {
        title: "Live events",
        sub: "Every week",
        items: [
          "Study Together, at least once a week",
          "Community Café, once a week",
          "Study-plan sessions & Q&As",
          "Live quiz, e.g. anatomy",
          "Guest lectures by doctors",
          "Oral exam simulation",
          "High-yield hour on topics from the community",
          "Clinical case discussions (coming soon)",
        ],
      },
      {
        title: "Downloads",
        sub: "Ready to use",
        items: ["Semester planner", "Study sheets, starting with muscles & skeleton", "Exam guide"],
      },
    ],
    pricing: {
      eyebrow: "How to get in",
      title: "One price, everything included",
      subtitle: "One annual membership with everything you need: community and all workshops included. Sign-up and payment run securely via Skool.",
      imgAlt: "Group of students in conversation",
      badge: "All inclusive",
      plan: "Annual membership",
      blurb: "Your complete system for a whole academic year. Community and all workshops are included, there's nothing to buy on top.",
      perYear: "/ year",
      perMonth: "That is around {monthly} per month.",
      compare: "For comparison: a single lost semester quickly costs many times that in rent, living expenses and lost time. At private and foreign universities a repeat year can also easily cost {lost}. The membership pays for itself if it saves you a single lost semester.",
      included: [
        "Access to the medIQ lab community on Skool",
        "Workshop series: learning strategies, stress & resilience, finances",
        "Video series complementing every workshop",
        "Study Together & Community Café, every week",
        "Q&As, live quiz & study-plan sessions",
        "Guest lectures by doctors",
        "Oral exam simulations",
        "Semester planner, study sheets & exam guide",
        "Our own AI study app",
      ],
      ctaNote: "Annual · securely via Skool · everything included",
      note: "Note: all content, sign-up and payment run on Skool. This page informs you and sends you there.",
    },
    cta: {
      eyebrow: "Get started",
      title: "Ready? *Then join the community.*",
      subtitle: "Sign-up, payment and all content run securely via Skool. This page informs you and sends you there.",
      secondary: "Open questions? See the FAQ",
    },
  },

  pageUeber: {
    title: "About us: founded by two medical students",
    description:
      "Faith and Hannah are fourth-year medical students and founded medIQ lab. Why we built it, who it's for and the principles we work by.",
    intro: {
      eyebrow: "Meet the founders",
      title: "Nobody should study *alone.*",
      lead: "Behind medIQ lab are Faith and Hannah, two medical students with a shared idea: to make medical school more structured, more effective and, above all, a little less stressful.",
    },
    who: {
      eyebrow: "Who we are",
      title: "Faith and Hannah",
      imgAlt: "Faith and Hannah, the founders of medIQ lab",
      p1: "We're two medical students with the same mission: to make learning simpler, more structured and more effective for students.",
      p2: "We know from our own experience what medical school feels like, and we turned that into a system that truly carries you: from the learning system to exam strategy to a community that makes the difference over the long haul.",
      quote: "More than studying. *A community.*",
      cta: "Meet the whole team",
    },
    labels: { year: "Year of study:", subjects: "Favourite subjects:", motivation: "What drives me", founderAlt: "{name}, founder of medIQ lab" },
    founders: [
      {
        name: "Hannah",
        file: "hannah.jpg",
        year: "4th year",
        subjects: ["Physiology", "Simulation Medicine"],
        motivation: "My motivation is the vision of making medical school less stressful, more efficient and more successful with targeted support. I want to give other students exactly the tools and knowledge I wish I'd had at the start of my own studies. Because nobody should have to fight through the extreme daily grind alone.",
      },
      {
        name: "Faith",
        file: "faith.jpg",
        year: "4th year",
        subjects: ["Simulation Medicine", "Pathophysiology"],
        motivation: "My motivation is to support students so that as few of them as possible fail their exams. Especially in the first year, many painstakingly test different approaches. If you find the right learning strategy early, you fail fewer exams and save valuable time, money and nerves.",
      },
    ],
    mission: {
      eyebrow: "Our mission",
      title: "Fewer lost semesters. More students who graduate.",
      lead: "Every lost semester costs not only time but money, nerves and often a piece of self-confidence. At private and foreign universities, a repeat year can easily cost {lost}. It doesn't have to be that way.",
      points: [
        "Finding your own learning path, together with you.",
        "Creating a space where you support each other and learn from one another.",
        "Building a study-life balance that later becomes a work-life balance.",
      ],
      quote: "Good medicine needs people who last, *not people who burn out.*",
    },
    pillarsSection: {
      eyebrow: "Our concept",
      title: "The four pillars of success in med school",
      subtitle: "Learning system, exam strategy, stress & resilience and network. They form the foundation of lasting success, and we help you improve each one deliberately.",
      cta: "See programme & pricing",
    },
    values: {
      eyebrow: "What guides us",
      title: "Four principles we take seriously",
      subtitle: "They're not just written here, they decide how we build content and how we communicate with you.",
      items: [
        { title: "Science over gut feeling", body: "We build on principles backed by learning psychology, not on motivational quotes or the next miracle tool." },
        { title: "Method over the talent myth", body: "Passing isn't a question of innate genius but of learnable systems. That takes the pressure off and makes you independent." },
        { title: "Honesty over hype", body: "No guaranteed-pass promises, no fake scarcity. We tell you what's realistic, and what isn't." },
        { title: "Together over going it alone", body: "Med school is a marathon. A community that carries you and keeps you accountable makes the difference over the long haul." },
      ],
    },
    cta: {
      eyebrow: "Join us",
      title: "Become part of *medIQ lab.*",
      subtitle: "If this convinces you, the best next step is the simplest: join the community and get going.",
      secondary: "See the method",
    },
  },

  pageTeam: {
    title: "Team: founders Faith and Hannah",
    description:
      "Founders Faith and Hannah, coach Daniela, and Jessi and Lisi from the social media team: meet the people behind medIQ lab and who does what.",
    intro: {
      eyebrow: "The team",
      title: "The people behind *medIQ lab.*",
      lead: "Behind medIQ lab are medical students Faith and Hannah. They're supported by Daniela for relaxation and coaching, and by Jessi and Lisi for social media.",
    },
    faceEyebrow: "The face of medIQ lab",
    teamEyebrow: "Behind the scenes",
    teamTitle: "The team behind it",
    leads: [
      { name: "Faith", role: "Founder & medical student", file: "faith.jpg" },
      { name: "Hannah", role: "Founder & medical student", file: "hannah.jpg" },
    ],
    team: [
      { name: "Daniela", role: "Heilpraktikerin (licensed non-medical practitioner in Germany), relaxation therapist, life & business coach", file: "daniela.jpg" },
      { name: "Jessi", role: "Social media", file: "jessi.jpg" },
      { name: "Lisi", role: "Social media", file: "lisi.jpg" },
    ],
    cta: {
      eyebrow: "Get to know us",
      title: "Become part of *medIQ lab.*",
      subtitle: "Real people stand behind medIQ lab and accompany you through your studies. Join the community and get to know us.",
      secondary: "See the method",
    },
  },

  pageFaq: {
    title: "FAQ: cost, sign-up and how it works",
    description:
      "What medIQ lab costs, how sign-up via Skool works, whether there's a campus discount and why we don't guarantee a pass: answers at a glance.",
    intro: {
      eyebrow: "FAQ",
      title: "Frequently asked questions about medIQ lab",
      lead: "The most common questions about the process, access, pricing and what medIQ lab can realistically deliver, answered honestly.",
      ctaContact: "Question not covered? Contact us",
    },
    items: [
      {
        q: "Who is medIQ lab for?",
        a: "For medical students in Germany and across the EU, at public or private universities, from the first semester to final exams. If you study a lot and still feel it's not enough, if you want to pass exams with confidence and avoid expensive delays, you're in the right place.",
      },
      {
        q: "Does it also work if I study in Germany?",
        a: "Yes, absolutely. medIQ lab is built for both. The methods work regardless of location or curriculum, and you use workshops, live events, downloads and the AI study app online, whether you study in Heidelberg, Vienna or Pécs.",
      },
      {
        q: "What does the membership cost?",
        a: "{yearly} per year, everything included: community, workshop series, video series, weekly live events like Study Together and Community Café, guest lectures, exam simulations, downloads and the AI study app. No hidden extras, no upsells. You'll find every format in detail in the [membership programme](/en/programm/).",
      },
      {
        q: "Are there discounts or a guarantee?",
        a: "We have a campus discount, just ask us about it in the community or via the [contact page](/en/kontakt/). A pass guarantee isn't something we offer, because nobody can honestly give one.",
      },
      {
        q: "Is the price really worth it?",
        a: "Do the honest maths: a single lost semester costs you months of rent and living expenses plus a later start to your career. At private and foreign universities a repeat year can also easily cost {lost}. Measured against that, {yearly} a year is an investment that pays for itself if it saves you a single lost semester.",
      },
      {
        q: "How do sign-up and payment work?",
        a: "Sign-up and payment run fully and securely via Skool. You click one of the buttons, land in the medIQ lab community on Skool and complete the annual membership there. This website doesn't process any payments.",
      },
      {
        q: "Do you guarantee I'll pass?",
        a: "No, and anyone who promises that isn't to be trusted. Passing is up to you. We provide a study system built on well-researched learning principles and a community that helps you stick with it.",
      },
    ],
    cta: {
      eyebrow: "Still have questions?",
      title: "All clear? *Then let's go.*",
      subtitle: "If your question is still open, drop us a line, we'll help you before you decide.",
      secondary: "Get in touch",
    },
  },

  pageKontakt: {
    title: "Contact: questions about the membership",
    description: "Write to us via the form or at info@mediq-lab.de. We usually reply within a few working days; the fastest way is the community on Skool.",
    intro: {
      eyebrow: "Contact",
      title: "Talk to us *before you decide.*",
      lead: "Whether it's about the method, the membership, the campus discount or access: we answer honestly and without sales pressure. The fastest way to reach us is directly in the community.",
    },
    community: {
      title: "Community on Skool",
      body: "The quickest way: ask your question directly in the medIQ lab community, often other members answer too.",
      cta: "Go to the community",
    },
    email: { title: "Email", body: "Prefer the classic way? Write to us directly." },
    note: "We usually reply within a few working days. Sign-up and payment go directly via Skool, this page doesn't process any payments.",
    form: {
      title: "Write to us",
      sub: "We'll get back to you personally.",
      honeypot: "Leave empty:",
      name: "Name",
      email: "Email",
      topic: "What's it about?",
      optional: "(optional)",
      topicPlaceholder: "e.g. question about the membership",
      message: "Message",
      submit: "Send message",
      consent: "By submitting you agree to the processing of your details for handling your request (see privacy policy).",
    },
  },

  legal: {
    impressum: "Legal notice",
    datenschutz: "Privacy policy",
    notice: "This page is provided in German, the language of the operating company's legal seat.",
  },
};
