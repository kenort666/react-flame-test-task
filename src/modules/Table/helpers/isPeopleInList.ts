import type { FavoritePeople } from '@/app/App';

export const isPeopleInFavorites = (favorite: FavoritePeople[], people: PeopleInfo) => {
  return favorite.some((item: FavoritePeople) => item.name === people.name);
};
