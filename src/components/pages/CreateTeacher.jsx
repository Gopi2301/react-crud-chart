import React, { useState } from 'react'
import Sidebar from '../sibebar/Sidebar'
import { Button, FormControl, TextField } from '@mui/material'
import { API_URL } from '../../API/api_url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateTeacher = () => {
    const designation = "teacher";
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [experience, setExperience] = useState('');
    const navigate = useNavigate()
    const postData = async () => {
        try {
            await axios.post(API_URL, {
                designation,
                firstName,
                lastName,
                subject,
                experience
            }, alert('Teacher Created SuccessFully'),
                navigate('/'))
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <div><Sidebar /></div>
            <div className='form'>
                <FormControl className='form__list'>
                    <TextField className='form__list--item' onChange={event => setFirstName(event.target.value)} required id="outlined-basic" label="Teacher Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setLastName(event.target.value)} required id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setSubject(event.target.value)} required id="outlined-basic" label="Subject" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setExperience(event.target.value)} id="outlined-basic" label="Experience" variant="outlined" />

                    <Button onClick={postData} variant="contained">Create</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default CreateTeacher
