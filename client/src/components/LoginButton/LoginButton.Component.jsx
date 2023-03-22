import { useSelector, useDispatch } from "react-redux";
import { openLoginForm } from "../../redux/loginFormSlice";
import { logout } from "../../redux/userAuthSlice";

import './LoginButton.Style.scss';

const LoginButton = () => {
    const loggedOn = useSelector((state) => state.userAuth.loggedOn);
    const openedForm = useSelector((state) => state.loginForm.opened);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!loggedOn) return dispatch(openLoginForm());

        fetch(`${import.meta.env.VITE_API_URL}/auth/logout/`, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
        })
            .then((response) => {
                if (response.status === 200) dispatch(logout());
                else throw new Error("logout has been failed!");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <button
            className={["login-button", loggedOn ? "loggedon" : ""].join(" ")}
            onClick={handleClick}
        >
            <span>{!loggedOn ? "Login" : "Logout"}</span>
        </button>
    );
};

export default LoginButton;
