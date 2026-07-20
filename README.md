# Engenharia·Hub

Hub de Conhecimento de Engenharia — transforma o melhor material de estudo de cada
disciplina em uma **trilha visual e interativa**, com aplicações no mundo real, mapa de
pré-requisitos, rigor técnico e sensação de progresso.

## Módulo 01 — Análise de Circuitos Elétricos

Uma trilha de **16 capítulos** (da carga elétrica ao amplificador operacional),
organizada em **7 fases** que vão do regime estático (CC) ao ativo (amplificação).

Conteúdo baseado na *Sebenta Multimédia de Análise de Circuitos Eléctricos* do
Prof. Victor Dias (IST) — material de referência em Teoria de Circuitos.

### Destaques

- **Herói-osciloscópio** — canvas animado dual-trace que evolui de CC a CA.
- **Mapa de dependências** — as 7 fases na ordem de aprendizado.
- **Aplicações reais** — o *"onde isso vive"* de cada capítulo.
- **Rigor técnico** — a fórmula-chave de cada tema.
- **Gamificação** — barra de progresso e marcação de capítulos concluídos (salvos no navegador).

## Stack

- [Astro](https://astro.build) — site estático multi-página.
- HTML/CSS/JS puro (sem dependências de runtime no cliente).

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:4321
npm run build    # gera a versão estática em dist/
npm run preview  # pré-visualiza o build
```

## Estrutura

```
src/
├── layouts/Base.astro   # shell (title, meta, tema claro/escuro)
└── pages/index.astro    # Módulo 01 — Circuitos
```

Novos módulos entram como novas páginas em `src/pages/` (ex.: `eletronica.astro` → rota `/eletronica`).

## Roadmap

- [x] **Análise de Circuitos Elétricos** — no ar
- [ ] Eletrônica Analógica & Digital
- [ ] Sistemas de Potência & Máquinas
- [ ] Sinais, Controle e demais engenharias
