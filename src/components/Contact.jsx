export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Hablamos? Estoy abierta a nuevas oportunidades
        </p>
        <div className="contact-cards">
          <a href="mailto:angeela703@gmail.com" className="contact-card">
            <span className="contact-icon">✉</span>
            <span className="contact-label">Email</span>
            <span className="contact-value">angeela703@gmail.com</span>
          </a>
          <a href="tel:+34601437023" className="contact-card">
            <span className="contact-icon">📞</span>
            <span className="contact-label">Teléfono</span>
            <span className="contact-value">+34 601 43 70 23</span>
          </a>
          <a
            href="https://www.linkedin.com/in/angeela703"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">🔗</span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/angeela703</span>
          </a>
          <a
            href="https://github.com/angeela703"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">💻</span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/angeela703</span>
          </a>
        </div>
      </div>
    </section>
  )
}
