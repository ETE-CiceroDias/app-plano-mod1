import { useState } from "react";
import { piBlocos, piAulas, piMiniProjetos, piSubcriterios } from "../../data/pi";
import { tipoInfo } from "../../data/dt";

export default function PlanoPI() {
  const [expanded, setExpanded] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [activeTab, setActiveTab] = useState("aulas");
  const [showMini, setShowMini] = useState(false);

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-orange-50 border border-orange-200 rounded-xl text-sm lg:text-base text-orange-800 leading-relaxed">
        Esta disciplina integra <strong>HTML5, CSS3 e Figma</strong> num único percurso: do portfólio individual ao protótipo ODS em grupo. Você aprende fazendo — cada aula é um code-along com entrega real.
      </div>
      <div className="flex gap-2 mb-4">
        {[["aulas","📚 Aulas"],["avaliacoes","📋 Avaliações"]].map(([t,l]) => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab===t ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
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
            </div>
          )}
          {/* Mini-projetos */}
          <button onClick={() => setShowMini(!showMini)}
            className="w-full text-left px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-xs font-semibold text-orange-800 flex items-center justify-between mb-3 touch-manipulation">
            <span>🗂️ Mini-projetos disponíveis ({piMiniProjetos.length} opções)</span>
            <span>{showMini ? "▲" : "▼"}</span>
          </button>
          {showMini && (
            <div className="mb-3 grid grid-cols-1 gap-1.5">
              {piMiniProjetos.map(mp => (
                <div key={mp.num} className="flex items-start gap-3 bg-white border border-orange-100 rounded-xl px-3 py-2">
                  <span className="text-xs font-bold text-orange-400 flex-shrink-0 mt-0.5">#{mp.num}</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{mp.nome}</p>
                    <p className="text-xs text-gray-500">{mp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="space-y-1">
            {piBlocos.map((bloco) => (
              <div key={bloco.id}>
                <div className={`${bloco.color} text-white rounded-xl px-4 py-3 mt-3 mb-2 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold opacity-75 uppercase tracking-wider border border-white border-opacity-40 px-2 py-0.5 rounded-full">{bloco.label}</span>
                    <span className="text-xs opacity-75">{bloco.periodo}</span>
                  </div>
                  <div className="font-bold text-base lg:text-lg">{bloco.titulo}</div>
                  <div className="mt-1 text-sm lg:text-base opacity-90 leading-relaxed">{bloco.foco}</div>
                </div>
                {piAulas.filter(a => a.bloco === bloco.id).map((aula) => {
                  const cfg = tipoInfo[aula.tipo];
                  const key = `pi-${aula.bloco}-${aula.num}`;
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
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
              <span className="font-bold text-orange-800 block text-base">2 pts</span>
              <span className="text-orange-600">Portfólio + Mini-projeto</span>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <span className="font-bold text-red-800 block text-base">8 pts</span>
              <span className="text-red-600">Projeto Final ODS</span>
            </div>
          </div>
          {/* Portfólio */}
          <div className="border-2 border-orange-200 rounded-2xl overflow-hidden">
            <div className="bg-orange-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">💻</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Site Portfólio + Mini-projeto</span>
                <span className="ml-2 text-xs bg-white text-orange-700 font-bold px-2 py-0.5 rounded-full">2 pts</span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Aula 12 — entrega no final do dia</p></div>
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual. Link GitHub Pages via Classroom.</p></div>
              </div>
              <ul className="space-y-1.5">
                {["Portfólio no GitHub Pages (1 pt) — foto/avatar, nome, descrição, habilidades do semestre.",
                  "Link funcional para o Mini-projeto totalmente estilizado com CSS3 (+1 pt)."].map((item,i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                    <span className="text-xs text-orange-800 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Projeto ODS */}
          <div className="border-2 border-red-200 rounded-2xl overflow-hidden">
            <div className="bg-red-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Projeto Final ODS</span>
                <span className="ml-2 text-xs bg-white text-red-700 font-bold px-2 py-0.5 rounded-full">8 pts</span>
              </div>
            </div>
            <div className="bg-red-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-red-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Final de junho/julho — evento final</p></div>
                <div className="bg-white rounded-lg p-2 border border-red-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Em grupo. Pitch 7 min ao vivo no Figma.</p></div>
              </div>
              <div className="space-y-2">
                {piSubcriterios.map((c,i) => (
                  <div key={i} className="bg-white border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-red-800 flex-1">{c.titulo}</span>
                      <span className="text-xs bg-red-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.pts}</span>
                    </div>
                    <p className="text-xs text-red-700 leading-relaxed">{c.desc}</p>
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
