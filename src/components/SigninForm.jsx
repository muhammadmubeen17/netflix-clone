import React from 'react';
import { Link } from 'react-router-dom';
import LearnMore from './LearnMore';

const SigninForm = () => {
    return (
        <div className='w-[450px] mx-auto bg-[rgba(0,0,0,0.8)] px-16 pt-14 pb-10 mt-10 mb-24'>
            <div className="text-white">
                <h1 className='mb-6 text-3xl font-bold'>Sign In</h1>
                <form action="">
                    <div className="mb-4">
                        <div className="relative">
                            <input type="text" id="email_address" name='email_address' className="block rounded pt-6 px-5 w-full h-[50px] leading-[50px] text-sm bg-transparent appearance-none text-white focus:outline-none focus:ring-0 peer bg-[#333]" placeholder=" " />
                            <label htmlFor="email_address" className="absolute text-xs md:text-sm text-[#8c8c8c] duration-300 transform -translate-y-6 scale-90 top-4 left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-3 peer-focus:-translate-x-2 z-10">Email or phone number</label>
                        </div>
                        <p id='hint_email' className="mt-2 text-sm text-[#e87c03]"></p>
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <input type="text" id="password" name='password' className="block rounded pt-6 px-5 w-full h-[50px] leading-[50px] text-sm bg-transparent appearance-none text-white focus:outline-none focus:ring-0 peer bg-[#333]" placeholder=" " />
                            <label htmlFor="password" className="absolute text-xs md:text-sm text-[#8c8c8c] duration-300 transform -translate-y-6 scale-90 top-4 left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-3 peer-focus:-translate-x-2 z-10">Password</label>
                        </div>
                        <p id='hint_pass' className="mt-2 text-sm text-[#e87c03]"></p>
                    </div>
                    <div className="mt-10 mb-3">
                        <button className='w-full p-3 font-bold rounded-md bg-[#e50914] text-white'>Sign In</button>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 rounded" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm text-[#b3b3b3]">Remeber me</label>
                        </div>
                        <div className="text-right">
                            <Link to="/pk/LoginHelp" className='text-[#b3b3b3] hover:underline text-sm'>Need help?</Link>
                        </div>
                    </div>
                    <div className="text-[#737373] mt-12">
                        New to Netflix?
                        <Link to="/" className='pl-1 text-white hover:underline'>Sign up now</Link>
                    </div>
                    <LearnMore linkColor="" linkStyle="" />
                </form>
            </div>
        </div>
    );
}

export default SigninForm;
