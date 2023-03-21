import { useLoaderData } from "react-router-dom";
import { getCharacter } from "rickmortyapi";
import CharacterInfo from '../components/CharacterInfo/CharacterInfo.Component';

export const loader = async ({ params }) => {
    const result = await getCharacter(+params.id);


    if (result.status !== 200) {
        throw new Response("", {
            status: 404,
            statusText: 'Not found',
        });
    }

    return {
        ...result.data,
    };
};

const CharacterProfile = () => {
    const character = useLoaderData();

    const info = {
        Gender: character.gender,
        Status: character.status,
        Specie: character.species,
        Origin: character.origin.name,
        Type: character.type,
    };

    return (
        <CharacterInfo image={character.image} name={character.name} info={info}/>
    );
};

export default CharacterProfile;
