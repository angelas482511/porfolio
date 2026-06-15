const education = [
  {
    period: '2024 – 2026',
    title: 'FP Superior en Desarrollo de Aplicaciones Web',
    organization: 'CESUR',
    location: 'Murcia',
  },
  {
    period: '2019 – 2023',
    title: 'Grado en Sociología',
    organization: 'Universidad de Murcia',
    location: 'Murcia',
  },
  {
    period: 'Jul 2022',
    title: 'Formación en Evaluación del Índice de Transparencia',
    organization: 'Consejo de la Transparencia de la Región de Murcia',
    location: 'Murcia',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <h2 className="section-title">Formación</h2>
        <p className="section-subtitle">Mi formación académica y complementaria</p>
        <div className="timeline">
          {education.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-location">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
