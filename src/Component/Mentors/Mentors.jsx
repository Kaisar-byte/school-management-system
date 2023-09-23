import React from 'react';
import donald from "../../assets/images/avatar/donald.png";
import forge from "../../assets/images/avatar/forge.png";
import kalam from "../../assets/images/avatar/kalam.png";
import ncJule from "../../assets/images/avatar/ncJule.png";
import Mentor from './Mentor';

const Mentors = () => {
    const mentors = [
        {
            mentorsId: 1,
            mentorsName: "Donald Josep",
            mentorsAppt: "Computer Programmer",
            mentorsImg: donald,
            mentorsShortHistory: "Joined SSI as computer programmer since June 2014"
        },
        {
            mentorsId: 2,
            mentorsName: "forge Meterson",
            mentorsAppt: "MERN Developer",
            mentorsImg: forge,
            mentorsShortHistory: "Joined SSI as MERN Developer since August 2018"
        },
        {
            mentorsId: 3,
            mentorsName: "Abdul Kalam",
            mentorsAppt: "Arabic Tutor",
            mentorsImg: kalam,
            mentorsShortHistory: "Joined SSI as Arabic Language Tutor since Sep 2020"
        },
        {
            mentorsId: 4,
            mentorsName: "NC Julifer",
            mentorsAppt: "English Tutor",
            mentorsImg: ncJule,
            mentorsShortHistory: "Joined SSI as English Spoken Language Tutor since January 2020"
        },
    ]
    return (
        <div className='p-12'>
            <div>
                <h2 className='text-center text-4xl text-gray-600 font-bold py-4'>Our Mentors</h2>
                <p className='text-center text-lgtext-gray-600  py-4 pb-12'>We employ highly experienced and qualified teachers who set the ground for all our programs and courses. They are aimed to help you achieve more on your path to success.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor}></Mentor>)
                }
            </div>

        </div>
    );
};

export default Mentors;