const projects = [
  {
    title: 'SOS La Azohía',
    subtitle: 'Plataforma de donaciones y noticias',
    description:
      'Aplicación web comunitaria para la asociación SOS La Azohía, dedicada a la protección del litoral de La Azohía (Murcia). Incluye sistema de donaciones con tienda solidaria, gestión de noticias, panel de administración completo y autenticación segura.',
    tech: ['PHP', 'MySQL', 'Bootstrap 5', 'JavaScript', 'HTML/CSS'],
    highlights: [
      'CRUD de noticias y productos',
      'Carrito de donaciones con sesiones PHP',
      'Panel admin con autenticación',
      'Diseño responsive',
    ],
    image: '/porfolio/assets/sosazohia.jpg',
    links: {
      github: 'https://github.com/angeela703/SOSAZOHIA',
    },
  },
  {
    title: 'Senior Care (RITA)',
    subtitle: 'Asistente por voz para mayores',
    description:
      'Sistema inteligente de asistencia domiciliaria para personas mayores que viven solas. RITA escucha, detecta emergencias y alerta a cuidadores mediante una app móvil. Proyecto desplegado en producción con usuarios reales.',
    tech: ['Python', 'FastAPI', 'Flutter', 'PostgreSQL', 'Docker', 'MQTT', 'LLMs'],
    highlights: [
      'Detección de caídas y emergencias por voz',
      'App móvil Flutter para cuidadores',
      'Análisis de bienestar diario con IA',
      'Arquitectura edge + cloud',
    ],
    image: '/porfolio/assets/seniorcare.jpg',
    links: {
      github: 'https://github.com/angeela703/Seniorcare-main',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Trabajos destacados de mi formación y prácticas profesionales
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
