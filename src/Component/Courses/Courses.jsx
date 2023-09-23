import React from 'react';
import computer from "../../assets/images/course/computer.jpg";
import spoken from "../../assets/images/course/spoken.jpg";
import programming from "../../assets/images/course/programming.jpg";
import arabic from "../../assets/images/course/arabic.jpg";
import Course from './Course';

const Courses = () => {
    const courses = [
        {
            courseId: 1,
            courseTitle: "Basic Computer Course",
            courseDuration: "01 Month",
            courseImg: computer
        },
        {
            courseId: 2,
            courseTitle: "Spoken English Course",
            courseDuration: "02 Month",
            courseImg: spoken
        },
        {
            courseId: 3,
            courseTitle: "Programming Course",
            courseDuration: "05 Month",
            courseImg: programming
        },
        {
            courseId: 4,
            courseTitle: "Arabic Language Course",
            courseDuration: "07 Month",
            courseImg: arabic
        },

    ]
    return (
        <div className=' px-12 bg-sky-300'>
            <div>
                <h2 className='text-4xl font-bold text-center py-6'>Our Featured Courses</h2>
                <p className='text-md text-center mx-24 pb-14'>Our featured courses are selected through a rigorous process and uniquely created for each semester. They cover a lot of topics and are available both online and offline.</p>
            </div>
            <div className='grid grid-cols-4 gap-4 pb-10'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;