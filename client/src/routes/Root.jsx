import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.Component";
import ScrollTop from "../components/ScrollTop/ScrollTop.Component";
import LoginForm from "../components/LoginForm/LoginForm.Component";
import useAuth from "../hooks/useAuth";

const Root = () => {
    const headerRef = useRef();
    useAuth();

    return (
        <>
            <Header ref={headerRef} />
            <div className="container">
                <Outlet />
            </div>
            <ScrollTop target={headerRef} />
            <LoginForm />
        </>
    );
};

export default Root;
