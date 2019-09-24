import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><i className='fa fa-moon-o'></i></span>
            <span className='logo-lg'>
                <i className='fa fa-moon-o'></i>
                <b> Astro</b>Hot
            </span>        
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="javascript:void(0)"
                className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)