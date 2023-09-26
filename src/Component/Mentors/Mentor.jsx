import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';

const Mentor = ({ mentor }) => {
    const { mentorsName, mentorsAppt, mentorsImg } = mentor
    return (
        <div className='flex justify-between gap-2 shadow-xl p-4 bg-blue-500 border-2 rounded-md'>
            <div className="avatar">
                <div className="w-20 mask mask-hexagon">
                    <img src={mentorsImg} />
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
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