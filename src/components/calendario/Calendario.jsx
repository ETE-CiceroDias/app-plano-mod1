import { useState } from "react";
import { semanas, discColor, statusStyle } from "../../data/calendario";

// Badge de turma
function TurmaBadge({ turma }) {
  if (turma === "AB") return (
    <span className="flex gap-1">
      <span className="text-xs px-1.5 py-0.5 rounded-full font-bold bg-purple-100 text-purple-700">A</span>
      <span className="text-xs px-1.5 py-0.5 rounded-full font-bold bg-blue-100 text-blue-700">B</span>
    </span>
  );
  if (turma === "A") return <span className="text-xs px-1.5 py-0.5 rounded-full font-bold bg-purple-100 text-purple-700">A</span>;
  if (turma === "B") return <span className="text-xs px-1.5 py-0.5 rounded-full font-bold bg-blue-100 text-blue-700">B</span>;
  return null;
}

// Card de uma aula
function AulaCard({ aula }) {
  const [open, setOpen] = useState(false);
  const st  = statusStyle[aula.status] ?? statusStyle.planned;
  const dc  = aula.disciplina ? discColor[aula.disciplina] : null;

  const isSpecial = aula.status === "holiday" || aula.status === "cancelled";

  return (
    <div
      onClick={() => !isSpecial && setOpen(o => !o)}
      className={`rounded-xl border-2 ${st.ring} ${st.bg} transition-all mb-2 ${!isSpecial ? "cursor-pointer hover:shadow-sm active:scale-[0.99] touch-manipulation" : ""}`}
    >
      <div className="flex items-start gap-3 px-3 py-3">
        {/* Dot de status */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-0.5">
          <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`} />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            {/* Data + dia */}
            <span className="text-xs font-bold text-gray-500 tabular-nums">{aula.data}</span>
            <span className="text-xs text-gray-400">{aula.diaSemana}</span>

            {/* Badge disciplina */}
            {dc && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold border ${dc.bg} ${dc.text} ${dc.border}`}>
                {aula.disciplina}
              </span>
            )}

            {/* Badge turma */}
            {aula.turma && <TurmaBadge turma={aula.turma} />}

            {/* Status badge */}
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${st.text}`}>
              {st.label}
            </span>
          </div>

          <p className="text-sm font-semibold text-gray-800 leading-snug">{aula.titulo}</p>

          {/* Entrega badge */}
          {aula.entrega && (
            <div className="mt-1 text-xs px-2 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-medium inline-block">
              {aula.entrega}
            </div>
          )}

          {/* Descrição expandida */}
          {open && (
            <p className="text-xs text-gray-600 mt-2 leading-relaxed border-t border-gray-100 pt-2">
              {aula.desc}
            </p>
          )}
        </div>

        {/* Chevron */}
        {!isSpecial && (
          <span className="text-gray-300 text-xs flex-shrink-0 mt-1">{open ? "▲" : "▼"}</span>
        )}
      </div>
    </div>
  );
}

// Legenda
function Legenda() {
  return (
    <div className="flex flex-wrap gap-2 mb-4 px-1">
      {Object.entries(statusStyle).map(([k, v]) => (
        <span key={k} className="flex items-center gap-1 text-xs text-gray-500">
          <span className={`w-2 h-2 rounded-full ${v.dot}`} />
          {v.label}
        </span>
      ))}
    </div>
  );
}

// Filtro de turma
const FILTROS = ["Todas", "A", "B"];

export default function Calendario() {
  const [filtroTurma, setFiltroTurma] = useState("Todas");

  // Filtra aulas por turma selecionada
  const filtrarAulas = (aulas) => {
    if (filtroTurma === "Todas") return aulas;
    return aulas.filter(a => a.turma === filtroTurma || a.turma === "AB");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-4 p-3 bg-gray-900 rounded-xl text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">2026 · Módulo 1</p>
        <h2 className="text-base font-bold">Calendário de Aulas</h2>
        <p className="text-xs text-gray-400 mt-0.5">
          Acompanhe os conteúdos dados e o planejamento das próximas semanas.
        </p>
      </div>

      {/* Filtro de turma */}
      <div className="flex gap-2 mb-4">
        <span className="text-xs text-gray-400 font-medium self-center">Turma:</span>
        {FILTROS.map(f => (
          <button
            key={f}
            onClick={() => setFiltroTurma(f)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all touch-manipulation ${
              filtroTurma === f
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f === "Todas" ? "Todas" : `Turma ${f}`}
          </button>
        ))}
      </div>

      {/* Legenda */}
      <Legenda />

      {/* Semanas */}
      <div className="space-y-5">
        {semanas.map(semana => {
          const aulasFiltradas = filtrarAulas(semana.aulas);
          if (aulasFiltradas.length === 0) return null;

          return (
            <div key={semana.id}>
              {/* Header da semana */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{semana.mes}</span>
                  <span className="text-sm font-bold text-gray-700">Semana de {semana.label}</span>
                </div>
                <div className="flex-1 h-px bg-gray-200 ml-2" />
              </div>

              {/* Destaque da semana */}
              {semana.destaque && (
                <div className="mb-2 px-3 py-2 rounded-lg bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700">
                  {semana.destaque}
                </div>
              )}

              {/* Cards de aula */}
              <div>
                {aulasFiltradas.map((aula, i) => (
                  <AulaCard key={i} aula={aula} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400 mt-6 mb-2">
        O calendário é atualizado conforme o semestre avança.
      </p>
    </div>
  );
}
