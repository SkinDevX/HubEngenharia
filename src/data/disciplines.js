// As grandes áreas do Hub. A home (/) lista estas trilhas.
// Só "eletrica" está no ar; as demais são vitrines "em breve".
// Para ativar uma engenharia: crie a página da trilha e mude status para "live" + defina href.

export const DISCIPLINES = [
  {
    slug: "eletrica",
    name: "Engenharia Elétrica",
    tag: "Circuitos, energia e sinais — a base de tudo que é eletrônico.",
    meta: "1 módulo · 16 capítulos",
    href: "/circuitos",
    status: "live",
    accent: "#37D3DB",
    progressKey: "enghub_circuitos_v1",
    progressTotal: 16,
    icon: "wave",
  },
  {
    slug: "eletronica",
    name: "Eletrônica",
    tag: "Diodos, transistores, amplificadores e o mundo digital.",
    meta: "em breve",
    href: null,
    status: "soon",
    accent: "#F2A93B",
    icon: "chip",
  },
  {
    slug: "civil",
    name: "Engenharia Civil",
    tag: "Estruturas, materiais e o que mantém tudo de pé.",
    meta: "em breve",
    href: null,
    status: "soon",
    accent: "#8FB0E0",
    icon: "truss",
  },
  {
    slug: "seguranca",
    name: "Engenharia de Segurança",
    tag: "Risco, proteção e a cultura de trabalhar sem acidentes.",
    meta: "em breve",
    href: null,
    status: "soon",
    accent: "#E8B84B",
    icon: "shield",
  },
  {
    slug: "mecanica",
    name: "Engenharia Mecânica",
    tag: "Forças, máquinas, calor e movimento.",
    meta: "em breve",
    href: null,
    status: "soon",
    accent: "#C79BE8",
    icon: "gear",
  },
  {
    slug: "producao",
    name: "Engenharia de Produção",
    tag: "Processos, qualidade e a arte de fazer mais com menos.",
    meta: "em breve",
    href: null,
    status: "soon",
    accent: "#5FD39B",
    icon: "flow",
  },
];

// ícones geométricos simples (herdam a cor via currentColor)
export const ICONS = {
  wave:  '<path d="M2 16 C 6 16, 6 6, 10 6 S 14 26, 18 26 22 16, 22 16 26 6, 30 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  chip:  '<rect x="9" y="9" width="14" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M13 9V5M19 9V5M13 27v-4M19 27v-4M9 13H5M9 19H5M27 13h-4M27 19h-4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  truss: '<path d="M3 25 L16 6 L29 25 Z M3 25 L16 25 M16 6 L9.5 25 M16 6 L22.5 25" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>',
  shield:'<path d="M16 4 L27 8 V15 C27 22 22 27 16 29 C10 27 5 22 5 15 V8 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M11 16 l4 4 l7 -8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  gear:  '<circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.7 6.7l2.8 2.8M22.5 22.5l2.8 2.8M25.3 6.7l-2.8 2.8M9.5 22.5l-2.8 2.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  flow:  '<circle cx="7" cy="16" r="3.2" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="25" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="25" cy="24" r="3.2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M10 15 L22 9 M10 17 L22 23" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
};
