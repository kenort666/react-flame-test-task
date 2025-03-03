import type { FavoritePeople } from '@/pages';

export const isPeopleInFavorites = (people: PeopleInfo, favorite: FavoritePeople[]) => {
  return favorite.some((favorite) => people.name === favorite.name);
};
