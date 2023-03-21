import { useEffect, useState, useRef } from "react";
import './SearchBar.Style.scss';

const SearchBar = ({ changeQuery, delay = 500, loading, setLoading, initialQuery }) => {
    const searchTimer = useRef();
    const [query, setQuery] = useState(initialQuery);

    const clearSearchTimer = () => {
        if (searchTimer.current) {
            clearTimeout(searchTimer.current);
        }
    }

    useEffect(() => {
        return () => {
           clearSearchTimer();
        }
    }, [])

    const handleChange = (e) => {
        setLoading(true);
        const value = e.target.value;
        setQuery(value);

        clearSearchTimer();

        searchTimer.current = setTimeout(() => {
            changeQuery(value);
        }, delay);
    };

    return (
        <div className="search-bar">
            <div
                className="search-bar__spinner"
                aria-hidden
                hidden={!loading}
            ></div>
            <input
                type="search"
                className={["search-bar__input", loading ? "loading" : ""].join(
                    " "
                )}
                placeholder="Filter by name..."
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
