import React from "react";
import "../../styles/components/sidebar.scss";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Grid } from "@mui/material";
const Sidebar = () => {
    return (
        <Grid item xs={2} className="sidebar">
            <div className="logo">
                <Link to="/">
                    Admin
                </Link>

            </div>
            <div>
                <div className="menu"><MenuIcon /></div>

                <ul className="nav">
                    <Link to='/'><li className="nav__item">DashBoard</li></Link>
                    <Divider />
                    <Link to='/createstudent'><li className="nav__item">Create Student</li></Link>
                    <Divider />
                    <Link to='/createteacher'><li className="nav__item">Create Teacher</li></Link>
                    <Divider />
                    <Link to='/studenttable'><li className="nav__item">Student Data</li></Link>
                    <Divider />
                    <Link to='/teachertable'><li className="nav__item">Teacher Data</li></Link>
                    <Divider />

                </ul>
            </div>
        </Grid>
    );
};

export default Sidebar;
