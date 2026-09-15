export const metaMetrics = [
  { label: "Investimento", value: "R$ 2.368", subtitle: "Período analisado" },
  { label: "Impressões", value: "445.153", subtitle: "Alcance de 45.299 (Freq: 9,83)" },
  { label: "Cliques no Link", value: "5.952", subtitle: "CTR Agregado de 1,84%" },
  { label: "Compras Reportadas", value: "700+", subtitle: "Campanhas de conversão" }
];

export const metaCreatives = [
  {
    title: "Oferta de Aquisição (1ª Compra)",
    copy: '"Primeira vez no Recanto da Pizza? No seu 1º pedido, use o cupom BEMVINDO10 e ganhe 10% OFF..."',
    metric: "280 compras",
    ctr: "1,27% CTR",
    analysis: "Oferta como âncora: prova de contexto (primeira vez) + cupom explícito + CTA direto."
  },
  {
    title: "Ação Direta (Cardápio)",
    copy: '"Bateu aquela vontade de pizza? Escolha seu sabor favorito, confira as opções e faça seu pedido!"',
    metric: "Maior Engajamento",
    ctr: "2,22% CTR",
    analysis: "Copy direta orientada à ação rápida. Excelente taxa de clique e porta de entrada."
  },
  {
    title: "Apelo Sensorial (Desejo)",
    copy: '"Tem cheirinho de pizza saindo do forno por aqui… Massa leve, muito recheio… Faça seu pedido!"',
    metric: "120 compras",
    ctr: "0,93% CTR",
    analysis: "Foco no desejo visual e sensorial. Complementa muito bem a estratégia de cupons."
  }
];

export const metaStrategy = [
  {
    title: "Domínio Geográfico (Raio 2km)",
    description: "Conjuntos focados em um raio curto (2km) provaram extrema eficiência (CPC de R$ 0,34 e alto volume de compras). A recomendação é manter esse núcleo e focar os testes em variações de mensagem."
  },
  {
    title: "A Oferta como Âncora",
    description: "Anúncios com cupom/condição lideram as conversões finais. A tática vencedora é rodar ofertas sempre atreladas a uma regra de elegibilidade ('primeira vez') para garantir aquisição sem ferir a margem geral."
  },
  {
    title: "Filtro de Topo de Funil",
    description: "Campanhas amplas atraem cliques baratos (CPC R$ 0,26), mas exigem atenção. O foco agora é aplicar um corte rigoroso nos criativos que não migram para compras, concentrando a verba no que traz ROI."
  }
];

export const crmMetrics = [
  { label: "Base Total Anota Aí", value: "1.224", subtitle: "Leads Potenciais" },
  { label: "Disparo Inicial", value: "500", subtitle: "Leads Selecionados" },
  { label: "Custo de Envio", value: "R$ 0,35", subtitle: "Por mensagem (WhatsApp API)" }
];

export const saloonOffers = [
  {
    title: "Combo Noite Especial",
    description: "Rodízio para casal com valor fixo promocional (R$ 85 os dois) + 2 sodas italianas por nossa conta.",
    rule: "Válido Terça a Quinta"
  },
  {
    title: "Primeira Bebida Grátis",
    description: "Apresente o cupom 'QUERO REFRI' ao garçom e ganhe o 1º refrigerante no rodízio.",
    rule: "Válido Terça a Quinta"
  },
  {
    title: "Desconto Corporativo",
    description: "Apresente o crachá da empresa de terça a quinta e ganhe 10% de desconto na mesa/rodízio.",
    rule: "Válido Terça a Quinta"
  }
];

export const deliveryOffers = [
  {
    title: "Recuperação 30+ Dias",
    description: "\"Vimos que você não compra com a gente há mais de 30 dias...\" + Cupom VOLTEI10 (10% OFF em qualquer pedido).",
    rule: "Qualquer dia da semana"
  },
  {
    title: "Quarta do Brotinho",
    description: "Pedindo qualquer pizza grande hoje por este link, ganhe uma pizza brotinho de chocolate por conta da casa.",
    rule: "Somente às Quartas-feiras"
  }
];

export const googleAdsPhases = [
  {
    phase: "Fase 1",
    label: "Validação",
    budget: "R$ 500/mês",
    daily: "~R$ 16,67/dia",
    clicks: "300 - 420",
    impressions: "4.300 - 6.000",
    routes: "35 - 50",
    description: "Verba mínima para testar raio, públicos e criativos de rota sem comprometer caixa — a base pedida no check-in anterior."
  },
  {
    phase: "Fase 2",
    label: "Expansão",
    budget: "R$ 900/mês",
    daily: "~R$ 30,00/dia",
    clicks: "560 - 750",
    impressions: "8.000 - 10.700",
    routes: "65 - 90",
    description: "Uma vez validados os indicadores da Fase 1, o incremento amplia alcance justamente nos dias de menor movimento (terça a quinta)."
  }
];

export const googleAdsKeywords = [
  { term: "pizzaria perto de mim", intent: "Descoberta local", volume: "300 – 500", priority: "Alta" },
  { term: "pizza perto de mim", intent: "Descoberta local", volume: "250 – 400", priority: "Alta" },
  { term: "rodízio de pizza", intent: "Rodízio", volume: "150 – 250", priority: "Alta" },
  { term: "rodízio de pizza perto de mim", intent: "Descoberta + rodízio", volume: "80 – 150", priority: "Alta" },
  { term: "pizzaria jundiaí", intent: "Geo de marca de nicho", volume: "90 – 150", priority: "Alta" },
  { term: "rodízio de pizza jundiaí", intent: "Rodízio + geo", volume: "40 – 90", priority: "Alta" },
  { term: "recanto da pizza", intent: "Busca de marca", volume: "Captura direta", priority: "Alta" },
  { term: "pizzaria aberta agora", intent: "Urgência / horário", volume: "60 – 120", priority: "Média" },
  { term: "melhor pizzaria jundiaí", intent: "Reputação / prova social", volume: "30 – 60", priority: "Média" },
  { term: "pizza artesanal jundiaí", intent: "Posicionamento de marca", volume: "15 – 35", priority: "Média" },
  { term: "pizzaria com rodízio jundiaí", intent: "Rodízio + geo", volume: "15 – 30", priority: "Média" },
  { term: "pizza delivery jundiaí", intent: "Delivery (referência)", volume: "50 – 100", priority: "Baixa" },
  { term: "restaurante italiano jundiaí", intent: "Categoria adjacente", volume: "20 – 40", priority: "Baixa" },
  { term: "onde comer pizza em jundiaí", intent: "Descoberta local", volume: "10 – 20", priority: "Baixa" },
  { term: "cardápio pizzaria jundiaí", intent: "Consideração", volume: "10 – 25", priority: "Baixa" }
];

export const gmnStrategy = [
  {
    title: "Estrutura & Descoberta",
    subtitle: "Base do perfil",
    items: [
      "Ajustar categoria principal para 'Pizzaria' e secundárias 'Restaurante' e 'Buffet'; ativar atributos de rodízio, ambiente para grupos e estacionamento.",
      "Padronizar nome, endereço e telefone (NAP) idênticos ao site e às redes.",
      "Cadastrar o cardápio do rodízio em 'Produtos', com fotos e preço de cada opção."
    ]
  },
  {
    title: "Prova Social & Conteúdo",
    subtitle: "Confiança para converter",
    items: [
      "Ativar coleta de avaliações via QR code na mesa/comanda ao fim do rodízio.",
      "Responder 100% das avaliações — positivas e negativas — em até 24h.",
      "Atualizar fotos do salão e do rodízio a cada 15 dias (ambiente + pizza saindo do forno).",
      "Popular Perguntas & Respostas com dúvidas recorrentes: horário, reserva, rodízio infantil."
    ]
  },
  {
    title: "Ofensiva Terça a Quinta",
    subtitle: "Prioridade do ciclo",
    items: [
      "Google Posts semanais destacando o rodízio nos dias de menor movimento, com CTA de rota/reserva.",
      "Diferencial exclusivo de Ter-Qui divulgado no perfil (ex: rodízio kids, happy hour do rodízio).",
      "Mesmo recorte de dias usado na campanha paga, para reforçar a mensagem nos dois canais ao mesmo tempo."
    ]
  }
];

export const nextStepsTimeline = [
  { time: "Agora", action: "Aprovar verba inicial de R$ 500 no Google Ads" },
  { time: "Próximas 2 semanas", action: "Publicar plano de ação do GMN" },
  { time: "Dia 30", action: "Revisar indicadores e decidir migração para R$ 900" }
];

export const chartData = [
  { name: 'Validação (R$ 500)', clicks: 360, routes: 42 },
  { name: 'Expansão (R$ 900)', clicks: 655, routes: 77 }
];
