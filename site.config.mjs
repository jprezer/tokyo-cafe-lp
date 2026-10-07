export default {
  preset: "warm",

  brand: {
    name: "Tokyo 阿部 Café",
    shortName: "TC",
    tagline: "Uma pausa especial no seu dia.",
    logo: "/assets/tokyo-cafe-logo.png",
    logoAlt: "Tokyo 阿部 Café",
  },

  seo: {
    title: "Tokyo 阿部 Café | Cafés especiais em Araucária",
    description:
      "Tokyo 阿部 Café em Araucária: cafés especiais, matcha, croissants, torradas e doces em um espaço inspirado na cultura japonesa. Peça online.",
    keywords: [
      "cafeteria em Araucária",
      "café especial em Araucária",
      "matcha em Araucária",
      "croissant em Araucária",
      "Tokyo Café Araucária",
    ],
    canonical: "https://tokyo-cafe-two.vercel.app/",
    locale: "pt_BR",
    schemaType: "CafeOrCoffeeShop",
  },

  announcement: {
    label: "Fazenda Velha · Araucária",
    actionLabel: "Ver cardápio e pedir",
  },

  contact: {
    primaryLabel: "Pedir pelo cardápio",
    footerPrimaryLabel: "Fazer pedido",
    primaryUrl: "https://pedido.anota.ai/loja/tokyo-cafe",
    phone: "+55 41 99881-1325",
    instagramLabel: "Ver Instagram",
    socialLabel: "Instagram",
    instagramUrl: "https://www.instagram.com/tokyocafe.araucaria/",
    mapsUrl:
      "https://www.google.com/maps/place/TOKYO+%E9%98%BF%E9%83%A8+CAFE/@-25.5759704,-49.3990179,17z/data=!3m1!4b1!4m6!3m5!1s0x94dd038480b80c25:0x771a1ff7dd4d0eff!8m2!3d-25.5759704!4d-49.3990179!16s%2Fg%2F11ltp2zc0w",
  },

  navigation: [
    { label: "O café", href: "#servicos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Como chegar", href: "#visite" },
  ],

  hero: {
    kicker: "Café especial e sabores que acolhem",
    title: ["Faça uma", "pausa", "especial."],
    accentLine: 1,
    description:
      "Do espresso ao matcha, dos croissants aos doces de fabricação própria: um espaço tranquilo para aproveitar o seu tempo em Araucária.",
    image:
      "https://lh3.googleusercontent.com/grass-cs/ACvplmPrzA9bgPHZI0pZ5kv8W2TBRX0yERjojCjU8RKOKD5BIdXAlEa3ijc1MLexV5eW2MqEYo1MtdS4UBrR5enkl3oyEnKepWEV-0iKpKRlGl7NhU6rwwALu0QLmqPTU1Q8WD32UophHhlRiNc=w1200-h1200-n-k-no",
    imageAlt: "Croissant com queijo servido no Tokyo 阿部 Café",
    imagePosition: "58% center",
    proofLabel: "Cafés especiais",
    proofValue: "Cultura japonesa",
    scrollLabel: "Conheça o Tokyo",
  },

  statement: {
    label: "Uma pausa no seu dia",
    text: "Cafés especiais e sabores da casa em Araucária.",
    accent: "",
  },

  services: {
    title: "Mais do que um café.",
    description:
      "O Tokyo une o cuidado do café de especialidade a receitas que vão do clássico ao japonês — para uma pausa rápida ou uma tarde inteira.",
    items: [
      {
        title: "Cafés de origem",
        description:
          "Espresso, coados e bebidas preparadas com grãos de especialidade, respeitando o perfil de cada café.",
        detail: "Espresso · V60 · Cappuccino",
      },
      {
        title: "Matcha e criações da casa",
        description:
          "Matcha premium, frappés e bebidas autorais que trazem outras possibilidades para a pausa do dia.",
        detail: "Matcha · Frappés · Drinks autorais",
      },
      {
        title: "Forno, doce e aconchego",
        description:
          "Croissants, shokupan, cookies e sobremesas feitos para acompanhar a conversa — ou virar o motivo dela.",
        detail: "Croissants · Torradas · Doces",
      },
    ],
  },

  gallery: {
    label: "Escolha sua pausa",
    title: "Café para ficar. Sabores para voltar.",
    items: [
      {
        image:
          "https://lh3.googleusercontent.com/grass-cs/ACvplmOK2C8gthSBgwAtTEhDOz88srPa8_ORjo0xzYhipPGv1GCbynZnVsHpAx9m1HscDA8Unc6lrgyfmYccB7wrfe0b-ocEhAPbaRdDa6h-vs_a6HFcTNyMk7x38ZDJzW15cAgo6KKl7-ps34ta=w1200-h1200-n-k-no",
        alt: "Cappuccino servido no Tokyo 阿部 Café",
        caption: "Café especial",
      },
      {
        image:
          "https://lh3.googleusercontent.com/grass-cs/ACvplmNyDLnb6fGG3RpGdz4vewRBLRneGqn_p-utC52DCS7D4KliApU5eh5p3571WS7Dt21zbY5If8-j_XSBGm4ncNGJbytxwiSS9kk8H_mkM1iTkE2LbuTpjuZIgnFaK78NQAT1W2QFu_yxnODc=w1200-h1200-n-k-no",
        alt: "Matcha latte servido no Tokyo 阿部 Café",
        caption: "Matcha da casa",
      },
      {
        image:
          "https://lh3.googleusercontent.com/grass-cs/ACvplmPc61BHn8BIub7iagvJJkAgyUtEx16TwlSOpXSC8oeFQktf3w8VXUliTxc-811dBAH7H7gghmqdal7dG--j5lOch6x6joO5ny2npJT7uCjma8XEtSZ706mEa-sRQm1ZcmM5miPMdfz2vu2j=w1200-h1200-n-k-no",
        alt: "Taiyaki do Tokyo 阿部 Café",
        caption: "Doces da casa",
      },
    ],
  },

  reviews: {
    label: "Avaliações no Google",
    title: "Uma pausa que surpreende.",
    rating: "4,7",
    total: "104 avaliações no Google",
    sourceLabel: "Ver avaliações no Google Maps",
    items: [
      {
        quote:
          "Eu e meu marido sempre frequentamos cafés em Curitiba e pelo mundo, porém este superou em muito a maior parte deles.",
        author: "Thiago Wagner",
        score: "5/5 · Google",
      },
      {
        quote:
          "Adoramos o ambiente, o atendimento, os cafés, os salgados e bolos. Queremos voltar. Recomendo.",
        author: "Elibelto Almeida",
        score: "5/5 · Google",
      },
    ],
  },

  location: {
    label: "Venha fazer uma pausa",
    title: "Seu café em Araucária.",
    description:
      "O Tokyo 阿部 Café fica na Fazenda Velha, com opções para aproveitar no salão, retirar ou pedir pelo cardápio online.",
    actionLabel: "Traçar rota no Google Maps",
    addressLines: [
      "Rua Nossa Senhora dos Remédios, 2046",
      "Fazenda Velha · Araucária — PR · 83704-265",
    ],
    address: {
      street: "Rua Nossa Senhora dos Remédios, 2046",
      city: "Araucária",
      region: "PR",
      postalCode: "83704-265",
      country: "BR",
    },
    hours: [
      "Segunda a sexta · 12h às 20h",
      "Sábado e domingo · 9h30 às 20h",
    ],
    openingHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "20:00",
      },
      { days: ["Saturday", "Sunday"], opens: "09:30", closes: "20:00" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Tokyo+Cafe,+Rua+Nossa+Senhora+dos+Rem%C3%A9dios,+2046,+Arauc%C3%A1ria+-+PR&output=embed",
  },

  theme: {
    accent: "oklch(62% 0.12 31)",
    accentStrong: "oklch(69% 0.13 31)",
    ink: "oklch(18% 0.018 38)",
    paper: "oklch(96% 0.012 76)",
    displayFont: "'Noto Serif JP', Georgia, serif",
    bodyFont: "'DM Sans', Arial, sans-serif",
    fontGoogle:
      "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Noto+Serif+JP:wght@500;600;700&display=swap",
  },
};
