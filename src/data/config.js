import dcuApp from '../../img/clasroom-dcu-app.png';
import dtApp  from '../../img/clasroom-dt-app.png';
import piApp  from '../../img/clasroom-pi-app.png';
import perfil from '../../img/perfil-samara.jpg';
import banner from '../../img/download.jpg';

export const CONFIG = {
  escola:    "ETE Cícero Dias",
  curso:     "Desenvolvimento de Sistemas",
  modulo:    "Módulo 1 · Subsequente",
  periodo:   "2026–2026",
  professora: {
    nome:   "Samara Silvia Sabino",
    titulo: "Professora · Módulo 1",
    foto:   perfil,
    email:  "samarasilvia.educa@gmail.com",
  },
  bannerHub: banner,
};

export const disciplinas = [
  {
    id: "dcu", codigo: "DE_232", nome: "Design Centrado no Usuário", ch: "40h",
    cor: "indigo", icon: "🎯", disponivel: true, imagem: dcuApp,
    descricao: "Avaliar, questionar e justificar decisões de design com base em usabilidade e interação.",
    ClassroomA: "https://classroom.google.com/c/Nzk0MTMxNjMyNjM4?cjc=fni6mzwd",
    ClassroomB: "https://classroom.google.com/c/Nzk0MTMxNTE0MDAy?cjc=7gg4shse",
  },
  {
    id: "dt", codigo: "DE_233", nome: "Design Thinking", ch: "40h",
    cor: "rose", icon: "💡", disponivel: true, imagem: dtApp,
    descricao: "Criar com empatia — persona, prototipação e desenvolvimento de soluções inovadoras.",
    ClassroomA: "https://classroom.google.com/c/Nzk0MTMxNTcxMTk4?cjc=hnuoejfx",
    ClassroomB: "https://classroom.google.com/c/Nzk0MTMxMTE2MDQy?cjc=k4yaddw4",
  },
  {
    id: "pi", codigo: "DE_234", nome: "Projeto Integrador I", ch: "80h",
    cor: "orange", icon: "🚀", disponivel: true, imagem: piApp,
    descricao: "HTML5 + CSS3 + protótipo Figma — do portfólio individual ao projeto ODS em grupo.",
    ClassroomA: "https://classroom.google.com/c/ODUxNTEwMDAwNzY5?cjc=s4lp2z46",
    ClassroomB: "https://classroom.google.com/c/Nzk0MTMzMTgyMDIy?cjc=4r23aldb",
    classroomLabelA: "HTML & CSS",
    classroomLabelB: "Imersão ODS",
  },
];

export const corMap = {
  indigo: { bg: "bg-purple-900",  border: "border-indigo-400", badge: "bg-indigo-100 text-indigo-800", text: "text-indigo-700" },
  rose:   { bg: "bg-blue-600",    border: "border-rose-400",   badge: "bg-rose-100 text-rose-800",     text: "text-rose-700"   },
  orange: { bg: "bg-rose-500",    border: "border-orange-400", badge: "bg-orange-100 text-orange-800", text: "text-orange-700" },
  violet: { bg: "bg-violet-700",  border: "border-violet-400", badge: "bg-violet-100 text-violet-800", text: "text-violet-700" },
  red:    { bg: "bg-red-600",     border: "border-red-400",    badge: "bg-red-100 text-red-800",       text: "text-red-700"    },
  blue:   { bg: "bg-blue-700",    border: "border-blue-400",   badge: "bg-blue-100 text-blue-800",     text: "text-blue-700"   },
  pink:   { bg: "bg-pink-600",    border: "border-pink-400",   badge: "bg-pink-100 text-pink-800",     text: "text-pink-700"   },
};

export const atividades = [
  { id:"relatorio", icon:"📝", label:"Relatório de Marca",      badges:[{txt:"3pts · DCU", bg:"bg-indigo-600"}],                                                                desc:"Gramática Visual, Mecanismos Cognitivos e Decisões de Interface de uma marca real.",         cor:"border-indigo-300", top:"bg-indigo-600" },
  { id:"ods",       icon:"🌍", label:"Projeto ODS",             badges:[{txt:"6pts DT",bg:"bg-teal-600"},{txt:"4pts DCU",bg:"bg-indigo-600"},{txt:"8pts PI",bg:"bg-orange-600"}], desc:"Do problema real ao protótipo navegável — ODS, persona e Figma.", cor:"border-teal-300",   top:"bg-teal-600"   },
  { id:"delicatte", icon:"🎂", label:"Delicatte Confeitaria",   badges:[{txt:"+1pt participação · PI", bg:"bg-orange-500"}],                                                     desc:"Site HTML + CSS + JS do cardápio da confeitaria — projeto guiado de programação.",            cor:"border-orange-300", top:"bg-orange-500"  },
  { id:"desafio",   icon:"🎯", label:"Desafio: UX na Prática", badges:[{txt:"4pts DT",bg:"bg-violet-600"},{txt:"4pts DCU",bg:"bg-indigo-600"}],                                 desc:"Auditoria + redesign no Figma + pitch de 3 minutos.",            cor:"border-violet-300", top:"bg-violet-600" },
];
