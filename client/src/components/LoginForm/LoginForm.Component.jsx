import { useSelector, useDispatch } from "react-redux";
import { closeLoginForm } from "../../redux/loginFormSlice";

import GoogleLogo from "../../assets/google.png";
import FacebookLogo from "../../assets/facebook.png";
import GithubLogo from "../../assets/github.png";
import DiscordLogo from "../../assets/discord.png";

import './LoginForm.Style.scss';

const providers = [
    ["google", GoogleLogo, '#df4930'],
    ["facebook", FacebookLogo, '#507cc0'],
    ["github", GithubLogo, 'black'],
    ["discord", DiscordLogo, '#7289da'],
];

const LoginForm = () => {
    const loggedOn = useSelector((state) => state.userAuth.loggedOn);
    const openedForm = useSelector((state) => state.loginForm.opened);
    const dispatch = useDispatch();

    return (
        <div
            className={[
                "login-form__container",
                openedForm && !loggedOn ? "opened" : "close",
            ].join(" ")}
            onClick={() => dispatch(closeLoginForm())}
        >
            <div
                className="login-form__inner"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <h2 className="login-form__inner-message">Welcome back.</h2>
                <div className="login-form__list">
                    {providers.map(([provider, logo, backgroundColor]) => (
                        <button
                            className="login-form__button"
                            onClick={() => window.open(`${
                                import.meta.env.VITE_API_URL
                            }/auth/${provider}`, "_self")
                            }
                            style={{backgroundColor}}
                            key={provider}
                        >
                            <img
                                src={logo}
                                alt=""
                                className="login-form__button-icon"
                            />
                            {provider}
                        </button>
                    ))}
                </div>
                <div
                    className="login-form-cross"
                    onClick={() => dispatch(closeLoginForm())}
                ></div>
            </div>
        </div>
    );
};

export default LoginForm;
