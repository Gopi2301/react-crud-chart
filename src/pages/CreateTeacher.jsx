import React, { useState } from 'react'
import Sidebar from '../components/sibebar/Sidebar'
import { Button, FormControl, Grid, TextField } from '@mui/material'
import { API_URL } from '../API/api_url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';

const CreateTeacher = () => {

    const navigate = useNavigate()
    const initialValues = {
        firstName: '',
        lastName: '',
        subject: '',
        experience: '',
    }
    const validationSchema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        subject: yup.string().required(),
        experience: yup.number().min(1).max(50)
    })
    const onSubmit = (values) => postData(values);




    const formik = useFormik({ initialValues, onSubmit, validationSchema })

    async function postData(values) {
        try {
            await axios.post(API_URL, {
                designation: 'teacher',
                firstName: values.firstName,
                lastName: values.lastName,
                subject: values.subject,
                experience: values.experience,

            },)
            alert('Teacher Added SuccesFully!'), navigate('/teachertable');

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <Grid container spacing={2}>
            <Sidebar />
            <Grid item xs={10} className='main'>
                <form className='form__list' onSubmit={formik.handleSubmit}>
                    <TextField className='form__list--item' onChange={formik.handleChange} value={formik.values.firstName} name="firstName" id="outlined-basic" label="Teacher Name" variant="outlined" helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null} onBlur={formik.handleBlur} />
                    <TextField className='form__list--item' onChange={formik.handleChange} value={formik.values.lastName} name="lastName" id="outlined-basic" label="Last Name" variant="outlined" helperText={formik.touched.firstName && formik.errors.lastName ? formik.errors.lastName : null} onBlur={formik.handleBlur} />
                    <TextField className='form__list--item' onChange={formik.handleChange} value={formik.values.subject} name="subject" id="outlined-basic" label="Subject" variant="outlined" helperText={formik.touched.firstName && formik.errors.subject ? formik.errors.subject : null} onBlur={formik.handleBlur} />
                    <TextField className='form__list--item' onChange={formik.handleChange} value={formik.values.experience} name="experience" id="outlined-basic" label="Experience" variant="outlined" helperText={formik.touched.firstName && formik.errors.experience ? formik.errors.experience : null} onBlur={formik.handleBlur} />

                    <Button type='submit' disabled={!formik.isValid || formik.isSubmitting} variant="contained">Create</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default CreateTeacher
