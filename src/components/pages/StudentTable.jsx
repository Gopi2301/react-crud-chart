import React, { useEffect, useState } from 'react'
import Sidebar from '../sibebar/sidebar'
import { API_URL } from '../../API/api_url'
import axios from 'axios';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import '../../styles/pages/--studentTable.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const StudentTable = () => {
    const [filterData, setFilterData] = useState([]);
    const ApiCall = async () => {
        try {
            const ApiData = await axios.get(API_URL);
            const studentsData = ApiData.data.filter(item => item.designation === "student");
            setFilterData(studentsData)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { ApiCall() }, []);
    const deleteStudent = async (id) => {
        try {
            await axios.delete(API_URL + '/' + id);
            ApiCall()
        } catch (error) {
            console.log(error)
        }

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
                        <TableCell>Student Class</TableCell>
                        <TableCell>Additional Courses</TableCell>
                        <TableCell>Overall Score</TableCell>
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
                                <TableCell align="right">{row.courses}</TableCell>
                                <TableCell align="right">{row.score}</TableCell>
                                <TableCell align="right"><DeleteIcon onClick={() => deleteStudent(row.id)} className='delete icon' /><EditIcon className='edit icon' /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </TableContainer>
            </div>
        </div>
    )
}

export default StudentTable
