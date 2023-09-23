import React from 'react';

const OfferTab = ({ offerTab }) => {
    const { offerTitle, offerDetails, offerImg } = offerTab;
    return (
        <div className="text-center pb-32">
            <img src={offerImg} className="w-14 py-4 mx-auto" alt="" />
            <h2 className="text-xl font-bold text-gray-600 py-2">{offerTitle}</h2>
            <p className="text-center font-lg text-gray-600 px-4">{offerDetails}</p>
        </div>
    );
};

export default OfferTab;