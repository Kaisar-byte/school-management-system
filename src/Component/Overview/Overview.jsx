import React from 'react';
import siteInfo from "../../assets/images/siteinfo.jpg";
import { PiStudentFill } from 'react-icons/pi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { BiSolidSchool } from 'react-icons/bi';

const Overview = () => {
    return (
        <div className='flex h-96  bg-amber-500'>
            <div data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className='w-3/5 pt-4 p-8'>
                <div>
                    <h2 className='text-4xl font-bold py-4 '>Institute Overview</h2>
                    <p className='text-lg'>Star Shine offers quality education helping you build your future career. Here just some of the facts that show why students choose us.</p>
                </div>
                <div className='grid grid-cols-2 pl-10 gap-y-8 gap-x-6 mt-8 text-gray-900'>
                    <div className='flex gap-2 items-center '>
                        <FaPeopleGroup className='text-4xl text-gray-800'></FaPeopleGroup>
                        <div className='pl-4'>
                            <p className='text-3xl font-bold'>700</p>
                            <p className='text-2xl font-bold'>Students</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <PiStudentFill className='text-5xl text-gray-750'></PiStudentFill>
                        <div className='pl-4'>
                            <p className='text-3xl font-bold'>94%</p>
                            <p className='text-2xl font-bold'>Graduate</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <GiTeacher className='text-5xl text-gray-800'></GiTeacher>
                        <div className='pl-4'>
                            <p className='text-3xl font-bold'>37</p>
                            <p className='text-2xl font-bold'>Mentors</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <BiSolidSchool className='text-5xl text-gray-800'></BiSolidSchool>
                        <div className='pl-4'>
                            <p className='text-3xl font-bold'>08</p>
                            <p className='text-2xl font-bold'>Campus</p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                data-aos="fade-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                src={siteInfo} className='w-2/5' alt="" />
        </div >
    );
};

export default Overview;