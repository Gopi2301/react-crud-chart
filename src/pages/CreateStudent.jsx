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
import * as yup from 'yup';

const CreateStudent = () => {
    const navigate = useNavigate()
    const validationSchema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        studentClass: yup.number('Must be Number 1 to 10').min(1).max(10).required(),
        courses: yup.string(),
        score: yup.number().min(1).max(99).required()
    })
    const initialValues = {
        firstName: '',
        lastName: '',
        studentClass: '',
        courses: '',
        score: ''
    }
    const onSubmit = (values) =>
        postData(values);

    const formik = useFormik({
        initialValues, onSubmit, validationSchema
    })




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
                    <TextField name="firstName" className='form__list--item' onChange={formik.handleChange} value={formik.values.firstName} id="outlined-basic" label="Student Name*" variant="outlined" helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null} onBlur={formik.handleBlur} />
                    <TextField name="lastName" className='form__list--item' onChange={formik.handleChange} value={formik.values.lastName} id="outlined-basic" label="Last Name*" variant="outlined" helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null} onBlur={formik.handleBlur} />
                    <TextField name="studentClass" className='form__list--item' onChange={formik.handleChange} value={formik.values.class} id="outlined-basic" label="Student Class*" variant="outlined" helperText={formik.touched.studentClass && formik.errors.studentClass ? formik.errors.studentClass : null} onBlur={formik.handleBlur} />
                    <TextField name="courses" className='form__list--item' onChange={formik.handleChange} value={formik.values.courses} id="outlined-basic" label="Additional Courses" variant="outlined" helperText={formik.touched.courses && formik.errors.courses ? formik.errors.courses : null} onBlur={formik.handleBlur} />
                    <TextField name="score" className='form__list--item' onChange={formik.handleChange} value={formik.values.score} id="outlined-basic" label="Overall Score %*" variant="outlined" helperText={formik.touched.score && formik.errors.score ? formik.errors.score : null} onBlur={formik.handleBlur} />
                    <Button type="submit" disabled={!formik.isValid || formik.isSubmitting} variant="contained">Create</Button>
                </form>
            </Grid>
        </Grid >

    )
}

export default CreateStudent
