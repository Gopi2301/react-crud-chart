import React, { useState } from 'react'
import Sidebar from '../components/sibebar/Sidebar'
import FormControl from '@mui/material/FormControl';
import { Alert, Grid, TextField } from '@mui/material';
import '../styles/pages/--createstudent.scss'
import Button from '@mui/material/Button';
import { API_URL } from '../API/api_url'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateStudent = () => {
    const designation = "student"
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [studentClass, setStudentClass] = useState();
    const [courses, setCourses] = useState();
    const [score, setScore] = useState();
    const navigate = useNavigate()
    const postData = async () => {
        try {
            await axios.post(API_URL, {
                designation,
                firstName,
                lastName,
                studentClass,
                courses,
                score
            },
                alert('Student Added SuccesFully!'), navigate('/studenttable'))
        } catch (error) {
            console.log(error);
        }

    }
    console.log(URL)
    return (

        <Grid container spacing={2}>
            < Sidebar />
            <Grid item xs={10} className='main'>
                <FormControl className='form__list'>
                    <TextField className='form__list--item' onChange={event => setFirstName(event.target.value)} required id="outlined-basic" label="Student Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setLastName(event.target.value)} required id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setStudentClass(event.target.value)} required id="outlined-basic" label="Student Class ( 1 to 10)" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setCourses(event.target.value)} id="outlined-basic" label="Additional Courses" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setScore(event.target.value)} id="outlined-basic" label="Overall Score %" variant="outlined" />

                    <Button onClick={postData} variant="contained">Create</Button>
                </FormControl>
            </Grid>
        </Grid >

    )
}

export default CreateStudent
