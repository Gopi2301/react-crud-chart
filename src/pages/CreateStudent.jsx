import React, { useState } from 'react'
import Sidebar from '../components/sibebar/Sidebar'
import Form from '@mui/material/FormControl';
import { Alert, Grid, TextField } from '@mui/material';
import '../styles/pages/--createstudent.scss'
import Button from '@mui/material/Button';
import { API_URL } from '../API/api_url'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';


const CreateStudent = () => {
    const designation = "student"
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [studentClass, setStudentClass] = useState();
    const [courses, setCourses] = useState();
    const [score, setScore] = useState();
    const navigate = useNavigate()
    const initialValues = {
        firstName: '',
        lastName: '',
        studentClass: '',
        courses: '',
        score: ''
    }
    const validate = values => {
        let errors = {}
        if (!values.firstName) {
            errors.firstName = "Required"
        }
        if (!values.lastName) {
            errors.lastName = "Required"
        }
        if (!values.studentClass) {
            errors.studentClass = "Required"
        }
        if (!values.courses) {
            errors.courses = "Required"
        }
        if (!values.score) {
            errors.score = "Required"
        }
        return errors
    }
    const onSubmit = (values) => postData(values);
    const formik = useFormik({
        initialValues: initialValues, onSubmit: onSubmit,
        validate: validate
    })
    console.log(formik.touched);


    async function postData(values) {
        try {
            await axios.post(API_URL, {
                designation: 'student',
                firstName: values.firstName,
                lastName: values.lastName,
                studentClass: values.studentClass,
                courses: values.courses,
                score: values.score

            },)
            alert('Student Added SuccesFully!'), navigate('/studenttable');

        } catch (error) {
            console.log(error);
        }

    }

    return (

        <Grid container spacing={2}>
            < Sidebar />
            <Grid item xs={10} className='main'>
                <form className='form__list' onSubmit={formik.handleSubmit}>
                    <TextField name="firstName" className='form__list--item' onChange={formik.handleChange} value={formik.values.firstName} required id="outlined-basic" label="Student Name" variant="outlined" helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null} onBlur={formik.handleBlur} />
                    <TextField name="lastName" className='form__list--item' onChange={formik.handleChange} value={formik.values.lastName} required id="outlined-basic" label="Last Name" variant="outlined" helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null} onBlur={formik.handleBlur} />
                    <TextField name="studentClass" className='form__list--item' onChange={formik.handleChange} value={formik.values.class} required id="outlined-basic" label="Student Class ( 1 to 10)" variant="outlined" helperText={formik.touched.studentClass && formik.errors.studentClass ? formik.errors.studentClass : null} onBlur={formik.handleBlur} />
                    <TextField name="courses" className='form__list--item' onChange={formik.handleChange} value={formik.values.courses} id="outlined-basic" label="Additional Courses" variant="outlined" helperText={formik.touched.courses && formik.errors.courses ? formik.errors.courses : null} onBlur={formik.handleBlur} />
                    <TextField name="score" className='form__list--item' onChange={formik.handleChange} value={formik.values.score} id="outlined-basic" label="Overall Score %" variant="outlined" helperText={formik.touched.score && formik.errors.score ? formik.errors.score : null} onBlur={formik.handleBlur} />

                    <Button type="submit" variant="contained">Create</Button>
                </form>
            </Grid>
        </Grid >

    )
}

export default CreateStudent
