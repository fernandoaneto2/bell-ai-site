export type Lang = "en" | "pt" | "es" | "fr" | "de" | "it";

export interface Translations {
  nav: {
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    h1Line1: string;
    h1Line2: string;
    h1Line3: string;
    h1Line4: string;
    sub: string;
    cta1: string;
    cta2: string;
    trust: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { stat: string; title: string; description: string }[];
  };
  meetBell: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    titleD: string;
    sub1: string;
    sub2: string;
    bullets: string[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    ctaPrefix: string;
    tabs: {
      label: string;
      emoji: string;
      headline: string;
      subheadline: string;
      items: { title: string; description: string }[];
    }[];
  };
  results: {
    eyebrow: string;
    title: string;
    sub: string;
    metrics: { value: string; label: string; sublabel: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
  };
  finalCta: {
    urgency: string;
    h1: string;
    h2: string;
    sub: string;
    cta1: string;
    cta2: string;
    trust: string;
  };
  trustedBy: string;
  footer: {
    description: string;
    product: string;
    company: string;
    productLinks: { label: string; href: string }[];
    companyLinks: { label: string; href: string }[];
    copyright: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      links: [
        { label: "How it Works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Book a Demo",
    },
    hero: {
      eyebrow: "AI Concierge for Hospitality",
      h1Line1: "Because every missed call",
      h1Line2: "is a lost reservation.",
      h1Line3: "Every delayed answer",
      h1Line4: "is a frustrated customer.",
      sub: "bell.ai is an AI concierge that handles reservations, requests, and questions across WhatsApp, Instagram, and your website — 24/7, in any language, in your brand voice.",
      cta1: "Book a Demo",
      cta2: "See It in Action",
      trust: "Trusted by 50+ hospitality establishments",
    },
    problem: {
      eyebrow: "The Problem",
      title: "Hospitality runs on conversations.\nMost of them shouldn't need a human.",
      sub: "Your team is overwhelmed by repetitive questions while real opportunities slip away.",
      items: [
        {
          stat: "70%",
          title: "of guest messages are repetitive",
          description:
            '"What time is check-in?" "Do you have parking?" "Is the pool open?" — the same questions, hundreds of times a week.',
        },
        {
          stat: "11pm",
          title: "After-hours inquiries become lost bookings",
          description:
            "Guests reach out late at night. By morning, they've booked elsewhere. Every unanswered message is a missed opportunity.",
        },
        {
          stat: "∞",
          title: "Staff burnout is real",
          description:
            "Reception teams answering the same questions hundreds of times per week. Repetition kills morale — and your best people.",
        },
      ],
    },
    meetBell: {
      eyebrow: "The Solution",
      titleA: "An AI concierge that",
      titleB: "never sleeps,",
      titleC: "never forgets, and",
      titleD: "sounds like you.",
      sub1: "bell.ai connects to your booking system, your menu, your policies, and your brand voice. Then it talks to your guests on WhatsApp, Instagram, and your website — instantly, accurately, 24/7.",
      sub2: "When something needs a human, it hands off seamlessly to your team.",
      bullets: [
        "Trained on YOUR establishment, not generic FAQs",
        "Speaks every language your guests speak",
        "Hands off to humans when it should",
        "Live in days, not months",
      ],
    },
    howItWorks: {
      eyebrow: "Process",
      title: "From signup to first conversation in under 7 days.",
      steps: [
        {
          title: "Connect",
          description:
            "Tell us about your establishment. Share your menu, policies, FAQs, and tone of voice.",
        },
        {
          title: "Train",
          description:
            "We build your AI concierge on top of your real content. You review and approve before anything goes live.",
        },
        {
          title: "Deploy",
          description:
            "Plug bell.ai into WhatsApp Business, Instagram DMs, and your website with a single line of code.",
        },
        {
          title: "Grow",
          description:
            "Watch response times drop, bookings rise, and your team focus on what actually matters.",
        },
      ],
    },
    features: {
      eyebrow: "Features",
      title: "Built for hospitality, end to end.",
      items: [
        {
          title: "Multi-channel",
          description: "WhatsApp, Instagram, web chat. One brain, every channel.",
        },
        {
          title: "Multilingual",
          description: "Detects and responds in 50+ languages automatically.",
        },
        {
          title: "Smart handoff",
          description: "Knows when to escalate to your team — and brings full context.",
        },
        {
          title: "Booking integration",
          description: "Connects to your PMS, calendar, or reservation system.",
        },
        {
          title: "Brand voice",
          description: "Trained on your tone. Sounds like your concierge, not a robot.",
        },
        {
          title: "Analytics",
          description: "See what guests ask, where they convert, where you lose them.",
        },
      ],
    },
    useCases: {
      eyebrow: "Use Cases",
      title: "One platform. Every kind of establishment.",
      ctaPrefix: "See it working for",
      tabs: [
        {
          label: "Restaurants & Bars",
          emoji: "🍽️",
          headline: "Fill more tables. Reduce no-shows. Zero extra cost.",
          subheadline:
            "bell.ai handles reservations, menu questions, and orders 24/7 — so your team can focus on the experience.",
          items: [
            {
              title: "Table reservation management",
              description: "Accept, confirm, and follow up on bookings automatically — even at 3am.",
            },
            {
              title: "Interactive menu & specials",
              description: "Guests browse your menu, ask about ingredients, and get today's specials via chat.",
            },
            {
              title: "Takeaway & delivery orders",
              description: "Handle pickup and delivery requests directly over WhatsApp or Instagram.",
            },
            {
              title: "Instant FAQ responses",
              description: "Parking, hours, dietary options — answered instantly, every time.",
            },
            {
              title: "Post-visit review collection",
              description: "Automatically follow up to collect reviews at exactly the right moment.",
            },
          ],
        },
        {
          label: "Hotels & Resorts",
          emoji: "🏨",
          headline: "A 5-star concierge running 24/7 on every channel.",
          subheadline:
            "Handle check-in, concierge requests, and amenity questions without adding headcount.",
          items: [
            {
              title: "Express check-in & check-out",
              description: "Pre-arrival info, early check-in requests, late check-out — all automated.",
            },
            {
              title: "Room service requests",
              description: "Guests order room service or request extras directly via WhatsApp.",
            },
            {
              title: "Local & amenity information",
              description: "Pool hours, spa bookings, restaurant recommendations — on-demand, 24/7.",
            },
            {
              title: "Virtual concierge",
              description: "Taxis, airport transfers, activity reservations — handled by Bell.",
            },
            {
              title: "Satisfaction follow-ups",
              description: "Mid-stay check-ins and post-stay surveys that actually get answered.",
            },
          ],
        },
        {
          label: "Pousadas & Boutique",
          emoji: "🌿",
          headline: "Your warmth and personality — at scale.",
          subheadline:
            "bell.ai mirrors your unique voice and style. Boutique service, without the extra workload.",
          items: [
            {
              title: "Personalized welcome messages",
              description: "Greet each guest by name with tailored pre-arrival information.",
            },
            {
              title: "Direct booking management",
              description: "Handle reservations without relying solely on OTA platforms.",
            },
            {
              title: "Multilingual guests",
              description: "International travelers get responses in their language — automatically.",
            },
            {
              title: "Your brand voice",
              description: "Warm, local, and authentic. Not a generic chatbot — your concierge.",
            },
            {
              title: "Always available",
              description: "Close bookings while you sleep. Respond to late-night inquiries instantly.",
            },
          ],
        },
        {
          label: "Spas & Wellness",
          emoji: "💆",
          headline: "A pre-arrival experience that converts.",
          subheadline:
            "From inquiry to booked appointment — bell.ai guides every guest without lifting a finger.",
          items: [
            {
              title: "Appointment booking",
              description: "Massages, treatments, and classes booked directly via chat.",
            },
            {
              title: "Package information",
              description: "Guests explore packages, prices, and availability instantly.",
            },
            {
              title: "Pre-arrival onboarding",
              description: "Health forms and preparation tips sent automatically before each visit.",
            },
            {
              title: "Rescheduling & cancellations",
              description: "Handle changes without phone calls or back-and-forth emails.",
            },
            {
              title: "Loyalty & return booking",
              description: "Follow up after visits to drive repeat business and referrals.",
            },
          ],
        },
      ],
    },
    results: {
      eyebrow: "Results",
      title: "Numbers that change the conversation.",
      sub: "Based on aggregated data from pilot clients — updated quarterly",
      metrics: [
        { value: "+40%", label: "Increase in online bookings", sublabel: "Average across pilot clients" },
        { value: "<2s", label: "Average response time", sublabel: "Any hour, any channel" },
        { value: "8h", label: "Staff hours freed per day", sublabel: "Per property, on average" },
        { value: "70%", label: "Inquiries resolved by AI", sublabel: "Without human intervention" },
        { value: "24/7", label: "Always available", sublabel: "No sick days, no holidays" },
        { value: "50+", label: "Languages supported", sublabel: "Automatic detection" },
      ],
    },
    testimonials: {
      eyebrow: "What They Say",
      title: "Establishments that trust bell.ai.",
    },
    finalCta: {
      urgency: "Only 5 spots remaining for free onboarding this month",
      h1: "Your guests are already asking.",
      h2: "Make sure someone's answering.",
      sub: "Book a free 20-minute demo. See bell.ai trained live on your establishment — no commitment required.",
      cta1: "Book Free Demo →",
      cta2: "Chat on WhatsApp",
      trust: "No credit card required · Setup in under 7 days · Cancel anytime",
    },
    trustedBy: "Trusted by establishments across hospitality",
    footer: {
      description:
        "Automating guest conversations across WhatsApp, Instagram, and your website — 24/7, in any language.",
      product: "Product",
      company: "Company",
      productLinks: [
        { label: "How it Works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "Pricing", href: "#pricing" },
      ],
      companyLinks: [
        { label: "About", href: "#" },
        { label: "Contact", href: "mailto:hello@bell.ai" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
      copyright: "Built for hospitality",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions.",
      items: [
        {
          question: "How long does it take to launch?",
          answer:
            "Most establishments are live within 7 days. We handle the setup, training, and integration — you review and approve before anything goes live.",
        },
        {
          question: "Which channels does bell.ai work on?",
          answer:
            "WhatsApp Business, Instagram DMs, and your website via an embeddable chat widget. All three share the same AI brain and conversation history.",
        },
        {
          question: "Does it really sound like my brand?",
          answer:
            "Yes. We train the AI on your actual content — your menu, policies, FAQs, and writing style. You approve all responses before launch.",
        },
        {
          question: "What happens when bell.ai can't answer something?",
          answer:
            "It hands the conversation to your team with full context — no guest has to repeat themselves. You set the escalation rules.",
        },
        {
          question: "Can it handle reservations and bookings?",
          answer:
            "Yes. bell.ai integrates with your PMS, booking calendar, or reservation system to check availability and confirm bookings in real time.",
        },
        {
          question: "Which languages does it speak?",
          answer:
            "50+ languages, detected automatically from the guest's first message. No configuration needed — it adapts to each conversation.",
        },
        {
          question: "How is my guest data handled?",
          answer:
            "All data is encrypted in transit and at rest. We comply with LGPD and GDPR. Guest data is never used to train models outside your account.",
        },
        {
          question: "Can I see analytics?",
          answer:
            "Yes. Your dashboard shows message volumes, resolution rates, most-asked questions, and conversion points — updated in real time.",
        },
      ],
    },
  },

  pt: {
    nav: {
      links: [
        { label: "Como Funciona", href: "#how-it-works" },
        { label: "Funcionalidades", href: "#features" },
        { label: "Casos de Uso", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Agendar Demo",
    },
    hero: {
      eyebrow: "Concierge com IA para Hotelaria",
      h1Line1: "Porque cada chamada perdida",
      h1Line2: "é uma reserva a menos.",
      h1Line3: "Cada resposta atrasada",
      h1Line4: "é um cliente frustrado.",
      sub: "bell.ai é um concierge com IA que gerencia reservas, pedidos e dúvidas no WhatsApp, Instagram e no seu site — 24/7, em qualquer idioma, com a voz da sua marca.",
      cta1: "Agendar Demo",
      cta2: "Ver em Ação",
      trust: "Confiado por mais de 50 estabelecimentos de hotelaria",
    },
    problem: {
      eyebrow: "O Problema",
      title: "A hotelaria vive de conversas.\nA maioria delas não precisa de um humano.",
      sub: "Sua equipe está sobrecarregada com perguntas repetitivas enquanto oportunidades reais escapam.",
      items: [
        {
          stat: "70%",
          title: "das mensagens dos hóspedes são repetitivas",
          description:
            '"Que horas é o check-in?" "Tem estacionamento?" "A piscina está aberta?" — as mesmas perguntas, centenas de vezes por semana.',
        },
        {
          stat: "23h",
          title: "Consultas fora do horário viram reservas perdidas",
          description:
            "Os hóspedes entram em contato de madrugada. De manhã, já reservaram em outro lugar. Cada mensagem sem resposta é uma oportunidade perdida.",
        },
        {
          stat: "∞",
          title: "O esgotamento da equipe é real",
          description:
            "Recepcionistas respondendo as mesmas perguntas centenas de vezes por semana. A repetição mata a motivação — e seus melhores talentos.",
        },
      ],
    },
    meetBell: {
      eyebrow: "A Solução",
      titleA: "Um concierge com IA que",
      titleB: "nunca dorme,",
      titleC: "nunca esquece e",
      titleD: "fala como você.",
      sub1: "bell.ai se conecta ao seu sistema de reservas, cardápio, políticas e voz da marca. Depois conversa com seus hóspedes no WhatsApp, Instagram e no seu site — instantaneamente, com precisão, 24/7.",
      sub2: "Quando algo precisa de um humano, ele transfere perfeitamente para sua equipe.",
      bullets: [
        "Treinado no SEU estabelecimento, não em FAQs genéricos",
        "Fala todos os idiomas que seus hóspedes falam",
        "Transfere para humanos quando necessário",
        "Ao vivo em dias, não em meses",
      ],
    },
    howItWorks: {
      eyebrow: "Processo",
      title: "Do cadastro à primeira conversa em menos de 7 dias.",
      steps: [
        {
          title: "Conectar",
          description:
            "Conte-nos sobre seu estabelecimento. Compartilhe cardápio, políticas, FAQs e tom de voz.",
        },
        {
          title: "Treinar",
          description:
            "Construímos seu concierge com IA com base no seu conteúdo real. Você revisa e aprova antes de qualquer coisa ir ao ar.",
        },
        {
          title: "Lançar",
          description:
            "Conecte o bell.ai ao WhatsApp Business, Instagram DMs e seu site com uma única linha de código.",
        },
        {
          title: "Crescer",
          description:
            "Veja os tempos de resposta caírem, as reservas subirem e sua equipe focar no que realmente importa.",
        },
      ],
    },
    features: {
      eyebrow: "Funcionalidades",
      title: "Construído para hotelaria, do início ao fim.",
      items: [
        {
          title: "Multi-canal",
          description: "WhatsApp, Instagram, chat no site. Um cérebro, todos os canais.",
        },
        {
          title: "Multilíngue",
          description: "Detecta e responde em mais de 50 idiomas automaticamente.",
        },
        {
          title: "Transferência inteligente",
          description: "Sabe quando escalar para sua equipe — e leva o contexto completo.",
        },
        {
          title: "Integração com reservas",
          description: "Conecta-se ao seu PMS, agenda ou sistema de reservas.",
        },
        {
          title: "Voz da marca",
          description: "Treinado no seu tom. Soa como seu concierge, não como um robô.",
        },
        {
          title: "Analytics",
          description: "Veja o que os hóspedes perguntam, onde convertem, onde você os perde.",
        },
      ],
    },
    useCases: {
      eyebrow: "Casos de Uso",
      title: "Uma plataforma. Todo tipo de estabelecimento.",
      ctaPrefix: "Ver funcionando para",
      tabs: [
        {
          label: "Restaurantes & Bares",
          emoji: "🍽️",
          headline: "Mais mesas ocupadas. Menos no-shows. Custo zero.",
          subheadline:
            "bell.ai cuida de reservas, dúvidas sobre o cardápio e pedidos 24/7 — para sua equipe focar na experiência.",
          items: [
            {
              title: "Gestão de reservas de mesa",
              description: "Aceite, confirme e faça follow-up de reservas automaticamente — mesmo às 3h da manhã.",
            },
            {
              title: "Cardápio interativo e promoções",
              description: "Os hóspedes navegam pelo cardápio, perguntam sobre ingredientes e recebem os pratos do dia via chat.",
            },
            {
              title: "Pedidos para viagem e entrega",
              description: "Gerencie pedidos de retirada e entrega diretamente pelo WhatsApp ou Instagram.",
            },
            {
              title: "Respostas instantâneas ao FAQ",
              description: "Estacionamento, horários, opções dietéticas — respondidos na hora, sempre.",
            },
            {
              title: "Coleta de avaliações pós-visita",
              description: "Follow-up automático para coletar avaliações no momento certo.",
            },
          ],
        },
        {
          label: "Hotéis & Resorts",
          emoji: "🏨",
          headline: "Um concierge 5 estrelas funcionando 24/7 em todos os canais.",
          subheadline:
            "Gerencie check-in, pedidos de concierge e dúvidas sobre comodidades sem aumentar a equipe.",
          items: [
            {
              title: "Check-in & check-out express",
              description: "Informações pré-chegada, pedidos de check-in antecipado, check-out tardio — tudo automatizado.",
            },
            {
              title: "Pedidos de room service",
              description: "Os hóspedes pedem room service ou itens extras diretamente pelo WhatsApp.",
            },
            {
              title: "Informações locais e de comodidades",
              description: "Horários da piscina, reservas no spa, recomendações de restaurantes — sob demanda, 24/7.",
            },
            {
              title: "Concierge virtual",
              description: "Táxis, transfers para o aeroporto, reservas de atividades — gerenciados pelo Bell.",
            },
            {
              title: "Follow-up de satisfação",
              description: "Check-ins durante a estadia e pesquisas pós-estadia que realmente são respondidos.",
            },
          ],
        },
        {
          label: "Pousadas & Boutique",
          emoji: "🌿",
          headline: "Seu acolhimento e personalidade — em escala.",
          subheadline:
            "bell.ai espelha sua voz e estilo únicos. Atendimento boutique, sem trabalho extra.",
          items: [
            {
              title: "Mensagens de boas-vindas personalizadas",
              description: "Cumprimente cada hóspede pelo nome com informações pré-chegada personalizadas.",
            },
            {
              title: "Gestão de reservas diretas",
              description: "Gerencie reservas sem depender exclusivamente de plataformas OTA.",
            },
            {
              title: "Hóspedes multilíngues",
              description: "Viajantes internacionais recebem respostas no idioma deles — automaticamente.",
            },
            {
              title: "Sua voz de marca",
              description: "Caloroso, local e autêntico. Não é um chatbot genérico — é o seu concierge.",
            },
            {
              title: "Sempre disponível",
              description: "Feche reservas enquanto dorme. Responda a consultas noturnas instantaneamente.",
            },
          ],
        },
        {
          label: "Spas & Bem-estar",
          emoji: "💆",
          headline: "Uma experiência pré-chegada que converte.",
          subheadline:
            "Da consulta ao agendamento confirmado — bell.ai guia cada hóspede sem esforço.",
          items: [
            {
              title: "Agendamento de consultas",
              description: "Massagens, tratamentos e aulas agendados diretamente via chat.",
            },
            {
              title: "Informações sobre pacotes",
              description: "Os hóspedes exploram pacotes, preços e disponibilidade instantaneamente.",
            },
            {
              title: "Onboarding pré-chegada",
              description: "Formulários de saúde e dicas de preparação enviados automaticamente antes de cada visita.",
            },
            {
              title: "Reagendamentos e cancelamentos",
              description: "Gerencie alterações sem ligações ou e-mails intermináveis.",
            },
            {
              title: "Fidelização e reservas recorrentes",
              description: "Follow-up após visitas para impulsionar negócios recorrentes e indicações.",
            },
          ],
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Números que mudam a conversa.",
      sub: "Baseado em dados agregados de clientes piloto — atualizado trimestralmente",
      metrics: [
        { value: "+40%", label: "Aumento nas reservas online", sublabel: "Média entre clientes piloto" },
        { value: "<2s", label: "Tempo médio de resposta", sublabel: "A qualquer hora, em qualquer canal" },
        { value: "8h", label: "Horas da equipe liberadas por dia", sublabel: "Por propriedade, em média" },
        { value: "70%", label: "Consultas resolvidas pela IA", sublabel: "Sem intervenção humana" },
        { value: "24/7", label: "Sempre disponível", sublabel: "Sem folgas, sem feriados" },
        { value: "50+", label: "Idiomas suportados", sublabel: "Detecção automática" },
      ],
    },
    testimonials: {
      eyebrow: "O Que Dizem",
      title: "Estabelecimentos que confiam no bell.ai.",
    },
    finalCta: {
      urgency: "Apenas 5 vagas restantes para onboarding gratuito este mês",
      h1: "Seus hóspedes já estão perguntando.",
      h2: "Garanta que alguém esteja respondendo.",
      sub: "Agende uma demo gratuita de 20 minutos. Veja o bell.ai treinado ao vivo no seu estabelecimento — sem compromisso.",
      cta1: "Agendar Demo Gratuita →",
      cta2: "Falar pelo WhatsApp",
      trust: "Sem cartão de crédito · Configuração em menos de 7 dias · Cancele quando quiser",
    },
    trustedBy: "Confiado por estabelecimentos em toda a hotelaria",
    footer: {
      description:
        "Automatizando conversas com hóspedes no WhatsApp, Instagram e no seu site — 24/7, em qualquer idioma.",
      product: "Produto",
      company: "Empresa",
      productLinks: [
        { label: "Como Funciona", href: "#how-it-works" },
        { label: "Funcionalidades", href: "#features" },
        { label: "Casos de Uso", href: "#use-cases" },
        { label: "Preços", href: "#pricing" },
      ],
      companyLinks: [
        { label: "Sobre", href: "#" },
        { label: "Contato", href: "mailto:hello@bell.ai" },
        { label: "Privacidade", href: "/privacy" },
        { label: "Termos", href: "/terms" },
      ],
      copyright: "Feito para hotelaria",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes.",
      items: [
        {
          question: "Quanto tempo leva para lançar?",
          answer:
            "A maioria dos estabelecimentos entra ao vivo em 7 dias. Cuidamos da configuração, treinamento e integração — você revisa e aprova antes de qualquer coisa ir ao ar.",
        },
        {
          question: "Em quais canais o bell.ai funciona?",
          answer:
            "WhatsApp Business, Instagram DMs e seu site via widget de chat incorporável. Os três compartilham o mesmo cérebro de IA e histórico de conversas.",
        },
        {
          question: "Ele realmente soa como minha marca?",
          answer:
            "Sim. Treinamos a IA no seu conteúdo real — cardápio, políticas, FAQs e estilo de escrita. Você aprova todas as respostas antes do lançamento.",
        },
        {
          question: "O que acontece quando o bell.ai não sabe responder algo?",
          answer:
            "Ele transfere a conversa para sua equipe com contexto completo — o hóspede não precisa se repetir. Você define as regras de escalada.",
        },
        {
          question: "Ele pode gerenciar reservas?",
          answer:
            "Sim. O bell.ai integra-se ao seu PMS, agenda de reservas ou sistema de reservas para verificar disponibilidade e confirmar reservas em tempo real.",
        },
        {
          question: "Quais idiomas ele fala?",
          answer:
            "Mais de 50 idiomas, detectados automaticamente na primeira mensagem do hóspede. Sem configuração necessária — se adapta a cada conversa.",
        },
        {
          question: "Como os dados dos meus hóspedes são tratados?",
          answer:
            "Todos os dados são criptografados em trânsito e em repouso. Estamos em conformidade com LGPD e GDPR. Os dados dos hóspedes nunca são usados para treinar modelos fora da sua conta.",
        },
        {
          question: "Posso ver analytics?",
          answer:
            "Sim. Seu painel mostra volumes de mensagens, taxas de resolução, perguntas mais frequentes e pontos de conversão — atualizado em tempo real.",
        },
      ],
    },
  },

  es: {
    nav: {
      links: [
        { label: "Cómo Funciona", href: "#how-it-works" },
        { label: "Funcionalidades", href: "#features" },
        { label: "Casos de Uso", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Reservar Demo",
    },
    hero: {
      eyebrow: "Concierge con IA para Hostelería",
      h1Line1: "Porque cada llamada perdida",
      h1Line2: "es una reserva que se va.",
      h1Line3: "Cada respuesta tardía",
      h1Line4: "es un cliente frustrado.",
      sub: "bell.ai es un concierge con IA que gestiona reservas, solicitudes y preguntas en WhatsApp, Instagram y tu sitio web — 24/7, en cualquier idioma, con la voz de tu marca.",
      cta1: "Reservar Demo",
      cta2: "Verlo en Acción",
      trust: "La confianza de más de 50 establecimientos de hostelería",
    },
    problem: {
      eyebrow: "El Problema",
      title: "La hostelería vive de conversaciones.\nLa mayoría no deberían requerir un humano.",
      sub: "Tu equipo está abrumado con preguntas repetitivas mientras las oportunidades reales se escapan.",
      items: [
        {
          stat: "70%",
          title: "de los mensajes de huéspedes son repetitivos",
          description:
            '"¿A qué hora es el check-in?" "¿Tienen aparcamiento?" "¿Está abierta la piscina?" — las mismas preguntas, cientos de veces a la semana.',
        },
        {
          stat: "11pm",
          title: "Las consultas fuera de horario se convierten en reservas perdidas",
          description:
            "Los huéspedes escriben de madrugada. Por la mañana, ya reservaron en otro sitio. Cada mensaje sin respuesta es una oportunidad perdida.",
        },
        {
          stat: "∞",
          title: "El agotamiento del personal es real",
          description:
            "Los equipos de recepción respondiendo las mismas preguntas cientos de veces a la semana. La repetición acaba con la motivación — y con tus mejores personas.",
        },
      ],
    },
    meetBell: {
      eyebrow: "La Solución",
      titleA: "Un concierge con IA que",
      titleB: "nunca duerme,",
      titleC: "nunca olvida y",
      titleD: "habla como tú.",
      sub1: "bell.ai se conecta a tu sistema de reservas, menú, políticas y voz de marca. Luego conversa con tus huéspedes en WhatsApp, Instagram y tu sitio web — al instante, con precisión, 24/7.",
      sub2: "Cuando algo requiere un humano, transfiere la conversación sin problemas a tu equipo.",
      bullets: [
        "Entrenado en TU establecimiento, no en FAQs genéricos",
        "Habla todos los idiomas de tus huéspedes",
        "Transfiere a humanos cuando debe hacerlo",
        "En marcha en días, no en meses",
      ],
    },
    howItWorks: {
      eyebrow: "Proceso",
      title: "Del registro a la primera conversación en menos de 7 días.",
      steps: [
        {
          title: "Conectar",
          description:
            "Cuéntanos sobre tu establecimiento. Comparte tu menú, políticas, FAQs y tono de voz.",
        },
        {
          title: "Entrenar",
          description:
            "Construimos tu concierge con IA sobre tu contenido real. Revisas y apruebas antes de que salga en vivo.",
        },
        {
          title: "Lanzar",
          description:
            "Conecta bell.ai a WhatsApp Business, Instagram DMs y tu sitio web con una sola línea de código.",
        },
        {
          title: "Crecer",
          description:
            "Observa cómo los tiempos de respuesta bajan, las reservas suben y tu equipo se enfoca en lo que importa.",
        },
      ],
    },
    features: {
      eyebrow: "Funcionalidades",
      title: "Construido para hostelería, de principio a fin.",
      items: [
        {
          title: "Multicanal",
          description: "WhatsApp, Instagram, chat web. Un cerebro, cada canal.",
        },
        {
          title: "Multilingüe",
          description: "Detecta y responde en más de 50 idiomas automáticamente.",
        },
        {
          title: "Traspaso inteligente",
          description: "Sabe cuándo escalar a tu equipo — y lleva el contexto completo.",
        },
        {
          title: "Integración de reservas",
          description: "Se conecta a tu PMS, calendario o sistema de reservas.",
        },
        {
          title: "Voz de marca",
          description: "Entrenado en tu tono. Suena como tu concierge, no como un robot.",
        },
        {
          title: "Analytics",
          description: "Ve qué preguntan los huéspedes, dónde convierten, dónde los pierdes.",
        },
      ],
    },
    useCases: {
      eyebrow: "Casos de Uso",
      title: "Una plataforma. Todo tipo de establecimiento.",
      ctaPrefix: "Verlo funcionando para",
      tabs: [
        {
          label: "Restaurantes & Bares",
          emoji: "🍽️",
          headline: "Más mesas llenas. Menos no-shows. Coste cero.",
          subheadline:
            "bell.ai gestiona reservas, preguntas sobre el menú y pedidos 24/7 — para que tu equipo se centre en la experiencia.",
          items: [
            {
              title: "Gestión de reservas de mesa",
              description: "Acepta, confirma y hace seguimiento de reservas automáticamente — incluso a las 3am.",
            },
            {
              title: "Menú interactivo y especiales",
              description: "Los huéspedes navegan por el menú, preguntan sobre ingredientes y reciben los platos del día por chat.",
            },
            {
              title: "Pedidos para llevar y a domicilio",
              description: "Gestiona pedidos de recogida y entrega directamente por WhatsApp o Instagram.",
            },
            {
              title: "Respuestas instantáneas al FAQ",
              description: "Aparcamiento, horarios, opciones dietéticas — respondidos al instante, siempre.",
            },
            {
              title: "Recopilación de reseñas post-visita",
              description: "Seguimiento automático para recopilar reseñas en el momento exacto.",
            },
          ],
        },
        {
          label: "Hoteles & Resorts",
          emoji: "🏨",
          headline: "Un concierge 5 estrellas funcionando 24/7 en cada canal.",
          subheadline:
            "Gestiona check-in, solicitudes de concierge y preguntas sobre servicios sin aumentar personal.",
          items: [
            {
              title: "Check-in & check-out exprés",
              description: "Info previa a la llegada, solicitudes de check-in anticipado, check-out tardío — todo automatizado.",
            },
            {
              title: "Solicitudes de room service",
              description: "Los huéspedes piden room service o extras directamente por WhatsApp.",
            },
            {
              title: "Información local y de servicios",
              description: "Horarios de piscina, reservas en el spa, recomendaciones de restaurantes — a demanda, 24/7.",
            },
            {
              title: "Concierge virtual",
              description: "Taxis, traslados al aeropuerto, reservas de actividades — gestionados por Bell.",
            },
            {
              title: "Seguimiento de satisfacción",
              description: "Check-ins durante la estancia y encuestas post-estancia que realmente se responden.",
            },
          ],
        },
        {
          label: "Posadas & Boutique",
          emoji: "🌿",
          headline: "Tu calidez y personalidad — a escala.",
          subheadline:
            "bell.ai refleja tu voz y estilo únicos. Servicio boutique, sin carga de trabajo extra.",
          items: [
            {
              title: "Mensajes de bienvenida personalizados",
              description: "Saluda a cada huésped por su nombre con información previa a la llegada adaptada.",
            },
            {
              title: "Gestión de reservas directas",
              description: "Gestiona reservas sin depender únicamente de plataformas OTA.",
            },
            {
              title: "Huéspedes multilingües",
              description: "Los viajeros internacionales reciben respuestas en su idioma — automáticamente.",
            },
            {
              title: "Tu voz de marca",
              description: "Cálido, local y auténtico. No es un chatbot genérico — es tu concierge.",
            },
            {
              title: "Siempre disponible",
              description: "Cierra reservas mientras duermes. Responde a consultas nocturnas al instante.",
            },
          ],
        },
        {
          label: "Spas & Bienestar",
          emoji: "💆",
          headline: "Una experiencia pre-llegada que convierte.",
          subheadline:
            "De la consulta a la cita confirmada — bell.ai guía a cada huésped sin esfuerzo.",
          items: [
            {
              title: "Reserva de citas",
              description: "Masajes, tratamientos y clases reservados directamente por chat.",
            },
            {
              title: "Información sobre paquetes",
              description: "Los huéspedes exploran paquetes, precios y disponibilidad al instante.",
            },
            {
              title: "Onboarding pre-llegada",
              description: "Formularios de salud y consejos de preparación enviados automáticamente antes de cada visita.",
            },
            {
              title: "Cambios y cancelaciones",
              description: "Gestiona cambios sin llamadas telefónicas ni correos interminables.",
            },
            {
              title: "Fidelización y reservas recurrentes",
              description: "Seguimiento tras visitas para impulsar negocio recurrente y referencias.",
            },
          ],
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Cifras que cambian la conversación.",
      sub: "Basado en datos agregados de clientes piloto — actualizado trimestralmente",
      metrics: [
        { value: "+40%", label: "Aumento en reservas online", sublabel: "Promedio entre clientes piloto" },
        { value: "<2s", label: "Tiempo medio de respuesta", sublabel: "A cualquier hora, en cualquier canal" },
        { value: "8h", label: "Horas del equipo liberadas por día", sublabel: "Por propiedad, de media" },
        { value: "70%", label: "Consultas resueltas por IA", sublabel: "Sin intervención humana" },
        { value: "24/7", label: "Siempre disponible", sublabel: "Sin bajas, sin festivos" },
        { value: "50+", label: "Idiomas soportados", sublabel: "Detección automática" },
      ],
    },
    testimonials: {
      eyebrow: "Qué Dicen",
      title: "Establecimientos que confían en bell.ai.",
    },
    finalCta: {
      urgency: "Solo quedan 5 plazas para onboarding gratuito este mes",
      h1: "Tus huéspedes ya están preguntando.",
      h2: "Asegúrate de que alguien responda.",
      sub: "Reserva una demo gratuita de 20 minutos. Ve bell.ai entrenado en vivo en tu establecimiento — sin compromiso.",
      cta1: "Reservar Demo Gratis →",
      cta2: "Chatear por WhatsApp",
      trust: "Sin tarjeta de crédito · Configuración en menos de 7 días · Cancela cuando quieras",
    },
    trustedBy: "La confianza de establecimientos de toda la hostelería",
    footer: {
      description:
        "Automatizando conversaciones con huéspedes en WhatsApp, Instagram y tu sitio web — 24/7, en cualquier idioma.",
      product: "Producto",
      company: "Empresa",
      productLinks: [
        { label: "Cómo Funciona", href: "#how-it-works" },
        { label: "Funcionalidades", href: "#features" },
        { label: "Casos de Uso", href: "#use-cases" },
        { label: "Precios", href: "#pricing" },
      ],
      companyLinks: [
        { label: "Sobre Nosotros", href: "#" },
        { label: "Contacto", href: "mailto:hello@bell.ai" },
        { label: "Privacidad", href: "/privacy" },
        { label: "Términos", href: "/terms" },
      ],
      copyright: "Construido para hostelería",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes.",
      items: [
        {
          question: "¿Cuánto tiempo se tarda en lanzar?",
          answer:
            "La mayoría de los establecimientos están en vivo en 7 días. Nos encargamos de la configuración, el entrenamiento y la integración — tú revisas y apruebas antes de que salga nada.",
        },
        {
          question: "¿En qué canales funciona bell.ai?",
          answer:
            "WhatsApp Business, Instagram DMs y tu sitio web mediante un widget de chat integrable. Los tres comparten el mismo cerebro de IA e historial de conversaciones.",
        },
        {
          question: "¿Realmente suena como mi marca?",
          answer:
            "Sí. Entrenamos la IA con tu contenido real — tu menú, políticas, FAQs y estilo de escritura. Apruebas todas las respuestas antes del lanzamiento.",
        },
        {
          question: "¿Qué pasa cuando bell.ai no puede responder algo?",
          answer:
            "Transfiere la conversación a tu equipo con el contexto completo — el huésped no tiene que repetirse. Tú defines las reglas de escalado.",
        },
        {
          question: "¿Puede gestionar reservas?",
          answer:
            "Sí. bell.ai se integra con tu PMS, calendario de reservas o sistema de reservas para verificar disponibilidad y confirmar reservas en tiempo real.",
        },
        {
          question: "¿Qué idiomas habla?",
          answer:
            "Más de 50 idiomas, detectados automáticamente desde el primer mensaje del huésped. Sin configuración necesaria — se adapta a cada conversación.",
        },
        {
          question: "¿Cómo se gestionan los datos de mis huéspedes?",
          answer:
            "Todos los datos están cifrados en tránsito y en reposo. Cumplimos con LGPD y GDPR. Los datos de los huéspedes nunca se usan para entrenar modelos fuera de tu cuenta.",
        },
        {
          question: "¿Puedo ver analytics?",
          answer:
            "Sí. Tu panel muestra volúmenes de mensajes, tasas de resolución, preguntas más frecuentes y puntos de conversión — actualizado en tiempo real.",
        },
      ],
    },
  },

  fr: {
    nav: {
      links: [
        { label: "Comment ça marche", href: "#how-it-works" },
        { label: "Fonctionnalités", href: "#features" },
        { label: "Cas d'usage", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Réserver une démo",
    },
    hero: {
      eyebrow: "Concierge IA pour l'hôtellerie",
      h1Line1: "Parce que chaque appel manqué",
      h1Line2: "est une réservation perdue.",
      h1Line3: "Chaque réponse tardive",
      h1Line4: "est un client frustré.",
      sub: "bell.ai est un concierge IA qui gère les réservations, les demandes et les questions sur WhatsApp, Instagram et votre site — 24h/24, 7j/7, dans toutes les langues, avec la voix de votre marque.",
      cta1: "Réserver une démo",
      cta2: "Voir en action",
      trust: "La confiance de plus de 50 établissements hôteliers",
    },
    problem: {
      eyebrow: "Le Problème",
      title: "L'hôtellerie vit de conversations.\nLa plupart n'ont pas besoin d'un humain.",
      sub: "Votre équipe est submergée de questions répétitives pendant que les vraies opportunités passent à côté.",
      items: [
        {
          stat: "70%",
          title: "des messages clients sont répétitifs",
          description:
            '"À quelle heure est le check-in?" "Avez-vous un parking?" "La piscine est-elle ouverte?" — les mêmes questions, des centaines de fois par semaine.',
        },
        {
          stat: "23h",
          title: "Les demandes hors horaires deviennent des réservations perdues",
          description:
            "Les clients écrivent tard le soir. Le matin, ils ont réservé ailleurs. Chaque message sans réponse est une opportunité manquée.",
        },
        {
          stat: "∞",
          title: "L'épuisement du personnel est réel",
          description:
            "Les équipes de réception répondant aux mêmes questions des centaines de fois par semaine. La répétition tue la motivation — et vos meilleurs éléments.",
        },
      ],
    },
    meetBell: {
      eyebrow: "La Solution",
      titleA: "Un concierge IA qui",
      titleB: "ne dort jamais,",
      titleC: "n'oublie jamais et",
      titleD: "parle comme vous.",
      sub1: "bell.ai se connecte à votre système de réservation, votre menu, vos politiques et la voix de votre marque. Puis il parle à vos clients sur WhatsApp, Instagram et votre site — instantanément, avec précision, 24h/24.",
      sub2: "Quand quelque chose nécessite un humain, il transfère la conversation en douceur à votre équipe.",
      bullets: [
        "Entraîné sur VOTRE établissement, pas sur des FAQ génériques",
        "Parle toutes les langues de vos clients",
        "Passe la main aux humains quand il le faut",
        "En ligne en quelques jours, pas en mois",
      ],
    },
    howItWorks: {
      eyebrow: "Processus",
      title: "De l'inscription à la première conversation en moins de 7 jours.",
      steps: [
        {
          title: "Connecter",
          description:
            "Parlez-nous de votre établissement. Partagez votre menu, vos politiques, vos FAQ et votre ton.",
        },
        {
          title: "Entraîner",
          description:
            "Nous construisons votre concierge IA sur la base de votre contenu réel. Vous vérifiez et approuvez avant tout lancement.",
        },
        {
          title: "Déployer",
          description:
            "Connectez bell.ai à WhatsApp Business, Instagram DMs et votre site avec une seule ligne de code.",
        },
        {
          title: "Croître",
          description:
            "Regardez les temps de réponse chuter, les réservations augmenter et votre équipe se concentrer sur ce qui compte vraiment.",
        },
      ],
    },
    features: {
      eyebrow: "Fonctionnalités",
      title: "Conçu pour l'hôtellerie, de bout en bout.",
      items: [
        {
          title: "Multicanal",
          description: "WhatsApp, Instagram, chat web. Un seul cerveau, tous les canaux.",
        },
        {
          title: "Multilingue",
          description: "Détecte et répond automatiquement dans plus de 50 langues.",
        },
        {
          title: "Transfert intelligent",
          description: "Sait quand escalader vers votre équipe — et apporte le contexte complet.",
        },
        {
          title: "Intégration des réservations",
          description: "Se connecte à votre PMS, agenda ou système de réservation.",
        },
        {
          title: "Voix de marque",
          description: "Entraîné sur votre ton. Ressemble à votre concierge, pas à un robot.",
        },
        {
          title: "Analytics",
          description: "Voyez ce que demandent vos clients, où ils convertissent, où vous les perdez.",
        },
      ],
    },
    useCases: {
      eyebrow: "Cas d'usage",
      title: "Une plateforme. Tous types d'établissements.",
      ctaPrefix: "Voir en action pour",
      tabs: [
        {
          label: "Restaurants & Bars",
          emoji: "🍽️",
          headline: "Plus de tables remplies. Moins de no-shows. Zéro coût supplémentaire.",
          subheadline:
            "bell.ai gère les réservations, les questions sur le menu et les commandes 24h/24 — pour que votre équipe se concentre sur l'expérience.",
          items: [
            {
              title: "Gestion des réservations de table",
              description: "Acceptez, confirmez et assurez le suivi des réservations automatiquement — même à 3h du matin.",
            },
            {
              title: "Menu interactif et plats du jour",
              description: "Les clients parcourent le menu, posent des questions sur les ingrédients et reçoivent les spéciaux du jour par chat.",
            },
            {
              title: "Commandes à emporter et livraison",
              description: "Gérez les commandes de retrait et de livraison directement par WhatsApp ou Instagram.",
            },
            {
              title: "Réponses instantanées aux FAQ",
              description: "Parking, horaires, options diététiques — répondus instantanément, à chaque fois.",
            },
            {
              title: "Collecte d'avis post-visite",
              description: "Suivi automatique pour collecter les avis au moment exact.",
            },
          ],
        },
        {
          label: "Hôtels & Resorts",
          emoji: "🏨",
          headline: "Un concierge 5 étoiles disponible 24h/24 sur tous les canaux.",
          subheadline:
            "Gérez le check-in, les demandes de concierge et les questions sur les équipements sans augmenter le personnel.",
          items: [
            {
              title: "Check-in & check-out express",
              description: "Infos pré-arrivée, demandes de check-in anticipé, check-out tardif — tout automatisé.",
            },
            {
              title: "Demandes de room service",
              description: "Les clients commandent le room service ou des extras directement par WhatsApp.",
            },
            {
              title: "Informations locales et sur les équipements",
              description: "Horaires de la piscine, réservations au spa, recommandations de restaurants — à la demande, 24h/24.",
            },
            {
              title: "Concierge virtuel",
              description: "Taxis, transferts aéroport, réservations d'activités — gérés par Bell.",
            },
            {
              title: "Suivi de satisfaction",
              description: "Check-ins en cours de séjour et enquêtes post-séjour qui sont vraiment répondus.",
            },
          ],
        },
        {
          label: "Gîtes & Boutique",
          emoji: "🌿",
          headline: "Votre chaleur et votre personnalité — à grande échelle.",
          subheadline:
            "bell.ai reflète votre voix et style uniques. Service boutique, sans charge de travail supplémentaire.",
          items: [
            {
              title: "Messages de bienvenue personnalisés",
              description: "Accueillez chaque client par son nom avec des informations pré-arrivée personnalisées.",
            },
            {
              title: "Gestion des réservations directes",
              description: "Gérez les réservations sans dépendre uniquement des plateformes OTA.",
            },
            {
              title: "Clients multilingues",
              description: "Les voyageurs internationaux reçoivent des réponses dans leur langue — automatiquement.",
            },
            {
              title: "Votre voix de marque",
              description: "Chaleureuse, locale et authentique. Pas un chatbot générique — votre concierge.",
            },
            {
              title: "Toujours disponible",
              description: "Fermez des réservations pendant votre sommeil. Répondez aux demandes nocturnes instantanément.",
            },
          ],
        },
        {
          label: "Spas & Bien-être",
          emoji: "💆",
          headline: "Une expérience pré-arrivée qui convertit.",
          subheadline:
            "De la demande au rendez-vous confirmé — bell.ai guide chaque client sans lever le petit doigt.",
          items: [
            {
              title: "Réservation de rendez-vous",
              description: "Massages, soins et cours réservés directement par chat.",
            },
            {
              title: "Informations sur les forfaits",
              description: "Les clients explorent les forfaits, les prix et la disponibilité instantanément.",
            },
            {
              title: "Onboarding pré-arrivée",
              description: "Formulaires de santé et conseils de préparation envoyés automatiquement avant chaque visite.",
            },
            {
              title: "Reports et annulations",
              description: "Gérez les changements sans appels téléphoniques ni e-mails interminables.",
            },
            {
              title: "Fidélisation et réservations récurrentes",
              description: "Suivi après les visites pour stimuler les affaires récurrentes et les recommandations.",
            },
          ],
        },
      ],
    },
    results: {
      eyebrow: "Résultats",
      title: "Des chiffres qui changent la conversation.",
      sub: "Basé sur des données agrégées de clients pilotes — mis à jour trimestriellement",
      metrics: [
        { value: "+40%", label: "Augmentation des réservations en ligne", sublabel: "Moyenne des clients pilotes" },
        { value: "<2s", label: "Temps de réponse moyen", sublabel: "À toute heure, sur tous les canaux" },
        { value: "8h", label: "Heures d'équipe libérées par jour", sublabel: "Par propriété, en moyenne" },
        { value: "70%", label: "Demandes résolues par l'IA", sublabel: "Sans intervention humaine" },
        { value: "24/7", label: "Toujours disponible", sublabel: "Pas d'absences, pas de jours fériés" },
        { value: "50+", label: "Langues supportées", sublabel: "Détection automatique" },
      ],
    },
    testimonials: {
      eyebrow: "Ce qu'ils disent",
      title: "Établissements qui font confiance à bell.ai.",
    },
    finalCta: {
      urgency: "Plus que 5 places pour l'onboarding gratuit ce mois-ci",
      h1: "Vos clients posent déjà des questions.",
      h2: "Assurez-vous que quelqu'un répond.",
      sub: "Réservez une démo gratuite de 20 minutes. Voyez bell.ai entraîné en direct sur votre établissement — sans engagement.",
      cta1: "Réserver une démo gratuite →",
      cta2: "Chatter sur WhatsApp",
      trust: "Sans carte de crédit · Installation en moins de 7 jours · Résiliez à tout moment",
    },
    trustedBy: "La confiance des établissements hôteliers",
    footer: {
      description:
        "Automatiser les conversations avec les clients sur WhatsApp, Instagram et votre site — 24h/24, dans toutes les langues.",
      product: "Produit",
      company: "Entreprise",
      productLinks: [
        { label: "Comment ça marche", href: "#how-it-works" },
        { label: "Fonctionnalités", href: "#features" },
        { label: "Cas d'usage", href: "#use-cases" },
        { label: "Tarifs", href: "#pricing" },
      ],
      companyLinks: [
        { label: "À propos", href: "#" },
        { label: "Contact", href: "mailto:hello@bell.ai" },
        { label: "Confidentialité", href: "/privacy" },
        { label: "Conditions", href: "/terms" },
      ],
      copyright: "Conçu pour l'hôtellerie",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes.",
      items: [
        {
          question: "Combien de temps faut-il pour lancer ?",
          answer:
            "La plupart des établissements sont en ligne en 7 jours. Nous gérons la configuration, l'entraînement et l'intégration — vous vérifiez et approuvez avant tout lancement.",
        },
        {
          question: "Sur quels canaux fonctionne bell.ai ?",
          answer:
            "WhatsApp Business, Instagram DMs et votre site via un widget de chat intégrable. Les trois partagent le même cerveau IA et l'historique des conversations.",
        },
        {
          question: "Ressemble-t-il vraiment à ma marque ?",
          answer:
            "Oui. Nous entraînons l'IA sur votre contenu réel — votre menu, vos politiques, vos FAQ et votre style d'écriture. Vous approuvez toutes les réponses avant le lancement.",
        },
        {
          question: "Que se passe-t-il quand bell.ai ne peut pas répondre ?",
          answer:
            "Il transfère la conversation à votre équipe avec le contexte complet — le client n'a pas à se répéter. Vous définissez les règles d'escalade.",
        },
        {
          question: "Peut-il gérer les réservations ?",
          answer:
            "Oui. bell.ai s'intègre à votre PMS, agenda de réservations ou système de réservation pour vérifier la disponibilité et confirmer les réservations en temps réel.",
        },
        {
          question: "Quelles langues parle-t-il ?",
          answer:
            "Plus de 50 langues, détectées automatiquement dès le premier message du client. Aucune configuration nécessaire — il s'adapte à chaque conversation.",
        },
        {
          question: "Comment les données de mes clients sont-elles gérées ?",
          answer:
            "Toutes les données sont chiffrées en transit et au repos. Nous respectons le RGPD et la LGPD. Les données des clients ne sont jamais utilisées pour entraîner des modèles en dehors de votre compte.",
        },
        {
          question: "Puis-je voir les analytics ?",
          answer:
            "Oui. Votre tableau de bord affiche les volumes de messages, les taux de résolution, les questions les plus fréquentes et les points de conversion — mis à jour en temps réel.",
        },
      ],
    },
  },

  de: {
    nav: {
      links: [
        { label: "So funktioniert's", href: "#how-it-works" },
        { label: "Funktionen", href: "#features" },
        { label: "Anwendungsfälle", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Demo buchen",
    },
    hero: {
      eyebrow: "KI-Concierge für das Gastgewerbe",
      h1Line1: "Denn jeder verpasste Anruf",
      h1Line2: "ist eine verlorene Reservierung.",
      h1Line3: "Jede verzögerte Antwort",
      h1Line4: "ist ein frustrierter Gast.",
      sub: "bell.ai ist ein KI-Concierge, der Reservierungen, Anfragen und Fragen über WhatsApp, Instagram und Ihre Website bearbeitet — 24/7, in jeder Sprache, mit Ihrer Markenstimme.",
      cta1: "Demo buchen",
      cta2: "In Aktion sehen",
      trust: "Vertrauen von über 50 Gastgewerbebetrieben",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Das Gastgewerbe lebt von Gesprächen.\nDie meisten davon brauchen keinen Menschen.",
      sub: "Ihr Team ist mit repetitiven Fragen überwältigt, während echte Chancen verloren gehen.",
      items: [
        {
          stat: "70%",
          title: "der Gastnachrichten sind repetitiv",
          description:
            '"Wann ist der Check-in?" "Haben Sie Parkplätze?" "Ist der Pool geöffnet?" — dieselben Fragen, hunderte Male pro Woche.',
        },
        {
          stat: "23 Uhr",
          title: "Anfragen außerhalb der Öffnungszeiten werden zu verlorenen Buchungen",
          description:
            "Gäste schreiben spät abends. Am Morgen haben sie woanders gebucht. Jede unbeantwortete Nachricht ist eine verpasste Chance.",
        },
        {
          stat: "∞",
          title: "Burnout beim Personal ist real",
          description:
            "Empfangsteams beantworten hunderte Male pro Woche dieselben Fragen. Wiederholung tötet die Motivation — und Ihre besten Leute.",
        },
      ],
    },
    meetBell: {
      eyebrow: "Die Lösung",
      titleA: "Ein KI-Concierge, der",
      titleB: "nie schläft,",
      titleC: "nie vergisst und",
      titleD: "klingt wie Sie.",
      sub1: "bell.ai verbindet sich mit Ihrem Buchungssystem, Ihrer Speisekarte, Ihren Richtlinien und Ihrer Markenstimme. Dann spricht es mit Ihren Gästen auf WhatsApp, Instagram und Ihrer Website — sofort, präzise, 24/7.",
      sub2: "Wenn etwas einen Menschen erfordert, übergibt es nahtlos an Ihr Team.",
      bullets: [
        "Auf IHREN Betrieb trainiert, nicht auf generische FAQs",
        "Spricht jede Sprache Ihrer Gäste",
        "Übergibt an Menschen, wenn nötig",
        "In Tagen live, nicht in Monaten",
      ],
    },
    howItWorks: {
      eyebrow: "Prozess",
      title: "Von der Anmeldung zum ersten Gespräch in unter 7 Tagen.",
      steps: [
        {
          title: "Verbinden",
          description:
            "Erzählen Sie uns von Ihrem Betrieb. Teilen Sie Speisekarte, Richtlinien, FAQs und Tonalität.",
        },
        {
          title: "Trainieren",
          description:
            "Wir bauen Ihren KI-Concierge auf Ihren echten Inhalten auf. Sie prüfen und genehmigen, bevor etwas live geht.",
        },
        {
          title: "Einsetzen",
          description:
            "Verbinden Sie bell.ai mit WhatsApp Business, Instagram DMs und Ihrer Website mit einer einzigen Codezeile.",
        },
        {
          title: "Wachsen",
          description:
            "Beobachten Sie, wie Antwortzeiten sinken, Buchungen steigen und Ihr Team sich auf das Wesentliche konzentriert.",
        },
      ],
    },
    features: {
      eyebrow: "Funktionen",
      title: "Für das Gastgewerbe entwickelt, von Anfang bis Ende.",
      items: [
        {
          title: "Mehrkanal",
          description: "WhatsApp, Instagram, Web-Chat. Ein Gehirn, jeder Kanal.",
        },
        {
          title: "Mehrsprachig",
          description: "Erkennt und antwortet automatisch in über 50 Sprachen.",
        },
        {
          title: "Smarte Übergabe",
          description: "Weiß, wann an Ihr Team zu eskalieren ist — und bringt den vollen Kontext mit.",
        },
        {
          title: "Buchungsintegration",
          description: "Verbindet sich mit Ihrem PMS, Kalender oder Reservierungssystem.",
        },
        {
          title: "Markenstimme",
          description: "Auf Ihren Ton trainiert. Klingt wie Ihr Concierge, nicht wie ein Roboter.",
        },
        {
          title: "Analytics",
          description: "Sehen Sie, was Gäste fragen, wo sie konvertieren, wo Sie sie verlieren.",
        },
      ],
    },
    useCases: {
      eyebrow: "Anwendungsfälle",
      title: "Eine Plattform. Jede Art von Betrieb.",
      ctaPrefix: "In Aktion sehen für",
      tabs: [
        {
          label: "Restaurants & Bars",
          emoji: "🍽️",
          headline: "Mehr Tische belegt. Weniger No-Shows. Null Mehrkosten.",
          subheadline:
            "bell.ai bearbeitet Reservierungen, Menüfragen und Bestellungen 24/7 — damit Ihr Team sich auf das Erlebnis konzentrieren kann.",
          items: [
            {
              title: "Tischreservierungsverwaltung",
              description: "Buchungen automatisch annehmen, bestätigen und nachverfolgen — sogar um 3 Uhr morgens.",
            },
            {
              title: "Interaktive Speisekarte & Tagesangebote",
              description: "Gäste durchsuchen die Speisekarte, fragen nach Zutaten und erhalten die Tagesangebote per Chat.",
            },
            {
              title: "Außer-Haus-Verkauf & Lieferungen",
              description: "Abhol- und Lieferbestellungen direkt über WhatsApp oder Instagram bearbeiten.",
            },
            {
              title: "Sofortige FAQ-Antworten",
              description: "Parkplätze, Öffnungszeiten, Diätoptionen — sofort beantwortet, jedes Mal.",
            },
            {
              title: "Bewertungssammlung nach dem Besuch",
              description: "Automatisches Follow-up zur Bewertungssammlung zum richtigen Zeitpunkt.",
            },
          ],
        },
        {
          label: "Hotels & Resorts",
          emoji: "🏨",
          headline: "Ein 5-Sterne-Concierge, der 24/7 auf jedem Kanal läuft.",
          subheadline:
            "Check-in, Concierge-Anfragen und Fragen zu Annehmlichkeiten ohne zusätzliches Personal verwalten.",
          items: [
            {
              title: "Express Check-in & Check-out",
              description: "Ankunftsinformationen, Frühcheck-in-Anfragen, Spätcheck-out — alles automatisiert.",
            },
            {
              title: "Zimmerservice-Anfragen",
              description: "Gäste bestellen Zimmerservice oder Extra-Artikel direkt per WhatsApp.",
            },
            {
              title: "Lokale & Annehmlichkeitsinformationen",
              description: "Poolzeiten, Spa-Buchungen, Restaurantempfehlungen — auf Abruf, 24/7.",
            },
            {
              title: "Virtueller Concierge",
              description: "Taxis, Flughafentransfers, Aktivitätsbuchungen — von Bell erledigt.",
            },
            {
              title: "Zufriedenheitsnachverfolgung",
              description: "Aufenthalts-Check-ins und Nachaufenthalts-Umfragen, die wirklich beantwortet werden.",
            },
          ],
        },
        {
          label: "Pensionen & Boutique",
          emoji: "🌿",
          headline: "Ihre Wärme und Persönlichkeit — in großem Maßstab.",
          subheadline:
            "bell.ai spiegelt Ihre einzigartige Stimme und Ihren Stil wider. Boutique-Service ohne zusätzliche Arbeitslast.",
          items: [
            {
              title: "Personalisierte Willkommensnachrichten",
              description: "Jeden Gast namentlich mit maßgeschneiderten Ankunftsinformationen begrüßen.",
            },
            {
              title: "Direktbuchungsverwaltung",
              description: "Reservierungen verwalten ohne ausschließlich auf OTA-Plattformen angewiesen zu sein.",
            },
            {
              title: "Mehrsprachige Gäste",
              description: "Internationale Reisende erhalten automatisch Antworten in ihrer Sprache.",
            },
            {
              title: "Ihre Markenstimme",
              description: "Warm, lokal und authentisch. Kein generischer Chatbot — Ihr Concierge.",
            },
            {
              title: "Immer verfügbar",
              description: "Buchungen abschließen während Sie schlafen. Sofort auf Nachtanfragen reagieren.",
            },
          ],
        },
        {
          label: "Spas & Wellness",
          emoji: "💆",
          headline: "Ein Vor-Ankunfts-Erlebnis, das konvertiert.",
          subheadline:
            "Von der Anfrage zum gebuchten Termin — bell.ai begleitet jeden Gast mühelos.",
          items: [
            {
              title: "Terminbuchung",
              description: "Massagen, Behandlungen und Kurse direkt per Chat gebucht.",
            },
            {
              title: "Paketinformationen",
              description: "Gäste erkunden Pakete, Preise und Verfügbarkeit sofort.",
            },
            {
              title: "Vor-Ankunfts-Onboarding",
              description: "Gesundheitsformulare und Vorbereitungstipps automatisch vor jedem Besuch versandt.",
            },
            {
              title: "Umbuchungen & Stornierungen",
              description: "Änderungen ohne Telefonanrufe oder endlose E-Mails verwalten.",
            },
            {
              title: "Kundenbindung & Wiederbuchung",
              description: "Follow-up nach Besuchen, um Wiederholungsgeschäfte und Empfehlungen zu fördern.",
            },
          ],
        },
      ],
    },
    results: {
      eyebrow: "Ergebnisse",
      title: "Zahlen, die das Gespräch verändern.",
      sub: "Basierend auf aggregierten Daten von Pilotkunden — vierteljährlich aktualisiert",
      metrics: [
        { value: "+40%", label: "Steigerung der Online-Buchungen", sublabel: "Durchschnitt über Pilotkunden" },
        { value: "<2s", label: "Durchschnittliche Antwortzeit", sublabel: "Jederzeit, auf jedem Kanal" },
        { value: "8h", label: "Personalstunden täglich eingespart", sublabel: "Pro Betrieb, im Durchschnitt" },
        { value: "70%", label: "Anfragen durch KI gelöst", sublabel: "Ohne menschliche Eingriffe" },
        { value: "24/7", label: "Immer verfügbar", sublabel: "Keine Krankentage, keine Feiertage" },
        { value: "50+", label: "Unterstützte Sprachen", sublabel: "Automatische Erkennung" },
      ],
    },
    testimonials: {
      eyebrow: "Was sie sagen",
      title: "Betriebe, die bell.ai vertrauen.",
    },
    finalCta: {
      urgency: "Nur noch 5 Plätze für kostenloses Onboarding diesen Monat",
      h1: "Ihre Gäste stellen bereits Fragen.",
      h2: "Stellen Sie sicher, dass jemand antwortet.",
      sub: "Buchen Sie eine kostenlose 20-minütige Demo. Sehen Sie bell.ai live auf Ihren Betrieb trainiert — ohne Verpflichtung.",
      cta1: "Kostenlose Demo buchen →",
      cta2: "Per WhatsApp chatten",
      trust: "Keine Kreditkarte erforderlich · Einrichtung in unter 7 Tagen · Jederzeit kündbar",
    },
    trustedBy: "Das Vertrauen von Betrieben im gesamten Gastgewerbe",
    footer: {
      description:
        "Automatisierung von Gästegesprächen über WhatsApp, Instagram und Ihre Website — 24/7, in jeder Sprache.",
      product: "Produkt",
      company: "Unternehmen",
      productLinks: [
        { label: "So funktioniert's", href: "#how-it-works" },
        { label: "Funktionen", href: "#features" },
        { label: "Anwendungsfälle", href: "#use-cases" },
        { label: "Preise", href: "#pricing" },
      ],
      companyLinks: [
        { label: "Über uns", href: "#" },
        { label: "Kontakt", href: "mailto:hello@bell.ai" },
        { label: "Datenschutz", href: "/privacy" },
        { label: "AGB", href: "/terms" },
      ],
      copyright: "Für das Gastgewerbe entwickelt",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen.",
      items: [
        {
          question: "Wie lange dauert der Start?",
          answer:
            "Die meisten Betriebe sind innerhalb von 7 Tagen live. Wir übernehmen Setup, Training und Integration — Sie prüfen und genehmigen, bevor etwas live geht.",
        },
        {
          question: "Auf welchen Kanälen funktioniert bell.ai?",
          answer:
            "WhatsApp Business, Instagram DMs und Ihre Website über ein einbettbares Chat-Widget. Alle drei teilen dasselbe KI-Gehirn und den Gesprächsverlauf.",
        },
        {
          question: "Klingt es wirklich wie meine Marke?",
          answer:
            "Ja. Wir trainieren die KI auf Ihren echten Inhalten — Speisekarte, Richtlinien, FAQs und Schreibstil. Sie genehmigen alle Antworten vor dem Start.",
        },
        {
          question: "Was passiert, wenn bell.ai etwas nicht beantworten kann?",
          answer:
            "Es übergibt das Gespräch an Ihr Team mit vollem Kontext — kein Gast muss sich wiederholen. Sie legen die Eskalationsregeln fest.",
        },
        {
          question: "Kann es Reservierungen verwalten?",
          answer:
            "Ja. bell.ai integriert sich mit Ihrem PMS, Buchungskalender oder Reservierungssystem, um Verfügbarkeit zu prüfen und Buchungen in Echtzeit zu bestätigen.",
        },
        {
          question: "Welche Sprachen spricht es?",
          answer:
            "Über 50 Sprachen, automatisch ab der ersten Nachricht des Gastes erkannt. Keine Konfiguration erforderlich — es passt sich jedem Gespräch an.",
        },
        {
          question: "Wie werden die Daten meiner Gäste behandelt?",
          answer:
            "Alle Daten sind während der Übertragung und im Ruhezustand verschlüsselt. Wir halten LGPD und GDPR ein. Gastdaten werden niemals zum Training von Modellen außerhalb Ihres Kontos verwendet.",
        },
        {
          question: "Kann ich Analytics einsehen?",
          answer:
            "Ja. Ihr Dashboard zeigt Nachrichtenvolumen, Lösungsraten, häufigste Fragen und Konversionspunkte — in Echtzeit aktualisiert.",
        },
      ],
    },
  },

  it: {
    nav: {
      links: [
        { label: "Come funziona", href: "#how-it-works" },
        { label: "Funzionalità", href: "#features" },
        { label: "Casi d'uso", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Prenota una demo",
    },
    hero: {
      eyebrow: "Concierge IA per l'ospitalità",
      h1Line1: "Perché ogni chiamata persa",
      h1Line2: "è una prenotazione persa.",
      h1Line3: "Ogni risposta in ritardo",
      h1Line4: "è un cliente frustrato.",
      sub: "bell.ai è un concierge IA che gestisce prenotazioni, richieste e domande su WhatsApp, Instagram e il tuo sito web — 24/7, in qualsiasi lingua, con la voce del tuo brand.",
      cta1: "Prenota una demo",
      cta2: "Guarda in azione",
      trust: "La fiducia di oltre 50 strutture ricettive",
    },
    problem: {
      eyebrow: "Il Problema",
      title: "L'ospitalità vive di conversazioni.\nLa maggior parte non richiede un umano.",
      sub: "Il tuo team è sopraffatto da domande ripetitive mentre le opportunità reali sfuggono.",
      items: [
        {
          stat: "70%",
          title: "dei messaggi degli ospiti sono ripetitivi",
          description:
            '"A che ora è il check-in?" "Avete parcheggio?" "La piscina è aperta?" — le stesse domande, centinaia di volte a settimana.',
        },
        {
          stat: "23:00",
          title: "Le richieste fuori orario diventano prenotazioni perse",
          description:
            "Gli ospiti scrivono tardi la sera. Al mattino hanno prenotato altrove. Ogni messaggio senza risposta è un'opportunità persa.",
        },
        {
          stat: "∞",
          title: "Il burnout del personale è reale",
          description:
            "I team di ricevimento che rispondono alle stesse domande centinaia di volte a settimana. La ripetizione uccide il morale — e le tue persone migliori.",
        },
      ],
    },
    meetBell: {
      eyebrow: "La Soluzione",
      titleA: "Un concierge IA che",
      titleB: "non dorme mai,",
      titleC: "non dimentica mai e",
      titleD: "suona come te.",
      sub1: "bell.ai si connette al tuo sistema di prenotazione, menu, politiche e voce del brand. Poi parla con i tuoi ospiti su WhatsApp, Instagram e il tuo sito web — istantaneamente, con precisione, 24/7.",
      sub2: "Quando qualcosa richiede un umano, passa senza problemi al tuo team.",
      bullets: [
        "Addestrato sulla TUA struttura, non su FAQ generiche",
        "Parla tutte le lingue dei tuoi ospiti",
        "Passa agli umani quando deve farlo",
        "Operativo in giorni, non in mesi",
      ],
    },
    howItWorks: {
      eyebrow: "Processo",
      title: "Dalla registrazione alla prima conversazione in meno di 7 giorni.",
      steps: [
        {
          title: "Connetti",
          description:
            "Raccontaci della tua struttura. Condividi il menu, le politiche, le FAQ e il tono di voce.",
        },
        {
          title: "Addestra",
          description:
            "Costruiamo il tuo concierge IA sui tuoi contenuti reali. Tu rivedi e approvi prima che vada live.",
        },
        {
          title: "Lancia",
          description:
            "Collega bell.ai a WhatsApp Business, Instagram DMs e il tuo sito web con una sola riga di codice.",
        },
        {
          title: "Cresci",
          description:
            "Guarda i tempi di risposta scendere, le prenotazioni aumentare e il tuo team concentrarsi su ciò che conta davvero.",
        },
      ],
    },
    features: {
      eyebrow: "Funzionalità",
      title: "Costruito per l'ospitalità, da cima a fondo.",
      items: [
        {
          title: "Multicanale",
          description: "WhatsApp, Instagram, chat web. Un solo cervello, ogni canale.",
        },
        {
          title: "Multilingue",
          description: "Rileva e risponde automaticamente in oltre 50 lingue.",
        },
        {
          title: "Passaggio intelligente",
          description: "Sa quando escalare al tuo team — e porta il contesto completo.",
        },
        {
          title: "Integrazione prenotazioni",
          description: "Si connette al tuo PMS, calendario o sistema di prenotazione.",
        },
        {
          title: "Voce del brand",
          description: "Addestrato sul tuo tono. Suona come il tuo concierge, non come un robot.",
        },
        {
          title: "Analytics",
          description: "Vedi cosa chiedono gli ospiti, dove convertono, dove li perdi.",
        },
      ],
    },
    useCases: {
      eyebrow: "Casi d'uso",
      title: "Una piattaforma. Ogni tipo di struttura.",
      ctaPrefix: "Guarda in azione per",
      tabs: [
        {
          label: "Ristoranti & Bar",
          emoji: "🍽️",
          headline: "Più tavoli occupati. Meno no-show. Zero costi extra.",
          subheadline:
            "bell.ai gestisce prenotazioni, domande sul menu e ordini 24/7 — così il tuo team può concentrarsi sull'esperienza.",
          items: [
            {
              title: "Gestione prenotazioni tavoli",
              description: "Accetta, conferma e segui le prenotazioni automaticamente — anche alle 3 di notte.",
            },
            {
              title: "Menu interattivo e specialità",
              description: "Gli ospiti sfogliano il menu, chiedono degli ingredienti e ricevono i piatti del giorno via chat.",
            },
            {
              title: "Ordini da asporto e consegna",
              description: "Gestisci richieste di ritiro e consegna direttamente su WhatsApp o Instagram.",
            },
            {
              title: "Risposte istantanee alle FAQ",
              description: "Parcheggio, orari, opzioni dietetiche — risposti immediatamente, ogni volta.",
            },
            {
              title: "Raccolta recensioni post-visita",
              description: "Follow-up automatico per raccogliere recensioni nel momento esatto.",
            },
          ],
        },
        {
          label: "Hotel & Resort",
          emoji: "🏨",
          headline: "Un concierge 5 stelle attivo 24/7 su ogni canale.",
          subheadline:
            "Gestisci check-in, richieste di concierge e domande sui servizi senza aumentare il personale.",
          items: [
            {
              title: "Check-in & check-out express",
              description: "Info pre-arrivo, richieste di check-in anticipato, check-out tardivo — tutto automatizzato.",
            },
            {
              title: "Richieste room service",
              description: "Gli ospiti ordinano il room service o richiedono extra direttamente via WhatsApp.",
            },
            {
              title: "Informazioni locali e sui servizi",
              description: "Orari piscina, prenotazioni spa, raccomandazioni ristoranti — su richiesta, 24/7.",
            },
            {
              title: "Concierge virtuale",
              description: "Taxi, transfer aeroporto, prenotazioni attività — gestiti da Bell.",
            },
            {
              title: "Follow-up soddisfazione",
              description: "Check-in durante il soggiorno e sondaggi post-soggiorno che vengono davvero risposti.",
            },
          ],
        },
        {
          label: "B&B & Boutique",
          emoji: "🌿",
          headline: "Il tuo calore e la tua personalità — su larga scala.",
          subheadline:
            "bell.ai rispecchia la tua voce e il tuo stile unici. Servizio boutique, senza carico di lavoro extra.",
          items: [
            {
              title: "Messaggi di benvenuto personalizzati",
              description: "Accogli ogni ospite per nome con informazioni pre-arrivo su misura.",
            },
            {
              title: "Gestione prenotazioni dirette",
              description: "Gestisci le prenotazioni senza dipendere esclusivamente dalle piattaforme OTA.",
            },
            {
              title: "Ospiti multilingue",
              description: "I viaggiatori internazionali ricevono risposte nella loro lingua — automaticamente.",
            },
            {
              title: "La tua voce del brand",
              description: "Caldo, locale e autentico. Non un chatbot generico — il tuo concierge.",
            },
            {
              title: "Sempre disponibile",
              description: "Chiudi prenotazioni mentre dormi. Rispondi alle richieste notturne istantaneamente.",
            },
          ],
        },
        {
          label: "Spa & Benessere",
          emoji: "💆",
          headline: "Un'esperienza pre-arrivo che converte.",
          subheadline:
            "Dalla richiesta all'appuntamento confermato — bell.ai guida ogni ospite senza fatica.",
          items: [
            {
              title: "Prenotazione appuntamenti",
              description: "Massaggi, trattamenti e corsi prenotati direttamente via chat.",
            },
            {
              title: "Informazioni sui pacchetti",
              description: "Gli ospiti esplorano pacchetti, prezzi e disponibilità istantaneamente.",
            },
            {
              title: "Onboarding pre-arrivo",
              description: "Moduli sanitari e consigli di preparazione inviati automaticamente prima di ogni visita.",
            },
            {
              title: "Modifiche e cancellazioni",
              description: "Gestisci i cambiamenti senza telefonate o email infinite.",
            },
            {
              title: "Fidelizzazione e prenotazioni ricorrenti",
              description: "Follow-up dopo le visite per stimolare il business ricorrente e le raccomandazioni.",
            },
          ],
        },
      ],
    },
    results: {
      eyebrow: "Risultati",
      title: "Numeri che cambiano la conversazione.",
      sub: "Basato su dati aggregati di clienti pilota — aggiornato trimestralmente",
      metrics: [
        { value: "+40%", label: "Aumento delle prenotazioni online", sublabel: "Media tra i clienti pilota" },
        { value: "<2s", label: "Tempo medio di risposta", sublabel: "A qualsiasi ora, su qualsiasi canale" },
        { value: "8h", label: "Ore del personale liberate al giorno", sublabel: "Per struttura, in media" },
        { value: "70%", label: "Richieste risolte dall'IA", sublabel: "Senza intervento umano" },
        { value: "24/7", label: "Sempre disponibile", sublabel: "Niente malattie, niente ferie" },
        { value: "50+", label: "Lingue supportate", sublabel: "Rilevamento automatico" },
      ],
    },
    testimonials: {
      eyebrow: "Cosa dicono",
      title: "Strutture che si fidano di bell.ai.",
    },
    finalCta: {
      urgency: "Solo 5 posti rimasti per l'onboarding gratuito questo mese",
      h1: "I tuoi ospiti stanno già chiedendo.",
      h2: "Assicurati che qualcuno risponda.",
      sub: "Prenota una demo gratuita di 20 minuti. Guarda bell.ai addestrato in diretta sulla tua struttura — senza impegno.",
      cta1: "Prenota demo gratuita →",
      cta2: "Chatta su WhatsApp",
      trust: "Nessuna carta di credito richiesta · Configurazione in meno di 7 giorni · Disdici quando vuoi",
    },
    trustedBy: "La fiducia di strutture in tutto il settore dell'ospitalità",
    footer: {
      description:
        "Automatizzare le conversazioni con gli ospiti su WhatsApp, Instagram e il tuo sito web — 24/7, in qualsiasi lingua.",
      product: "Prodotto",
      company: "Azienda",
      productLinks: [
        { label: "Come funziona", href: "#how-it-works" },
        { label: "Funzionalità", href: "#features" },
        { label: "Casi d'uso", href: "#use-cases" },
        { label: "Prezzi", href: "#pricing" },
      ],
      companyLinks: [
        { label: "Chi siamo", href: "#" },
        { label: "Contatto", href: "mailto:hello@bell.ai" },
        { label: "Privacy", href: "/privacy" },
        { label: "Termini", href: "/terms" },
      ],
      copyright: "Costruito per l'ospitalità",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Domande frequenti.",
      items: [
        {
          question: "Quanto tempo ci vuole per il lancio?",
          answer:
            "La maggior parte delle strutture è operativa entro 7 giorni. Gestiamo setup, addestramento e integrazione — tu rivedi e approvi prima che vada live.",
        },
        {
          question: "Su quali canali funziona bell.ai?",
          answer:
            "WhatsApp Business, Instagram DMs e il tuo sito web tramite un widget di chat incorporabile. Tutti e tre condividono lo stesso cervello IA e la cronologia delle conversazioni.",
        },
        {
          question: "Suona davvero come il mio brand?",
          answer:
            "Sì. Addestriamo l'IA sui tuoi contenuti reali — menu, politiche, FAQ e stile di scrittura. Approvi tutte le risposte prima del lancio.",
        },
        {
          question: "Cosa succede quando bell.ai non riesce a rispondere a qualcosa?",
          answer:
            "Passa la conversazione al tuo team con il contesto completo — nessun ospite deve ripetersi. Tu definisci le regole di escalation.",
        },
        {
          question: "Può gestire prenotazioni?",
          answer:
            "Sì. bell.ai si integra con il tuo PMS, calendario di prenotazioni o sistema di prenotazione per verificare la disponibilità e confermare le prenotazioni in tempo reale.",
        },
        {
          question: "Quali lingue parla?",
          answer:
            "Oltre 50 lingue, rilevate automaticamente dal primo messaggio dell'ospite. Nessuna configurazione necessaria — si adatta a ogni conversazione.",
        },
        {
          question: "Come vengono gestiti i dati dei miei ospiti?",
          answer:
            "Tutti i dati sono crittografati in transito e a riposo. Siamo conformi a LGPD e GDPR. I dati degli ospiti non vengono mai usati per addestrare modelli al di fuori del tuo account.",
        },
        {
          question: "Posso vedere gli analytics?",
          answer:
            "Sì. La tua dashboard mostra volumi di messaggi, tassi di risoluzione, domande più frequenti e punti di conversione — aggiornati in tempo reale.",
        },
      ],
    },
  },
};
