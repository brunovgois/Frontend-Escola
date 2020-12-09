import { React, useEffect, forwardRef, useState } from 'react'
import axios from '../../services/httpService'
import MaterialTable from 'material-table'

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import DeleteOutline from '@material-ui/icons/DeleteOutline'

import "./index.css"


export default function Alunos() {

  const [alunos, setAlunos] = useState({})

  const tableIcons = {
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),

  };

  useEffect(() => {

    const fetchData = async () => {

      const result = await axios.get('/aluno');
      setAlunos(result.data)
      console.log(result)
    };
 
    fetchData();
  }, []) //2º argumento define as variaveis que o hooke depende. [] = fetchData so vai ser chamado quando o componente é montado

  return (
    <div className="App">
      <MaterialTable
        title='Alunos'
        icons={tableIcons}
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'Classe', field: 'classe' }
        ]}
        data={alunos.content}
        actions={[
          {
            icon: DeleteOutline,
            tooltip: `Deletar Aluno`,
            onClick: (event, rowData) => window.confirm(`Deletar ${rowData.name}?`),
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
    </div>
  )
}