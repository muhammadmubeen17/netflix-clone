import React from 'react';
import FooterList from '../components/FooterList';

const FooterSignup = () => {
    return (
        <footer className='pt-12 px-10 sm:pt-14 sm:px-12 md:pt-16 md:px-14 lg:pt-20 lg:px-16 text-white'>
            <div className="w-full md:w-10/12 mx-auto pb-3">
                <p className="mb-7">
                    <a href="" className='text-[#737373] hover:underline'>Questions? Contact us.</a>
                </p>
                <ul className='list-none'>
                    <FooterList text="FAQ" />
                    <FooterList text="Help Center" />
                    <FooterList text="Account" />
                    <FooterList text="Media Center" />
                    <FooterList text="Investor Relations" />
                    <FooterList text="Jobs" />
                    <FooterList text="Ways to Watch" />
                    <FooterList text="Terms of Use" />
                    <FooterList text="Privacy" />
                    <FooterList text="Cookie Preferences" />
                    <FooterList text="Corporate Information" />
                    <FooterList text="Contact Us" />
                    <FooterList text="Speed Test" />
                    <FooterList text="Legal Notices" />
                    <FooterList text="Only on Netflix" />
                </ul>
                <p className="footer-country mt-4 mb-3 text-[#737373] text-[13px]">Netflix Pakistan</p>
            </div>
        </footer>
    );
}

export default FooterSignup;
