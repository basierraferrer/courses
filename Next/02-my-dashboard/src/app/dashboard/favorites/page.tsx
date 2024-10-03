import { PokemonGrid } from "@/modules/pokemons";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Favorites',
    description: 'My pokemons favorites'
}

export default async function FavoritesPokemonsPage() {

    return (
        <div className="p-2 flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemóns <small className="text-blue-500">favoritos</small></span>

            <PokemonGrid pokemons={[]} />

        </div>
    );
}