import { useState } from "react";

const passos = [
  { num:"01", icon:"🔎", titulo:"Escolha a marca", cor:"bg-indigo-600",
    desc:"Escolha uma marca brasileira real — pode ser de qualquer setor, mas precisa ter presença digital (site ou app).",
    items:["Pesquise o manual da marca ou brand guidelines oficiais","Consulte o site institucional, redes sociais oficiais e materiais de imprensa","Registre todas as fontes consultadas — elas vão no relatório"] },
  { num:"02", icon:"🎨", titulo:"Analise a cor", cor:"bg-violet-600",
    desc:"Foco total na paleta oficial — não no que você acha bonito, mas no que a marca escolheu e por quê.",
    items:["Identifique as cores oficiais (hex ou RGB do manual)","Pesquise a psicologia daquelas cores — o que comunicam para o público-alvo","Teste o contraste em pelo menos 1 tela: o texto passa no WCAG AA (4,5:1)?","Ferramenta gratuita: coolors.co/contrast-checker"] },
  { num:"03", icon:"✏️", titulo:"Analise a tipografia", cor:"bg-teal-600",
    desc:"Identifique as fontes pelo nome — 'sans-serif moderna' não é uma análise.",
    items:["Qual é o nome da fonte? (use WhatFont, Fonts Ninja ou inspecione o CSS)","O que essa escolha tipográfica comunica? Serifa remete a tradição, sans-serif a modernidade","Como a hierarquia funciona? Títulos, subtítulos e corpo estão claramente diferenciados?"] },
  { num:"04", icon:"📱", titulo:"Analise 2 telas reais", cor:"bg-indigo-800",
    desc:"Escolha 2 telas do site ou app — de preferência as mais importantes para o usuário.",
    items:["Faça print e anote diretamente sobre elas — onde a cor direciona o olhar?","Ex: 'esse botão converte porque o contraste chama atenção'","Pelo menos 1 anotação por tela conectando cor OU tipografia à decisão do usuário"] },
  { num:"05", icon:"📄", titulo:"Monte o relatório", cor:"bg-rose-600",
    desc:"Objetivo, visual, com argumentos. Não é redação, é análise de design.",
    items:["Inclua: nome da marca, prints anotados, paleta com hex, fontes com nome","Cada afirmação precisa de justificativa técnica — não achismo","Liste as referências no final — sem referências = sem nota no critério de pesquisa"] },
];

export default function AtividadeRelatorio() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div>
      <div className="mb-4 p-4 bg-gradient-to-r from-indigo-50 to-violet-50 border-2 border-indigo-300 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="text-3xl">📝</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-bold text-gray-900 text-base">Relatório de Marca + Análise Visual</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-indigo-600 text-white">2 pts · DCU</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">Você escolhe uma marca brasileira real e analisa como <strong>cor e tipografia</strong> impactam a percepção e decisão do usuário.</p>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">24 de abril — Classroom até 23h59</p></div>
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual (ou dupla/trio). PDF via Classroom.</p></div>
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider px-1">Passo a passo</p>
        {passos.map(p => {
          const isOpen = expanded === p.num;
          return (
            <div key={p.num} onClick={() => setExpanded(isOpen ? null : p.num)}
              className="bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 shadow-sm transition-all touch-manipulation">
              <div className="flex items-center gap-3 px-4 py-3.5">
                <div className={`w-9 h-9 rounded-full ${p.cor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{p.num}</div>
                <span className="text-base flex-shrink-0">{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-gray-900 text-sm">{p.titulo}</span>
                  {!isOpen && <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{p.desc}</p>}
                </div>
                <span className="text-gray-400 text-xs flex-shrink-0">{isOpen ? "▲" : "▼"}</span>
              </div>
              {isOpen && (
                <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-2">
                  <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2 mt-1">
                    {p.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                        <span className="text-sm leading-relaxed text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs">
        <p className="font-semibold text-indigo-800 mb-1">🎯 Critério de avaliação</p>
        <p className="text-indigo-700 leading-relaxed">O que vale é o <strong>raciocínio</strong> — por que essa cor, por que essa fonte, qual o impacto no usuário. Sem referências = sem nota no critério de pesquisa.</p>
      </div>
    </div>
  );
}
