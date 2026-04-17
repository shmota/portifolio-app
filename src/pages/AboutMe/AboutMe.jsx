import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='about-me-base'>
      <div className="about-me-text">
        <h3>Sobre mim</h3>
        <p>Desde cedo tive interesse por tecnologia, especialmente por videogames, o que despertou minha curiosidade sobre como as coisas funcionam 
          por trás das telas. Dei meus primeiros passos na programação em um curso de robótica, onde desenvolvia soluções com robôs 
          LEGO utilizando a controladora NXT, programando em lógica de blocos.</p>
        <h3>Formação</h3>
        <p>Sou formado em Análise e Desenvolvimento de Sistemas, onde consolidei minha base técnica e ampliei minha visão sobre desenvolvimento de software.</p>
        <h3>Experiência profissional</h3>
        <p>Ao longo da minha trajetória profissional, atuei em ambientes corporativos desenvolvendo automações com Python e Google Apps Script, 
          além de construir dashboards estratégicos com Power BI e Looker Studio para apoiar a tomada de decisão. 
          Também adquiri experiência com desenvolvimento de APIs e integração de sistemas, utilizando tecnologias como JavaScript, 
          React e bancos de dados relacionais.</p>
        <h3>Perfil profissional</h3>
        <p>Tenho um perfil analítico, com forte foco em eficiência operacional e redução de retrabalho. Gosto de resolver problemas reais através da tecnologia e estou constantemente buscando evoluir como desenvolvedor, criando soluções que gerem impacto concreto.</p>
      </div>

      <div className="about-me-image">
        <img src="https://avatars.githubusercontent.com/u/47679684?v=4" alt="Profile" className='profile-image' />
      </div>
      
    </div>
  )
}