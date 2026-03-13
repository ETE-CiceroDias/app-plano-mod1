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
  periodo: "2026–2026",
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
  { id: "dt",  codigo: "DE_233", nome: "Design Thinking",            ch: "40h", cor: "rose",   icon: "💡", disponivel: true,  imagem: dtApp, descricao: "Criar com empatia — persona, prototipação e desenvolvimento de soluções inovadoras.", ClassroomA: "https://classroom.google.com/c/Nzk0MTMxNTcxMTk4?cjc=hnuoejfx", ClassroomB: "https://classroom.google.com/c/Nzk0MTMxMTE2MDQy?cjc=k4yaddw4" },
  { id: "pi",  codigo: "DE_234", nome: "Projeto Integrador I",       ch: "80h", cor: "orange", icon: "🚀", disponivel: true,  imagem: piApp, descricao: "HTML5 + CSS3 + protótipo Figma — do portfólio individual ao projeto ODS em grupo." },
];

const corMap = {
  indigo: { bg: "bg-purple-900",  border: "border-indigo-400", badge: "bg-indigo-100 text-indigo-800", text: "text-indigo-700" },
  rose:   { bg: "bg-blue-600",    border: "border-rose-400",   badge: "bg-rose-100 text-rose-800",     text: "text-rose-700"   },
  orange: { bg: "bg-rose-500",    border: "border-orange-400", badge: "bg-orange-100 text-orange-800", text: "text-orange-700" },
  violet: { bg: "bg-violet-700",  border: "border-violet-400", badge: "bg-violet-100 text-violet-800", text: "text-violet-700" },
  red:    { bg: "bg-red-600",     border: "border-red-400",    badge: "bg-red-100 text-red-800",       text: "text-red-700"    },
  blue:   { bg: "bg-blue-700",    border: "border-blue-400",   badge: "bg-blue-100 text-blue-800",     text: "text-blue-700"   },
  pink:   { bg: "bg-pink-600",    border: "border-pink-400",   badge: "bg-pink-100 text-pink-800",     text: "text-pink-700"   },
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
  { icon:"📝", titulo:"Relatório de Marca + Análise Visual", peso:"2 pts", quando:"10 de abril — entrega via Classroom até 23h59", formato:"Individual (ou dupla/trio, com divisão de autoria marcada). PDF entregue via Classroom.", estrutura:["Pesquisa real sobre a marca — manual de marca, site institucional, materiais oficiais. Referências obrigatórias: o que foi pesquisado precisa estar citado. Nada de 'eu acho' ou respostas de IA sem fonte","A paleta de cores — quais são as cores oficiais da marca, por que essas cores fazem sentido para o público e o mercado dela. Como o contraste passa (ou não) no WCAG AA","A tipografia — quais fontes a marca usa, o que a escolha tipográfica comunica emocionalmente, como a hierarquia de texto funciona nas interfaces","Análise de 2 telas reais (site ou app) — prints anotados mostrando onde cor e tipografia impactam a percepção e a decisão do usuário. Ex: esse botão converte porque o contraste chama atenção; esse texto some porque a fonte é fina demais no mobile"], criterio:"O que vale é o raciocínio — por que essa cor, por que essa fonte, qual o impacto no usuário. Relatório sem referências de pesquisa real perde ponto automaticamente. Um relatório de 2 páginas bem argumentado com fontes vale mais que 8 páginas de achismo. Um exemplo de relatório estará disponível no Classroom.", border:"border-indigo-300", bg:"bg-indigo-50", badgeBg:"bg-indigo-600" },
  { icon:"🎯", titulo:"Desafio: UX na Prática", peso:"4 pts", quando:"Seminário de Heurísticas — 1 de junho", formato:"Individual. Documento de 1 página (análise prévia) + protótipo no Figma + pitch de 3 minutos em sala.", estrutura:["Auditoria individual de 1 heurística de Nielsen — print anotado + justificativa de severidade","Análise de pelo menos 3 elementos do Bloco 1: gramática visual, UX/design emocional, cor e tipografia ou IHC","Redesign de até 3 telas no Figma corrigindo a heurística escolhida e aplicando os demais elementos analisados","Pitch de 3 minutos em sala: antes × problema identificado × solução implementada + justificativa"], criterio:"O documento de análise prévia precisa demonstrar raciocínio técnico — não achismo. O redesign precisa responder diretamente ao problema identificado. Avaliado em DCU pelo olhar técnico de usabilidade; a mesma entrega é avaliada em DT pelo ciclo criativo e inovação.", border:"border-violet-300", bg:"bg-violet-50", badgeBg:"bg-violet-600", linkDesafio: true },
  { icon:"🚀", titulo:"Projeto Integrador — Validação DCU", peso:"4 pts", quando:"Final de junho ou julho — apresentação final do PI", formato:"Em grupo. Validação presencial no protótipo durante o pitch final do Projeto Integrador.", estrutura:["Mínimo 3 heurísticas de Nielsen aplicadas e identificáveis no protótipo — com print e justificativa no documento entregue","Coerência entre a persona definida em DT e as decisões de interface do protótipo","Pelo menos 1 elemento de acessibilidade aplicado (contraste WCAG AA, alt text, navegabilidade)","Consistência visual: cor, tipografia e hierarquia alinhadas com os princípios estudados no Bloco 1"], criterio:"A professora valida os critérios diretamente no protótipo durante a apresentação. Documento entregue via Classroom antes do evento. O mesmo projeto é avaliado em PI pela apresentação e em DT pelo processo criativo.", border:"border-teal-300", bg:"bg-teal-50", badgeBg:"bg-teal-600" },
];

const tipoInfo = {
  fixa:   { label:"Inegociável", color:"bg-blue-100 text-blue-800 border-blue-200",   desc:"Conteúdo fixo — acontece independente de qualquer imprevisto." },
  buffer: { label:"Flexível",    color:"bg-amber-100 text-amber-800 border-amber-200", desc:"Aula de reserva — pode ser usada para revisão, reposição ou aprofundamento." },
};

// ============================================================
// COMPONENTE REUTILIZÁVEL — PASSO DE AVALIAÇÃO
// ============================================================
function AvaliacaoPasso({ num, titulo, cor, children }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
      <div className={`${cor} px-4 py-2 flex items-center gap-2`}>
        <span className="w-6 h-6 rounded-full bg-white bg-opacity-25 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{num}</span>
        <span className="text-white font-semibold text-xs uppercase tracking-wide">{titulo}</span>
      </div>
      <div className="px-4 py-3">
        {children}
      </div>
    </div>
  );
}

function PlanoDCU() {
  const [expanded, setExpanded] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [activeTab, setActiveTab] = useState("aulas");

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm lg:text-base text-blue-800 leading-relaxed">
        Esta disciplina te ensina a <strong>avaliar, questionar e justificar decisões de design</strong> com base em princípios técnicos de usabilidade e interação. Não adianta o código mais perfeito se o usuário não consegue encontrar o botão de salvar.
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => setActiveTab("aulas")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab === "aulas" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
          📚 Aulas
        </button>
        <button onClick={() => setActiveTab("avaliacoes")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab === "avaliacoes" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
          📋 Avaliações
        </button>
      </div>

      {activeTab === "aulas" && (
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
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-[#FFF2DF] text-[#0B3289] border-[#0B3289]">🎓 Classroom</span>
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
                  <div className="font-bold text-base lg:text-lg">{bloco.titulo}</div>
                  <div className="mt-1 text-sm lg:text-base opacity-90 leading-relaxed">{bloco.foco}</div>
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

          {/* RESUMO DE PONTOS */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-center">
              <span className="font-bold text-indigo-800 block text-base">2 pts</span>
              <span className="text-indigo-600">Relatório de Marca</span>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 text-center">
              <span className="font-bold text-violet-800 block text-base">4 pts</span>
              <span className="text-violet-600">Desafio UX</span>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-center">
              <span className="font-bold text-teal-800 block text-base">4 pts</span>
              <span className="text-teal-600">Projeto ODS</span>
            </div>
          </div>

          {/* AVALIAÇÃO 1: RELATÓRIO DE MARCA */}
          <div className="border-2 border-indigo-200 rounded-2xl overflow-hidden">
            <div className="bg-indigo-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">📝</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Relatório de Marca + Análise Visual</span>
                <span className="ml-2 text-xs bg-white text-indigo-700 font-bold px-2 py-0.5 rounded-full">2 pts</span>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-indigo-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">10 de abril — entrega via Classroom até 23h59</p></div>
                <div className="bg-white rounded-lg p-2 border border-indigo-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual (ou dupla/trio). PDF entregue via Classroom.</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-indigo-800 mb-2">O que será avaliado</p>
                <ul className="space-y-1.5">
                  {[
                    "Pesquisa real sobre a marca — manual de marca, site institucional, materiais oficiais. Referências obrigatórias, sem 'eu acho' ou respostas de IA sem fonte.",
                    "Paleta de cores — cores oficiais, psicologia das cores, por que fazem sentido para o público. Teste de contraste WCAG AA.",
                    "Tipografia — fontes da marca, o que a escolha comunica emocionalmente, como a hierarquia de texto funciona nas interfaces.",
                    "Análise de 2 telas reais (site ou app) — prints anotados mostrando onde cor e tipografia impactam a percepção e decisão do usuário.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                      <span className="text-xs text-indigo-800 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 bg-white border border-indigo-200 rounded-lg text-xs text-indigo-700">
                <p className="font-semibold mb-1">🎯 Critério de avaliação</p>
                <p className="leading-relaxed">O que vale é o <strong>raciocínio</strong> — por que essa cor, por que essa fonte, qual o impacto no usuário. Relatório sem referências perde ponto automaticamente. 2 páginas bem argumentadas valem mais que 8 páginas de achismo.</p>
              </div>
            </div>
          </div>

          {/* AVALIAÇÃO 2: DESAFIO UX */}
          <div className="border-2 border-violet-200 rounded-2xl overflow-hidden">
            <div className="bg-violet-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Desafio: UX na Prática</span>
                <span className="ml-2 text-xs bg-white text-violet-700 font-bold px-2 py-0.5 rounded-full">4 pts</span>
              </div>
            </div>
            <div className="bg-violet-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-violet-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Seminário de Heurísticas — 1 de junho</p></div>
                <div className="bg-white rounded-lg p-2 border border-violet-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual. Doc 1 página + protótipo Figma + pitch 3 min.</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-violet-800 mb-2">Critérios em DCU</p>
                <div className="space-y-2">
                  {[
                    { titulo: "Auditoria heurística", pts: "1,5 pts", desc: "Identificou e justificou corretamente a heurística quebrada — print anotado, severidade classificada (cosmética, grave ou catastrófica) e impacto no usuário explicado." },
                    { titulo: "Análise do Bloco 1", pts: "1 pt", desc: "Pelo menos 3 elementos analisados com raciocínio técnico: Gestalt, UX/design emocional, cor e tipografia ou IHC." },
                    { titulo: "Redesign com critério DCU", pts: "1,5 pts", desc: "O protótipo corrige a heurística de forma visível e aplica os princípios analisados. Redesign que adiciona ruído visual (viola H8) ou ignora o problema identificado não pontua." },
                  ].map((c, i) => (
                    <div key={i} className="bg-white border border-violet-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-violet-800 flex-1">{c.titulo}</span>
                        <span className="text-xs bg-violet-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.pts}</span>
                      </div>
                      <p className="text-xs text-violet-700 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700">
                <p className="font-semibold">💡 Esta mesma entrega também vale 4 pts em DT</p>
                <p className="mt-0.5 leading-relaxed">Em DT a avaliação foca no ciclo criativo: qualidade da persona, POV com insight genuíno e caráter de inovação da solução.</p>
              </div>
            </div>
          </div>

          {/* AVALIAÇÃO 2: PROJETO ODS */}
          <div className="border-2 border-teal-200 rounded-2xl overflow-hidden">
            <div className="bg-teal-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Projeto Integrador — Validação DCU</span>
                <span className="ml-2 text-xs bg-white text-teal-700 font-bold px-2 py-0.5 rounded-full">4 pts</span>
              </div>
            </div>
            <div className="bg-teal-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-teal-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Final de junho ou julho — apresentação final do PI</p></div>
                <div className="bg-white rounded-lg p-2 border border-teal-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Em grupo. Validação presencial no protótipo durante o pitch do PI.</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-teal-800 mb-2">O que a professora valida ao vivo no protótipo</p>
                <div className="space-y-2">
                  {[
                    { titulo: "Heurísticas de Nielsen aplicadas", pts: "1,5 pts", desc: "Mínimo 3 heurísticas identificáveis no protótipo — com print e justificativa no documento entregue. Não basta aplicar: precisa estar documentado." },
                    { titulo: "Acessibilidade", pts: "0,5 pt", desc: "Pelo menos 1 elemento aplicado: contraste WCAG AA (mínimo 4,5:1 para texto), alt text em imagens, navegabilidade lógica." },
                    { titulo: "Coerência com a persona (DT)", pts: "1 pt", desc: "As decisões de interface respondem à dor da persona definida em DT. Interface que ignora a persona perde este critério." },
                    { titulo: "Consistência visual", pts: "1 pt", desc: "Cor, tipografia e hierarquia alinhadas com os princípios do Bloco 1. Gramática visual aplicada: Gestalt, contraste, espaçamento consistente." },
                  ].map((c, i) => (
                    <div key={i} className="bg-white border border-teal-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-teal-800 flex-1">{c.titulo}</span>
                        <span className="text-xs bg-teal-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.pts}</span>
                      </div>
                      <p className="text-xs text-teal-700 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-white border border-teal-200 rounded-xl text-xs">
                <p className="font-semibold text-teal-800 mb-2">🔗 O mesmo projeto, avaliado de ângulos diferentes</p>
                <div className="space-y-1.5">
                  {[
                    { badge:"DCU · 4pts", bg:"bg-teal-600",   desc:"Usabilidade: heurísticas, acessibilidade, coerência com persona, consistência visual." },
                    { badge:"DT · 6pts",  bg:"bg-rose-600",   desc:"Processo criativo: imersão, persona, ideação, storytelling no pitch." },
                    { badge:"PI · 8pts",  bg:"bg-red-600",    desc:"Processo ágil (Trello) + apresentação + documentos + protótipo alta fidelidade." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className={`${item.bg} text-white px-2 py-0.5 rounded-full font-bold text-xs flex-shrink-0`}>{item.badge}</span>
                      <span className="text-gray-600 leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-white border border-teal-200 rounded-lg text-xs text-teal-700">
                <p className="font-semibold mb-1">🎯 Como funciona a validação</p>
                <p className="leading-relaxed">A professora valida os critérios <strong>diretamente no protótipo durante a apresentação</strong>. O documento com prints e justificativas das heurísticas deve ser entregue via Classroom antes do evento. Documento não entregue = heurísticas não avaliadas.</p>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

// ============================================================
// DESAFIO: UX NA PRÁTICA
// ============================================================
function DesafioExtra() {
  const [expanded, setExpanded] = useState(null);

  const behanceLinks = [
    { titulo: "Crains Dental — Website Redesign", url: "https://www.behance.net/gallery/240478319/Crains-Dental-Website-Redesign-UIUX-Case-Study", tag: "Website · Case Study" },
    { titulo: "Kluvos — Website Redesign", url: "https://www.behance.net/gallery/222008209/Kluvos-Website-Redesign-UIUX", tag: "Website · UX/UI" },
    { titulo: "Church — WordPress Redesign", url: "https://www.behance.net/gallery/244956261/Wordpress-Redesign-Website-For-Church-Christian", tag: "Website · WordPress" },
    { titulo: "Elmenus — Mobile Redesign (Case Study)", url: "https://www.behance.net/gallery/243674717/Elmenus-Redesign-(Case-Study)", tag: "Mobile · Case Study" },
    { titulo: "PicPay — Redesign UI/UX", url: "https://www.behance.net/gallery/140277317/Redesign-PicPay", tag: "Mobile · Fintech" },
    { titulo: "PicPay — App Concept & Moodboard", url: "https://www.behance.net/gallery/92366983/PicPay-App-Concept-Redesign", tag: "Mobile · Concept" },
    { titulo: "PicPay Store — Reestruturação UI/UX", url: "https://www.behance.net/gallery/136528169/UI-UX-Reestruturando-o-PicPay-Store", tag: "Mobile · E-commerce" },
    { titulo: "PicPay — Redesign UI/UX 2024", url: "https://www.behance.net/gallery/204545025/PicPay-Redesign-UIUX", tag: "Mobile · Fintech" },
  ];

  const passos = [
    { num: "01", icon: "🔍", titulo: "Escolha o produto e audite", cor: "bg-indigo-600",
      desc: "Escolha um site ou app real — pode ser o mesmo do grupo de DCU ou outro de sua preferência.",
      items: ["Identifique pelo menos 1 heurística de Nielsen quebrada — print anotado + justificativa de severidade (cosmética, grave ou catastrófica)","Analise pelo menos 3 elementos do Bloco 1 de DCU: gramática visual (Gestalt), UX/design emocional, cor e tipografia ou IHC","Registre tudo em um documento de 1 página entregue antes do pitch"] },
    { num: "02", icon: "🧠", titulo: "Aplique o ciclo DT", cor: "bg-violet-600",
      desc: "Use o processo de Design Thinking para construir a sua proposta de solução.",
      items: ["Defina a persona impactada pelo problema — quem é, o que sente, por que sofre com essa interface","Escreva o POV: '[Usuário] precisa de [necessidade] porque [insight]'","Gere ideias e escolha a direção — documente o raciocínio, não só a solução final","Caráter de inovação: a solução precisa ir além do óbvio — surpreenda"] },
    { num: "03", icon: "🎨", titulo: "Redesign no Figma", cor: "bg-teal-600",
      desc: "Prototipe a sua solução — até 3 telas, média ou alta fidelidade.",
      items: ["Corrija a heurística escolhida de forma visível e justificada no protótipo","Aplique os demais elementos analisados: hierarquia visual, cor, tipografia, affordances","Não precisa redesenhar o produto inteiro — foco no fluxo ou tela que você identificou como problema"] },
    { num: "04", icon: "🎤", titulo: "Pitch de 3 minutos", cor: "bg-rose-500",
      desc: "Apresente em sala em 3 minutos objetivos — sem slide, só o projeto.",
      items: ["Antes: mostre como era a interface original","Problema: qual heurística foi violada, qual o impacto no usuário","Depois: navegue pelo redesign e justifique as decisões de design"] },
    { num: "05", icon: "💼", titulo: "LinkedIn (opcional)", cor: "bg-gray-500",
      desc: "Não é obrigatório — mas é a sua vitrine profissional. Quem postar mostra para o mercado que sabe pensar como designer.",
      items: ["Publique o antes × depois com o raciocínio por trás do redesign","Contextualize: este projeto faz parte das disciplinas de DCU e DT do curso de DS da ETE Cícero Dias","Marque: @ETE Cícero Dias · @Samara Sabino · #UXnaPraticaETECD"] },
  ];

  const criteriosDCU = [
    { titulo: "Auditoria heurística", peso: "1,5 pts", desc: "Identificou e justificou corretamente a heurística quebrada — print anotado, severidade classificada e impacto no usuário explicado." },
    { titulo: "Análise do Bloco 1", peso: "1 pt", desc: "Pelo menos 3 elementos do Bloco 1 analisados com raciocínio técnico: Gestalt, UX/design emocional, cor e tipografia ou IHC." },
    { titulo: "Redesign com critério DCU", peso: "1,5 pts", desc: "O protótipo corrige a heurística de forma visível e aplica os princípios analisados. Redesign que adiciona ruído visual (viola H8) ou ignora o problema identificado não pontua." },
  ];

  const criteriosDT = [
    { titulo: "Ciclo DT documentado", peso: "1,5 pts", desc: "Persona com dor real, POV com insight genuíno, ideação documentada. Persona genérica ou POV óbvio zera este critério." },
    { titulo: "Caráter de inovação", peso: "1 pt", desc: "A solução vai além do óbvio. Não é só corrigir o que estava errado — é propor algo que surpreende e que faz sentido para o usuário." },
    { titulo: "Pitch", peso: "1,5 pts", desc: "3 minutos claros e objetivos. Antes → problema → solução com justificativa. Quem não consegue explicar em 3 minutos não dominou o projeto." },
  ];

  return (
    <div>
      {/* HERO */}
      <div className="mb-4 p-4 bg-gradient-to-r from-[#eef2ff] to-[#fdf4ff] border-2 border-[#6366f1] rounded-xl">
        <div className="flex items-start gap-3">
          <div className="text-3xl">🎯</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-bold text-gray-900 text-base">Desafio: UX na Prática</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-violet-600 text-white">4 pts em DT</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-indigo-600 text-white">4 pts em DCU</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Um projeto individual que conta nota em duas disciplinas — com critérios diferentes em cada uma. Em <strong>DCU</strong> você é avaliado pelo olhar técnico de usabilidade e heurísticas. Em <strong>DT</strong> pelo ciclo criativo, qualidade da persona e nível de inovação.
            </p>
          </div>
        </div>
      </div>

      {/* CONEXÃO ENTRE DISCIPLINAS */}
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-bold text-indigo-800">🎯 Em DCU</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-600 text-white font-bold">4 pts</span>
          </div>
          <p className="text-xs text-indigo-700 leading-relaxed">Avaliado pela <strong>qualidade técnica</strong>: a heurística foi identificada corretamente? O redesign corrige o problema? Os elementos do Bloco 1 estão aplicados com critério?</p>
          <p className="text-xs text-indigo-500 mt-2 font-medium">Relatório de Marca (2pts) + Desafio (4pts) + PI (4pts) = 10pts</p>
        </div>
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-bold text-rose-800">💡 Em DT</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-rose-600 text-white font-bold">4 pts</span>
          </div>
          <p className="text-xs text-rose-700 leading-relaxed">Avaliado pelo <strong>processo criativo</strong>: a persona tem uma dor real? O POV tem insight genuíno? A solução inova? O pitch comunica com clareza em 3 minutos?</p>
          <p className="text-xs text-rose-500 mt-2 font-medium">Persona (2pts) + Desafio (4pts) + ODS (6pts) = 10pts</p>
        </div>
      </div>

      {/* PASSOS */}
      <div className="space-y-2 mb-5">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider px-1">O desafio passo a passo</p>
        {passos.map((p) => {
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
                  <ul className="space-y-2 mt-2">
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

      {/* CRITÉRIOS POR DISCIPLINA */}
      <div className="mb-5 space-y-3">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider px-1">Como é avaliado em cada disciplina</p>

        <div className="border-2 border-indigo-200 rounded-xl overflow-hidden">
          <div className="bg-indigo-600 px-4 py-2 flex items-center gap-2">
            <span className="text-white font-bold text-sm">🎯 Critérios de DCU</span>
            <span className="text-xs bg-white text-indigo-700 font-bold px-2 py-0.5 rounded-full ml-auto">4 pts</span>
          </div>
          <div className="divide-y divide-indigo-100">
            {criteriosDCU.map((c, i) => (
              <div key={i} className="px-4 py-3 bg-indigo-50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-indigo-800">{c.titulo}</span>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold ml-auto">{c.peso}</span>
                </div>
                <p className="text-xs text-indigo-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-rose-200 rounded-xl overflow-hidden">
          <div className="bg-rose-600 px-4 py-2 flex items-center gap-2">
            <span className="text-white font-bold text-sm">💡 Critérios de DT</span>
            <span className="text-xs bg-white text-rose-700 font-bold px-2 py-0.5 rounded-full ml-auto">4 pts</span>
          </div>
          <div className="divide-y divide-rose-100">
            {criteriosDT.map((c, i) => (
              <div key={i} className="px-4 py-3 bg-rose-50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-rose-800">{c.titulo}</span>
                  <span className="text-xs bg-rose-600 text-white px-2 py-0.5 rounded-full font-bold ml-auto">{c.peso}</span>
                </div>
                <p className="text-xs text-rose-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXEMPLOS DE REDESIGN — BEHANCE */}
      <div className="mb-5">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider px-1 mb-3">Exemplos de redesign para se inspirar</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {behanceLinks.map((b, i) => (
            <a key={i} href={b.url} target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all group touch-manipulation">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">Be</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-800 leading-tight group-hover:text-indigo-700 transition-colors">{b.titulo}</p>
                <p className="text-xs text-gray-400 mt-0.5">{b.tag}</p>
              </div>
              <span className="text-gray-300 group-hover:text-indigo-400 transition-colors text-sm flex-shrink-0">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* TIMING */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600">
        <div className="flex items-start gap-2">
          <span className="text-lg">🗓️</span>
          <div>
            <p className="font-semibold text-gray-800 mb-1">Quando acontece?</p>
            <p className="text-xs leading-relaxed">O desafio é lançado após o <strong>Seminário de Heurísticas de DCU</strong> (1 de junho). O pitch de 3 minutos acontece em sala na <strong>semana de 18 a 22 de maio</strong> em DT. O documento de análise e o protótipo no Figma são entregues via Classroom no prazo informado pela professora.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DADOS — DESIGN THINKING (DE_233)
// ============================================================
const dtBlocos = [
  { id: 1, label: "BLOCO 1", titulo: "Fundamentos do DT: Pilares e Processos", periodo: "Março – Abril", color: "bg-rose-600", foco: "Apresentar o Design Thinking dentro de um contexto maior de inovação. A turma compreende os tipos de inovação, os pilares e o processo completo do DT — e ao longo das aulas vai construindo uma persona individual que é a entrega avaliativa do bloco." },
  { id: 2, label: "BLOCO 2", titulo: "Figma Progressivo — Do Wireframe ao Protótipo", periodo: "Maio – Junho", color: "bg-pink-600", foco: "Aprender Figma do zero ao protótipo interativo através de um exercício individual progressivo — a loja Delicatte Confeitaria. Os alunos acompanham a professora passo a passo, evoluindo de wireframe em preto e branco até um protótipo navegável com imagens reais." },
  { id: 3, label: "BLOCO 3", titulo: "Processos Avançados do DT + Storytelling + Seminários", periodo: "Junho – Julho", color: "bg-rose-800", foco: "Completar o ciclo do DT com as etapas de Teste e Iteração. Introduzir metodologias ágeis e storytelling como ferramentas complementares. Aprofundar temas relevantes do DT em aulas temáticas e fechar com os seminários e o projeto ODS." },
];

const dtAulas = [
  // BLOCO 1
  { bloco:1, num:1,  titulo:"Inovação e Design Thinking — Contexto, Tipos e Pilares", tipo:"fixa", entrega:null, asynch:"Sala invertida: vídeo 'O que é Design Thinking?' do canal Noz Design (YouTube, ~8 min). Postar no Classroom antes da aula.", desc:"Apresentação do plano da disciplina e forma de avaliação. O que é inovação e por que ela importa no contexto de desenvolvimento de sistemas. Tipos de inovação: disruptiva, radical e incremental. Os 3 pilares do DT: Empatia, Colaboração e Experimentação. Dinâmica de abertura: cada aluno desenha uma carteira/mochila ideal em 1 minuto, depois entrevista o colega sobre como usa a de verdade — e redesenha com base no que aprendeu." },
  { bloco:1, num:2,  titulo:"Pilares do DT — Empatia, Colaboração e Experimentação", tipo:"fixa", entrega:null, asynch:null, desc:"Aprofundamento dos 3 pilares. Empatia: diferença entre empatia e simpatia, técnicas de imersão — observação, entrevista em profundidade, shadowing. Colaboração: como equipes multidisciplinares geram soluções mais criativas. Experimentação: o custo do erro diminui quando testamos cedo. Início do mini-projeto guiado: apresentação do contexto do projeto coletivo que a turma vai desenvolver ao longo do bloco." },
  { bloco:1, num:3,  titulo:"(Etapa 1) Imersão — Pesquisa, Matriz de Alinhamento e Matriz CSD", tipo:"fixa", entrega:null, asynch:null, desc:"O que é a etapa de Imersão no DT — entender o problema antes de resolver. Ferramentas: pesquisa desk (quando e como usar pesquisa secundária de qualidade), entrevistas e observação. Matriz CSD: Certezas, Suposições e Dúvidas. Construção coletiva no projeto guiado: a professora conduz e a turma constrói a Matriz CSD do projeto no quadro. Conexão com ODS: o problema a ser definido precisa estar relacionado com uma ODS." },
  { bloco:1, num:4,  titulo:"(Etapa 2) Definição — Persona, Mapa de Empatia e Ponto de Vista", tipo:"fixa", entrega:null, asynch:null, desc:"O que é a etapa de Definição — transformar o que foi pesquisado em um problema claro. Persona: o que é, para que serve e como construir uma (nome, contexto, dores, desejos, comportamentos). Mapa de empatia. POV (Point of View): '[Usuário] precisa de [necessidade] porque [insight]'. Construção coletiva: a turma escreve 3 POVs diferentes a partir do mapa de empatia e escolhe o mais forte." },
  { bloco:1, num:5,  titulo:"(Etapa 3) Ideação — Brainstorming e Geração de Ideias", tipo:"fixa", entrega:null, asynch:"Recurso: cena do filme 'Joy' (2015) onde a protagonista tem o insight do mop — 3 min que mostram como uma ideia surge de observar um problema real. Postar no Classroom.", desc:"O que é a etapa de Ideação — divergir antes de convergir. Regras do brainstorming eficaz: quantidade antes de qualidade, nenhuma ideia é ruim, construir sobre a ideia do outro. Técnicas: brainwriting, SCAMPER, 'e se...?'. Sessão de brainstorming coletivo: a turma gera ideias para o POV definido na aula 04. Meta mínima de 20 ideias." },
  { bloco:1, num:6,  titulo:"(Etapa 4) Prototipação — O que é, Tipos e Dinâmica em Papel", tipo:"fixa", entrega:{ label:"📝 Frame com Persona Visual no Figma — 2pts", detail:"Entrega individual via Classroom. A persona deve ter nome, foto (Unsplash ou ícone), contexto, dores, desejos e POV." }, asynch:"Sala invertida: vídeo 'Figma for Beginners' (Figma oficial, YouTube). Postar no Classroom antes desta aula.", desc:"O que é prototipagem no DT e por que prototipar cedo. Os três tipos: papel (baixíssima fidelidade), digital (média/alta fidelidade) e físico. Dinâmica: cada aluno protótipa em papel uma tela do projeto guiado — esboço rápido, sem capricho, foco na estrutura. A dinâmica de papel é intencional: quem não tem medo de fazer feio no papel, não trava no Figma." },
  // BLOCO 2
  { bloco:2, num:7,  titulo:"Prototipação de Baixo Nível (Parte 1)", tipo:"fixa", entrega:null, asynch:null, desc:"O que é prototipagem de baixa fidelidade e por que começar assim. No Figma: criar conta, criar novo arquivo, configurar frame mobile (390×844px — iPhone 14). Conhecer a interface: layers, frames, ferramentas básicas. Exercício Delicatte: criar os 4 frames — Login, Home, Produto, Carrinho. Tela de Login: logo placeholder, campos de e-mail e senha, botão entrar. Tudo em preto/branco/cinza." },
  { bloco:2, num:8,  titulo:"Prototipação de Baixo Nível (Parte 2)", tipo:"fixa", entrega:null, asynch:null, desc:"Recapitulação: cada aluno deve ter os 4 frames criados. Completar e refinar os 4 frames. Home: grid de produtos 2×2 com retângulos placeholders, barra de busca, cabeçalho com nome da loja. Produto: imagem placeholder, nome, preço, botão. Carrinho: lista de itens, subtotal, botão finalizar. Texto e estrutura bem definidos — sem cor ainda." },
  { bloco:2, num:9,  titulo:"Prototipação de Médio Nível (Parte 1)", tipo:"fixa", entrega:null, asynch:null, desc:"O que muda da baixa para a média fidelidade: entrada das cores, tipografia e ícones reais. Paleta da Delicatte: vinho #860120 (botões e destaque), rosa claro #fad1da (fundo de cards), creme #fffbef (background geral), verde oliva #828f58 (tags e badges). Aplicar as cores da paleta nas 4 telas seguindo a professora." },
  { bloco:2, num:10, titulo:"Prototipação de Médio Nível (Parte 2)", tipo:"fixa", entrega:null, asynch:null, desc:"Recapitulação das cores aplicadas. Conceito de componente no Figma: um elemento criado uma vez e reutilizado em várias telas. Criar a nav bar como componente: fundo branco, 4 ícones usando Iconify. Finalizar detalhes visuais de média fidelidade nas 4 telas." },
  { bloco:2, num:11, titulo:"Prototipação de Alto Nível (Parte 1)", tipo:"fixa", entrega:null, asynch:null, desc:"O que muda da média para a alta fidelidade: imagens reais, sombras, arredondamento refinado, espaçamento preciso. Plugin Unsplash no Figma: como buscar e inserir fotos reais. Substituir os retângulos placeholder por imagens reais de doces, bolos e tortas para os produtos; foto de ambiente para o banner da Home." },
  { bloco:2, num:12, titulo:"Alta Fidelidade Parte 2 — Refinamento Final", tipo:"fixa", entrega:null, asynch:null, desc:"Revisar o que cada aluno tem até agora. Detalhes finais que elevam o nível: tipografia com hierarquia clara (título 24px bold, subtexto 14px regular, preço 18px bold), sombras sutis nos cards, espaçamento preciso. Refinamento completo das 4 telas. Duas telas excelentes valem mais que quatro medianas." },
  { bloco:2, num:13, titulo:"Prototype — Conectando as Telas + Entrega", tipo:"fixa", entrega:{ label:"🎨 Protótipo Interativo Delicatte — 1pt", detail:"Entrega individual via Classroom. Link do protótipo interativo com mínimo 3 telas conectadas, enviado via Classroom até o final da aula." }, asynch:null, desc:"O que é o modo Prototype no Figma: criar conexões entre telas simulando o comportamento de um app real. Conectar as 4 telas: botão 'Entrar' do Login → Home; card de produto da Home → tela Produto; botão 'Adicionar ao Carrinho' → Carrinho. O que não pode faltar: link compartilhado com permissão de visualização." },
  // BLOCO 3
  { bloco:3, num:14, titulo:"(Etapa 5) Testar — Validação e Feedback Real", tipo:"fixa", entrega:null, asynch:null, desc:"O que é testar no DT — não é apresentar, é aprender. Como conduzir um teste rápido com o protótipo: o usuário usa, você observa. O que anotar: onde hesitou, onde clicou errado, o que perguntou. Simulação de teste coletivo: a turma 'testa' o protótipo em papel da aula 06 com colegas de outra equipe. Resistam à tentação de explicar — o erro do usuário é a informação mais valiosa." },
  { bloco:3, num:15, titulo:"Iteração, Metodologia Ágil e Product Backlog", tipo:"fixa", entrega:null, asynch:null, desc:"O que é iteração no DT — voltar e melhorar com base no aprendizado do teste. O ciclo do DT não é linear, é um espiral. Como priorizar o que mudar: crítico vs. cosmético. Introdução ao Product Backlog: como organizar e priorizar funcionalidades. Construção coletiva: a turma lista as funcionalidades do projeto, prioriza com a professora e cria um backlog simplificado." },
  { bloco:3, num:16, titulo:"Storytelling e Pitch — Comunicar para Convencer", tipo:"fixa", entrega:null, asynch:"TED Talk 'How to pitch a brilliant idea' de Kimberly Elsbach (YouTube, ~15 min). Postar no Classroom antes como sala invertida.", desc:"O que é storytelling no DT — contar a história do usuário, não da solução. Estrutura de pitch eficaz: o problema (quem sofre e por quê), a solução (o que você criou), a evidência (o que você testou), o próximo passo. Prática em duplas: cada aluno tem 2 minutos para fazer o pitch do projeto guiado para o colega." },
  { bloco:3, num:17, titulo:"O Papel da Colaboração Interdisciplinar no DT", tipo:"fixa", entrega:null, asynch:null, desc:"Como equipes multidisciplinares geram soluções mais criativas e completas do que grupos homogêneos. O papel de cada perfil no processo. Dinâmica de perspectivas: a turma analisa o projeto guiado sob diferentes ângulos — o que um engenheiro priorizaria? E alguém de marketing? E o usuário final? Ajustes finais no projeto ODS de cada grupo." },
  { bloco:3, num:"18–19", titulo:"Seminários Temáticos (Partes 1 e 2)", tipo:"fixa", entrega:{ label:"🎤 Seminário Temático — 2pts", detail:"15 min de apresentação + 5 min de debate. Slides com casos reais obrigatórios. Temas: cases de DT, empatia como ferramenta, prototipagem rápida, design inclusivo, falhar rápido, DT no setor público, DT no cotidiano." }, asynch:null, desc:"Cada grupo apresenta o seminário temático: 15 min de apresentação com casos reais visuais + 5 min de debate. Avaliação: clareza, uso de exemplos reais, conexão com DT. Temas sorteados: cases de inovação, pitch e storytelling, inovação social e ODS, empatia como ferramenta de negócios, prototipagem rápida, falhar rápido, design inclusivo." },
  { bloco:3, num:20, titulo:"Ajustes Finais no Projeto ODS / Retrospectiva", tipo:"buffer", entrega:null, asynch:null, desc:"Se ocorrer antes do evento final: cada grupo trabalha no Figma do projeto ODS com orientação individual da professora. Foco: coerência visual com a persona, fluxo de 3 telas funcionando no prototype, identidade visual consistente. Se ocorrer depois do evento: retrospectiva — O que aprendi sobre DT que vou usar na vida? Qual etapa foi mais difícil? O que mudaria no projeto se recomeçasse?" },
];

const dtAvaliacoes = [
  { icon:"🧑‍🎨", titulo:"Frame com Persona Visual no Figma", peso:"2 pts", quando:"Bloco 1 — entrega até 23h59 após a aula 06", formato:"Individual. Link do frame no Figma enviado via Classroom.", estrutura:["Nome, foto (Unsplash ou ícone), idade e contexto de vida","Dores e desejos — mínimo 2 de cada","POV (Point of View) completo: '[Usuário] precisa de [necessidade] porque [insight]'","Cuidado visual: hierarquia de texto, espaçamento e organização do frame"], criterio:"Qualidade do insight no POV — a necessidade precisa ser real, não óbvia. Persona que parece uma ficha de RH sem tensão zera o critério de insight.", border:"border-rose-300", bg:"bg-rose-50", badgeBg:"bg-rose-600" },
  { icon:"🎯", titulo:"Desafio: UX na Prática", peso:"4 pts", quando:"Pitch em sala — semana de 18 a 22 de maio", formato:"Individual. Documento de análise + protótipo no Figma (até 3 telas) + pitch de 3 minutos em sala.", estrutura:["Persona da pessoa impactada pelo problema de UX identificado","POV e ciclo DT documentado: problema, definição, ideação e decisões de design","Protótipo de redesign no Figma — até 3 telas, corrigindo a heurística escolhida","Pitch de 3 minutos em sala: antes × problema × solução + justificativa","Caráter de inovação: a solução vai além do óbvio — não é só corrigir, é surpreender"], criterio:"Avaliado em DT pelo ciclo criativo, qualidade da persona, coerência entre problema e solução, e nível de inovação da proposta. A mesma entrega é avaliada em DCU pelo olhar técnico de heurísticas e usabilidade.", border:"border-pink-300", bg:"bg-pink-50", badgeBg:"bg-pink-600", linkDesafio: true },
  { icon:"🚀", titulo:"Projeto Final ODS", peso:"6 pts", quando:"Final de junho ou julho — evento final do PI", formato:"Em grupo. Pitch de 7 minutos ao vivo no Figma. Mesmos grupos do PI e DCU.", estrutura:["Persona consistente com a pesquisa de imersão realizada","Processo criativo documentado: imersão, definição, ideação e prototipação","Protótipo no Figma: mínimo 3 telas navegáveis com fluxo funcional no modo Prototype","Pitch ao vivo — problema, usuário, solução, próximo passo"], criterio:"O que diferencia um projeto nota 6 de um projeto nota 4 é a qualidade do insight — a persona precisa ter uma dor real e específica, e a solução precisa responder a essa dor de forma direta e inovadora. O mesmo projeto é avaliado em PI pela apresentação e em DCU pela qualidade de usabilidade.", border:"border-orange-300", bg:"bg-orange-50", badgeBg:"bg-orange-600" },
];

// ============================================================
// COMPONENTE — PLANO DT
// ============================================================
function PlanoDT() {
  const [expanded, setExpanded] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [activeTab, setActiveTab] = useState("aulas");

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-rose-50 border border-rose-200 rounded-xl text-sm lg:text-base text-rose-800 leading-relaxed">
        Esta disciplina te ensina a <strong>criar com empatia</strong> — entender o problema antes de construir a solução. Você vai sair daqui sabendo conduzir imersões, construir personas, prototipar no Figma e defender uma ideia em pitch ao vivo.
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => setActiveTab("aulas")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab === "aulas" ? "bg-rose-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
          📚 Aulas
        </button>
        <button onClick={() => setActiveTab("avaliacoes")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab === "avaliacoes" ? "bg-rose-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
          📋 Avaliações
        </button>
      </div>

      {activeTab === "aulas" && (
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
                <span className="text-xs text-gray-600">Aula com atividade avaliativa.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs px-2 py-0.5 rounded border font-medium flex-shrink-0 bg-[#FFF2DF] text-[#0B3289] border-[#0B3289]">🎓 Classroom</span>
                <span className="text-xs text-gray-600">Material complementar no Classroom — leitura ou vídeo para fazer antes ou depois da aula.</span>
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
                      className={`rounded-xl border cursor-pointer transition-all mb-1 shadow-sm touch-manipulation ${aula.tipo === "buffer" ? "border-amber-200 bg-amber-50" : "border-gray-200 bg-white hover:border-gray-300 active:bg-gray-50"}`}>
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

          {/* RESUMO DE PONTOS */}
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

          {/* AVALIAÇÃO 1: DESAFIO UX */}
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
                <div className="bg-white rounded-lg p-2 border border-pink-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual. Doc análise + Figma (até 3 telas) + pitch 3 min.</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-pink-800 mb-2">Critérios em DT</p>
                <div className="space-y-2">
                  {[
                    { titulo: "Ciclo DT documentado", pts: "1,5 pts", desc: "Persona com dor real, POV com insight genuíno, ideação documentada com pelo menos 3 ideias antes da escolha final. Persona genérica ou POV óbvio zera este critério." },
                    { titulo: "Caráter de inovação", pts: "1 pt", desc: "A solução vai além do óbvio. Não é só corrigir o que estava errado — é propor algo que surpreende e faz sentido para o usuário real." },
                    { titulo: "Pitch de 3 minutos", pts: "1,5 pts", desc: "Antes → problema → solução com justificativa. 3 minutos claros e objetivos. Quem não consegue explicar em 3 minutos não dominou o projeto." },
                  ].map((c, i) => (
                    <div key={i} className="bg-white border border-pink-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-pink-800 flex-1">{c.titulo}</span>
                        <span className="text-xs bg-pink-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.pts}</span>
                      </div>
                      <p className="text-xs text-pink-700 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-2.5 bg-indigo-50 border border-indigo-200 rounded-lg text-xs text-indigo-700">
                <p className="font-semibold">🎯 Esta mesma entrega também vale 4 pts em DCU</p>
                <p className="mt-0.5 leading-relaxed">Em DCU a avaliação foca na qualidade técnica: heurística identificada corretamente, redesign com critério de usabilidade, elementos do Bloco 1 aplicados.</p>
              </div>
            </div>
          </div>

          {/* AVALIAÇÃO 3: PROJETO ODS */}
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
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Final de junho ou julho — evento final do PI</p></div>
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Em grupo. Pitch 7 min ao vivo no Figma. Mesmos grupos do PI e DCU.</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-orange-800 mb-2">O que é avaliado em DT</p>
                <div className="space-y-2">
                  {[
                    { titulo: "Qualidade da persona e imersão", pts: "2 pts", desc: "A persona precisa ter uma dor real e específica, sustentada por pesquisa de campo (entrevista ou observação). Persona inventada sem pesquisa real zera este critério." },
                    { titulo: "Processo criativo documentado", pts: "2 pts", desc: "Todas as etapas do DT documentadas: imersão (matriz CSD, pesquisa), definição (POV, mapa de empatia), ideação (brainstorming, pelo menos 3 ideias) e prototipação." },
                    { titulo: "Storytelling no pitch", pts: "2 pts", desc: "O pitch precisa contar a história do usuário — não da solução. Estrutura: contexto do ODS → quem é a persona → qual é a dor → como a solução resolve → próximo passo." },
                  ].map((c, i) => (
                    <div key={i} className="bg-white border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-orange-800 flex-1">{c.titulo}</span>
                        <span className="text-xs bg-orange-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.pts}</span>
                      </div>
                      <p className="text-xs text-orange-700 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-white border border-orange-200 rounded-xl text-xs">
                <p className="font-semibold text-orange-800 mb-2">🔗 O mesmo projeto, avaliado de ângulos diferentes</p>
                <div className="space-y-1.5">
                  {[
                    { badge:"DT · 6pts",  bg:"bg-rose-600",   desc:"Processo criativo: persona real, imersão documentada, ideação, storytelling." },
                    { badge:"DCU · 4pts", bg:"bg-teal-600",   desc:"Usabilidade: heurísticas, acessibilidade, coerência visual, gramática visual." },
                    { badge:"PI · 8pts",  bg:"bg-red-600",    desc:"Processo ágil (Trello) + apresentação + documentos + protótipo alta fidelidade." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className={`${item.bg} text-white px-2 py-0.5 rounded-full font-bold text-xs flex-shrink-0`}>{item.badge}</span>
                      <span className="text-gray-600 leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-white border border-orange-200 rounded-lg text-xs text-orange-700">
                <p className="font-semibold mb-1">🎯 O que diferencia nota alta de nota baixa</p>
                <p className="leading-relaxed">Nota 6: persona com dor específica + processo criativo completo + pitch que conta uma história que emociona. Nota 4: persona genérica, etapas do DT cumpridas no papel mas sem profundidade, pitch focado na solução e não no usuário.</p>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

// ============================================================
// DADOS — PROJETO INTEGRADOR I (DE_234)
// ============================================================
const piBlocos = [
  { id: 1, label: "BLOCO 1", titulo: "HTML5 — A Estrutura de Tudo", periodo: "Março – Abril", color: "bg-orange-600", foco: "A turma sai do zero absoluto e chega ao HTML semântico completo através de um projeto guiado: a construção de um Portfólio Pessoal. Ao mesmo tempo, cada aluno escolhe 1 dos 9 mini-projetos práticos para desenvolver individualmente." },
  { id: 2, label: "BLOCO 2", titulo: "CSS3 — Do Estilo ao Layout Responsivo", periodo: "Maio – Junho", color: "bg-amber-600", foco: "Aplicar CSS3 progressivamente sobre o HTML do Portfólio Pessoal. Os alunos aproveitam para finalizar o estilo visual dos mini-projetos individuais. Entrega avaliativa na Aula 12." },
  { id: 3, label: "BLOCO 3", titulo: "Projeto Final ODS — Figma e Trello", periodo: "Junho – Julho", color: "bg-red-600", foco: "Construir do zero o protótipo do projeto ODS em Figma — baixa, média e alta fidelidade — até o prototype interativo. O processo segue os pilares do DT. Apresentação final: pitch de 7 minutos ao vivo no Figma." },
];

const piAulas = [
  { bloco:1, num:1,  titulo:"Como a Web Funciona + Ambiente de Desenvolvimento", tipo:"fixa", entrega:null, desc:"Apresentação da disciplina. O que é um portfólio de desenvolvedor. Como a web funciona — cliente, servidor, HTTP, o papel do HTML (estrutura), CSS (visual) e JS (comportamento). VS Code com extensões essenciais (Live Server, Prettier, Auto Rename Tag). Conta no GitHub e primeiro commit." },
  { bloco:1, num:2,  titulo:"HTML5 — Estrutura Base e Tags Essenciais de Texto", tipo:"fixa", entrega:null, desc:"Anatomia do HTML — tag, atributo, elemento, aninhamento. Tags obrigatórias: html, head, body. Meta charset, meta viewport (fundamental — sem isso o site quebra no celular). Tags de texto: h1–h6 (hierarquia e SEO), p, strong, em. Code-along: estrutura base do Portfólio Pessoal." },
  { bloco:1, num:3,  titulo:"HTML5 — Imagens, Links e Atributos de Acessibilidade", tipo:"fixa", entrega:null, desc:"Tag img — src, alt (obrigatório — acessibilidade + SEO). Formatos: JPG, PNG, SVG. Tag a — href, target=_blank, rel=noopener. Por que o alt é ético além de técnico. Code-along: inserir imagens com alt descritivo, adicionar links, organizar /images." },
  { bloco:1, num:4,  titulo:"HTML5 — Tags Semânticas", tipo:"fixa", entrega:null, desc:"Por que semântica existe — SEO, acessibilidade, manutenção. As tags: header, nav, main, section, article, aside, footer. Diferença entre div (não diz nada) e section (tem propósito semântico). Code-along: reestruturar todo o HTML usando tags semânticas." },
  { bloco:1, num:5,  titulo:"HTML5 — Formulários e Validação Nativa", tipo:"fixa", entrega:null, desc:"Tag form. Inputs: text, email, password, number, date, checkbox, radio. Label e for — obrigatório por acessibilidade. Validação nativa: required, minlength, type=email. A H5 de Nielsen no HTML — prevenir erros antes de acontecerem. Code-along: formulário de contato do portfólio." },
  { bloco:1, num:6,  titulo:"HTML5 — Tabelas, Listas, Multimídia e Validação Final", tipo:"fixa", entrega:null, desc:"Listas: ul, ol, li. Tabelas: table, thead, tbody, tr, th, td — para dados tabulares, nunca para layout. Tag video e iframe. Validação final no W3C. Checkpoint do Bloco 1: HTML completo, semântico e validado antes de passar ao CSS." },
  { bloco:2, num:7,  titulo:"CSS3 — Seletores, Cascata e Primeiras Cores", tipo:"fixa", entrega:null, desc:"Como linkar o CSS. Seletores de tag, classe e ID. Cascata e especificidade. Variáveis CSS: --cor-primaria, --fonte-principal. Cores: hex, rgb, hsl. Code-along: criar style.css, variáveis CSS com as cores do Figma, aplicar cor de fundo e Google Fonts." },
  { bloco:2, num:8,  titulo:"CSS3 — Tipografia e Box Model", tipo:"fixa", entrega:null, desc:"Tipografia: font-size (rem vs px), font-weight, line-height, letter-spacing. Box model: conteúdo + padding + border + margin. box-sizing: border-box. Code-along: tipografia completa seguindo hierarquia do Figma, espaçamento entre seções." },
  { bloco:2, num:9,  titulo:"CSS3 — Flexbox", tipo:"fixa", entrega:null, desc:"display:flex, flex-direction, justify-content, align-items, flex-wrap, gap. Os 3 casos de uso mais comuns: nav horizontal, cards lado a lado, centralizar elemento na tela. Code-along: Flexbox no cabeçalho, na seção de cards e em elemento centralizado. Dica: Flexbox Froggy." },
  { bloco:2, num:10, titulo:"CSS3 — Grid e Responsividade", tipo:"fixa", entrega:null, desc:"CSS Grid para layouts de 2 e 3 colunas. Media queries: @media (max-width: 768px). Mobile-first. Como o Figma mobile (375px) corresponde ao breakpoint mobile do CSS. Code-along: Grid em 1 seção, media queries e teste no DevTools." },
  { bloco:2, num:11, titulo:"CSS3 — Pseudo-classes, Transições e Organização", tipo:"fixa", entrega:null, desc:":hover, :focus, :active. Transições: transition com duration e ease. Por que o :focus visível é acessibilidade. Organização do CSS: variáveis → reset → base → componentes → layout → responsivo. Code-along: hover e transição nos botões, :focus visível." },
  { bloco:2, num:12, titulo:"Portfólio Individual + Mini-projeto (Entrega Avaliativa)", tipo:"fixa", entrega:{ label:"📝 Site Portfólio + Mini-projeto — 2 pts", detail:"Link do portfólio publicado no GitHub Pages (1,0 pt) com link funcional para o Mini-projeto totalmente estilizado (+1,0 pt). Entrega via Classroom até o final do dia." }, desc:"Aula de validação e entrega avaliativa. GitHub Pages: Settings > Pages > Branch: main. Em 1–2 minutos o site está no ar. O portfólio deve ter: foto/avatar, nome, descrição, habilidades do semestre e link em destaque para o mini-projeto." },
  { bloco:3, num:13, titulo:"Sprint 1 — Kickoff e Documentação", tipo:"fixa", entrega:null, desc:"Definição do tema ODS de cada grupo e criação do board no Trello. Construção da persona, mapa de empatia e demais documentos de imersão. Início da Matriz CSD, análise de concorrência e Canva Lean." },
  { bloco:3, num:14, titulo:"Sprint 2 — Documentação + Baixa Fidelidade", tipo:"fixa", entrega:null, desc:"Finalização das documentações (jornada do usuário, matriz de impacto e esforço, fluxo de tarefas, diagrama de telas) e construção dos primeiros frames de baixa fidelidade no Figma — mínimo 3 telas esboçadas." },
  { bloco:3, num:15, titulo:"Sprint 3 — Baixa Fidelidade", tipo:"fixa", entrega:null, desc:"Todas as telas em baixa fidelidade finalizadas. Fluxo de navegação mapeado. Feedback da professora em cada grupo. GitHub Pages testado — nunca apresentar via localhost." },
  { bloco:3, num:16, titulo:"Sprint 4 — Média Fidelidade", tipo:"fixa", entrega:null, desc:"Paleta de cores e tipografia definidas e aplicadas. Cabeçalho, botões e cards com estilo consistente. Componentes reutilizáveis criados no Figma." },
  { bloco:3, num:17, titulo:"Sprint 5 — Alta Fidelidade", tipo:"fixa", entrega:null, desc:"Imagens reais aplicadas via Unsplash. Refinamento de espaçamentos e hierarquia visual. Todas as telas em alta fidelidade. Avisar grupos: a professora de DCU valida heurísticas na apresentação final." },
  { bloco:3, num:18, titulo:"Sprint 6 — Prototype e Ajustes Finais", tipo:"fixa", entrega:null, desc:"Telas conectadas no modo Prototype. Fluxo navegável testado. Documentos do projeto organizados para entrega (Trello com histórico, persona, análise de concorrência, jornada do usuário e demais artefatos)." },
  { bloco:3, num:19, titulo:"Sprint 7 — Prototype e Ajustes Finais", tipo:"fixa", entrega:null, desc:"Ajustes finais com base no feedback da Sprint 6. Simulação do pitch de 7 minutos. Revisão de todos os documentos. O link do protótipo precisa estar compartilhado com permissão de visualização." },
  { bloco:3, num:20, titulo:"Apresentação Final — Pitch ODS", tipo:"fixa", entrega:{ label:"🚀 Projeto Final ODS — 8 pts", detail:"Pitch de 7 minutos por grupo. Navegação ao vivo no Figma. Avaliação integrada com DCU. Link do protótipo + documentos via Classroom antes do evento." }, desc:"Pitch de 7 minutos por grupo. Navegação ao vivo no Figma. Duas pessoas do grupo apresentam. A professora de DCU valida as heurísticas durante a apresentação. PI avalia: processo ágil (Trello) + apresentação + documentos + protótipo alta fidelidade." },
];

const piMiniProjetos = [
  { num:"01", nome:"Layout de Blog",               desc:"Cabeçalho, barra lateral, lista de postagens e rodapé." },
  { num:"02", nome:"Formulário de Cadastro",        desc:"Campos de nome, e-mail, senha e botão de envio." },
  { num:"03", nome:"Página de Login",               desc:"Campos de usuário e senha, botão de login, layout simples." },
  { num:"04", nome:"Landing Page de Produto",       desc:"Imagens, descrição do produto e botão de chamada à ação (CTA)." },
  { num:"05", nome:"Menu de Navegação Responsivo",  desc:"Menu que muda de formato entre desktop e mobile." },
  { num:"06", nome:"Galeria de Imagens",            desc:"Grade de fotos com efeito de hover para ampliar." },
  { num:"07", nome:"Tabela de Preços",              desc:"Planos estilizados com cores e bordas para destacar informações." },
  { num:"08", nome:"Cartão de Contato",             desc:"Layout de cartão de visita com nome, cargo, telefone e e-mail." },
  { num:"09", nome:"Animação de Hover em Botões",   desc:"Botão com efeito de mudança de cor ou animação ao passar o mouse." },
];

const piSubcriterios = [
  { titulo: "Processo Ágil — Trello", pts: "1 pt",  desc: "Board com histórico de tarefas, colunas organizadas, sprints registrados ao longo do semestre." },
  { titulo: "Apresentação Oral",      pts: "2 pts", desc: "Clareza, navegação do protótipo ao vivo, pitch de 7 min, máximo 2 apresentadores por equipe." },
  { titulo: "Documentos do protótipo final", pts: "2 pts", desc: "Persona + matriz de impacto e esforço + análise de concorrência + jornada do usuário + problema e solução + diagrama de telas + fluxo de tarefas + matriz CSD + canva lean." },
  { titulo: "Protótipo Alta Fidelidade no Figma", pts: "3 pts", desc: "Mínimo 3 telas funcionais conectadas no modo Prototype. Sem navegação funcionando = não avaliado." },
];

// ============================================================
// COMPONENTE — PLANO PI
// ============================================================
function PlanoPI() {
  const [expanded, setExpanded] = useState(null);
  const [showLegend, setShowLegend] = useState(false);
  const [activeTab, setActiveTab] = useState("aulas");
  const [showMini, setShowMini] = useState(false);

  return (
    <div>
      <div className="mb-4 p-3 sm:p-4 bg-orange-50 border border-orange-200 rounded-xl text-sm lg:text-base text-orange-800 leading-relaxed">
        Esta disciplina integra <strong>HTML5, CSS3 e Figma</strong> num único percurso: do portfólio individual ao protótipo ODS em grupo. Você aprende fazendo — cada aula é um code-along com entrega real.
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => setActiveTab("aulas")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab === "aulas" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
          📚 Aulas
        </button>
        <button onClick={() => setActiveTab("avaliacoes")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all touch-manipulation ${activeTab === "avaliacoes" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
          📋 Avaliações
        </button>
      </div>

      {activeTab === "aulas" && (
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
                      className="rounded-xl border cursor-pointer transition-all mb-1 shadow-sm touch-manipulation border-gray-200 bg-white hover:border-gray-300 active:bg-gray-50">
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
          {/* PORTFÓLIO */}
          <div className="border-2 border-orange-300 rounded-2xl overflow-hidden">
            <div className="bg-orange-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🖥️</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Site Portfólio + Mini-projeto</span>
                <span className="ml-2 text-xs bg-white text-orange-700 font-bold px-2 py-0.5 rounded-full">2 pts</span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Bloco 2 — Aula 12, entrega via Classroom até o final do dia</p></div>
                <div className="bg-white rounded-lg p-2 border border-orange-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual. Link do GitHub Pages com mini-projeto linkado.</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-orange-800 mb-2">O que será avaliado</p>
                <ul className="space-y-1.5">
                  {[
                    "Portfólio publicado no GitHub Pages com foto/avatar, nome, descrição e habilidades do semestre (1 pt)",
                    "Mini-projeto HTML/CSS da lista, totalmente estilizado e funcionando, linkado em destaque no portfólio (+1 pt)",
                    "HTML semântico validado no W3C — sem erros críticos",
                    "CSS com variáveis, tipografia hierarquizada e pelo menos 1 media query",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                      <span className="text-xs text-orange-800 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button onClick={() => setShowMini(!showMini)}
                  className="text-xs text-orange-700 font-semibold flex items-center gap-1 touch-manipulation">
                  {showMini ? "▲" : "▼"} Ver os 9 mini-projetos disponíveis
                </button>
                {showMini && (
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {piMiniProjetos.map(mp => (
                      <div key={mp.num} className="bg-white border border-orange-200 rounded-lg p-2.5 text-xs">
                        <span className="font-bold text-orange-700">#{mp.num} {mp.nome}</span>
                        <p className="text-gray-500 mt-0.5">{mp.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-3 bg-white border border-orange-200 rounded-lg text-xs text-orange-700">
                <p className="font-semibold mb-1">🎯 Critério</p>
                <p className="leading-relaxed">O portfólio precisa estar no ar via GitHub Pages — localhost não é avaliado. O mini-projeto precisa estar linkado e funcional. HTML e CSS devem refletir o que foi ensinado nos Blocos 1 e 2.</p>
              </div>
            </div>
          </div>

          {/* PROJETO ODS */}
          <div className="border-2 border-red-300 rounded-2xl overflow-hidden">
            <div className="bg-red-600 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <div className="flex-1">
                <span className="text-white font-bold text-sm">Projeto Final ODS</span>
                <span className="ml-2 text-xs bg-white text-red-700 font-bold px-2 py-0.5 rounded-full">8 pts</span>
              </div>
            </div>
            <div className="bg-red-50 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white rounded-lg p-2 border border-red-100"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Bloco 3 — Aulas 18–20 (final de junho ou julho)</p></div>
                <div className="bg-white rounded-lg p-2 border border-red-100"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Em grupo. Pitch 7 min ao vivo no Figma. Avaliação integrada com DCU.</p></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-red-800 mb-2">Subcritérios de avaliação</p>
                <div className="space-y-2">
                  {piSubcriterios.map((sc, i) => (
                    <div key={i} className="bg-white border border-red-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-red-800 flex-1">{sc.titulo}</span>
                        <span className="text-xs bg-red-600 text-white font-bold px-2 py-0.5 rounded-full flex-shrink-0">{sc.pts}</span>
                      </div>
                      <p className="text-xs text-red-700 leading-relaxed">{sc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-white border border-red-200 rounded-xl text-xs">
                <p className="font-semibold text-red-800 mb-2">🔗 Mesmo projeto, 3 notas diferentes</p>
                <div className="space-y-1.5">
                  {[
                    { badge:"DT · 6pts", bg:"bg-rose-600",   desc:"Processo criativo: persona real, imersão documentada, ideação, iteração e storytelling no pitch." },
                    { badge:"DCU · 4pts", bg:"bg-indigo-600", desc:"Usabilidade: heurísticas de Nielsen aplicadas, acessibilidade, consistência visual." },
                    { badge:"PI · 8pts",  bg:"bg-red-600",    desc:"Processo ágil (Trello) + apresentação oral + documentos + protótipo alta fidelidade no Figma." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className={`${item.bg} text-white px-2 py-0.5 rounded-full font-bold text-xs flex-shrink-0`}>{item.badge}</span>
                      <span className="text-gray-600 text-xs leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
// ATIVIDADE: RELATÓRIO DE MARCA
// ============================================================
function AtividadeRelatorio() {
  const [expanded, setExpanded] = useState(null);
  const passos = [
    { num:"01", icon:"🔎", titulo:"Escolha a marca", cor:"bg-indigo-600",
      desc:"Escolha uma marca brasileira real — pode ser de qualquer setor, mas precisa ter presença digital (site ou app).",
      items:["Pesquise o manual da marca ou brand guidelines oficiais (muitas marcas publicam publicamente)","Consulte o site institucional, redes sociais oficiais e materiais de imprensa","Registre todas as fontes que você consultou — elas vão no relatório"] },
    { num:"02", icon:"🎨", titulo:"Analise a cor", cor:"bg-violet-600",
      desc:"Foco total na paleta oficial — não no que você acha bonito, mas no que a marca escolheu e por quê.",
      items:["Identifique as cores oficiais da marca (hex ou RGB do manual)","Pesquise a psicologia daquelas cores — o que elas comunicam para o público-alvo","Teste o contraste em pelo menos 1 tela real: o texto principal passa no WCAG AA (4,5:1)?","Ferramenta gratuita para testar: coolors.co/contrast-checker"] },
    { num:"03", icon:"✏️", titulo:"Analise a tipografia", cor:"bg-teal-600",
      desc:"Identifique as fontes pelo nome — 'sans-serif moderna' não é uma análise, é uma descrição genérica.",
      items:["Qual é o nome da fonte principal? (use WhatFont, Fonts Ninja ou inspecione o CSS)","O que essa escolha tipográfica comunica? Serifa remete a tradição, sans-serif a modernidade — mas vai além disso","Como a hierarquia funciona? Títulos, subtítulos e corpo de texto estão claramente diferenciados?"] },
    { num:"04", icon:"📱", titulo:"Analise 2 telas reais", cor:"bg-indigo-800",
      desc:"Escolha 2 telas do site ou app — de preferência as mais importantes para o usuário (home, checkout, cadastro).",
      items:["Faça print das telas e anote diretamente sobre elas — onde a cor direciona o olhar? onde a tipografia facilita ou dificulta?","Ex: 'esse botão converte porque o roxo contrasta com o fundo branco e a fonte bold cria urgência'","Ex: 'esse bloco de texto some porque a fonte é fina demais e o cinza claro não tem contraste suficiente'","Pelo menos 1 anotação por tela conectando cor OU tipografia à percepção ou decisão do usuário"] },
    { num:"05", icon:"📄", titulo:"Monte o relatório (1 página)", cor:"bg-rose-600",
      desc:"1 página — objetiva, visual, com argumentos. Não é redação, é análise de design.",
      items:["Inclua: nome da marca, prints das telas anotadas, paleta com hex, fontes com nome","Cada afirmação precisa de justificativa — não 'o roxo é sofisticado' mas 'o roxo #820AD1 foi escolhido para diferenciar o Nubank dos bancos tradicionais que usam azul'","Liste as referências no final — manual da marca, artigo, brand page. Sem referências = sem nota no critério de pesquisa"] },
  ];
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
            <p className="text-sm text-gray-700 leading-relaxed">Você escolhe uma marca brasileira real e analisa como as escolhas de <strong>cor e tipografia</strong> impactam a percepção e a decisão do usuário. O objetivo é desenvolver um olhar crítico antes de sair auditando interfaces complexas.</p>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">10 de abril — entrega via Classroom até 23h59</p></div>
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual (ou dupla/trio). PDF · 1 página · entregue via Classroom</p></div>
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
      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-sm">
        <p className="font-semibold text-indigo-800 mb-1">🎯 Critério de avaliação</p>
        <p className="text-indigo-700 leading-relaxed text-xs">O que vale é o <strong>raciocínio</strong> — por que essa cor, por que essa fonte, qual o impacto no usuário. Relatório sem referências de pesquisa real perde ponto automaticamente. 1 página bem argumentada com fontes vale mais que 4 páginas de achismo. Um exemplo de relatório estará disponível no Classroom.</p>
      </div>
    </div>
  );
}

// ============================================================
// ATIVIDADE: PROJETO ODS
// ============================================================
function AtividadeODS() {
  const [expanded, setExpanded] = useState(null);
  const passos = [
    { num:"01", icon:"🌱", titulo:"Escolha o ODS e o problema", cor:"bg-teal-600",
      desc:"O projeto precisa estar conectado a pelo menos 1 dos 17 Objetivos de Desenvolvimento Sustentável da ONU.",
      items:["Pesquise os 17 ODS e escolha 1 que faça sentido para o grupo — educação, saúde, igualdade, meio ambiente…","Identifique um problema real e local: o que acontece na sua comunidade, cidade ou escola que se conecta a esse ODS?","O problema precisa ter um usuário real — não é um problema genérico da humanidade, é uma dor de uma pessoa específica"] },
    { num:"02", icon:"🧭", titulo:"Imersão e pesquisa", cor:"bg-teal-700",
      desc:"Saia da sala de aula. O problema real não está no Google — está nas pessoas que vivem ele.",
      items:["Conduza pelo menos 1 entrevista ou observação com uma pessoa que vive o problema","Documente tudo: o que a pessoa disse, o que ela fez, o que ela não disse mas você percebeu","Essa pesquisa vira a base da persona — sem pesquisa real, a persona é ficção"] },
    { num:"03", icon:"👤", titulo:"Persona e mapa de empatia", cor:"bg-cyan-600",
      desc:"A persona é a síntese da pesquisa — não é um personagem inventado, é uma representação do que você aprendeu.",
      items:["Nome, foto, contexto de vida — quem é essa pessoa no mundo real","Dores: o que frustra, o que dificulta, o que causa ansiedade","Desejos: o que ela quer alcançar, o que a motivaria","Mapa de empatia: o que ela pensa, sente, vê, ouve, fala e faz"] },
    { num:"04", icon:"💡", titulo:"Ideação e protótipo", cor:"bg-indigo-600",
      desc:"Com o problema claro e a persona definida, é hora de criar — mas com critério.",
      items:["Gere pelo menos 3 ideias diferentes antes de escolher — não vá com a primeira ideia","Escolha a solução que melhor responde à dor da persona — justifique a escolha","Prototipe no Figma: mínimo 3 telas navegáveis com fluxo funcional no modo Prototype","As telas precisam refletir as decisões de DCU: hierarquia visual, contraste, tipografia legível"] },
    { num:"05", icon:"🎤", titulo:"Pitch final (7 minutos)", cor:"bg-rose-600",
      desc:"O pitch acontece ao vivo no evento final do PI — final de junho ou julho. 7 minutos navegando o protótipo no Figma.",
      items:["Estrutura: contexto do ODS → problema → usuário (persona) → solução → próximo passo","Navegue o protótipo ao vivo — o fluxo precisa funcionar","A apresentação é avaliada em 3 disciplinas com critérios diferentes: DT (processo), DCU (usabilidade), PI (apresentação)"] },
  ];
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
            <p className="text-sm text-gray-700 leading-relaxed">Um projeto em grupo que conecta os conteúdos das 3 disciplinas. Em <strong>DT</strong> vale pelo processo criativo. Em <strong>DCU</strong> pela qualidade de usabilidade do protótipo. Em <strong>PI</strong> pela apresentação ao vivo.</p>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2 text-xs">
        <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-center"><span className="font-bold text-teal-800 block">DT · 6pts</span><span className="text-teal-600">Processo criativo</span></div>
        <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-center"><span className="font-bold text-indigo-800 block">DCU · 4pts</span><span className="text-indigo-600">Usabilidade</span></div>
        <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl text-center"><span className="font-bold text-orange-800 block">PI · 8pts</span><span className="text-orange-600">Apresentação</span></div>
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
      <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-xs">
        <p className="font-semibold text-teal-800 mb-1">🎯 O que diferencia nota alta de nota baixa</p>
        <p className="text-teal-700 leading-relaxed">A persona precisa ter uma dor real e específica — e a solução precisa responder a essa dor diretamente. Projeto que "resolve tudo" não resolve nada. DT ensina a construir, PI apresenta o que foi construído, e DCU avalia se o que foi construído foi pensado para o usuário.</p>
      </div>
    </div>
  );
}

// ============================================================
// ATIVIDADE: DELICATTE CONFEITARIA
// ============================================================
function AtividadeDelicatte() {
  const [expanded, setExpanded] = useState(null);
  const passos = [
    { num:"01", icon:"📐", titulo:"Entenda o contexto", cor:"bg-pink-600",
      desc:"A Delicatte Confeitaria é o produto de referência para praticar Figma com um caso real e contextualizado.",
      items:["Acesse o material da Delicatte disponível no Classroom — paleta de cores, referências visuais e fluxo esperado","Analise o fluxo principal antes de começar a montar: Login → Home → Produto (ou equivalente)","Observe marcas de confeitaria reais para inspiração — identidade visual, tom, tipografia"] },
    { num:"02", icon:"🧩", titulo:"Monte as 3 telas no Figma", cor:"bg-rose-600",
      desc:"Alta fidelidade — as cores da Delicatte precisam estar aplicadas, a tipografia hierarquizada e as imagens reais.",
      items:["Tela 1 — Login: campos de email e senha, botão de entrar, identidade visual da marca","Tela 2 — Home: destaque de produtos, navegação clara, paleta da Delicatte aplicada","Tela 3 — Produto: foto, nome, preço, botão de compra — hierarquia visual evidente","Use componentes reutilizáveis para elementos que se repetem (botões, nav bar, cards)"] },
    { num:"03", icon:"🔗", titulo:"Conecte no modo Prototype", cor:"bg-fuchsia-600",
      desc:"O protótipo precisa funcionar — não é só um conjunto de telas bonitas, é um fluxo navegável.",
      items:["Conecte as 3 telas no modo Prototype do Figma","Fluxo obrigatório: abrir o app → fazer login → chegar na home → entrar em um produto","Teste você mesmo antes de entregar — o link precisa abrir e o fluxo precisa funcionar sem explicação"] },
    { num:"04", icon:"🚀", titulo:"Entregue via Classroom", cor:"bg-pink-800",
      desc:"Link compartilhável do Figma com permissão de visualização. Protótipo sem link ou sem interação não é avaliado.",
      items:["Clique em 'Share' no Figma → 'Copy link' → permissão 'Anyone with the link can view'","Cole o link no Classroom até o prazo informado na aula","Verifique que o link abre sem precisar de login no Figma"] },
  ];
  return (
    <div>
      <div className="mb-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-300 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="text-3xl">🎂</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-bold text-gray-900 text-base">Protótipo Interativo — Delicatte Confeitaria</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-pink-600 text-white">1 pt · DT</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">Exercício prático de Figma com um produto real. Você monta 3 telas conectadas no modo Prototype — alta fidelidade, identidade visual da Delicatte aplicada, fluxo funcionando.</p>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📅 Quando</span><p className="text-gray-500 mt-0.5">Bloco 2 — entrega via Classroom até o final da aula 13 (antes de 18 de maio)</p></div>
        <div className="p-3 bg-white border border-gray-200 rounded-xl"><span className="font-semibold text-gray-700">📋 Formato</span><p className="text-gray-500 mt-0.5">Individual. Link do Figma com permissão de visualização</p></div>
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
      <div className="p-4 bg-pink-50 border border-pink-200 rounded-xl text-xs">
        <p className="font-semibold text-pink-800 mb-1">🎯 Critério de avaliação</p>
        <p className="text-pink-700 leading-relaxed">O link precisa abrir e o fluxo precisa funcionar. Protótipo sem interação ou sem link compartilhado não é avaliado. Alta fidelidade significa: cores da paleta Delicatte aplicadas, tipografia hierarquizada, imagens reais de produtos.</p>
      </div>
    </div>
  );
}

// ============================================================
// MAPA de atividades para roteamento
// ============================================================
const atividadesMap = {
  "relatorio": { id:"relatorio", nome:"Relatório de Marca", codigo:"DCU · Bloco 1", descricao:"Analise cor e tipografia de uma marca brasileira real e explique como impactam a percepção do usuário.", ch:"2 pts", cor:"violet", icon:"📝", disponivel:true, imagem:null },
  "ods":       { id:"ods",       nome:"Projeto ODS",        codigo:"DT + DCU + PI", descricao:"Projeto em grupo conectado aos ODS — do problema real ao protótipo navegável no Figma.", ch:"6+4+8 pts", cor:"red", icon:"🌍", disponivel:true, imagem:null },
  "delicatte": { id:"delicatte", nome:"Delicatte Confeitaria", codigo:"DT · Bloco 2", descricao:"Monte 3 telas conectadas no Figma em alta fidelidade com a identidade visual da confeitaria.", ch:"1 pt", cor:"pink", icon:"🎂", disponivel:true, imagem:null },
  "desafio":   { id:"desafio",   nome:"Desafio: UX na Prática", codigo:"DCU + DT", descricao:"Auditoria heurística + ciclo DT + redesign no Figma + pitch de 3 minutos.", ch:"4pts DT · 4pts DCU", cor:"blue", icon:"🎯", disponivel:true, imagem:null },
};

// ============================================================
// LAYOUT DESKTOP
// ============================================================
function DesktopLayout({ disciplinaAtiva, setDisciplinaAtiva }) {
  const atividade = atividadesMap[disciplinaAtiva];
  const disc = atividade ? atividade : disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc && !atividade ? corMap[disc.cor] : null;

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
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm lg:text-[15px] font-medium transition-all touch-manipulation ${
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
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm lg:text-[15px] font-medium transition-all touch-manipulation ${
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

          <div className="text-xs text-white opacity-25 uppercase tracking-widest px-3 mt-5 mb-2">Atividades</div>
          {[
            { id:"relatorio", icon:"📝", label:"Relatório de Marca",   badge:"2pts · DCU",    badgeBg:"bg-indigo-500" },
            { id:"ods",       icon:"🌍", label:"Projeto ODS",          badge:"DT+DCU+PI",     badgeBg:"bg-teal-600"   },
            { id:"delicatte", icon:"🎂", label:"Delicatte Confeitaria",badge:"1pt · DT",      badgeBg:"bg-pink-500"   },
            { id:"desafio",   icon:"🎯", label:"UX na Prática",        badge:"4+4pts",        badgeBg:"bg-violet-500" },
          ].map(item => (
            <button key={item.id} onClick={() => setDisciplinaAtiva(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm lg:text-[15px] font-medium transition-all touch-manipulation ${
                disciplinaAtiva === item.id ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"
              }`}>
              <span className="text-base">{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-md font-semibold ${item.badgeBg} text-white opacity-90`}>{item.badge}</span>
            </button>
          ))}
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
                      <div className="font-bold text-gray-900 text-base lg:text-lg mb-1">{d.nome}</div>
                      <div className="text-xs text-gray-400 mb-2">{d.codigo} · {d.ch}</div>
                      <p className="text-xs lg:text-sm text-gray-500 leading-relaxed mb-2">{d.descricao}</p>
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

            {/* ATIVIDADES */}
            <div className="mt-5">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Atividades</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id:"relatorio", icon:"📝", label:"Relatório de Marca",      badges:[{txt:"2pts · DCU", bg:"bg-indigo-600"}],                                               desc:"Analise cor e tipografia de uma marca brasileira real e conecte as escolhas à percepção do usuário.", cor:"border-indigo-300 hover:border-indigo-400", top:"bg-indigo-600" },
                  { id:"ods",       icon:"🌍", label:"Projeto ODS",             badges:[{txt:"6pts DT",bg:"bg-teal-600"},{txt:"4pts DCU",bg:"bg-indigo-600"},{txt:"8pts PI",bg:"bg-orange-600"}], desc:"Do problema real ao protótipo navegável — ODS, persona, mapa de empatia e Figma.", cor:"border-teal-300 hover:border-teal-400", top:"bg-teal-600" },
                  { id:"delicatte", icon:"🎂", label:"Delicatte Confeitaria",   badges:[{txt:"1pt · DT", bg:"bg-pink-600"}],                                                    desc:"Monte 3 telas conectadas no Figma com a identidade visual da confeitaria.", cor:"border-pink-300 hover:border-pink-400", top:"bg-pink-600" },
                  { id:"desafio",   icon:"🎯", label:"Desafio: UX na Prática", badges:[{txt:"4pts DT",bg:"bg-violet-600"},{txt:"4pts DCU",bg:"bg-indigo-600"}],                desc:"Auditoria heurística + ciclo DT + redesign no Figma + pitch de 3 minutos.", cor:"border-violet-300 hover:border-violet-400", top:"bg-violet-600" },
                ].map(item => (
                  <div key={item.id} onClick={() => setDisciplinaAtiva(item.id)}
                    className={`bg-white rounded-2xl border-2 ${item.cor} cursor-pointer transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 overflow-hidden group`}>
                    <div className={`h-1.5 w-full ${item.top}`} />
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-bold text-gray-900 text-sm flex-1">{item.label}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.badges.map((b,i) => <span key={i} className={`text-xs px-2 py-0.5 rounded-full font-bold ${b.bg} text-white`}>{b.txt}</span>)}
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* BANNER DESKTOP */}
            <div className={`relative ${corMap[disc.cor]?.bg ?? "bg-gray-800"} text-white`}>
              {disc.imagem && <img src={disc.imagem} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
              <div className="relative max-w-4xl mx-auto w-full px-8 py-8">
                <div className="text-xs opacity-60 font-medium uppercase tracking-widest mb-3">{disc.codigo} · {CONFIG.modulo}</div>
                <h2 className="text-3xl font-bold mb-2">{disc.nome}</h2>
                <p className="text-white opacity-70 text-sm lg:text-base max-w-xl leading-relaxed">{disc.descricao}</p>
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
              {atividade ? (
                atividade.id === "desafio" ? <DesafioExtra /> :
                atividade.id === "relatorio" ? <AtividadeRelatorio /> :
                atividade.id === "ods" ? <AtividadeODS /> :
                atividade.id === "delicatte" ? <AtividadeDelicatte /> : null
              ) : disc.id === "dt" ? <PlanoDT /> : disc.id === "pi" ? <PlanoPI /> : disc.disponivel ? <PlanoDCU /> : <PlanoEmBreve disc={disc} />}
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
  const atividade = atividadesMap[disciplinaAtiva];
  const disc = atividade ? atividade : disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc && !atividade ? corMap[disc.cor] : null;

  if (disc) {
    return (
      <div className="max-w-3xl mx-auto w-full font-sans bg-gray-50 min-h-screen">
        <div className={`relative ${corMap[disc.cor]?.bg ?? "bg-gray-800"} text-white shadow-md`}>
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
          {atividade ? (
            atividade.id === "desafio" ? <DesafioExtra /> :
            atividade.id === "relatorio" ? <AtividadeRelatorio /> :
            atividade.id === "ods" ? <AtividadeODS /> :
            atividade.id === "delicatte" ? <AtividadeDelicatte /> : null
          ) : disc.id === "dt" ? <PlanoDT /> : disc.id === "pi" ? <PlanoPI /> : disc.disponivel ? <PlanoDCU /> : <PlanoEmBreve disc={disc} />}
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
        {/* ATIVIDADES */}
        <div className="mt-4">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Atividades</p>
          <div className="space-y-3">
            {[
              { id:"relatorio", icon:"📝", label:"Relatório de Marca",      badges:[{txt:"2pts · DCU", bg:"bg-indigo-600"}],                                               desc:"Analise cor e tipografia de uma marca brasileira real.",         cor:"border-indigo-300", top:"bg-indigo-600" },
              { id:"ods",       icon:"🌍", label:"Projeto ODS",             badges:[{txt:"6pts DT",bg:"bg-teal-600"},{txt:"4pts DCU",bg:"bg-indigo-600"},{txt:"8pts PI",bg:"bg-orange-600"}], desc:"Do problema real ao protótipo navegável — ODS, persona e Figma.", cor:"border-teal-300",   top:"bg-teal-600"   },
              { id:"delicatte", icon:"🎂", label:"Delicatte Confeitaria",   badges:[{txt:"1pt · DT", bg:"bg-pink-600"}],                                                    desc:"3 telas conectadas no Figma com a identidade da confeitaria.",   cor:"border-pink-300",   top:"bg-pink-600"   },
              { id:"desafio",   icon:"🎯", label:"Desafio: UX na Prática", badges:[{txt:"4pts DT",bg:"bg-violet-600"},{txt:"4pts DCU",bg:"bg-indigo-600"}],                desc:"Auditoria + redesign no Figma + pitch de 3 minutos.",            cor:"border-violet-300", top:"bg-violet-600" },
            ].map(item => (
              <div key={item.id} onClick={() => setDisciplinaAtiva(item.id)}
                className={`bg-white rounded-2xl border-2 ${item.cor} cursor-pointer transition-all shadow-sm hover:shadow-lg active:shadow-sm overflow-hidden touch-manipulation`}>
                <div className={`h-1.5 w-full ${item.top}`} />
                <div className="flex items-center gap-4 p-4">
                  <div className={`w-12 h-12 rounded-xl ${item.top} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="font-bold text-gray-900 text-sm">{item.label}</span>
                      {item.badges.map((b,i) => <span key={i} className={`text-xs px-2 py-0.5 rounded-full font-bold ${b.bg} text-white`}>{b.txt}</span>)}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                  <span className="text-gray-300 text-xl flex-shrink-0">›</span>
                </div>
              </div>
            ))}
          </div>
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
      <div className="hidden lg:block lg:text-base">
        <DesktopLayout disciplinaAtiva={disciplinaAtiva} setDisciplinaAtiva={setDisciplinaAtiva} />
      </div>
    </div>
  );
}