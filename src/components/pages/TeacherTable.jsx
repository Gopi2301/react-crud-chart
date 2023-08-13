import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../sibebar/sidebar'
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { API_URL } from '../../API/api_url'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TeacherTable = () => {
    const [filterData, setFilterData] = useState([])
    const fetchData = async () => {
        const ApiData = await axios.get(API_URL);

        const filteredData = ApiData.data.filter(item => item.designation === 'teacher');
        setFilterData(filteredData)
    }
    useEffect(() => { fetchData() }, []);
    const deleteTeacher = async (id) => {
        await axios.delete(API_URL + '/' + id);
        fetchData()
    }
    return (
        <div className='col container'>
            <div><Sidebar /></div>
            <div className='table'>
                <TableContainer component={Paper}>
                    <TableHead>
                        <TableRow>
                        </TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Experience</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableHead>
                    <TableBody>
                        {filterData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.studentClass}</TableCell>
                                <TableCell align="right">{row.subject}</TableCell>
                                <TableCell align="right">{row.experience}</TableCell>
                                <TableCell align="right"><DeleteIcon onClick={() => deleteTeacher(row.id)} className='delete icon' /><EditIcon className='edit icon' /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </div>
        </div>
    )
}

export default TeacherTable
