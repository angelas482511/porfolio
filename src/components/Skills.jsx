const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    category: 'Backend',
    skills: ['PHP', 'Python', 'FastAPI', 'SQL', 'REST APIs'],
  },
  {
    category: 'Bases de Datos',
    skills: ['MySQL', 'PostgreSQL', 'SQLAlchemy'],
  },
  {
    category: 'DevOps & Herramientas',
    skills: ['Docker', 'Git/GitHub', 'MQTT', 'Linux'],
  },
  {
    category: 'Otros',
    skills: ['Flutter/Dart', 'Firebase', 'Metodologías Ágiles'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Tecnologías y herramientas con las que trabajo</p>
        <div className="skills-grid">
          {skillCategories.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-lang">
          <h3 className="skill-category">Idiomas</h3>
          <div className="skill-tags">
            <span className="skill-tag">Español — Nativo</span>
            <span className="skill-tag">Inglés — B2 (Cambridge)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
