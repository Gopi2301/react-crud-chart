import { Typography } from '@mui/material';
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar } from 'recharts';



const Chart = ({ studentsData, teachersData }) => {
    studentsData.sort((studentA, studentB) => {
        if (studentA.studentClass < studentB.studentB) {
            return -1;
        }
        if (studentA.studentClass > studentB.studentClass) {
            return 1;
        }
        return 0
    })
    console.log(teachersData);
    return (
        <div>
            <Typography variant="h5" component="h5">
                Teachers Experience Data
            </Typography>
            <BarChart width={730} height={250} data={teachersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="firstName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="experience" fill="#8884d8" />

            </BarChart>
            <br />
            <Typography variant="h5" component="h5">
                Students Score & Class Data
            </Typography>
            <LineChart width={730} height={250} data={studentsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="firstName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
                <Line type="monotone" dataKey="studentClass" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default Chart
