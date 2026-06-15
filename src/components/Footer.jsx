export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          &copy; {year} Ángela Vega Sánchez. Diseñado y desarrollado con React.
        </p>
      </div>
    </footer>
  )
}
