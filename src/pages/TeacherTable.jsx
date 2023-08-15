import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../components/sibebar/Sidebar'
import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { API_URL } from '../API/api_url'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'

const TeacherTable = () => {
    const [filterData, setFilterData] = useState([]);
    const navigate = useNavigate()

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
    const handleEdit = ({ row }) => {
        const designation = 'teacher';
        localStorage.setItem('designation', designation)
        localStorage.setItem('id', row.id);
        localStorage.setItem('firstName', row.firstName);
        localStorage.setItem('lastName', row.lastName);
        localStorage.setItem('subject', row.subject);
        localStorage.setItem('courses', row.courses);
        localStorage.setItem('experience', row.experience);
        navigate('/editpage')
    }
    return (
        <Grid container spacing={2}>
            <Sidebar />
            <Grid item xs={10} className='main'>
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
                                <TableCell align="right">{row.subject}</TableCell>
                                <TableCell align="center">{row.experience}</TableCell>
                                <TableCell align="right"><DeleteIcon onClick={() => deleteTeacher(row.id)} className='delete icon' /><EditIcon onClick={() => handleEdit({ row })} className='edit icon' /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default TeacherTable
