import { useState } from "react";

function FAQsList(props) {
    let hideShow = {
        maxHeight: "0",
        padding: "0 2.5rem",
        overflow: "hidden",
        transition: "all .25s cubic-bezier(.5,0,.1,1)",
    }

    const [active, setActive] = useState(hideShow);
    const [rotate, setRotate] = useState("rotate-45");

    const handleClick = (event) => {
        if (event.target.id == 'closed') {
            hideShow = {
                maxHeight: "1200px",
                padding: "2.5rem",
                transition: "max-height padding .25s cubic-bezier(.5,0,.1,1)",
            }
            setActive(hideShow);
            setRotate("");
            event.target.id = 'open';
        } else {
            hideShow = {
                maxHeight: "0",
                padding: "0 2.5rem",
                overflow: "hidden",
                transition: "all .25s cubic-bezier(.5,0,.1,1)",
            }
            setActive(hideShow);
            setRotate("rotate-45");
            event.target.id = 'closed';
        }
    }
    return (
        <>
            {
                props.question || props.answer ?
                    <li className="faq-list-item text-white mb-2">
                        <button id="closed" className="relative bg-[#303030] faq-question px-8 py-5 text-xl sm:text-2xl md:text-3xl w-full text-left font-[400] border-b-2 border-black" onClick={handleClick}>
                            {props.question ? props.question : ''}
                            <svg
                                id="thin-x"
                                viewBox="0 0 26 26"
                                className={"fill-white w-6 h-6 absolute right-4 top-[50%] transform -translate-x-[45%] -translate-y-[50%] " + rotate}
                                focusable="true"
                            >
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                            </svg>
                        </button>
                        <div className="faq-answer overflow-hidden bg-[#303030] text-xl md:text-2xl" style={active}>
                            <span>
                                {props.answer ? props.answer : ''}
                            </span>
                        </div>
                    </li>
                    : <></>
            }
        </>
    );
}

export default FAQsList;
