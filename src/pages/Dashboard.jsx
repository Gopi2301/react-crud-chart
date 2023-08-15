import React, { useEffect, useState } from 'react'
import '../styles/pages/--dashboard.scss'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { API_URL } from '../API/api_url'
import Sidebar from '../components/sibebar/Sidebar'
import axios from 'axios'
import Chart from '../components/chart/Chart'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

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
    const studentsData = [...students]
    const teachersData = [...teachers]

    useEffect(() => { ApiCall() }, []);
    return (
        <Grid container spacing={2}>
            <Sidebar />
            <Grid className='main' item xs={10}>
                <Card className="chart" sx={{ maxWidth: 720 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            Library Dashboard
                        </Typography>
                        <Chart studentsData={studentsData} teachersData={teachersData} />
                        <Typography variant="body2" color="text.secondary">

                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard
