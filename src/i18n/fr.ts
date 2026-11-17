import type { Dict } from "./de";

export const fr: Dict = {
  money: {
    monthly: "34,99 €",
    lernplan: "49 €",
    lost: "10 000 à 20 000 €",
  },

  meta: {
    titleDefault: "medIQ lab : méthode et communauté pour étudier la médecine",
    titleTemplate: "%s · medIQ lab",
    description:
      "Communauté d'apprentissage pour étudiants en médecine en Allemagne et dans l'UE : ateliers sur la méthode et la résilience, événements live et fiches.",
    ogTitle: "medIQ lab : communauté d'apprentissage en médecine",
    ogDescription:
      "Méthode et communauté pour étudiants en médecine en Allemagne et à l'étranger : ateliers, séries vidéo, fiches et événements live chaque semaine sur Skool.",
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
    infoCall: "Appel découverte gratuit",
    toApp: "Vers l'appli IA",
  },

  nav: {
    methode: "Méthode",
    programm: "Programme",
    team: "Équipe",
    ueber: "À propos",
    faq: "FAQ",
    kontakt: "Contact",
    shop: "Boutique",
    app: "Appli IA",
  },

  mobileBar: { programm: "Programme" },

  footer: {
    tagline: "master your exams. become a physician.",
    blurb: "L'écosystème d'apprentissage pour les étudiants en médecine. Apprendre plus efficacement, réussir sereinement et éviter les détours coûteux.",
    pages: "Pages",
    start: "Commencer",
    joinCommunity: "Rejoindre la communauté →",
    programmPreise: "Programme & tarifs",
    legal: "Informations légales",
    impressum: "Mentions légales",
    datenschutz: "Confidentialité",
    rights: "© 2026 medIQ lab. Tous droits réservés.",
    disclaimer: "medIQ lab ne remplace pas l'enseignement officiel de l'université. Les résultats varient d'une personne à l'autre.",
  },

  hero: {
    eyebrow: "Faith & Hannah · fondatrices de medIQ lab",
    title: "Le système d'apprentissage pour la médecine\n*que nous aurions aimé avoir.*",
    lead: "Nous sommes Faith et Hannah, et nous étudions nous-mêmes la médecine, en 4e année. Chez medIQ lab, tu trouves ce qui nous a manqué au début : une méthode d'apprentissage, une stratégie d'examen, notre propre appli IA et une communauté qui te soutient. Que tu étudies en Allemagne ou ailleurs dans l'UE.",
    note: "Appel découverte gratuit · communauté à {monthly} par mois via Skool",
    imgAlt: "Faith (à gauche) et Hannah (à droite), les fondatrices de medIQ lab, en blouse blanche avec un stéthoscope",
    videoCta: "Fais notre connaissance en vidéo",
  },

  homeFounders: {
    eyebrow: "Le visage de medIQ lab",
    title: "Salut, nous sommes *Faith et Hannah.*",
    lead: "Deux étudiantes en médecine avec une mission : rendre les études de médecine plus structurées, plus efficaces et un peu moins stressantes. Dans la vidéo (en anglais), nous t'expliquons en moins d'une minute pourquoi nous avons fondé medIQ lab.",
    quotes: [
      { name: "Faith", text: "Celui qui trouve tôt la bonne stratégie d'apprentissage échoue moins souvent et s'épargne du temps, de l'argent et du stress." },
      { name: "Hannah", text: "Je veux te donner exactement les outils que j'aurais aimé avoir au début de mes études." },
    ],
    cta: "En savoir plus sur nous",
  },

  journey: {
    eyebrow: "Comment nous t'accompagnons",
    title: "Trois étapes *vers ton système d'apprentissage.*",
    subtitle:
      "D'abord, nous regardons ensemble où tu en es. Ensuite, tu apprends avec nous et la communauté. Et si tu le souhaites, nous restons à tes côtés chaque mois.",
    step: "Étape",
    optional: "En option",
    steps: [
      {
        title: "Bilan de départ",
        body: "Lors de l'appel découverte gratuit, nous regardons où tu en es : ton semestre, tes prochains examens et ta façon d'apprendre jusqu'ici. Si tu le souhaites, nous en tirons ton planning de révision personnalisé.",
        meta: "Appel découverte gratuit · planning personnalisé {lernplan}",
        cta: "Réserver un appel découverte",
      },
      {
        title: "Ateliers & événements live",
        body: "Dans la communauté, tu mets ton plan en pratique : ateliers sur les stratégies d'apprentissage et la résilience, Study Together, quiz en direct et conférences de médecins invités. En live chaque semaine.",
        meta: "{monthly} par mois via Skool",
        cta: "Vers la communauté",
      },
      {
        title: "Suivi mensuel",
        body: "Une fois par mois, nous faisons le point ensemble sur ton plan : qu'est-ce qui marche, où ça coince, quelle est la prochaine étape ? Ainsi, ton système d'apprentissage reste à jour, même quand un nouveau semestre commence.",
        meta: "En option, parles-en lors de l'appel découverte",
        cta: "En parler lors de l'appel",
      },
    ],
    lernplanCta: "Réserver mon planning",
  },

  appShowcase: {
    eyebrow: "Notre appli d'apprentissage IA",
    title: "Ta matière sous forme de parcours. *Prof. MedIQ t'explique quand ça bloque.*",
    subtitle:
      "Notre propre appli te guide niveau par niveau à travers chaque matière jusqu'à l'examen final. Tout ce à quoi tu réponds mal atterrit dans l'arène des erreurs (Error Arena), jusqu'à ce que ce soit acquis. En allemand et en anglais.",
    tabsLabel: "Fonctions de l'appli",
    tabs: [
      {
        label: "Parcours",
        title: "Chaque matière comme une carte du monde",
        body: "Niveau par niveau jusqu'à l'examen final. Prof. MedIQ te montre où tu en es et ce qui t'attend ensuite.",
        alt: "Appli medIQ lab : carte du monde d'une matière avec une leçon et l'examen final",
      },
      {
        label: "Explications IA",
        title: "Expliqué comme tu en as besoin",
        body: "Après chaque question, tu peux relire le support, poser une question ou te faire expliquer le contenu sous forme d'image, de schéma, de comparaison, de moyen mnémotechnique ou de petite histoire à retenir.",
        alt: "Appli medIQ lab : question réussie avec des aides IA comme un moyen mnémotechnique et une petite histoire à retenir",
      },
      {
        label: "Erreurs",
        title: "Combler tes lacunes de façon ciblée",
        body: "Les questions ratées s'accumulent dans l'arène des erreurs. Ce n'est qu'une fois que tu les as toutes vaincues que l'examen final se débloque.",
        alt: "Appli medIQ lab : arène des erreurs, toutes les erreurs vaincues, examen final débloqué",
      },
      {
        label: "Progression",
        title: "Ton niveau en un coup d'œil",
        body: "Temps d'étude de la semaine, série de jours d'affilée et taux de réussite, plus toutes tes matières en cours. En ligue et en duel, tu te mesures aux autres.",
        alt: "Appli medIQ lab : statistiques avec temps d'étude, série de jours, taux de réussite et matières en cours",
      },
    ],
    features: ["Allemand & anglais", "QCM & réponse libre", "Ligue & duels"],
    cta: "Vers l'appli IA",
  },

  communityShowcase: {
    eyebrow: "Aperçu de la communauté",
    title: "Voici à quoi ressemble *la communauté de l'intérieur.*",
    subtitle:
      "Des cours, des fiches et un agenda bien rempli avec ateliers, Study Together et quiz en direct. Tout au même endroit, sur Skool.",
    courses: {
      title: "Salle de classe",
      body: "Un cours pour bien démarrer, le planificateur de semestre et des fiches d'anatomie (en allemand et en anglais) et de biochimie.",
      alt: "Salle de classe Skool de la communauté medIQ lab avec des cours comme le planificateur de semestre, les fiches d'anatomie et les fiches de biochimie",
    },
    calendar: {
      title: "Calendrier",
      body: "Des ateliers comme Stress & résilience ou SOS Anatomie, des sessions Study Together régulières et des quiz en direct, par exemple sur l'ECG.",
      alt1: "Calendrier de la communauté medIQ lab : atelier stress et résilience, Study Together, atelier d'anatomie",
      alt2: "Calendrier de la communauté medIQ lab : quiz en direct sur l'ECG, Study Together, atelier pour réviser pendant les fêtes",
    },
    caption: "Captures d'écran de la communauté medIQ lab sur Skool, en date de novembre 2026.",
    cta: "Rejoindre la communauté",
  },

  shopTeaser: {
    eyebrow: "Nouveau dans la boutique · dès décembre",
    title: "Anatomy *Survival Guide.*",
    body: "Notre premier produit numérique, en allemand et en anglais. Inscris-toi et nous te prévenons dès qu'il est disponible.",
    cta: "Vers la boutique",
  },

  problemTeaser: {
    eyebrow: "Le problème",
    title: "Le problème n'est pas que tu *n'apprennes pas assez.*",
    lead: "La plupart n'échouent pas par manque de travail, mais par absence de système. Trois symptômes que presque tous les étudiants en médecine connaissent.",
    symptom: "Symptôme",
    figure: "Fig.",
    pains: [
      {
        title: "Submergé par la masse de contenu",
        body: "Des milliers de pages, des centaines de cours, et personne ne te montre ce qui tombe vraiment à l'examen.",
        caption: "Schéma : le contenu d'un semestre et la part qui compte à l'examen.",
      },
      {
        title: "Lire, surligner, oublier",
        body: "Ce que tu te contentes de lire et de surligner a en grande partie disparu au bout de quelques jours. Le travail sans système s'évapore.",
        caption: "Schéma d'après la courbe de l'oubli de Hermann Ebbinghaus (1885).",
      },
      {
        title: "Un échec fait des vagues",
        body: "D'abord le rattrapage, puis plus de pression et, au pire, une année de redoublement. Dans une université privée ou à l'étranger, cela coûte vite {lost}.",
        caption: "Comment un seul échec peut s'étendre.",
      },
    ],
    matrix: { all: "Contenu du semestre", exam: "Ce qui tombe vraiment à l'examen" },
    curve: {
      retention: "Mémorisation",
      start: "Jour d'étude",
      exam: "Examen",
      passive: "Seulement lire et surligner",
      spaced: "Réviser avec un système",
    },
    ripple: ["Un échec", "Rattrapage", "Plus de pression", "Redoublement"],
    diagnosis: "Diagnostic",
    quote: "Pas un problème de talent. Un *problème de méthode.*",
    quoteSub: "Et une méthode, ça s'apprend, plus vite que tu ne le penses.",
    cta: "D'où vient le problème",
  },

  methodTeaser: {
    eyebrow: "Les quatre piliers",
    title: "Apprendre plus intelligemment, pas plus dur",
    subtitle: "Ta réussite repose sur quatre piliers : système d'apprentissage, stratégie d'examen, stress & résilience et réseau. Pas de phrases de motivation, mais un système qui te porte tout au long des études.",
    cta: "Voir toute la méthode",
  },

  pillars: [
    {
      title: "Système d'apprentissage",
      sub: "Pilier 1",
      short: "Un système d'apprentissage personnel adapté à ton quotidien : structures claires, récupération planifiée, réflexion régulière.",
      body: "Un système d'apprentissage durable est la base d'une réussite à long terme. Il ne s'agit pas seulement de ce que tu apprends, mais de la façon dont tu structures, planifies et adaptes ton apprentissage aux nouveaux défis. Nous t'aidons à construire un système qui correspond à ton quotidien : structures claires, phases de récupération planifiées et réflexion régulière, pour que ta charge de travail reste efficace et saine sur la durée.",
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
      short: "Apprendre efficacement sans mettre ta santé mentale en danger : gérer l'anxiété d'examen, pauses actives, outils de mindset.",
      body: "Des quantités énormes de matière en peu de temps, la peur de l'échec, souvent loin de la famille et de son environnement, et le sentiment de ne jamais en avoir fait assez. Nous transmettons des méthodes pour apprendre efficacement sans compromettre ta santé mentale : affronter l'anxiété d'examen et les revers avec résilience, ancrer pauses actives et outils de mindset dans ton quotidien. Pas un sprint épuisant, mais rester en bonne santé et motivé jusqu'au diplôme. Nos ateliers ne remplacent pas une prise en charge psychologique ou médicale. Si l'angoisse te bloque durablement, adresse-toi au service d'accompagnement psychologique de ton université ou aux services d'aide aux étudiants.",
      items: ["Atelier stress & résilience", "Série vidéo stress & résilience", "Coaching contre l'anxiété d'examen", "Pauses actives & outils de mindset"],
    },
    {
      title: "Réseau",
      sub: "Pilier 4",
      short: "Une communauté d'étudiants en médecine en Allemagne et dans les universités de l'UE qui se motivent, partagent leurs connaissances et transmettent les conseils des années supérieures.",
      body: "Quelle spécialité me correspond ? Où trouver de bons stages ? Sans contacts, les bons conseils relèvent souvent du hasard, et étudier à l'étranger sans entourage établi ajoute des obstacles. Nous créons une communauté d'étudiants en médecine en Allemagne et dans les universités de l'UE qui se motivent, s'encouragent et partagent : sessions d'étude, groupes d'échange et conseils éprouvés des années supérieures.",
      items: ["Study Together, chaque semaine", "Community Café, chaque semaine", "Conférences de médecins invités", "High-yield hour & Q&R"],
    },
  ],

  cost: {
    eyebrow: "Ce qui est en jeu",
    line1: "Une année de redoublement dans une université privée ou à l'étranger coûte vite",
    value1: "{lost}.",
    line2: "Un mois de medIQ lab :",
    value2: "{monthly}.",
    text: "La question n'est pas de savoir si tu peux te permettre medIQ lab, mais si tu peux te permettre une année perdue.",
  },

  offer: {
    eyebrow: "Comment rejoindre",
    title: "Un prix, tout inclus",
    subtitle: "Un abonnement avec communauté, ateliers, séries vidéo, événements live hebdomadaires, téléchargements et appli IA.",
    plan: "Abonnement",
    badge: "Tout inclus",
    blurb: "La communauté et tous les ateliers, un seul prix par mois.",
    per: "/ mois",
    billing: "Paiement mensuel, sécurisé via Skool.",
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
    note: "Inscription & paiement sécurisés via Skool · sans frais cachés",
    extra: "En option : la création de ton planning de révision personnalisé, pour {lernplan}.",
    extraCta: "Réserver mon planning",
  },

  faqTeaser: {
    eyebrow: "Avant de te décider",
    title: "Les questions les plus fréquentes",
    items: [
      {
        q: "Le prix en vaut-il vraiment la peine ?",
        a: "Fais le calcul honnêtement : un semestre perdu coûte des mois de loyer et de frais de vie, et dans une université privée ou à l'étranger, une année de redoublement coûte vite {lost}. À cette aune, {monthly} par mois sont rentabilisés dès qu'ils t'épargnent un seul semestre perdu.",
      },
      {
        q: "J'étudie en Allemagne, est-ce adapté ?",
        a: "Oui, tout à fait. medIQ lab est conçu pour les étudiants en médecine en Allemagne et dans l'UE. Les méthodes fonctionnent quel que soit le lieu ou le cursus, et les ateliers, événements live, téléchargements et l'appli IA s'utilisent en ligne.",
      },
      {
        q: "Comment se passent l'inscription et le paiement ?",
        a: "Entièrement et en toute sécurité via Skool. Tu cliques sur un bouton, tu arrives dans la communauté medIQ lab et tu y souscris l'abonnement. Ce site ne traite aucun paiement.",
      },
    ],
    all: "Toutes les questions & réponses",
  },

  cta: {
    eyebrow: "medIQ lab",
    title: "Apprends plus intelligemment dès aujourd'hui, *pas plus dur.*",
    subtitle: "Chaque semestre que tu sécurises maintenant, c'est du temps et de l'argent que tu ne perds pas. Rejoins la communauté medIQ lab et construis ton système d'apprentissage avec des ateliers, des événements live chaque semaine et des fiches.",
    note: "Inscription & paiement sécurisés via Skool · {monthly} par mois, tout inclus · sans frais cachés",
    secondary: "Programme & tarifs",
  },

  video: {
    caption: "Vidéo en anglais · moins d'une minute",
    play: "Lire la vidéo de présentation",
    alt: "Faith et Hannah présentent medIQ lab",
    unsupported: "Ton navigateur ne peut pas lire cette vidéo.",
    min: "min",
  },

  chat: {
    name: "Assistant medIQ lab",
    status: "Chat automatique, répond tout de suite",
    open: "Ouvrir l'assistant medIQ lab",
    close: "Fermer le chat",
    teaser: "medIQ lab est-il fait pour toi ? Demande-moi, je t'aide en moins d'une minute. 👋",
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
      price: "Combien ça coûte ?",
      priceExact: "Combien ça coûte exactement ?",
      who: "C'est pour qui ?",
      fit: "Est-ce fait pour moi ?",
      contact: "Je préfère demander directement",
      restart: "Recommencer",
    },
    nodes: {
      start: ["Hey 👋 En moins d'une minute, je te montre si medIQ lab est fait pour toi.", "Qu'est-ce qui te correspond le mieux en ce moment ?"],
      fear: [
        "Je connais, et ce n'est presque jamais un problème de connaissances.",
        "Chez medIQ lab, tu obtiens une stratégie d'examen, la logique des annales et des outils concrets contre la pression, pour entrer plus serein.",
      ],
      method: [
        "Alors c'est presque toujours la méthode, pas le travail.",
        "Avec le rappel actif et la répétition espacée, tu retiens la matière plus longtemps, au lieu de la lire trois fois puis de l'oublier.",
      ],
      cost: [
        "Compréhensible, c'est la façon la plus chère de perdre du temps.",
        "Une année de redoublement dans une université privée ou à l'étranger coûte vite {lost}. medIQ lab coûte {monthly} par mois et est conçu pour t'épargner exactement cela.",
      ],
      price: [
        "Un prix, tout inclus :",
        "{monthly} par mois. La communauté et tous les ateliers sont inclus.",
        "En plus : séries vidéo, événements live hebdomadaires, conférences de médecins, simulations d'examen, téléchargements et appli IA.",
        "L'inscription se fait en toute sécurité via Skool. En option, tu peux réserver la création de ton planning de révision personnalisé pour {lernplan}.",
      ],
      who: [
        "Pour les étudiants en médecine en Allemagne et dans l'UE, en université publique ou privée, du premier semestre jusqu'aux examens finaux.",
        "Si tu apprends beaucoup et que tu as quand même l'impression que ce n'est pas assez : c'est exactement pour toi.",
      ],
      contact: ["Bien sûr. Écris-nous simplement via la page contact, nous répondons honnêtement et sans pression commerciale."],
    },
  },

  pageMethode: {
    title: "Méthode de travail en médecine : les 4 piliers",
    description:
      "Comment medIQ lab applique le rappel actif et la répétition espacée aux études de médecine : système d'apprentissage, stratégie d'examen, stress, réseau.",
    intro: {
      eyebrow: "La méthode",
      title: "Une méthode avec des fondations, *pas de l'intuition.*",
      lead: "medIQ lab n'est pas un recueil de phrases de motivation. La méthode repose sur la façon dont fonctionne l'apprentissage, et sur la manière d'en tirer parti systématiquement en médecine.",
      ctaProgramm: "Voir le programme",
    },
    problem: {
      eyebrow: "Ça te parle ?",
      title: "Le problème n'est pas que tu n'apprennes pas assez.",
      lead: "La plupart des étudiants en médecine travaillent dur, mais rarement avec un système qui tient vraiment. C'est exactement là qu'intervient medIQ lab.",
      imageAlt: "Étudiant concentré devant un ordinateur portable",
      pains: [
        { title: "Submergé par la masse de contenu", body: "Des milliers de pages, des centaines de cours, et personne ne te montre ce qui compte vraiment pour l'examen." },
        { title: "Apprendre sans système", body: "Tu lis, surlignes, relis, et tu oublies tout avant l'examen. Le travail sans méthode s'évapore." },
        { title: "Anxiété d'examen & trous de mémoire", body: "Tu maîtrises la matière, mais sous pression tout disparaît d'un coup." },
        { title: "Rattrapages qui menacent", body: "Un échec, et tout le semestre vacille. Et la peur s'invite à chaque révision." },
        { title: "Semestres & années de vie perdus", body: "Chaque semestre perdu signifie : plus de loyer, plus de frais de vie, une entrée plus tardive dans la vie professionnelle." },
        { title: "Frais de scolarité élevés à l'étranger", body: "Dans une université privée ou à l'étranger, une année de redoublement coûte vite {lost}, en plus du reste." },
      ],
      quote: "Ce n'est pas un problème de talent. C'est un *problème de méthode*.",
      quoteSub: "Et une méthode, ça s'apprend, plus vite que tu ne le penses.",
    },
    principles: {
      eyebrow: "Les quatre piliers",
      title: "Ta réussite repose sur quatre piliers.",
      lead: "Système d'apprentissage, stratégie d'examen, stress & résilience et réseau. Ils forment la base d'une réussite durable, et nous t'aidons à améliorer chacun d'eux de façon ciblée. C'est la différence entre travailler plus dur et travailler plus intelligemment.",
      research: "Les ateliers de stratégies d'apprentissage s'appuient sur des études consacrées au rappel actif ([Roediger & Karpicke 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x) ; [Karpicke & Roediger 2008](https://doi.org/10.1126/science.1152408)) et sur une méta-analyse de l'apprentissage espacé ([Cepeda et al. 2006](https://doi.org/10.1037/0033-2909.132.3.354)).",
    },
    practice: {
      eyebrow: "En pratique",
      title: "Du principe au quotidien",
      subtitle: "Les principes seuls ne font pas réussir un examen. Chez medIQ lab, ils deviennent des outils concrets que tu appliques dès le premier jour.",
      cta: "Voir tout le contenu",
      items: [
        { title: "Anki, fiches & appli IA", body: "Le rappel actif et la répétition espacée deviennent concrets : des cartes qui testent vraiment la matière, des fiches prêtes à l'emploi et notre appli IA qui t'accompagne dans les révisions jusqu'aux examens finaux." },
        { title: "Plannings personnels & structure hebdomadaire", body: "Les principes deviennent un plan : une structure hebdomadaire qui tient à côté des stages et du job étudiant, plutôt que de bonnes résolutions qui s'effondrent au bout de deux semaines." },
        { title: "Analyse des annales & simulation d'oral", body: "Reconnaître les schémas d'examen, en déduire les priorités et répéter l'oral dans des conditions réalistes, pour que ce ne soit plus un saut dans l'inconnu." },
        { title: "Des outils pour la tête", body: "Tu affrontes l'anxiété, la pression et la procrastination avec des méthodes qui fonctionnent le jour J, pas avec un « ressaisis-toi »." },
      ],
    },
    cta: {
      eyebrow: "Prêt ?",
      title: "Apprends avec *méthode* dès aujourd'hui.",
      subtitle: "Les principes, c'est la moitié du chemin ; l'autre moitié, c'est la mise en pratique avec un système et une communauté. C'est exactement pour cela que medIQ lab existe.",
      secondary: "Programme & tarifs",
    },
  },

  pageProgramm: {
    title: "Programme et tarif pour étudiants en médecine",
    description:
      "Ateliers environ deux fois par semestre, Study Together et Community Café chaque semaine, simulations d'oral et fiches dans un seul abonnement.",
    intro: {
      eyebrow: "Le programme",
      title: "Ton système complet, *du système d'apprentissage aux examens finaux.*",
      lead: "Un abonnement, tout inclus : série d'ateliers, séries vidéo, événements live hebdomadaires comme Study Together et Community Café, conférences de médecins, simulations d'oral, téléchargements et notre propre appli IA. Pour les étudiants en médecine en Allemagne et dans l'UE, en université privée ou publique.",
      ctaMethod: "Voir d'abord la méthode",
    },
    vsl: {
      eyebrow: "Moins d'une minute qui en vaut la peine",
      title: "Faith et Hannah présentent medIQ lab",
      subtitle: "En moins d'une minute (en anglais), tu découvres qui est derrière medIQ lab, ce qui t'attend dans la communauté et pourquoi nous faisons cela. Directement par les fondatrices.",
      ctaAbout: "En savoir plus sur nous",
    },
    modules: {
      eyebrow: "Ce que tu obtiens",
      title: "Tout ce que contient l'abonnement",
      lead: "Voici comment les quatre piliers prennent forme : série d'ateliers, séries vidéo, événements live hebdomadaires et téléchargements prêts à l'emploi, plus notre propre appli IA. Le tout en un seul prix.",
      imgHeart: "Modèle anatomique de cœur",
      imgMicroscope: "Microscope en laboratoire",
      appTitle: "En plus : notre propre appli d'apprentissage IA",
      appBody: "S'interroger, réviser, structurer : l'appli IA medIQ lab t'accompagne entre les événements et est incluse dans l'abonnement.",
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
      subtitle: "Un abonnement avec tout ce dont tu as besoin : communauté et tous les ateliers inclus. Inscription et paiement sécurisés via Skool.",
      imgAlt: "Groupe d'étudiants en discussion",
      badge: "Tout inclus",
      plan: "Abonnement",
      blurb: "Ton système complet, mois après mois. La communauté et tous les ateliers sont inclus.",
      per: "/ mois",
      billing: "Paiement mensuel, sécurisé via Skool.",
      compare: "À titre de comparaison : un seul semestre perdu coûte vite bien plus en loyer, frais de vie et temps perdu. Dans une université privée ou à l'étranger, une année de redoublement coûte en outre vite {lost}. L'abonnement est rentabilisé dès qu'il t'épargne un seul semestre perdu.",
      included: [
        "Accès à la communauté medIQ lab sur Skool",
        "Série d'ateliers : stratégies d'apprentissage, stress & résilience, finances",
        "Séries vidéo en complément de chaque atelier",
        "Study Together & Community Café, chaque semaine",
        "Q&R, quiz en direct & création de planning",
        "Conférences de médecins invités",
        "Simulations d'oral",
        "Planificateur de semestre, fiches & guide d'examen",
        "Notre propre appli d'apprentissage IA",
      ],
      ctaNote: "Mensuel · sécurisé via Skool · tout inclus",
      note: "Remarque : tous les contenus, l'inscription et le paiement passent par Skool. Cette page t'informe et t'y redirige.",
    },
    cta: {
      eyebrow: "Commencer",
      title: "Prêt ? *Alors rejoins la communauté.*",
      subtitle: "Inscription, paiement et tous les contenus passent en toute sécurité par Skool. Cette page t'informe et t'y redirige.",
      secondary: "Des questions ? Voir la FAQ",
    },
  },

  pageUeber: {
    title: "À propos : fondé par deux étudiantes en médecine",
    description:
      "Faith et Hannah, étudiantes en médecine en 4e année, ont fondé medIQ lab. Pourquoi nous l'avons créé, pour qui, et les principes qui nous guident.",
    intro: {
      eyebrow: "Nous nous présentons",
      title: "On ne devrait pas étudier *seul.*",
      lead: "Derrière medIQ lab, il y a Faith et Hannah, deux étudiantes en médecine avec une idée commune : rendre les études de médecine plus structurées, plus efficaces et surtout un peu moins stressantes.",
    },
    who: {
      eyebrow: "Qui nous sommes",
      title: "Faith et Hannah",
      imgAlt: "Faith et Hannah, les fondatrices de medIQ lab",
      p1: "Nous sommes deux étudiantes en médecine avec la même mission : rendre l'apprentissage plus simple, plus structuré et plus efficace pour les étudiants.",
      p2: "Nous savons d'expérience ce que l'on ressent en médecine, et nous en avons fait un système qui tient vraiment : du système d'apprentissage à la stratégie d'examen jusqu'à la communauté qui fait la différence sur la durée.",
      quote: "Plus que des études. *Une communauté.*",
      cta: "Voir toute l'équipe",
    },
    labels: { year: "Année d'études :", subjects: "Matières préférées :", motivation: "Ce qui me motive", founderAlt: "{name}, fondatrice de medIQ lab" },
    founders: [
      {
        name: "Hannah",
        file: "hannah.jpg",
        year: "4e année",
        subjects: ["Physiologie", "Simulation Medicine"],
        motivation: "Ma motivation : aider les étudiants à traverser les études de médecine avec moins de stress, plus d'efficacité et plus de succès, grâce à un soutien ciblé. Je veux donner aux autres étudiants exactement les outils et les connaissances que j'aurais aimé avoir au début de mes propres études. Parce que personne ne devrait affronter seul un quotidien d'apprentissage aussi extrême.",
      },
      {
        name: "Faith",
        file: "faith.jpg",
        year: "4e année",
        subjects: ["Simulation Medicine", "Physiopathologie"],
        motivation: "Ma motivation est de soutenir les étudiants pour que le moins possible d'entre eux échouent aux examens. Surtout en première année, beaucoup testent laborieusement différentes approches. Celui qui trouve tôt la bonne stratégie échoue moins souvent et s'épargne du temps, de l'argent et du stress.",
      },
    ],
    mission: {
      eyebrow: "Notre mission",
      title: "Moins de semestres perdus. Plus de diplômes obtenus sereinement.",
      lead: "Chaque semestre perdu coûte non seulement du temps, mais de l'argent, des nerfs et souvent un peu de confiance en soi. Dans une université privée ou à l'étranger, une année de redoublement coûte vite {lost}. Ce n'est pas une fatalité.",
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
        { title: "L'honnêteté plutôt que la hype", body: "Pas de promesse de réussite garantie, pas de rareté inventée. Nous disons ce qui est réaliste, et ce qui ne l'est pas." },
        { title: "Ensemble plutôt que seul", body: "Les études sont un marathon. Une communauté qui te porte et t'engage fait la différence sur la durée." },
      ],
    },
    cta: {
      eyebrow: "Rejoindre",
      title: "Fais partie de *medIQ lab.*",
      subtitle: "Si cela te convainc, la meilleure étape suivante est la plus simple : rejoins la communauté et lance-toi.",
      secondary: "Voir la méthode",
    },
  },

  pageTeam: {
    title: "L'équipe : les fondatrices Faith et Hannah",
    description:
      "Les fondatrices Faith et Hannah, la coach Daniela, Jessi et Lisi pour les réseaux sociaux : découvre qui fait quoi chez medIQ lab.",
    intro: {
      eyebrow: "L'équipe",
      title: "Les personnes derrière *medIQ lab.*",
      lead: "Derrière medIQ lab, il y a Faith et Hannah, étudiantes en médecine. Daniela les soutient pour la relaxation et le coaching, Jessi et Lisi pour les réseaux sociaux.",
    },
    faceEyebrow: "Le visage de medIQ lab",
    teamEyebrow: "En coulisses",
    teamTitle: "L'équipe derrière",
    leads: [
      { name: "Faith", role: "Fondatrice & étudiante en médecine", file: "faith.jpg" },
      { name: "Hannah", role: "Fondatrice & étudiante en médecine", file: "hannah.jpg" },
    ],
    team: [
      { name: "Daniela", role: "Heilpraktikerin (praticienne de santé non médecin, agréée en Allemagne), thérapeute en relaxation, coach de vie & business", file: "daniela.jpg" },
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
    title: "FAQ : coût, inscription et déroulement",
    description:
      "Combien coûte medIQ lab, comment se passe l'inscription via Skool, s'il existe une réduction campus et si ça marche aussi quand on étudie en Allemagne.",
    intro: {
      eyebrow: "FAQ",
      title: "Questions fréquentes sur medIQ lab",
      lead: "Les questions les plus fréquentes sur le déroulement, l'accès et les tarifs, avec des réponses honnêtes.",
      ctaContact: "Ta question n'y est pas ? Contact",
    },
    items: [
      {
        q: "Pour qui est medIQ lab ?",
        a: "Pour les étudiants en médecine en Allemagne et dans l'UE, en université publique ou privée, du premier semestre jusqu'aux examens finaux. Si tu apprends beaucoup et que tu as quand même l'impression que ce n'est pas assez, si tu veux réussir tes examens sereinement et éviter des retards coûteux, tu es au bon endroit.",
      },
      {
        q: "Est-ce que ça marche aussi si j'étudie en Allemagne ?",
        a: "Oui, tout à fait. medIQ lab est conçu pour les deux. Les méthodes fonctionnent quel que soit le lieu ou le cursus, et les ateliers, événements live, téléchargements et l'appli IA s'utilisent en ligne, que tu étudies à Heidelberg, Vienne ou Pécs.",
      },
      {
        q: "Combien coûte l'abonnement ?",
        a: "{monthly} par mois, tout inclus : communauté, série d'ateliers, séries vidéo, événements live hebdomadaires comme Study Together et Community Café, conférences, simulations d'examen, téléchargements et appli IA. Il n'y a pas de frais cachés. En option, tu peux ajouter la création de ton planning de révision personnalisé pour {lernplan}. Tu trouves tous les formats en détail dans le [programme de l'abonnement](/fr/programm/).",
      },
      {
        q: "Y a-t-il des réductions ?",
        a: "Oui, il existe une réduction campus. Demande-nous simplement dans la communauté ou via la [page contact](/fr/kontakt/).",
      },
      {
        q: "Le prix en vaut-il vraiment la peine ?",
        a: "Fais le calcul honnêtement : un seul semestre perdu te coûte des mois de loyer et de frais de vie, plus une entrée plus tardive dans la vie professionnelle. Dans une université privée ou à l'étranger, une année de redoublement coûte en outre vite {lost}. À cette aune, {monthly} par mois sont un investissement rentabilisé dès qu'il t'épargne un seul semestre perdu.",
      },
      {
        q: "Comment se passent l'inscription et le paiement ?",
        a: "L'inscription et le paiement se font entièrement et en toute sécurité via Skool. Tu cliques sur l'un des boutons, tu arrives dans la communauté medIQ lab sur Skool et tu y souscris l'abonnement. Ce site ne traite aucun paiement.",
      },
    ],
    cta: {
      eyebrow: "Encore des questions ?",
      title: "Tout est clair ? *Alors c'est parti.*",
      subtitle: "Si ta question reste ouverte, écris-nous un mot, nous t'aidons avant que tu ne te décides.",
      secondary: "Nous contacter",
    },
  },

  pageKontakt: {
    title: "Contact : questions sur l'abonnement",
    description: "Écris-nous via le formulaire ou à info@mediq-lab.de. Nous répondons généralement sous quelques jours ouvrés, plus vite dans la communauté sur Skool.",
    intro: {
      eyebrow: "Contact",
      title: "Parle-nous *avant de te décider.*",
      lead: "Question sur la méthode, l'abonnement, la réduction campus ou l'accès : nous répondons honnêtement et sans pression commerciale. Le plus rapide est de nous joindre directement dans la communauté.",
    },
    community: {
      title: "Communauté sur Skool",
      body: "Le moyen le plus rapide : pose ta question dans la communauté medIQ lab, souvent d'autres membres répondent aussi.",
      cta: "Vers la communauté",
    },
    email: { title: "E-mail", body: "Tu préfères le classique ? Écris-nous directement." },
    note: "Nous répondons généralement sous quelques jours ouvrés. Pour l'inscription et le paiement, tout passe directement par Skool, cette page ne traite aucun paiement.",
    form: {
      title: "Écris-nous",
      sub: "Nous te répondons personnellement.",
      honeypot: "Ne pas remplir :",
      name: "Nom",
      email: "E-mail",
      topic: "De quoi s'agit-il ?",
      optional: "(facultatif)",
      topicPlaceholder: "p. ex. question sur l'abonnement",
      message: "Message",
      submit: "Envoyer le message",
      consent: "En envoyant ce formulaire, tu acceptes que tes données soient traitées pour répondre à ta demande (voir confidentialité).",
    },
  },

  pageShop: {
    title: "Boutique : Anatomy Survival Guide et planning de révision",
    description:
      "L'Anatomy Survival Guide de medIQ lab sort en décembre en allemand et en anglais. Et aussi : planning de révision personnalisé et appel découverte gratuit.",
    intro: {
      eyebrow: "Boutique",
      title: "Nos supports de révision, *pour tes examens.*",
      lead: "Des produits numériques et un accompagnement personnel par Faith et Hannah. Premier de la liste : notre Anatomy Survival Guide.",
    },
    product: {
      badge: "Sortie en décembre 2026",
      eyebrow: "Produit numérique",
      name: "Anatomy Survival Guide",
      lead: "Pour beaucoup, l'anatomie est le premier grand obstacle des études de médecine. Notre Survival Guide est conçu pour t'aider à le franchir : compact, en allemand et en anglais, écrit par des étudiantes en médecine pour des étudiants en médecine.",
      coverLabel: "Aperçu de la couverture",
      langLabel: "Version linguistique",
      planned: "à venir",
      langs: [
        { code: "DE", label: "Deutsch", cover: "Anatomie", planned: false },
        { code: "EN", label: "English", cover: "Anatomy", planned: false },
        { code: "CZ", label: "Čeština", cover: "Anatomie", planned: true },
      ],
      facts: [
        { k: "Format", v: "Téléchargement numérique" },
        { k: "Langues", v: "Allemand, anglais (tchèque à venir)" },
        { k: "Sortie", v: "Décembre 2026" },
        { k: "Prix", v: "communiqué au lancement" },
      ],
      contentsTitle: "Ce qu'il contient",
      contentsNote: "Le sommaire et des pages d'exemple suivront dès que le guide sera terminé.",
      buy: "Disponible dès décembre",
    },
    waitlist: {
      title: "Préviens-moi quand il sort",
      sub: "Nous t'envoyons un e-mail dès que le guide est disponible.",
      honeypot: "Ne pas remplir :",
      email: "E-mail",
      lang: "Version linguistique",
      submit: "Me prévenir",
      consent:
        "En envoyant ce formulaire, tu acceptes que nous enregistrions ton adresse e-mail pour te prévenir de la sortie du guide (voir confidentialité). Tu peux retirer ton consentement à tout moment.",
    },
    services: {
      eyebrow: "Accompagnement personnel",
      title: "Plutôt en direct *avec nous ?*",
      subtitle: "En plus des produits numériques, nous t'accompagnons aussi personnellement. Tu réserves tes rendez-vous directement dans notre agenda.",
      items: [
        {
          price: "gratuit",
          title: "Appel découverte individuel",
          body: "Nous regardons ensemble où tu en es et ce qui t'aiderait le plus en ce moment. Sans engagement.",
          cta: "Choisir un créneau",
        },
        {
          price: "{lernplan}",
          title: "Planning de révision personnalisé",
          body: "Nous créons avec toi ton planning de révision, adapté à tes examens et à ton quotidien.",
          cta: "Réserver un rendez-vous",
        },
        {
          price: "{monthly} / mois",
          title: "Communauté medIQ lab",
          body: "Ateliers, événements live, fiches et échanges avec d'autres étudiants en médecine sur Skool.",
          cta: "Vers la communauté",
        },
      ],
      note: "Tu réserves tes rendez-vous via Cal.com, l'abonnement passe par Skool.",
    },
  },

  legal: {
    impressum: "Mentions légales",
    datenschutz: "Politique de confidentialité",
    notice: "Cette page est fournie en allemand, langue du siège juridique de la société exploitante.",
  },
};
