import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import UserPanelSection from "../UserPanelSection/UserPanelSection.Component";
import "./Header.Style.scss";

const Header = ({}, ref) => {
    const location = useLocation();
    const [params, setParams] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const q = localStorage.getItem("query");
        setParams(q ? `?q=${q}` : "");
    }, [location]);

    return (
        <header ref={ref}>
            {location.pathname !== "/" && (
                <button className="go-back"
                onClick={() => navigate(-1)}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                            fill="black"
                        />
                    </svg>
                    <span>Go back</span>
                </button>
            )}
            <UserPanelSection />
        </header>
    );
};

export default React.forwardRef(Header);
