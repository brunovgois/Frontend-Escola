import { React, useEffect, useState } from 'react'
import axios from '../../services/httpService'
import Table from '../../components/Table'

import "./index.css"

export default function Alunos() {

  const [alunos, setAlunos] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/aluno');
      setAlunos(result.data)
      console.log(result)
    };

    fetchData();
  }, []) //2º argumento define as variaveis que o hooke depende. [] = fetchData so vai ser chamado quando o componente é montado

  const columns = [
    { title: 'Nome', field: 'name' },
    { title: 'Classe', field: 'classe' }
  ]

  return (
    <div className="App">
      <Table title="Alunos" columns={columns} data={alunos.content}/>
    </div>
  )
}