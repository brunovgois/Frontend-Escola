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
    };
    fetchData();
  }, [])

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Classe', field: 'classe' }
  ]

  const handleDelete = (alunoId) => {
    axios.delete(`aluno/${alunoId}`).then(() => {
      const updatedAlunosList = alunos.content.filter(aluno => aluno.id !== alunoId)
      console.log(updatedAlunosList)
      
      setAlunos(updatedAlunosList)
    })
  }

  return (
    <div className="App">
      <Table
        title="Alunos"
        columns={columns}
        data={alunos.content}
        deleteTooltip={"aluno"}
        handleDelete={handleDelete}
      />
    </div>
  )

}

