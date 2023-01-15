import React from 'react';

const FooterList = ( props ) => {
    return (
        <li className='w-6/12 md:w-4/12 lg:w-1/4 mb-2 text-[13px] inline-block'>
            <a href="" className='text-[#737373] hover:underline'>{props.text}</a>
        </li>
    );
}

export default FooterList;
