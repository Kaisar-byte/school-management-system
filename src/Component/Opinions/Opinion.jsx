import React from 'react';
import shukon from "../../assets/images/guardianAvatar/shukon.jpg";

const Opinion = () => {
    return (
        <div className="transition-all">
            <div className="flex flex-col justify-center items-center">
                <img src={shukon} className="w-20 h-20 rounded-full shadow-lg border-2 border-orange-300" alt="" />
                <h2 className='text-lg font-semibold'>Alex Romania</h2>
                <p>A nice plateform to build one career</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={shukon} className="w-20 h-20 rounded-full shadow-lg border-2 border-orange-300" alt="" />
                <h2 className='text-lg font-semibold'>Alex Romania</h2>
                <p>A nice plateform to build one career</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={shukon} className="w-20 h-20 rounded-full shadow-lg border-2 border-orange-300" alt="" />
                <h2 className='text-lg font-semibold'>Alex Romania</h2>
                <p>A nice plateform to build one career</p>
            </div>

        </div>
    );
};

export default Opinion;