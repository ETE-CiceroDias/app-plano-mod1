import { useState } from "react";

const passos = [
  { num:"01", icon:"📐", titulo:"Entenda o contexto", cor:"bg-pink-600",
    desc:"A Delicatte Confeitaria é o produto de referência para praticar Figma com um caso real.",
    items:["Acesse o material da Delicatte no Classroom — paleta, referências visuais e fluxo esperado","Analise o fluxo principal: Login → Home → Produto","Observe marcas de confeitaria reais para inspiração"] },
  { num:"02", icon:"🧩", titulo:"Monte as 3 telas no Figma", cor:"bg-rose-600",
    desc:"Alta fidelidade — cores da Delicatte aplicadas, tipografia hierarquizada, imagens reais.",
    items:["Tela 1 — Login: campos de email e senha, botão, identidade visual da marca","Tela 2 — Home: destaque de produtos, navegação clara, paleta aplicada","Tela 3 — Produto: foto, nome, preço, botão — hierarquia visual evidente","Use componentes reutilizáveis para elementos que se repetem"] },
  { num:"03", icon:"🔗", titulo:"Conecte no modo Prototype", cor:"bg-fuchsia-600",
    desc:"O protótipo precisa funcionar — não é só um conjunto de telas bonitas.",
    items:["Conecte as 3 telas no modo Prototype do Figma","Fluxo obrigatório: abrir app → login → home → produto","Teste você mesmo antes de entregar — o fluxo precisa funcionar sem explicação"] },
  { num:"04", icon:"🚀", titulo:"Entregue via Classroom", cor:"bg-pink-800",
    desc:"Link compartilhável com permissão de visualização. Sem link = não avaliado.",
    items:["Share → Copy link → permissão 'Anyone with the link can view'","Cole o link no Classroom até o prazo","Verifique que o link abre sem precisar de login no Figma"] },
];

export default function AtividadeDelicatte() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div>
      <div className="mb-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-300 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="text-3xl">🎂</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-bold text-gray-900 text-base">Protótipo Interativo — Delicatte Confeitaria</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-orange-500 text-white">+1 pt participação · PI</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">Projeto guiado de programação: você constrói o cardápio digital da Delicatte em HTML, CSS e JavaScript. É com esse projeto que você aprende a codar de verdade.</p>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Bloco 2 — entrega até final da aula 13</p></div>
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual. Link Figma com permissão de visualização.</p></div>
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
                    {p.items.map((item,i) => (
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
      <div className="p-4 bg-pink-50 border border-pink-200 rounded-xl text-xs">
        <p className="font-semibold text-pink-800 mb-1">🎯 Critério de avaliação</p>
        <p className="text-orange-700 leading-relaxed">Vale +1pt de participação sobre a nota final de PI. O projeto é feito em aula, acompanhando a professora. O que importa é estar presente e evoluir junto com o projeto.</p>
      </div>
    </div>
  );
}
