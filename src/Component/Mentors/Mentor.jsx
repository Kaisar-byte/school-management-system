import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';

const Mentor = ({ mentor }) => {
    const { mentorsName, mentorsAppt, mentorsImg } = mentor
    return (
        <div className='flex justify-start gap-2 shadow-xl p-4 bg-red-300 border-2 rounded-md'>
            <div className="avatar mask mask-hexagon w-20">
                <img src={mentorsImg} />
            </div>
            <div className='ml-6'>
                <div className='flex flex-col '>
                    <h2 className='font-semibold text-lg uppercase pr-2'>{mentorsName}</h2>
                    <p className="text-xs">{mentorsAppt}</p>
                </div>
                <div className='flex gap-2 my-2'>
                    <span><FaFacebookF className='text-xs text-white'></FaFacebookF></span>
                    <span><RiTwitterXLine className='text-xs text-white'></RiTwitterXLine></span>
                    <span><BsLinkedin className='text-xs text-white'></BsLinkedin></span>
                </div>
            </div>
        </div>
    );
};

export default Mentor;