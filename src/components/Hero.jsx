export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hola, soy</p>
        <h1 className="hero-name">
          Ángela Vega Sánchez
        </h1>
        <h2 className="hero-title">
          Desarrolladora de Aplicaciones Web
        </h2>
        <p className="hero-bio">
          Soy una persona apasionada por el aprendizaje y el desarrollo constante.
          Proactiva, comprometida y con gran capacidad de trabajo en equipo.
          Me adapto a diferentes entornos y situaciones, combinando creatividad
          con análisis para resolver problemas.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-outline">
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
