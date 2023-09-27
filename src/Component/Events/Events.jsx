import React from 'react';
import Event from './Event';
import quiz from "../../assets/images/events/quiz.jpg";
import math from "../../assets/images/events/math.jpg";
import programming from "../../assets/images/events/programming.jpg";

const Events = () => {
    const events = [
        {
            eventId: 1,
            eventName: "Quiz Test",
            eventTiming: "0900 am - 1100 am",
            eventImg: quiz,
            eventFee: 400
        },
        {
            eventId: 2,
            eventName: "Math Competition",
            eventTiming: "1030 am - 1110 am",
            eventImg: math,
            eventFee: 540
        },
        {
            eventId: 3,
            eventName: "Programming Contest",
            eventTiming: "0830 am - 1040 am",
            eventImg: programming,
            eventFee: 1200
        },
    ];
    return (
        <div className='py-10'>
            <div>
                <h2 className='text-4xl text-center py-2 font-bold text-gray-600'>Upcoming Events</h2>
                <p className='text-lg px-20 text-center py-4'>Every week, we organize a variety of events for our students and undergraduates. From webinars to creative events, there are activities that are always worth your attention.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mx-16 mt-10">
                {
                    events.map(event => <Event key={event.id} event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;