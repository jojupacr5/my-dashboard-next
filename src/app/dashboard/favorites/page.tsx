import { FavoritePokemons } from "@/pokemons/";


export const metadata = {
 title: 'Favoritos',
 description: 'Mis pokemos favoritos',
};

export default function FavoritesPage() {
  
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 ">Pokemons favoritos <small className="text-blue-500">Global State</small></span>

      <FavoritePokemons />
    </div>
  )
}

