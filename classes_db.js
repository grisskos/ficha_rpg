export const HABILIDADES_CLASSE = {
  "Lutador": [
    { 
      nivel: 1, 
      nome: "Empolgação", 
      desc: "Uma boa luta é empolgante e te motiva a se arriscar mais e mais, permitindo movimentos mais fortes e únicos. Para isso, você precisa continuar acertando golpes: você começa um combate com Nível de Empolgação 1 e, caso acerte pelo menos um ataque ou manobra (agarrar, empurrar etc.) durante seu turno, no começo do seu próximo turno você sobe um nível de empolgação, até um máximo de 5 níveis.\n\nNÍVEL DE EMPOLGAÇÃO | DADO DE EMPOLGAÇÃO\nNível 2 | 1d4\nNível 3 | 1d6\nNível 4 | 2d4\nNível 5 | 2d6\n\nA empolgação te permite realizar certas manobras especiais, as quais normalmente são fortalecidas por um bônus, que é o Dado de Empolgação, cujo valor varia com o nível, seguindo a tabela acima. Cada manobra pode ser realizada apenas uma vez por rodada. Caso passe uma rodada sem acertar um ataque, você desce um nível de empolgação." 
    },
    {
      nivel: 1,
      nome: "Manobras de Combate (Escolha 2)",
      tipo: "selecao_multipla",
      qtd: 2,
      opcoes: [
        { nome: "Ajuste", desc: "Às vezes um bom golpe só precisa de um ajuste. Uma vez por rodada, ao realizar um ataque, você pode adicionar seu dado de empolgação na rolagem de acerto e no dano. Você pode escolher adicionar o bônus antes ou depois de saber o resultado da rolagem de acerto." },
        { nome: "Comando", desc: "Sua empolgação pode acabar contagiando seus aliados. Ao realizar um ataque, você comanda um aliado dentro de 1,5 metros a realizar um ataque corpo-a-corpo o acompanhando no mesmo alvo, como uma reação dele. Você ou aliado deve pagar 1 ponto de energia amaldiçoada para realizar o ataque. Caso use essa habilidade, você não pode utilizar ataque extra." },
        { nome: "Desarme", desc: "Uma boa luta não deve ser contida pelo porte de uma arma. Ao acertar uma criatura com um ataque você aproveita para tentar a desarmar. Você adiciona seu dado de empolgação ao dano desse ataque e o alvo deve fazer uma jogada de ataque corpo a corpo contra o resultado do seu ataque. Em uma falha ele larga um item à sua escolha que esteja manejando." },
        { nome: "Esquiva", desc: "Com o sangue fervendo, é mais fácil se esquivar de ataques. Ao ser acertado por um ataque corpo-a-corpo você pode usar sua reação para diminuir o dano em um valor igual a uma rolagem do seu dado de empolgação + modificador de destreza." },
        { nome: "Trabalho de Pés", desc: "Você usa da sua empolgação para trabalhar o seu movimento. Como uma ação bônus, você pode escolher aumentar sua Defesa em um valor igual ao seu dado de empolgação, até o começo do seu próximo turno." }
      ]
    },
    { nivel: 2, nome: "Reflexo Evasivo", desc: "Em busca de uma boa luta, e conseguir durar nela, você começa a desenvolver um reflexo para evitar danos. Você recebe redução de dano a todo tipo, exceto alma, igual a metade do seu nível de Lutador." },
    { nivel: 4, nome: "Implemento Marcial", desc: "Você recebe +2 na CD de suas Habilidades de Especialização, Feitiços e Aptidões Amaldiçoadas. Esse bônus aumenta em 1 nos níveis 8° e 16° de Lutador." },
    { nivel: 5, nome: "Gosto pela Luta", desc: "Você tem um gosto pelas lutas, o que começa a cultivar uma força, precisão e resistência superiores. Você passa a adicionar +2 em jogadas de ataque desarmadas ou com armas marciais e +1 em rolagens de Fortitude e de dano. Nos níveis 8, 12, 16 e 20 o bônus em jogadas de ataque aumenta em +1, enquanto nos níveis 9, 13 e 17 o bônus em Fortitude e dano aumenta em +1." },
    {
      nivel: 6,
      nome: "Nova Manobra (Nível 6)",
      tipo: "selecao_unica",
      opcoes: ["Ajuste", "Comando", "Desarme", "Esquiva", "Trabalho de Pés"]
    },
    { nivel: 9, nome: "Teste de Resistência Mestre", desc: "Você se torna treinado em um segundo teste de resistência e mestre no concedido pela sua especialização." },
    { nivel: 11, nome: "Empolgação Máxima", desc: "O seu potencial e intensidade assumem um patamar superior, aprimorando suas capacidades. Os seus dados de empolgação se tornam 2d4, 2d6, 2d8 e 3d6, respectivamente." },
    {
      nivel: 12,
      nome: "Nova Manobra (Nível 12)",
      tipo: "selecao_unica",
      opcoes: ["Ajuste", "Comando", "Desarme", "Esquiva", "Trabalho de Pés"]
    },
    {
      nivel: 18,
      nome: "Nova Manobra (Nível 18)",
      tipo: "selecao_unica",
      opcoes: ["Ajuste", "Comando", "Desarme", "Esquiva", "Trabalho de Pés"]
    },
    { nivel: 20, nome: "Lutador Superior", desc: "Tendo alcançado o ápice do seu corpo e das técnicas de combate do lutador, você está em um nível superior. Seus ataques desarmados causam 1 dado de dano adicional e uma vez por rodada, você pode realizar um ataque desarmado como uma ação livre gastando 2PE. Além disso, você inicia todo combate com um Nível de Empolgação a mais." }
  ],

  "Especialista em Combate": [
    {
      nivel: 1,
      nome: "Repertório do Especialista (Estilo de Combate)",
      desc: "Como um Especialista em Combate, você pode escolher um estilo principal para seguir em sua especialização. No primeiro nível, você recebe um dos estilos de combate abaixo:",
      tipo: "selecao_unica",
      opcoes: [
        "Estilo Defensivo: Você foca em aprimorar a sua defesa. Sua Defesa aumenta em 2 e, nos níveis 4, 8, 12 e 16 aumenta em +1.",
        "Estilo do Arremessador: Você se versa em armas de arremesso. Você pode sacar uma arma de arremesso como parte do ataque, além de receber +2 em rolagens de dano com elas, o qual aumenta em +1 nos níveis 4, 8, 12 e 16.",
        "Estilo do Duelista: Você foca em duelar com uma única arma em mãos. Ao usar uma arma em uma mão e ter a outra livre, você recebe +2 em rolagens de acerto e dano, o qual aumenta em +1 nos níveis 4, 8, 12 e 16.",
        "Estilo do Interceptador: Você se dedica a utilizar de suas armas para interceptar ataques em seus aliados. Quando um aliado dentro do seu alcance receber um ataque, você pode usar sua reação para reduzir o dano causado em 1d10 + seu modificador de força, destreza ou sabedoria, aumentando em um dado nos níveis 4, 8, 12 e 16.",
        "Estilo do Protetor: Você se dedica a proteger seus aliados, buscando evitar um acerto. Quando uma criatura ataca um alvo além de você, que esteja dentro de 1,5 metros, você pode usar sua reação para impor desvantagem. Além disso, você pode também conceder vantagem no Teste de Resistência de um aliado dentro de 1,5 metros.",
        "Estilo Distante: Você sabe como usar armas que focam em atingir de maneira distante. Você recebe +2 em rolagens de acerto e dano com armas a distância, o qual aumenta em +1 nos níveis 4, 8, 12 e 16.",
        "Estilo Duplo: Você sabe a maneira perfeita de manejar duas armas. Enquanto estiver lutando com duas armas, você pode adicionar o seu bônus de atributo no dano do ataque com a segunda arma, além de receber um bônus de +1 em rolagens de dano, o qual aumenta em +1 nos níveis 4, 8, 12 e 16.",
        "Estilo Massivo: Você domina armas pesadas e massivas. Quando rolar um 1 ou 2 em um dado na rolagem de dano com uma arma que esteja usando em duas mãos ou que possua a propriedade pesada, você pode rolar novamente esse dado, ficando com o novo resultado. Além disso, você recebe +1 em rolagens de dano com a arma, aumentando em +1 nos níveis 4, 8, 12 e 16."
      ]
    },
    { 
      nivel: 1, 
      nome: "Artes do Combate", 
      desc: "Levando o combate como uma arte a se estudar e aperfeiçoar, você sabe como se preparar e usar desse preparo para o possibilitar realizar ações especiais dentro de um combate. Você recebe uma quantidade de Pontos de Preparo igual ao seu nível de Especialista em Combate + Bônus de treinamento, os quais são usados para realizar artes de combate. Você sabe as seguintes artes de combate:\n\n• Arremesso Ágil. Ao realizar um ataque corpo-a-corpo, você pode gastar 1 ponto de preparo para, como uma ação bônus, realizar também um ataque com uma arma de arremesso.\n• Distração Letal. Ao realizar um ataque, você pode gastar 1 ponto de preparo para fazer com que ele foque em distrair o alvo. Caso o ataque acerte, a criatura atingida tem a sua Defesa reduzida em um valor igual ao seu bônus de treinamento por uma rodada.\n• Execução Silenciosa. Ao realizar um ataque em uma criatura desprevenida, você pode gastar 1 ponto de preparo para aumentar a letalidade do ataque, adicionando 1d6 de dano. A cada 5 níveis, o dano aumenta em 1d6.\n• Golpe Descendente. Ao realizar um ataque corpo-a-corpo, você pode gastar 1 ponto de preparo para fazer com que ele venha por cima. Ao acertar um golpe descendente, sua Defesa aumenta em um valor igual ao seu bônus de treinamento até o começo do seu próximo turno.\n• Investida Imediata. Ao realizar a ação de ataque, você pode gastar 2 pontos de preparo para tornar esse ataque em uma investida imediata, aproximando-se até 4,5 metros de um alvo e realizando o ataque logo após. Esse movimento não causa ataques de oportunidade.\n\nSempre que eliminar um inimigo, você recupera um Ponto de Preparo; você pode usar sua ação comum para analisar o campo de batalha, recuperando dois Pontos de Preparo. Em um descanso curto, você recupera metade do seu máximo, enquanto em um descanso longo os recupera por completo." 
    },
    { 
      nivel: 4, 
      nome: "Golpe Especial", 
      desc: "Quando realizar um ataque, ou arte do combate que envolva um ataque, você pode o montar como um ataque especial, escolhendo entre as opções abaixo:\n\n• Amplo. O ataque atinge uma criatura a mais. +2PE\n• Atroz. Em um acerto, o ataque causa 1 dado de dano adicional. +1PE\n• Impactante. Empurra o alvo em 1,5 metros para cada 15 pontos de dano causados. Fortitude reduz à metade. +1PE\n• Letal. Diminui em 1 a margem de crítico do ataque. +2PE\n• Longo. Aumenta o alcance da arma em 1,5 metros para corpo-a-corpo ou 9 metros para ataques a distância. +1PE\n• Penetrante. Ignora redução a dano em um valor igual a metade do seu nível de personagem. +2PE\n• Preciso. Recebe vantagem no ataque. Após o primeiro uso na rodada, o custo aumenta para 2PE. +1PE/+2PE\n• Sanguinário. Uma criatura atingida sofre sangramento leve (CD de Especialização). Pode ser pego uma segunda vez para causar sangramento médio ao invés de leve. +2PE\n• Lento. O ataque deve ser usado como ação completa. -2PE\n• Sacrifício. Recebe 15 de dano ao efetuar o ataque. -1PE\n• Desfocado. O ataque recebe uma penalidade de 4 no acerto (cumulativo até três vezes). -1PE\n\nCertas propriedades aumentam ou diminuem o custo e, ao terminar de montar o ataque especial, você paga o seu custo total; um ataque especial deve custar no mínimo 1 ponto de energia amaldiçoada (PE)." 
    },
    { nivel: 4, nome: "Implemento Marcial", desc: "Você recebe +2 na CD de suas Habilidades de Especialização, Feitiços e Aptidões Amaldiçoadas. Esse bônus aumenta em 1 nos níveis 8° e 16° de Especialista em Combate." },
    {
      nivel: 6,
      nome: "Novo Estilo de Combate (Nível 6)",
      tipo: "selecao_unica",
      opcoes: ["Defensivo", "Arremessador", "Duelista", "Interceptador", "Protetor", "Distante", "Duplo", "Massivo"]
    },
    { nivel: 6, nome: "Renovação pelo Sangue", desc: "Com tamanha precisão e letalidade, você passa a ser capaz de renovar seu próprio estoque de energia a partir do sangue. Ao acertar um ataque crítico em um inimigo ou reduzir seus pontos de vida a 0, você recupera um ponto de energia amaldiçoada." },
    { nivel: 9, nome: "Teste de Resistência Mestre", desc: "Você se torna treinado em um segundo teste de resistência e mestre no concedido pela sua especialização." },
    {
      nivel: 12,
      nome: "Novo Estilo de Combate (Nível 12)",
      tipo: "selecao_unica",
      opcoes: ["Defensivo", "Arremessador", "Duelista", "Interceptador", "Protetor", "Distante", "Duplo", "Massivo"]
    },
    { nivel: 20, nome: "Autossuficiente", desc: "Tornando-se um mestre das técnicas armadas, você consegue ser autossuficiente na energia para usar seu golpe especial. Sempre que realizar um Golpe Especial, recebe 3 PE temporários para serem usados no ataque. Uma vez por cena, você pode escolher transformar esse valor em 6. Além disso, todos seus ataques causam um dado de dano adicional, do mesmo tipo da arma manuseada." }
  ],

  "Especialista em Técnica": [
    {
      nivel: 1,
      nome: "Mudanças de Fundamento (Escolha 2)",
      desc: "Como um especialista em técnicas, você tem uma maior dominância sobre os fundamentos da energia amaldiçoada e das suas habilidades. Você aprende duas das Mudanças de Fundamento abaixo no primeiro nível:",
      tipo: "selecao_multipla",
      qtd: 2,
      opcoes: [
        { nome: "Feitiço Cruel", desc: "Quando usar um Feitiço que força um teste de resistência você pode gastar 1 ponto de energia amaldiçoada para aumentar a CD do teste em 2 ou 2 pontos para aumentar em 4." },
        { nome: "Feitiço Cuidadoso", desc: "Quando usar um Feitiço em área você pode prevenir certas criaturas de serem afetadas. Você pode gastar uma quantidade de pontos igual ao seu modificador de Inteligência ou Sabedoria para fazer com que o dobro da quantidade de criaturas não seja afetado." },
        { nome: "Feitiço Distante", desc: "Quando usar um Feitiço a distância, você pode gastar 2 pontos de energia amaldiçoada para dobrar seu alcance. Caso seja um Feitiço corpo-a-corpo, você pode gastar 2 pontos de energia para a dar um alcance de 9 metros." },
        { nome: "Feitiço Duplicado", desc: "Uma vez por rodada, quando usar um Feitiço de dano cujo alvo seja apenas uma criatura, você pode gastar pontos de energia para dar um segundo alvo a habilidade. O custo é igual ao dobro do nível do Feitiço (considere 1 para Feitiços nível 0)." },
        { nome: "Feitiço Expansivo", desc: "Quando usar um Feitiço em área, você pode gastar 3 pontos de energia amaldiçoada para aumentar a área em um valor igual a metade da área padrão (1,5x do total)." },
        { nome: "Feitiço Potente", desc: "Quando usar um Feitiço de dano, você pode gastar 3 pontos de energia amaldiçoada e rolar novamente uma quantidade de dados de dano igual ao seu modificador de Inteligência ou Sabedoria, utilizando os melhores resultados." },
        { nome: "Feitiço Preciso", desc: "Quando usar um Feitiço que utilize um teste de ataque, você pode gastar 1 ponto de energia amaldiçoada para receber +2 de acerto ou 2 pontos de energia amaldiçoada para receber +4 de acerto." }
      ]
    },
    { nivel: 1, nome: "Conjuração Aprimorada", desc: "Todos podem utilizar Feitiços, mas você consegue os aprimorar e extrair um maior potencial. Sempre que utilizar um Feitiço que cause dano, você soma um bônus ao total de dano causado baseado no nível do Feitiço, de acordo com a tabela abaixo. Além disso, você passa a receber novos Feitiços em todo nível, ao invés de apenas nos níveis pares.\n\nNÍVEL DA HABILIDADE | BÔNUS DE DANO\nNível 1 | Modificador de Atributo\nNível 2 | Modificador de Atributo\nNível 3 | Dobro do Modificador de Atributo\nNível 4 | 2x Mod. de Atributo + Nível de Personagem\nNível 5 | 2x Mod. de Atributo + 2x Nível de Personagem\nTécnica Máxima | 3x Mod. de Atributo + 3x Nível de Personagem" },
    { nivel: 4, nome: "Adiantar a Evolução", desc: "Focado em sua técnica, você consegue adiantar a evolução das suas habilidades. Ao invés de seguir o padrão para conseguir Feitiços de nível superior, com o aumento de treinamento, você segue o seguinte padrão: no nível 4, você recebe acesso a Feitiços nível 2; no nível 7, você recebe acesso a Feitiços nível 3; no nível 11, você recebe acesso a Feitiços nível 4; no nível 15, você recebe acesso a Feitiços nível 5." },
    { nivel: 6, nome: "Feitiço Rápido (Desbloqueado na Lista)", desc: "Uma vez por rodada, quando for utilizar um Feitiço cuja conjuração seja uma Ação Completa ou Comum, você pode gastar PE para reduzir seu custo em ação em um (Completa para Comum ou Comum para Bônus). O custo é igual ao dobro do nível do Feitiço (considere 1 para Feitiços nível 0). Pré-Requisito: Nível 6." },
    { nivel: 9, nome: "Teste de Resistência Mestre", desc: "Você se torna treinado em um segundo teste de resistência e mestre no concedido pela sua especialização." },
    {
      nivel: 10,
      nome: "Foco Amaldiçoado",
      desc: "Durante seu desenvolvimento, você se foca em certos aspectos do funcionamento da energia amaldiçoada, podendo escolher entre um dos três focos:",
      tipo: "selecao_unica",
      opcoes: [
        "Destruição: Todo Feitiço que você conjurar causa +1 de dano para cada dado rolado nela. Além disso, sempre que causar dano com um Feitiço ou aptidão amaldiçoada, você soma o seu bônus de treinamento no total de dano.",
        "Economia: O custo de todos os seus Feitiços é reduzido em 2, podendo reduzir o custo dos Feitiços nível 1 para 0. Além disso, você passa a somar o seu bônus de treinamento no seu máximo de energia amaldiçoada.",
        "Refino: Você recebe uma Aptidão Amaldiçoada ou Feitiço adicional a sua escolha. Além disso, você passa a somar metade do seu bônus de treinamento no cálculo de todas as suas CDs e em jogadas de ataque amaldiçoado."
      ]
    },
    {
      nivel: 12,
      nome: "Nova Mudança de Fundamento",
      tipo: "selecao_unica",
      opcoes: ["Feitiço Cruel", "Feitiço Cuidadoso", "Feitiço Distante", "Feitiço Duplicado", "Feitiço Expansivo", "Feitiço Potente", "Feitiço Preciso", "Feitiço Rápido"]
    },
    { nivel: 20, nome: "O Honrado", desc: "Entre os céus e a terra, você sozinho é o honrado, com um controle de energia amaldiçoada insuperável. Feitiços de nível 1, 2 e 3 tem o seu custo reduzido pela metade; a CD de todos seus Feitiços e Aptidões Amaldiçoadas aumenta em 5 e você recebe +5 em rolagens de ataque para Feitiços e Aptidões Amaldiçoadas." }
  ],

  "Controlador": [
    { nivel: 1, nome: "Treinamento em Controle", desc: "Você é treinado para controlar Invocações com maior eficiência. Ao obter esta habilidade, você:\n• Recebe duas Invocações iniciais, as quais podem ser tanto shikigamis quanto corpos amaldiçoados. Nos níveis 3, 6, 9, 10, 12, 15 e 18 você recebe uma Invocação adicional.\n• A quantidade de Invocações que você pode manter ativas em campo aumenta em 1.\n• Nos níveis 6, 12 e 18 a quantidade de comandos que você realiza com uma Ação Comum e Bônus aumenta em um (no nível 6, uma Ação Comum permitiria duas Invocações realizarem uma ação complexa ou uma Invocação realizar duas ações complexas)." },
    { nivel: 4, nome: "Controle Aprimorado", desc: "Você é naturalmente mais capaz em comandar invocações, aprimorando o desempenho delas. Suas invocações recebem um bônus em testes que realizarem igual a +2, aumentando em +1 para cada grau acima do quarto (+3 para terceiro, +4 para segundo etc.)" },
    {
      nivel: 6,
      nome: "Apogeu (Estilo de Controle)",
      desc: "Você começa a encontrar o caminho que deseja seguir como um controlador, especializando-o em um estilo específico de controle. Escolha entre:",
      tipo: "selecao_unica",
      opcoes: [
        "Controle Concentrado: Você opta por concentrar suas forças e foco em uma única invocação, a qual sozinha se torna uma arma absoluta. Ao invés de invocar/ativar duas invocações como uma ação bônus, você pode invocar apenas uma como ação livre.",
        "Controle Disperso: Você prefere controlar diversas invocações, mantendo a quantidade sempre em número superior. O número de invocações que você pode manter ativas em campo aumenta em 1, assim como a quantidade que você pode invocar/ativar com uma ação aumenta em 1. Além disso, você recebe acesso à ação Criar Horda (p.259). A partir do nível 12, o número de invocações que você pode manter ativas em campo e invocar/ativar com uma ação aumenta em 1, assim como você pode criar duas hordas como parte de uma mesma ação de Criar Horda.",
        "Controle Sintonizado: Você prefere ficar em sintonia com suas invocações, não deixando que apenas elas lutem sozinhas. Uma vez por rodada, quando uma invocação em campo realizar um ataque contra um alvo dentro do seu alcance, você pode pagar 2PE para, como uma Ação Livre, realizar um ataque contra o mesmo alvo. Além disso, para cada invocação que possua em campo, você recebe +1 em acerto e dano, com elas te auxiliando."
      ]
    },
    { nivel: 9, nome: "Teste de Resistência Mestre", desc: "Você se torna treinado em um segundo teste de resistência e mestre no concedido pela sua especialização." },
    { nivel: 10, nome: "Reserva para Invocação", desc: "Você cria uma reserva dedicada para invocar ou ativar as suas invocações. Uma vez por descanso curto, você pode optar por usar a ação Invocar para trazer duas invocações com o custo reduzido pela metade ou uma invocação sem custo. Caso utilize esta habilidade para Criar Horda, o custo total dela é reduzido pela metade." },
    { nivel: 20, nome: "Ápice do Controle", desc: "Você alcançou o ápice do controle, levando além do limite a arte de ter invocações e as controlar, sendo uma presença única no mundo. Suas invocações recebem duas ações/características adicionais, as quais não influenciam no custo delas; você passa a poder invocar ou ativar suas invocações como uma ação livre (caso ela já pudesse ser invocada como Ação Livre, ela tem seu custo reduzido em 2 PE). Além disso, conhecendo bem as táticas para utilizar invocações, você consegue prever parte dos movimentos delas: invocações de outras criaturas possuem desvantagem para realizar ações ofensivas contra você." }
  ],

  "Suporte": [
    { nivel: 1, nome: "Suporte em Combate", desc: "Um suporte dispõe de um leque de capacidades que o permite auxiliar dentro do combate:\n• Você pode usar Apoiar como uma ação bônus.\n• Você pode, como uma ação bônus, curar uma criatura em alcance de toque em um valor igual a 2d6 + seu modificador de Presença ou Sabedoria, uma quantidade de vezes igual ao seu modificador de Presença ou Sabedoria, por descanso curto ou longo. No nível 4, essa cura se torna 2d12, no nível 8, se torna 3d12, no nível 12 se torna 6d8, no nível 16 se torna 6d10." },
    { nivel: 3, nome: "Presença Inspiradora", desc: "Sua presença inspira aqueles ao seu redor a tentarem seu máximo. Você pode pagar 2 pontos de energia amaldiçoada para fazer com que, durante uma cena, todo aliado dentro de 9 metros de você fique inspirado. Um aliado inspirado recebe um bônus de +1 em toda rolagem de perícia. Ao utilizar esta habilidade, você pode gastar uma quantidade de PE adicional igual a metade do seu modificador de Presença, aumentando o bônus em +1 para cada PE gasto dessa maneira." },
    { nivel: 5, nome: "Versatilidade", desc: "Sempre que realizar uma rolagem com uma perícia na qual você não seja treinado, você pode pagar 1 ponto de energia amaldiçoada para considerar como se fosse treinado. Você pode utilizar esta habilidade uma quantidade de vezes igual ao seu modificador de Sabedoria, por descanso curto ou longo." },
    { nivel: 6, nome: "Aptidão: Energia Reversa", desc: "Você recebe a aptidão amaldiçoada 'Energia Reversa'." },
    { nivel: 8, nome: "Aptidão: Liberação de Energia Reversa", desc: "Você recebe a aptidão amaldiçoada 'Liberação de Energia Reversa'." },
    { nivel: 9, nome: "Teste de Resistência Mestre", desc: "Você se torna treinado em um segundo teste de resistência e mestre no concedido pela sua especialização." },
    { nivel: 10, nome: "Medicina Infalível", desc: "Você consegue dominar seus conhecimentos médicos e auxiliares ao ponto de elevá-los para um patamar superior. Uma quantidade de vezes igual a metade do seu nível de Suporte + bônus de treinamento, você pode, quando realizar uma rolagem para curar uma criatura, maximizar o valor de um dos dados dessa cura; você pode gastar vários usos para maximizar mais de um dado da mesma cura. Você recupera os usos após um descanso curto ou longo. Além disso, você soma o seu bônus de treinamento no total de toda cura que realizar." },
    { nivel: 20, nome: "Suporte Absoluto", desc: "Você é o suporte absoluto que se pode ter em campo, mudando o rumo da batalha para todos seus aliados. Uma vez por rodada, você pode utilizar Apoiar como uma Ação Livre. Além disso, sua quantidade de usos da habilidade Suporte em Combate são dobrados e você soma seu modificador de atributo escolhido para CD de especialização em toda cura que realizar." }
  ],

  "Restringido": [
    { nivel: 1, nome: "Restrito pelos Céus", desc: "Para compensar sua falta de energia amaldiçoada, um restringido recebe vários benefícios atrelados ao seu físico maior e aptidão ao combate:\n• Você pode escolher adicionar também seu modificador de Força ou de Constituição na sua Defesa, limitado pelo seu nível.\n• Você começa com uma ferramenta amaldiçoada de quarto grau e um meio de ver maldições (óculos ou lente). A partir do segundo nível, você recebe acesso ao Arsenal Amaldiçoado, detalhado no final da especialização.\n• No 4° nível, e depois a cada 4 níveis, você recebe uma Dádiva do Céu, listadas no final desta especialização.\n• Por não ter energia amaldiçoada, você possui Pontos de Estamina, os quais são baseados na sua própria força vital, e são usados por certas habilidades. Você inicia com 4 pontos de estamina, e recebe mais 4 a cada nível. Você os recupera por completo em um descanso longo, ou metade em um descanso curto.\nAlém disso, você possui um Estilo Marcial, explicado após as habilidades da especialização." },
    { nivel: 2, nome: "Ataque Furtivo", desc: "Uma vez por turno, ao realizar um ataque surpresa ou contra um inimigo desprevenido, você pode adicionar 1d8 ao dano dele. Caso você esteja flanqueando um inimigo, não é necessário ser um ataque surpresa ou um alvo desprevenido para aplicar o dano adicional. No nível 3, o dano se torna 2d8, no nível 6 se torna 3d8, no nível 9 se torna 4d8, no nível 12 se torna 5d8, no nível 15 se torna 6d8." },
    { nivel: 2, nome: "Versatilidade", desc: "Você pretende se tornar um pouco mais versátil em tudo. Você recebe +1 em todas as perícias. No 10° nível esse bônus se torna +2." },
    { nivel: 3, nome: "Esquiva Sobre-humana", desc: "Você recebe +1 em sua Defesa e em rolagens de Reflexos. No nível 9 e no nível 16, esse bônus aumenta em +1. Além disso, a partir do 10° nível, você se torna mestre no TR de Reflexos e o valor necessário para obter um sucesso crítico nela reduz em um valor igual a metade do seu bônus de treinamento." },
    { nivel: 4, nome: "Implemento Celeste", desc: "Você recebe +2 na CD de suas habilidades de restringido e técnicas marciais. Esse bônus aumenta em 1 nos níveis 8° e 16° de Restringido." },
    { nivel: 9, nome: "Teste de Resistência Mestre", desc: "Você se torna mestre nos dois Testes de Resistência conferidos por sua Especialização." },
    { nivel: 10, nome: "Restrição Definitiva", desc: "Seu nível de energia amaldiçoada alcançou o zero absoluto, rejeitando-a por completo em troca de um físico absoluto. Você recebe os seguintes benefícios:\n• Você tem vantagem em testes de furtividade contra qualquer usuário de energia amaldiçoada e eles possuem desvantagem em testes para o perceber.\n• Você passa a ver o traçado da alma (veja página 311), assim como não necessita mais de uma ferramenta amaldiçoada para enxergar maldições.\n• Toda arma que você manejar conta como um nível de dano acima e seu valor de deslocamento aumenta em 3 metros.\n• Se for mestre em uma perícia ou teste de resistência que utilize Força, Destreza ou Constituição você soma seu bônus de treinamento inteiro ao invés de metade dele na perícia.\n• Você se torna imune a expansões de domínio, veja a página 247." },
    { nivel: 20, nome: "Libertação do Destino", desc: "Subvertendo a sua restrição celeste, você se libertou completamente do destino, alcançando um nível de poder invejável e único para um ser humano como você. Você recebe resistência a todo tipo de dano físico (cortante, perfurante e de impacto), além de mais um tipo de dano a sua escolha, exceto na alma. Você também recebe +5 em rolagens de ataque e soma metade do seu nível de personagem no total de dano." }
  ]
};
