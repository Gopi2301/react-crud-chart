import React from 'react'
import Sidebar from '../sibebar/Sidebar'
import FormControl from '@mui/material/FormControl';
import { FormHelperText, TextField } from '@mui/material';
const CreateStudent = () => {
    return (

        <div className='col'>
            <div><Sidebar /></div>
            <div>
                <FormControl>
                    <TextField required id="outlined-basic" label="Student Name" variant="outlined" />
                    <TextField required id="outlined-basic" label="Student Class" variant="outlined" />
                    <TextField id="outlined-basic" label="Additional Courses" variant="outlined" />

                </FormControl>
            </div>
        </div>

    )
}

export default CreateStudent
