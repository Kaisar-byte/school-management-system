import React from 'react';
import img1 from "../../assets/images/sliderImg1.jpg";
import img2 from "../../assets/images/sliderImg2.jpg";
import img3 from "../../assets/images/sliderImg3.jpg";
import img4 from "../../assets/images/sliderImg4.jpg";
import CarouselItem from './CarouselItem';
const Carousel = () => {
    const carouselItems = [
        {
            titleId: "item1",
            titleName: "Qualified Mentor",
            titleParagraph: "Our qualified mentors ready to teach a new era learning lesson to build your carrer.",
            titleImg: img1
        },
        {
            titleId: "item2",
            titleName: "Co-operative Tutor",
            titleParagraph: "Your one and only co-operative tutor to build your carrer.",
            titleImg: img2
        },
        {
            titleId: "item3",
            titleName: "Innovational Environment",
            titleParagraph: "Our institute offer you a innovational environment ot learn",
            titleImg: img3
        },
        {
            titleId: "item4",
            titleName: "Certification on Completion",
            titleParagraph: "Grab your certification after on time finish course",
            titleImg: img4
        }
    ];
    return (
        <div>
            <div className="carousel w-full h-full">
                {
                    carouselItems.map(carousel => <CarouselItem key={carousel.titleId} carousel={carousel}></CarouselItem>)
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs border-2 rounded-full bg-gray-300 hover:border-orange-600">1</a>
                <a href="#item2" className="btn btn-xs rounded-full  bg-gray-300  hover:border-orange-600">2</a>
                <a href="#item3" className="btn btn-xs rounded-full bg-gray-300  hover:border-orange-600">3</a>
                <a href="#item4" className="btn btn-xs rounded-full bg-gray-300  hover:border-orange-600">4</a>
            </div>
        </div>
    );
};

export default Carousel;