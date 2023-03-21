import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginButton from "../LoginButton/LoginButton.Component";
import LazyLoadImage from "../LazyLoad/LazyLoadImage.Component";
import userIcon from '../../assets/user-icon.png';

import './UserPanelSection.Component.scss';

const UserPanelSection = () => {
    const { photo, name, loggedOn } = useSelector((state) => state.userAuth);

    return (
        <div className="user-panel-section">
            {loggedOn && (
                <Link to={"/profile"}>
                    <LazyLoadImage src={photo ?? userIcon} alt={name} containerClass={"user-panel-section__icon"}/>
                </Link>
            )}
            <LoginButton />
        </div>
    );
};

export default UserPanelSection;
