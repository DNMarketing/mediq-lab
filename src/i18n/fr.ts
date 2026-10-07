import type { Dict } from "./de";

export const fr: Dict = {
  money: {
    yearly: "399 €",
    monthly: "33 €",
    lost: "10 000 à 20 000 €",
  },

  meta: {
    titleDefault: "medIQ lab : Apprendre plus efficacement. Réussir sereinement. Pour les étudiants en médecine en Allemagne et dans l'UE.",
    titleTemplate: "%s · medIQ lab",
    description:
      "L'écosystème d'apprentissage pour les étudiants en médecine en Allemagne et dans l'UE : méthodes fondées sur la science, stratégie d'examen, notre propre appli d'apprentissage IA et une communauté qui vous porte tout au long des études. Un abonnement, tout inclus.",
    ogTitle: "medIQ lab : Apprendre plus efficacement. Réussir sereinement.",
    ogDescription:
      "Des études de médecine sur des bases scientifiques, en Allemagne et à l'étranger. Ateliers, fiches, appli IA et communauté dans un seul abonnement.",
  },

  common: {
    join: "Réserver ma place",
    toHome: "Vers l'accueil",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    mainNav: "Navigation principale",
    skip: "Aller au contenu",
    language: "Langue",
    spots: "Plus que {spots} places",
  },

  nav: {
    methode: "Méthode",
    programm: "Programme",
    team: "Équipe",
    ueber: "À propos",
    faq: "FAQ",
    kontakt: "Contact",
  },

  mobileBar: { programm: "Programme" },

  footer: {
    tagline: "master your exams. become a physician.",
    blurb: "L'écosystème d'apprentissage pour les étudiants en médecine. Apprendre plus efficacement, réussir sereinement et éviter les détours coûteux.",
    pages: "Pages",
    start: "Commencer",
    joinCommunity: "Rejoindre la communauté →",
    programmPreise: "Programme & tarifs",
    legal: "Mentions",
    impressum: "Mentions légales",
    datenschutz: "Confidentialité",
    rights: "© 2026 medIQ lab. Tous droits réservés.",
    disclaimer: "medIQ lab ne remplace pas l'enseignement officiel de l'université. Les résultats varient d'une personne à l'autre.",
  },

  hero: {
    eyebrow: "Pour les étudiants en médecine en Allemagne & à l'étranger",
    title: "Apprendre plus efficacement.\nRéussir sereinement.\n*Aucune année perdue.*",
    lead: "Une méthode d'apprentissage fondée sur la science, une stratégie d'examen claire, notre propre appli IA et une communauté qui vous soutient. Pour qu'aucune année de redoublement coûteuse ne vienne vous freiner, que vous étudiiez en Allemagne ou à l'étranger.",
    ctaMethod: "Comment fonctionne la méthode",
    note: "Pour les étudiants en médecine en Allemagne & dans l'UE · {yearly} par an, tout inclus · inscription via Skool",
    cardTitle: "La méthode plutôt que\nle par cœur",
    cardBody: "Active recall & répétition espacée, fondés sur la psychologie de l'apprentissage.",
  },

  problemTeaser: {
    eyebrow: "Le problème",
    title: "Ce n'est pas parce que tu *n'apprends pas assez.*",
    lead: "La plupart n'échouent pas par manque de travail, mais par *absence de système.*",
    pains: [
      { lead: "Submergé par la masse de contenu", rest: ", et personne ne te montre ce qui tombe vraiment à l'examen." },
      { lead: "Lire, surligner, oublier", rest: ". Le travail sans système s'évapore." },
      { lead: "Un échec", rest: ", et une année de redoublement dans une université privée ou à l'étranger coûte vite {lost}." },
    ],
    quote: "Pas un problème de talent. Un *problème de méthode.*",
    cta: "Pourquoi c'est ainsi",
  },

  methodTeaser: {
    eyebrow: "Les quatre piliers",
    title: "Apprendre plus intelligemment, pas plus dur",
    subtitle: "Ta réussite repose sur quatre piliers : système d'apprentissage, stratégie d'examen, stress & résilience et réseau. Pas de phrases de motivation, mais un système qui te porte tout au long des études.",
    cta: "Voir toute la méthode",
  },

  pillars: [
    {
      title: "Système d'apprentissage",
      sub: "Pilier 1",
      short: "Un système d'apprentissage personnel adapté à ton quotidien : structures claires, récupération planifiée, réflexion régulière.",
      body: "Un système d'apprentissage durable est la base d'une réussite à long terme. Il ne s'agit pas seulement de ce que tu apprends, mais de la façon dont tu structures, planifies et adaptes ton apprentissage aux nouveaux défis. Nous t'aidons à construire un système qui correspond à ton quotidien : structures claires, phases de récupération planifiées et réflexion régulière, pour que ta charge de travail reste efficace et saine sur la durée.",
      items: ["Ateliers de stratégies d'apprentissage", "Série vidéo stratégies & applis", "Création de planning en direct", "Planificateur de semestre"],
    },
    {
      title: "Stratégie d'examen",
      sub: "Pilier 2",
      short: "Une feuille de route structurée avec des étapes réalistes, des révisions ciblées et une simulation avant le jour J.",
      body: "Une préparation réussie commence bien avant le jour de l'examen. Une stratégie claire aide à prioriser la matière, garder une vue d'ensemble et restituer ses connaissances au bon moment. Ensemble, nous construisons ta feuille de route avec des étapes réalistes, planifions les révisions de façon ciblée et ajustons la stratégie en continu à ton niveau.",
      items: ["Feuille de route & logique des annales", "Simulation d'oral", "Quiz en direct, p. ex. anatomie", "Guide d'examen"],
    },
    {
      title: "Stress & résilience",
      sub: "Pilier 3",
      short: "Apprendre efficacement sans mettre ta santé mentale en danger : gérer l'anxiété d'examen, pauses actives, outils de mindset.",
      body: "Des quantités énormes de matière en peu de temps, la peur de l'échec, souvent loin de la famille et de son environnement, et le sentiment de ne jamais en avoir fait assez. Nous transmettons des méthodes pour apprendre efficacement sans compromettre ta santé mentale : affronter l'anxiété d'examen et les revers avec résilience, ancrer pauses actives et outils de mindset dans ton quotidien. Pas un sprint épuisant, mais rester en bonne santé et motivé jusqu'au diplôme.",
      items: ["Atelier stress & résilience", "Série vidéo stress & résilience", "Coaching contre l'anxiété d'examen", "Pauses actives & outils de mindset"],
    },
    {
      title: "Réseau",
      sub: "Pilier 4",
      short: "Une communauté d'étudiants en médecine en Allemagne et dans les universités de l'UE qui se motivent, partagent leurs connaissances et transmettent les conseils des années supérieures.",
      body: "Quelle spécialité me correspond ? Où trouver de bons stages ? Sans contacts, c'est souvent une loterie de conseils, et étudier à l'étranger sans entourage établi ajoute des obstacles. Nous créons une communauté d'étudiants en médecine en Allemagne et dans les universités de l'UE qui se motivent, s'encouragent et partagent : sessions d'étude, groupes d'échange et conseils éprouvés des années supérieures.",
      items: ["Study Together, chaque semaine", "Community Café, chaque semaine", "Conférences de médecins invités", "High-yield hour & Q&R"],
    },
  ],

  cost: {
    eyebrow: "Ce qui est en jeu",
    line1: "Une année perdue :",
    value1: "{lost}.",
    line2: "Une année de medIQ lab :",
    value2: "{yearly}.",
    text: "La question n'est pas de savoir si tu peux te permettre medIQ lab, mais si tu peux te permettre une année perdue.",
  },

  offer: {
    eyebrow: "Comment rejoindre",
    title: "Un prix, tout inclus",
    subtitle: "Pas de formules, pas d'options payantes : un abonnement annuel avec communauté, ateliers, séries vidéo, événements live hebdomadaires, téléchargements et appli IA.",
    plan: "Abonnement annuel",
    badge: "Tout inclus",
    blurb: "La communauté et tous les ateliers, pendant un an, un seul prix.",
    perYear: "/ an",
    perMonth: "Soit environ {monthly} par mois.",
    included: [
      "Accès à la communauté sur Skool",
      "Série d'ateliers, environ 2× par semestre",
      "Séries vidéo sur les stratégies, la résilience & les finances",
      "Study Together & Community Café, chaque semaine",
      "Conférences de médecins & simulation d'examen",
      "Planificateur de semestre, fiches & guide d'examen",
      "Notre propre appli d'apprentissage IA",
    ],
    details: "Voir tous les détails",
    note: "Inscription & paiement sécurisés via Skool · aucun frais caché",
  },

  faqTeaser: {
    eyebrow: "Avant de te décider",
    title: "Les questions les plus fréquentes",
    items: [
      {
        q: "Le prix en vaut-il vraiment la peine ?",
        a: "Fais le calcul honnêtement : un semestre perdu coûte des mois de loyer et de frais de vie, et dans une université privée ou à l'étranger, une année de redoublement ajoute {lost}. À cette aune, {yearly} par an sont rentabilisés dès qu'ils t'épargnent un seul semestre perdu.",
      },
      {
        q: "Est-ce que vous garantissez la réussite ?",
        a: "Non, et quiconque le promet n'est pas sérieux. Réussir dépend de toi. Ce que nous offrons, c'est un système éprouvé et une communauté qui améliorent sensiblement tes chances en t'apprenant à travailler plus intelligemment, pas seulement plus dur.",
      },
      {
        q: "J'étudie en Allemagne, est-ce adapté ?",
        a: "Oui, tout à fait. medIQ lab est conçu pour les étudiants en médecine en Allemagne et dans l'UE. Les méthodes fonctionnent quel que soit le lieu ou le cursus, et les ateliers, événements live, téléchargements et l'appli IA s'utilisent en ligne.",
      },
      {
        q: "Comment se passent l'inscription et le paiement ?",
        a: "Entièrement et en toute sécurité via Skool. Tu cliques sur un bouton, tu arrives dans la communauté medIQ lab et tu y souscris l'abonnement annuel. Ce site ne traite aucun paiement.",
      },
    ],
    all: "Toutes les questions & réponses",
  },

  cta: {
    eyebrow: "medIQ lab",
    title: "Apprends plus intelligemment dès aujourd'hui, *pas plus dur.*",
    subtitle: "Chaque semestre que tu sécurises maintenant, c'est du temps et de l'argent que tu ne perds pas. Rejoins la communauté medIQ lab et fais passer ton système d'apprentissage au niveau supérieur.",
    note: "Inscription & paiement sécurisés via Skool · {yearly} par an, tout inclus · aucun frais caché",
    secondary: "Programme & tarifs",
  },

  video: {
    caption: "Comprendre en 90 secondes",
    play: "Lire la vidéo de présentation",
    alt: "Faith et Hannah présentent medIQ lab",
    unsupported: "Ton navigateur ne peut pas lire cette vidéo.",
    min: "min",
  },

  chat: {
    name: "Conseiller medIQ lab",
    status: "Répond immédiatement",
    open: "Ouvrir le conseiller medIQ lab",
    close: "Fermer le chat",
    teaser: "medIQ lab est-il fait pour toi ? Demande-moi, je t'aide en moins d'une minute. 👋",
    cta: {
      methode: "Comment fonctionne la méthode",
      methode2: "Voir la méthode",
      programm: "Programme & tarifs",
      programm2: "Voir le programme",
      kontakt: "Vers la page contact",
    },
    options: {
      fear: "J'angoisse pour mon prochain examen",
      method: "J'apprends beaucoup, rien ne reste",
      cost: "Éviter une année de redoublement",
      price: "Combien ça coûte ?",
      priceExact: "Combien ça coûte exactement ?",
      who: "C'est pour qui ?",
      fit: "Est-ce fait pour moi ?",
      contact: "Je préfère demander directement",
      restart: "Recommencer",
    },
    nodes: {
      start: ["Hey 👋 En moins d'une minute, je te montre si medIQ lab est fait pour toi.", "Qu'est-ce qui te correspond le mieux en ce moment ?"],
      fear: [
        "Je connais, et ce n'est presque jamais un problème de connaissances.",
        "Chez medIQ lab, tu obtiens une stratégie d'examen, la logique des annales et des outils concrets contre la pression, pour entrer plus serein.",
      ],
      method: [
        "Alors c'est presque toujours la méthode, pas le travail.",
        "Avec l'active recall et la répétition espacée, la matière reste vraiment, au lieu d'être lue trois fois puis oubliée.",
      ],
      cost: [
        "Compréhensible, c'est la façon la plus chère de perdre du temps.",
        "Une année de redoublement dans une université privée ou à l'étranger coûte vite {lost}. Une année de medIQ lab : {yearly}, et elle est conçue pour t'épargner exactement cela.",
      ],
      price: [
        "Un prix, tout inclus :",
        "{yearly} par an, soit environ {monthly} par mois. La communauté et tous les ateliers sont inclus.",
        "En plus : séries vidéo, événements live hebdomadaires, conférences de médecins, simulations d'examen, téléchargements et appli IA.",
        "L'inscription se fait en toute sécurité via Skool.",
      ],
      who: [
        "Pour les étudiants en médecine en Allemagne et dans l'UE, en université publique ou privée, du premier semestre jusqu'aux examens finaux.",
        "Si tu apprends beaucoup et que tu as quand même l'impression que ce n'est pas assez : c'est exactement pour toi.",
      ],
      contact: ["Bien sûr. Écris-nous simplement via la page contact, nous répondons honnêtement et sans pression commerciale."],
    },
  },

  pageMethode: {
    title: "Méthode",
    description:
      "La méthode derrière medIQ lab : les quatre piliers de la réussite en médecine, système d'apprentissage, stratégie d'examen, stress & résilience et réseau, fondés sur la psychologie de l'apprentissage. Apprendre plus intelligemment plutôt que plus dur, en Allemagne et à l'étranger.",
    intro: {
      eyebrow: "La méthode",
      title: "Une méthode avec des fondations, *pas de l'intuition.*",
      lead: "medIQ lab n'est pas un recueil de phrases de motivation. Derrière, il y a la façon dont l'apprentissage fonctionne de manière prouvée, et comment en tirer parti systématiquement en médecine.",
      ctaProgramm: "Voir le programme",
    },
    problem: {
      eyebrow: "Ça te parle ?",
      title: "Ce n'est pas parce que tu n'apprends pas assez.",
      lead: "La plupart des étudiants en médecine travaillent dur, mais rarement avec un système qui tient vraiment. C'est exactement là qu'intervient medIQ lab.",
      imageAlt: "Étudiant concentré devant un ordinateur portable",
      pains: [
        { title: "Submergé par la masse de contenu", body: "Des milliers de pages, des centaines de cours, et personne ne te montre ce qui compte vraiment pour l'examen." },
        { title: "Apprendre sans système", body: "Tu lis, surlignes, relis, et tu oublies tout avant l'examen. Le travail sans méthode s'évapore." },
        { title: "Anxiété d'examen & trous noirs", body: "Tu maîtrises la matière, mais sous pression tout disparaît d'un coup." },
        { title: "Rattrapages qui menacent", body: "Un échec, et tout le semestre vacille. La peur apprend avec toi." },
        { title: "Semestres & années de vie perdus", body: "Chaque semestre perdu signifie : plus de loyer, plus de frais de vie, une entrée plus tardive dans la vie professionnelle." },
        { title: "Frais de scolarité élevés à l'étranger", body: "Dans une université privée ou à l'étranger, une année de redoublement coûte vite {lost}, en plus du reste." },
      ],
      quote: "Ce n'est pas un problème de talent. C'est un *problème de méthode*.",
      quoteSub: "Et une méthode, ça s'apprend, plus vite que tu ne le penses.",
    },
    principles: {
      eyebrow: "Les quatre piliers",
      title: "Ta réussite repose sur quatre piliers.",
      lead: "Système d'apprentissage, stratégie d'examen, stress & résilience et réseau. Ils forment la base d'une réussite durable, et nous t'aidons à améliorer chacun d'eux de façon ciblée. C'est la différence entre travailler plus dur et travailler plus intelligemment.",
      research: "Les ateliers de stratégies d'apprentissage s'appuient sur la recherche établie en psychologie de l'apprentissage, notamment l'effet de test (Karpicke & Roediger) et l'apprentissage espacé (Cepeda et al.).",
    },
    practice: {
      eyebrow: "En pratique",
      title: "Du principe au quotidien",
      subtitle: "Les principes seuls ne font pas réussir un examen. Chez medIQ lab, ils deviennent des outils concrets que tu appliques dès le premier jour.",
      cta: "Voir tout le contenu",
      items: [
        { title: "Anki, fiches & appli IA", body: "L'active recall et la répétition espacée deviennent concrets : des cartes qui testent vraiment la matière, des fiches prêtes à l'emploi et notre appli IA qui t'accompagne dans les révisions jusqu'aux examens finaux." },
        { title: "Plannings personnels & structure hebdomadaire", body: "Les principes deviennent un plan : une structure hebdomadaire qui tient à côté des stages et du job étudiant, plutôt que de bonnes résolutions qui s'effondrent au bout de deux semaines." },
        { title: "Analyse des annales & simulation d'oral", body: "Reconnaître les schémas d'examen, en déduire les priorités et répéter l'oral dans des conditions réalistes, pour que ce ne soit plus un saut dans l'inconnu." },
        { title: "Des outils pour la tête", body: "Tu affrontes l'anxiété, la pression et la procrastination avec des méthodes qui fonctionnent le jour J, pas avec un « ressaisis-toi »." },
      ],
    },
    cta: {
      eyebrow: "Prêt ?",
      title: "Apprends avec *méthode* dès aujourd'hui.",
      subtitle: "Les principes, c'est la moitié du chemin ; l'autre moitié, c'est la mise en pratique avec un système et une communauté. C'est exactement pour cela que medIQ lab existe.",
      secondary: "Programme & tarifs",
    },
  },

  pageProgramm: {
    title: "Programme",
    description:
      "L'abonnement medIQ lab pour les étudiants en médecine en Allemagne et dans l'UE : série d'ateliers, séries vidéo, événements live hebdomadaires, téléchargements et appli IA, le tout en un seul prix. Inscription et contenus via Skool.",
    intro: {
      eyebrow: "Le programme",
      title: "Ton système complet, *du système d'apprentissage aux examens finaux.*",
      lead: "Un abonnement, tout inclus : série d'ateliers, séries vidéo, événements live hebdomadaires comme Study Together et Community Café, conférences de médecins, simulations d'oral, téléchargements et notre propre appli IA. Pour les étudiants en médecine en Allemagne et dans l'UE, en université privée ou publique.",
      ctaMethod: "Voir d'abord la méthode",
    },
    vsl: {
      eyebrow: "90 secondes qui en valent la peine",
      title: "Faith et Hannah présentent medIQ lab",
      subtitle: "En une minute et demie, tu découvres qui est derrière medIQ lab, ce qui t'attend dans la communauté et pourquoi nous faisons cela. Directement par les fondatrices.",
      ctaAbout: "En savoir plus sur nous",
    },
    modules: {
      eyebrow: "Ce que tu obtiens",
      title: "Tout ce que contient l'abonnement",
      lead: "Voici comment les quatre piliers prennent forme : série d'ateliers, séries vidéo, événements live hebdomadaires et téléchargements prêts à l'emploi, plus notre propre appli IA. Le tout en un seul prix.",
      imgHeart: "Modèle anatomique de cœur",
      imgMicroscope: "Microscope en laboratoire",
      appTitle: "En plus : notre propre appli d'apprentissage IA",
      appBody: "S'interroger, réviser, structurer : l'appli IA medIQ lab t'accompagne entre les événements et est incluse dans l'abonnement.",
      note: "Toutes les dates, les enregistrements et le matériel se trouvent dans l'espace membres, directement dans la communauté medIQ lab sur Skool.",
    },
    formats: [
      {
        title: "Série d'ateliers",
        sub: "Environ deux fois par semestre, en direct",
        items: ["2 à 3 ateliers sur les stratégies d'apprentissage", "Atelier stress & résilience", "Atelier finances, assurances & co."],
      },
      {
        title: "Séries vidéo",
        sub: "En complément de chaque atelier",
        items: ["Stratégies d'apprentissage, applis & optimisation des études", "Stress & résilience", "Finances, assurances & co."],
      },
      {
        title: "Événements live",
        sub: "Chaque semaine",
        items: [
          "Study Together, au moins 1× par semaine",
          "Community Café, 1× par semaine",
          "Création de planning & Q&R",
          "Quiz en direct, p. ex. anatomie",
          "Conférences de médecins invités",
          "Simulation d'oral",
          "High-yield hour sur les sujets de la communauté",
          "Discussions de cas cliniques (bientôt)",
        ],
      },
      {
        title: "Téléchargements",
        sub: "Prêts à l'emploi",
        items: ["Planificateur de semestre", "Fiches, à commencer par muscles & squelette", "Guide d'examen"],
      },
    ],
    pricing: {
      eyebrow: "Comment rejoindre",
      title: "Un prix, tout inclus",
      subtitle: "Un abonnement annuel avec tout ce dont tu as besoin : communauté et tous les ateliers inclus. Inscription et paiement sécurisés via Skool.",
      imgAlt: "Groupe d'étudiants en discussion",
      badge: "Tout inclus",
      plan: "Abonnement annuel",
      blurb: "Ton système complet pour toute une année universitaire. La communauté et tous les ateliers sont inclus, rien à acheter en plus.",
      perYear: "/ an",
      perMonth: "Soit environ {monthly} par mois.",
      compare: "À titre de comparaison : un seul semestre perdu coûte vite bien plus en loyer, frais de vie et temps perdu. Dans une université privée ou à l'étranger, une année de redoublement de {lost} vient s'ajouter. L'abonnement est rentabilisé dès qu'il t'épargne un seul semestre perdu.",
      included: [
        "Accès à la communauté medIQ lab sur Skool",
        "Série d'ateliers : stratégies d'apprentissage, stress & résilience, finances",
        "Séries vidéo en complément de chaque atelier",
        "Study Together & Community Café, chaque semaine",
        "Q&R, quiz en direct & création de planning",
        "Conférences de médecins invités",
        "Simulations d'oral",
        "Planificateur de semestre, fiches & guide d'examen",
        "Notre propre appli d'apprentissage IA",
      ],
      ctaNote: "Annuel · sécurisé via Skool · tout inclus",
      note: "Remarque : tous les contenus, l'inscription et le paiement passent par Skool. Cette page t'informe et t'y redirige.",
    },
    cta: {
      eyebrow: "Commencer",
      title: "Un prix, *tout inclus.*",
      subtitle: "Inscription, paiement et tous les contenus passent en toute sécurité par Skool. Cette page t'informe et t'y redirige.",
      secondary: "Des questions ? Voir la FAQ",
    },
  },

  pageUeber: {
    title: "À propos",
    description:
      "Nous nous présentons : Faith et Hannah, deux étudiantes en médecine avec une mission commune, rendre les études de médecine plus structurées, plus efficaces et un peu moins stressantes. Notre mission, nos quatre piliers, nos principes.",
    intro: {
      eyebrow: "Nous nous présentons",
      title: "On ne devrait pas étudier *seul.*",
      lead: "Derrière medIQ lab, il y a Faith et Hannah, deux étudiantes en médecine avec une idée commune : rendre les études de médecine plus structurées, plus efficaces et surtout un peu moins stressantes.",
    },
    who: {
      eyebrow: "Qui nous sommes",
      title: "Faith et Hannah",
      imgAlt: "Faith et Hannah, les fondatrices de medIQ lab",
      p1: "Nous sommes deux étudiantes en médecine avec la même mission : rendre l'apprentissage plus simple, plus structuré et plus efficace pour les étudiants.",
      p2: "Nous savons d'expérience ce que l'on ressent en médecine, et nous en avons fait un système qui tient vraiment : du système d'apprentissage à la stratégie d'examen jusqu'à la communauté qui fait la différence sur la durée.",
      quote: "Plus que des études. *Une communauté.*",
      cta: "Voir toute l'équipe",
    },
    labels: { year: "Année d'études :", subjects: "Matières préférées :", motivation: "Ce qui me motive", founderAlt: "{name}, fondatrice de medIQ lab" },
    founders: [
      {
        name: "Hannah",
        file: "hannah.jpg",
        year: "4e année",
        subjects: ["Physiologie", "Simulation Medicine"],
        motivation: "Ma motivation, c'est la vision de traverser les études de médecine de façon moins stressante, plus efficace et plus réussie grâce à un soutien ciblé. Je veux donner aux autres étudiants exactement les outils et les connaissances que j'aurais aimé avoir au début de mes propres études. Parce que personne ne devrait affronter seul un quotidien d'apprentissage aussi extrême.",
      },
      {
        name: "Faith",
        file: "faith.jpg",
        year: "4e année",
        subjects: ["Simulation Medicine", "Physiopathologie"],
        motivation: "Ma motivation est de soutenir les étudiants pour que le moins possible d'entre eux échouent aux examens. Surtout en première année, beaucoup testent laborieusement différentes approches. Celui qui trouve tôt la bonne stratégie réduit son propre taux d'échec, et économise un temps, de l'argent et des nerfs précieux.",
      },
    ],
    mission: {
      eyebrow: "Notre mission",
      title: "Moins de semestres perdus. Plus de diplômes obtenus sereinement.",
      lead: "Chaque semestre perdu coûte non seulement du temps, mais de l'argent, des nerfs et souvent un peu de confiance en soi. Dans une université privée ou à l'étranger, des années de redoublement de {lost} viennent vite s'ajouter. Ce n'est pas une fatalité.",
      points: [
        "Trouver ton propre chemin d'apprentissage, ensemble.",
        "Créer un espace où vous vous soutenez mutuellement et apprenez les uns des autres.",
        "Construire un équilibre études-vie qui deviendra plus tard un équilibre travail-vie.",
      ],
      quote: "La bonne médecine a besoin de personnes qui tiennent, *pas qui s'épuisent.*",
    },
    pillarsSection: {
      eyebrow: "Notre concept",
      title: "Les quatre piliers de la réussite en médecine",
      subtitle: "Système d'apprentissage, stratégie d'examen, stress & résilience et réseau. Ils forment la base d'une réussite durable, et nous t'aidons à améliorer chacun d'eux de façon ciblée.",
      cta: "Voir programme & tarifs",
    },
    values: {
      eyebrow: "Ce qui nous guide",
      title: "Quatre principes que nous prenons au sérieux",
      subtitle: "Ils ne sont pas juste écrits ici, ils déterminent comment nous construisons les contenus et comment nous communiquons avec toi.",
      items: [
        { title: "La science plutôt que l'intuition", body: "Nous nous appuyons sur des principes validés par la psychologie de l'apprentissage, pas sur des citations de motivation ou le prochain outil miracle." },
        { title: "La méthode plutôt que le mythe du talent", body: "Réussir n'est pas une question de génie inné mais de systèmes qui s'apprennent. Cela enlève la pression et te rend autonome." },
        { title: "L'honnêteté plutôt que le hype", body: "Pas de promesse de réussite garantie, pas de rareté inventée. Nous disons ce qui est réaliste, et ce qui ne l'est pas." },
        { title: "Ensemble plutôt que seul", body: "Les études sont un marathon. Une communauté qui te porte et t'engage fait la différence sur la durée." },
      ],
    },
    cta: {
      eyebrow: "Rejoindre",
      title: "Fais partie de *medIQ lab.*",
      subtitle: "Si cela te convainc, la meilleure étape suivante est la plus simple : rejoins la communauté et lance-toi.",
      secondary: "Voir la méthode",
    },
  },

  pageTeam: {
    title: "Équipe",
    description:
      "Les personnes derrière medIQ lab : Faith et Hannah, étudiantes en médecine et fondatrices, plus une équipe coaching et réseaux sociaux qui t'accompagne tout au long des études, en Allemagne et à l'étranger.",
    intro: {
      eyebrow: "L'équipe",
      title: "Les personnes derrière *medIQ lab.*",
      lead: "Pas un programme anonyme, mais une équipe qui est elle-même en plein milieu des études de médecine, sait ce que l'on ressent, et t'accompagne avec méthode, coaching et une communauté solide.",
    },
    faceEyebrow: "Le visage de medIQ lab",
    teamEyebrow: "En coulisses",
    teamTitle: "L'équipe derrière",
    leads: [
      { name: "Faith", role: "Fondatrice & étudiante en médecine", file: "faith.jpg" },
      { name: "Hannah", role: "Fondatrice & étudiante en médecine", file: "hannah.jpg" },
    ],
    team: [
      { name: "Daniela", role: "Naturopathe, thérapeute en relaxation, coach de vie & business", file: "daniela.jpg" },
      { name: "Jessi", role: "Réseaux sociaux", file: "jessi.jpg" },
      { name: "Lisi", role: "Réseaux sociaux", file: "lisi.jpg" },
    ],
    cta: {
      eyebrow: "Apprends à nous connaître",
      title: "Fais partie de *medIQ lab.*",
      subtitle: "Derrière medIQ lab, il y a de vraies personnes qui t'accompagnent dans tes études. Rejoins la communauté et fais notre connaissance.",
      secondary: "Voir la méthode",
    },
  },

  pageFaq: {
    title: "FAQ",
    description:
      "Réponses aux questions les plus fréquentes sur medIQ lab : pour qui (Allemagne et UE), comment fonctionnent l'inscription et le paiement via Skool, combien coûte l'abonnement annuel (399 €, tout inclus), et ce que nous ne promettons volontairement pas.",
    intro: {
      eyebrow: "FAQ",
      title: "Ce que tu veux encore savoir",
      lead: "Les questions les plus fréquentes sur le déroulement, l'accès, les tarifs et ce que medIQ lab peut réalistement apporter, avec des réponses honnêtes.",
      ctaContact: "Ta question n'y est pas ? Contact",
    },
    items: [
      {
        q: "Pour qui est medIQ lab ?",
        a: "Pour les étudiants en médecine en Allemagne et dans l'UE, en université publique ou privée, du premier semestre jusqu'aux examens finaux. Si tu apprends beaucoup et que tu as quand même l'impression que ce n'est pas assez, si tu veux réussir tes examens sereinement et éviter des retards coûteux, tu es au bon endroit.",
      },
      {
        q: "Est-ce que ça marche aussi si j'étudie en Allemagne ?",
        a: "Oui, expressément. medIQ lab est conçu pour les deux. Les méthodes fonctionnent quel que soit le lieu ou le cursus, et les ateliers, événements live, téléchargements et l'appli IA s'utilisent en ligne, que tu étudies à Heidelberg, Vienne ou Pécs.",
      },
      {
        q: "Combien coûte l'abonnement ?",
        a: "{yearly} par an, tout inclus : communauté, série d'ateliers, séries vidéo, événements live hebdomadaires comme Study Together et Community Café, conférences, simulations d'examen, téléchargements et appli IA. Pas d'extras cachés ni d'options payantes.",
      },
      {
        q: "Y a-t-il des réductions ou une garantie ?",
        a: "Il existe une réduction campus, demande-nous simplement dans la communauté ou via la page contact. Il n'y a pas de garantie de réussite, car personne ne peut sérieusement en donner une.",
      },
      {
        q: "Le prix en vaut-il vraiment la peine ?",
        a: "Fais le calcul honnêtement : un seul semestre perdu te coûte des mois de loyer et de frais de vie plus une entrée plus tardive dans la vie professionnelle. Dans une université privée ou à l'étranger, une année de redoublement de souvent {lost} vient s'ajouter. À cette aune, {yearly} par an sont un investissement rentabilisé dès qu'il t'épargne un seul semestre perdu.",
      },
      {
        q: "Comment se passent l'inscription et le paiement ?",
        a: "L'inscription et le paiement se font entièrement et en toute sécurité via Skool. Tu cliques sur l'un des boutons, tu arrives dans la communauté medIQ lab sur Skool et tu y souscris l'abonnement annuel. Ce site ne traite aucun paiement.",
      },
      {
        q: "Est-ce que vous garantissez la réussite ?",
        a: "Non, et quiconque le promet n'est pas sérieux. Réussir dépend de toi. Ce que nous offrons, c'est un système éprouvé et une communauté qui améliorent sensiblement tes chances en t'apprenant à travailler plus intelligemment, pas seulement plus dur.",
      },
    ],
    cta: {
      eyebrow: "Encore des questions ?",
      title: "Tout est clair ? *Alors c'est parti.*",
      subtitle: "Si ta question reste ouverte, écris-nous un mot, nous t'aidons avant que tu ne te décides.",
      secondary: "Nous contacter",
    },
  },

  pageKontakt: {
    title: "Contact",
    description: "Des questions sur medIQ lab, la méthode ou l'abonnement ? Écris-nous, ou rejoins directement la communauté sur Skool.",
    intro: {
      eyebrow: "Contact",
      title: "Parle-nous *avant de te décider.*",
      lead: "Question sur la méthode, l'abonnement, la réduction campus ou l'accès : nous répondons honnêtement et sans pression commerciale. Le plus rapide est de nous joindre directement dans la communauté.",
    },
    community: {
      title: "Communauté sur Skool",
      body: "La ligne la plus directe : pose ta question dans la communauté medIQ lab, souvent d'autres membres répondent aussi.",
      cta: "Vers la communauté",
    },
    email: { title: "E-mail", body: "Tu préfères le classique ? Écris-nous directement." },
    note: "Nous répondons généralement sous quelques jours ouvrés. Pour l'inscription et le paiement, tout passe directement par Skool, cette page ne traite aucun paiement.",
    form: {
      title: "Écris-nous",
      sub: "Nous te répondons personnellement.",
      honeypot: "Ne pas remplir :",
      name: "Nom",
      email: "E-mail",
      topic: "De quoi s'agit-il ?",
      optional: "(facultatif)",
      topicPlaceholder: "p. ex. question sur l'abonnement",
      message: "Message",
      submit: "Envoyer le message",
      consent: "En envoyant, tu acceptes le traitement de tes données pour le traitement de ta demande (voir confidentialité).",
    },
  },

  legal: {
    impressum: "Mentions légales",
    datenschutz: "Politique de confidentialité",
    notice: "Cette page est fournie en allemand, langue du siège juridique de la société exploitante.",
  },
};
