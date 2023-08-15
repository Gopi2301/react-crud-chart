import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import '../styles/pages/--studentTable.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../components/sibebar/Sidebar';
import { API_URL } from '../API/api_url';
const StudentTable = () => {
    const [filterData, setFilterData] = useState([]);
    const navigate = useNavigate();

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
    const handleEdit = ({ row }) => {

        const designation = 'student';
        localStorage.setItem('designation', designation)
        localStorage.setItem('id', row.id);
        localStorage.setItem('firstName', row.firstName);
        localStorage.setItem('lastName', row.lastName);
        localStorage.setItem('studentClass', row.studentClass);
        localStorage.setItem('courses', row.courses);
        localStorage.setItem('score', row.score);
        navigate('/editpage')


    }
    return (
        <Grid container spacing={2}>
            <Sidebar />
            <Grid item xs={10} className='main'>
                <TableContainer className="table" component={Paper}>
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
                                <TableCell align="center">{row.lastName}</TableCell>
                                <TableCell align="center">{row.studentClass}</TableCell>
                                <TableCell align="center">{row.courses}</TableCell>
                                <TableCell align="center">{row.score}</TableCell>
                                <TableCell align="center"><DeleteIcon onClick={() => deleteStudent(row.id)} className='delete icon' /><EditIcon onClick={() => handleEdit({ row })} className='edit icon' /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default StudentTable
