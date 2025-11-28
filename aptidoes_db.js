export const APTIDOES_BASE = [
  {
    nome: "Liberação de Energia",
    maxNivel: 10,
    descricao: "Você aprende o básico do uso de Energia. Sua aura passa a se manifestar como um vapor quente saindo do seu corpo. Você pode gastar até seu Limite de PE por turno, que cresce conforme o nível.",
    niveis: [
      "NV 1 - Limite de PE por turno: +1",
      "NV 2 - Limite de PE por turno: +1",
      "NV 3 - Ganha 1 Característica Única de Aura",
      "NV 4 - Limite de PE por turno: +1",
      "NV 5 - Limite de PE por turno: +1",
      "NV 6 - Ganha 1 Característica Única de Aura",
      "NV 7 - Limite de PE por turno: +1",
      "NV 8 - Limite de PE por turno: +1",
      "NV 9 - Ganha 1 Característica Única de Aura",
      "NV 10 - Sua aura fica completamente estabilizada. Não gasta mais 1 PE por turno para manter aura ativa. Ganha 1 Característica Única Especial, exclusiva do seu personagem. Limite de PE por turno: +1"
    ]
  },
  {
    nome: "Proteção",
    maxNivel: 8,
    descricao: "Você aprende a manter a aura no seu corpo, contendo a mesma e evitando que ela saia para todos os lugares. Você passa a proteger melhor seu corpo. Com uma ação bônus você libera sua aura e ativa automaticamente sua proteção. Você gasta 1 ponto de energia por turno com aura ativa.",
    niveis: [
      "NV 1 - Você recebe +1 de redução a dano.",
      "NV 2 - Você recebe +1 de redução a dano e aumento de dano igual a 1.",
      "NV 3 - Você recebe +1 de redução a dano e aumento de dano igual a 1.",
      "NV 4 - Você recebe +2 de redução a dano e aumento de dano igual a 2. Aumenta o custo para manter a aura ativa para 2 PE por turno.",
      "NV 5 - Você recebe +2 de redução a dano e aumento de dano igual a 2.",
      "NV 6 - Você recebe redução de dano igual a 1 + X e aumento de dano igual a X. X = metade do seu Treinamento. Aumenta o custo para manter a aura ativa para 3 PE por turno.",
      "NV 7 - Você recebe redução de dano igual a Y + X e aumento de dano igual a Y + X. X = metade do seu Nível e Y = Seu treinamento. Aumenta o custo para manter a aura ativa para 4 PE por turno.",
      "NV 8 - Você ganha resistência a danos físicos e X + Y de aumento de dano. X = metade do seu Nível e Y = Seu treinamento. Aumenta o custo para manter a aura ativa para 5 PE por turno."
    ]
  },
  {
    nome: "Projeção",
    maxNivel: 5,
    descricao: "Você aprende a projetar sua aura, imbuindo ela em pequenas coisas e podendo utilizar para ataques menores. Você gasta 1 ponto de energia e uma ação comum para projetar sua energia. Custo de 1 PE. Seus ataques de projeção causam um dano crítico no 20 natural.",
    niveis: [
      "NV 1 - Você pode utilizar sua aura como um ataque amaldiçoado que causa 1d8 de dano.",
      "NV 2 - Você passa a adicionar um atributo mental a seus ataques de projeção. Além disso, pode imbuir um objeto com sua aura de projeção, aumentando seu dano em 1d6.",
      "NV 3 - Você passa a adicionar seu treinamento a seus ataques de projeção. Seu dano aumenta para 1d10 Além disso, pode imbuir um objeto com sua aura de projeção, aumentando seu dano em 1d8 + atributo mental a sua escolha. O custo aumenta para 2 PE.",
      "NV 4 - Seu dano base passa a ser 2d8 e seus ataques de projeção passam a ignorar uma quantidade de RD igual a seu treinamento. Além disso, pode imbuir um objeto com sua aura de projeção, aumentando seu dano em 2d6 + atributo mental a sua escolha. O custo aumenta para 3 PE.",
      "NV 5 - Seu dano base passa a ser 3d10, e você passa a ignorar Treinamento + Atributo mental de RD. Além disso, pode imbuir um objeto com sua aura de projeção, aumentando seu dano em 3d8 + atributo mental à sua escolha. O custo aumenta para 4 PE."
    ]
  },
  {
    nome: "Criação",
    maxNivel: 5,
    descricao: "Você entende o conceito de criação, aprendendo como a natureza funciona e as coisas ao seu redor podem ser utilizadas. Com uma ação comum você é capaz de criar coisas feitas de energia.",
    niveis: [
      "NV 1 - Você se torna capaz de criar pequenas paredes de energia, com tamanho 1x1. A vida da sua parede de energia é igual a metade do seu Nível X Treinamento. Custo de 1 PE.",
      "NV 2 - Suas paredes se tornam levemente mais resistentes, você passa a adicionar o modificador de um atributo mental na vida das suas paredes.",
      "NV 3 - O tamanho das suas paredes e o formato delas passa a poder ser diferente. Você pode criar paredes de até 3x3 e elas podem ter formatos variáveis. Custo de 2 PE.",
      "NV 4 - A vida da sua parede de energia é igual ao seu Nível X Treinamento + Atributo mental. Elas passam a ser mais maleáveis, podendo ser moldadas como argila.",
      "NV 5 - A vida da sua parede de energia é igual ao seu Nível X Treinamento + Dobro Atributo mental. Elas passam a ser mais maleáveis, podendo ser moldadas como argila e se tornam imunes ao primeiro ataque realizado contra elas. Custo de 4 PE."
    ]
  },
  {
    nome: "Concentração",
    maxNivel: 5,
    descricao: "Gastando uma ação bônus, você concentra sua aura em pontos específicos, focando causar um dano ou uma explosão maior de energia.",
    niveis: [
      "NV 1 - Você aumenta seu dado de dano em 1 nível. Custo 2 PE.",
      "NV 2 - Você passa a adicionar seu modificador do maior atributo no seu dano.",
      "NV 3 - Você recebe 1 dado adicional no dano final. Custo 3 PE.",
      "NV 4 - Você passa a aumentar seu dado de dano em 2 níveis ao invés de 1. Custo 4 PE.",
      "NV 5 - Você passa a poder maximizar o dano de uma quantidade de dados igual a seu treinamento. Custo 5 PE."
    ]
  },
  {
    nome: "Transformação",
    maxNivel: 5,
    descricao: "Você aprende a ressignificar a sua aura e a energia ao seu redor, transformando seu efeito. Útil para trocar tipo de dano, alterar forma de construções energéticas ou transmutar temporariamente características físicas. Você pode transformar o formato de aura para situações formas específicas. Você ativa os estados da transformação com uma ação bônus e paga 1 PE por turno para manter eles ativos.",
    niveis: [
      "NV 1 – Você pode aumentar as capacidades da sua aura, deixando a mesma mais sólida, líquida ou gasosa.\n Aura Líquida: Você faz com que seja mais difícil encostar em você. Aumenta sua CA em 1 ponto e ganha +1 em reflexos.\n Aura Sólida: Você resiste melhor a ataques realizados contra você. Aumenta sua RD em 1 ponto e ganha +1 de fortitude.\n Aura Gasosa: Sua aura muda, ficando mais instável e explosiva. Aumenta seu dano em +1 e ganha +1 em integridade.",
      "NV 2 – Aumenta o bônus da sua aura em +1.",
      "NV 3 – Aumenta o bônus da sua aura em +2. O custo para se manter ativo aumenta para 3 PE por turno.",
      "NV 4 – Aumenta o bônus da sua aura em +2.",
      "NV 5 – Você atinge o estado máximo de cada aura. O custo para se manter ativo aumenta para 4 PE por turno.\n Aura Líquida: Você recebe vantagem em testes de reflexos e recebe uma esquiva especial garantida na cena que a aura estiver ativa.\n Aura Sólida: Você recebe vantagem em testes de fortitude e aumenta recebe seu modificador mais alto em RD.\n Aura Gasosa: Você recebe vantagem em testes de integridade e aumenta seu dado de ataque em 1 dado adicional."
    ]
  },
  {
    nome: "Aura Elemental",
    maxNivel: 5,
    descricao: "Você imbui sua aura com propriedades da natureza (Fogo, Gelo, Raio, etc).",
    niveis: [
      "NV 1 – Você pode mudar o tipo de dano da sua projeção/ataque para outro tipo (ex.: cortante → queimante) por um número de turnos igual ao seu Treinamento.",
      "NV 2 – Além do acima, você pode transformar um objeto em um foco elemental de energia por turnos iguais ao Treinamento; transforma também um efeito elemental (por exemplo: calor → frio). Além disso, ao utilizar o elemento da sua aura, você pode adicionar 1d6 de dano adicional. A duração de sua aura passa a ser Cena.",
      "NV 3 – Você passa a poder transformar a aura de um alvo atingido: Você pode alterar a propriedade elemental do mesmo para sua aura elemental através de um teste de resistência. Você passa a adicionar seu atributo mental em rolagens de dano da aura.",
      "NV 4 – Você passa a passivamente possuir um elemento na sua aura. Pode escolher um segundo elemento para transformar sua aura e utilizar os efeitos de transformação.",
      "NV 5 – Você passa a causar 2d10+Atributo mental de dano de aura elemental."
    ]
  },
  {
    nome: "Molde",
    maxNivel: 5,
    descricao: "Você aprende a esculpir a energia com precisão, tornando criações e solidificações maleáveis e funcionais essenciais para criar formas complexas e ferramentas de energia. Para realizar a criação é necessário uma ação comum.",
    niveis: [
      "NV 1 – Pode moldar criações simples de energia (1x1) em formas definidas (por ex.: pilar, lâmina, escudo). Duração: Treinamento turnos. Vida/HP da peça = metade do seu Nível × Treinamento. Tem o custo de 2 PE para se erguerem.",
      "NV 2 – As criações ganham +1 na vida e podem ser levemente mais complexas.",
      "NV 3 – Pode criar formas até 3x3 com complexidade (partes móveis básicas). Vida das peças = metade do seu Nível × Treinamento + Atributo Mental.",
      "NV 4 – Permite criar ferramentas ou mecanismos (alavancas, portas energéticas) que executam uma ação simples por turno (ex.: emitir pulso, abrir/fechar). Duração aumentada em Treinamento.",
      "NV 5 – Criações moldadas ganham uma característica extra (ex.: afiada, condutora, amortecedora) por escolha do usuário; recebem imunidade ao primeiro ataque e têm sua vida = Nível × Treinamento + Atributo Mental."
    ]
  },
  {
    nome: "Intensificação",
    maxNivel: 5,
    descricao: "Como uma reação, você aprende a comprimir e sobrecarregar a energia para torná-la mais potente: mais dano, mais defesa, efeitos mais longos ou maior alcance. Ao conjurar, atacar ou defender como gatilho, você pode intensificar.",
    niveis: [
      "NV 1 – Aumenta o dano ou defesa de uma habilidade de energia em +1 por ativação. Custo de 1 PE.",
      "NV 2 – Aumenta o dano ou defesa em +2 e adiciona +1 de alcance/raio. Custo de 1 PE.",
      "NV 3 – Aumenta dano ou defesa em 1 + metade do seu Treinamento e aplica um bônus de ignorar RD igual a metade do seu Treinamento. Aumenta o custo para 2 PE.",
      "NV 4 – Aumenta dano em 1 nível ou ganha seu modificador mais alto na defesa e a duração igual ao Treinamento. Aumenta o custo para 3 PE.",
      "NV 5 – Você agrega X + Y de dano bônus (X = metade do Nível, Y = seu Treinamento) e pode sacrificar uma reserva de energia para aumentar o nível de dano em 2 níveis ou se tornar resistente a um dano. Custo 5 PE."
    ]
  },
  {
    nome: "Solidificação",
    maxNivel: 5,
    descricao: "Utilizando uma ação bônus, você compacta e endurece sua aura em torno do corpo, transformando-a numa armadura energética. Enquanto a Solidificação está ativa ela modifica e melhora os efeitos da sua Proteção, dando redução de dano, pontos de vida temporários e resistências graduais. Custo de 1 PE por turno.",
    niveis: [
      "NV 1 – Ao ativar Solidificação, sua Proteção recebe +1 de redução de dano adicional. Você também ganha PVs temporários = Treinamento enquanto durar a Solidificação.",
      "NV 2 – Aumento de redução passa a ser +2. Enquanto a Solidificação estiver ativa você recebe +1 de aumento de dano nas suas projeções/ataques energéticos.",
      "NV 3 – Aumento de redução = 1 + X, onde X = metade do seu Treinamento (arredondar para baixo). Você ganha Resistência a dano físico = X (reduz dano físico recebido em X) e PVs temporários = Treinamento + Modificador de Atributo Mental. Aumenta o custo para 2 PE por turno.",
      "NV 4 – Aumento de redução = Y + X, onde Y = seu Treinamento e X = metade do seu Nível. Enquanto ativa, a Solidificação concede redução extra contra ataques críticos (o primeiro ataque que exceder sua redução tem seu dano reduzido em 50%) e prolonga a duração da Proteção em + metade do seu Nível (em turnos). Aumenta o custo para 3 PE por turno.",
      "NV 5 – Você ganha resistência a danos físicos e + (X + Y) de aumento de dano em suas habilidades energéticas quando a Solidificação está ativa. X = metade do seu Nível; Y = seu Treinamento. Além disso, a armadura energética concede imunidade ao primeiro efeito negativo que tentarem aplicar ao seu corpo enquanto a Solidificação durar (consome-se para negar o efeito). Aumenta o custo para 4 PE por turno."
    ]
  },
  {
    nome: "Encasular",
    maxNivel: 5,
    descricao: "Com uma ação comum, você cria invólucros/bolhas de energia que prendem, isolam ou protegem, usado tanto defensivamente quanto para prender alvos. Alvos devem falhar em um teste de reflexos para serem presos. Custo de 1 PE por turno ativo.",
    niveis: [
      "NV 1 – Cria uma pequena bolha (1 alvo pequeno ou 1 espaço 1x1) que reduz a mobilidade do interior e concede redução de dano aos que estão dentro igual a seu treinamento. Duração = Treinamento turnos.",
      "NV 2 – Bolha ganha HP igual a Nível × Treinamento + Atributo Mental, inimigos dentro tem desvantagem em testes físicos. Aumenta o custo para 2 PE por turno.",
      "NV 3 – Pode infligir dano periódico (1 por turno + metade do seu Treinamento) a alvos presos, pode impedir comunicação fazendo o casulo ser a prova de som.",
      "NV 4 – Pode encasular múltiplos alvos (até X alvos, X = metade do seu Treinamento) ou aumentar o tamanho do invólucro (até 3x3). Encasulamento pode absorver um ataque dirigido ao interior (consome a bolha se quebrada). Aumenta o custo para 3 PE por turno.",
      "NV 5 – Bolhas tornam-se quase impenetráveis por uma quantidade de turnos igual a metade do Treinamento. Feitiços não podem ser utilizados dentro da bolha. Aumenta o custo para 4 PE por turno."
    ]
  },
  {
    nome: "Redirecionar",
    maxNivel: 5,
    descricao: "Com uma reação, você manipula a direção dos fluxos de energia: pode curvar ataques, reencaminhar projeções ou alterar trajetórias. Sempre realizando um teste de feitiçaria contra o atacante, recebendo metade do dano em um sucesso e ignorando o dano em um sucesso crítico.",
    niveis: [
      "NV 1 – pode curvar um ataque de projeção dirigido contra você, mudando seu alvo para outro ponto adjacente. Tem o custo de 1 PE.",
      "NV 2 – pode redirecionar projéteis/rajadas até alcance curto, inimigos que vieram de longa distância recebem desvantagem no próximo ataque após redirecionamento. Tem o custo de 1 PE.",
      "NV 3 – pode redirecionar efeitos com origem não-pessoal (explosões, piches de energia) para uma área alternativa em até 3 metros. Tem o custo de 2 PE.",
      "NV 4 – consegue criar nós de redirecionamento iguais a X no campo que mudam trajetórias automaticamente por X turnos. X = Metade do treinamento.",
      "NV 5 – você pode refletir de volta uma habilidade de energia para o remetente, devolvendo metade do dano ou convertendo o ataque em forma diferente (alterando para o tipo de dano da sua aura). O valor do redirecionamento é igual a metade do custo da habilidade utilizada pelo atacante. Tem o custo de 5 PE."
    ]
  },
  {
    nome: "Esconder",
    maxNivel: 5,
    descricao: "Você aprende a ocultar a sua aura e a energia de detecção alheia, criando camadas de camuflagem e dissimulação. 1 ponto de energia para ativar. Cada nível aumenta o custo em 1 ponto de energia.",
    niveis: [
      "NV 1 – Sua aura deixa de ser detectável por métodos simples (detecções básicas, sensores de energia de baixa qualidade) por Treinamento turnos.",
      "NV 2 – Pode projetar uma falsa assinatura de aura (pequena isca) que confunde detectores. Ganha seu treinamento nos testes de furtividade.",
      "NV 3 – Cria ocultação completa, você pode permanecer invisível a sensores energéticos por turnos adicionais iguais à metade do seu Treinamento, gastando 2 pontos de energia adicionais, pode duplicar sua assinatura para criar um “eco” enganoso.",
      "NV 4 – Pode embaçar a aura de aliados próximos (raio = metade do seu Nível) e mascarar presença de grupo.",
      "NV 5 – Ocultação avançada torna-se indetectável a todos os rastreios comuns por X turnos (X = metade do seu treinamento), pode assumir temporariamente a assinatura de outra fonte de energia conhecida."
    ]
  },
  {
    nome: "Perturbação",
    maxNivel: 5,
    descricao: "Com uma ação comum ou reação, você aprende a interferir no fluxo de energia dos outros: quebrar conjurações, causar dispersão de efeitos e desestabilizar ataques.",
    niveis: [
      "NV 1 – alvo sofre -1 em testes de ativação de habilidades de energia por 1 turno. Custo 1 PE para ação comum e 1 PE para reação.",
      "NV 2 – alvo deve passar em um teste de vontade para completar conjurações, falha = conjuração interrompida. Custo 1 PE para ação comum e 2 PE para reação.",
      "NV 3 – Pode criar uma zona de perturbação (até 3x3) que reduz a eficácia de habilidades energéticas em X e causa dano menor periódico (1 por turno). Duração igual a X. X = metade do seu Treinamento. Custo 2 PE para ação comum e 4 PE para reação.",
      "NV 4 – Capaz de interromper temporariamente recarga/recuperação de poderes em alvos atingidos por Y turnos (Y = metade do seu Nível) se falharem em teste. Custo 3 PE para ação comum e 6 PE para reação.",
      "NV 5 – Por uma ativação poderosa você pode anular uma habilidade de um inimigo (cooldown forçado) ou inverter o efeito de uma habilidade de energia (transformar buff em debuff) por 1 turno + Treinamento se o alvo falhar em um teste difícil. Custo 4 PE para ação comum e 8 PE para reação."
    ]
  },
  {
    nome: "Infestar",
    maxNivel: 3,
    descricao: "Impregnar áreas/objetos/vítimas com partículas de aura que se espalham, corroem e geram efeitos persistentes. CD de aptidão com teste de fortitude para resistir.",
    niveis: [
      "NV 1 (Semente): Infesta 1 quadrado (1x1) ou 1 item. Efeito: dano 1d4 por turno a quem tocar; penalidade −1 em testes de resistência/recuperação daquele alvo. Consegue observar as coisas pela semente infestada. Duração base = Metade do Treinamento turnos. Custo igual a 2 de energia.",
      "NV 2 (Praga): Área até 2x2; dano 1d6/turno + chance de espalhar (taxa = metade do Treinamento% por turno). Objetos infestados dão −1 em concentrações/ativação. Duração = Treinamento turnos. Energia: 4.",
      "NV 3 (Fetidez): Área até 3x3 ou 1 criatura infestada: dano 1d8/turno + drenagem de recuperação (alvo perde 1 ponto de Energia por turno) e atinge Vulnerabilidade temporária (recebe +1 dano de fontes de aura) por Treinamento + 1 turnos. Energia: 6."
    ]
  },
  {
    nome: "Destruir",
    maxNivel: 3,
    descricao: "Ataque concentrado que busca aniquilar ou romper matéria/estruturas e dissipar energia no alvo, pensado para causar dano massivo a objetos/armaduras e vida. CD de aptidão com teste de fortitude para resistir.",
    niveis: [
      "NV 1 (Rasgar): Ataque focal que causa 3d6 + Atributo Mental de dano a um alvo; se for objeto ou estrutura, aplica -2 na rolagem de resistência/vida do objeto. Energia: 3.",
      "NV 2 (Praga): Ataque de área cônico em uma área 3m: 4d8 + Atributo Mental de dano; estruturas no raio sofrem dano dobrado; inimigos atingidos têm uma redução de defesa (−1) por Treinamento/2 turnos. Energia: 5.",
      "NV 3 (Expurgar): Foco extremo 6d10 + Atributo Mental + Treinamento se acertar, alvo perde temporariamente X (X = metade do Nível) pontos de atributo físico ou tem sua armadura/estrutura destroçada (objetos são destruídos automaticamente se falharem no teste). Duração igual Treinamento. Energia: 8."
    ]
  },
  {
    nome: "Torturar",
    maxNivel: 3,
    descricao: "Técnica de dano direto e contínuo que foca em corroer a vontade/corpo, provoca dor, paralisia localizada, ou roubo de energia/atributos. CD de aptidão com teste de fortitude para resistir.",
    niveis: [
      "NV 1 (Dor): Ataque único que aplica 2d6 + Atributo Mental de dano + efeito de dor: alvo sofre −1 em testes físicos por 1d4 turnos. Energia: 3.",
      "NV 2 (Cativeiro): Dano 3d8 + drenagem de energia: o atacante recupera metade do dano causado como Energia (máx = metade do seu Treinamento por uso). Alvo sofre penalidade −1D em recuperação de vida por X turnos. Energia: 5.",
      "NV 3 (Flagelo): Dano 4d10 + Atributo Mental, aplica um efeito de “paralisia parcial” (o alvo tem sua ação principal reduzida/limitada não podendo utilizar ataques ou feitiços e perde 1 ponto de atributo físico/mental por uma quantidade de turnos igual o treinamento. Recuperação mediante descanso ou cura). Energia: 8."
    ]
  },
  {
    nome: "Assombrar",
    maxNivel: 3,
    descricao: "Impregnar a sua aura em objetos ou corpos vivos, controlando-os ou distorcendo sua natureza. Energia (varia por modo) + 1 Custo Extra (Sangue, Exaustão, Desgaste Mental ou Marca de Corrupção). CD de aptidão com teste de fortitude para resistir.",
    niveis: [
      "NV 1 (Sombras do Inanimado): Você assombra um objeto pequeno ou médio (arma, armadura, estátua, porta, etc.). O objeto ganha uma “vida espectral” e pode se mover sozinho ou atacar. Energia: 2. Arma: causa 1d8 + Treinamento de dano por turno. Armadura/Escudo: fornece +2 CA ou absorve 1d6 de dano antes de quebrar.",
      "NV 2 (Marionete de Carne): Você pode assombrar um ser vivo inconsciente, fraco ou voluntário (ex.: cadáver, animal pequeno, pessoa debilitada). Você controla o corpo como uma marionete imperfeita. Energia: 4. PV = Nível × Treinamento. Movimenta/ataca como se fosse um fantoche grotesco.",
      "NV 3 (Espectral): Você tenta possuir totalmente uma pessoa viva (mesmo consciente). O alvo fica consciente, mas preso dentro do próprio corpo, sem poder agir. Se o hospedeiro cair a 0 PV, você é expulso, sofre 1d8 × Tier de dano e ganha automaticamente 1 Marca de Corrupção. Energia: 6. Limite: só pode possuir 1 hospedeiro por vez."
    ]
  },
  {
    nome: "Ápice Humano",
    maxNivel: 1,
    descricao: "Seu corpo atinge o pico absoluto do desenvolvimento humano. Sua energia se estabiliza, seus músculos e reflexos chegam ao limite natural e sua mente se torna perfeitamente focada.\nEfeitos:\nSeu corpo passa a ser tratado como se estivesse sempre no máximo humano possível, você não fica mais doente ou sente efeitos comuns humanos.\n\nVocê recebe +Treinamento em redução de dano permanente.\n\nSeus testes físicos (Atletismo, Resistência, Reflexos) recebem Treinamento como bônus.\n\n1 vez por descanso longo, você pode ativar o estado Corpo no Limite por Treinamento turnos, ganhando:\n\n+1 Ação extra por turno.\nResistência a todo dano físico.\nAo final, sofre Exaustão (perde −2 em todos os testes físicos por 1 hora)",
    niveis: ["Desbloqueado"]
  },
  {
    nome: "Corpo Amaldiçoado",
    maxNivel: 1,
    descricao: "Você transforma o corpo em uma extensão viva da sua energia, deixando de se limitar pelas amarras do ser humano comum. Sua forma física é maleável, instável e monstruosa, mas capaz de liberar o máximo potencial da maldição.\nEfeitos:\nSeu corpo passa a contar como Energia Solidificada: qualquer teste ou efeito que afete matéria ou energia pode afetar você. Você passa a poder dar ataques físicos como ataque amaldiçoado.\nVocê recebe +Treinamento em aumento de dano permanente.\nSeus testes de manipulação de energia (Projeção, Criação, Transformação) recebem +Treinamento em bônus de rolagem.\n1 vez por descanso longo, você pode ativar o estado Forma Amaldiçoada por Treinamento turnos, ganhando:\n\nSeus ataques causam +Nível d12 de dano de energia.\nVocê pode moldar seu corpo livremente (aumentar alcance, gerar armas naturais, planar e etc.).\nImunidade a condições físicas (atordoamento, agarrado, paralisia) enquanto durar.\nAo final, você sofre 1 Marca de Corrupção automática e perde Nível × 2 PV que não podem ser curados até um descanso longo. Limite te deixa com 1 PV.",
    niveis: ["Desbloqueado"]
  }
];
