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
  relatorio:  { id:"relatorio",  nome:"Relatório de Marca",     codigo:"DCU · Bloco 1", ch:"2 pts",          cor:"violet", icon:"📝", disponivel:true },
  ods:        { id:"ods",        nome:"Projeto ODS",             codigo:"DT + DCU + PI",  ch:"6+4+8 pts",      cor:"red",    icon:"🌍", disponivel:true },
  delicatte:  { id:"delicatte",  nome:"Delicatte Confeitaria",   codigo:"DT · Bloco 2",   ch:"1 pt",           cor:"pink",   icon:"🎂", disponivel:true },
  desafio:    { id:"desafio",    nome:"Desafio: UX na Prática",  codigo:"DCU + DT",       ch:"4pts DT + 4pts DCU", cor:"blue", icon:"🎯", disponivel:true },
  calendario: { id:"calendario", nome:"Calendário de Aulas",     codigo:"2026",           ch:"",               cor:"indigo", icon:"📅", disponivel:true },
};

export default function MobileLayout({ disciplinaAtiva, setDisciplinaAtiva }) {
  const atividade = atividadesMap[disciplinaAtiva];
  const disc = atividade ? atividade : disciplinaAtiva ? disciplinas.find(d => d.id === disciplinaAtiva) : null;
  const c = disc && !atividade ? corMap[disc.cor] : null;

  // ── TELA DE DETALHE (disciplina ou atividade ou calendário) ──
  if (disc) {
    return (
      <div className="max-w-3xl mx-auto w-full font-sans bg-gray-50 min-h-screen">
        {/* Header */}
        <div className={`relative ${c?.bg ?? "bg-gray-800"} text-white shadow-md`}>
          {disc.imagem && <img src={disc.imagem} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />}
          {!disc.imagem && CONFIG.bannerHub && <img src={CONFIG.bannerHub} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />}
          <div className="relative px-4 pt-4 pb-5">
            <button onClick={() => setDisciplinaAtiva(null)}
              className="flex items-center gap-1.5 text-white opacity-70 hover:opacity-100 text-sm font-medium mb-3 touch-manipulation">
              ← Voltar
            </button>
            <div className="flex items-start gap-3">
              <div>
                <div className="text-xs text-white opacity-50 uppercase tracking-wider">
                  {atividade ? "Atividade" : `${disc.codigo ?? ""}`}
                </div>
                <h2 className="text-xl font-bold leading-tight">{disc.nome}</h2>
                {disc.ch && <div className="text-white opacity-50 text-xs mt-0.5">{disc.ch}</div>}
              </div>
            </div>
            {/* Links Classroom */}
            {(() => {
              const d = disciplinas.find(d2 => d2.id === disciplinaAtiva);
              return d && (d.ClassroomA || d.ClassroomB) ? (
                <div className="flex gap-2 mt-3 flex-wrap" onClick={e => e.stopPropagation()}>
                  {d.ClassroomA && <a href={d.ClassroomA} target="_blank" rel="noopener noreferrer" className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full font-semibold transition-all">🔗 {d.classroomLabelA ?? "Turma A"}</a>}
                  {d.ClassroomB && <a href={d.ClassroomB} target="_blank" rel="noopener noreferrer" className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full font-semibold transition-all">🔗 {d.classroomLabelB ?? "Turma B"}</a>}
                </div>
              ) : null;
            })()}
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-4">
          {disciplinaAtiva === "calendario"  ? <Calendario /> :
           disciplinaAtiva === "desafio"     ? <DesafioExtra /> :
           disciplinaAtiva === "relatorio"   ? <AtividadeRelatorio /> :
           disciplinaAtiva === "ods"         ? <AtividadeODS /> :
           disciplinaAtiva === "delicatte"   ? <AtividadeDelicatte /> :
           disc.id === "dcu"                 ? <PlanoDCU /> :
           disc.id === "dt"                  ? <PlanoDT /> :
           disc.id === "pi"                  ? <PlanoPI /> :
           disc.disponivel                   ? null :
           <PlanoEmBreve disc={disc} />}
        </div>
      </div>
    );
  }

  // ── TELA INICIAL (hub) ──
  return (
    <div className="max-w-3xl mx-auto font-sans bg-gray-50 min-h-screen w-full">
      {/* Header hub */}
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
        {/* Calendário — destaque */}
        <div onClick={() => setDisciplinaAtiva("calendario")}
          className="mb-4 bg-gray-900 text-white rounded-2xl px-4 py-3.5 flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-all touch-manipulation shadow-sm">
          <span className="text-2xl">📅</span>
          <div className="flex-1">
            <div className="font-bold text-sm">Calendário de Aulas</div>
            <div className="text-xs text-white opacity-50 mt-0.5">Acompanhe os conteúdos e o planejamento</div>
          </div>
          <span className="text-white opacity-40 text-xl">›</span>
        </div>

        {/* Disciplinas */}
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
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{d.codigo} · {d.ch}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">{d.descricao}</div>
                    {(d.ClassroomA || d.ClassroomB) && (
                      <div className="flex flex-wrap gap-2 mt-2" onClick={e => e.stopPropagation()}>
                        {d.ClassroomA && <a href={d.ClassroomA} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-medium">🔗 {d.classroomLabelA ?? "Turma A"}</a>}
                        {d.ClassroomB && <a href={d.ClassroomB} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-medium">🔗 {d.classroomLabelB ?? "Turma B"}</a>}
                      </div>
                    )}
                  </div>
                  <span className="text-gray-300 text-xl flex-shrink-0">›</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Atividades */}
        <div className="mt-4">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Atividades</p>
          <div className="space-y-3">
            {atividades.map(item => (
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
