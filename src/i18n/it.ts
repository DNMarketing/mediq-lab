import type { Dict } from "./de";

export const it: Dict = {
  money: {
    yearly: "399 €",
    monthly: "33 €",
    lost: "da 10.000 a 20.000 €",
  },

  meta: {
    titleDefault: "medIQ lab: metodo e community per studenti di medicina",
    titleTemplate: "%s · medIQ lab",
    description:
      "Community di studio per studenti di medicina in Germania e nell'UE: workshop su strategie di studio e resilienza, eventi live settimanali e schemi.",
    ogTitle: "medIQ lab: community di studio per medicina",
    ogDescription:
      "Metodo e community per studenti di medicina in Germania e all'estero: workshop, serie video, schemi ed eventi live ogni settimana su Skool.",
  },

  common: {
    join: "Assicurati il posto",
    toHome: "Vai alla home",
    menuOpen: "Apri il menu",
    menuClose: "Chiudi il menu",
    mainNav: "Navigazione principale",
    skip: "Vai al contenuto",
    language: "Lingua",
    spots: "Solo {spots} posti rimasti",
  },

  nav: {
    methode: "Metodo",
    programm: "Programma",
    team: "Team",
    ueber: "Chi siamo",
    faq: "FAQ",
    kontakt: "Contatti",
  },

  mobileBar: { programm: "Programma" },

  footer: {
    tagline: "master your exams. become a physician.",
    blurb: "L'ecosistema di apprendimento per studenti di medicina. Studiare meglio, superare gli esami con sicurezza ed evitare deviazioni costose.",
    pages: "Pagine",
    start: "Inizia",
    joinCommunity: "Entra nella community →",
    programmPreise: "Programma & prezzi",
    legal: "Informazioni legali",
    impressum: "Note legali",
    datenschutz: "Privacy",
    rights: "© 2026 medIQ lab. Tutti i diritti riservati.",
    disclaimer: "medIQ lab non sostituisce la didattica ufficiale dell'università. I risultati variano da persona a persona.",
  },

  hero: {
    eyebrow: "Per studenti di medicina in Germania & all'estero",
    title: "Studiare meglio.\nSuperare gli esami con sicurezza.\n*Nessun anno perso.*",
    lead: "Un metodo di studio basato sulla ricerca, una strategia d'esame chiara, la nostra app IA e una community che ti sostiene. Perché nessun costoso anno di ripetizione ti rallenti, che tu studi in Germania o all'estero.",
    ctaMethod: "Come funziona il metodo",
    note: "Per studenti di medicina in Germania & nell'UE · {yearly} all'anno, tutto incluso · iscrizione tramite Skool",
    cardTitle: "Metodo invece di\nimparare a memoria",
    cardBody: "Richiamo attivo & ripetizione spaziata, fondati sulla psicologia dell'apprendimento.",
  },

  problemTeaser: {
    eyebrow: "Il problema",
    title: "Non è perché *studi troppo poco.*",
    lead: "La maggior parte non fallisce per mancanza di impegno, ma per *mancanza di un sistema.*",
    pains: [
      { lead: "Sommerso dalla quantità di materia", rest: ", e nessuno ti mostra cosa viene davvero chiesto all'esame." },
      { lead: "Leggere, evidenziare, dimenticare", rest: ". L'impegno senza sistema svanisce." },
      { lead: "Un tentativo fallito ha conseguenze", rest: ": un esame di recupero, più pressione e, nel peggiore dei casi, un anno di ripetizione, che in un'università privata o all'estero può costare facilmente {lost}." },
    ],
    quote: "Non un problema di talento. Un *problema di metodo.*",
    cta: "Da dove nasce il problema",
  },

  methodTeaser: {
    eyebrow: "I quattro pilastri",
    title: "Studiare in modo più intelligente, non più duro",
    subtitle: "Il tuo successo negli studi poggia su quattro pilastri: sistema di studio, strategia d'esame, stress & resilienza e rete. Niente frasi motivazionali, ma un sistema che ti accompagna per tutto il percorso.",
    cta: "Scopri tutto il metodo",
  },

  pillars: [
    {
      title: "Sistema di studio",
      sub: "Pilastro 1",
      short: "Un sistema di studio personale adatto alla tua quotidianità: strutture chiare, recupero pianificato, riflessione regolare.",
      body: "Un sistema di studio sostenibile è la base del successo a lungo termine. Non si tratta solo di cosa studi, ma di come strutturi, pianifichi e adatti il tuo studio alle nuove sfide. Ti aiutiamo a costruire un sistema che si adatti alla tua quotidianità: strutture chiare, fasi di recupero pianificate e riflessione regolare, perché il tuo carico resti efficace e sano nel tempo.",
      items: ["Workshop sulle strategie di studio", "Serie video strategie & app di studio", "Creazione del piano di studio dal vivo", "Planner del semestre"],
    },
    {
      title: "Strategia d'esame",
      sub: "Pilastro 2",
      short: "Una tabella di marcia strutturata con tappe realistiche, ripassi mirati e simulazione prima che conti davvero.",
      body: "Una preparazione efficace inizia molto prima del giorno dell'esame. Una strategia chiara aiuta a dare priorità alla materia, mantenere la visione d'insieme e richiamare le conoscenze al momento giusto. Insieme costruiamo la tua tabella di marcia con tappe realistiche, pianifichiamo i ripassi in modo mirato e adattiamo continuamente la strategia al tuo livello.",
      items: ["Tabella di marcia & logica delle domande d'esame passate", "Simulazione dell'esame orale", "Quiz dal vivo, p. es. anatomia", "Guida all'esame"],
    },
    {
      title: "Stress & resilienza",
      sub: "Pilastro 3",
      short: "Studiare in modo efficiente senza mettere a rischio la salute mentale: gestire l'ansia da esame, pause attive, strumenti di mindset.",
      body: "Enormi quantità di materia in poco tempo, paura di fallire, spesso lontano dalla famiglia e dall'ambiente abituale, e la sensazione di non aver mai fatto abbastanza. Insegniamo metodi per studiare in modo efficiente senza compromettere la salute mentale: affrontare con resilienza l'ansia da esame e le battute d'arresto, ancorare pause attive e strumenti di mindset nella quotidianità. Non uno sprint estenuante, ma arrivare all'abilitazione in salute e motivati. I nostri workshop non sostituiscono un trattamento psicologico o medico. Se l'ansia ti blocca in modo persistente, rivolgiti al servizio di consulenza psicologica della tua università o all'ente per il diritto allo studio.",
      items: ["Workshop stress & resilienza", "Serie video stress & resilienza", "Coaching per l'ansia da esame", "Pause attive & strumenti di mindset"],
    },
    {
      title: "Rete",
      sub: "Pilastro 4",
      short: "Una community di studenti di medicina in Germania e nelle università dell'UE che si spronano, condividono conoscenze e passano i consigli degli anni superiori.",
      body: "Quale specializzazione fa per me? Dove si trovano buoni tirocini? Senza contatti, i buoni consigli sono spesso questione di fortuna, e studiare all'estero senza una cerchia consolidata aggiunge ostacoli. Creiamo una community di studenti di medicina in Germania e nelle università dell'UE che si spronano, si motivano e condividono: sessioni di studio, gruppi di scambio e consigli collaudati degli anni superiori.",
      items: ["Study Together, ogni settimana", "Community Café, ogni settimana", "Conferenze di medici ospiti", "High-yield hour & Q&A"],
    },
  ],

  cost: {
    eyebrow: "Cosa c'è in gioco",
    line1: "Un anno di ripetizione in un'università privata o all'estero può costare facilmente",
    value1: "{lost}.",
    line2: "Un anno di medIQ lab:",
    value2: "{yearly}.",
    text: "La domanda non è se puoi permetterti medIQ lab, ma se puoi permetterti un anno perso.",
  },

  offer: {
    eyebrow: "Come entrare",
    title: "Un prezzo, tutto incluso",
    subtitle: "Niente pacchetti, niente upsell: un abbonamento annuale con community, workshop, serie video, eventi live settimanali, download e app IA.",
    plan: "Abbonamento annuale",
    badge: "Tutto incluso",
    blurb: "La community e tutti i workshop, per un anno intero, un solo prezzo.",
    perYear: "/ anno",
    perMonth: "Equivale a circa {monthly} al mese.",
    included: [
      "Accesso alla community su Skool",
      "Serie di workshop, circa 2× a semestre",
      "Serie video su strategie di studio, resilienza & finanze",
      "Study Together & Community Café, ogni settimana",
      "Conferenze di medici & simulazione d'esame",
      "Planner del semestre, schemi & guida all'esame",
      "La nostra app di studio con IA",
    ],
    details: "Vedi tutti i dettagli",
    note: "Iscrizione & pagamento sicuri tramite Skool · nessun costo nascosto",
  },

  faqTeaser: {
    eyebrow: "Prima di decidere",
    title: "Le domande più frequenti",
    items: [
      {
        q: "Il prezzo vale davvero la pena?",
        a: "Fai i conti onestamente: un semestre perso costa mesi di affitto e spese di vita, e in un'università privata o all'estero un anno di ripetizione può costare facilmente {lost}. In confronto, {yearly} all'anno si ripagano già se ti risparmiano un solo semestre perso.",
      },
      {
        q: "Garantite che supererò l'esame?",
        a: "No, e chiunque lo prometta non è serio. Superare l'esame dipende da te. Ti offriamo un sistema di studio basato su principi ben studiati dalla ricerca sull'apprendimento e una community che ti aiuta a non mollare.",
      },
      {
        q: "Studio in Germania, fa al caso mio?",
        a: "Sì, assolutamente. medIQ lab è pensato per studenti di medicina in Germania e nell'UE. I metodi funzionano indipendentemente da sede e piano di studi, e workshop, eventi live, download e app IA si usano online.",
      },
      {
        q: "Come funzionano iscrizione e pagamento?",
        a: "Interamente e in sicurezza tramite Skool. Clicchi un pulsante, arrivi nella community medIQ lab e lì sottoscrivi l'abbonamento annuale. Questo sito non gestisce alcun pagamento.",
      },
    ],
    all: "Tutte le domande & risposte",
  },

  cta: {
    eyebrow: "medIQ lab",
    title: "Studia in modo più intelligente da oggi, *non più duro.*",
    subtitle: "Ogni semestre che metti al sicuro ora è tempo e denaro che non perdi. Entra nella community medIQ lab e costruisci il tuo sistema di studio con workshop, eventi live settimanali e schemi.",
    note: "Iscrizione & pagamento sicuri tramite Skool · {yearly} all'anno, tutto incluso · nessun costo nascosto",
    secondary: "Programma & prezzi",
  },

  video: {
    caption: "Capire in 90 secondi",
    play: "Riproduci il video di presentazione",
    alt: "Faith e Hannah presentano medIQ lab",
    unsupported: "Il tuo browser non può riprodurre questo video.",
    min: "min",
  },

  chat: {
    name: "Assistente medIQ lab",
    status: "Chat automatica, risponde subito",
    open: "Apri l'assistente medIQ lab",
    close: "Chiudi la chat",
    teaser: "medIQ lab fa per te? Chiedimelo, ti aiuto in meno di un minuto. 👋",
    cta: {
      methode: "Come funziona il metodo",
      methode2: "Vedi il metodo",
      programm: "Programma & prezzi",
      programm2: "Vedi il programma",
      kontakt: "Vai alla pagina contatti",
    },
    options: {
      fear: "Ho ansia per il prossimo esame",
      method: "Studio tanto, non mi resta niente",
      cost: "Evitare un anno di ripetizione",
      price: "Quanto costa?",
      priceExact: "Quanto costa esattamente?",
      who: "Per chi è?",
      fit: "Fa al caso mio?",
      contact: "Preferisco chiedere a una persona vera",
      restart: "Ricomincia",
    },
    nodes: {
      start: ["Ehi 👋 In meno di un minuto ti mostro se medIQ lab fa per te.", "Cosa ti descrive meglio in questo momento?"],
      fear: [
        "Conosco bene questa sensazione, e quasi mai è un problema di conoscenze.",
        "Con medIQ lab ottieni strategia d'esame, logica delle domande passate e strumenti concreti contro la pressione, per entrare più tranquillo.",
      ],
      method: [
        "Allora è quasi sempre il metodo, non l'impegno.",
        "Con il richiamo attivo e la ripetizione spaziata ricordi la materia più a lungo, invece di leggerla tre volte e dimenticarla.",
      ],
      cost: [
        "Comprensibile, è il modo più costoso di perdere tempo.",
        "Un anno di ripetizione in un'università privata o all'estero può costare facilmente {lost}. Un anno di medIQ lab: {yearly}, ed è pensato per risparmiarti proprio questo.",
      ],
      price: [
        "Un prezzo, tutto incluso:",
        "{yearly} all'anno, circa {monthly} al mese. Community e tutti i workshop sono inclusi.",
        "In più: serie video, eventi live settimanali, conferenze di medici, simulazioni d'esame, download e app IA.",
        "L'iscrizione avviene in sicurezza tramite Skool.",
      ],
      who: [
        "Per studenti di medicina in Germania e nell'UE, in università pubbliche o private, dal primo semestre fino agli esami finali.",
        "Se studi tanto e hai comunque la sensazione che non basti: è esattamente per te.",
      ],
      contact: ["Certo. Scrivici semplicemente dalla pagina contatti, rispondiamo con onestà e senza pressioni commerciali."],
    },
  },

  pageMethode: {
    title: "Metodo di studio per medicina: i 4 pilastri",
    description:
      "Come medIQ lab porta il richiamo attivo e la ripetizione spaziata negli studi di medicina: sistema di studio, strategia d'esame, stress e rete.",
    intro: {
      eyebrow: "Il metodo",
      title: "Un metodo con fondamenta, *non intuito.*",
      lead: "medIQ lab non è una raccolta di frasi motivazionali. Si basa su come funziona l'apprendimento e su come sfruttarlo con costanza nel percorso di medicina.",
      ctaProgramm: "Vedi il programma",
    },
    problem: {
      eyebrow: "Ti suona familiare?",
      title: "Non è perché studi troppo poco.",
      lead: "La maggior parte degli studenti di medicina lavora sodo, ma raramente con un sistema che regge davvero. È esattamente qui che entra in gioco medIQ lab.",
      imageAlt: "Studente concentrato al laptop",
      pains: [
        { title: "Sommerso dalla quantità di materia", body: "Migliaia di pagine, centinaia di lezioni, e nessuno ti mostra cosa conta davvero per l'esame." },
        { title: "Studiare senza sistema", body: "Leggi, evidenzi, rileggi, e lo dimentichi prima dell'esame. L'impegno senza metodo svanisce." },
        { title: "Ansia da esame & vuoti di memoria", body: "La materia la sai, ma sotto pressione all'improvviso sparisce tutto." },
        { title: "Recuperi che incombono", body: "Un tentativo fallito e tutto il semestre vacilla. E la paura ti accompagna in ogni ripasso." },
        { title: "Semestri & anni di vita persi", body: "Ogni semestre perso significa: più affitto, più spese di vita, ingresso più tardivo nel lavoro." },
        { title: "Tasse universitarie alte all'estero", body: "In un'università privata o all'estero un anno di ripetizione può costare facilmente {lost}, in aggiunta a tutto il resto." },
      ],
      quote: "Non è un problema di talento. È un *problema di metodo*.",
      quoteSub: "E un metodo si può imparare, più in fretta di quanto pensi.",
    },
    principles: {
      eyebrow: "I quattro pilastri",
      title: "Il tuo successo negli studi poggia su quattro pilastri.",
      lead: "Sistema di studio, strategia d'esame, stress & resilienza e rete. Sono la base di un successo duraturo, e ti aiutiamo a migliorare ciascuno in modo mirato. È la differenza tra studiare più duro e studiare in modo più intelligente.",
      research: "I workshop sulle strategie di studio si basano su studi dedicati al richiamo attivo ([Roediger & Karpicke 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x); [Karpicke & Roediger 2008](https://doi.org/10.1126/science.1152408)) e su una meta-analisi sull'apprendimento distribuito ([Cepeda et al. 2006](https://doi.org/10.1037/0033-2909.132.3.354)).",
    },
    practice: {
      eyebrow: "In pratica",
      title: "Dal principio alla quotidianità",
      subtitle: "I principi da soli non superano un esame. Con medIQ lab diventano strumenti concreti che applichi dal primo giorno.",
      cta: "Vedi tutti i contenuti",
      items: [
        { title: "Anki, flashcard & app IA", body: "Richiamo attivo e ripetizione spaziata diventano concreti: schede che verificano davvero la materia, schemi pronti e la nostra app IA che ti accompagna nel ripasso fino agli esami finali." },
        { title: "Piani di studio personali & struttura settimanale", body: "I principi diventano un piano: una struttura settimanale che regge accanto a tirocinio e lavoro part-time, invece di buoni propositi che crollano dopo due settimane." },
        { title: "Analisi delle domande passate & simulazione dell'orale", body: "Riconoscere gli schemi d'esame, ricavarne le priorità e provare l'orale in condizioni realistiche, perché non sia più un salto nel buio." },
        { title: "Strumenti per la mente", body: "Ansia da esame, pressione e procrastinazione le affronti con metodi che funzionano quando conta, non con un « datti una regolata »." },
      ],
    },
    cta: {
      eyebrow: "Pronto?",
      title: "Studia con *metodo* da oggi.",
      subtitle: "I principi sono metà dell'opera, l'altra metà è metterli in pratica con un sistema e una community. È esattamente per questo che esiste medIQ lab.",
      secondary: "Programma & prezzi",
    },
  },

  pageProgramm: {
    title: "Programma e prezzo per studenti di medicina",
    description:
      "Workshop circa due volte a semestre, Study Together e Community Café ogni settimana, simulazioni dell'orale e schemi in un abbonamento annuale.",
    intro: {
      eyebrow: "Il programma",
      title: "Il tuo sistema completo, *dal sistema di studio agli esami finali.*",
      lead: "Un abbonamento, tutto incluso: serie di workshop, serie video, eventi live settimanali come Study Together e Community Café, conferenze di medici, simulazioni dell'orale, download e la nostra app IA. Per studenti di medicina in Germania e nell'UE, in università private o pubbliche.",
      ctaMethod: "Scopri prima il metodo",
    },
    vsl: {
      eyebrow: "90 secondi che valgono la pena",
      title: "Faith e Hannah presentano medIQ lab",
      subtitle: "In un minuto e mezzo scopri chi c'è dietro medIQ lab, cosa ti aspetta nella community e perché lo facciamo. Direttamente dalle fondatrici.",
      ctaAbout: "Di più su di noi",
    },
    modules: {
      eyebrow: "Cosa ottieni",
      title: "Tutto ciò che contiene l'abbonamento",
      lead: "Ecco come i quattro pilastri prendono forma: serie di workshop, serie video, eventi live settimanali e download pronti all'uso, più la nostra app IA. Tutto in un unico prezzo.",
      imgHeart: "Modello anatomico di cuore",
      imgMicroscope: "Microscopio in laboratorio",
      appTitle: "In più: la nostra app di studio con IA",
      appBody: "Interrogarti, ripassare, strutturare: l'app IA di medIQ lab ti accompagna tra un evento e l'altro ed è inclusa nell'abbonamento.",
      note: "Tutte le date, le registrazioni e i materiali si trovano nell'area riservata, direttamente nella community medIQ lab su Skool.",
    },
    formats: [
      {
        title: "Serie di workshop",
        sub: "Circa due volte a semestre, dal vivo",
        items: ["2 o 3 workshop sulle strategie di studio", "Workshop stress & resilienza", "Workshop finanze, assicurazioni & co."],
      },
      {
        title: "Serie video",
        sub: "A integrazione di ogni workshop",
        items: ["Strategie di studio, app & ottimizzazione del percorso", "Stress & resilienza", "Finanze, assicurazioni & co."],
      },
      {
        title: "Eventi live",
        sub: "Ogni settimana",
        items: [
          "Study Together, almeno 1× a settimana",
          "Community Café, 1× a settimana",
          "Creazione del piano di studio & Q&A",
          "Quiz dal vivo, p. es. anatomia",
          "Conferenze di medici ospiti",
          "Simulazione dell'esame orale",
          "High-yield hour sui temi della community",
          "Discussioni di casi clinici (in arrivo)",
        ],
      },
      {
        title: "Download",
        sub: "Subito pronti",
        items: ["Planner del semestre", "Schemi, a partire da muscoli & scheletro", "Guida all'esame"],
      },
    ],
    pricing: {
      eyebrow: "Come entrare",
      title: "Un prezzo, tutto incluso",
      subtitle: "Un abbonamento annuale con tutto ciò di cui hai bisogno: community e tutti i workshop inclusi. Iscrizione e pagamento sicuri tramite Skool.",
      imgAlt: "Gruppo di studenti in conversazione",
      badge: "Tutto incluso",
      plan: "Abbonamento annuale",
      blurb: "Il tuo sistema completo per un intero anno accademico. Community e tutti i workshop sono inclusi, non c'è nulla da aggiungere.",
      perYear: "/ anno",
      perMonth: "Equivale a circa {monthly} al mese.",
      compare: "Per confronto: un solo semestre perso può costare facilmente molto di più in affitto, spese di vita e tempo perso. In un'università privata o all'estero un anno di ripetizione può costare facilmente {lost} in più. L'abbonamento si ripaga già se ti risparmia un solo semestre perso.",
      included: [
        "Accesso alla community medIQ lab su Skool",
        "Serie di workshop: strategie di studio, stress & resilienza, finanze",
        "Serie video a integrazione di ogni workshop",
        "Study Together & Community Café, ogni settimana",
        "Q&A, quiz dal vivo & creazione del piano di studio",
        "Conferenze di medici ospiti",
        "Simulazioni dell'esame orale",
        "Planner del semestre, schemi & guida all'esame",
        "La nostra app di studio con IA",
      ],
      ctaNote: "Annuale · sicuro tramite Skool · tutto incluso",
      note: "Nota: tutti i contenuti, l'iscrizione e il pagamento passano da Skool. Questa pagina ti informa e ti indirizza lì.",
    },
    cta: {
      eyebrow: "Inizia",
      title: "Pronto? *Allora entra nella community.*",
      subtitle: "Iscrizione, pagamento e tutti i contenuti passano in sicurezza da Skool. Questa pagina ti informa e ti indirizza lì.",
      secondary: "Domande aperte? Vai alle FAQ",
    },
  },

  pageUeber: {
    title: "Chi siamo: due studentesse di medicina",
    description:
      "Faith e Hannah, studentesse di medicina al 4° anno, hanno fondato medIQ lab. Perché l'abbiamo creato, per chi è e i principi che ci guidano.",
    intro: {
      eyebrow: "Ci presentiamo",
      title: "Studiare non dovrebbe essere *un percorso solitario.*",
      lead: "Dietro medIQ lab ci sono Faith e Hannah, due studentesse di medicina con un'idea comune: rendere il percorso di medicina più strutturato, più efficace e soprattutto un po' meno stressante.",
    },
    who: {
      eyebrow: "Chi siamo",
      title: "Faith e Hannah",
      imgAlt: "Faith e Hannah, le fondatrici di medIQ lab",
      p1: "Siamo due studentesse di medicina con la stessa missione: rendere lo studio più semplice, più strutturato e più efficace per gli studenti.",
      p2: "Sappiamo per esperienza diretta cosa si prova a studiare medicina, e ne abbiamo ricavato un sistema che regge davvero: dal sistema di studio alla strategia d'esame fino alla community che fa la differenza sulla lunga distanza.",
      quote: "Più che studio. *Una community.*",
      cta: "Vedi tutto il team",
    },
    labels: { year: "Anno di corso:", subjects: "Materie preferite:", motivation: "Cosa mi motiva", founderAlt: "{name}, fondatrice di medIQ lab" },
    founders: [
      {
        name: "Hannah",
        file: "hannah.jpg",
        year: "4° anno",
        subjects: ["Fisiologia", "Simulation Medicine"],
        motivation: "La mia motivazione è la visione di affrontare il percorso di medicina in modo meno stressante, più efficiente e con più successo grazie a un supporto mirato. Voglio dare agli altri studenti esattamente gli strumenti e le conoscenze che avrei voluto avere all'inizio dei miei studi. Perché nessuno dovrebbe affrontare da solo una quotidianità di studio così estrema.",
      },
      {
        name: "Faith",
        file: "faith.jpg",
        year: "4° anno",
        subjects: ["Simulation Medicine", "Fisiopatologia"],
        motivation: "La mia motivazione è sostenere gli studenti perché il minor numero possibile di loro venga bocciato agli esami. Soprattutto al primo anno, molti provano faticosamente approcci diversi. Chi trova presto la strategia di studio giusta viene bocciato meno spesso e si risparmia tempo, denaro e stress.",
      },
    ],
    mission: {
      eyebrow: "La nostra missione",
      title: "Meno semestri persi. Più lauree raggiunte con sicurezza.",
      lead: "Ogni semestre perso costa non solo tempo, ma denaro, nervi e spesso un po' di fiducia in sé. In un'università privata o all'estero un anno di ripetizione può costare facilmente {lost}. Non deve andare così.",
      points: [
        "Trovare insieme a te il tuo percorso di studio.",
        "Creare uno spazio in cui vi sostenete a vicenda e imparate gli uni dagli altri.",
        "Costruire un equilibrio studio-vita che più avanti diventerà equilibrio lavoro-vita.",
      ],
      quote: "La buona medicina ha bisogno di persone che resistono, *non che si esauriscono.*",
    },
    pillarsSection: {
      eyebrow: "Il nostro concetto",
      title: "I quattro pilastri del successo negli studi",
      subtitle: "Sistema di studio, strategia d'esame, stress & resilienza e rete. Sono la base di un successo duraturo, e ti aiutiamo a migliorare ciascuno in modo mirato.",
      cta: "Vedi programma & prezzi",
    },
    values: {
      eyebrow: "Cosa ci guida",
      title: "Quattro principi che prendiamo sul serio",
      subtitle: "Non sono solo scritti qui, decidono come costruiamo i contenuti e come comunichiamo con te.",
      items: [
        { title: "Scienza invece di intuito", body: "Ci basiamo su principi validati dalla psicologia dell'apprendimento, non su citazioni motivazionali o sul prossimo strumento miracoloso." },
        { title: "Metodo invece del mito del talento", body: "Superare gli esami non è questione di genio innato ma di sistemi che si imparano. Questo toglie pressione e ti rende indipendente." },
        { title: "Onestà invece di hype", body: "Nessuna promessa di superamento garantito, nessuna scarsità inventata. Diciamo cosa è realistico, e cosa no." },
        { title: "Insieme invece che da soli", body: "Lo studio è una maratona. Una community che ti sostiene e ti aiuta a restare costante fa la differenza sulla lunga distanza." },
      ],
    },
    cta: {
      eyebrow: "Partecipa",
      title: "Entra a far parte di *medIQ lab.*",
      subtitle: "Se questo ti convince, il miglior passo successivo è il più semplice: entra nella community e comincia.",
      secondary: "Vedi il metodo",
    },
  },

  pageTeam: {
    title: "Il team: le fondatrici Faith e Hannah",
    description:
      "Le fondatrici Faith e Hannah, la coach Daniela, Jessi e Lisi per i social media: scopri chi fa cosa dietro le quinte di medIQ lab.",
    intro: {
      eyebrow: "Il team",
      title: "Le persone dietro *medIQ lab.*",
      lead: "Dietro medIQ lab ci sono Faith e Hannah, studentesse di medicina. Le supportano Daniela per rilassamento e coaching, Jessi e Lisi per i social media.",
    },
    faceEyebrow: "Il volto di medIQ lab",
    teamEyebrow: "Dietro le quinte",
    teamTitle: "Il team dietro",
    leads: [
      { name: "Faith", role: "Fondatrice & studentessa di medicina", file: "faith.jpg" },
      { name: "Hannah", role: "Fondatrice & studentessa di medicina", file: "hannah.jpg" },
    ],
    team: [
      { name: "Daniela", role: "Heilpraktikerin (operatrice sanitaria non medico, abilitata in Germania), terapeuta del rilassamento, life & business coach", file: "daniela.jpg" },
      { name: "Jessi", role: "Social media", file: "jessi.jpg" },
      { name: "Lisi", role: "Social media", file: "lisi.jpg" },
    ],
    cta: {
      eyebrow: "Conoscici",
      title: "Entra a far parte di *medIQ lab.*",
      subtitle: "Dietro medIQ lab ci sono persone vere che ti accompagnano negli studi. Entra nella community e conoscici.",
      secondary: "Vedi il metodo",
    },
  },

  pageFaq: {
    title: "FAQ: costi, iscrizione e funzionamento",
    description:
      "Quanto costa medIQ lab, come funziona l'iscrizione tramite Skool, se c'è uno sconto campus e perché non garantiamo il superamento degli esami.",
    intro: {
      eyebrow: "FAQ",
      title: "Domande frequenti su medIQ lab",
      lead: "Le domande più frequenti su procedura, accesso, prezzi e su cosa medIQ lab può realisticamente offrire, con risposte oneste.",
      ctaContact: "Non trovi la tua domanda? Contattaci",
    },
    items: [
      {
        q: "Per chi è medIQ lab?",
        a: "Per studenti di medicina in Germania e nell'UE, in università pubbliche o private, dal primo semestre fino agli esami finali. Se studi tanto e hai comunque la sensazione che non basti, se vuoi superare gli esami con sicurezza ed evitare ritardi costosi, sei nel posto giusto.",
      },
      {
        q: "Funziona anche se studio in Germania?",
        a: "Sì, assolutamente. medIQ lab è pensato per entrambi. I metodi funzionano indipendentemente da sede e piano di studi, e workshop, eventi live, download e app IA si usano online, che tu studi a Heidelberg, Vienna o Pécs.",
      },
      {
        q: "Quanto costa l'abbonamento?",
        a: "{yearly} all'anno, tutto incluso: community, serie di workshop, serie video, eventi live settimanali come Study Together e Community Café, conferenze, simulazioni d'esame, download e app IA. Nessun extra nascosto e nessun upsell. Trovi tutti i formati nel dettaglio nel [programma dell'abbonamento](/it/programm/).",
      },
      {
        q: "Ci sono sconti o una garanzia?",
        a: "C'è uno sconto campus, chiedicelo semplicemente nella community o dalla [pagina contatti](/it/kontakt/). Non esiste una garanzia di superamento, perché nessuno può darla seriamente.",
      },
      {
        q: "Il prezzo vale davvero la pena?",
        a: "Fai i conti onestamente: un solo semestre perso ti costa mesi di affitto e spese di vita più un ingresso più tardivo nel lavoro. In un'università privata o all'estero un anno di ripetizione può costare facilmente {lost} in più. In confronto, {yearly} all'anno sono un investimento che si ripaga già se ti risparmia un solo semestre perso.",
      },
      {
        q: "Come funzionano iscrizione e pagamento?",
        a: "Iscrizione e pagamento avvengono interamente e in sicurezza tramite Skool. Clicchi uno dei pulsanti, arrivi nella community medIQ lab su Skool e lì sottoscrivi l'abbonamento annuale. Questo sito non gestisce alcun pagamento.",
      },
      {
        q: "Garantite che supererò l'esame?",
        a: "No, e chiunque lo prometta non è serio. Superare l'esame dipende da te. Ti offriamo un sistema di studio basato su principi ben studiati dalla ricerca sull'apprendimento e una community che ti aiuta a non mollare.",
      },
    ],
    cta: {
      eyebrow: "Altre domande?",
      title: "Tutto chiaro? *Allora via.*",
      subtitle: "Se la tua domanda è rimasta aperta, scrivici due righe, ti aiutiamo prima che tu decida.",
      secondary: "Contattaci",
    },
  },

  pageKontakt: {
    title: "Contatti: domande sull'abbonamento",
    description: "Scrivici tramite il modulo o a info@mediq-lab.de. Di norma rispondiamo entro pochi giorni lavorativi, più in fretta nella community su Skool.",
    intro: {
      eyebrow: "Contatti",
      title: "Parla con noi *prima di decidere.*",
      lead: "Che si tratti del metodo, dell'abbonamento, dello sconto campus o dell'accesso: rispondiamo con onestà e senza pressioni commerciali. Il modo più rapido per raggiungerci è direttamente nella community.",
    },
    community: {
      title: "Community su Skool",
      body: "Il modo più rapido: fai la tua domanda nella community medIQ lab, spesso rispondono anche altri membri.",
      cta: "Vai alla community",
    },
    email: { title: "E-mail", body: "Preferisci il classico? Scrivici direttamente." },
    note: "Di norma rispondiamo entro pochi giorni lavorativi. Per iscrizione e pagamento si passa direttamente da Skool, questa pagina non gestisce alcun pagamento.",
    form: {
      title: "Scrivici",
      sub: "Ti rispondiamo personalmente.",
      honeypot: "Non compilare:",
      name: "Nome",
      email: "E-mail",
      topic: "Di cosa si tratta?",
      optional: "(facoltativo)",
      topicPlaceholder: "p. es. domanda sull'abbonamento",
      message: "Messaggio",
      submit: "Invia messaggio",
      consent: "Inviando accetti il trattamento dei tuoi dati per la gestione della tua richiesta (vedi privacy).",
    },
  },

  legal: {
    impressum: "Note legali",
    datenschutz: "Informativa sulla privacy",
    notice: "Questa pagina è fornita in tedesco, lingua della sede legale della società che gestisce il sito.",
  },
};
