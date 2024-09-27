import React from 'react';

import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard';

interface IPokemonGridProps {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: IPokemonGridProps) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map(pokemon =>
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            )}
        </div>
    )
}
