import React from 'react';
import GetStarted from './GetStarted';

const Header = (props) => {
    return (
        <section id='header-section' className="flex flex-col justify-center lg:px-10 text-center translate-y-1/4 md:translate-y-[40%] lg:translate-y-2/4">
            <div className="mb-6 md:mb-8">
                <h2 className="font-semibold md:font-bold text-white text-3xl md:text-4xl lg:text-5xl sm:w-8/12 md:w-7/12 lg:w-6/12 px-4 md:px-3 mx-auto">{props.heading}</h2>
                <p className="mt-5 text-white text-xl md:text-2xl font-semibold">{props.para}</p>
            </div>
            <div className="w-10/12 mx-auto">
                <GetStarted />
            </div>
        </section>
    );
}

export default Header;
