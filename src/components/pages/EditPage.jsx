import React, { useEffect, useState } from 'react'
import Sidebar from '../sibebar/sidebar'
import { Button, FormControl, TextField } from '@mui/material'
import axios from 'axios'
import { API_URL } from '../../API/api_url'
import { useNavigate } from 'react-router-dom'

const EditPage = () => {
    const [designation, setDesignation] = useState('');
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [courses, setCourses] = useState('')
    const [score, setScore] = useState('');
    const [subject, setSubject] = useState('');
    const [experience, setExperience] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        setId(localStorage.getItem('id'))
        setDesignation(localStorage.getItem('designation'));
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setStudentClass(localStorage.getItem('studentClass'));
        setCourses(localStorage.getItem('courses'));
        setScore(localStorage.getItem('score'));
        setSubject(localStorage.getItem('subject'));
        setExperience(localStorage.getItem('experience'));
    }, [])
    const updateUser = async () => {
        try {
            await axios.put(API_URL + '/' + id, {
                firstName,
                lastName,
                studentClass,
                courses,
                score,
                subject,
                experience
            }, navigate('/'))
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='col container'>
            <Sidebar />
            <div className='form'>

                {(designation === "student") ? (<FormControl className='form__list'>
                    <TextField className='form__list--item' value={firstName} onChange={event => setFirstName(event.target.value)} required id="outlined-basic" label="Student Name" variant="outlined" />
                    <TextField className='form__list--item' value={lastName} onChange={event => setLastName(event.target.value)} required id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField className='form__list--item' value={studentClass} onChange={event => setStudentClass(event.target.value)} required id="outlined-basic" label="Student Class ( 1 to 10)" variant="outlined" />
                    <TextField className='form__list--item' value={courses} onChange={event => setCourses(event.target.value)} id="outlined-basic" label="Additional Courses" variant="outlined" />
                    <TextField className='form__list--item' value={score} onChange={event => setScore(event.target.value)} id="outlined-basic" label="Overall Score %" variant="outlined" />

                    <Button onClick={() => updateUser()} variant="contained">Update</Button>
                </FormControl>) : (<FormControl className='form__list'>
                    <TextField className='form__list--item' onChange={event => setFirstName(event.target.value)} value={firstName} required id="outlined-basic" label="Teacher Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setLastName(event.target.value)} value={lastName} required id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setSubject(event.target.value)} value={subject} required id="outlined-basic" label="Subject" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setExperience(event.target.value)} value={experience} id="outlined-basic" label="Experience" variant="outlined" />

                    <Button onClick={() => updateUser()} variant="contained">Update</Button>
                </FormControl>)}


            </div>
        </div>
    )
}

export default EditPage
