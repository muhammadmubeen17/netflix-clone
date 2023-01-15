import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function GetStarted(props) {

    const [Email, setEmail] = useState("");
    console.log(Email);

    return (
        <div className="px-4 sm:px-8 md:px-0">
            <h3 className="text-white text-center text-lg md:text-xl mb-5">
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className="w-full md:w-[680px] mx-auto">
                <div className="grid grid-cols-7">
                    <div className="col-span-7 md:col-span-5">
                        <div className="relative">
                            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} id="email_address" className="block pt-6 pb-2 md:pt-7 md:pb-3 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer bg-white" placeholder=" " />
                            <label htmlFor="email_address" className="absolute text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-5 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:font-semibold peer-focus:-translate-y-3 z-10">Email address</label>
                        </div>
                    </div>
                    <div className="col-span-7 md:col-span-2 text-center mt-5 md:mt-0">
                        <button className="bg-[#e50914] w-3/6 py-3 rounded md:rounded-none md:p-0 md:w-full h-full text-white text-lg md:text-2xl">
                            Get Started <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;