import { React, useEffect, useState } from 'react'
import axios from '../../services/httpService'
import Table from '../../components/Table'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import "./index.css"

export default function Alunos() {

  const [alunos, setAlunos] = useState({})

  const [open, setOpen] = useState(false)

  const [studentName, setStudentName] = useState("")
  const [studentClass, setStudentClass] = useState("")

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

      setAlunos(updatedAlunosList)
    })
  }
  const handleCreate = () => {
    axios.post('aluno', {
      name: studentName,
      classe: studentClass
    }).then((response) => {
      setAlunos(...alunos.content, response.data)
      setOpen(false);
    })
  }

  const handleUpdate = (updatedData) => {
    axios.put(`aluno/${updatedData.id}`, {
      name: updatedData.name,
      classe: updatedData.classe
    }).then((response) => {
      setAlunos(...alunos.content, response.data)
    })
  }

  const handleNameChange = (e) => {
    setStudentName(e.target.value)
  }

  const handleClassChange = (e) => {
    setStudentClass(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setStudentName("")
    setStudentClass("")

    setOpen(false);
  };



  return (
    <div className="App">

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar Aluno</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            onChange={handleNameChange}
          />
          <TextField
            margin="dense"
            label="Classe"
            fullWidth
            onChange={handleClassChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleCreate} color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>

      <Table
        title="Alunos"
        columns={columns}
        data={alunos.content}
        tooltip={"aluno"}
        handleDelete={handleDelete}
        handleAdd={handleClickOpen}
        handleUpdate={handleUpdate}
      />
    </div>
  )

}

