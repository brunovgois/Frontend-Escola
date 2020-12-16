import { React, useEffect, useState } from 'react'
import axios from '../../services/httpService'
import Table from '../../components/Table'


export default function Mentores() {
    const [mentores, setMentores] = useState({})

    const fetchData = async () => {
        const result = await axios.get('/mentor');
        setMentores(result.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = (mentorId) => {
        axios.delete(`mentor/${mentorId}`).then(() => {
          const updatedMentoresList = mentores.content.filter(mentor => mentor.id !== mentorId)
          setMentores(updatedMentoresList)
          fetchData() //tempfix
        })
    }

    const columns = [
        { title: 'ID', field: 'id'},
        { title: 'Nome', field: 'name'},
        { title: 'Cidade', field: 'city'}
    ]
    return (
        <div>
            <Table
            title="Mentores"
            columns={columns}
            data={mentores.content}
            tooltip={"mentor"}
            handleDelete={handleDelete}
            // handleAdd={handleOpenAddStudentDialog}
            // handleUpdate={handleUpdate}
            />
        </div>
    )
}