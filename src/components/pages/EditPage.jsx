import React from 'react'
import Sidebar from '../sibebar/sidebar'
import { Button, FormControl, TextField } from '@mui/material'

const EditPage = () => {
    return (
        <div className='col container'>
            <Sidebar />
            <div className='form'>
                <FormControl className='form__list'>
                    <TextField className='form__list--item' onChange={event => setFirstName(event.target.value)} required id="outlined-basic" label="Student Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setLastName(event.target.value)} required id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setStudentClass(event.target.value)} required id="outlined-basic" label="Student Class ( 1 to 10)" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setCourses(event.target.value)} id="outlined-basic" label="Additional Courses" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setScore(event.target.value)} id="outlined-basic" label="Overall Score %" variant="outlined" />

                    <Button variant="contained">Create</Button>
                </FormControl>
                <FormControl className='form__list'>
                    <TextField className='form__list--item' onChange={event => setFirstName(event.target.value)} required id="outlined-basic" label="Teacher Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setLastName(event.target.value)} required id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setSubject(event.target.value)} required id="outlined-basic" label="Subject" variant="outlined" />
                    <TextField className='form__list--item' onChange={event => setExperience(event.target.value)} id="outlined-basic" label="Experience" variant="outlined" />

                    <Button variant="contained">Create</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default EditPage
