import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';

const Mentor = ({ mentor }) => {
    const { mentorsName, mentorsAppt, mentorsImg, mentorsShortHistory } = mentor
    return (
        <div className='flex justify-between gap-6 shadow-xl p-4 border-2 rounded-md'>
            <div className="avatar">
                <div className="w-20 mask mask-hexagon">
                    <img src={mentorsImg} />
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold text-lg uppercase'>{mentorsName}</h2>
                    <p className="text-xs">{mentorsAppt}</p>
                    <p className='text-xs'>{mentorsShortHistory}</p>
                </div>
                <div className='flex gap-2 my-2'>
                    <span><FaFacebookF className='text-xs text-blue-500'></FaFacebookF></span>
                    <span><RiTwitterXLine className='text-xs text-blue-500'></RiTwitterXLine></span>
                    <span><BsLinkedin className='text-xs text-blue-500'></BsLinkedin></span>
                </div>
            </div>
        </div>
    );
};

export default Mentor;