import React from 'react'
import { useState } from 'react';

function LearnMore(props) {

    let hideShow = {
        visibilily: "hidden",
        opacity: "0",
        transition: "all .25s cubic-bezier(.5,0,.1,1)",
    };

    let showHide = {};
    const [visibilily, setvisibilily] = useState(hideShow);
    const [btnvisibilily, setbtnvisibilily] = useState(showHide);
    const learnMore = (event) => {
        hideShow = {
            visibilily: "visible",
            opacity: "1",
            transition: "max-height padding .25s cubic-bezier(.5,0,.1,1)",
        };
        showHide = {
            display: "none",
        };
        setvisibilily(hideShow);
        setbtnvisibilily(showHide);
    }

    let hrefColor;
    let hrefStyle;
    let textSize;

    props.linkColor ? hrefColor = props.linkColor : hrefColor = 'text-[#0080ff]';
    props.linkStyle ? hrefStyle = props.linkStyle : hrefStyle = '';
    props.textSize ? textSize = props.textSize : textSize = 'text-sm';


    return (
        <>
            <div className={"h-40 " + textSize}>
                <div className="mt-3">
                    <p className={'text-[#8c8c8c] leading-[1.3] ' + textSize}>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        &nbsp;
                        <button type='button' className={'hover:underline ' + hrefStyle + ' ' + hrefColor} style={btnvisibilily} onClick={learnMore}>Learn more.</button>
                    </p>
                </div>
                <div className={"overflow-hidden text-[#8c8c8c] leading-[1.3] mt-3 " + textSize} style={visibilily}>
                    The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank" className={'hover:underline ' + hrefStyle + ' ' + hrefColor}>Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" className={'hover:underline ' + hrefStyle + ' ' + hrefColor}>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                </div>
            </div>
        </>
    )
}

export default LearnMore;