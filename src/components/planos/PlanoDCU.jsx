import { useState } from "react";
import { dcuBlocos, dcuAulas, tipoInfo } from "../../data/dcu";

export default function PlanoDCU() {
  const [expanded, setExpanded] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [activeTab, setActiveTab] = useState("aulas");

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm lg:text-base text-blue-800 leading-relaxed">
        Esta disciplina te ensina a <strong>avaliar, questionar e justificar decisões de design</strong> com base em princípios técnicos de usabilidade e interação.
      </div>
      <div className="flex gap-2 mb-4">
        {[["aulas","📚 Aulas"],["avaliacoes","📋 Avaliações"]].map(([t,l]) => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab===t ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
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
                <span className="text-xs text-gray-600">Aula com atividade avaliativa — clique para ver detalhes.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-[#FFF2DF] text-[#0B3289] border-[#0B3289]">🎓 Classroom</span>
                <span className="text-xs text-gray-600">Material complementar no Classroom.</span>
              </div>
            </div>
          )}
          <div className="space-y-1">
            {dcuBlocos.map((bloco) => (
              <div key={bloco.id}>
                <div className={`${bloco.color} text-white rounded-xl px-4 py-3 mt-3 mb-2 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold opacity-75 uppercase tracking-wider border border-white border-opacity-40 px-2 py-0.5 rounded-full">{bloco.label}</span>
                    <span className="text-xs opacity-75">{bloco.periodo}</span>
                  </div>
                  <div className="font-bold text-base lg:text-lg">{bloco.titulo}</div>
                  <div className="mt-1 text-sm lg:text-base opacity-90 leading-relaxed">{bloco.foco}</div>
                </div>
                {dcuAulas.filter(a => a.bloco === bloco.id).map((aula) => {
                  const cfg = tipoInfo[aula.tipo];
                  const key = `${aula.bloco}-${aula.num}`;
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
          <div className="grid grid-cols-3 gap-2 text-xs">
            {[["bg-indigo-50 border-indigo-200","text-indigo-800","text-indigo-600","3 pts","Relatório"],
              ["bg-violet-50 border-violet-200","text-violet-800","text-violet-600","4 pts","Desafio UX"],
              ["bg-teal-50 border-teal-200","text-teal-800","text-teal-600","4 pts","Proj. ODS"]].map(([bg,t1,t2,pts,nome],i) => (
              <div key={i} className={`${bg} border rounded-xl p-3 text-center`}>
                <span className={`font-bold ${t1} block text-base`}>{pts}</span>
                <span className={t2}>{nome}</span>
              </div>
            ))}
          </div>
          {[
            { cor:"indigo", icon:"📝", titulo:"Relatório de Marca + Análise Visual", pts:"3 pts", quando:"24 de abril — Classroom até 23h59", formato:"Individual (ou dupla/trio). PDF.", itens:["Pesquisa real sobre a marca — manual, site institucional. Referências obrigatórias.","Paleta de cores — cores oficiais, psicologia, teste WCAG AA.","Tipografia — fontes da marca e o que comunicam emocionalmente.","Análise de 2 telas reais com prints anotados."], nota:"O que vale é o raciocínio — por que essa cor, por que essa fonte, qual o impacto no usuário." },
            { cor:"violet", icon:"🎯", titulo:"Desafio: UX na Prática", pts:"4 pts", quando:"Seminário de Heurísticas — 1 de junho", formato:"Individual. Doc 1 página + Figma + pitch 3 min.", itens:["Auditoria de 1 heurística — print anotado + severidade classificada.","Análise de pelo menos 3 elementos do Bloco 1.","Redesign de até 3 telas no Figma corrigindo a heurística.","Pitch de 3 min: antes × problema × solução + justificativa."], nota:"Esta mesma entrega vale 4 pts em DT (ciclo criativo, persona, inovação)." },
            { cor:"teal",   icon:"🌍", titulo:"Projeto Integrador — Validação DCU", pts:"4 pts", quando:"Final de junho/julho — apresentação final", formato:"Em grupo. Validação presencial no protótipo.", itens:["Mín. 3 heurísticas aplicadas e documentadas no protótipo.","Coerência entre persona (DT) e decisões de interface.","Pelo menos 1 elemento de acessibilidade (WCAG AA).","Consistência visual: cor, tipografia, hierarquia."], nota:"A validação acontece ao vivo durante o pitch. Documento com prints deve ser entregue antes do evento." },
          ].map(({ cor, icon, titulo, pts, quando, formato, itens, nota }) => (
            <div key={cor} className={`border-2 border-${cor}-200 rounded-2xl overflow-hidden`}>
              <div className={`bg-${cor}-600 px-4 py-3 flex items-center gap-2`}>
                <span className="text-2xl">{icon}</span>
                <div className="flex-1">
                  <span className="text-white font-bold text-sm">{titulo}</span>
                  <span className={`ml-2 text-xs bg-white text-${cor}-700 font-bold px-2 py-0.5 rounded-full`}>{pts}</span>
                </div>
              </div>
              <div className={`bg-${cor}-50 p-4 space-y-3`}>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`bg-white rounded-lg p-2 border border-${cor}-100`}><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">{quando}</p></div>
                  <div className={`bg-white rounded-lg p-2 border border-${cor}-100`}><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">{formato}</p></div>
                </div>
                <ul className="space-y-1.5">
                  {itens.map((item,i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`text-${cor}-400 mt-0.5 flex-shrink-0`}>→</span>
                      <span className={`text-xs text-${cor}-800 leading-relaxed`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={`p-3 bg-white border border-${cor}-200 rounded-lg text-xs text-${cor}-700`}>
                  <p className="leading-relaxed">{nota}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
