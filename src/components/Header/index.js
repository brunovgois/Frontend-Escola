import { Link } from 'react-router-dom'
import "./index.css"

export default function Header() {
  return (
    <header className="app-header">
      <nav>
        <ul className="header-list">
          <li>
            <Link to="/" className="header-links">Home</Link>
          </li>
          <li>
            <Link to="/alunos" className="header-links">Alunos</Link>
          </li>
          <li>
            <Link to="/mentores" className="header-links">Mentores </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}