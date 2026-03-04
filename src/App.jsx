import { useState } from "react";
import perfil from '../img/perfil-samara.jpg';
import banner from '../img/download.jpg';
import dcuApp from '../img/clasroom-dcu-app.png';
import dtApp from '../img/clasroom-dt-app.png';
import piApp from '../img/clasroom-pi-app.png';

const CONFIG = {
  escola: "ETE Cícero Dias",
  curso: "Desenvolvimento de Sistemas",
  modulo: "Módulo 1 · Subsequente",
  periodo: "2025–2026",
  professora: {
    nome: "Samara Silvia Sabino",
    titulo: "Professora · Módulo 1",
    foto: perfil,
    email: "samarasilvia.educa@gmail.com",
  },
  bannerHub: banner,
};

const disciplinas = [
  { id: "dcu", codigo: "DE_232", nome: "Design Centrado no Usuário", ch: "40h", cor: "indigo", icon: "🎯", disponivel: true,  imagem: dcuApp, descricao: "Avaliar, questionar e justificar decisões de design com base em usabilidade e interação.",  ClassroomA: "https://classroom.google.com/c/Nzk0MTMxNjMyNjM4?cjc=fni6mzwd",  ClassroomB: "https://classroom.google.com/c/Nzk0MTMxNTE0MDAy?cjc=7gg4shse"},
  { id: "dt",  codigo: "DE_233", nome: "Design Thinking",            ch: "40h", cor: "rose",   icon: "💡", disponivel: false, imagem: dtApp, descricao: "Criar com empatia — persona, prototipação e desenvolvimento de soluções inovadoras." },
  { id: "pi",  codigo: "DE_234", nome: "Projeto Integrador I",       ch: "80h", cor: "orange", icon: "🚀", disponivel: false, imagem: piApp, descricao: "Integrar os conhecimentos do módulo em um projeto real orientado aos ODS." },
];

const corMap = {
  indigo: { bg: "bg-purple-900", border: "border-indigo-400", badge: "bg-indigo-100 text-indigo-800", text: "text-indigo-700" },
  rose:   { bg: "bg-blue-600",   border: "border-rose-400",   badge: "bg-rose-100 text-rose-800",     text: "text-rose-700"   },
  orange: { bg: "bg-rose-500", border: "border-orange-400", badge: "bg-orange-100 text-orange-800", text: "text-orange-700" },
};

const dcuBlocos = [
  { id: 1, label: "BLOCO 1", titulo: "Gramática Visual, UX e IHC",    periodo: "Março – Abril",  color: "bg-indigo-600", foco: "Construir o vocabulário visual e conceitual da disciplina. Você vai aprender a olhar uma interface com olhar crítico — entender o que é design centrado no usuário, como funciona a experiência do usuário, e por que decisões de cor, tipografia e hierarquia visual impactam diretamente quem usa um produto." },
  { id: 2, label: "BLOCO 2", titulo: "Heurísticas de Nielsen",         periodo: "Maio – Junho",   color: "bg-violet-600", foco: "Aprender as 10 heurísticas de Nielsen — as regras de ouro da usabilidade. Cada aula foca em 2 heurísticas: 30min de teoria e 40min de prática analisando apps reais no celular. Ao final deste bloco, você consegue auditar qualquer interface com critério técnico." },
  { id: 3, label: "BLOCO 3", titulo: "Aplicação, Ética e Métricas",    periodo: "Junho – Julho",  color: "bg-teal-600",   foco: "Fechar o ciclo da disciplina. Você vai aprender sobre ética no design (dark patterns e acessibilidade) e como medir usabilidade. Tudo culmina na integração com o Projeto Integrador." },
];

const dcuAulas = [
  { bloco:1, num:1,     titulo:"Fundamentos do Design",                                tipo:"fixa",   entrega:null, asynch:null, desc:"O que é design de verdade — além da estética. Vamos explorar design como processo, função e intenção, entender as subáreas (UX, UI, IxD, design de produto) e como elas se relacionam com o desenvolvimento de sistemas." },
  { bloco:1, num:2,     titulo:"DCU: Conceito, Ciclo e Contexto",                      tipo:"fixa",   entrega:null, asynch:null, desc:"O que é Design Centrado no Usuário, de onde veio e por que importa. Vamos ver o ciclo iterativo do DCU, entender a diferença entre DCU, UX e UI — e por que essa disciplina é diferente de Design Thinking." },
  { bloco:1, num:3,     titulo:"O que é UX? + Design Emocional",                       tipo:"fixa",   entrega:null, asynch:"UX Aprofundado: os 7 componentes de Morville e design emocional completo — disponível no Classroom após esta aula.", desc:"UX vai muito além da tela. Vamos entender affordance, feedback, modelo mental e por que bom design é invisível. Também vamos ver como o design emocional e as microinterações moldam a experiência do usuário." },
  { bloco:1, num:4,     titulo:"Gramática Visual",                                     tipo:"fixa",   entrega:null, asynch:null, desc:"Por que alguns sites parecem organizados e outros são um caos? A resposta está nos princípios da Gestalt. Vamos ver proximidade, similaridade, continuidade e figura-fundo aplicados a interfaces reais." },
  { bloco:1, num:5,     titulo:"Cor e Tipografia",                                     tipo:"fixa",   entrega:{ label:"📝 Relatório de Marca — 2pts", detail:"Entrega via Classroom até 23h59 após a aula 05." }, asynch:null, desc:"Cor e tipografia não são só estética — são decisões que impactam quem usa o produto. Vamos ver psicologia das cores, contraste mínimo de acessibilidade (WCAG AA), serifa vs. sem serifa. Analisaremos marcas brasileiras reais." },
  { bloco:1, num:6,     titulo:"IHC — Interação Humano-Computador",                    tipo:"fixa",   entrega:null, asynch:null, desc:"Por que quando um sistema é difícil de usar, a culpa é do design — não do usuário? Vamos explorar affordances digitais, modelos de interação e por que o sistema precisa responder a cada ação." },
  { bloco:1, num:"7–8", titulo:"Aulas reservadas",                                     tipo:"buffer", entrega:null, asynch:null, desc:"Espaço para revisão, aprofundamento ou reposição. Podem ser usadas para atividades complementares ou forms de revisão do Bloco 1." },
  { bloco:2, num:8,     titulo:"Como Conduzir uma Auditoria Heurística",               tipo:"fixa",   entrega:null, asynch:null, desc:"Vamos ver passo a passo como conduzir uma auditoria heurística, como documentar um problema e usar o template de relatório. Grupos formados, apps escolhidos." },
  { bloco:2, num:9,     titulo:"H1 e H2 — Visibilidade e Linguagem",                   tipo:"fixa",   entrega:null, asynch:null, desc:"H1: o usuário sempre sabe o que está acontecendo? H2: o sistema fala a língua do usuário? Safári em duplas: documentar 1 exemplo de cada em apps reais." },
  { bloco:2, num:10,    titulo:"H3 e H4 — Controle e Consistência",                    tipo:"fixa",   entrega:null, asynch:null, desc:"H3: o usuário pode desfazer o que fez? Há saídas claras? H4: o mesmo botão tem o mesmo visual em todas as telas? Safári individual no app do dia a dia." },
  { bloco:2, num:11,    titulo:"H5 e H6 — Prevenção e Reconhecimento",                 tipo:"fixa",   entrega:null, asynch:null, desc:"H5: o design previne erros antes que aconteçam. H6: o usuário reconhece as opções ou precisa memorizar onde tudo está? Safári em duplas em apps de e-commerce ou banco." },
  { bloco:2, num:12,    titulo:"H7 e H8 — Eficiência e Minimalismo",                   tipo:"fixa",   entrega:null, asynch:null, desc:"H7: há atalhos para usuários experientes? H8: cada elemento na tela compete pela atenção do usuário — o que é essencial e o que é ruído? Redesenho de tela em papel." },
  { bloco:2, num:13,    titulo:"H9 e H10 — Erros e Ajuda",                             tipo:"fixa",   entrega:null, asynch:null, desc:"H9: a mensagem de erro ajuda o usuário a entender e resolver? H10: a documentação existe e é fácil de encontrar? Vamos provocar erros em apps reais ao vivo." },
  { bloco:2, num:14,    titulo:"Revisão das 10 Heurísticas + Preparação do Seminário",  tipo:"fixa",   entrega:null, asynch:null, desc:"Revisão coletiva das 10 heurísticas com os melhores exemplos do safári. Os grupos iniciam a auditoria preliminar do app escolhido." },
  { bloco:2, num:15,    titulo:"Seminário de Auditoria — Parte 1",                     tipo:"fixa",   entrega:{ label:"🎤 Seminário de Auditoria — 5pts", detail:"Apresentação em aula — aulas 15 e 16." }, asynch:null, desc:"Primeiros grupos apresentam: 15min de apresentação com prints anotados + 5min de debate. Heurísticas identificadas, respeitadas ou quebradas, e severidade de cada quebra." },
  { bloco:2, num:16,    titulo:"Seminário de Auditoria — Parte 2",                     tipo:"fixa",   entrega:{ label:"🎤 Seminário de Auditoria — 5pts", detail:"Apresentação em aula — aulas 15 e 16." }, asynch:null, desc:"Grupos restantes apresentam. Debate coletivo e síntese dos padrões encontrados pela turma." },
  { bloco:3, num:17,    titulo:"Ética no Design + Acessibilidade",                     tipo:"fixa",   entrega:null, asynch:"Dark Patterns: slide completo + vídeo disponíveis no Classroom — estudar antes desta aula.", desc:"Design pode ser usado para enganar — os dark patterns. E pode excluir por omissão — o design inacessível. WCAG, contraste, texto alternativo e navegação por teclado." },
  { bloco:3, num:18,    titulo:"Usabilidade como Métrica",                             tipo:"fixa",   entrega:null, asynch:null, desc:"Usabilidade não é só uma sensação — dá pra medir. ISO 9241-11, escala de severidade de Nielsen (0–4) e diferença entre avaliação heurística e teste com usuário." },
  { bloco:3, num:"19–20",titulo:"Aulas reservadas",                                    tipo:"buffer", entrega:{ label:"📋 Documento PI — 3pts", detail:"Entrega via Classroom. Validação presencial na apresentação final do PI." }, asynch:null, desc:"Espaço para revisão geral, dúvidas sobre o Projeto Integrador e encerramento da disciplina." },
];

const dcuAvaliacoes = [
  { icon:"📝", titulo:"Relatório de Marca + Análise Visual",  peso:"2 pts", quando:"Bloco 1 — até 23h59 após a aula 05", formato:"Individual (ou dupla/trio, com divisão de autoria marcada). PDF entregue via Classroom.", estrutura:["A marca e o contexto — quem é a empresa e para quem o design foi pensado","As escolhas de cor — paleta, psicologia, teste de contraste WCAG AA","As escolhas tipográficas — fontes, hierarquia, o que a tipografia comunica","Análise de 2 telas — prints anotados mostrando onde as escolhas visuais impactam o usuário"], criterio:"Qualidade da análise e da justificativa. Raciocínio de design — não tamanho do texto. Marcas brasileiras reais.", border:"border-indigo-300", bg:"bg-indigo-50", badgeBg:"bg-indigo-600" },
  { icon:"🎤", titulo:"Seminário de Auditoria Heurística",    peso:"5 pts", quando:"Bloco 2 — Aulas 15 e 16",              formato:"Em grupo. 15min de apresentação com prints anotados + 5min de debate. App/site brasileiro real, diferente do projeto ODS.", estrutura:["Apresentação do produto auditado — o que é, para quem foi feito, qual o fluxo principal","Auditoria heurística — mínimo 5 das 10 heurísticas, com pelo menos 1 print anotado por heurística","Para cada heurística: está sendo respeitada ou quebrada? Qual é a severidade?","Os achados mais relevantes — quebra mais grave, heurística mais bem aplicada, o que corrigiria primeiro"], criterio:"Cobertura das heurísticas, qualidade dos prints anotados, profundidade da justificativa e clareza da apresentação.", border:"border-violet-300", bg:"bg-violet-50", badgeBg:"bg-violet-600" },
  { icon:"📋", titulo:"Documento de Integração DCU + PI",     peso:"3 pts", quando:"Bloco 3 — entrega via Classroom",      formato:"Em grupo. Google Docs ou Word (2–3 páginas). Validação presencial no protótipo na apresentação final do PI.", estrutura:["Identificar quais 3 heurísticas de Nielsen estão aplicadas no protótipo do Projeto Integrador","Print da tela com a heurística destacada","Justificativa: onde está aplicada e por que essa decisão de design serve ao usuário"], criterio:"Qualidade da conexão entre as decisões de design e os princípios de usabilidade. Profundidade vale mais que volume.", border:"border-teal-300", bg:"bg-teal-50", badgeBg:"bg-teal-600" },
];

const tipoInfo = {
  fixa:   { label:"Inegociável", color:"bg-blue-100 text-blue-800 border-blue-200",   desc:"Conteúdo fixo — acontece independente de qualquer imprevisto." },
  buffer: { label:"Flexível",    color:"bg-amber-100 text-amber-800 border-amber-200", desc:"Aula de reserva — pode ser usada para revisão, reposição ou aprofundamento." },
};

function PlanoDCU() {
  const [tab, setTab] = useState("aulas");
  const [expanded, setExpanded] = useState(null);
  const [expandedAv, setExpandedAv] = useState(null);
  const [showLegend, setShowLegend] = useState(false);

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800 leading-relaxed">
        Esta disciplina te ensina a <strong>avaliar, questionar e justificar decisões de design</strong> com base em princípios técnicos de usabilidade e interação. Não adianta o código mais perfeito se o usuário não consegue encontrar o botão de salvar.
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 mb-4">
        {dcuAvaliacoes.map((av, i) => (
          <button key={i} onClick={() => { setTab("avaliacoes"); setExpandedAv(i); }}
            className={`rounded-xl border-2 ${av.border} ${av.bg} p-3 text-left sm:text-center cursor-pointer hover:shadow-md active:scale-95 transition-all touch-manipulation`}>
            <div className="flex sm:flex-col sm:items-center items-center gap-3 sm:gap-0">
              <div className="text-2xl sm:mb-1 flex-shrink-0">{av.icon}</div>
              <div className="flex-1 sm:flex-none">
                <div className={`inline-block text-white text-xs font-bold px-2 py-0.5 rounded-full ${av.badgeBg} mb-1`}>{av.peso}</div>
                <div className="text-xs text-gray-700 font-medium leading-tight">{av.titulo}</div>
              </div>
              <span className="text-gray-400 sm:hidden text-sm flex-shrink-0">›</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-1 mb-4 bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
        {[{ id:"aulas", label:"📅 Aulas" }, { id:"avaliacoes", label:"📊 Avaliações" }].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all touch-manipulation ${tab === t.id ? "bg-gray-900 text-white shadow" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "aulas" && (
        <div>
          <button onClick={() => setShowLegend(!showLegend)}
            className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1 font-medium mb-3 py-1 touch-manipulation">
            <span>{showLegend ? "▲" : "▼"}</span> O que significam as tags?
          </button>
          {showLegend && (
            <div className="mb-3 p-3 bg-white border border-gray-200 rounded-xl space-y-2">
              {Object.entries(tipoInfo).map(([k, v]) => (
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
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-amber-50 text-amber-700 border-amber-200">🎓 Classroom</span>
                <span className="text-xs text-gray-600">Material complementar no Classroom — leitura ou vídeo para fazer antes ou depois da aula.</span>
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
                  <div className="font-bold text-base">{bloco.titulo}</div>
                  <div className="mt-1 text-sm opacity-90 leading-relaxed">{bloco.foco}</div>
                </div>
                {dcuAulas.filter(a => a.bloco === bloco.id).map((aula) => {
                  const cfg = tipoInfo[aula.tipo];
                  const key = `${aula.bloco}-${aula.num}`;
                  const isOpen = expanded === key;
                  return (
                    <div key={key} onClick={() => setExpanded(isOpen ? null : key)}
                      className={`rounded-xl border cursor-pointer transition-all mb-1 shadow-sm touch-manipulation ${aula.tipo === "buffer" ? "border-amber-200 bg-amber-50" : "border-gray-200 bg-white hover:border-gray-300 active:bg-gray-50"}`}>
                      <div className="flex items-start gap-3 px-4 py-3.5">
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">{aula.num}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-gray-900 text-sm">{aula.titulo}</span>
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
                          <p className="text-sm text-gray-700 leading-relaxed">{aula.desc}</p>
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

      {tab === "avaliacoes" && (
        <div className="space-y-3">
          <div className="p-3 sm:p-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 shadow-sm">
            A disciplina vale <strong>10 pontos</strong> distribuídos em 3 instrumentos avaliativos ao longo do semestre.
          </div>
          {dcuAvaliacoes.map((av, i) => {
            const isOpen = expandedAv === i;
            return (
              <div key={i} onClick={() => setExpandedAv(isOpen ? null : i)}
                className={`rounded-xl border-2 cursor-pointer transition-all shadow-sm touch-manipulation active:opacity-90 ${av.border} ${av.bg}`}>
                <div className="flex items-start gap-3 px-4 py-3.5">
                  <span className="text-2xl flex-shrink-0">{av.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900 text-sm">{av.titulo}</span>
                      <span className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${av.badgeBg}`}>{av.peso}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{av.quando}</p>
                  </div>
                  <span className="text-gray-400 text-xs flex-shrink-0 mt-2">{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-gray-200 pt-3 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Formato</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{av.formato}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">O que deve conter</p>
                      <ul className="space-y-2">
                        {av.estrutura.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-white bg-opacity-70 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Critério de avaliação</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{av.criterio}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="p-3 sm:p-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 shadow-sm">
            <p className="font-semibold text-gray-800 mb-1">Integração com as outras disciplinas</p>
            <p className="leading-relaxed">O seminário (5pts) usa um app real diferente do projeto ODS. O documento PI (3pts) é aplicado sobre o protótipo desenvolvido na disciplina de Projeto Integrador.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function PlanoEmBreve({ disc }) {
  const c = corMap[disc.cor];
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center text-3xl mb-4 shadow-lg`}>{disc.icon}</div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{disc.nome}</h2>
      <p className="text-gray-500 text-sm mb-4 max-w-xs leading-relaxed">{disc.descricao}</p>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${c.badge} border ${c.border}`}>
        🕐 Plano em construção
      </div>
    </div>
  );
}

// ============================================================
// LAYOUT DESKTOP
// ============================================================
function DesktopLayout({ disciplinaAtiva, setDisciplinaAtiva }) {
  const disc = disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc ? corMap[disc.cor] : null;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-72 flex-shrink-0 flex flex-col bg-gray-900 text-white sticky top-0 h-screen overflow-y-auto">
        <div className="relative overflow-hidden px-6 pt-8 pb-6 border-b border-white border-opacity-10">
          {CONFIG.bannerHub && <img src={CONFIG.bannerHub} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
          <div className="relative">
            <div className="text-xs text-white opacity-40 uppercase tracking-widest mb-2">{CONFIG.escola}</div>
            <div className="text-lg font-bold leading-tight">Planos de Ensino</div>
            <div className="text-xs text-white opacity-50 mt-1">{CONFIG.curso}</div>
            <div className="text-xs text-white opacity-35 mt-0.5">{CONFIG.modulo}</div>
          </div>
        </div>

        <div className="px-4 py-4 border-b border-white border-opacity-10">
          <div className="flex items-center gap-3 bg-white bg-opacity-5 rounded-xl px-3 py-3">
            {CONFIG.professora.foto ? (
              <img src={CONFIG.professora.foto} alt={CONFIG.professora.nome}
                className="w-10 h-10 rounded-full object-cover border-2 border-white border-opacity-30 flex-shrink-0" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-xl flex-shrink-0 border border-white border-opacity-20">👩‍🏫</div>
            )}
            <div className="min-w-0">
              <div className="font-semibold text-sm truncate">{CONFIG.professora.nome}</div>
              <div className="text-white opacity-45 text-xs">{CONFIG.professora.titulo}</div>
              {CONFIG.professora.email && <div className="text-white opacity-30 text-xs truncate mt-0.5">{CONFIG.professora.email}</div>}
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <div className="text-xs text-white opacity-25 uppercase tracking-widest px-3 mb-3">Disciplinas</div>

          <button onClick={() => setDisciplinaAtiva(null)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${
              !disciplinaAtiva ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"
            }`}>
            <span className="text-base">🏠</span>
            <span>Painel Geral</span>
            {!disciplinaAtiva && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-60" />}
          </button>

          {disciplinas.map((d) => {
            const cor = corMap[d.cor];
            const isActive = disciplinaAtiva === d.id;
            return (
              <button key={d.id} onClick={() => setDisciplinaAtiva(d.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${
                  isActive ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"
                }`}>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cor.bg} ${!d.disponivel ? "opacity-35" : ""}`} />
                <span className="flex-1 text-left truncate">{d.nome}</span>
                {d.disponivel
                  ? <span className={`text-xs px-1.5 py-0.5 rounded-md font-semibold ${cor.badge} opacity-80`}>ativo</span>
                  : <span className="text-xs text-white opacity-20">em breve</span>
                }
              </button>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-white border-opacity-10">
          <p className="text-xs text-white opacity-20 text-center">{CONFIG.periodo}</p>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO */}
      <main className="flex-1 overflow-y-auto">
        {!disc ? (
          <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Olá! 👋</h1>
              <p className="text-gray-500">Selecione uma disciplina na barra lateral para ver o plano de ensino completo.</p>
            </div>

            <div className="grid grid-cols-3 gap-5 mb-8">
              {disciplinas.map((d) => {
                const cor = corMap[d.cor];
                return (
                  <div key={d.id} onClick={() => setDisciplinaAtiva(d.id)}
                    className={`bg-white rounded-2xl border-2 cursor-pointer transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden group ${d.disponivel ? cor.border : "border-gray-200"}`}>
                    <div className={`${cor.bg} relative overflow-hidden h-40`}>
                      {d.imagem && (
                        <img src={d.imagem} alt={d.nome} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent to-transparent opacity-40" />
                      <div className="relative px-5 pt-5 pb-4 flex flex-col justify-between h-full">
                        <div>
                          {d.disponivel
                            ? <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-white bg-opacity-25 text-white">Disponível</span>
                            : <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-black bg-opacity-30 text-white">Em breve</span>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-4">
                      <div className="font-bold text-gray-900 text-base mb-1">{d.nome}</div>
                      <div className="text-xs text-gray-400 mb-2">{d.codigo} · {d.ch}</div>
                      <p className="text-xs text-gray-500 leading-relaxed mb-2">{d.descricao}</p>
                      {/* ✅ LINKS CLASSROOM — painel home desktop */}
                      {(d.ClassroomA || d.ClassroomB) && (
                        <div className="flex flex-col gap-1 mt-1" onClick={e => e.stopPropagation()}>
                          {d.ClassroomA && (
                            <a href={d.ClassroomA} target="_blank" rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:underline hover:text-blue-800 truncate">
                              🔗 Turma A — Acessar Classroom
                            </a>
                          )}
                          {d.ClassroomB && (
                            <a href={d.ClassroomB} target="_blank" rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:underline hover:text-blue-800 truncate">
                              🔗 Turma B — Acessar Classroom
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400">{CONFIG.modulo}</span>
                      <span className={`text-xs font-semibold ${cor.text} group-hover:underline`}>
                        {d.disponivel ? "Ver plano →" : "Em breve"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <div className="text-2xl mb-2">📅</div>
                <div className="font-semibold text-gray-800 mb-1">Período letivo</div>
                <div className="text-sm text-gray-500">{CONFIG.periodo}</div>
                <div className="text-xs text-gray-400 mt-1">{CONFIG.curso}</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <div className="text-2xl mb-2">📌</div>
                <div className="font-semibold text-gray-800 mb-1">Planos disponíveis</div>
                <div className="text-sm text-gray-500">{disciplinas.filter(d => d.disponivel).length} de {disciplinas.length} disciplinas</div>
                <div className="text-xs text-gray-400 mt-1">Os demais serão publicados em breve</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* ✅ BANNER DESKTOP com links Classroom */}
            <div className={`relative ${c.bg} text-white`}>
              {disc.imagem && <img src={disc.imagem} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
              {!disc.imagem && (
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
              )}
              <div className="relative max-w-4xl mx-auto w-full px-8 py-8">
                <div className="text-xs opacity-60 font-medium uppercase tracking-widest mb-3">{disc.codigo} · {CONFIG.modulo}</div>
                <h2 className="text-3xl font-bold mb-2">{disc.nome}</h2>
                <p className="text-white opacity-70 text-sm max-w-xl leading-relaxed">{disc.descricao}</p>
                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  <span className="text-xs bg-white bg-opacity-15 px-3 py-1 rounded-full">{disc.ch}</span>
                  <span className="text-xs bg-white bg-opacity-15 px-3 py-1 rounded-full">{CONFIG.periodo}</span>
                  {/* ✅ LINKS CLASSROOM — banner desktop */}
                  {disc.ClassroomA && (
                    <a href={disc.ClassroomA} target="_blank" rel="noopener noreferrer"
                      className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full transition-all font-semibold">
                      🔗 Turma A
                    </a>
                  )}
                  {disc.ClassroomB && (
                    <a href={disc.ClassroomB} target="_blank" rel="noopener noreferrer"
                      className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full transition-all font-semibold">
                      🔗 Turma B
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-8 max-w-4xl mx-auto w-full">
              {disc.disponivel ? <PlanoDCU /> : <PlanoEmBreve disc={disc} />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ============================================================
// LAYOUT MOBILE
// ============================================================
function MobileLayout({ disciplinaAtiva, setDisciplinaAtiva }) {
  const disc = disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc ? corMap[disc.cor] : null;

  if (disc) {
    return (
      <div className="max-w-3xl mx-auto w-full font-sans bg-gray-50 min-h-screen">
        <div className={`relative ${c.bg} text-white shadow-md`}>
          {disc.imagem && <img src={disc.imagem} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
          <div className="relative px-4 pt-5 pb-4">
            <button onClick={() => setDisciplinaAtiva(null)}
              className="flex items-center gap-1.5 text-sm text-white opacity-70 hover:opacity-100 active:opacity-100 mb-4 transition-opacity py-1 -ml-1 touch-manipulation">
              ← Voltar ao painel
            </button>
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white bg-opacity-20 flex items-center justify-center text-3xl flex-shrink-0">{disc.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs opacity-70 font-medium uppercase tracking-wide">{disc.codigo} · {CONFIG.modulo}</div>
                <div className="text-xl font-bold leading-tight">{disc.nome}</div>
                <div className="text-xs opacity-75 mt-0.5">{disc.ch} · {CONFIG.periodo}</div>
                {/* ✅ LINKS CLASSROOM — header mobile (bug corrigido: disc em vez de d) */}
                {(disc.ClassroomA || disc.ClassroomB) && (
                  <div className="mt-2 flex flex-wrap gap-2" onClick={e => e.stopPropagation()}>
                    {disc.ClassroomA && (
                      <a href={disc.ClassroomA} target="_blank" rel="noopener noreferrer"
                        className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full font-semibold transition-all">
                        🔗 Turma A
                      </a>
                    )}
                    {disc.ClassroomB && (
                      <a href={disc.ClassroomB} target="_blank" rel="noopener noreferrer"
                        className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full font-semibold transition-all">
                        🔗 Turma B
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          {disc.disponivel ? <PlanoDCU /> : <PlanoEmBreve disc={disc} />}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto font-sans bg-gray-50 min-h-screen w-full">
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {CONFIG.bannerHub && <img src={CONFIG.bannerHub} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />}
        {!CONFIG.bannerHub && <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-rose-900 opacity-80" />}
        <div className="relative px-4 py-6">
          <div className="text-xs text-white opacity-50 uppercase tracking-widest mb-1">{CONFIG.escola}</div>
          <h1 className="text-2xl font-bold">Planos de Ensino</h1>
          <p className="text-sm text-white opacity-70 mt-1">{CONFIG.curso} · {CONFIG.modulo}</p>
          <div className="mt-5 flex items-center gap-3 bg-white bg-opacity-10 rounded-2xl px-4 py-3.5 border border-white border-opacity-15 backdrop-blur-sm">
            {CONFIG.professora.foto ? (
              <img src={CONFIG.professora.foto} alt={CONFIG.professora.nome} className="w-12 h-12 rounded-full object-cover border-2 border-white border-opacity-40 flex-shrink-0" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-white border-opacity-20">👩‍🏫</div>
            )}
            <div>
              <div className="text-white font-semibold text-sm">{CONFIG.professora.nome}</div>
              <div className="text-white opacity-60 text-xs">{CONFIG.professora.titulo}</div>
              {CONFIG.professora.email && <div className="text-white opacity-50 text-xs mt-0.5">{CONFIG.professora.email}</div>}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Selecione uma disciplina</p>
        <div className="space-y-3">
          {disciplinas.map((d) => {
            const cor = corMap[d.cor];
            return (
              <div key={d.id} onClick={() => setDisciplinaAtiva(d.id)}
                className={`bg-white rounded-2xl border-2 cursor-pointer transition-all shadow-sm hover:shadow-lg active:shadow-sm overflow-hidden touch-manipulation ${d.disponivel ? cor.border : "border-gray-200"}`}>
                {d.imagem ? (
                  <div className="relative h-28 overflow-hidden">
                    <img src={d.imagem} alt={d.nome} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${cor.bg} opacity-40`} />
                    <div className="absolute top-3 left-3"><span className="text-2xl">{d.icon}</span></div>
                    {d.disponivel
                      ? <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold ${cor.badge}`}>Disponível</span>
                      : <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold bg-gray-100 text-gray-500">Em breve</span>}
                  </div>
                ) : (
                  <div className={`h-1.5 w-full ${cor.bg}`} />
                )}
                <div className="flex items-center gap-4 p-4">
                  {!d.imagem && (
                    <div className={`w-12 h-12 rounded-xl ${cor.bg} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>{d.icon}</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900 text-sm">{d.nome}</span>
                      {!d.imagem && (d.disponivel
                        ? <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${cor.badge}`}>Disponível</span>
                        : <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-gray-100 text-gray-500">Em breve</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{d.codigo} · {d.ch}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">{d.descricao}</div>
                    {/* ✅ LINKS CLASSROOM — lista mobile */}
                    {(d.ClassroomA || d.ClassroomB) && (
                      <div className="flex flex-wrap gap-2 mt-2" onClick={e => e.stopPropagation()}>
                        {d.ClassroomA && (
                          <a href={d.ClassroomA} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline font-medium">
                            🔗 Turma A
                          </a>
                        )}
                        {d.ClassroomB && (
                          <a href={d.ClassroomB} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline font-medium">
                            🔗 Turma B
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-gray-300 text-xl flex-shrink-0">›</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 mb-2">Os planos serão disponibilizados ao longo do semestre.</p>
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
export default function App() {
  const [disciplinaAtiva, setDisciplinaAtiva] = useState(null);
  return (
    <div className="font-sans">
      <div className="lg:hidden">
        <MobileLayout disciplinaAtiva={disciplinaAtiva} setDisciplinaAtiva={setDisciplinaAtiva} />
      </div>
      <div className="hidden lg:block">
        <DesktopLayout disciplinaAtiva={disciplinaAtiva} setDisciplinaAtiva={setDisciplinaAtiva} />
      </div>
    </div>
  );
}