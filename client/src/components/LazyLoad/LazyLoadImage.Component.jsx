import { useState } from "react";
import './LazyLoad.Style.scss';

const LazyLoadImage = ({ src, alt, containerClass, imgClass }) => {
    const [load, setLoad] = useState(false);

    const handleOnLoad = () => {
        setLoad(true);
    };

    return (
        <div className={["lazy-load-image", containerClass].join(" ")}>
            {!load && <div className="lazy-load-image__preview"></div>}
            <img
                src={src}
                alt={alt}
                onLoad={handleOnLoad}
                style={{ display: load ? "block" : "none" }}
                className={imgClass}
            />
        </div>
    );
};

export default LazyLoadImage;
