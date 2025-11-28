export const HABILIDADES_CLASSE = {
  "Lutador": [
    { 
      nivel: 1, 
      nome: "Empolgação", 
      desc: "Você começa o combate com Nível 1. Acertar ataque/manobra sobe 1 nível (max 5). Se errar tudo na rodada, desce 1. Ganha Dado de Empolgação (1d4 no nv2, 1d6 no nv3...). Permite Manobras." 
    },
    {
      nivel: 1,
      nome: "Manobras de Combate (Escolha 2)",
      tipo: "escolha",
      qtd: 2,
      opcoes: [
        "Ajuste: +Dado no acerto/dano (1x/rodada)",
        "Comando: Aliado ataca como reação (Custo 1 PE)",
        "Desarme: +Dado no dano. Alvo faz ataque vs seu ataque ou larga item",
        "Esquiva: Reação para reduzir dano em Dado + Des",
        "Trabalho de Pés: Ação Bônus, +Dado na Defesa até próximo turno"
      ]
    },
    { nivel: 2, nome: "Reflexo Evasivo", desc: "Redução de dano (exceto alma) igual a metade do nível." },
    { nivel: 4, nome: "Implemento Marcial", desc: "+2 na CD de Habilidades. Aumenta em +1 no nv 8 e 16." },
    { nivel: 5, nome: "Gosto pela Luta", desc: "+2 Ataque (desarmado/marcial), +1 Fortitude/Dano. Aumenta com o nível." },
    {
      nivel: 6,
      nome: "Nova Manobra",
      tipo: "escolha",
      qtd: 1,
      opcoes: ["Ajuste", "Comando", "Desarme", "Esquiva", "Trabalho de Pés"]
    },
    { nivel: 9, nome: "TR Mestre", desc: "Treinado em 2º TR, Mestre no da especialização." },
    { nivel: 11, nome: "Empolgação Máxima", desc: "Dados viram 2d4, 2d6, 2d8, 3d6." },
    {
      nivel: 12,
      nome: "Nova Manobra",
      tipo: "escolha",
      qtd: 1,
      opcoes: ["Ajuste", "Comando", "Desarme", "Esquiva", "Trabalho de Pés"]
    },
    {
      nivel: 18,
      nome: "Nova Manobra",
      tipo: "escolha",
      qtd: 1,
      opcoes: ["Ajuste", "Comando", "Desarme", "Esquiva", "Trabalho de Pés"]
    },
    { nivel: 20, nome: "Lutador Superior", desc: "+1 dado dano desarmado. 1x/rodada ataque livre (2 PE). Inicia com +1 Empolgação." }
  ],

  "Especialista em Combate": [
    {
      nivel: 1,
      nome: "Estilo de Combate",
      tipo: "escolha",
      qtd: 1,
      opcoes: [
        "Defensivo: +2 Defesa (escala)",
        "Arremessador: Saque rápido, +2 Dano arremesso (escala)",
        "Duelista: Uma mão, +2 Acerto/Dano (escala)",
        "Interceptador: Reação reduz dano em aliado (1d10 + Mod)",
        "Protetor: Reação impõe desvantagem em ataque a aliado. Vantagem em TR aliado.",
        "Distante: +2 Acerto/Dano distância (escala)",
        "Duplo: Soma atributo na 2ª arma, +1 Dano (escala)",
        "Massivo: Rerola 1 e 2 no dano (duas mãos/pesada), +1 Dano (escala)"
      ]
    },
    { nivel: 1, nome: "Artes do Combate", desc: "Pontos de Preparo = Nível + Treino. Recupera ao eliminar ou analisar (ação). Permite: Arremesso Ágil, Distração Letal, Execução Silenciosa, Golpe Descendente, Investida Imediata." },
    { nivel: 4, nome: "Golpe Especial", desc: "Gasta PE para adicionar efeitos ao ataque (Amplo, Atroz, Impactante, Letal, Longo, Penetrante, Preciso, Sanguinário, etc)." },
    { nivel: 4, nome: "Implemento Marcial", desc: "+2 na CD. Aumenta no nv 8 e 16." },
    {
      nivel: 6,
      nome: "Novo Estilo",
      tipo: "escolha",
      qtd: 1,
      opcoes: ["Defensivo", "Arremessador", "Duelista", "Interceptador", "Protetor", "Distante", "Duplo", "Massivo"]
    },
    { nivel: 6, nome: "Renovação pelo Sangue", desc: "Crítico ou matar recupera 1 PE." },
    { nivel: 9, nome: "TR Mestre", desc: "Treinado em 2º TR, Mestre no da especialização." },
    {
      nivel: 12,
      nome: "Novo Estilo",
      tipo: "escolha",
      qtd: 1,
      opcoes: ["Defensivo", "Arremessador", "Duelista", "Interceptador", "Protetor", "Distante", "Duplo", "Massivo"]
    },
    { nivel: 20, nome: "Autossuficiente", desc: "Recebe 3 PE temp para Golpe Especial. 1x/cena vira 6 PE. +1 dado dano em tudo." }
  ],

  "Especialista em Técnica": [
    {
      nivel: 1,
      nome: "Mudanças de Fundamento (Escolha 2)",
      tipo: "escolha",
      qtd: 2,
      opcoes: [
        "Cruel: +CD (Custo 1 ou 2)",
        "Cuidadoso: Protege aliados na área",
        "Distante: Dobra alcance (Custo 2)",
        "Duplicado: Segundo alvo (Custo 2x Nível)",
        "Expansivo: +50% Área (Custo 3)",
        "Potente: Rerola dados de dano (Custo 3)",
        "Preciso: +Acerto (Custo 1 ou 2)"
      ]
    },
    { nivel: 1, nome: "Conjuração Aprimorada", desc: "+Dano em feitiços (escala com nível). Recebe feitiço todo nível." },
    { nivel: 4, nome: "Adiantar a Evolução", desc: "Acesso a feitiços de nível superior mais cedo (Nv 2 no 4, Nv 3 no 7...)." },
    { nivel: 6, nome: "Feitiço Rápido", desc: "Reduz ação de conjuração (Custo 2x Nível)." },
    { nivel: 9, nome: "TR Mestre", desc: "Treinado em 2º TR, Mestre no da especialização." },
    {
      nivel: 10,
      nome: "Foco Amaldiçoado",
      tipo: "escolha",
      qtd: 1,
      opcoes: [
        "Destruição: +1 dano por dado, +Treino no total",
        "Economia: -2 Custo em tudo, +Treino no PE Max",
        "Refino: +1 Feitiço/Aptidão, +Metade Treino na CD/Acerto"
      ]
    },
    {
      nivel: 12,
      nome: "Nova Mudança",
      tipo: "escolha",
      qtd: 1,
      opcoes: ["Cruel", "Cuidadoso", "Distante", "Duplicado", "Expansivo", "Potente", "Preciso", "Rápido"]
    },
    { nivel: 20, nome: "O Honrado", desc: "Custo metade (Nv 1-3). +5 CD e Acerto." }
  ],

  "Controlador": [
    { nivel: 1, nome: "Treinamento em Controle", desc: "Inicia com 2 Invocações. +1 Invocação ativa. Ganha invocações nos níveis 3, 6, 9, 10, 12, 15, 18." },
    { nivel: 4, nome: "Controle Aprimorado", desc: "Invocações ganham +2 testes (aumenta com grau)." },
    {
      nivel: 6,
      nome: "Apogeu (Estilo)",
      tipo: "escolha",
      qtd: 1,
      opcoes: [
        "Concentrado: Invocar 1 como Livre. Foco em uma forte.",
        "Disperso: +1 ativa, +1 invocação/ação. Acesso a Criar Horda.",
        "Sintonizado: Pagar 2 PE para atacar junto (Livre). +1 acerto/dano por invocação."
      ]
    },
    { nivel: 9, nome: "TR Mestre", desc: "Treinado em 2º TR, Mestre no da especialização." },
    { nivel: 10, nome: "Reserva para Invocação", desc: "1x/curto: Invocar 2 com metade custo ou 1 grátis." },
    { nivel: 20, nome: "Ápice do Controle", desc: "Invocações ganham +2 ações/características. Invocar como Livre (ou -2 PE). Inimigos invocações têm desvantagem contra você." }
  ],

  "Suporte": [
    { nivel: 1, nome: "Suporte em Combate", desc: "Apoiar como Bônus. Cura 2d6+Mod (Bônus) qtd vezes igual Mod." },
    { nivel: 3, nome: "Presença Inspiradora", desc: "2 PE: Aliados 9m ganham +1 perícias (Cena). Pode gastar mais para aumentar." },
    { nivel: 5, nome: "Versatilidade", desc: "1 PE: Conta como treinado em perícia destreinada." },
    { nivel: 6, nome: "Aptidão: Energia Reversa", desc: "Recebe Energia Reversa." },
    { nivel: 8, nome: "Aptidão: Liberação Reversa", desc: "Recebe Liberação de Energia Reversa." },
    { nivel: 9, nome: "TR Mestre", desc: "Treinado em 2º TR, Mestre no da especialização." },
    { nivel: 10, nome: "Medicina Infalível", desc: "Maximizar dado de cura. Soma Treino na cura total." },
    { nivel: 20, nome: "Suporte Absoluto", desc: "Apoiar Livre (1x/rodada). Dobra usos de cura. Soma Mod na cura." }
  ],

  "Restringido": [
    { nivel: 1, nome: "Restrito pelos Céus", desc: "Soma For ou Con na Defesa. Ferramenta Grau 4. Vê maldições. Usa Estamina (4+4/nível)." },
    { nivel: 2, nome: "Ataque Furtivo", desc: "+1d8 dano em surpresa/flanco. Aumenta com nível." },
    { nivel: 2, nome: "Versatilidade", desc: "+1 em todas perícias (+2 no nv 10)." },
    { nivel: 3, nome: "Esquiva Sobre-humana", desc: "+1 Defesa e Reflexos. Aumenta no 9 e 16." },
    { nivel: 4, nome: "Implemento Celeste", desc: "+2 CD. Aumenta no 8 e 16. Recebe Dádiva do Céu a cada 4 níveis." },
    { nivel: 9, nome: "TR Mestre", desc: "Mestre nos dois TRs." },
    { nivel: 10, nome: "Restrição Definitiva", desc: "Vantagem Furtividade vs usuários PE. Vê alma. Arma conta 1 nível acima. +3m Desloc. Soma Treino inteiro em físicos. Imune a Domínio." },
    { nivel: 20, nome: "Libertação do Destino", desc: "Resistência a físico + 1 tipo. +5 Ataque. +Metade Nível no Dano." }
  ]
};
