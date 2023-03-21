import React, { useEffect, useRef, useState } from "react";

const useObserver = (target, rootMargin) => {
    const observer = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);

    const handleObserve = (entries) => {
        if (entries[0].isIntersecting) {
            setIsIntersecting(true);
        } else {
            setIsIntersecting(false);
        }
    };

    useEffect(() => {
        return () => {
            if (target.current) {
                observer.current.unobserve(target.current);
            }
        };
    }, []);

    useEffect(() => {
        if (target.current) {
            observer.current = new IntersectionObserver(handleObserve, {
                root: null,
                rootMargin,
                threshold: 1.0,
            });
            observer.current.observe(target.current);
        }
    }, [target]);

    return isIntersecting;
};

export default useObserver;
