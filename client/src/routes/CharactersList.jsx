import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CharacterCard from "../components/CharacterCard/CharacterCard.Component";

import mainPhoto from "../assets/main_photo.png";
import SearchBar from "../components/SearchBar/SearchBar.Component";
import useCharacters from "../hooks/useCharacters";

const saveQuery = (query) => localStorage.setItem("query", query);

const CharactersList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [query, setQuery] = useState(
        searchParams.get("q") ?? ""
    );
    const loadMoreItem = useRef();
    const { loading, setLoading, characters, setPage, hasMore } = useCharacters(
        query,
        loadMoreItem
    );

    const changeQuery = (value) => {
        setQuery(value);
        setPage(1);
        saveQuery(value);
        setSearchParams({
            q: value,
        });
    };

    return (
        <>
            <img src={mainPhoto} alt="main photo" className="main-photo" />
            <SearchBar
                changeQuery={changeQuery}
                initialQuery={query}
                loading={loading}
                setLoading={setLoading}
            />
            <div className="characters-grid">
                {characters.map((character) => {
                    return (
                        <CharacterCard
                            key={character.id}
                            character={character}
                        />
                    );
                })}
            </div>
            <div className="characters-grid-messages" ref={loadMoreItem}>
                <h3>
                    {loading
                        ? "Loading..."
                        : characters.length === 0
                        ? "No character was found for the specified parameters."
                        : !hasMore && "That's all"}
                </h3>
            </div>
        </>
    );
};

export default CharactersList;
