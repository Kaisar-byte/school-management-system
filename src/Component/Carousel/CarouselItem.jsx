import React from 'react';

const CarouselItem = ({ carousel }) => {
    const { titleId, titleName, titleParagraph, titleImg } = carousel
    return (
        <div id={titleId} className="carousel-item w-full mx-10 flex justify-center items-center bg-orange-300">
            <div className='flex flex-col justify-center items-start pl-14'>
                <h2 className="text-5xl font-bold text-green-900">{titleName}</h2>
                <p className='text-2xl mt-4 text-orange-800 '>{titleParagraph}</p>
                <button className='btn btn-primary mt-4'>Login</button>
            </div>
            <img src={titleImg} className="w-96 h-80 rounded-xl border-2 m-10 mr-20" />
        </div>
    );
};

export default CarouselItem;