import { Link } from 'react-router-dom'
import "./index.css"

export default function Header() {
  return (
    <header className="app-header">
      <nav>
        <ul className="header-list">
          <li>
            <Link to="/alunos" className="header-links">Alunos</Link>
          </li>
          <li>
            <Link to="/alunos" className="header-links">Alunos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}