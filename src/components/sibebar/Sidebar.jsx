import React from "react";
import "../../styles/components/sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <Link to="/">Admin</Link>

            </div>
            <div>
                <ul className="nav">

                    <Link to='/'><li className="nav__item">DashBoard</li></Link>
                    <Link to='/createstudent'><li className="nav__item">Create Student</li></Link>
                    <Link to='/createteacher'><li className="nav__item">Create Teacher</li></Link>
                    <Link to='/studenttable'><li className="nav__item">Student Data</li></Link>
                    <Link to='/teachertable'><li className="nav__item">Teacher Data</li></Link>

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
