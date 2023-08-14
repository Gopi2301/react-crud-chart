import React, { useEffect, useState } from 'react'
import '../../styles/pages/--dashboard.scss'
import { Card, Grid, Typography } from '@mui/material'
import { API_URL } from '../../API/api_url'
import Sidebar from '../sibebar/sidebar'
import axios from 'axios'
const Dashboard = () => {
    const [data, setData] = useState([])
    const ApiCall = async () => {
        try {
            const ApiData = await axios.get(API_URL);
            setData(ApiData.data)

        } catch (error) {
            console.log(error);
        }
    }
    const students = data.filter(user => user.designation === "student");
    const teachers = data.filter(user => user.designation === 'teacher');

    useEffect(() => { ApiCall() }, []);
    return (
        <Grid container spacing={2}>
            <Sidebar />
            <Grid item xs={10}>
                <div className='card'>
                    <Card sx={{ maxWidth: 500 }}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Welcome to Library
                        </Typography>
                        <Typography variant="h5" >
                            WebBie Books
                        </Typography>
                        <Typography variant="body2">
                            Totally <span className='count'>{students.length}</span> No's of Students Now in this Library
                        </Typography>
                        <Typography variant="body2">
                            Totally <span className='count'>{teachers.length}</span> No's of Teachers in this Library
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            The above counts are dynamically counted
                        </Typography>
                    </Card>
                </div>
            </Grid>
        </Grid>
    )
}
export default Dashboard
