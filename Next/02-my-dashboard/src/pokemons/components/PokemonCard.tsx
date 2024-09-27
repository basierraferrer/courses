import Image from 'next/image'
import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { IoHeartOutline } from 'react-icons/io5'

interface IPokemonCardProps {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        alt={pokemon.name}
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold capitalize text-gray-50">{pokemon.name}</p>

                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${pokemon.id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link className='px-4 py-2 hover:bg-gray-100 flex' href="/dashboard/main" >
                        <div className="text-red-600">
                            <IoHeartOutline size={24} />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                No es favorito
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
