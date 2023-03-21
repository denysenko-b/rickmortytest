import { useEffect } from "react";
import useObserver from "../../hooks/useObserver";
import './ScrollTop.Style.scss';

const ScrollTop = ({target}) => {

    const isIntersecting = useObserver(target, `${window.innerHeight}px`);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className={["scroll-top", !isIntersecting ? 'visible' : ''].join(' ')} onClick={handleClick}></button>
    )
}

export default ScrollTop;
