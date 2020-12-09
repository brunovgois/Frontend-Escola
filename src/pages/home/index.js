import Button from '@material-ui/core/Button';
import homeLogo from '../../images/school.png';

import { Link } from 'react-router-dom'

import "./index.css"

export default function Home() {
  return (
    <div className="App">

        <img src={homeLogo} className="logo-image" alt="logo" />
        <h1>EscolApp</h1>

      <Link to="/alunos" className="link">
        <Button
          variant="contained"
          color="">
            Painel Admin
        </Button>
      </Link>
    </div>
  );
  
}