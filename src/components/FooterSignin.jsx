import React from 'react';
import FooterList from '../components/FooterList';

const FooterSignin = () => {
    return (
        <footer className='pb-10 pt-10 px-10 sm:pt-12 sm:px-12 md:px-14 lg:px-16 bg-[rgba(0,0,0,0.7)] text-white'>
            <div className="w-full md:w-10/12 mx-auto pb-3">
                <p className="mb-7">
                    <a href="" className='text-[#737373] hover:underline'>Questions? Contact us.</a>
                </p>
                <ul className='list-none'>
                    <FooterList text="FAQ" />
                    <FooterList text="Help Center" />
                    <FooterList text="Terms of Use" />
                    <FooterList text="Privacy" />
                    <FooterList text="Cookie Preferences" />
                    <FooterList text="Corporate Information" />
                </ul>
            </div>
        </footer>
    );
}

export default FooterSignin;
