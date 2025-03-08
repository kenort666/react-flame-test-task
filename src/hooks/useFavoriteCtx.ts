import type { FavoritePeople } from '@/pages';
import { useOutletContext } from 'react-router';

interface FavoriteCtx {
  favorite: FavoritePeople[];
  addFavorite: (people: FavoritePeople) => void;
  removeFavorite: (name: string) => void;
}

export const useFavoriteCtx = () => {
  return useOutletContext<FavoriteCtx>();
};
