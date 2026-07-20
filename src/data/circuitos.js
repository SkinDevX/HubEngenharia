// Fonte única de verdade do Módulo 01 — Análise de Circuitos Elétricos.
// O índice (index.astro) e as páginas de aula ([n].astro) leem daqui.
// Para adicionar/editar um capítulo, mexa só neste arquivo.

export const PHASES = [
  { n: 1, idx: "Fase 1", title: "Fundamentos",              tag: "O vocabulário da eletricidade.",              caps: [1, 2] },
  { n: 2, idx: "Fase 2", title: "Elementos Resistivos",      tag: "Onde a corrente encontra resistência.",       caps: [3, 4] },
  { n: 3, idx: "Fase 3", title: "Métodos & Teoremas",        tag: "As ferramentas para resolver qualquer circuito.", caps: [5, 6] },
  { n: 4, idx: "Fase 4", title: "Armazenadores de Energia",  tag: "Componentes que guardam carga e campo.",      caps: [7, 8] },
  { n: 5, idx: "Fase 5", title: "Regime Transitório",        tag: "O que acontece no instante em que se liga.",  caps: [9, 10] },
  { n: 6, idx: "Fase 6", title: "Regime CA & Frequência",    tag: "Circuitos que respiram no tempo.",            caps: [11, 12, 13] },
  { n: 7, idx: "Fase 7", title: "Circuitos Ativos",          tag: "Onde o sinal ganha força.",                   caps: [14, 15, 16] },
];

// helper: link para o capítulo correspondente na sebenta original (UFRGS)
const src = (n) => {
  const p = String(n).padStart(2, "0");
  return `https://www.ufrgs.br/eng04030/Aulas/teoria/cap_${p}/smace_${p}.htm`;
};

export const CHAPTERS = {
  1: {
    n: 1, phase: 1, slug: "grandezas-eletricas", title: "Grandezas Elétricas",
    learn: "Carga, tensão, corrente, potência e os instrumentos que medem tudo isso.",
    app: "É por que sua conta de luz vem em kWh e o carregador esquenta.",
    f: "P = V · I", req: null, ready: true, src: src(1),
    lesson: {
      lead: "Antes de resolver qualquer circuito, você precisa do vocabulário. Quatro grandezas explicam tudo o que vem depois — e todas nascem de uma coisa só: a carga elétrica.",
      sections: [
        {
          h: "1 · A carga é o começo de tudo",
          body: "Toda a eletricidade parte de uma propriedade da matéria chamada <b>carga elétrica</b> (símbolo <i>q</i>, unidade <b>coulomb, C</b>). Cargas de mesmo sinal se repelem; de sinais opostos se atraem — é a <b>Lei de Coulomb</b>. Essa força de atração e repulsão é o motor invisível por trás de tudo o que veremos. Diferente da massa, que só atrai, a carga faz as duas coisas."
        },
        {
          h: "2 · Tensão: a diferença que empurra",
          body: "Separar cargas custa energia — e essa energia fica <i>guardada</i>, pronta para realizar trabalho. A <b>tensão elétrica</b> (<i>V</i>, unidade <b>volt, V</b>) é justamente a energia disponível por unidade de carga entre dois pontos. Pense num reservatório de água elevado: quanto maior o desnível, mais forte a água desce. A tensão é esse desnível. Uma pilha de 1,5 V e a tomada de 220 V são dois 'desníveis' diferentes."
        },
        {
          h: "3 · Corrente: carga em movimento",
          body: "Se a tensão é o empurrão, a <b>corrente elétrica</b> (<i>I</i>, unidade <b>ampère, A</b>) é o resultado: a quantidade de carga que atravessa uma seção do fio a cada segundo — matematicamente, <span class='mono'>i = dq/dt</span>. Voltando à água: a corrente é a <i>vazão</i>. Tensão e corrente são as duas variáveis que operam qualquer circuito — todo o resto do curso é entender a relação entre elas."
        },
        {
          h: "4 · Potência: a taxa de energia",
          body: "Junte os dois e você tem a grandeza que aparece na sua conta: a <b>potência</b> (<i>P</i>, unidade <b>watt, W</b>), que é <span class='mono'>P = V · I</span> — a energia entregue por segundo. Multiplique pela quantidade de horas ligado e chega à <b>energia</b> (<span class='mono'>E = P · t</span>), medida em <b>kWh</b>. É por isso que o chuveiro (≈5500 W) pesa na conta e o carregador (≈10 W) não: a diferença está na potência."
        },
        {
          h: "5 · Como se mede tudo isso",
          body: "Cada grandeza tem seu instrumento: o <b>voltímetro</b> (em paralelo, mede tensão), o <b>amperímetro</b> (em série, mede corrente), o <b>wattímetro</b> (potência) e o <b>multímetro</b>, que reúne vários numa peça só. O <b>osciloscópio</b> vai além: desenha o sinal ao longo do tempo — é o instrumento que dá o rosto do nosso Hub."
        }
      ],
      illustration: "power-bulb",
      quiz: [
        {
          q: "Qual é a unidade da potência elétrica?",
          options: ["Volt (V)", "Ampère (A)", "Watt (W)", "Coulomb (C)"],
          answer: 2,
          explain: "Potência é energia por segundo, medida em watts (W). Volt é tensão, ampère é corrente e coulomb é carga."
        },
        {
          q: "Um chuveiro liga em 220 V e puxa 25 A. Qual a potência?",
          options: ["245 W", "5 500 W", "8,8 W", "550 W"],
          answer: 1,
          explain: "P = V · I = 220 × 25 = 5 500 W. Por isso o chuveiro é o vilão da conta de luz."
        },
        {
          q: "O que é, fisicamente, a corrente elétrica?",
          options: [
            "A energia guardada entre dois pontos",
            "A quantidade de carga que atravessa uma seção por segundo",
            "A força entre duas cargas",
            "A resistência que o fio oferece"
          ],
          answer: 1,
          explain: "Corrente é o fluxo de carga no tempo: i = dq/dt. A energia por carga é a tensão; a força entre cargas é a Lei de Coulomb."
        },
        {
          q: "Sua conta de luz cobra pela energia consumida. Em que unidade?",
          options: ["Watt (W)", "Volt-ampère (VA)", "Quilowatt-hora (kWh)", "Joule por volt"],
          answer: 2,
          explain: "Energia = potência × tempo. A concessionária mede em kWh: 1 kW ligado por 1 hora = 1 kWh."
        }
      ]
    }
  },

  2:  { n: 2,  phase: 1, slug: "componentes-fundamentais", title: "Componentes Fundamentais",
        learn: "O que é um circuito e a diferença entre componentes lineares e não-lineares.",
        app: "Por que um resistor é 'previsível' e um LED não.", f: "v = f(i)", req: "Cap 1", ready: false, src: src(2) },
  3:  { n: 3,  phase: 2, slug: "resistencia-eletrica", title: "Resistência Elétrica",
        learn: "Lei de Ohm, Lei de Joule, código de cores, sensores e efeitos da temperatura.",
        app: "O chuveiro elétrico, o sensor de temperatura do motor, o aquecedor.", f: "V = R·I  ·  P = R·I²", req: "Cap 2", ready: false, src: src(3) },
  4:  { n: 4,  phase: 2, slug: "leis-de-kirchhoff", title: "Leis de Kirchhoff",
        learn: "As duas leis que governam qualquer nó e qualquer malha; divisores e fontes.",
        app: "Como o volume do fone divide a tensão num potenciômetro.", f: "ΣI = 0  ·  ΣV = 0", req: "Cap 3", ready: false, src: src(4) },
  5:  { n: 5,  phase: 3, slug: "metodos-sistematicos", title: "Métodos Sistemáticos",
        learn: "Análise nodal e de malhas: um procedimento que resolve o circuito mais complexo.",
        app: "É exatamente o que o SPICE faz para simular um chip inteiro.", f: "G · V = I", req: "Cap 4", ready: false, src: src(5) },
  6:  { n: 6,  phase: 3, slug: "teoremas-dos-circuitos", title: "Teoremas dos Circuitos",
        learn: "Superposição, Thévenin, Norton, máxima transferência de potência, Millman e Miller.",
        app: "Modelar uma bateria e casar impedância em áudio e antenas.", f: "Pₘₐₓ = Vₜₕ² / 4Rₜₕ", req: "Cap 5", ready: false, src: src(6) },
  7:  { n: 7,  phase: 4, slug: "condensador-capacidade", title: "Condensador & Capacidade",
        learn: "Como um capacitor armazena carga, se associa e forma divisores.",
        app: "O flash da câmera, a tela touch capacitiva, a memória.", f: "Q = C·V  ·  i = C·dv/dt", req: "Cap 4", ready: false, src: src(7) },
  8:  { n: 8,  phase: 4, slug: "bobina-indutancia", title: "Bobina & Indutância",
        learn: "Campo magnético, indutância, associação de bobinas e sensores indutivos.",
        app: "Carregador sem fio, motores e o sensor de rotação da roda.", f: "v = L·di/dt", req: "Cap 7", ready: false, src: src(8) },
  9:  { n: 9,  phase: 5, slug: "rc-rl-primeira-ordem", title: "Circuitos RC e RL — 1ª ordem",
        learn: "Resposta natural e forçada; a constante de tempo que define a velocidade.",
        app: "Temporizadores, debounce de botão e filtros simples.", f: "τ = R·C", req: "Cap 8", ready: false, src: src(9) },
  10: { n: 10, phase: 5, slug: "rlc-segunda-ordem", title: "Circuitos RLC — 2ª ordem",
        learn: "Topologias RLC, oscilação, amortecimento e ressonância.",
        app: "A sintonia do rádio e a campainha que 'toca' e decai.", f: "ω₀ = 1/√(LC)", req: "Cap 9", ready: false, src: src(10) },
  11: { n: 11, phase: 6, slug: "impedancia-eletrica", title: "Impedância Elétrica",
        learn: "Fasores, notação complexa e as leis de Kirchhoff em regime senoidal; potência.",
        app: "A rede 127/220 V em 60 Hz e o fator de potência da sua casa.", f: "Z = R + jX  ·  V = Z·I", req: "Cap 10", ready: false, src: src(11) },
  12: { n: 12, phase: 6, slug: "resposta-em-frequencia", title: "Resposta em Frequência",
        learn: "Diagramas de Bode, ressonância, Laplace e os quatro tipos de filtro.",
        app: "O equalizador de áudio e a sintonia de Wi-Fi e rádio.", f: "f꜀ = 1 / 2πRC", req: "Cap 11", ready: false, src: src(12) },
  13: { n: 13, phase: 6, slug: "transformadores", title: "Bobinas Acopladas & Transformadores",
        learn: "Acoplamento magnético, transformador ideal, tipos e sensores.",
        app: "Como a rede leva a alta tensão até os 220 V da tomada.", f: "V₁/V₂ = N₁/N₂", req: "Cap 11", ready: false, src: src(13) },
  14: { n: 14, phase: 7, slug: "diportos", title: "Diportos Elétricos",
        learn: "Modelar um bloco de 2 portas como caixa-preta e associá-los.",
        app: "Tratar um amplificador inteiro como um único bloco de projeto.", f: "[Z] · [Y] · [ABCD]", req: "Cap 12", ready: false, src: src(14) },
  15: { n: 15, phase: 7, slug: "amplificador-operacional", title: "Amplificador Operacional",
        learn: "AmpOp ideal, montagens inversora/não-inversora e circuitos reais.",
        app: "O coração de quase toda eletrônica analógica e de instrumentação.", f: "A𝓋 = − R𝒻 / R𝒾", req: "Cap 14", ready: false, src: src(15) },
  16: { n: 16, phase: 7, slug: "transferidor", title: "Transferidor de Tensão e Corrente",
        learn: "O transferidor ideal, montagens básicas e parâmetros reais.",
        app: "Espelhos e fontes de corrente dentro dos circuitos integrados.", f: "i₀ = A · i𝒾", req: "Cap 15", ready: false, src: src(16) },
};

export const STORE_KEY = "enghub_circuitos_v1";
export const TOTAL = 16;
