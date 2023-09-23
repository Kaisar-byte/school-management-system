import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div>
                    <Link to="/">
                        <p className='font-semibold'>Star-<span className="text-red-400">Shine</span></p>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <nav className='flex justify-center gap-4'>
                    <Link to="/">Home</Link>
                    <Link to="/acedimics">Acedemics</Link>
                    <Link to="/history">History</Link>
                    <Link to="/tutor">Tutor</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
            </div>
            <div className="navbar-end flex">
                <Link to="/login" className='mr-5'>Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default NavBar;