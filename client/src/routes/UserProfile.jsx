import { useSelector } from "react-redux";
import CharacterInfo from '../components/CharacterInfo/CharacterInfo.Component';
import {useNavigate} from 'react-router-dom';
import userIcon from '../assets/user-icon.png';
import { useEffect } from "react";

const UserProfile = () => {
    const {loggedOn, name, photo} = useSelector(state => state.userAuth);
    const navigate = useNavigate();


    useEffect(() => {
        if (!loggedOn) {
            navigate('/');
        }
    }, [loggedOn])

    return (
        <CharacterInfo image={photo ?? userIcon} name={name}/>
    )
}

export default UserProfile;
