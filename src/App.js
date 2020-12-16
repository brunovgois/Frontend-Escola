import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Fragment } from 'react'

import Home from "./pages/home"
import Aluno from "./pages/aluno"
import Mentor from "./pages/mentor"

import Header from "./components/Header"
export default function App() {
  return(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Fragment>
        <Header />
        <Route path="/alunos" component={Aluno} />
        <Route path="/mentores" component={Mentor} />
      </Fragment>
    </Switch>
  </Router>
  )
}