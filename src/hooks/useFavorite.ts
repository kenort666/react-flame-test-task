import type { FavoritePeople } from '@/App';

import { useOutletContext } from 'react-router';

interface FavoriteCtx {
  favorite: FavoritePeople[];
  addNewFavorite: (newFavorite: FavoritePeople) => void;
}

export const useFavorite = () => {
  return useOutletContext<FavoriteCtx>();
};
