import { CONFIG, disciplinas, corMap, atividades } from "../data/config";
import PlanoDCU       from "../components/planos/PlanoDCU";
import PlanoDT        from "../components/planos/PlanoDT";
import PlanoPI        from "../components/planos/PlanoPI";
import PlanoEmBreve   from "../components/planos/PlanoEmBreve";
import AtividadeRelatorio from "../components/atividades/AtividadeRelatorio";
import AtividadeODS       from "../components/atividades/AtividadeODS";
import AtividadeDelicatte from "../components/atividades/AtividadeDelicatte";
import DesafioExtra       from "../components/atividades/DesafioExtra";
import Calendario         from "../components/calendario/Calendario";

const atividadesMap = {
  relatorio: { id:"relatorio", nome:"Relatório de Marca",      codigo:"DCU · Bloco 1", ch:"2 pts",          cor:"violet", icon:"📝", disponivel:true },
  ods:       { id:"ods",       nome:"Projeto ODS",             codigo:"DT + DCU + PI",  ch:"6+4+8 pts",      cor:"red",    icon:"🌍", disponivel:true },
  delicatte: { id:"delicatte", nome:"Delicatte Confeitaria",   codigo:"DT · Bloco 2",   ch:"1 pt",           cor:"pink",   icon:"🎂", disponivel:true },
  desafio:   { id:"desafio",   nome:"Desafio: UX na Prática",  codigo:"DCU + DT",       ch:"4pts DT + 4pts DCU", cor:"blue", icon:"🎯", disponivel:true },
  calendario:{ id:"calendario",nome:"Calendário de Aulas",     codigo:"2026",           ch:"",               cor:"indigo", icon:"📅", disponivel:true },
};

function renderConteudo(disciplinaAtiva, setDisciplinaAtiva) {
  if (!disciplinaAtiva) return null;

  if (disciplinaAtiva === "calendario") return <Calendario />;

  const atividade = atividadesMap[disciplinaAtiva];
  if (atividade) {
    if (disciplinaAtiva === "desafio")   return <DesafioExtra />;
    if (disciplinaAtiva === "relatorio") return <AtividadeRelatorio />;
    if (disciplinaAtiva === "ods")       return <AtividadeODS />;
    if (disciplinaAtiva === "delicatte") return <AtividadeDelicatte />;
  }

  const disc = disciplinas.find(d => d.id === disciplinaAtiva);
  if (!disc) return null;
  if (disc.id === "dcu") return <PlanoDCU />;
  if (disc.id === "dt")  return <PlanoDT />;
  if (disc.id === "pi")  return <PlanoPI />;
  return disc.disponivel ? null : <PlanoEmBreve disc={disc} />;
}

export default function DesktopLayout({ disciplinaAtiva, setDisciplinaAtiva }) {
  const atividade = atividadesMap[disciplinaAtiva];
  const disc = atividade ? atividade : disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc && !atividade ? corMap[disc.cor] : null;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ── SIDEBAR ── */}
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
          {/* Painel */}
          <div className="text-xs text-white opacity-25 uppercase tracking-widest px-3 mb-3">Geral</div>
          <button onClick={() => setDisciplinaAtiva(null)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${
              !disciplinaAtiva ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"
            }`}>
            <span className="text-base">🏠</span>
            <span>Painel Geral</span>
            {!disciplinaAtiva && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-60" />}
          </button>

          {/* Calendário */}
          <button onClick={() => setDisciplinaAtiva("calendario")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${
              disciplinaAtiva === "calendario" ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"
            }`}>
            <span className="text-base">📅</span>
            <span>Calendário de Aulas</span>
            {disciplinaAtiva === "calendario" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-60" />}
          </button>

          {/* Disciplinas */}
          <div className="text-xs text-white opacity-25 uppercase tracking-widest px-3 mt-5 mb-2">Disciplinas</div>
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
                  : <span className="text-xs text-white opacity-20">em breve</span>}
              </button>
            );
          })}

          {/* Atividades */}
          <div className="text-xs text-white opacity-25 uppercase tracking-widest px-3 mt-5 mb-2">Atividades</div>
          {atividades.map((item) => {
            const isActive = disciplinaAtiva === item.id;
            return (
              <button key={item.id} onClick={() => setDisciplinaAtiva(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${
                  isActive ? "bg-white bg-opacity-10 text-white" : "text-white opacity-50 hover:opacity-80 hover:bg-white hover:bg-opacity-5"
                }`}>
                <span className="text-base">{item.icon}</span>
                <span className="flex-1 text-left truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <main className="flex-1 flex flex-col min-h-screen overflow-auto">
        {!disciplinaAtiva ? (
          /* PAINEL GERAL */
          <div className="flex-1 flex flex-col">
            <div className="relative bg-gray-900 text-white overflow-hidden">
              {CONFIG.bannerHub && <img src={CONFIG.bannerHub} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />}
              {!CONFIG.bannerHub && <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-rose-900 opacity-80" />}
              <div className="relative px-8 py-10">
                <div className="text-xs text-white opacity-40 uppercase tracking-widest mb-2">{CONFIG.escola} · {CONFIG.modulo}</div>
                <h1 className="text-3xl font-bold">Planos de Ensino</h1>
                <p className="text-white opacity-60 mt-2">{CONFIG.curso}</p>
              </div>
            </div>
            <div className="p-8 grid grid-cols-3 gap-4">
              {disciplinas.map((d) => {
                const cor = corMap[d.cor];
                return (
                  <div key={d.id} onClick={() => setDisciplinaAtiva(d.id)}
                    className={`bg-white rounded-2xl border-2 cursor-pointer transition-all shadow-sm hover:shadow-lg overflow-hidden ${d.disponivel ? cor.border : "border-gray-200"}`}>
                    {d.imagem && (
                      <div className="relative h-28 overflow-hidden">
                        <img src={d.imagem} alt={d.nome} className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 ${cor.bg} opacity-40`} />
                        <span className="absolute top-3 left-3 text-2xl">{d.icon}</span>
                        {d.disponivel
                          ? <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold ${cor.badge}`}>Disponível</span>
                          : <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold bg-gray-100 text-gray-500">Em breve</span>}
                      </div>
                    )}
                    <div className="p-4">
                      <div className="font-bold text-gray-900">{d.nome}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{d.codigo} · {d.ch}</div>
                      <div className="text-xs text-gray-500 mt-2 leading-relaxed">{d.descricao}</div>
                      {(d.ClassroomA || d.ClassroomB) && (
                        <div className="flex flex-wrap gap-2 mt-3" onClick={e => e.stopPropagation()}>
                          {d.ClassroomA && <a href={d.ClassroomA} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-medium">🔗 {d.classroomLabelA ?? "Turma A"}</a>}
                          {d.ClassroomB && <a href={d.ClassroomB} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-medium">🔗 {d.classroomLabelB ?? "Turma B"}</a>}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-8 pb-8">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Atividades</p>
              <div className="grid grid-cols-2 gap-4">
                {atividades.map(item => (
                  <div key={item.id} onClick={() => setDisciplinaAtiva(item.id)}
                    className={`bg-white rounded-2xl border-2 ${item.cor} cursor-pointer transition-all shadow-sm hover:shadow-lg overflow-hidden`}>
                    <div className={`h-1.5 w-full ${item.top}`} />
                    <div className="flex items-center gap-4 p-4">
                      <div className={`w-12 h-12 rounded-xl ${item.top} flex items-center justify-center text-2xl flex-shrink-0`}>{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="font-bold text-gray-900 text-sm">{item.label}</span>
                          {item.badges.map((b,i) => <span key={i} className={`text-xs px-2 py-0.5 rounded-full font-bold ${b.bg} text-white`}>{b.txt}</span>)}
                        </div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* PLANO / ATIVIDADE / CALENDÁRIO */
          <div className="flex flex-col flex-1">
            {/* Header do conteúdo */}
            {disc && (
              <div className="relative bg-gray-900 text-white overflow-hidden">
                {CONFIG.bannerHub && <img src={CONFIG.bannerHub} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
                <div className="relative px-8 py-8 flex items-center gap-4">
                  <button onClick={() => setDisciplinaAtiva(null)}
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center text-white transition-all">
                    ←
                  </button>
                  <div>
                    <div className="text-xs text-white opacity-40 uppercase tracking-widest">
                      {atividade ? "Atividade" : `Disciplina · ${disc.codigo ?? ""}`}
                    </div>
                    <h2 className="text-xl font-bold">{disc.nome}</h2>
                    {disc.ch && <div className="text-white opacity-50 text-xs mt-0.5">{disc.ch}</div>}
                  </div>
                  {c && (d => d && (d.ClassroomA || d.ClassroomB) && (
                    <div className="ml-auto flex gap-3" onClick={e => e.stopPropagation()}>
                      {d.ClassroomA && <a href={d.ClassroomA} target="_blank" rel="noopener noreferrer" className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1.5 rounded-full font-semibold transition-all">🔗 {d.classroomLabelA ?? "Turma A"}</a>}
                      {d.ClassroomB && <a href={d.ClassroomB} target="_blank" rel="noopener noreferrer" className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1.5 rounded-full font-semibold transition-all">🔗 {d.classroomLabelB ?? "Turma B"}</a>}
                    </div>
                  ))(disc)}
                </div>
              </div>
            )}
            <div className="flex-1 p-8 max-w-3xl">
              {renderConteudo(disciplinaAtiva, setDisciplinaAtiva)}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
