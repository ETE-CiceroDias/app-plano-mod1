import { useState } from "react";
import { dtBlocos, dtAulas, tipoInfo } from "../../data/dt";

export default function PlanoDT() {
  const [expanded, setExpanded] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [activeTab, setActiveTab] = useState("aulas");

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-rose-50 border border-rose-200 rounded-xl text-sm lg:text-base text-rose-800 leading-relaxed">
        Esta disciplina te ensina a <strong>criar com empatia</strong> — entender o problema antes de construir a solução. Você vai sair daqui sabendo conduzir imersões, construir personas, prototipar no Figma e defender uma ideia em pitch ao vivo.
      </div>
      <div className="flex gap-2 mb-4">
        {[["aulas","📚 Aulas"],["avaliacoes","📋 Avaliações"]].map(([t,l]) => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab===t ? "bg-rose-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            {l}
          </button>
        ))}
      </div>

      {activeTab === "aulas" && (
        <div>
          <button onClick={() => setShowLegend(!showLegend)}
            className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1 font-medium mb-3 py-1 touch-manipulation">
            <span>{showLegend ? "▲" : "▼"}</span> O que significam as tags?
          </button>
          {showLegend && (
            <div className="mb-3 p-3 bg-white border border-gray-200 rounded-xl space-y-2">
              {Object.entries(tipoInfo).map(([k,v]) => (
                <div key={k} className="flex items-start gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 ${v.color}`}>{v.label}</span>
                  <span className="text-xs text-gray-600">{v.desc}</span>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-rose-50 text-rose-700 border-rose-200">Entrega</span>
                <span className="text-xs text-gray-600">Aula com atividade avaliativa.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-[#FFF2DF] text-[#0B3289] border-[#0B3289]">🎓 Classroom</span>
                <span className="text-xs text-gray-600">Material complementar no Classroom.</span>
              </div>
            </div>
          )}
          <div className="space-y-1">
            {dtBlocos.map((bloco) => (
              <div key={bloco.id}>
                <div className={`${bloco.color} text-white rounded-xl px-4 py-3 mt-3 mb-2 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold opacity-75 uppercase tracking-wider border border-white border-opacity-40 px-2 py-0.5 rounded-full">{bloco.label}</span>
                    <span className="text-xs opacity-75">{bloco.periodo}</span>
                  </div>
                  <div className="font-bold text-base lg:text-lg">{bloco.titulo}</div>
                  <div className="mt-1 text-sm lg:text-base opacity-90 leading-relaxed">{bloco.foco}</div>
                </div>
                {dtAulas.filter(a => a.bloco === bloco.id).map((aula) => {
                  const cfg = tipoInfo[aula.tipo];
                  const key = `dt-${aula.bloco}-${aula.num}`;
                  const isOpen = expanded === key;
                  return (
                    <div key={key} onClick={() => setExpanded(isOpen ? null : key)}
                      className={`rounded-xl border cursor-pointer transition-all mb-1 shadow-sm touch-manipulation ${aula.tipo==="buffer" ? "border-amber-200 bg-amber-50" : "border-gray-200 bg-white hover:border-gray-300 active:bg-gray-50"}`}>
                      <div className="flex items-start gap-3 px-4 py-3.5">
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">{aula.num}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-gray-900 text-sm lg:text-base">{aula.titulo}</span>
                            <span className={`text-xs px-2 py-0.5 rounded border font-medium ${cfg.color}`}>{cfg.label}</span>
                            {aula.entrega && <span className="text-xs px-2 py-0.5 rounded border bg-rose-50 text-rose-700 border-rose-200 font-medium">Entrega</span>}
                            {aula.asynch  && <span className="text-xs px-2 py-0.5 rounded border bg-amber-50 text-amber-700 border-amber-200 font-medium">🎓 Classroom</span>}
                          </div>
                          {!isOpen && <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{aula.desc}</p>}
                        </div>
                        <span className="text-gray-400 text-xs flex-shrink-0 mt-2">{isOpen ? "▲" : "▼"}</span>
                      </div>
                      {isOpen && (
                        <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-2">
                          <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{aula.desc}</p>
                          {aula.entrega && (
                            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 space-y-1">
                              <p className="font-semibold">{aula.entrega.label}</p>
                              <p>{aula.entrega.detail}</p>
                            </div>
                          )}
                          {aula.asynch && (
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 space-y-1">
                              <p className="font-semibold">🎓 Material no Classroom</p>
                              <p>{aula.asynch}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "avaliacoes" && (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-3 text-center">
              <span className="font-bold text-pink-800 block text-base">4 pts</span>
              <span className="text-pink-600">Desafio UX</span>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
              <span className="font-bold text-orange-800 block text-base">6 pts</span>
              <span className="text-orange-600">Projeto ODS</span>
            </div>
          </div>
          {/* Desafio UX */}
          <div className="border-2 border-pink-200 rounded-2xl overflow-hidden">
            <div className="bg-pink-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Desafio: UX na Prática</span>
                <span className="ml-2 text-xs bg-white text-pink-700 font-bold px-2 py-0.5 rounded-full">4 pts</span>
              </div>
            </div>
            <div className="bg-pink-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-pink-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Pitch em sala — semana de 18 a 22 de maio</p></div>
                <div className="bg-white rounded-lg p-2 border border-pink-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual. Doc análise + Figma + pitch 3 min.</p></div>
              </div>
              {[{t:"Ciclo DT documentado",p:"1,5 pts",d:"Persona com dor real, POV com insight genuíno, ideação documentada com pelo menos 3 ideias antes da escolha final."},
                {t:"Caráter de inovação",p:"1 pt",d:"A solução vai além do óbvio — não é só corrigir o que estava errado, é propor algo que surpreende e faz sentido."},
                {t:"Pitch de 3 minutos",p:"1,5 pts",d:"Antes → problema → solução com justificativa. 3 minutos claros e objetivos."}].map((c,i) => (
                <div key={i} className="bg-white border border-pink-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-pink-800 flex-1">{c.t}</span>
                    <span className="text-xs bg-pink-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.p}</span>
                  </div>
                  <p className="text-xs text-pink-700 leading-relaxed">{c.d}</p>
                </div>
              ))}
              <div className="p-2.5 bg-indigo-50 border border-indigo-200 rounded-lg text-xs text-indigo-700">
                <p className="font-semibold">🎯 Esta mesma entrega também vale 4 pts em DCU</p>
                <p className="mt-0.5">Em DCU: heurística correta, redesign com critério de usabilidade, elementos do Bloco 1 aplicados.</p>
              </div>
            </div>
          </div>
          {/* Projeto ODS */}
          <div className="border-2 border-orange-200 rounded-2xl overflow-hidden">
            <div className="bg-orange-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Projeto Final ODS</span>
                <span className="ml-2 text-xs bg-white text-orange-700 font-bold px-2 py-0.5 rounded-full">6 pts</span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Final de junho/julho — evento final do PI</p></div>
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Em grupo. Pitch 7 min ao vivo no Figma.</p></div>
              </div>
              {[{t:"Qualidade da persona e imersão",p:"2 pts",d:"Persona com dor real e específica, sustentada por pesquisa de campo. Persona inventada sem pesquisa zera este critério."},
                {t:"Processo criativo documentado",p:"2 pts",d:"Todas as etapas do DT documentadas: imersão, definição, ideação e prototipação."},
                {t:"Storytelling no pitch",p:"2 pts",d:"O pitch conta a história do usuário — não da solução. Contexto ODS → persona → dor → solução → próximo passo."}].map((c,i) => (
                <div key={i} className="bg-white border border-orange-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-orange-800 flex-1">{c.t}</span>
                    <span className="text-xs bg-orange-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.p}</span>
                  </div>
                  <p className="text-xs text-orange-700 leading-relaxed">{c.d}</p>
                </div>
              ))}
              <div className="p-3 bg-white border border-orange-200 rounded-xl text-xs">
                <p className="font-semibold text-orange-800 mb-2">🔗 O mesmo projeto, avaliado de ângulos diferentes</p>
                {[{b:"DT · 6pts",bg:"bg-rose-600",d:"Processo criativo: persona real, imersão documentada, ideação, storytelling."},
                  {b:"DCU · 4pts",bg:"bg-teal-600",d:"Usabilidade: heurísticas, acessibilidade, coerência visual."},
                  {b:"PI · 8pts",bg:"bg-red-600",d:"Processo ágil (Trello) + apresentação + documentos + protótipo."}].map((item,i) => (
                  <div key={i} className="flex gap-2 items-start mt-1.5">
                    <span className={`${item.bg} text-white px-2 py-0.5 rounded-full font-bold text-xs flex-shrink-0`}>{item.b}</span>
                    <span className="text-gray-600 leading-relaxed">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
