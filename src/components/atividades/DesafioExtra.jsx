import { useState } from "react";

export default function DesafioExtra() {
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
