import LazyLoadImage from "../LazyLoad/LazyLoadImage.Component";
import './CharacterInfo.Style.scss';

const CharacterInfo = ({ image, name, info = {} }) => {
    const entries = Object.entries(info);

    return (
        <div className="character-info">
            <div className="character-info__preview">
                <LazyLoadImage
                    src={image}
                    alt="character avatar"
                    containerClass={"character-info__avatar"}
                />
                <h1 className="character-info__name">{name}</h1>
            </div>
            {!!entries.length && (
                <div className="character-info__details">
                    <h2>Informations</h2>
                    <ul className="character-info__details-list">
                        {entries.map(([key, value]) => {
                            return (
                                <li key={key} className="character-info__block">
                                    <h3>{key}</h3>
                                    <span>
                                        {!!value
                                            ? value[0]
                                                  .toString()
                                                  .toUpperCase() +
                                              value.slice(1, value.length)
                                            : "Unknown"}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterInfo;
