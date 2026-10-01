import reactLogo from './assets/react.svg'
import senaiLogo from './assets/senai-logo.png'
import './App.css'

const aprendizados = [
  { icone: '🧠', titulo: 'Lógica de programação', texto: 'Aprenda a pensar como um programador e resolver problemas passo a passo.' },
  { icone: '🌐', titulo: 'Desenvolvimento web', texto: 'Crie sites e sistemas que funcionam em qualquer navegador.' },
  { icone: '🎨', titulo: 'Frontend', texto: 'Construa as telas e interfaces que o usuário vê e usa.' },
  { icone: '⚙️', titulo: 'Backend', texto: 'Desenvolva a parte que processa regras e dados por trás do sistema.' },
  { icone: '🗄️', titulo: 'Banco de dados', texto: 'Armazene e consulte informações de forma organizada com SQL.' },
  { icone: '🔌', titulo: 'APIs', texto: 'Conecte sistemas e aplicações para trocarem informações.' },
  { icone: '📱', titulo: 'Aplicativos', texto: 'Crie aplicações para uso no dia a dia, no computador e no celular.' },
  { icone: '🌿', titulo: 'Versionamento de código', texto: 'Use Git e GitHub para guardar o histórico e trabalhar em equipe.' },
]

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'GitHub']

const areas = [
  { titulo: 'Desenvolvimento Frontend', texto: 'Cria as interfaces com as quais as pessoas interagem.' },
  { titulo: 'Desenvolvimento Backend', texto: 'Cuida da lógica, da segurança e dos dados do sistema.' },
  { titulo: 'Desenvolvimento Full Stack', texto: 'Atua nas duas pontas: tela e servidor.' },
  { titulo: 'Desenvolvimento de aplicações', texto: 'Constrói sistemas completos para empresas e usuários.' },
  { titulo: 'Banco de dados', texto: 'Modela, organiza e mantém grandes volumes de informação.' },
  { titulo: 'Suporte e manutenção de sistemas', texto: 'Corrige erros e mantém os sistemas funcionando bem.' },
]

const projetos = [
  { icone: '👥', titulo: 'Cadastro de clientes', texto: 'Registre, edite e consulte os dados de clientes.' },
  { icone: '📦', titulo: 'Sistema de estoque', texto: 'Controle entrada, saída e quantidade de produtos.' },
  { icone: '📅', titulo: 'Aplicação de agendamentos', texto: 'Marque horários e evite conflitos de agenda.' },
  { icone: '🛒', titulo: 'Loja virtual', texto: 'Catálogo, carrinho e pedidos em um só lugar.' },
  { icone: '📊', titulo: 'Dashboard administrativo', texto: 'Gráficos e indicadores para acompanhar o negócio.' },
  { icone: '✅', titulo: 'Aplicativo de tarefas', texto: 'Organize atividades e acompanhe o que já foi feito.' },
]

function App() {
  const ano = new Date().getFullYear()

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a href="#inicio" className="logo">
            <img src={senaiLogo} alt="SENAI" className="logo__img" />
            <span>Desenvolvimento de Sistemas</span>
          </a>
          <nav className="nav" aria-label="Menu principal">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#aprendizados">Aprendizados</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#mercado">Mercado</a>
            <a href="#projetos">Projetos</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero__inner">
            <div className="hero__texto">
              <h1>Transforme ideias em sistemas.</h1>
              <p>
                Desenvolva soluções, aprenda novas tecnologias e construa seu
                futuro na área de TI com o curso Técnico em Desenvolvimento de
                Sistemas do SENAI.
              </p>
              <a href="#sobre" className="btn btn--laranja">Conheça o curso</a>
            </div>

            <div className="editor" aria-hidden="true">
              <div className="editor__barra">
                <span></span><span></span><span></span>
                <small>App.jsx</small>
              </div>
              <pre>
{`function MeuSistema() {
  const [tarefas, setTarefas] = useState([])

  return (
    <h1>Olá, mundo! 🚀</h1>
  )
}`}
              </pre>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao">
          <div className="container">
            <h2>Sobre o curso</h2>
            <div className="sobre">
              <div>
                <h3>O que é Desenvolvimento de Sistemas?</h3>
                <p>
                  É a área da tecnologia que cria programas, sites e aplicativos
                  usados por pessoas e empresas todos os dias, como um sistema de
                  vendas, um app de agendamento ou uma loja virtual.
                </p>
              </div>
              <div>
                <h3>Qual o objetivo do curso?</h3>
                <p>
                  Preparar você para entrar no mercado de trabalho, aprendendo
                  na prática a planejar, programar, testar e manter sistemas.
                </p>
              </div>
              <div>
                <h3>O que o profissional faz?</h3>
                <p>
                  Analisa problemas, escreve código, cria bancos de dados,
                  corrige erros e trabalha em equipe para entregar soluções
                  que funcionam.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="aprendizados" className="secao secao--cinza">
          <div className="container">
            <h2>O que você aprende</h2>
            <div className="grid grid--4">
              {aprendizados.map((item) => (
                <article className="card" key={item.titulo}>
                  <span className="card__icone">{item.icone}</span>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tecnologias" className="secao secao--escura">
          <div className="container">
            <h2>Tecnologias que você vai usar</h2>
            <ul className="tecs">
              {tecnologias.map((tec) => (
                <li key={tec}>
                  {tec === 'React' && (
                    <img src={reactLogo} alt="" className="tecs__logo" />
                  )}
                  {tec}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="mercado" className="secao">
          <div className="container">
            <h2>Áreas de atuação</h2>
            <div className="grid grid--3">
              {areas.map((area) => (
                <article className="card card--borda" key={area.titulo}>
                  <h3>{area.titulo}</h3>
                  <p>{area.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="secao secao--cinza">
          <div className="container">
            <h2>Sistemas que você pode construir</h2>
            <div className="grid grid--3">
              {projetos.map((proj) => (
                <article className="card" key={proj.titulo}>
                  <span className="card__icone">{proj.icone}</span>
                  <h3>{proj.titulo}</h3>
                  <p>{proj.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Seu futuro na tecnologia pode começar aqui.</h2>
            <p>Conheça o curso Técnico em Desenvolvimento de Sistemas.</p>
            <a
              href="https://www.senai.br"
              target="_blank"
              rel="noreferrer"
              className="btn btn--branco"
            >
              Quero conhecer o curso
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <strong>Técnico em Desenvolvimento de Sistemas</strong>
          <span>SENAI · 2026</span>
        </div>
      </footer>
    </>
  )
}

export default App