import Button from '@material-ui/core/Button';
import homeLogo from '../../images/school.png';

import { Link } from 'react-router-dom'

import "./index.css"

export default function Home() {
  return (
    <div className="App">
      <div className="logo">
        <img src={homeLogo} className="logo-image" alt="logo" />
        <h1>Escola App</h1>
      </div>
      <Link to="/alunos" className="link">
        <Button
          variant="contained">
            Painel Admin
        </Button>
      </Link>
    </div>
  );
  
}