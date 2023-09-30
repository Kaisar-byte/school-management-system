import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { ImLinkedin2 } from 'react-icons/im';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FaFacebookF className='text-lg text-blue-600 shadow-sm'></FaFacebookF>
                    <FaXTwitter className='text-lg text-blue-600 shadow-sm'></FaXTwitter>
                    <ImLinkedin2 className='text-lg text-blue-600 shadow-sm'></ImLinkedin2>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by Star-Shine Institure</p>
            </aside>
        </footer>
    );
};

export default Footer;