import React from 'react';
import meeting from "../../assets/images/events/parents-meeting.jpg";
import { BiDollar } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Event = ({ event }) => {
    const { eventId, eventName, eventTiming, eventImg, eventFee } = event
    return (
        <div data-aos="zoom-in-left"
            data-aos-anchor-placement="bottom-center"
            className='w-72'>
            <img src={eventImg} className='rounded-lg' alt="" />
            <div className='mx-2'>
                <div className='flex justify-between font-semibold text-lg my-4'>
                    <h2>{eventName}</h2>
                    <div className='flex items-center'>
                        <BiDollar></BiDollar>
                        <p>{eventFee}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <MdOutlineWatchLater className='text-lg text-orange-500 '></MdOutlineWatchLater>
                        <p>{eventTiming}</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <ImLocation className='text-lg text-orange-500 '></ImLocation>
                        <p>Adamjee Cantt Public School</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;