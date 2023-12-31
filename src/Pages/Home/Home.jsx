import React from 'react';
import Carousel from '../../Component/Carousel/Carousel';
import Offers from '../../Component/Offer/Offers';
import Courses from '../../Component/Courses/Courses';
import Mentors from '../../Component/Mentors/Mentors';
import Overview from '../../Component/Overview/Overview';
import Events from '../../Component/Events/Events';
import Admission from '../../Component/Admission/Admission';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Offers></Offers>
            <Courses></Courses>
            <Mentors></Mentors>
            <Overview></Overview>
            <Events></Events>
            <Admission></Admission>
        </div>
    );
};

export default Home;