export default function App() {
  const services = [
    {
      title: 'Estratégia & Posicionamento',
      description:
        'Clareza de marca, direção estratégica, arquitetura de oferta e narrativa para transformar percepção em desejo e desejo em demanda.',
    },
    {
      title: 'Marketing & Growth',
      description:
        'Planejamento e operação de canais, campanhas, funis, aquisição, retenção e inteligência comercial com foco em performance real.',
    },
    {
      title: 'Conteúdo & Audiovisual',
      description:
        'Conteúdo que não existe só para preencher feed. Criamos ativos que constroem marca, geram atenção e ajudam a vender.',
    },
    {
      title: 'Design & Experiência',
      description:
        'Identidade, interfaces, landing pages, sites e materiais com sofisticação visual, coerência estratégica e função comercial.',
    },
    {
      title: 'Lançamentos & Produtos Digitais',
      description:
        'Da tese ao go to market: estruturação de produtos, jornadas, páginas, campanhas, criativos, automações e operação de lançamento.',
    },
    {
      title: 'Projetos Especiais',
      description:
        'Para marcas, creators e negócios digitais que precisam de execução de alto nível em iniciativas críticas, sensíveis ou fora do padrão.',
    },
  ];

  const pillars = [
    {
      name: 'Strategic Clarity',
      text: 'Antes de criar, definimos o que importa. Posicionamento, prioridade, oferta, objetivo e critério de decisão.',
    },
    {
      name: 'Creative Precision',
      text: 'Design, copy e conteúdo com direção. Estética sem função é custo. Aqui, forma e resultado andam juntos.',
    },
    {
      name: 'Operational Depth',
      text: 'Executamos com método, processo e acompanhamento. Ideia boa sem operação vira só mais uma apresentação bonita.',
    },
    {
      name: 'Commercial Intent',
      text: 'Tudo é pensado para construir marca e mover negócio. Autoridade, demanda, conversão e crescimento sustentável.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Diagnóstico',
      description:
        'Leitura estratégica do negócio, momento, ativos, gargalos, oportunidades, canal, oferta e maturidade operacional.',
    },
    {
      step: '02',
      title: 'Direção',
      description:
        'Definição de tese, foco, narrativa, escopo, plano de execução, prioridades e metas do projeto.',
    },
    {
      step: '03',
      title: 'Produção',
      description:
        'Criação dos ativos necessários: branding, páginas, campanhas, conteúdo, design, copies, fluxos e estrutura de marketing.',
    },
    {
      step: '04',
      title: 'Operação',
      description:
        'Gestão da execução, publicação, mídia, ajustes, acompanhamento, otimização e tomada de decisão com base em sinais reais.',
    },
  ];

  const cases = [
    {
      title: '2YOU Capital (Trading)',
      category: 'Growth • Funil • Conteúdo • Conversão',
      impact:
        'Estruturação completa de aquisição e monetização para operação de trading, conectando autoridade, conteúdo e performance.',
      bullets: [
        'Criação e otimização de landing pages (CopyTrading, PAMM, campanhas)',
        'Desenvolvimento de narrativa comercial e ofertas (Copy do Milhão, PAMM Gold)',
        'Estruturação de funil com WhatsApp, conteúdos e campanhas',
        'Integração entre mídia paga, conteúdo e conversão',
        'Aumento de clareza comercial e consistência de aquisição',
      ],
    },
    {
      title: '48K Studios (Música & Creators)',
      category: 'Branding • Conteúdo • Produto • Monetização',
      impact:
        'Reposicionamento estratégico e estruturação de oferta para produtora musical e operação criativa.',
      bullets: [
        'Refinamento de posicionamento e proposta de valor',
        'Criação de campanhas e páginas para captação de artistas',
        'Estruturação de narrativa contra a comoditização da música por IA',
        'SEO e estratégia de distribuição para YouTube e plataformas',
        'Modelagem de ofertas e ações comerciais',
      ],
    },
    {
      title: 'Projetos com Influenciadores & Marcas',
      category: 'Campanhas • Gestão • Estratégia',
      impact:
        'Planejamento e execução de campanhas com creators para marcas, com foco em resultado e posicionamento.',
      bullets: [
        'Estruturação de campanhas com influenciadores',
        'Negociação e gestão de contratos com talentos',
        'Desenvolvimento de conteúdo patrocinado com intenção comercial',
        'Integração entre branding e performance',
        'Projetos com marcas como PRAVALER, Domino’s, Shein e Dasa',
      ],
    },
    {
      title: 'Desenvolvimento de Sites & Presença Digital',
      category: 'Design • Conversão • Branding',
      impact:
        'Criação de sites e landing pages com foco em percepção premium e geração de demanda.',
      bullets: [
        'Desenvolvimento de sites institucionais e páginas de conversão',
        'Direção de design com padrão premium',
        'Copy estratégica orientada a posicionamento e venda',
        'Integração com campanhas e funis de aquisição',
        'Projetos para empresas como 2YOU Engenharia e negócios digitais',
      ],
    },
    {
      title: 'Estruturação de Produtos Digitais & Lançamentos',
      category: 'Oferta • Go-to-market • Growth',
      impact:
        'Criação e lançamento de produtos digitais com estrutura completa de marketing e venda.',
      bullets: [
        'Definição de oferta, pricing e narrativa',
        'Criação de páginas, criativos e sequência de lançamento',
        'Planejamento de lives, conteúdos e aquecimento',
        'Execução de campanhas e captação de leads',
        'Integração entre conteúdo, audiência e conversão',
      ],
    },
  ];

  const proofNumbers = [
    {
      value: '360°',
      label: 'Atuação conectando branding, marketing, conteúdo, design, tecnologia e operação.',
    },
    {
      value: 'Multi-vertical',
      label: 'Experiência em creators, música, trading, produtos digitais e marcas em construção.',
    },
    {
      value: 'High touch',
      label: 'Direção estratégica próxima em projetos que exigem decisão, refinamento e execução.',
    },
    {
      value: 'End-to-end',
      label: 'Da tese e posicionamento até páginas, campanhas, conteúdo e estrutura comercial.',
    },
  ];

  const clientLogos = ['2YOU Capital', '48K Studios', 'Creators & Experts', 'Marcas Digitais', 'Projetos Especiais'];

  const faqs = [
    {
      q: 'A 2YOU Digital é agência, consultoria ou operação?',
      a: 'É uma estrutura híbrida. Pensamos estrategicamente, desenhamos o plano e executamos a operação necessária para o projeto andar de verdade.',
    },
    {
      q: 'Vocês fazem só branding?',
      a: 'Não. Branding sem distribuição e sem conversão é vaidade cara. Atuamos da estratégia à execução comercial e criativa.',
    },
    {
      q: 'Vocês assumem tráfego, conteúdo e design?',
      a: 'Sim, quando isso faz sentido para o objetivo do projeto. O escopo é desenhado a partir do que realmente move resultado.',
    },
    {
      q: 'Atendem qualquer tipo de cliente?',
      a: 'Não. Trabalhamos melhor com marcas, creators e negócios digitais que valorizam direção, velocidade, qualidade e ambição com racionalidade.',
    },
    {
      q: 'Como começa o trabalho?',
      a: 'Começa por diagnóstico e definição clara do que precisa ser resolvido. Sem isso, o resto vira ruído, retrabalho e custo disfarçado.',
    },
  ];

  const workModel = [
    ['Entrada', 'Diagnóstico estratégico para entender cenário, gargalos, prioridades e oportunidades reais.'],
    ['Definição', 'Clareza de escopo, entregáveis, metas e critérios de decisão. Sem isso, não seguimos.'],
    ['Execução', 'Produção e operação com acompanhamento próximo, ajustes rápidos e foco em eficiência.'],
    ['Evolução', 'Refinamento contínuo com base em sinais reais de mercado, não opinião ou vaidade.'],
  ];

  const capabilities = [
    'Posicionamento e arquitetura de marca',
    'Criação de ofertas e estrutura comercial',
    'Sites e landing pages com foco em conversão',
    'Produção de conteúdo estratégico e audiovisual',
    'Campanhas de aquisição e performance',
    'Estrutura de funis, automações e jornadas',
    'Direção criativa e design de alto padrão',
    'Lançamentos e go-to-market',
    'Integração entre branding e growth',
  ];

  const executiveCases = [
    {
      title: 'Funil completo para operação de trading',
      desc: 'Landing pages, criativos, estrutura de aquisição e narrativa comercial conectando conteúdo, autoridade e conversão.',
    },
    {
      title: 'Reposicionamento de operação criativa',
      desc: 'Refino de marca, oferta, comunicação e estrutura de captação para elevar percepção e monetização.',
    },
    {
      title: 'Sites e sistemas de presença premium',
      desc: 'Construção de presença digital com estética sofisticada e função clara de geração de demanda.',
    },
  ];

  const diagnosticAnalysis = [
    'Posicionamento e proposta de valor',
    'Oferta e modelo de monetização',
    'Presença digital e percepção de marca',
    'Funil, aquisição e canais',
    'Conteúdo, criativos e comunicação',
  ];

  const diagnosticDeliverables = [
    'Leitura estratégica do negócio',
    'Identificação de gargalos reais',
    'Mapa de oportunidades prioritárias',
    'Direcionamento de posicionamento',
    'Plano inicial de ação',
  ];

  const diagnosticFormat = [
    'Imersão no negócio',
    'Call estratégica',
    'Entrega estruturada',
    'Possibilidade de continuidade',
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-950 selection:bg-neutral-900 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-semibold text-white shadow-sm">
              2Y
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">2YOU Digital</p>
              <p className="text-xs text-neutral-500">Strategy. Creative. Growth.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-neutral-600 transition hover:text-neutral-950">Serviços</a>
            <a href="#method" className="text-sm text-neutral-600 transition hover:text-neutral-950">Método</a>
            <a href="#cases" className="text-sm text-neutral-600 transition hover:text-neutral-950">Atuação</a>
            <a href="#about" className="text-sm text-neutral-600 transition hover:text-neutral-950">Sobre</a>
            <a href="#contact" className="text-sm text-neutral-600 transition hover:text-neutral-950">Contato</a>
          </nav>

          <a href="#contact" className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02]">
            Falar com a 2YOU
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-28">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Institucional • Premium • Performance orientada
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
                Marketing, branding, conteúdo e execução digital com padrão de marca que quer crescer de verdade.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
                A 2YOU Digital estrutura marcas, creators e negócios digitais com estratégia, direção criativa e operação. Não entregamos só peças. Construímos sistemas de percepção, aquisição e crescimento.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="rounded-full bg-neutral-950 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:scale-[1.02]">
                  Solicitar diagnóstico
                </a>
                <a href="#services" className="rounded-full border border-neutral-300 px-7 py-3.5 text-center text-sm font-medium text-neutral-900 transition hover:border-neutral-950">
                  Explorar serviços
                </a>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
                <div>
                  <p className="text-2xl font-semibold tracking-tight">360°</p>
                  <p className="mt-1 text-sm text-neutral-500">Visão integrada de marca, marketing e operação</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">Do zero ao scale</p>
                  <p className="mt-1 text-sm text-neutral-500">Projetos em estruturação, validação e crescimento</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">High touch</p>
                  <p className="mt-1 text-sm text-neutral-500">Direção próxima, criteriosa e orientada a decisão</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-4 shadow-[0_30px_120px_rgba(0,0,0,0.10)]">
                <div className="rounded-[1.6rem] border border-neutral-200 bg-white p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-neutral-950 p-6 text-white">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">Brand Architecture</p>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">Posicionamento com intenção comercial.</h3>
                      <p className="mt-3 text-sm leading-6 text-white/75">
                        Clareza de tese, diferenciação, percepção e coerência entre o que a marca diz, mostra e vende.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-neutral-100 p-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Performance System</p>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">Marketing que não opera no escuro.</h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-600">
                        Conteúdo, mídia, páginas, criativos e fluxo conectados para gerar aprendizado, demanda e conversão.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-neutral-100 p-6 md:col-span-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Creative & Execution Layer</p>
                      <h3 className="mt-5 text-3xl font-semibold tracking-tight">Sofisticação visual sem perder funcionalidade.</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
                        Da identidade ao audiovisual. Do site ao lançamento. Da campanha ao refinamento. Tudo com leitura estratégica e intenção de negócio.
                      </p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {['Branding', 'Conteúdo', 'Growth'].map((tag) => (
                          <div key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-center text-sm text-neutral-700">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-4 lg:px-10">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="rounded-[1.75rem] border border-neutral-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-medium text-neutral-500">{pillar.name}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{pillar.name}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Serviços</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Uma estrutura criativa e estratégica para construir, acelerar e sofisticar negócios digitais.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Não vendemos um cardápio solto de entregas. Desenhamos um sistema de trabalho baseado no momento do negócio, no objetivo principal e no nível de profundidade necessário.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-neutral-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="method" className="bg-neutral-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">Método</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Menos aleatoriedade. Mais direção, execução e decisão.</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Nosso trabalho conecta diagnóstico, direção, produção e operação para reduzir desperdício, acelerar aprendizado e aumentar consistência de marca e resultado.
              </p>
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="text-sm font-medium text-white/40">{item.step}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="mr-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Experiência aplicada em</p>
              {clientLogos.map((logo) => (
                <div key={logo} className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Provas & atuação</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A 2YOU Digital não nasce de teoria. Nasce de operação real em branding, crescimento, conteúdo e negócios digitais.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Atuamos em projetos próprios e operações de clientes onde marca, venda, narrativa, design e execução precisam funcionar juntos. A lógica é simples: percepção sem operação não escala, e performance sem marca desgasta valor.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {proofNumbers.map((item) => (
              <div key={item.value} className="rounded-[1.75rem] border border-neutral-200 bg-white p-7 shadow-sm">
                <p className="text-3xl font-semibold tracking-tight text-neutral-950">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6">
            {cases.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">{item.category}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-neutral-600">{item.impact}</p>
                  </div>
                  <div className="grid gap-4">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-700">
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Sobre a 2YOU Digital</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Estratégia e execução para a nova geração de marcas e negócios digitais.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-neutral-600">
              <p>
                A 2YOU Digital é uma operação especializada em construir valor percebido, presença de marca e capacidade comercial para empresas, creators e projetos digitais.
              </p>
              <p>
                Trabalhamos na interseção entre branding, marketing, design, conteúdo, audiovisual, tecnologia e crescimento. Não como disciplinas isoladas, mas como partes de um mesmo sistema.
              </p>
              <p>
                Nosso diferencial não é fazer mais volume. É pensar com profundidade, escolher melhor, criar com critério e executar com direção.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Princípios</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">O que orienta nosso trabalho.</h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              ['Clareza antes de volume', 'Fazer mais sem direção só acelera desperdício.'],
              ['Marca e venda não competem', 'Percepção e conversão precisam estar conectadas.'],
              ['Estética precisa servir ao negócio', 'Bonito sem função não paga a conta.'],
              ['Execução é parte da estratégia', 'Plano sem operação é só intenção bem diagramada.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-neutral-200 p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-neutral-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">FAQ</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Perguntas que costumam aparecer antes do projeto começar.</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((item) => (
                  <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
                    <h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Como trabalhamos</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Estrutura simples, execução séria. Sem teatro operacional.</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Não operamos com escopo inflado nem promessa vaga. Cada projeto nasce com um objetivo claro, um plano enxuto e execução focada no que realmente move resultado.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {workModel.map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-neutral-200 p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Capacidades</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">O que de fato colocamos na mesa.</h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 text-sm leading-7 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Cases (visão executiva)</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Exemplos do tipo de trabalho que executamos.</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {executiveCases.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-neutral-200 p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-neutral-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">Produto de entrada</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Diagnóstico Estratégico 2YOU</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                A forma mais direta de entender onde o seu negócio realmente está, o que está travando crescimento e quais decisões precisam ser tomadas agora.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold">O que analisamos</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {diagnosticAnalysis.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold">O que você recebe</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {diagnosticDeliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold">Formato</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {diagnosticFormat.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-10">
              <h3 className="text-2xl font-semibold tracking-tight">Para quem é</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
                Negócios, marcas e creators que já estão em movimento, mas sentem falta de clareza estratégica, organização de marketing ou consistência de crescimento.
              </p>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">Para quem não é</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
                Quem está começando do zero absoluto, busca soluções genéricas ou não pretende executar o que for definido.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:contato@2youdigital.com" className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-medium text-neutral-950 transition hover:scale-[1.02]">
                  Aplicar para diagnóstico
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="rounded-[2rem] border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-10 shadow-[0_25px_100px_rgba(0,0,0,0.08)] sm:p-14">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Contato</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Se existe projeto, ambição e potencial, a 2YOU entra para organizar a direção e elevar a execução.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
                A porta de entrada é um diagnóstico estratégico para entender cenário, gargalos, prioridade, tese de posicionamento, oportunidades e desenho inicial do plano.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
                <p className="text-sm font-medium text-neutral-500">Formato de entrada</p>
                <p className="mt-3 text-lg font-semibold tracking-tight">Diagnóstico estratégico</p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  Análise do negócio, leitura do momento, definição de prioridade e próximos movimentos.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
                <p className="text-sm font-medium text-neutral-500">Perfil ideal</p>
                <p className="mt-3 text-lg font-semibold tracking-tight">Marcas, creators e operações digitais</p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  Projetos com ambição real, necessidade de direção e abertura para execução com critério.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
                <p className="text-sm font-medium text-neutral-500">Contato</p>
                <p className="mt-3 text-lg font-semibold tracking-tight">contato@2youdigital.com</p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  Para conversas estratégicas, projetos especiais, operação contínua ou construção de marca.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:contato@2youdigital.com" className="rounded-full bg-neutral-950 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:scale-[1.02]">
                Solicitar diagnóstico
              </a>
              <a href="https://instagram.com" className="rounded-full border border-neutral-300 px-7 py-3.5 text-center text-sm font-medium text-neutral-900 transition hover:border-neutral-950">
                Ver presença digital
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 2YOU Digital. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="transition hover:text-neutral-950">Serviços</a>
            <a href="#about" className="transition hover:text-neutral-950">Sobre</a>
            <a href="#contact" className="transition hover:text-neutral-950">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
