import { useRouteError } from "react-router-dom";
import sunImage from "../../assets/sun.jpg";

import Header from "../../components/Header/Header.Component";

import "./ErrorPage.Style.scss";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <Header />
            <div id="error-page">
                <h1 className="notfound-title">
                    <span className="notfound-title__left">4</span>
                    <img
                        className="notfound-title__zero"
                        src={sunImage}
                        alt="sun"
                    />
                    <span className="notfound-title__right">4</span>
                </h1>
                <h3 className="notfound-about">
                    The page you are trying to search has been moved to another
                    universe.
                </h3>
            </div>
        </>
    );
};

export default ErrorPage;
