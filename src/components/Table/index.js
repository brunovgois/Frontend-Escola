import { React, forwardRef } from 'react'
import MaterialTable from 'material-table'

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import DeleteOutline from '@material-ui/icons/DeleteOutline'


export default function Table(props) {

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

  return (
      <MaterialTable
        title={props.title}
        icons={tableIcons}
        columns={props.columns}
        data={props.data}
        actions={[
          {
            icon: DeleteOutline,
            tooltip: `Deletar ${props.deleteTooltip}`,
          onClick: (event, rowData) => props.handleDelete(rowData.id)
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
    )
}