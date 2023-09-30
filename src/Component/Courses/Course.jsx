import React from 'react';
import { Link } from 'react-router-dom';
import time from "../../assets/images/course/time.png";

const Course = ({ course }) => {
    const { courseId, courseTitle, courseDuration, courseImg } = course
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card w-50 bg-base-100 shadow-xl">
            <figure>
                <img src={courseImg} alt="" />
            </figure>
            <div className="">
                <h2 className="text-lg font-semibold text-center py-4">{courseTitle}</h2>
                <div className="flex justify-between items-center px-4 pb-4">
                    <div className='flex justify-center items-center'>
                        <img src={time} className="w-4 h-4" alt="" /> <span className='text-sm'>: {courseDuration}</span>
                    </div>
                    <Link to="/" className="bg-orange-600 px-2 rounded-sm text-white text-sm hover:bg-orange-900">Enroll Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;