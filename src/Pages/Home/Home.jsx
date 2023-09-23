import React from 'react';
import Carousel from '../../Component/Carousel/Carousel';
import Offers from '../../Component/Offer/Offers';
import Courses from '../../Component/Courses/Courses';
import Mentors from '../../Component/Mentors/Mentors';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Offers></Offers>
            <Courses></Courses>
            <Mentors></Mentors>
        </div>
    );
};

export default Home;