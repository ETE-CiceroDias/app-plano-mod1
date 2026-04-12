import { useState } from "react";

const passos = [
  { num:"01", icon:"🌱", titulo:"Escolha o ODS e o problema", cor:"bg-teal-600",
    desc:"O projeto precisa estar conectado a pelo menos 1 dos 17 ODS da ONU.",
    items:["Pesquise os 17 ODS e escolha 1 que faça sentido para o grupo","Identifique um problema real e local — o que acontece na sua comunidade que se conecta a esse ODS?","O problema precisa ter um usuário real — não é um problema genérico da humanidade"] },
  { num:"02", icon:"🧭", titulo:"Imersão e pesquisa", cor:"bg-teal-700",
    desc:"Saia da sala de aula. O problema real não está no Google.",
    items:["Conduza pelo menos 1 entrevista ou observação com quem vive o problema","Documente tudo: o que a pessoa disse, fez, e o que você percebeu","Essa pesquisa vira a base da persona — sem pesquisa real, a persona é ficção"] },
  { num:"03", icon:"👤", titulo:"Persona e mapa de empatia", cor:"bg-cyan-600",
    desc:"A persona é síntese da pesquisa — não um personagem inventado.",
    items:["Nome, foto, contexto de vida — quem é essa pessoa no mundo real","Dores: o que frustra, dificulta, causa ansiedade","Desejos: o que ela quer alcançar, o que a motivaria","Mapa de empatia: pensa, sente, vê, ouve, fala e faz"] },
  { num:"04", icon:"💡", titulo:"Ideação e protótipo", cor:"bg-indigo-600",
    desc:"Com o problema claro e a persona definida, hora de criar — com critério.",
    items:["Gere pelo menos 3 ideias diferentes antes de escolher","Escolha a que melhor responde à dor da persona — justifique a escolha","Prototipe no Figma: mínimo 3 telas navegáveis no modo Prototype","As telas precisam refletir decisões de DCU: hierarquia, contraste, tipografia legível"] },
  { num:"05", icon:"🎤", titulo:"Pitch final (7 minutos)", cor:"bg-rose-600",
    desc:"Ao vivo no evento final — final de junho ou julho. 7 minutos no Figma.",
    items:["Estrutura: ODS → problema → usuário (persona) → solução → próximo passo","Navegue o protótipo ao vivo — o fluxo precisa funcionar","Avaliado em 3 disciplinas: DT (processo), DCU (usabilidade), PI (apresentação)"] },
];

export default function AtividadeODS() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div>
      <div className="mb-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="text-3xl">🌍</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-bold text-gray-900 text-base">Projeto ODS</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-rose-600 text-white">6 pts · DT</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-teal-600 text-white">4 pts · DCU</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-orange-600 text-white">8 pts · PI</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">Projeto em grupo conectando as 3 disciplinas. <strong>DT</strong> pelo processo criativo. <strong>DCU</strong> pela usabilidade. <strong>PI</strong> pela apresentação ao vivo.</p>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2 text-xs">
        {[["bg-teal-50 border-teal-200","text-teal-800","text-teal-600","DT · 6pts","Processo criativo"],
          ["bg-indigo-50 border-indigo-200","text-indigo-800","text-indigo-600","DCU · 4pts","Usabilidade"],
          ["bg-orange-50 border-orange-200","text-orange-800","text-orange-600","PI · 8pts","Apresentação"]].map(([bg,t1,t2,pts,label],i) => (
          <div key={i} className={`p-3 ${bg} border rounded-xl text-center`}>
            <span className={`font-bold ${t1} block`}>{pts}</span>
            <span className={t2}>{label}</span>
          </div>
        ))}
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
      <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-xs">
        <p className="font-semibold text-teal-800 mb-1">🎯 O que diferencia nota alta de nota baixa</p>
        <p className="text-teal-700 leading-relaxed">A persona precisa ter uma dor real e específica — e a solução precisa responder a essa dor. Projeto que "resolve tudo" não resolve nada.</p>
      </div>
    </div>
  );
}
