import { useEffect } from "react";
import useObserver from "../../hooks/useObserver";
import "./ScrollTop.Style.scss";

import scrollTopImage from "../../assets/scrolltop.png";

const ScrollTop = ({ target }) => {
    const isIntersecting = useObserver(target, `${window.innerHeight}px`);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={["scroll-top", !isIntersecting ? "visible" : ""].join(
                " "
            )}
            onClick={handleClick}
        >
            <img
                src={scrollTopImage}
                alt="Scroll top"
                className="scroll-top__image"
            />
        </div>
    );
};

export default ScrollTop;
