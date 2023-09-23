import React from 'react';
import icon1 from "../../assets/icons/online.png";
import icon2 from "../../assets/icons/course.png";
import icon3 from "../../assets/icons/event.png";
import OfferTab from './OfferTab';

const Offers = () => {
    const offers = [
        {
            offerId: 1,
            offerTitle: "Online Education",
            offerDetails: "Teachzy provides online education services with all learning materials and lectures available to you.",
            offerImg: icon1
        },
        {
            offerId: 2,
            offerTitle: "Programs & Courses",
            offerDetails: "We offer a wide range of courses and programs that encompass lots of knowledge spheres.",
            offerImg: icon2
        },
        {
            offerId: 3,
            offerTitle: "Campus Events",
            offerDetails: "Our campus is the hub to a talented and diverse student community that turns opportunities into success.",
            offerImg: icon3
        },
    ]
    return (
        <div>
            <div className='my-10'>
                <h4 className='text-5xl text-gray-800 font-bold text-center mb-4'>What We Offer</h4>
                <p className='text-center text-lg px-20 mb-6'>Star Shine Institute the best of education and entertainment opportunities available in the area. We are glad to take care of every student and university entrant.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-14'>
                {
                    offers.map(offerTab => <OfferTab key={offerTab.id} offerTab={offerTab}></OfferTab>)
                }
            </div>
        </div>
    );
};

export default Offers;