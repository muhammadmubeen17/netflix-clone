import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LearnMore from './LearnMore';

const LoginhelpForm = () => {

    const email_check = useRef();
    const sms_check = useRef();

    useEffect(() => {

    });

    return (
        <div className='w-[450px] mx-auto mt-9 mb-10'>
            <div className='bg-[#f3f3f3] p-[40px]'>
                <div className="text-[#333]">
                    <h1 className='mb-6 text-[#333] text-3xl font-bold'>Forgot Email/Password</h1>
                    <form action="">
                        <div className="my-5">
                            <span>How would you like to reset your password?</span>
                        </div>
                        <div className="ml-6 reset-password-option">
                            <div className="pl-8 relative">
                                <input defaultChecked ref={email_check} id="email_check" type="radio" value="email_check" name="reset_password" className="absolute left-0 top-0 opacity-0" />
                                <label htmlFor="email_check" className="text-lg text-[#333]">Email</label>
                            </div>
                            <div className="pl-8 relative">
                                <input id="sms_check" ref={sms_check} type="radio" value="sms_check" name="reset_password" className="absolute left-0 top-0 opacity-0" />
                                <label htmlFor="sms_check" className="text-lg text-[#333]">Text Message (SMS)</label>
                            </div>
                        </div>
                        <div id='email_or_sms' className="">
                            <div className="for_email hidden">
                                <p className='mt-3'>We will send you an email with instructions on how to reset your password.</p>
                                <div className="mt-3">
                                    <input type="text" id="email_address" name='email_address' className="block rounded w-full bg-white px-2.5 py-2.5 appearance-none focus:outline-none text-black border border-[#b3b3b3]" placeholder="name@example.com" />
                                </div>
                                <div className="mt-8">
                                    <button className='w-full p-3 font-semibold text-lg rounded-sm btn-blue bg-gradient-blue text-white'>Email Me</button>
                                </div>
                                <div className="mt-5">
                                    <a href="" className='text-[#0080ff] hover:underline'>I don't remember my email or phone.</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <LearnMore linkColor="text-[#999]" linkStyle="underline" textSize="text-base" />
        </div>
    );
}

export default LoginhelpForm;