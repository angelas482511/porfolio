const experience = [
  {
    period: 'Ago 2022',
    title: 'Personal Administrativo',
    organization: 'Consejo de Transparencia de la Región de Murcia — Universidad de Murcia',
    location: 'Murcia (teletrabajo)',
    description:
      'Apoyo al proyecto de evaluación del cumplimiento de obligaciones en materia de transparencia de entidades sujetas a la Ley 12/2014. Responsable de evaluar la documentación de los ayuntamientos en el portal de transparencia.',
  },
  {
    period: 'Oct – Dic 2018',
    title: 'Monitora Infantil de Patinaje en Línea',
    organization: 'González Conesa José Ángel',
    location: 'Murcia',
    description:
      'Impartición de clases de patinaje en línea a niños de 5 a 12 años en varios colegios. Facilitación del desarrollo de habilidades físicas y fomento del trabajo en equipo.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">Experiencia</h2>
        <p className="section-subtitle">Mi trayectoria profesional</p>
        <div className="timeline">
          {experience.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-location">{item.location}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
