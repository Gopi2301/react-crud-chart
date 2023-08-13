import React from 'react'
import '../../styles/components/sidebar.scss'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='nav'>
                <li className='nav__item'><a href="">LOGO</a></li>
                <li className='nav__item'><a href="">DashBoard</a></li>
                <li className='nav__item'><a href="">Create Student</a></li>
                <li className='nav__item'><a href="">Create Teachers</a></li>
            </ul>
        </div>
    )
}

export default Sidebar
