import { useState, useEffect } from 'react';
import useObserver from "../hooks/useObserver";
import { getCharacters } from "rickmortyapi";

const useCharacters = (query, loadMoreItem) => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    const isIntersecting = useObserver(loadMoreItem, "300px");

    useEffect(() => {
        setCharacters([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(null);
        getCharacters({ name: query, page })
            .then((res) => {
                setCharacters((prev) => [
                    ...prev,
                    ...(res.data.results ? res.data.results : []),
                ]);
                setHasMore(!!res.data.results);
            })
            .catch(e => {
                setError(e);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [query, page]);

    useEffect(() => {
        if (hasMore && !loading) {
            setPage((prev) => prev + 1);
        }
    }, [isIntersecting]);

    return {
        loading,
        setLoading,
        characters,
        setCharacters,
        hasMore,
        setHasMore,
        page,
        setPage,

        error
    };
}

export default useCharacters;
