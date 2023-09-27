import React from 'react';
import Opinion from './Opinion';

const Opinions = () => {
    return (
        <div>
            <div className="py-6">
                <h2 className='text-4xl font-bold text-center text-grat-800 py-4'>Gurdians Opinions</h2>
                <p className='text-md text-gray-700 text-center mx-32'>Want to know more about our university? The feedback submitted by our students is an effective way to show how beneficial the studying at Teachzy university can be.
                </p>
            </div>
            <div>
                <Opinion></Opinion>
            </div>
        </div>
    );
};

export default Opinions;