import { Link } from "react-router-dom";
import LazyLoadImage from "../LazyLoad/LazyLoadImage.Component";
import './CharacterCard.Style.scss';

const CharacterCard = ({ character: { id, image, name, species } }) => {
    return (
        <Link to={`/characters/${id}`}>
            <div className="character-card">
                <LazyLoadImage
                    src={image}
                    alt="character preview"
                    containerClass={"character-card__image"}
                />
                <div className="character-card__about">
                    <h3 className="character-card__name">
                        {name.length > 15 ? name.slice(0, 13) + "..." : name}
                    </h3>
                    <span className="character-card__species tiny-text">
                        {species}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;
