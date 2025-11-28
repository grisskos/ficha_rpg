export const APTIDOES_BASE = [
  {
    nome: "Liberação de Energia",
    maxNivel: 10,
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
      "NV 10 - Aura estabilizada. Não gasta mais 1 PE/turno. Ganha Característica Especial. Limite PE: +1"
    ]
  },
  {
    nome: "Proteção",
    maxNivel: 8,
    niveis: [
      "NV 1 - +1 Redução de Dano.",
      "NV 2 - +1 Redução, +1 Dano.",
      "NV 3 - +1 Redução, +1 Dano.",
      "NV 4 - +2 Redução, +2 Dano. Custo: 2 PE/turno.",
      "NV 5 - +2 Redução, +2 Dano.",
      "NV 6 - Redução 1+X, Dano X (X=Metade Treino). Custo: 3 PE/turno.",
      "NV 7 - Redução Y+X, Dano Y+X. Custo: 4 PE/turno.",
      "NV 8 - Resistência Física, Dano X+Y. Custo: 5 PE/turno."
    ]
  },
  {
    nome: "Projeção",
    maxNivel: 5,
    niveis: [
      "NV 1 - Ataque 1d8. Crítico 20.",
      "NV 2 - Soma Atributo Mental. Imbuir objeto (+1d6).",
      "NV 3 - Soma Treinamento. Dano 1d10. Imbuir (+1d8+Mental). Custo 2 PE.",
      "NV 4 - Dano 2d8. Ignora RD (Treino). Imbuir (+2d6+Mental). Custo 3 PE.",
      "NV 5 - Dano 3d10. Ignora RD (Treino+Mental). Imbuir (+3d8+Mental). Custo 4 PE."
    ]
  },
  {
    nome: "Criação",
    maxNivel: 5,
    niveis: [
      "NV 1 - Paredes 1x1. Vida = Metade Nível x Treino. Custo 1 PE.",
      "NV 2 - Soma Atributo Mental na Vida.",
      "NV 3 - Paredes 3x3, formatos variáveis. Custo 2 PE.",
      "NV 4 - Vida = Nível x Treino + Mental. Maleáveis.",
      "NV 5 - Vida = Nível x Treino + 2x Mental. Imune ao 1º ataque. Custo 4 PE."
    ]
  },
  {
    nome: "Concentração",
    maxNivel: 5,
    niveis: [
      "NV 1 - Aumenta dado de dano em 1 nível. Custo 2 PE.",
      "NV 2 - Soma modificador do maior atributo.",
      "NV 3 - +1 dado adicional no dano. Custo 3 PE.",
      "NV 4 - Aumenta dado em 2 níveis. Custo 4 PE.",
      "NV 5 - Maximiza dados (qtd igual Treinamento). Custo 5 PE."
    ]
  },
  {
    nome: "Transformação",
    maxNivel: 5,
    niveis: [
      "NV 1 - Líquida (+1 CA/Ref), Sólida (+1 RD/Fort), Gasosa (+1 Dano/Integ).",
      "NV 2 - Bônus aumenta para +2.",
      "NV 3 - Bônus aumenta para +3. Custo 3 PE/turno.",
      "NV 4 - Bônus aumenta para +4.",
      "NV 5 - Estado Máximo. Custo 4 PE/turno."
    ]
  },
  {
    nome: "Aura Elemental",
    maxNivel: 5,
    niveis: [
      "NV 1 - Mudar tipo de dano por Treinamento turnos.",
      "NV 2 - Transformar objeto/efeito. +1d6 dano elemental. Duração Cena.",
      "NV 3 - Transformar aura do alvo (Teste Res). Soma Mental no dano.",
      "NV 4 - Elemento passivo. Segundo elemento disponível.",
      "NV 5 - Causa 2d10 + Mental de dano elemental."
    ]
  },
  {
    nome: "Molde",
    maxNivel: 5,
    niveis: [
      "NV 1 - Moldar 1x1 (pilar, lâmina). Dur: Treino turnos. Custo 2 PE.",
      "NV 2 - +1 Vida, formas mais complexas.",
      "NV 3 - Moldar 3x3 com partes móveis.",
      "NV 4 - Criar mecanismos (portas, alavancas).",
      "NV 5 - Ganha característica extra (afiada, etc). Imune 1º ataque."
    ]
  },
  {
    nome: "Intensificação",
    maxNivel: 5,
    niveis: [
      "NV 1 - +1 Dano/Defesa. Custo 1 PE.",
      "NV 2 - +2 Dano/Defesa, +1 Alcance. Custo 1 PE.",
      "NV 3 - +1 + Metade Treino. Ignora RD (Metade Treino). Custo 2 PE.",
      "NV 4 - +1 Nível Dano ou Modificador na Defesa. Custo 3 PE.",
      "NV 5 - Dano Bônus X+Y. Sacrificar energia para +2 Níveis Dano. Custo 5 PE."
    ]
  },
  {
    nome: "Solidificação",
    maxNivel: 5,
    niveis: [
      "NV 1 - +1 Redução. PV Temp = Treinamento.",
      "NV 2 - +2 Redução. +1 Dano energético.",
      "NV 3 - Redução 1+X. Res. Física X. PV Temp = Treino + Mental. Custo 2 PE.",
      "NV 4 - Redução Y+X. Redução extra contra críticos.",
      "NV 5 - Res. Física e Dano X+Y. Imunidade a 1 efeito negativo. Custo 4 PE."
    ]
  },
  {
    nome: "Encasular",
    maxNivel: 5,
    niveis: [
      "NV 1 - Bolha 1x1. Reduz mobilidade, concede RD. Dur: Treino turnos.",
      "NV 2 - Bolha ganha HP. Inimigos: Desvantagem física. Custo 2 PE.",
      "NV 3 - Dano periódico. À prova de som.",
      "NV 4 - Múltiplos alvos ou 3x3. Absorve 1 ataque. Custo 3 PE.",
      "NV 5 - Quase impenetrável. Bloqueia feitiços. Custo 4 PE."
    ]
  },
  {
    nome: "Redirecionar",
    maxNivel: 5,
    niveis: [
      "NV 1 - Curvar ataque de projeção. Custo 1 PE.",
      "NV 2 - Redirecionar projéteis curtos. Desvantagem no atacante. Custo 1 PE.",
      "NV 3 - Redirecionar efeitos de área/origem externa. Custo 2 PE.",
      "NV 4 - Criar nós de redirecionamento automático.",
      "NV 5 - Refletir habilidade para o remetente. Custo 5 PE."
    ]
  },
  {
    nome: "Esconder",
    maxNivel: 5,
    niveis: [
      "NV 1 - Indetectável por métodos simples.",
      "NV 2 - Projetar isca falsa. Treinamento em Furtividade.",
      "NV 3 - Ocultação completa. Duplicar assinatura (eco).",
      "NV 4 - Mascarar grupo (Raio = Metade Nível).",
      "NV 5 - Indetectável total. Assumir assinatura de outro."
    ]
  },
  {
    nome: "Perturbação",
    maxNivel: 5,
    niveis: [
      "NV 1 - Alvo -1 em testes de energia.",
      "NV 2 - Teste de Vontade para conjurar. Falha = Interrompido.",
      "NV 3 - Zona de perturbação 3x3. Reduz eficácia, dano periódico.",
      "NV 4 - Interromper recarga de poderes.",
      "NV 5 - Anular habilidade (cooldown) ou inverter efeito (buff->debuff)."
    ]
  }
];